import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders, handleCorsPreFlight } from "../_shared/cors.ts";

const handler = async (req: Request): Promise<Response> => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const sessionId = req.headers.get("x-session-id");
    if (!sessionId) {
      return new Response(
        JSON.stringify({ valid: false, error: "Session ID required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate session ID format (UUID)
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(sessionId)) {
      return new Response(
        JSON.stringify({ valid: false, error: "Invalid session ID format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Get client IP to verify it matches the session's IP
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("x-real-ip") || 
                     "unknown";

    // Fetch the session using service role
    const { data: session, error } = await supabase
      .from("sessions")
      .select("id, ip_address, first_page_url, referrer, browser, ip_city, ip_state, ip_country, first_landed_at")
      .eq("id", sessionId)
      .single();

    if (error || !session) {
      console.log(`Session not found: ${sessionId}`);
      return new Response(
        JSON.stringify({ valid: false, error: "Session not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Optional: Verify IP matches (strict mode) - commented out for flexibility
    // Users may change IPs (mobile networks, VPNs, etc.)
    // Uncomment for stricter security if needed:
    // if (session.ip_address !== clientIp && session.ip_address !== "unknown") {
    //   console.log(`IP mismatch for session ${sessionId}: ${session.ip_address} vs ${clientIp}`);
    //   return new Response(
    //     JSON.stringify({ valid: false, error: "Session IP mismatch" }),
    //     { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    //   );
    // }

    console.log(`Session validated: ${sessionId}`);
    
    return new Response(
      JSON.stringify({ 
        valid: true, 
        session: {
          id: session.id,
          first_page_url: session.first_page_url,
          referrer: session.referrer,
          browser: session.browser,
          ip_city: session.ip_city,
          ip_state: session.ip_state,
          ip_country: session.ip_country,
          first_landed_at: session.first_landed_at,
        }
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in validate-session:", error);
    return new Response(
      JSON.stringify({ valid: false, error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
