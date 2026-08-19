-- Lock down sensitive tables: no anon/authenticated access, service_role only
REVOKE ALL ON public.leads FROM anon, authenticated;
REVOKE ALL ON public.sessions FROM anon, authenticated;
REVOKE ALL ON public.audit_results FROM anon, authenticated;
REVOKE ALL ON public.competitor_analysis FROM anon, authenticated;
REVOKE ALL ON public.performance_audit_results FROM anon, authenticated;
REVOKE ALL ON public.course_applications FROM anon, authenticated;
REVOKE ALL ON public.engagement_metrics FROM anon, authenticated;

GRANT ALL ON public.leads TO service_role;
GRANT ALL ON public.sessions TO service_role;
GRANT ALL ON public.audit_results TO service_role;
GRANT ALL ON public.competitor_analysis TO service_role;
GRANT ALL ON public.performance_audit_results TO service_role;
GRANT ALL ON public.course_applications TO service_role;
GRANT ALL ON public.engagement_metrics TO service_role;

-- Explicit service_role-only read policies (deny by default for everyone else)
DROP POLICY IF EXISTS "Service role select leads" ON public.leads;
CREATE POLICY "Service role select leads" ON public.leads FOR SELECT TO service_role USING (true);

DROP POLICY IF EXISTS "Service role select sessions" ON public.sessions;
CREATE POLICY "Service role select sessions" ON public.sessions FOR SELECT TO service_role USING (true);

DROP POLICY IF EXISTS "Service role select audit_results" ON public.audit_results;
CREATE POLICY "Service role select audit_results" ON public.audit_results FOR SELECT TO service_role USING (true);

DROP POLICY IF EXISTS "Service role select competitor_analysis" ON public.competitor_analysis;
CREATE POLICY "Service role select competitor_analysis" ON public.competitor_analysis FOR SELECT TO service_role USING (true);

DROP POLICY IF EXISTS "Service role select performance_audit_results" ON public.performance_audit_results;
CREATE POLICY "Service role select performance_audit_results" ON public.performance_audit_results FOR SELECT TO service_role USING (true);

DROP POLICY IF EXISTS "Service role select course_applications" ON public.course_applications;
CREATE POLICY "Service role select course_applications" ON public.course_applications FOR SELECT TO service_role USING (true);

-- Remove unrestricted anonymous insert on engagement_metrics (writes go through the edge function)
DROP POLICY IF EXISTS "Allow anonymous insert engagement" ON public.engagement_metrics;

DROP POLICY IF EXISTS "Service role insert engagement_metrics" ON public.engagement_metrics;
CREATE POLICY "Service role insert engagement_metrics" ON public.engagement_metrics FOR INSERT TO service_role WITH CHECK (true);