
-- Drop overly permissive UPDATE and SELECT policies on engagement_metrics
DROP POLICY IF EXISTS "Allow anonymous update own engagement" ON public.engagement_metrics;
DROP POLICY IF EXISTS "Allow anonymous select own engagement" ON public.engagement_metrics;

-- Add service_role-only policies for UPDATE and SELECT
CREATE POLICY "Service role update engagement_metrics"
  ON public.engagement_metrics FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role select engagement_metrics"
  ON public.engagement_metrics FOR SELECT
  TO service_role
  USING (true);
