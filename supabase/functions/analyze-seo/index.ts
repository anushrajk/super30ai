import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SEOAnalysisRequest {
  url: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url }: SEOAnalysisRequest = await req.json();
    
    console.log("Analyzing SEO for:", url);

    // Ensure URL has protocol
    let targetUrl = url;
    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
      targetUrl = 'https://' + targetUrl;
    }

    // Call Google PageSpeed Insights API (free, no API key required for basic usage)
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl)}&category=performance&category=accessibility&category=best-practices&category=seo`;
    
    console.log("Calling PageSpeed API:", apiUrl);
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("PageSpeed API error:", errorText);
      throw new Error(`PageSpeed API error: ${response.status}`);
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

    console.log("SEO analysis complete:", result);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in analyze-seo function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
