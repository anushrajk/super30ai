-- Fix: Remove the OR condition that allows reading orphaned leads
DROP POLICY IF EXISTS "Allow session select on leads" ON public.leads;

CREATE POLICY "Allow session select on leads" ON public.leads
FOR SELECT USING (
  session_id::text = coalesce(
    current_setting('request.headers', true)::json->>'x-session-id',
    ''
  )
);