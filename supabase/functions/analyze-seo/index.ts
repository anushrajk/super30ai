import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders, handleCorsPreFlight } from "../_shared/cors.ts";

interface SEOAnalysisRequest {
  url: string;
  leadId?: string;
}

// Error code mapping for user-friendly messages
const ERROR_MESSAGES: Record<string, { message: string; suggestion: string }> = {
  'CONNECTION_FAILED': {
    message: 'Unable to connect to the website.',
    suggestion: 'The server may be down, blocking analysis tools, or behind a firewall. Please verify the site is accessible.'
  },
  'DNS_FAILURE': {
    message: 'Could not find this domain.',
    suggestion: 'Please check the URL spelling. The domain may not exist or DNS is not configured.'
  },
  'DOCUMENT_REQUEST_FAILED': {
    message: 'The website could not be loaded for analysis.',
    suggestion: 'The site may be blocking automated tools or requires authentication.'
  },
  'PROTOCOL_ERROR': {
    message: 'SSL/HTTPS error detected.',
    suggestion: 'The website may have an invalid or expired SSL certificate.'
  },
  'TIMEOUT': {
    message: 'The website took too long to respond.',
    suggestion: 'The site may be slow or experiencing high traffic. Try again in a few minutes.'
  },
  'RATE_LIMITED': {
    message: 'Too many analysis requests.',
    suggestion: 'Please wait a few minutes before trying again.'
  },
  'UNKNOWN': {
    message: 'An unexpected error occurred while analyzing this website.',
    suggestion: 'Please try again or contact support if the issue persists.'
  }
};

// Extract homepage from deep URL
function extractHomepage(url: string): { homepage: string; originalUrl: string; isDeepPage: boolean } {
  try {
    const urlObj = new URL(url);
    const homepage = `${urlObj.protocol}//${urlObj.hostname}`;
    const isDeepPage = urlObj.pathname !== '/' && urlObj.pathname !== '' && urlObj.pathname.length > 1;
    return { homepage, originalUrl: url, isDeepPage };
  } catch {
    return { homepage: url, originalUrl: url, isDeepPage: false };
  }
}

// URL validation to prevent SSRF attacks
function validateUrl(url: string): { valid: boolean; error?: string; sanitizedUrl?: string } {
  try {
    // Ensure URL has protocol
    const urlWithProtocol = url.startsWith('http') ? url : 'https://' + url;
    const urlObj = new URL(urlWithProtocol);
    
    // Block dangerous protocols
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return { valid: false, error: 'Invalid protocol' };
    }
    
    // Block internal/private IPs and localhost
    const hostname = urlObj.hostname.toLowerCase();
    if (
      hostname === 'localhost' ||
      hostname.startsWith('127.') ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.') ||
      hostname.startsWith('172.16.') ||
      hostname.startsWith('172.17.') ||
      hostname.startsWith('172.18.') ||
      hostname.startsWith('172.19.') ||
      hostname.startsWith('172.20.') ||
      hostname.startsWith('172.21.') ||
      hostname.startsWith('172.22.') ||
      hostname.startsWith('172.23.') ||
      hostname.startsWith('172.24.') ||
      hostname.startsWith('172.25.') ||
      hostname.startsWith('172.26.') ||
      hostname.startsWith('172.27.') ||
      hostname.startsWith('172.28.') ||
      hostname.startsWith('172.29.') ||
      hostname.startsWith('172.30.') ||
      hostname.startsWith('172.31.') ||
      hostname === '0.0.0.0' ||
      hostname.includes('169.254.169.254') // Cloud metadata
    ) {
      return { valid: false, error: 'Internal URLs not allowed' };
    }
    
    // Length check
    if (url.length > 2048) {
      return { valid: false, error: 'URL too long' };
    }
    
    return { valid: true, sanitizedUrl: urlWithProtocol };
  } catch {
    return { valid: false, error: 'Invalid URL format' };
  }
}

