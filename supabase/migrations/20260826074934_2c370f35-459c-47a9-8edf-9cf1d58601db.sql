-- Lock down sensitive PII tables: server-side (service_role) access only.
-- No client (anon/authenticated) reads are expected; all access goes through edge functions.

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_applications ENABLE ROW LEVEL SECURITY;

ALTER TABLE public.leads FORCE ROW LEVEL SECURITY;
ALTER TABLE public.sessions FORCE ROW LEVEL SECURITY;
ALTER TABLE public.course_applications FORCE ROW LEVEL SECURITY;

REVOKE ALL ON public.leads FROM anon, authenticated, PUBLIC;
REVOKE ALL ON public.sessions FROM anon, authenticated, PUBLIC;
REVOKE ALL ON public.course_applications FROM anon, authenticated, PUBLIC;

GRANT ALL ON public.leads TO service_role;
GRANT ALL ON public.sessions TO service_role;
GRANT ALL ON public.course_applications TO service_role;

-- Explicit restrictive deny for client roles, so any future permissive policy
-- cannot accidentally expose this PII.
DROP POLICY IF EXISTS "Deny client access to leads" ON public.leads;
CREATE POLICY "Deny client access to leads" ON public.leads
  AS RESTRICTIVE FOR ALL TO anon, authenticated
  USING (false) WITH CHECK (false);

DROP POLICY IF EXISTS "Deny client access to sessions" ON public.sessions;
CREATE POLICY "Deny client access to sessions" ON public.sessions
  AS RESTRICTIVE FOR ALL TO anon, authenticated
  USING (false) WITH CHECK (false);

DROP POLICY IF EXISTS "Deny client access to course_applications" ON public.course_applications;
CREATE POLICY "Deny client access to course_applications" ON public.course_applications
  AS RESTRICTIVE FOR ALL TO anon, authenticated
  USING (false) WITH CHECK (false);