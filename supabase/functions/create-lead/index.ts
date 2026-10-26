import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders, handleCorsPreFlight } from "../_shared/cors.ts";
import { leadIdentity } from "../_shared/lead-identity.js";
import { deliverSheet, deliverChat } from "./notifications.js";

// Rate limit: generous so genuine/testing enquiries are never dropped; only blocks floods
const RATE_LIMIT = 60;
const RATE_WINDOW_MINUTES = 60;
const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxp-HKGGkx4zEkGHcATl06dSsVXs4DY-U973k7qgdfO-ClxgTx_p_4aTD6ozZlBuULq/exec";

interface LeadData {
  email: string;
  website_url: string;
  step?: number;
  role?: string;
  monthly_revenue?: string;
  phone?: string;
  company_name?: string;
  full_name?: string;
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

    const rawBody = await req.json();
    const optionalText = (value: unknown, max = 2000): string | undefined => {
      if (value === undefined || value === null) return undefined;
      if (typeof value !== 'string' || value.length > max) throw new Error('Invalid enquiry field');
      return value.trim();
    };
    const body = { ...rawBody, email: optionalText(rawBody.email, 320) || '', website_url: optionalText(rawBody.website_url, 2000) || '',
      phone: optionalText(rawBody.phone, 40), message: optionalText(rawBody.message, 5000), form_name: optionalText(rawBody.form_name, 200),
      page_url: optionalText(rawBody.page_url), first_page_url: optionalText(rawBody.first_page_url), landing_page_url: optionalText(rawBody.landing_page_url) };
    const pageUrl = body.page_url || req.headers.get('referer') || '';
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
          first_page_url: body.first_page_url || pageUrl,
          current_page_url: pageUrl,
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


    const { email, website_url, step, role, monthly_revenue, phone, company_name, lead_id, service_type, business_type, preferred_platforms } = body;
    let identity;
    try {
      identity = leadIdentity(body);
    } catch {
      return new Response(JSON.stringify({ error: "Invalid name or company name" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Basic validation
    if (!email && !phone) {
      return new Response(
        JSON.stringify({ error: "Email or phone is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (phone && !/^\+?[\d\s()-]{7,40}$/.test(phone)) {
      return new Response(JSON.stringify({ error: 'Invalid phone' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }
    const { data: session } = await supabase.from('sessions').select('first_page_url,referrer,ip_city,ip_state,ip_country,ip_address').eq('id', sessionId).maybeSingle();
    const tracking = { first_page_url: session?.first_page_url || body.first_page_url || pageUrl,
      landing_page_url: session?.first_page_url || body.landing_page_url || pageUrl, last_page_url: pageUrl,
      message: body.message, form_name: body.form_name };

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
    let deliveryStatus;

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
          ...identity,
          service_type,
          business_type,
          preferred_platforms,
          ...tracking,
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
          ...identity,
          service_type,
          business_type,
          preferred_platforms,
          session_id: sessionId,
          ...tracking,
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

      // Both deliveries start after saving and finish independently; neither can lose a saved enquiry.
      const context = { page_url: pageUrl, ...tracking, session };
      const [google_sheet, google_chat] = await Promise.all([
        deliverSheet(GOOGLE_SHEET_URL, result, context),
        deliverChat(Deno.env.get("GOOGLE_API_KEY"), Deno.env.get("GOOGLE_CHAT_WEBHOOK_TOKEN"), result, context),
      ]);
      deliveryStatus = { google_sheet, google_chat };
      console.log("Lead notification delivery", JSON.stringify({ lead_id: result.id, ...deliveryStatus }));
    }

    return new Response(JSON.stringify({ ...result, ...(deliveryStatus ? { delivery_status: deliveryStatus } : {}) }), {
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
