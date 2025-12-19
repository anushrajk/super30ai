-- Fix RLS policies for leads table to restrict access by session_id

-- Drop overly permissive SELECT policy
DROP POLICY IF EXISTS "Allow public select on leads" ON public.leads;

-- Create session-restricted SELECT policy using session_id matching
CREATE POLICY "Allow session select on leads" ON public.leads
FOR SELECT USING (
  session_id::text = coalesce(
    current_setting('request.headers', true)::json->>'x-session-id',
    ''
  )
  OR session_id::text = ''
);

-- Drop overly permissive UPDATE policy  
DROP POLICY IF EXISTS "Allow public update on leads" ON public.leads;

-- Create session-restricted UPDATE policy
CREATE POLICY "Allow session update on leads" ON public.leads
FOR UPDATE USING (
  session_id::text = coalesce(
    current_setting('request.headers', true)::json->>'x-session-id',
    ''
  )
);

-- Fix RLS policies for audit_results table
DROP POLICY IF EXISTS "Allow public select on audit_results" ON public.audit_results;

-- Create lead-based SELECT policy for audit_results (allow reading results for leads in your session)
CREATE POLICY "Allow session select on audit_results" ON public.audit_results
FOR SELECT USING (
  lead_id IN (
    SELECT id FROM public.leads WHERE session_id::text = coalesce(
      current_setting('request.headers', true)::json->>'x-session-id',
      ''
    )
  )
);

-- Fix RLS policies for sessions table
DROP POLICY IF EXISTS "Allow public select on sessions" ON public.sessions;

-- Create session-restricted SELECT policy
CREATE POLICY "Allow own session select" ON public.sessions
FOR SELECT USING (
  id::text = coalesce(
    current_setting('request.headers', true)::json->>'x-session-id',
    ''
  )
);

DROP POLICY IF EXISTS "Allow public update on sessions" ON public.sessions;

-- Create session-restricted UPDATE policy
CREATE POLICY "Allow own session update" ON public.sessions
FOR UPDATE USING (
  id::text = coalesce(
    current_setting('request.headers', true)::json->>'x-session-id',
    ''
  )
);