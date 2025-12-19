import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Rate limit: 50 sessions per IP per hour (allows for dev refreshes)
const RATE_LIMIT = 50;
const RATE_WINDOW_MINUTES = 60;

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const body = await req.json();
    const { first_page_url, referrer, user_agent, browser } = body;

    // Get client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("x-real-ip") || 
                     "unknown";

    const identifier = `ip:${clientIp}`;
    const operation = "create_session";

    // Check rate limit
    const windowStart = new Date(Date.now() - RATE_WINDOW_MINUTES * 60 * 1000).toISOString();
    
    const { count, error: countError } = await supabase
      .from("rate_limits")
      .select("*", { count: "exact", head: true })
      .eq("identifier", identifier)
      .eq("operation", operation)
      .gte("created_at", windowStart);

    if (countError) {
      console.error("Rate limit check error:", countError);
    }

    if (count !== null && count >= RATE_LIMIT) {
      console.log(`Rate limit exceeded for ${identifier}: ${count}/${RATE_LIMIT}`);
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Record this operation
    await supabase.from("rate_limits").insert({
      identifier,
      operation,
    });

    // Cleanup old rate limit records periodically (1% chance per request)
    if (Math.random() < 0.01) {
      await supabase.rpc("cleanup_old_rate_limits");
    }

    // Get IP info
    let ipInfo = { city: "Unknown", state: "Unknown", country: "Unknown" };
    if (clientIp && clientIp !== "unknown" && clientIp !== "127.0.0.1") {
      try {
        // Use ip-api.com (HTTP but reliable, data is not sensitive)
        const geoResponse = await fetch(
          `http://ip-api.com/json/${clientIp}?fields=status,country,regionName,city`
        );
        const geoData = await geoResponse.json();
        
        if (geoData.status === "success") {
          ipInfo = {
            city: geoData.city || "Unknown",
            state: geoData.regionName || "Unknown",
            country: geoData.country || "Unknown",
          };
        }
      } catch (geoError) {
        console.error("Geo lookup error:", geoError);
      }
    }

    // Create the session
    const { data: session, error: insertError } = await supabase
      .from("sessions")
      .insert({
        first_page_url,
        current_page_url: first_page_url,
        referrer,
        user_agent,
        browser,
        ip_address: clientIp,
        ip_city: ipInfo.city,
        ip_state: ipInfo.state,
        ip_country: ipInfo.country,
      })
      .select()
      .single();

    if (insertError) {
      console.error("Session insert error:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to create session" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Session created:", session.id);

    return new Response(JSON.stringify(session), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error in create-session:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
