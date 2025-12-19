import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-session-id",
};

interface SEOAnalysisRequest {
  url: string;
  leadId: string;
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

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url, leadId }: SEOAnalysisRequest = await req.json();
    
    // Validate required fields
    if (!url || !leadId) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
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

    console.log("Analyzing SEO for:", urlValidation.sanitizedUrl, "Lead ID:", leadId);

    // Create Supabase client with service role for validation
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Verify lead exists and URL matches (prevents abuse)
    const { data: lead, error: leadError } = await supabase
      .from('leads')
      .select('id, website_url')
      .eq('id', leadId)
      .maybeSingle();

    if (leadError) {
      console.error("Lead verification error:", leadError);
      return new Response(
        JSON.stringify({ error: "Verification failed" }),
        { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!lead) {
      console.error("Lead not found:", leadId);
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Check if URL matches the lead's website (normalize for comparison)
    const normalizeUrl = (u: string) => {
      try {
        const parsed = new URL(u.startsWith('http') ? u : 'https://' + u);
        return parsed.hostname.toLowerCase().replace('www.', '');
      } catch {
        return u.toLowerCase();
      }
    };

    if (normalizeUrl(url) !== normalizeUrl(lead.website_url)) {
      console.error("URL mismatch - requested:", url, "lead:", lead.website_url);
      return new Response(
        JSON.stringify({ error: "URL mismatch" }),
        { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Check for recent analysis (rate limiting - 1 analysis per lead per hour)
    const { data: recentAnalysis } = await supabase
      .from('audit_results')
      .select('created_at')
      .eq('lead_id', leadId)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (recentAnalysis) {
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
      if (new Date(recentAnalysis.created_at) > oneHourAgo) {
        console.log("Rate limited - recent analysis exists for lead:", leadId);
        return new Response(
          JSON.stringify({ error: "Analysis rate limit exceeded. Please try again later." }),
          { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
    }

    const targetUrl = urlValidation.sanitizedUrl!;

    // Call Google PageSpeed Insights API
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl)}&category=performance&category=accessibility&category=best-practices&category=seo`;
    
    console.log("Calling PageSpeed API for:", targetUrl);
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      console.error("PageSpeed API error - status:", response.status);
      return new Response(
        JSON.stringify({ error: "Analysis service temporarily unavailable" }),
        { status: 503, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const data = await response.json();
    
    const lighthouseResult = data.lighthouseResult;
    const categories = lighthouseResult?.categories || {};
    
    // Extract scores (multiply by 100 to get percentage)
    const performanceScore = Math.round((categories.performance?.score || 0) * 100);
    const accessibilityScore = Math.round((categories.accessibility?.score || 0) * 100);
    const bestPracticesScore = Math.round((categories['best-practices']?.score || 0) * 100);
    const seoScore = Math.round((categories.seo?.score || 0) * 100);
    
    // Calculate AI visibility score based on various factors
    const aiVisibilityScore = Math.round((seoScore * 0.4 + performanceScore * 0.3 + accessibilityScore * 0.2 + bestPracticesScore * 0.1));
    
    // Extract audits for opportunities and diagnostics
    const audits = lighthouseResult?.audits || {};
    
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
      analysis_timestamp: new Date().toISOString()
    };

    console.log("SEO analysis complete for lead:", leadId);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in analyze-seo function:", error);
    // Return generic error message - don't expose internal details
    return new Response(
      JSON.stringify({ error: "An error occurred processing your request" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
