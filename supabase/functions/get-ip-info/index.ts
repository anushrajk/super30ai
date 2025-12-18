import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP from request headers
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("x-real-ip") || 
                     "unknown";
    
    console.log("Getting IP info for:", clientIp);

    // Use ip-api.com free tier for geolocation
    let ipInfo = {
      ip: clientIp,
      city: "Unknown",
      country: "Unknown"
    };

    if (clientIp && clientIp !== "unknown" && clientIp !== "127.0.0.1") {
      try {
        const geoResponse = await fetch(`http://ip-api.com/json/${clientIp}?fields=status,country,city,query`);
        const geoData = await geoResponse.json();
        
        if (geoData.status === "success") {
          ipInfo = {
            ip: geoData.query || clientIp,
            city: geoData.city || "Unknown",
            country: geoData.country || "Unknown"
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
      JSON.stringify({ error: error.message, ip: "unknown", city: "Unknown", country: "Unknown" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
