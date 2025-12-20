import { useState, useEffect } from 'react';
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

export const useSession = () => {
  const [session, setSession] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initSession = async () => {
      try {
        // Check if session already exists in localStorage
        const existingSessionId = localStorage.getItem('seo_session_id');
        
        if (existingSessionId) {
          // Validate existing session via secure edge function
          const { data: validationResult, error } = await supabase.functions.invoke('validate-session', {
            headers: { 'x-session-id': existingSessionId }
          });
          
          if (error) {
            console.error('Error validating session:', error);
            // Clear invalid session and create new one
            localStorage.removeItem('seo_session_id');
          } else if (validationResult?.valid && validationResult?.session) {
            setSession({
              ...validationResult.session,
              current_page_url: window.location.href,
              ip_state: validationResult.session.ip_state || 'Unknown'
            } as SessionData);
            setLoading(false);
            return;
          } else {
            // Session not found or invalid, clear localStorage
            localStorage.removeItem('seo_session_id');
          }
        }

        // Get browser info
        const userAgent = navigator.userAgent;
        const browser = getBrowserName(userAgent);

        // Create new session via rate-limited edge function
        const { data: newSession, error } = await supabase.functions.invoke('create-session', {
          body: {
            first_page_url: window.location.href,
            referrer: document.referrer || 'Direct',
            user_agent: userAgent,
            browser,
          }
        });

        if (error) {
          console.warn('Session creation skipped (rate limited or error):', error.message);
          // Continue without session - graceful degradation
        } else if (newSession) {
          localStorage.setItem('seo_session_id', newSession.id);
          setSession(newSession as SessionData);
        }
      } catch (error) {
        console.error('Session initialization error:', error);
      } finally {
        setLoading(false);
      }
    };

    initSession();
  }, []);

  const updateCurrentPage = async () => {
    // Current page updates now happen only client-side
    // Server-side tracking can be done via edge function if needed
    if (session?.id) {
      setSession(prev => prev ? { ...prev, current_page_url: window.location.href } : null);
    }
  };

  return { session, loading, updateCurrentPage };
};

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
