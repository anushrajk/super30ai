import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { format } from "date-fns";
import { CalendarIcon, Download, Loader2, RefreshCw, Radio } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
type DateRange = { from?: Date; to?: Date };
import { FunctionsHttpError } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

type Preset = "live" | "today" | "7d" | "28d" | "custom";
interface SessionRow { id: string; first_page_url: string | null; referrer: string | null; ip_address: string | null; ip_city: string | null; ip_state: string | null; ip_country: string | null; browser: string | null; user_agent: string | null; created_at: string; }
interface Interaction { type: string; element: string }
interface MetricRow { id: string; session_id: string | null; page_url: string; max_scroll_depth: number | null; scroll_milestones: number[] | null; time_on_page: number | null; interactions: Interaction[] | null; created_at: string; updated_at: string | null; }
interface LeadRow { id: string; session_id: string | null; created_at: string }
interface GscRow { keys: string[]; clicks: number; impressions: number; ctr: number; position: number }
interface Payload { sessions: SessionRow[]; metrics: MetricRow[]; leads: LeadRow[]; gsc: { status: string; error?: string; rows: GscRow[] }; now: string }

const CLICK_TYPES = ["button_click", "link_click", "phone_click", "whatsapp_click", "email_click", "outbound_click"] as const;

const istFmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true });
const fmtIST = (iso: string) => {
  const p = Object.fromEntries(istFmt.formatToParts(new Date(iso)).map((x) => [x.type, x.value]));
  return `${p.day} ${p.month} ${p.year} ${p.hour}:${p.minute} ${String(p.dayPeriod).toUpperCase()} IST`;
};
const istKey = (iso: string, hourly: boolean) => {
  const d = new Date(new Date(iso).getTime() + 5.5 * 3600000).toISOString();
  return hourly ? `${d.slice(8, 10)}/${d.slice(5, 7)} ${d.slice(11, 13)}:00` : `${d.slice(8, 10)}/${d.slice(5, 7)}`;
};

const pathOf = (url: string | null) => {
  if (!url) return "/";
  try { return new URL(url).pathname.replace(/\/+$/, "") || "/"; } catch { return (url.split("?")[0].replace(/\/+$/, "") || "/"); }
};
const isInternal = (s: SessionRow) => /lovable\.(app|dev)|lovableproject\.com|localhost/i.test(s.first_page_url || "");
const isBot = (s: SessionRow) => {
  const ua = (s.user_agent || "").toLowerCase();
  if (/bot|crawler|spider|headless|lighthouse|pagespeed|slurp|curl|wget|python|scrapy|pingdom|uptime/.test(ua)) return true;
  // Google crawler IPs (Mountain View) with no engagement signal
  if (/mountain view/i.test(s.ip_city || "") && /united states/i.test(s.ip_country || "")) return true;
  return false;
};
const sourceOf = (s: SessionRow): string => {
  const url = s.first_page_url || "";
  const ref = (s.referrer || "").toLowerCase();
  if (/[?&](gclid|gbraid|wbraid|fbclid)=|utm_medium=(cpc|paid|ppc)/i.test(url)) return "Paid ads";
  if (/google\.|bing\.|duckduckgo|yahoo\.|ecosia|yandex/.test(ref)) return "Organic search";
  if (/chatgpt|openai|perplexity|claude|gemini|copilot/.test(ref)) return "AI assistants";
  if (/facebook|instagram|linkedin|t\.co|twitter|x\.com|youtube|whatsapp|pinterest/.test(ref)) return "Social";
  if (!ref || ref === "direct") return "Direct";
  return "Referral";
};

