-- Add new columns to leads table for PM flow
ALTER TABLE public.leads 
ADD COLUMN IF NOT EXISTS preferred_platforms JSONB DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS business_type TEXT,
ADD COLUMN IF NOT EXISTS service_type TEXT DEFAULT 'seo';

-- Create performance_audit_results table
CREATE TABLE IF NOT EXISTS public.performance_audit_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES public.leads(id),
  analyzed_url TEXT,
  preferred_platforms JSONB DEFAULT '[]'::jsonb,
  business_type TEXT,
  
  -- Executive Summary
  opportunity_score INTEGER,
  industry_category TEXT,
  business_niche TEXT,
  competitive_rank TEXT,
  
  -- Platform Recommendations
  platform_recommendations JSONB DEFAULT '[]'::jsonb,
  
  -- Investment Recommendation
  recommended_budget JSONB,
  expected_roi JSONB,
  
  -- Competitor Analysis
  competitors JSONB DEFAULT '[]'::jsonb,
  competitive_gap JSONB,
  estimated_monthly_loss JSONB,
  
  -- 90-Day Roadmap
  action_plan JSONB DEFAULT '[]'::jsonb,
  
  -- AI Recommendations (locked until booking)
  ai_recommendations JSONB DEFAULT '[]'::jsonb,
  
  -- Meta
  analysis_timestamp TIMESTAMPTZ DEFAULT now(),
  data_source TEXT DEFAULT 'ai_analysis',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.performance_audit_results ENABLE ROW LEVEL SECURITY;

-- Create policy for service role insert
CREATE POLICY "Service role insert performance_audit_results" 
ON public.performance_audit_results 
FOR INSERT 
WITH CHECK (true);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_performance_audit_results_lead_id 
ON public.performance_audit_results(lead_id);