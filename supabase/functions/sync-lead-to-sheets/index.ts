import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from "../_shared/cors.ts";

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

    // Log for debugging in backend logs
    console.log("Sheets sync HTTP status:", upstreamRes.status);
    console.log("Sheets sync body (first 500 chars):", upstreamText.slice(0, 500));

    return new Response(
      JSON.stringify({
        ok: upstreamRes.ok && appScriptOk,
        httpStatus: upstreamRes.status,
        appScriptStatus: appScriptStatus ?? null,
        appScriptMessage: upstreamJson?.message ?? null,
        bodyPreview: upstreamText.slice(0, 500),
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in sync-lead-to-sheets:", error);
    return new Response(JSON.stringify({ ok: false, error: error?.message ?? String(error) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);
