import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from "../_shared/cors.ts";

const handler = async (req: Request): Promise<Response> => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  try {
    // Get client IP from request headers
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
                     req.headers.get("x-real-ip") || 
                     "unknown";
    
    console.log("Getting IP info for:", clientIp);

    // Default response
    let ipInfo = {
      ip: clientIp,
      city: "Unknown",
      state: "Unknown",
      country: "Unknown"
    };

    if (clientIp && clientIp !== "unknown" && clientIp !== "127.0.0.1") {
      try {
        // Use ipapi.co which supports HTTPS on free tier
        const geoResponse = await fetch(
          `https://ipapi.co/${clientIp}/json/`
        );
        const geoData = await geoResponse.json();
        
        console.log("Geo API response:", geoData);
        
        if (!geoData.error) {
          ipInfo = {
            ip: geoData.ip || clientIp,
            city: geoData.city || "Unknown",
            state: geoData.region || "Unknown",
            country: geoData.country_name || "Unknown"
          };
        }
      } catch (geoError) {
        console.error("Geo lookup error:", geoError);
      }
    }

    console.log("IP info result:", ipInfo);

    return new Response(JSON.stringify(ipInfo), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in get-ip-info function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to get IP info", 
        ip: "unknown", 
        city: "Unknown", 
        state: "Unknown",
        country: "Unknown" 
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
