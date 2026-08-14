REVOKE ALL ON FUNCTION public.cleanup_old_rate_limits() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.cleanup_old_rate_limits() TO service_role;

DROP POLICY IF EXISTS "Authenticated read all blogs" ON public.blogs;
CREATE POLICY "Authors read own blogs" ON public.blogs
FOR SELECT TO authenticated
USING (auth.uid() = author_id);

REVOKE SELECT, INSERT, UPDATE, DELETE ON public.leads FROM anon, authenticated;
REVOKE SELECT, INSERT, UPDATE, DELETE ON public.course_applications FROM anon, authenticated;
GRANT ALL ON public.leads TO service_role;
GRANT ALL ON public.course_applications TO service_role;