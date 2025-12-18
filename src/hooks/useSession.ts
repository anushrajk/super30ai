import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface SessionData {
  id: string;
  first_page_url: string;
  current_page_url: string;
  referrer: string;
  ip_address: string;
  ip_city: string;
  ip_country: string;
  browser: string;
  user_agent: string;
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
          // Fetch existing session
          const { data: existingSession } = await supabase
            .from('sessions')
            .select('*')
            .eq('id', existingSessionId)
            .single();
          
          if (existingSession) {
            // Update current page URL
            await supabase
              .from('sessions')
              .update({ current_page_url: window.location.href })
              .eq('id', existingSessionId);
            
            setSession({
              ...existingSession,
              current_page_url: window.location.href
            } as SessionData);
            setLoading(false);
            return;
          }
        }

        // Get browser info
        const userAgent = navigator.userAgent;
        const browser = getBrowserName(userAgent);

        // Get IP info from edge function
        let ipInfo = { ip: 'unknown', city: 'Unknown', country: 'Unknown' };
        try {
          const { data: ipData } = await supabase.functions.invoke('get-ip-info');
          if (ipData) {
            ipInfo = ipData;
          }
        } catch (e) {
          console.error('Failed to get IP info:', e);
        }

        // Create new session
        const sessionData = {
          first_page_url: window.location.href,
          current_page_url: window.location.href,
          referrer: document.referrer || 'Direct',
          ip_address: ipInfo.ip,
          ip_city: ipInfo.city,
          ip_country: ipInfo.country,
          browser,
          user_agent: userAgent,
          first_landed_at: new Date().toISOString()
        };

        const { data: newSession, error } = await supabase
          .from('sessions')
          .insert(sessionData)
          .select()
          .single();

        if (error) {
          console.error('Failed to create session:', error);
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
    if (session?.id) {
      await supabase
        .from('sessions')
        .update({ current_page_url: window.location.href })
        .eq('id', session.id);
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
