import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders, handleCorsPreFlight } from "../_shared/cors.ts";

// Rate limit: 10 lead operations per session per hour
const RATE_LIMIT = 10;
const RATE_WINDOW_MINUTES = 60;

interface LeadData {
  email: string;
  website_url: string;
  step?: number;
  role?: string;
  monthly_revenue?: string;
  phone?: string;
  company_name?: string;
  service_type?: string;
  business_type?: string;
  preferred_platforms?: string[];
}

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

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    const headerSessionId = req.headers.get("x-session-id");
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") || "unknown";

    // Resolve a usable session. A missing or stale session must NEVER cause a lost lead.
    let sessionId: string | null = null;
    if (headerSessionId && uuidRegex.test(headerSessionId)) {
      const { data: existingSession } = await supabase
        .from("sessions")
        .select("id")
        .eq("id", headerSessionId)
        .maybeSingle();
      if (existingSession?.id) sessionId = existingSession.id;
    }

    if (!sessionId) {
      const { data: fallbackSession, error: fallbackError } = await supabase
        .from("sessions")
        .insert({
          first_page_url: req.headers.get("referer") || "unknown",
          current_page_url: req.headers.get("referer") || "unknown",
          referrer: "Unknown (recovered at submit)",
          user_agent: req.headers.get("user-agent") || "unknown",
          browser: "Unknown",
          ip_address: clientIp,
          ip_city: "Unknown",
          ip_state: "Unknown",
          ip_country: "Unknown",
        })
        .select("id")
        .single();

      if (fallbackError || !fallbackSession?.id) {
        console.error("Fallback session creation failed:", fallbackError);
        return new Response(
          JSON.stringify({ error: "Failed to create lead" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      sessionId = fallbackSession.id;
      console.log("Recovered lead submission with new session", sessionId);
    }


    const body: LeadData & { lead_id?: string } = await req.json();
    const { email, website_url, step, role, monthly_revenue, phone, company_name, lead_id, service_type, business_type, preferred_platforms } = body;

    // Basic validation
    if (!email || !website_url) {
      return new Response(
        JSON.stringify({ error: "Email and website URL are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const identifier = headerSessionId && uuidRegex.test(headerSessionId)
      ? `session:${headerSessionId}`
      : `ip:${clientIp}`;
    const operation = "lead_operation";

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
      console.log("Rate limit exceeded");
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

    let result;

    if (lead_id) {
      // Validate UUID format for lead_id
      if (!uuidRegex.test(lead_id)) {
        return new Response(
          JSON.stringify({ error: "Invalid lead ID format" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Update existing lead - validate session ownership
      const { data, error } = await supabase
        .from("leads")
        .update({
          email: email.trim(),
          website_url: website_url.trim(),
          step: step || 1,
          role,
          monthly_revenue,
          phone,
          company_name,
          service_type,
          business_type,
          preferred_platforms,
          updated_at: new Date().toISOString(),
        })
        .eq("id", lead_id)
        .eq("session_id", sessionId)
        .select()
        .single();

      if (error) {
        console.error("Lead update error:", error);
        return new Response(
          JSON.stringify({ error: "Failed to update lead" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      result = data;
      console.log("Lead updated");
    } else {
      // Create new lead
      const { data, error } = await supabase
        .from("leads")
        .insert({
          email: email.trim(),
          website_url: website_url.trim(),
          step: step || 1,
          role,
          monthly_revenue,
          phone,
          company_name,
          service_type,
          business_type,
          preferred_platforms,
          session_id: sessionId,
        })
        .select()
        .single();

      if (error) {
        console.error("Lead insert error:", error);
        return new Response(
          JSON.stringify({ error: "Failed to create lead" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      result = data;
      console.log("Lead created");
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error in create-lead:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
