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
  "https://script.google.com/macros/s/AKfycbyQywSTHz2NKRwvg-oyXJVP_-GyUCaWrkYm9OQ7IudJsWZHXLYiqarcYtpE85NKYWzW/exec";

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

    // Log for debugging in backend logs
    console.log("Sheets sync status:", upstreamRes.status);
    console.log("Sheets sync response (first 500 chars):", upstreamText.slice(0, 500));

    return new Response(
      JSON.stringify({
        ok: upstreamRes.ok,
        status: upstreamRes.status,
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
