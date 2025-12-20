import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-session-id",
};

interface SEOAnalysisRequest {
  url: string;
  leadId?: string;
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

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

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
    console.log("Analyzing SEO for:", targetUrl, "Lead ID:", leadId || "N/A");

    // Check for API key
    const apiKey = Deno.env.get('GOOGLE_PAGESPEED_API_KEY');
    if (!apiKey) {
      console.error("GOOGLE_PAGESPEED_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "PageSpeed API key not configured. Please contact support." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
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

    // Call Google PageSpeed Insights API with API key
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl)}&key=${apiKey}&category=performance&category=accessibility&category=best-practices&category=seo`;
    
    console.log("Calling PageSpeed API with API key for:", targetUrl);
    
    const response = await fetchWithRetry(apiUrl);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("PageSpeed API error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "API rate limit exceeded. Please try again in a few minutes." }),
          { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
      
      if (response.status === 400) {
        return new Response(
          JSON.stringify({ error: "Invalid URL or the website could not be accessed." }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
      
      // Handle Lighthouse internal errors (500) - some sites block Google's crawler
      if (response.status === 500) {
        const isLighthouseError = errorText.includes('lighthouseError') || errorText.includes('Lighthouse returned error');
        if (isLighthouseError) {
          return new Response(
            JSON.stringify({ 
              error: "This website could not be analyzed. Some websites block automated analysis tools. Please try a different URL or contact support for manual analysis." 
            }),
            { status: 422, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        }
      }
      
      throw new Error(`PageSpeed API returned ${response.status}: ${errorText}`);
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

    const result = {
      seo_score: seoScore,
      performance_score: performanceScore,
      accessibility_score: accessibilityScore,
      best_practices_score: bestPracticesScore,
      ai_visibility_score: aiVisibilityScore,
      technical_issues: technicalIssues,
      opportunities,
      diagnostics,
      analyzed_url: targetUrl,
      analysis_timestamp: new Date().toISOString(),
      data_source: 'google_pagespeed_v5'
    };
    
    console.log("PageSpeed API success for:", targetUrl, "Scores:", {
      seo: seoScore,
      performance: performanceScore,
      accessibility: accessibilityScore,
      bestPractices: bestPracticesScore,
      aiVisibility: aiVisibilityScore
    });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in analyze-seo function:", error);
    
    // Provide more specific error messages
    let errorMessage = "An error occurred while analyzing your website.";
    let statusCode = 500;
    
    if (error.message?.includes('timeout') || error.name === 'TimeoutError') {
      errorMessage = "The analysis timed out. The website may be slow or unresponsive.";
      statusCode = 408;
    } else if (error.message?.includes('fetch')) {
      errorMessage = "Could not reach the PageSpeed API. Please try again.";
    }
    
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: statusCode, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
