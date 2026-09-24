import { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";

/**
 * Page-level engagement tracking.
 * Records: scroll depth + milestones, sections viewed, time on page (active),
 * button/link clicks (incl. phone, WhatsApp, email, outbound), form start/submit,
 * and an "engaged" flag used to compute bounce rate
 * (bounce = single-page session with no engagement).
 * Data goes to the engagement_metrics table and is mirrored to GTM's dataLayer.
 */

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

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
const ENGAGED_SECONDS = 10;

const pushDataLayer = (event: string, params: Record<string, unknown>) => {
  try {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event, ...params });
  } catch {
    /* ignore */
  }
};

const getSessionId = (): string | null => {
  try {
    const id = localStorage.getItem("seo_session_id");
    if (id) return id;
    const legacy = localStorage.getItem("super30_session");
    if (legacy) return JSON.parse(legacy)?.id || null;
  } catch {
    /* ignore */
  }
  return null;
};

const classifyLink = (el: Element): string => {
  const href = (el as HTMLAnchorElement).getAttribute?.("href") || "";
  if (href.startsWith("tel:")) return "phone_click";
  if (href.startsWith("mailto:")) return "email_click";
  if (/wa\.me|whatsapp/i.test(href)) return "whatsapp_click";
  if (/^https?:\/\//i.test(href) && !href.includes(window.location.host)) return "outbound_click";
  if (el.tagName === "A") return "link_click";
  return "button_click";
};

export const useEngagementTracking = () => {
  const location = useLocation();
  const startTimeRef = useRef<number>(Date.now());
  const hiddenMsRef = useRef<number>(0);
  const hiddenAtRef = useRef<number | null>(null);
  const engagementRef = useRef<EngagementData>({
    maxScrollDepth: 0,
    scrollMilestones: [],
    sectionsViewed: [],
    timeOnPage: 0,
    interactions: [],
  });
  const metricIdRef = useRef<string | null>(null);
  const lastHashRef = useRef<string>("");
  const pathRef = useRef(location.pathname);
  const engagedSentRef = useRef(false);

  const activeSeconds = () => {
    const hidden = hiddenMsRef.current + (hiddenAtRef.current ? Date.now() - hiddenAtRef.current : 0);
    return Math.max(0, Math.floor((Date.now() - startTimeRef.current - hidden) / 1000));
  };

  const trackInteraction = useCallback((type: string, element: string) => {
    const list = engagementRef.current.interactions;
    if (list.length >= 190) return;
    list.push({ type, element: element.slice(0, 80), timestamp: Date.now() - startTimeRef.current });
  }, []);

  const markEngaged = useCallback((reason: string) => {
    if (engagedSentRef.current) return;
    engagedSentRef.current = true;
    trackInteraction("engaged", reason);
    pushDataLayer("engaged_visit", { page_path: pathRef.current, reason });
  }, [trackInteraction]);

  const sync = useCallback(async (useBeacon = false) => {
    const sessionId = getSessionId();
    if (!sessionId || !SUPABASE_URL) return;
    const data = engagementRef.current;
    data.timeOnPage = activeSeconds();

    const hash = `${Math.round(data.maxScrollDepth)}-${data.sectionsViewed.length}-${data.interactions.length}-${Math.floor(data.timeOnPage / 5)}`;
    if (hash === lastHashRef.current && metricIdRef.current) return;

    const body = JSON.stringify({
      sessionId,
      metricId: metricIdRef.current,
      payload: {
        page_url: pathRef.current,
        max_scroll_depth: Math.round(data.maxScrollDepth),
        scroll_milestones: [...data.scrollMilestones],
        sections_viewed: [...data.sectionsViewed],
        time_on_page: data.timeOnPage,
        interactions: [...data.interactions],
      },
    });

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/update-engagement`, {
        method: "POST",
        keepalive: useBeacon,
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        body,
      });
      lastHashRef.current = hash;
      if (!useBeacon && res.ok) {
        const json = await res.json().catch(() => null);
        if (json?.id && !metricIdRef.current) metricIdRef.current = json.id;
      }
    } catch (error) {
      if (import.meta.env.DEV) console.error("Engagement sync failed:", error);
    }
  }, []);

  // Scroll depth
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? Math.min(100, (window.scrollY / docHeight) * 100) : 0;
        const e = engagementRef.current;
        if (pct > e.maxScrollDepth) e.maxScrollDepth = pct;
        [25, 50, 75, 100].forEach((m) => {
          if (pct >= m - 0.5 && !e.scrollMilestones.includes(m)) {
            e.scrollMilestones.push(m);
            pushDataLayer("scroll_depth", { page_path: pathRef.current, percent: m });
            if (m >= 50) markEngaged("scroll_50");
          }
        });
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [markEngaged]);

  // Sections viewed (re-scan after lazy sections mount)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          const list = engagementRef.current.sectionsViewed;
          if (id && !list.includes(id) && list.length < 50) {
            list.push(id);
            pushDataLayer("section_view", { page_path: pathRef.current, section: id });
          }
        });
      },
      { threshold: 0.3 }
    );
    const observed = new Set<Element>();
    const scan = () =>
      document.querySelectorAll("section[id]").forEach((s) => {
        if (!observed.has(s)) {
          observed.add(s);
          observer.observe(s);
        }
      });
    scan();
    const t1 = setTimeout(scan, 1500);
    const t2 = setTimeout(scan, 5000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      observer.disconnect();
    };
  }, [location.pathname]);

  // Clicks + forms
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.("button, a[href], [role='button'], input[type='submit']");
      if (!el) return;
      const type = classifyLink(el);
      const label =
        el.getAttribute("aria-label") ||
        el.textContent?.trim().replace(/\s+/g, " ") ||
        (el as HTMLAnchorElement).getAttribute("href") ||
        "unknown";
      trackInteraction(type, `${el.tagName.toLowerCase()}: ${label}`);
      pushDataLayer("button_click", { page_path: pathRef.current, click_type: type, label: label.slice(0, 80) });
      markEngaged(type);
    };
    const startedForms = new WeakSet<HTMLFormElement>();
    const onFocus = (e: FocusEvent) => {
      const form = (e.target as HTMLElement)?.closest?.("form");
      if (!form || startedForms.has(form)) return;
      startedForms.add(form);
      const name = form.getAttribute("id") || form.getAttribute("name") || "form";
      trackInteraction("form_start", name);
      pushDataLayer("form_start", { page_path: pathRef.current, form: name });
      markEngaged("form_start");
    };
    const onSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement;
      const name = form.getAttribute("id") || form.getAttribute("name") || "form";
      trackInteraction("form_submit", name);
      pushDataLayer("form_submit", { page_path: pathRef.current, form: name });
      void sync();
    };
    document.addEventListener("click", onClick, true);
    document.addEventListener("focusin", onFocus);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, [trackInteraction, markEngaged, sync]);

  // Page lifecycle: reset, periodic sync, flush on hide
  useEffect(() => {
    pathRef.current = location.pathname;
    startTimeRef.current = Date.now();
    hiddenMsRef.current = 0;
    hiddenAtRef.current = document.hidden ? Date.now() : null;
    metricIdRef.current = null;
    lastHashRef.current = "";
    engagedSentRef.current = false;
    engagementRef.current = { maxScrollDepth: 0, scrollMilestones: [], sectionsViewed: [], timeOnPage: 0, interactions: [] };

    const first = setTimeout(() => void sync(), 3000);
    const engagedTimer = setTimeout(() => markEngaged(`time_${ENGAGED_SECONDS}s`), ENGAGED_SECONDS * 1000);
    const interval = setInterval(() => void sync(), 15000);

    const onVisibility = () => {
      if (document.hidden) {
        hiddenAtRef.current = Date.now();
        void sync(true);
      } else if (hiddenAtRef.current) {
        hiddenMsRef.current += Date.now() - hiddenAtRef.current;
        hiddenAtRef.current = null;
      }
    };
    const onPageHide = () => void sync(true);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", onPageHide);

    return () => {
      clearTimeout(first);
      clearTimeout(engagedTimer);
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", onPageHide);
      void sync(true);
    };
  }, [location.pathname, sync, markEngaged]);

  return { trackInteraction };
};
