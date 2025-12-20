import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url, auditData, leadId, auditId } = await req.json();
    
    if (!url) {
      return new Response(
        JSON.stringify({ error: 'URL is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log(`Analyzing competitors for: ${url}`);

    // Create a prompt for competitor analysis
    const prompt = `Analyze this website URL and its audit data to provide competitor analysis:

Website URL: ${url}

Audit Data:
- SEO Score: ${auditData?.seo_score || 'N/A'}
- Performance Score: ${auditData?.performance_score || 'N/A'}
- AI Visibility Score: ${auditData?.ai_visibility_score || 'N/A'}
- Technical Issues: ${auditData?.technical_issues || 0}

Based on the URL and domain, determine:
1. The business niche and industry category
2. Identify 3-5 main competitors in this niche (real companies)
3. Calculate a missed opportunity score (0-100) based on how much potential traffic/revenue they're missing
4. Estimate the monthly revenue loss in INR (Indian Rupees) based on their technical issues and low scores
5. Provide 3-5 key actionable recommendations

Consider that this is an Indian business, so use INR for currency and consider Indian market competitors when relevant.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: 'You are an expert SEO analyst specializing in competitive analysis and revenue impact estimation. Always respond with structured data using the provided tool.'
          },
          { role: 'user', content: prompt }
        ],
        tools: [
          {
            type: 'function',
            function: {
              name: 'provide_competitor_analysis',
              description: 'Provide structured competitor analysis data',
              parameters: {
                type: 'object',
                properties: {
                  business_niche: {
                    type: 'string',
                    description: 'The specific business niche (e.g., "B2B SaaS Marketing", "E-commerce Fashion")'
                  },
                  industry_category: {
                    type: 'string',
                    description: 'Broader industry category (e.g., "Technology", "Retail", "Healthcare")'
                  },
                  competitors: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        name: { type: 'string', description: 'Company name' },
                        domain: { type: 'string', description: 'Website domain' },
                        estimated_strength: { type: 'number', description: 'SEO strength score 0-100' },
                        why_competitor: { type: 'string', description: 'Why they are a competitor' }
                      },
                      required: ['name', 'domain', 'estimated_strength', 'why_competitor']
                    },
                    description: 'List of 3-5 main competitors'
                  },
                  missed_opportunity_score: {
                    type: 'number',
                    description: 'Score from 0-100 indicating how much opportunity is being missed'
                  },
                  opportunity_breakdown: {
                    type: 'object',
                    properties: {
                      ai_visibility_gap: { type: 'number', description: 'Gap in AI visibility (0-100)' },
                      content_gap: { type: 'number', description: 'Content quality gap (0-100)' },
                      technical_gap: { type: 'number', description: 'Technical SEO gap (0-100)' },
                      authority_gap: { type: 'number', description: 'Domain authority gap (0-100)' }
                    },
                    required: ['ai_visibility_gap', 'content_gap', 'technical_gap', 'authority_gap']
                  },
                  estimated_monthly_loss: {
                    type: 'object',
                    properties: {
                      currency: { type: 'string', description: 'Currency code (INR)' },
                      amount: { type: 'number', description: 'Estimated monthly loss amount' },
                      calculation_basis: { type: 'string', description: 'Brief explanation of calculation' }
                    },
                    required: ['currency', 'amount', 'calculation_basis']
                  },
                  recommendations: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'List of 3-5 actionable recommendations'
                  }
                },
                required: ['business_niche', 'industry_category', 'competitors', 'missed_opportunity_score', 'opportunity_breakdown', 'estimated_monthly_loss', 'recommendations']
              }
            }
          }
        ],
        tool_choice: { type: 'function', function: { name: 'provide_competitor_analysis' } }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits exhausted. Please add funds.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const aiResponse = await response.json();
    console.log('AI Response received');

    // Extract the tool call result
    const toolCall = aiResponse.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      throw new Error('No tool call in AI response');
    }

    const analysisData = JSON.parse(toolCall.function.arguments);
    console.log('Parsed analysis data:', analysisData);

    // Save to database if we have leadId
    if (leadId) {
      const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
      const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
      const supabase = createClient(supabaseUrl, supabaseServiceKey);

      const { error: insertError } = await supabase
        .from('competitor_analysis')
        .insert({
          lead_id: leadId,
          audit_id: auditId || null,
          business_niche: analysisData.business_niche,
          industry_category: analysisData.industry_category,
          competitors: analysisData.competitors,
          missed_opportunity_score: analysisData.missed_opportunity_score,
          opportunity_breakdown: analysisData.opportunity_breakdown,
          estimated_monthly_loss: analysisData.estimated_monthly_loss,
          recommendations: analysisData.recommendations,
          analyzed_url: url
        });

      if (insertError) {
        console.error('Failed to save analysis:', insertError);
      } else {
        console.log('Analysis saved to database');
      }
    }

    return new Response(
      JSON.stringify(analysisData),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Competitor analysis error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Analysis failed' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
