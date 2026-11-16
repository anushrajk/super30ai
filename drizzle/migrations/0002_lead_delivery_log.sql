ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS form_type text;

CREATE TABLE public.lead_delivery_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid REFERENCES public.leads(id) ON DELETE CASCADE,
  channel text NOT NULL,
  delivered boolean NOT NULL DEFAULT false,
  http_status integer,
  detail text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.lead_delivery_log TO service_role;
ALTER TABLE public.lead_delivery_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service role manages lead_delivery_log" ON public.lead_delivery_log FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE INDEX lead_delivery_log_lead_idx ON public.lead_delivery_log(lead_id);
CREATE INDEX leads_created_at_idx ON public.leads(created_at DESC);