import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders, handleCorsPreFlight } from "../_shared/cors.ts";

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const TARGET = "https://www.thesuper30.ai/";

async function fetchAll(q: (from: number, to: number) => any) {
  const out: any[] = [];
  for (let from = 0; from < 20000; from += 1000) {
    const { data, error } = await q(from, from + 999);
    if (error) throw new Error(error.message);
    out.push(...(data ?? []));
    if (!data || data.length < 1000) break;
  }
  return out;
}

async function gscPages(start: string, end: string) {
  const lk = Deno.env.get("LOVABLE_API_KEY");
  const ck = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
  if (!lk || !ck) return { status: "not_connected", rows: [] };
  const headers = { Authorization: `Bearer ${lk}`, "X-Connection-Api-Key": ck };
  const sites = await fetch(`${GATEWAY}/webmasters/v3/sites`, { headers });
  if (!sites.ok) return { status: "error", error: `[${sites.status}] ${await sites.text()}`, rows: [] };
  const { siteEntry = [] } = await sites.json();
  const verified = siteEntry.filter((s: any) => s.permissionLevel !== "siteUnverifiedUser");
  const site = verified.find((s: any) => s.siteUrl === TARGET) ?? verified.find((s: any) => s.siteUrl.includes("thesuper30.ai"));
  if (!site) return { status: "no_property", rows: [] };
  const r = await fetch(`${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(site.siteUrl)}/searchAnalytics/query`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ startDate: start, endDate: end, dimensions: ["page"], rowLimit: 1000 }),
  });
  if (!r.ok) return { status: "error", error: `[${r.status}] ${await r.text()}`, rows: [] };
  const j = await r.json();
  return { status: "ok", site: site.siteUrl, rows: j.rows ?? [] };
}

Deno.serve(async (req) => {
  const pre = handleCorsPreFlight(req);
  if (pre) return pre;
  const cors = { ...getCorsHeaders(req.headers.get("origin")), "Content-Type": "application/json" };
  const json = (b: unknown, status = 200) => new Response(JSON.stringify(b), { status, headers: cors });

  try {
    const auth = req.headers.get("Authorization") ?? "";
    const token = auth.replace(/^Bearer\s+/i, "");
    if (!token) return json({ error: "Not signed in" }, 401);
    const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
    const { data: u, error: ue } = await admin.auth.getUser(token);
    if (ue || !u?.user) return json({ error: "Not signed in" }, 401);
    const { data: role } = await admin.from("user_roles").select("id").eq("user_id", u.user.id).eq("role", "admin").maybeSingle();
    if (!role) return json({ error: "No access" }, 403);

    const body = await req.json().catch(() => ({}));
    const start = new Date(body.start);
    const end = new Date(body.end);
    if (isNaN(+start) || isNaN(+end) || end < start || +end - +start > 400 * 86400000) {
      return json({ error: "Invalid date range" }, 400);
    }
    const s = start.toISOString(), e = end.toISOString();

    const sessions = await fetchAll((f, t) => admin.from("sessions")
      .select("id, first_page_url, referrer, ip_address, ip_city, ip_state, ip_country, browser, user_agent, created_at")
      .gte("created_at", s).lte("created_at", e).order("created_at", { ascending: false }).range(f, t));
    const metrics = await fetchAll((f, t) => admin.from("engagement_metrics")
      .select("id, session_id, page_url, max_scroll_depth, scroll_milestones, sections_viewed, time_on_page, interactions, created_at, updated_at")
      .gte("created_at", s).lte("created_at", e).order("created_at", { ascending: false }).range(f, t));
    const leads = await fetchAll((f, t) => admin.from("leads")
      .select("id, session_id, service_type, created_at")
      .gte("created_at", s).lte("created_at", e).range(f, t));

    let gsc: any = { status: "skipped", rows: [] };
    if (body.includeGsc) {
      const d = (x: Date) => x.toISOString().slice(0, 10);
      gsc = await gscPages(d(start), d(end)).catch((err) => ({ status: "error", error: String(err), rows: [] }));
    }
    return json({ sessions, metrics, leads, gsc, now: new Date().toISOString() });
  } catch (err) {
    console.error("traffic-dashboard error", err);
    return json({ error: String(err instanceof Error ? err.message : err) }, 500);
  }
});
