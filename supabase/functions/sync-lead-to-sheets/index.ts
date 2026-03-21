import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from "../_shared/cors.ts";
import { checkRateLimit } from "../_shared/rate-limit.ts";

interface SheetsLeadPayload {
  website?: string;
  email?: string;
  phone?: string;
  role?: string;
  revenue?: string;
  formSource?: string;
}

const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwtAO1DRg-1RnW5HreL0ewiFQoh-S4IqVPQRugUANbTvnurt1eO2Gk10P8pJh0S4MaK/exec";

const handler = async (req: Request): Promise<Response> => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  try {
    const payload: SheetsLeadPayload = await req.json();

    // Rate limit: 10 requests per IP per hour
    const rateLimitResult = await checkRateLimit(req, corsHeaders, {
      operation: "sync_lead_to_sheets",
      limit: 10,
    });
    if (!rateLimitResult.allowed) return rateLimitResult.response!;

    // Minimal validation (do not block funnel; just avoid sending garbage)
    if (!payload?.email || !payload?.website) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing email or website" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const upstreamRes = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const upstreamText = await upstreamRes.text();

    let upstreamJson: any = null;
    try {
      upstreamJson = JSON.parse(upstreamText);
    } catch {
      // ignore
    }

    const appScriptStatus = upstreamJson?.status;
    const appScriptOk = appScriptStatus === "success";

    // Log for debugging in backend logs only
    console.log("Sheets sync HTTP status:", upstreamRes.status);
    console.log("Sheets sync body (first 500 chars):", upstreamText.slice(0, 500));

    return new Response(
      JSON.stringify({
        ok: upstreamRes.ok && appScriptOk,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in sync-lead-to-sheets:", error?.message ?? error, error?.stack);
    return new Response(JSON.stringify({ ok: false, error: "Service temporarily unavailable. Please try again." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);
