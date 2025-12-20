-- Create competitor_analysis table for storing AI-generated analysis
CREATE TABLE public.competitor_analysis (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
  audit_id UUID REFERENCES public.audit_results(id) ON DELETE CASCADE,
  business_niche TEXT,
  industry_category TEXT,
  competitors JSONB DEFAULT '[]'::jsonb,
  missed_opportunity_score INTEGER,
  opportunity_breakdown JSONB,
  estimated_monthly_loss JSONB,
  recommendations JSONB DEFAULT '[]'::jsonb,
  analyzed_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.competitor_analysis ENABLE ROW LEVEL SECURITY;

-- Allow public insert (for edge function)
CREATE POLICY "Allow public insert on competitor_analysis"
ON public.competitor_analysis
FOR INSERT
WITH CHECK (true);

-- Allow session-based select
CREATE POLICY "Allow session select on competitor_analysis"
ON public.competitor_analysis
FOR SELECT
USING (lead_id IN (
  SELECT leads.id FROM leads
  WHERE (leads.session_id)::text = COALESCE(
    ((current_setting('request.headers'::text, true))::json ->> 'x-session-id'::text), ''::text
  )
));

-- Create index for faster lookups
CREATE INDEX idx_competitor_analysis_lead_id ON public.competitor_analysis(lead_id);
CREATE INDEX idx_competitor_analysis_audit_id ON public.competitor_analysis(audit_id);