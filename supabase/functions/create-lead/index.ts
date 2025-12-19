import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-session-id",
};

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
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const sessionId = req.headers.get("x-session-id");
    if (!sessionId) {
      return new Response(
        JSON.stringify({ error: "Session ID required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate session ID format (UUID)
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(sessionId)) {
      return new Response(
        JSON.stringify({ error: "Invalid session ID format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body: LeadData & { lead_id?: string } = await req.json();
    const { email, website_url, step, role, monthly_revenue, phone, company_name, lead_id } = body;

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

    const identifier = `session:${sessionId}`;
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

    let result;

    if (lead_id) {
      // Update existing lead
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
      console.log("Lead updated:", result.id);
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
      console.log("Lead created:", result.id);
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
