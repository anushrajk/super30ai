-- Create sessions table for browser tracking
CREATE TABLE public.sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_page_url TEXT,
  current_page_url TEXT,
  referrer TEXT,
  ip_address TEXT,
  ip_city TEXT,
  ip_country TEXT,
  browser TEXT,
  user_agent TEXT,
  first_landed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create leads table
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID REFERENCES public.sessions(id),
  website_url TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT,
  monthly_revenue TEXT,
  phone TEXT,
  company_name TEXT,
  step INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create audit_results table
CREATE TABLE public.audit_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
  seo_score INTEGER,
  performance_score INTEGER,
  accessibility_score INTEGER,
  best_practices_score INTEGER,
  ai_visibility_score INTEGER,
  technical_issues INTEGER,
  opportunities JSONB,
  diagnostics JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_results ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (these are lead capture forms, no auth required)
CREATE POLICY "Allow public insert on sessions" ON public.sessions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select on sessions" ON public.sessions FOR SELECT USING (true);
CREATE POLICY "Allow public update on sessions" ON public.sessions FOR UPDATE USING (true);

CREATE POLICY "Allow public insert on leads" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select on leads" ON public.leads FOR SELECT USING (true);
CREATE POLICY "Allow public update on leads" ON public.leads FOR UPDATE USING (true);

CREATE POLICY "Allow public insert on audit_results" ON public.audit_results FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select on audit_results" ON public.audit_results FOR SELECT USING (true);