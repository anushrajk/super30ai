ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS landing_page_url text, ADD COLUMN IF NOT EXISTS first_page_url text, ADD COLUMN IF NOT EXISTS last_page_url text, ADD COLUMN IF NOT EXISTS message text, ADD COLUMN IF NOT EXISTS form_name text;
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;