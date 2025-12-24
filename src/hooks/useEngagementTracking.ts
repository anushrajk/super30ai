import { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface Interaction {
  type: string;
  element: string;
  timestamp: number;
}

interface EngagementData {
  maxScrollDepth: number;
  scrollMilestones: number[];
  sectionsViewed: string[];
  timeOnPage: number;
  interactions: Interaction[];
}

export const useEngagementTracking = () => {
  const location = useLocation();
  const startTimeRef = useRef<number>(Date.now());
  const engagementRef = useRef<EngagementData>({
    maxScrollDepth: 0,
    scrollMilestones: [],
    sectionsViewed: [],
    timeOnPage: 0,
    interactions: [],
  });
  const metricIdRef = useRef<string | null>(null);
  const syncIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastSyncRef = useRef<number>(Date.now());
  const lastDataHashRef = useRef<string>("");

  const getSessionId = useCallback((): string | null => {
    try {
      const stored = localStorage.getItem("super30_session");
      if (stored) {
        const session = JSON.parse(stored);
        return session.id || null;
      }
    } catch {
      // Ignore parsing errors
    }
    return null;
  }, []);

  // Create a simple hash to check if data has changed
  const getDataHash = useCallback((data: EngagementData): string => {
    return `${data.maxScrollDepth}-${data.scrollMilestones.length}-${data.sectionsViewed.length}-${data.interactions.length}`;
  }, []);

  const syncToDatabase = useCallback(async () => {
    const sessionId = getSessionId();
    
    // Don't sync if no session ID - prevents RLS failures
    if (!sessionId) {
      return;
    }

    const data = engagementRef.current;
    data.timeOnPage = Math.floor((Date.now() - startTimeRef.current) / 1000);

    // Check if data has actually changed since last sync
    const currentHash = getDataHash(data);
    if (currentHash === lastDataHashRef.current && metricIdRef.current) {
      return; // No changes, skip sync
    }

    const payload = {
      session_id: sessionId,
      page_url: location.pathname,
      max_scroll_depth: Math.round(data.maxScrollDepth),
      scroll_milestones: JSON.parse(JSON.stringify(data.scrollMilestones)),
      sections_viewed: JSON.parse(JSON.stringify(data.sectionsViewed)),
      time_on_page: data.timeOnPage,
      interactions: JSON.parse(JSON.stringify(data.interactions)),
    };

    try {
      if (metricIdRef.current) {
        await supabase
          .from("engagement_metrics")
          .update(payload)
          .eq("id", metricIdRef.current);
      } else {
        const { data: inserted } = await supabase
          .from("engagement_metrics")
          .insert([payload])
          .select("id")
          .single();
        
        if (inserted?.id) {
          metricIdRef.current = inserted.id;
        }
      }
      lastSyncRef.current = Date.now();
      lastDataHashRef.current = currentHash;
    } catch (error) {
      // Silently handle errors - don't spam console in production
      if (process.env.NODE_ENV === 'development') {
        console.error("Failed to sync engagement metrics:", error);
      }
    }
  }, [location.pathname, getSessionId, getDataHash]);

  const trackInteraction = useCallback((type: string, element: string) => {
    engagementRef.current.interactions.push({
      type,
      element,
      timestamp: Date.now() - startTimeRef.current,
    });
  }, []);

  // Track scroll depth
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        if (scrollPercent > engagementRef.current.maxScrollDepth) {
          engagementRef.current.maxScrollDepth = scrollPercent;
        }

        // Track milestones
        const milestones = [25, 50, 75, 100];
        milestones.forEach((milestone) => {
          if (
            scrollPercent >= milestone &&
            !engagementRef.current.scrollMilestones.includes(milestone)
          ) {
            engagementRef.current.scrollMilestones.push(milestone);
          }
        });

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track sections viewed with Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (!engagementRef.current.sectionsViewed.includes(sectionId)) {
              engagementRef.current.sectionsViewed.push(sectionId);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  // Track CTA clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest("button, a[href], [role='button']");
      
      if (button) {
        const text = button.textContent?.trim().slice(0, 50) || "unknown";
        const tagName = button.tagName.toLowerCase();
        trackInteraction("click", `${tagName}: ${text}`);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [trackInteraction]);

  // Periodic sync and cleanup
  useEffect(() => {
    // Reset on page change
    startTimeRef.current = Date.now();
    metricIdRef.current = null;
    lastDataHashRef.current = "";
    engagementRef.current = {
      maxScrollDepth: 0,
      scrollMilestones: [],
      sectionsViewed: [],
      timeOnPage: 0,
      interactions: [],
    };

    // Sync every 30 seconds
    syncIntervalRef.current = setInterval(syncToDatabase, 30000);

    // Sync on page unload
    const handleUnload = () => {
      syncToDatabase();
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      if (syncIntervalRef.current) {
        clearInterval(syncIntervalRef.current);
      }
      window.removeEventListener("beforeunload", handleUnload);
      syncToDatabase();
    };
  }, [location.pathname, syncToDatabase]);

  return { trackInteraction };
};
