import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Industry benchmarks for performance marketing platforms (2025 data)
const platformBenchmarks = {
  google_ads: {
    b2b: { cpc: 65, ctr: 2.5, conversionRate: 3.5, cpl: 1500 },
    b2c: { cpc: 35, ctr: 4.0, conversionRate: 5.0, cpl: 600 },
  },
  meta_ads: {
    b2b: { cpc: 45, ctr: 1.2, conversionRate: 2.5, cpl: 1200 },
    b2c: { cpc: 25, ctr: 1.8, conversionRate: 3.5, cpl: 400 },
  },
  linkedin_ads: {
    b2b: { cpc: 655, ctr: 0.5, conversionRate: 5.0, cpl: 10700 },
    b2c: { cpc: 800, ctr: 0.3, conversionRate: 2.0, cpl: 15000 },
  },
};

// Budget tier mapping
const budgetTiers: Record<string, { min: number; max: number; label: string }> = {
  under_10k: { min: 5000, max: 10000, label: "Under ₹10k" },
  "10k_50k": { min: 10000, max: 50000, label: "₹10k-₹50k" },
  "50k_1L": { min: 50000, max: 100000, label: "₹50k-₹1L" },
  "1L_5L": { min: 100000, max: 500000, label: "₹1L-₹5L" },
  over_5L: { min: 500000, max: 1000000, label: "₹5L+" },
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      url, 
      email, 
      leadId, 
      businessType, 
      preferredPlatforms, 
      adBudget 
    } = await req.json();

    console.log("Starting performance analysis for:", url);
    console.log("Business type:", businessType);
    console.log("Preferred platforms:", preferredPlatforms);
    console.log("Ad budget tier:", adBudget);

    // Get budget range
    const budget = budgetTiers[adBudget] || budgetTiers["10k_50k"];
    const monthlyBudget = Math.round((budget.min + budget.max) / 2);

    // Fetch PageSpeed data for landing page quality
    let landingPageScore = 75;
    let landingPageData: any = null;

    const pageSpeedApiKey = Deno.env.get("GOOGLE_PAGESPEED_API_KEY");
    if (pageSpeedApiKey) {
      try {
        const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;
        const pageSpeedUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(normalizedUrl)}&strategy=mobile&key=${pageSpeedApiKey}`;
        
        const pageSpeedResponse = await fetch(pageSpeedUrl);
        if (pageSpeedResponse.ok) {
          const psData = await pageSpeedResponse.json();
          landingPageScore = Math.round((psData.lighthouseResult?.categories?.performance?.score || 0.75) * 100);
          landingPageData = {
            performance: landingPageScore,
            fcp: psData.lighthouseResult?.audits?.["first-contentful-paint"]?.displayValue,
            lcp: psData.lighthouseResult?.audits?.["largest-contentful-paint"]?.displayValue,
            cls: psData.lighthouseResult?.audits?.["cumulative-layout-shift"]?.displayValue,
          };
          console.log("PageSpeed data fetched:", landingPageData);
        }
      } catch (psError) {
        console.error("PageSpeed fetch error:", psError);
      }
    }

    // Use Lovable AI for intelligent analysis
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const isB2B = businessType === "b2b" || businessType === "both";
    const isB2C = businessType === "b2c" || businessType === "both";

    const aiPrompt = `Analyze this business for performance marketing opportunities:

Website: ${url}
Business Type: ${businessType} (${isB2B ? "sells to businesses" : ""}${isB2B && isB2C ? " and " : ""}${isB2C ? "sells to consumers" : ""})
Monthly Ad Budget: ₹${monthlyBudget.toLocaleString("en-IN")}
Preferred Platforms: ${preferredPlatforms.join(", ")}
Landing Page Score: ${landingPageScore}/100

Industry Benchmarks (India 2025):
- Google Ads B2B: CPC ₹65, CTR 2.5%, Conv 3.5%
- Google Ads B2C: CPC ₹35, CTR 4%, Conv 5%
- Meta Ads B2B: CPC ₹45, CTR 1.2%, Conv 2.5%
- Meta Ads B2C: CPC ₹25, CTR 1.8%, Conv 3.5%
- LinkedIn Ads B2B: CPC ₹655, CTR 0.5%, Conv 5%

Based on the website URL, provide intelligent analysis using the provided tool.`;

    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { 
            role: "system", 
            content: "You are an expert performance marketing analyst specializing in Google Ads, Meta Ads, and LinkedIn Ads for Indian businesses. Provide data-driven, actionable insights." 
          },
          { role: "user", content: aiPrompt },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "analyze_performance_opportunity",
              description: "Return comprehensive performance marketing analysis",
              parameters: {
                type: "object",
                properties: {
                  industry_category: { 
                    type: "string", 
                    description: "Primary industry category (e.g., SaaS, E-commerce, Education, Healthcare)" 
                  },
                  business_niche: { 
                    type: "string", 
                    description: "Specific business niche within the industry" 
                  },
                  opportunity_score: { 
                    type: "integer", 
                    description: "Overall ad opportunity score 0-100 based on market potential and competition",
                    minimum: 0,
                    maximum: 100
                  },
                  competitive_rank: {
                    type: "string",
                    enum: ["low", "medium", "high"],
                    description: "Level of competition in this market"
                  },
                  competitors: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        name: { type: "string" },
                        domain: { type: "string" },
                        estimated_ad_spend: { type: "string" },
                        primary_platform: { type: "string" }
                      },
                      required: ["name", "domain"]
                    },
                    description: "Top 3 competitors in paid advertising"
                  },
                  platform_recommendations: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        platform: { 
                          type: "string",
                          enum: ["google_ads", "meta_ads", "linkedin_ads"]
                        },
                        budget_percentage: { type: "integer", minimum: 0, maximum: 100 },
                        expected_leads: { type: "integer" },
                        expected_roi: { type: "number" },
                        priority: { type: "string", enum: ["high", "medium", "low"] },
                        reasoning: { type: "string" }
                      },
                      required: ["platform", "budget_percentage", "expected_leads", "expected_roi", "priority"]
                    },
                    description: "Platform-specific recommendations"
                  },
                  monthly_loss_without_ads: {
                    type: "integer",
                    description: "Estimated monthly revenue loss without advertising in INR"
                  },
                  action_plan: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        month: { type: "integer", minimum: 1, maximum: 3 },
                        title: { type: "string" },
                        actions: { type: "array", items: { type: "string" } },
                        expected_leads: { type: "integer" },
                        expected_spend: { type: "integer" }
                      },
                      required: ["month", "title", "actions"]
                    },
                    description: "90-day action plan"
                  },
                  ai_recommendations: {
                    type: "array",
                    items: { type: "string" },
                    description: "Top 5 personalized recommendations"
                  }
                },
                required: [
                  "industry_category",
                  "business_niche",
                  "opportunity_score",
                  "competitive_rank",
                  "competitors",
                  "platform_recommendations",
                  "monthly_loss_without_ads",
                  "action_plan",
                  "ai_recommendations"
                ],
                additionalProperties: false
              }
            }
          }
        ],
        tool_choice: { type: "function", function: { name: "analyze_performance_opportunity" } },
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error("AI Gateway error:", aiResponse.status, errorText);
      
      if (aiResponse.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (aiResponse.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please contact support." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw new Error(`AI analysis failed: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    console.log("AI Response received");

    // Extract tool call result
    let analysisResult: any = null;
    const toolCall = aiData.choices?.[0]?.message?.tool_calls?.[0];
    
    if (toolCall?.function?.arguments) {
      try {
        analysisResult = JSON.parse(toolCall.function.arguments);
        console.log("Parsed AI analysis:", analysisResult);
      } catch (parseError) {
        console.error("Failed to parse AI response:", parseError);
        throw new Error("Invalid AI response format");
      }
    }

    if (!analysisResult) {
      throw new Error("No analysis result from AI");
    }

    // Calculate budget allocation and ROI projections
    const totalBudget = monthlyBudget;
    const platformRecs = analysisResult.platform_recommendations || [];
    
    // Enhance with benchmark calculations
    const enhancedPlatformRecs = platformRecs.map((rec: any) => {
      const benchmarkKey = isB2B ? "b2b" : "b2c";
      const benchmark = platformBenchmarks[rec.platform as keyof typeof platformBenchmarks]?.[benchmarkKey];
      
      if (benchmark) {
        const allocatedBudget = totalBudget * (rec.budget_percentage / 100);
        const estimatedClicks = Math.round(allocatedBudget / benchmark.cpc);
        const estimatedLeads = Math.round(estimatedClicks * (benchmark.conversionRate / 100));
        
        return {
          ...rec,
          benchmark,
          allocated_budget: allocatedBudget,
          estimated_clicks: estimatedClicks,
          calculated_leads: estimatedLeads,
        };
      }
      return rec;
    });

  // Build final result
  const result: Record<string, any> = {
    analyzed_url: url,
    preferred_platforms: preferredPlatforms,
    business_type: businessType,
      opportunity_score: analysisResult.opportunity_score,
      industry_category: analysisResult.industry_category,
      business_niche: analysisResult.business_niche,
      competitive_rank: analysisResult.competitive_rank,
      platform_recommendations: enhancedPlatformRecs,
      recommended_budget: {
        total: totalBudget,
        breakdown: Object.fromEntries(
          platformRecs.map((rec: any) => [
            rec.platform, 
            Math.round(totalBudget * (rec.budget_percentage / 100))
          ])
        )
      },
      expected_roi: {
        total_leads: enhancedPlatformRecs.reduce((sum: number, r: any) => sum + (r.calculated_leads || r.expected_leads || 0), 0),
        roi_ratio: platformRecs.reduce((sum: number, r: any) => sum + (r.expected_roi || 0), 0) / platformRecs.length,
      },
      competitors: analysisResult.competitors || [],
      competitive_gap: {
        market_saturation: analysisResult.competitive_rank,
        opportunity_level: analysisResult.opportunity_score > 70 ? "high" : analysisResult.opportunity_score > 40 ? "medium" : "low"
      },
      estimated_monthly_loss: {
        value: analysisResult.monthly_loss_without_ads,
        quarterly: analysisResult.monthly_loss_without_ads * 3,
      },
      action_plan: analysisResult.action_plan || [],
      ai_recommendations: analysisResult.ai_recommendations || [],
      landing_page_data: landingPageData,
      analysis_timestamp: new Date().toISOString(),
      data_source: "ai_analysis",
    };

    // Save to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    
    if (supabaseUrl && supabaseKey && leadId) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      
      const { data: insertedData, error: insertError } = await supabase
        .from("performance_audit_results")
        .insert({
          lead_id: leadId,
          analyzed_url: result.analyzed_url,
          preferred_platforms: result.preferred_platforms,
          business_type: result.business_type,
          opportunity_score: result.opportunity_score,
          industry_category: result.industry_category,
          business_niche: result.business_niche,
          competitive_rank: result.competitive_rank,
          platform_recommendations: result.platform_recommendations,
          recommended_budget: result.recommended_budget,
          expected_roi: result.expected_roi,
          competitors: result.competitors,
          competitive_gap: result.competitive_gap,
          estimated_monthly_loss: result.estimated_monthly_loss,
          action_plan: result.action_plan,
          ai_recommendations: result.ai_recommendations,
          analysis_timestamp: result.analysis_timestamp,
          data_source: result.data_source,
        })
        .select()
        .single();

      if (insertError) {
        console.error("Database insert error:", insertError);
      } else {
        console.log("Saved to database with ID:", insertedData?.id);
        result.id = insertedData?.id;
      }
    }

    console.log("Analysis complete for:", url);

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Performance analysis error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Analysis failed" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
