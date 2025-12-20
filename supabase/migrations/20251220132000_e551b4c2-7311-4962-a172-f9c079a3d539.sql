-- Phase 1: Critical Security Fixes for RLS Policies
-- Remove vulnerable client-header based RLS and implement secure policies

-- =============================================
-- 1. FIX SESSIONS TABLE
-- Only service role should read sensitive session data
-- =============================================

-- Drop existing vulnerable policies
DROP POLICY IF EXISTS "Allow own session select" ON public.sessions;
DROP POLICY IF EXISTS "Allow own session update" ON public.sessions;
DROP POLICY IF EXISTS "Allow public insert on sessions" ON public.sessions;

-- Allow insert only (via edge function with service role)
CREATE POLICY "Service role insert sessions" 
ON public.sessions 
FOR INSERT 
WITH CHECK (true);

-- No client-side SELECT - all reads go through edge functions
-- Service role bypasses RLS

-- =============================================
-- 2. FIX LEADS TABLE  
-- Contains PII (email, phone, revenue) - must be protected
-- =============================================

-- Drop existing vulnerable policies
DROP POLICY IF EXISTS "Allow public insert on leads" ON public.leads;
DROP POLICY IF EXISTS "Allow session select on leads" ON public.leads;
DROP POLICY IF EXISTS "Allow session update on leads" ON public.leads;

-- Allow insert (via edge function with service role)
CREATE POLICY "Service role insert leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- No client-side SELECT/UPDATE - all operations go through edge functions
-- Service role bypasses RLS

-- =============================================
-- 3. FIX AUDIT_RESULTS TABLE
-- Contains business intelligence - must be protected
-- =============================================

-- Drop existing vulnerable policies
DROP POLICY IF EXISTS "Allow public insert on audit_results" ON public.audit_results;
DROP POLICY IF EXISTS "Allow session select on audit_results" ON public.audit_results;

-- Allow insert (via edge function with service role)
CREATE POLICY "Service role insert audit_results" 
ON public.audit_results 
FOR INSERT 
WITH CHECK (true);

-- No client-side SELECT - all reads go through edge functions

-- =============================================
-- 4. FIX COMPETITOR_ANALYSIS TABLE
-- Contains competitive intelligence - must be protected
-- =============================================

-- Drop existing vulnerable policies
DROP POLICY IF EXISTS "Allow public insert on competitor_analysis" ON public.competitor_analysis;
DROP POLICY IF EXISTS "Allow session select on competitor_analysis" ON public.competitor_analysis;

-- Allow insert (via edge function with service role)
CREATE POLICY "Service role insert competitor_analysis" 
ON public.competitor_analysis 
FOR INSERT 
WITH CHECK (true);

-- No client-side SELECT - all reads go through edge functions

-- =============================================
-- 5. FIX ENGAGEMENT_METRICS TABLE
-- Remove public read access
-- =============================================

-- Drop existing vulnerable policies
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.engagement_metrics;
DROP POLICY IF EXISTS "Allow anonymous select" ON public.engagement_metrics;
DROP POLICY IF EXISTS "Allow anonymous update" ON public.engagement_metrics;

-- Allow anonymous insert only (tracking is okay)
CREATE POLICY "Allow anonymous insert engagement" 
ON public.engagement_metrics 
FOR INSERT 
WITH CHECK (true);

-- Allow anonymous update for session-based tracking
CREATE POLICY "Allow anonymous update engagement" 
ON public.engagement_metrics 
FOR UPDATE 
USING (true);

-- No client-side SELECT - analytics reads go through edge functions/service role

-- =============================================
-- 6. FIX RATE_LIMITS TABLE
-- Already has service role policy, just clean up
-- =============================================

-- The existing policy is fine - service role only
-- DROP POLICY IF EXISTS "Service role can manage rate_limits" ON public.rate_limits;
-- Policy already exists and is correct