// Check if website is accessible before PageSpeed analysis
async function checkWebsiteAccessibility(url: string): Promise<{ accessible: boolean; errorCode?: string; alternateUrl?: string }> {
  const urlsToTry: string[] = [url];
  
  // Generate alternate URLs (www/non-www, https/http)
  try {
    const urlObj = new URL(url);
    const hasWww = urlObj.hostname.startsWith('www.');
    
    // Try www/non-www variant
    if (hasWww) {
      urlsToTry.push(url.replace('://www.', '://'));
    } else {
      urlsToTry.push(url.replace('://', '://www.'));
    }
    
    // Try http if https fails
    if (urlObj.protocol === 'https:') {
      urlsToTry.push(url.replace('https://', 'http://'));
    }
  } catch {
    // Ignore URL parsing errors
  }
  
  for (const testUrl of urlsToTry) {
    try {
      console.log(`Checking accessibility: ${testUrl}`);
      const response = await fetch(testUrl, {
        method: 'HEAD',
        signal: AbortSignal.timeout(15000),
        headers: { 
          'User-Agent': 'Mozilla/5.0 (compatible; Super30-SEO-Checker/1.0; +https://super30.io)'
        },
        redirect: 'follow'
      });
      
      // Consider 2xx and 3xx as accessible, also some 4xx pages are still valid
      if (response.ok || response.status < 500) {
        console.log(`Website accessible at: ${testUrl} (status: ${response.status})`);
        return { 
          accessible: true, 
          alternateUrl: testUrl !== url ? testUrl : undefined 
        };
      }
    } catch (error: any) {
      console.log(`Accessibility check failed for ${testUrl}:`, error.message);
      
      // Determine error type
      if (error.message?.includes('timeout') || error.name === 'TimeoutError') {
        continue; // Try next URL
      }
    }
  }
  
  return { accessible: false, errorCode: 'CONNECTION_FAILED' };
}

// Parse Lighthouse error messages to get specific error codes
function parseLighthouseError(errorText: string): string {
  if (errorText.includes('FAILED_DOCUMENT_REQUEST')) {
    if (errorText.includes('ERR_CONNECTION_FAILED') || errorText.includes('ERR_CONNECTION_REFUSED')) {
      return 'CONNECTION_FAILED';
    }
    if (errorText.includes('ERR_NAME_NOT_RESOLVED') || errorText.includes('DNS')) {
      return 'DNS_FAILURE';
    }
    if (errorText.includes('ERR_CERT') || errorText.includes('SSL') || errorText.includes('ERR_SSL')) {
      return 'PROTOCOL_ERROR';
    }
    if (errorText.includes('TIMED_OUT') || errorText.includes('ERR_TIMED_OUT')) {
      return 'TIMEOUT';
    }
    return 'DOCUMENT_REQUEST_FAILED';
  }
  if (errorText.includes('DNS_FAILURE') || errorText.includes('ERR_NAME_NOT_RESOLVED')) {
    return 'DNS_FAILURE';
  }
  if (errorText.includes('PROTOCOL_ERROR') || errorText.includes('SSL')) {
    return 'PROTOCOL_ERROR';
  }
  if (errorText.includes('timeout') || errorText.includes('TIMEOUT')) {
    return 'TIMEOUT';
  }
  return 'UNKNOWN';
}

