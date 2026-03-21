import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders, handleCorsPreFlight } from "../_shared/cors.ts";

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  try {
    const { sessionId, metricId, payload } = await req.json();

    if (!sessionId || !payload) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Sanitize payload - only allow known fields
    const sanitizedPayload = {
      session_id: sessionId,
      page_url: String(payload.page_url || "").slice(0, 500),
      max_scroll_depth: Math.min(Math.max(Math.round(Number(payload.max_scroll_depth) || 0), 0), 100),
      scroll_milestones: Array.isArray(payload.scroll_milestones) ? payload.scroll_milestones.filter((m: any) => [25, 50, 75, 100].includes(m)) : [],
      sections_viewed: Array.isArray(payload.sections_viewed) ? payload.sections_viewed.slice(0, 50).map((s: any) => String(s).slice(0, 100)) : [],
      time_on_page: Math.min(Math.max(Math.round(Number(payload.time_on_page) || 0), 0), 86400),
      interactions: Array.isArray(payload.interactions) ? payload.interactions.slice(0, 200) : [],
    };

    if (metricId) {
      // UPDATE: verify the row belongs to this session before updating
      const { data: existing } = await supabase
        .from("engagement_metrics")
        .select("session_id")
        .eq("id", metricId)
        .single();

      if (!existing || existing.session_id !== sessionId) {
        return new Response(
          JSON.stringify({ error: "Not authorized to update this record" }),
          { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      await supabase
        .from("engagement_metrics")
        .update(sanitizedPayload)
        .eq("id", metricId);

      return new Response(
        JSON.stringify({ ok: true, id: metricId }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    } else {
      // INSERT
      const { data: inserted } = await supabase
        .from("engagement_metrics")
        .insert([sanitizedPayload])
        .select("id")
        .single();

      return new Response(
        JSON.stringify({ ok: true, id: inserted?.id }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error("Engagement sync error:", error);
    return new Response(
      JSON.stringify({ error: "Service temporarily unavailable" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
