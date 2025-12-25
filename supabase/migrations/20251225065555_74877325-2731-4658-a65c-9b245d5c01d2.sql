-- Create course_applications table
CREATE TABLE public.course_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES public.sessions(id),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  applicant_role TEXT,
  experience TEXT,
  linkedin_url TEXT,
  motivation TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.course_applications ENABLE ROW LEVEL SECURITY;

-- Allow service role to insert (for edge function)
CREATE POLICY "Service role insert course_applications" 
  ON public.course_applications FOR INSERT
  WITH CHECK (true);

-- Create trigger for updated_at
CREATE TRIGGER update_course_applications_updated_at
  BEFORE UPDATE ON public.course_applications
  FOR EACH ROW
  EXECUTE FUNCTION public.update_engagement_metrics_updated_at();