// Retry with exponential backoff
async function fetchWithRetry(
  url: string, 
  options: RequestInit = {}, 
  maxRetries = 3, 
  initialDelay = 1000
): Promise<Response> {
  let lastError: Error | null = null;
  let lastResponse: Response | null = null;
  
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await fetch(url, {
        ...options,
        signal: AbortSignal.timeout(60000) // 60 second timeout
      });
      
      // If rate limited (429) or server error (500), wait and retry
      if ((response.status === 429 || response.status === 500) && attempt < maxRetries - 1) {
        lastResponse = response.clone();
        const delay = initialDelay * Math.pow(2, attempt);
        console.log(`API error ${response.status}, retrying in ${delay}ms (attempt ${attempt + 1}/${maxRetries})`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      return response;
    } catch (error) {
      lastError = error as Error;
      console.log(`Fetch attempt ${attempt + 1} failed:`, error);
      
      if (attempt < maxRetries - 1) {
        const delay = initialDelay * Math.pow(2, attempt);
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  // Return last response if we have one (for proper error handling)
  if (lastResponse) return lastResponse;
  throw lastError || new Error('All retry attempts failed');
}

// Create error response with structured data
function createErrorResponse(errorCode: string, corsHeaders: Record<string, string>, statusCode: number = 400, additionalInfo?: Record<string, any>) {
  const errorInfo = ERROR_MESSAGES[errorCode] || ERROR_MESSAGES['UNKNOWN'];
  
  return new Response(
    JSON.stringify({
      error: errorInfo.message,
      errorCode,
      suggestion: errorInfo.suggestion,
      ...additionalInfo
    }),
    { status: statusCode, headers: { "Content-Type": "application/json", ...corsHeaders } }
  );
}

const handler = async (req: Request): Promise<Response> => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  try {
    const { url, leadId }: SEOAnalysisRequest = await req.json();
    
    // Validate required fields
    if (!url) {
      return new Response(
        JSON.stringify({ error: "URL is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate URL format and security
    const urlValidation = validateUrl(url);
    if (!urlValidation.valid) {
      console.error("URL validation failed:", urlValidation.error);
      return new Response(
        JSON.stringify({ error: urlValidation.error }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const targetUrl = urlValidation.sanitizedUrl!;
    
    // Extract homepage for analysis (strip deep page paths)
    let { homepage, originalUrl, isDeepPage } = extractHomepage(targetUrl);
    console.log("Analyzing SEO for:", homepage, "Original URL:", originalUrl, "Is Deep Page:", isDeepPage, "Lead ID:", leadId || "N/A");

    // Check for API key
    const apiKey = Deno.env.get('GOOGLE_PAGESPEED_API_KEY');
    if (!apiKey) {
      console.error("GOOGLE_PAGESPEED_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "PageSpeed API key not configured. Please contact support." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Pre-check website accessibility
    console.log("Running accessibility pre-check for:", homepage);
    const accessibilityCheck = await checkWebsiteAccessibility(homepage);
    
    if (!accessibilityCheck.accessible) {
      console.error("Website accessibility check failed:", accessibilityCheck.errorCode);
      return createErrorResponse(accessibilityCheck.errorCode || 'CONNECTION_FAILED', corsHeaders, 422, {
        checkedUrl: homepage
      });
    }
    
    // Use alternate URL if found to be working
    if (accessibilityCheck.alternateUrl) {
      console.log(`Using alternate URL: ${accessibilityCheck.alternateUrl} (original: ${homepage})`);
      const altExtract = extractHomepage(accessibilityCheck.alternateUrl);
      homepage = altExtract.homepage;
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // If we have leadId, verify it exists
    if (leadId) {
      const { data: lead, error: leadError } = await supabase
        .from('leads')
        .select('id, website_url')
        .eq('id', leadId)
        .maybeSingle();

      if (leadError) {
        console.error("Lead verification error:", leadError);
      }

      if (!lead) {
        console.log("Lead not found, proceeding without verification:", leadId);
      }
    }

    // Call Google PageSpeed Insights API with API key - use HOMEPAGE for analysis
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(homepage)}&key=${apiKey}&category=performance&category=accessibility&category=best-practices&category=seo`;
    
    console.log("Calling PageSpeed API for homepage:", homepage);
    
    const response = await fetchWithRetry(apiUrl);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("PageSpeed API error:", response.status, errorText);
      
      if (response.status === 429) {
        return createErrorResponse('RATE_LIMITED', corsHeaders, 429);
      }
      
      // Parse Lighthouse-specific errors for better messaging
      const errorCode = parseLighthouseError(errorText);
      console.log("Parsed error code:", errorCode);
      
      return createErrorResponse(errorCode, corsHeaders, 422, {
        checkedUrl: homepage,
        rawError: response.status
      });
    }
    
    const data = await response.json();
    const lighthouseResult = data.lighthouseResult;
    
    if (!lighthouseResult) {
      throw new Error("Invalid response from PageSpeed API - no lighthouse result");
    }
    
    const categories = lighthouseResult.categories || {};
    
    // Extract scores (multiply by 100 to get percentage)
    const performanceScore = Math.round((categories.performance?.score || 0) * 100);
    const accessibilityScore = Math.round((categories.accessibility?.score || 0) * 100);
    const bestPracticesScore = Math.round((categories['best-practices']?.score || 0) * 100);
    const seoScore = Math.round((categories.seo?.score || 0) * 100);
    
    // Calculate AI visibility score based on various factors
    const aiVisibilityScore = Math.round((seoScore * 0.4 + performanceScore * 0.3 + accessibilityScore * 0.2 + bestPracticesScore * 0.1));
    
    // Extract audits for opportunities and diagnostics
    const audits = lighthouseResult.audits || {};
    
    // Count technical issues (failed audits)
    let technicalIssues = 0;
    const opportunities: any[] = [];
    const diagnostics: any[] = [];
    
    Object.entries(audits).forEach(([key, audit]: [string, any]) => {
      if (audit.score !== null && audit.score < 0.9) {
        technicalIssues++;
        
        if (audit.details?.type === 'opportunity' && opportunities.length < 5) {
          opportunities.push({
            title: audit.title,
            description: audit.description,
            score: Math.round((audit.score || 0) * 100),
            displayValue: audit.displayValue
          });
        } else if (audit.details?.type === 'table' && diagnostics.length < 5) {
          diagnostics.push({
            title: audit.title,
            description: audit.description,
            score: Math.round((audit.score || 0) * 100)
          });
        }
      }
    });

    const result: Record<string, any> = {
      seo_score: seoScore,
      performance_score: performanceScore,
      accessibility_score: accessibilityScore,
      best_practices_score: bestPracticesScore,
      ai_visibility_score: aiVisibilityScore,
      technical_issues: technicalIssues,
      opportunities,
      diagnostics,
      analyzed_url: homepage,
      original_url: originalUrl,
      is_deep_page: isDeepPage,
      analysis_timestamp: new Date().toISOString(),
      data_source: 'google_pagespeed_v5'
    };
    
    console.log("PageSpeed API success for homepage:", homepage, "Scores:", {
      seo: seoScore,
      performance: performanceScore,
      accessibility: accessibilityScore,
      bestPractices: bestPracticesScore,
      aiVisibility: aiVisibilityScore,
      isDeepPage
    });

    // Save audit results server-side if leadId is provided
    if (leadId) {
      try {
        const { data: auditRecord, error: insertError } = await supabase
          .from('audit_results')
          .insert({
            lead_id: leadId,
            seo_score: seoScore,
            performance_score: performanceScore,
            accessibility_score: accessibilityScore,
            best_practices_score: bestPracticesScore,
            ai_visibility_score: aiVisibilityScore,
            technical_issues: technicalIssues,
            opportunities,
            diagnostics,
            analyzed_url: homepage,
            analysis_timestamp: result.analysis_timestamp,
            data_source: result.data_source
          })
          .select('id')
          .single();

        if (auditRecord) {
          result.audit_id = auditRecord.id;
          console.log("Audit record saved:", auditRecord.id);
        } else if (insertError) {
          console.error("Failed to save audit record:", insertError);
        }
      } catch (saveError) {
        console.error("Error saving audit record:", saveError);
      }
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in analyze-seo function:", error);
    
    // Provide more specific error messages
    let errorCode = 'UNKNOWN';
    
    if (error.message?.includes('timeout') || error.name === 'TimeoutError') {
      errorCode = 'TIMEOUT';
    } else if (error.message?.includes('fetch') || error.message?.includes('network')) {
      errorCode = 'CONNECTION_FAILED';
    }
    
    return createErrorResponse(errorCode, corsHeaders, 500);
  }
};

serve(handler);