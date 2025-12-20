import { useState, useEffect, useCallback, startTransition } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface SessionData {
  id: string;
  first_page_url: string;
  current_page_url: string;
  referrer: string;
  ip_address?: string;
  ip_city: string;
  ip_state: string;
  ip_country: string;
  browser: string;
  user_agent?: string;
  first_landed_at: string;
}

// Cache session data in memory to avoid repeated API calls
let cachedSession: SessionData | null = null;
let sessionInitPromise: Promise<SessionData | null> | null = null;

function getBrowserName(userAgent: string): string {
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('SamsungBrowser')) return 'Samsung Browser';
  if (userAgent.includes('Opera') || userAgent.includes('OPR')) return 'Opera';
  if (userAgent.includes('Trident')) return 'Internet Explorer';
  if (userAgent.includes('Edge')) return 'Edge (Legacy)';
  if (userAgent.includes('Edg')) return 'Edge';
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Safari')) return 'Safari';
  return 'Unknown';
}

// Initialize session in background - non-blocking
async function initSessionBackground(): Promise<SessionData | null> {
  try {
    const existingSessionId = localStorage.getItem('seo_session_id');
    
    if (existingSessionId) {
      // Validate existing session via edge function
      const { data: validationResult, error } = await supabase.functions.invoke('validate-session', {
        headers: { 'x-session-id': existingSessionId }
      });
      
      if (!error && validationResult?.valid && validationResult?.session) {
        const sessionData: SessionData = {
          ...validationResult.session,
          current_page_url: window.location.href,
          ip_state: validationResult.session.ip_state || 'Unknown'
        };
        cachedSession = sessionData;
        return sessionData;
      }
      
      // Session invalid, clear it
      localStorage.removeItem('seo_session_id');
    }

    // Create new session
    const userAgent = navigator.userAgent;
    const browser = getBrowserName(userAgent);

    const { data: newSession, error } = await supabase.functions.invoke('create-session', {
      body: {
        first_page_url: window.location.href,
        referrer: document.referrer || 'Direct',
        user_agent: userAgent,
        browser,
      }
    });

    if (!error && newSession) {
      localStorage.setItem('seo_session_id', newSession.id);
      cachedSession = newSession as SessionData;
      return newSession as SessionData;
    }
  } catch (error) {
    console.warn('Session initialization error:', error);
  }
  
  return null;
}

export const useSession = () => {
  // Initialize with cached session immediately - no loading state
  const [session, setSession] = useState<SessionData | null>(cachedSession);
  const [loading, setLoading] = useState(!cachedSession);

  useEffect(() => {
    // If we already have a cached session, we're done
    if (cachedSession) {
      setSession(cachedSession);
      setLoading(false);
      return;
    }

    // Use shared promise to avoid duplicate API calls
    if (!sessionInitPromise) {
      sessionInitPromise = initSessionBackground();
    }

    // Run session initialization in background with low priority
    sessionInitPromise.then((sessionData) => {
      startTransition(() => {
        if (sessionData) {
          setSession(sessionData);
        }
        setLoading(false);
      });
    });
  }, []);

  const updateCurrentPage = useCallback(() => {
    if (session?.id) {
      setSession(prev => prev ? { ...prev, current_page_url: window.location.href } : null);
    }
  }, [session?.id]);

  return { session, loading, updateCurrentPage };
};
