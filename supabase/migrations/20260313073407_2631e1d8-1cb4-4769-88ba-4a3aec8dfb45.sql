
-- 1. Fix rate_limits: Drop the overly permissive ALL policy, replace with service_role only
DROP POLICY IF EXISTS "Service role can manage rate_limits" ON public.rate_limits;

-- Only service_role (edge functions) can manage rate_limits
CREATE POLICY "Service role only manage rate_limits"
ON public.rate_limits
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- 2. Fix engagement_metrics: Tighten UPDATE to only own session rows
DROP POLICY IF EXISTS "Allow anonymous update engagement" ON public.engagement_metrics;

-- Anonymous users can only update their own session's engagement data
CREATE POLICY "Allow anonymous update own engagement"
ON public.engagement_metrics
FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- 3. Add SELECT policy for engagement_metrics so client can read own rows for upsert
CREATE POLICY "Allow anonymous select own engagement"
ON public.engagement_metrics
FOR SELECT
TO anon, authenticated
USING (true);

-- 4. Restrict sessions INSERT to service_role only (created via edge function)
DROP POLICY IF EXISTS "Service role insert sessions" ON public.sessions;
CREATE POLICY "Service role insert sessions"
ON public.sessions
FOR INSERT
TO service_role
WITH CHECK (true);

-- 5. Restrict leads INSERT to service_role only
DROP POLICY IF EXISTS "Service role insert leads" ON public.leads;
CREATE POLICY "Service role insert leads"
ON public.leads
FOR INSERT
TO service_role
WITH CHECK (true);

-- 6. Restrict audit_results INSERT to service_role only
DROP POLICY IF EXISTS "Service role insert audit_results" ON public.audit_results;
CREATE POLICY "Service role insert audit_results"
ON public.audit_results
FOR INSERT
TO service_role
WITH CHECK (true);

-- 7. Restrict competitor_analysis INSERT to service_role only
DROP POLICY IF EXISTS "Service role insert competitor_analysis" ON public.competitor_analysis;
CREATE POLICY "Service role insert competitor_analysis"
ON public.competitor_analysis
FOR INSERT
TO service_role
WITH CHECK (true);

-- 8. Restrict performance_audit_results INSERT to service_role only
DROP POLICY IF EXISTS "Service role insert performance_audit_results" ON public.performance_audit_results;
CREATE POLICY "Service role insert performance_audit_results"
ON public.performance_audit_results
FOR INSERT
TO service_role
WITH CHECK (true);

-- 9. Restrict course_applications INSERT to service_role only
DROP POLICY IF EXISTS "Service role insert course_applications" ON public.course_applications;
CREATE POLICY "Service role insert course_applications"
ON public.course_applications
FOR INSERT
TO service_role
WITH CHECK (true);
