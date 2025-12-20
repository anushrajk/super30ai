-- Create engagement_metrics table for tracking user engagement
CREATE TABLE public.engagement_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES public.sessions(id) ON DELETE CASCADE,
  page_url TEXT NOT NULL,
  max_scroll_depth INTEGER DEFAULT 0,
  scroll_milestones JSONB DEFAULT '[]'::jsonb,
  sections_viewed JSONB DEFAULT '[]'::jsonb,
  time_on_page INTEGER DEFAULT 0,
  interactions JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.engagement_metrics ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts and updates (no auth required for tracking)
CREATE POLICY "Allow anonymous insert" ON public.engagement_metrics
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous update" ON public.engagement_metrics
  FOR UPDATE USING (true);

CREATE POLICY "Allow anonymous select" ON public.engagement_metrics
  FOR SELECT USING (true);

-- Create index for faster lookups
CREATE INDEX idx_engagement_metrics_session_id ON public.engagement_metrics(session_id);
CREATE INDEX idx_engagement_metrics_page_url ON public.engagement_metrics(page_url);

-- Create trigger to update updated_at
CREATE OR REPLACE FUNCTION public.update_engagement_metrics_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_engagement_metrics_updated_at
  BEFORE UPDATE ON public.engagement_metrics
  FOR EACH ROW
  EXECUTE FUNCTION public.update_engagement_metrics_updated_at();