const toCsv = (rows: Record<string, unknown>[]) => {
  if (!rows.length) return "";
  const cols = Object.keys(rows[0]);
  const esc = (v: unknown) => { const s = v == null ? "" : String(v); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
  return [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n");
};
const download = (name: string, rows: Record<string, unknown>[]) => {
  const blob = new Blob([toCsv(rows)], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = name; a.click();
  URL.revokeObjectURL(a.href);
};

const rangeFor = (preset: Preset, custom?: DateRange): { start: Date; end: Date } => {
  const now = new Date();
  if (preset === "live") return { start: new Date(now.getTime() - 30 * 60000), end: now };
  if (preset === "today") {
    const ist = new Date(now.getTime() + 5.5 * 3600000); ist.setUTCHours(0, 0, 0, 0);
    return { start: new Date(ist.getTime() - 5.5 * 3600000), end: now };
  }
  if (preset === "7d") return { start: new Date(now.getTime() - 7 * 86400000), end: now };
  if (preset === "custom" && custom?.from) {
    const end = new Date(custom.to ?? custom.from); end.setHours(23, 59, 59, 999);
    return { start: new Date(new Date(custom.from).setHours(0, 0, 0, 0)), end };
  }
  return { start: new Date(now.getTime() - 28 * 86400000), end: now };
};

const Stat = ({ label, value, hint }: { label: string; value: string | number; hint?: string }) => (
  <div className="rounded-2xl border border-border bg-card p-4">
    <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
    <p className="mt-1 text-2xl font-semibold text-foreground">{value}</p>
    {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
  </div>
);

const AdminTraffic = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [preset, setPreset] = useState<Preset>("28d");
  const [custom, setCustom] = useState<DateRange | undefined>();
  const [hideInternal, setHideInternal] = useState(true);
  const [hideBots, setHideBots] = useState(true);
  const [data, setData] = useState<Payload | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [denied, setDenied] = useState(false);

  useEffect(() => { if (!authLoading && !user) navigate("/auth?redirect=/admin/traffic", { replace: true }); }, [user, authLoading, navigate]);

  const load = useCallback(async () => {
    if (preset === "custom" && !custom?.from) return;
    const { start, end } = rangeFor(preset, custom ? { ...custom } : undefined);
    setLoading(true); setError(null);
    const { data: res, error: err } = await supabase.functions.invoke("traffic-dashboard", {
      body: { start: start.toISOString(), end: end.toISOString(), includeGsc: preset !== "live" },
    });
    if (err) {
      let msg = err.message;
      if (err instanceof FunctionsHttpError) {
        if (err.context.status === 403) setDenied(true);
        msg = await err.context.text();
      }
      setError(msg);
    } else setData(res as Payload);
    setLoading(false);
  }, [preset, custom]);

  useEffect(() => { if (user) void load(); }, [user, load]);
  useEffect(() => {
    if (preset !== "live" || !user) return;
    const t = setInterval(() => void load(), 15000);
    return () => clearInterval(t);
  }, [preset, user, load]);

  const view = useMemo(() => {
    if (!data) return null;
    const sessions = data.sessions.filter((s) => (!hideInternal || !isInternal(s)) && (!hideBots || !isBot(s)));
    const sMap = new Map(sessions.map((s) => [s.id, s]));
    const metrics = data.metrics.filter((m) => m.session_id && sMap.has(m.session_id));
    const leads = data.leads.filter((l) => !hideInternal || !l.session_id || sMap.has(l.session_id) || !data.sessions.some((s) => s.id === l.session_id));

    const bySession = new Map<string, MetricRow[]>();
    metrics.forEach((m) => { const a = bySession.get(m.session_id!) ?? []; a.push(m); bySession.set(m.session_id!, a); });
    const engagedSession = (id: string) => (bySession.get(id) ?? []).some((m) => (m.interactions ?? []).some((i) => i.type === "engaged"));
    const bounced = (id: string) => (bySession.get(id)?.length ?? 0) <= 1 && !engagedSession(id);
    const tracked = sessions.filter((s) => bySession.has(s.id));

    const allInteractions = metrics.flatMap((m) => m.interactions ?? []);
    const count = (t: string) => allInteractions.filter((i) => i.type === t).length;
    const clicks = CLICK_TYPES.reduce((n, t) => n + count(t), 0);
    const uniqueIps = new Set(sessions.map((s) => s.ip_address || s.id)).size;
    const avgTime = metrics.length ? Math.round(metrics.reduce((n, m) => n + (m.time_on_page ?? 0), 0) / metrics.length) : 0;

    // Page table
    const gscByPath = new Map<string, GscRow>();
    data.gsc.rows.forEach((r) => {
      const p = pathOf(r.keys[0]);
      const prev = gscByPath.get(p);
      if (prev) { prev.clicks += r.clicks; prev.impressions += r.impressions; }
      else gscByPath.set(p, { ...r });
    });
    const pages = new Map<string, MetricRow[]>();
    metrics.forEach((m) => { const p = pathOf(m.page_url); const a = pages.get(p) ?? []; a.push(m); pages.set(p, a); });
    const landings = new Map<string, SessionRow[]>();
    sessions.forEach((s) => { const p = pathOf(s.first_page_url); const a = landings.get(p) ?? []; a.push(s); landings.set(p, a); });
    const leadSessions = new Set(leads.map((l) => l.session_id));
    const allPaths = new Set([...pages.keys(), ...landings.keys(), ...gscByPath.keys()]);

    const pageRows = [...allPaths].map((path) => {
      const ms = pages.get(path) ?? [];
      const land = (landings.get(path) ?? []).filter((s) => bySession.has(s.id));
      const ints = ms.flatMap((m) => m.interactions ?? []);
      const c = (t: string) => ints.filter((i) => i.type === t).length;
      const sids = new Set(ms.map((m) => m.session_id));
      const ips = new Set([...sids].map((id) => sMap.get(id!)?.ip_address || id));
      const milestone = (n: number) => ms.filter((m) => (m.scroll_milestones ?? []).includes(n)).length;
      const g = gscByPath.get(path);
      return {
        page: path,
        page_views: ms.length,
        sessions: sids.size,
        unique_visitors: ips.size,
        landing_sessions: land.length,
        bounce_rate_pct: land.length ? Math.round((land.filter((s) => bounced(s.id)).length / land.length) * 100) : "",
        avg_time_on_page_sec: ms.length ? Math.round(ms.reduce((n, m) => n + (m.time_on_page ?? 0), 0) / ms.length) : "",
        avg_scroll_depth_pct: ms.length ? Math.round(ms.reduce((n, m) => n + (m.max_scroll_depth ?? 0), 0) / ms.length) : "",
        reached_25pct: milestone(25), reached_50pct: milestone(50), reached_75pct: milestone(75), reached_100pct: milestone(100),
        button_clicks: c("button_click"), link_clicks: c("link_click"), phone_clicks: c("phone_click"),
        whatsapp_clicks: c("whatsapp_click"), email_clicks: c("email_click"), outbound_clicks: c("outbound_click"),
        form_starts: c("form_start"), form_submits: c("form_submit"),
        enquiries: (landings.get(path) ?? []).filter((s) => leadSessions.has(s.id)).length,
        google_clicks: g?.clicks ?? "", google_views: g?.impressions ?? "",
        google_ctr_pct: g && g.impressions ? +((g.clicks / g.impressions) * 100).toFixed(2) : "",
        google_avg_position: g ? +g.position.toFixed(1) : "",
      };
    }).sort((a, b) => (b.page_views - a.page_views) || (Number(b.google_clicks || 0) - Number(a.google_clicks || 0)));

    // Visitor log
    const visitorRows = sessions.map((s) => {
      const ms = bySession.get(s.id) ?? [];
      return {
        time_ist: fmtIST(s.created_at),
        landing_page: pathOf(s.first_page_url),
        source: sourceOf(s),
        referrer: s.referrer || "Direct",
        city: [s.ip_city, s.ip_state, s.ip_country].filter((x) => x && x !== "Unknown").join(", "),
        browser: s.browser || "",
        pages_seen: ms.length,
        pages: [...new Set(ms.map((m) => pathOf(m.page_url)))].join(" > "),
        time_on_site_sec: ms.reduce((n, m) => n + (m.time_on_page ?? 0), 0),
        clicks: ms.flatMap((m) => m.interactions ?? []).filter((i) => (CLICK_TYPES as readonly string[]).includes(i.type)).length,
        engaged: !ms.length ? "not tracked" : engagedSession(s.id) ? "yes" : "no",
        bounced: !ms.length ? "not tracked" : bounced(s.id) ? "yes" : "no",
        enquiry: leadSessions.has(s.id) ? "yes" : "no",
      };
    });

    const sources = new Map<string, number>();
    sessions.forEach((s) => sources.set(sourceOf(s), (sources.get(sourceOf(s)) ?? 0) + 1));

    const hourly = preset === "live" || preset === "today";
    const buckets = new Map<string, { label: string; sessions: number; ips: Set<string> }>();
    [...sessions].reverse().forEach((s) => {
      const k = istKey(s.created_at, hourly);
      const b = buckets.get(k) ?? { label: k, sessions: 0, ips: new Set<string>() };
      b.sessions++; b.ips.add(s.ip_address || s.id); buckets.set(k, b);
    });
    const trend = [...buckets.values()].map((b) => ({ label: b.label, Sessions: b.sessions, "Unique visitors": b.ips.size }));

    const nowMs = new Date(data.now).getTime();
    const liveNow = metrics
      .filter((m) => nowMs - new Date(m.updated_at ?? m.created_at).getTime() < 5 * 60000)
      .map((m) => ({ m, s: sMap.get(m.session_id!)! }));
    const liveSeen = new Set<string>();
    const live = liveNow.filter(({ m }) => (liveSeen.has(m.session_id!) ? false : (liveSeen.add(m.session_id!), true)));

    return {
      sessions: sessions.length, uniqueIps, tracked: tracked.length,
      engaged: tracked.filter((s) => engagedSession(s.id)).length,
      bounceRate: tracked.length ? Math.round((tracked.filter((s) => bounced(s.id)).length / tracked.length) * 100) : null,
      avgTime, clicks, formStarts: count("form_start"), formSubmits: count("form_submit"), enquiries: leads.length,
      pageRows, visitorRows, sources: [...sources.entries()].sort((a, b) => b[1] - a[1]), trend, live,
    };
  }, [data, hideInternal, preset]);

  if (authLoading || !user) return <div className="flex min-h-screen items-center justify-center"><Loader2 className="h-6 w-6 animate-spin" /></div>;
  if (denied) return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 p-6 text-center">
      <h1 className="text-2xl font-semibold">No access</h1>
      <p className="text-muted-foreground">This dashboard is only available to admins.</p>
      <Button asChild className="rounded-full"><Link to="/">Back to site</Link></Button>
    </div>
  );

  const stamp = format(new Date(), "yyyy-MM-dd");
  const presets: { id: Preset; label: string }[] = [
    { id: "live", label: "Live" }, { id: "today", label: "Today" }, { id: "7d", label: "7 days" }, { id: "28d", label: "28 days" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet><title>Traffic Dashboard - Super 30 Admin</title><meta name="robots" content="noindex,nofollow" /></Helmet>
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-foreground">Traffic Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              {data ? `Updated ${fmtIST(data.now)}` : "Loading…"} · <Link to="/admin/blogs" className="underline">Blog admin</Link>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {presets.map((p) => (
              <Button key={p.id} size="sm" variant={preset === p.id ? "default" : "outline"} className="rounded-full" onClick={() => setPreset(p.id)}>
                {p.id === "live" && <Radio className="mr-1 h-3 w-3" />}{p.label}
              </Button>
            ))}
            <Popover>
              <PopoverTrigger asChild>
                <Button size="sm" variant={preset === "custom" ? "default" : "outline"} className="rounded-full">
                  <CalendarIcon className="mr-1 h-3 w-3" />
                  {preset === "custom" && custom?.from ? `${format(custom.from, "dd MMM")} – ${format(custom.to ?? custom.from, "dd MMM")}` : "Custom"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <div className="flex flex-col gap-2 p-3 text-sm">
                  <label>From <input type="date" max={format(new Date(), "yyyy-MM-dd")} className="ml-2 rounded border border-border bg-background px-2 py-1" onChange={(e) => { if (e.target.value) { setCustom((c) => ({ ...c, from: new Date(e.target.value) })); setPreset("custom"); } }} /></label>
                  <label>To <input type="date" max={format(new Date(), "yyyy-MM-dd")} className="ml-6 rounded border border-border bg-background px-2 py-1" onChange={(e) => { if (e.target.value) { setCustom((c) => ({ ...c, to: new Date(e.target.value) })); setPreset("custom"); } }} /></label>
                </div>
              </PopoverContent>
            </Popover>
            <Button size="sm" variant="outline" className="rounded-full" onClick={() => void load()} disabled={loading}>
              <RefreshCw className={cn("h-3 w-3", loading && "animate-spin")} />
            </Button>
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <Switch checked={hideInternal} onCheckedChange={setHideInternal} /> Hide internal preview/test visits
        </label>

        {error && <div className="rounded-2xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">Couldn't load data: {error}</div>}

        {view && (
          <>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              <Stat label="Sessions" value={view.sessions} />
              <Stat label="Unique visitors" value={view.uniqueIps} hint="by IP address" />
              <Stat label="Engaged visits" value={view.engaged} hint={`of ${view.tracked} tracked`} />
              <Stat label="Bounce rate" value={view.bounceRate == null ? "—" : `${view.bounceRate}%`} />
              <Stat label="Avg. time on page" value={`${view.avgTime}s`} />
              <Stat label="Clicks" value={view.clicks} hint="buttons, links, calls, WhatsApp" />
              <Stat label="Form starts" value={view.formStarts} />
              <Stat label="Form submits" value={view.formSubmits} />
              <Stat label="Enquiries saved" value={view.enquiries} />
              <Stat label="Live now" value={view.live.length} hint="active in last 5 min" />
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-4 lg:col-span-2">
                <h2 className="mb-3 font-semibold text-foreground">Traffic trend</h2>
                {view.trend.length ? (
                  <ResponsiveContainer width="100%" height={260}>
                    <AreaChart data={view.trend}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="label" fontSize={11} stroke="hsl(var(--muted-foreground))" />
                      <YAxis allowDecimals={false} fontSize={11} stroke="hsl(var(--muted-foreground))" />
                      <Tooltip />
                      <Area type="monotone" dataKey="Sessions" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.2)" />
                      <Area type="monotone" dataKey="Unique visitors" stroke="hsl(var(--foreground))" fill="hsl(var(--foreground) / 0.05)" />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : <p className="py-16 text-center text-sm text-muted-foreground">No visits in this period.</p>}
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-border bg-card p-4">
                  <h2 className="mb-3 font-semibold text-foreground">Sources</h2>
                  {view.sources.length ? view.sources.map(([k, v]) => (
                    <div key={k} className="flex justify-between py-1 text-sm"><span>{k}</span><span className="font-medium">{v}</span></div>
                  )) : <p className="text-sm text-muted-foreground">No data.</p>}
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <h2 className="mb-3 flex items-center gap-2 font-semibold text-foreground"><Radio className="h-4 w-4 text-primary" />On the site now</h2>
                  {view.live.length ? view.live.map(({ m, s }) => (
                    <div key={m.id} className="border-b border-border py-2 text-sm last:border-0">
                      <p className="font-medium">{pathOf(m.page_url)}</p>
                      <p className="text-xs text-muted-foreground">{[s.ip_city, s.ip_country].filter(Boolean).join(", ")} · {sourceOf(s)}</p>
                    </div>
                  )) : <p className="text-sm text-muted-foreground">Nobody active right now{preset !== "live" && " — switch to Live for auto-refresh"}.</p>}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-4">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h2 className="font-semibold text-foreground">Page by page</h2>
                  <p className="text-xs text-muted-foreground">
                    Google columns: {data?.gsc.status === "ok" ? "from Search Console (about 2 days behind)" : data?.gsc.status === "skipped" ? "not shown in Live mode" : data?.gsc.status === "not_connected" ? "Search Console not linked yet" : `unavailable${data?.gsc.error ? ` (${data.gsc.error.slice(0, 120)})` : ""}`}
                  </p>
                </div>
                <Button size="sm" className="rounded-full" onClick={() => download(`page-report-${stamp}.csv`, view.pageRows)} disabled={!view.pageRows.length}>
                  <Download className="mr-1 h-3 w-3" />Download CSV
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[1100px] text-sm">
                  <thead className="text-left text-xs uppercase text-muted-foreground">
                    <tr>{["Page", "Views", "Sessions", "Unique", "Bounce", "Avg time", "Scroll", "Clicks", "Calls", "WhatsApp", "Form start", "Submits", "Enquiries", "Google clicks", "Google views", "Position"].map((h) => <th key={h} className="px-2 py-2 font-medium">{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {view.pageRows.slice(0, 200).map((r) => (
                      <tr key={r.page} className="border-t border-border">
                        <td className="max-w-[260px] truncate px-2 py-2 font-medium">{r.page}</td>
                        <td className="px-2">{r.page_views}</td><td className="px-2">{r.sessions}</td><td className="px-2">{r.unique_visitors}</td>
                        <td className="px-2">{r.bounce_rate_pct === "" ? "—" : `${r.bounce_rate_pct}%`}</td>
                        <td className="px-2">{r.avg_time_on_page_sec === "" ? "—" : `${r.avg_time_on_page_sec}s`}</td>
                        <td className="px-2">{r.avg_scroll_depth_pct === "" ? "—" : `${r.avg_scroll_depth_pct}%`}</td>
                        <td className="px-2">{r.button_clicks + r.link_clicks + r.email_clicks + r.outbound_clicks}</td>
                        <td className="px-2">{r.phone_clicks}</td><td className="px-2">{r.whatsapp_clicks}</td>
                        <td className="px-2">{r.form_starts}</td><td className="px-2">{r.form_submits}</td><td className="px-2">{r.enquiries}</td>
                        <td className="px-2">{r.google_clicks === "" ? "—" : r.google_clicks}</td>
                        <td className="px-2">{r.google_views === "" ? "—" : r.google_views}</td>
                        <td className="px-2">{r.google_avg_position === "" ? "—" : r.google_avg_position}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {!view.pageRows.length && <p className="py-8 text-center text-sm text-muted-foreground">No page data in this period.</p>}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-4">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="font-semibold text-foreground">Visitor log <span className="text-sm font-normal text-muted-foreground">({view.visitorRows.length})</span></h2>
                <Button size="sm" className="rounded-full" onClick={() => download(`visitor-log-${stamp}.csv`, view.visitorRows)} disabled={!view.visitorRows.length}>
                  <Download className="mr-1 h-3 w-3" />Download CSV
                </Button>
              </div>
              <div className="max-h-[560px] overflow-auto">
                <table className="w-full min-w-[900px] text-sm">
                  <thead className="sticky top-0 bg-card text-left text-xs uppercase text-muted-foreground">
                    <tr>{["Time", "Landing page", "Source", "City", "Pages", "Time", "Clicks", "Engaged", "Enquiry"].map((h, i) => <th key={i} className="px-2 py-2 font-medium">{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {view.visitorRows.slice(0, 500).map((r, i) => (
                      <tr key={i} className="border-t border-border">
                        <td className="whitespace-nowrap px-2 py-2">{r.time_ist}</td>
                        <td className="max-w-[220px] truncate px-2">{r.landing_page}</td>
                        <td className="px-2">{r.source}</td><td className="px-2">{r.city}</td>
                        <td className="px-2">{r.pages_seen}</td><td className="px-2">{r.time_on_site_sec}s</td><td className="px-2">{r.clicks}</td>
                        <td className="px-2"><Badge variant={r.engaged === "yes" ? "default" : "outline"}>{r.engaged}</Badge></td>
                        <td className="px-2">{r.enquiry}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminTraffic;
