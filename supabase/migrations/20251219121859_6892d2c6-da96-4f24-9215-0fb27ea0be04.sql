-- Add ip_state column to sessions table
ALTER TABLE public.sessions ADD COLUMN IF NOT EXISTS ip_state TEXT;

-- Add comment for documentation
COMMENT ON COLUMN public.sessions.ip_state IS 'IP geolocation state/region';