import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-session-id",
};

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

    const body = await req.json().catch(() => ({}));
    const { type } = body;

    // Fetch session first to verify it exists
    const { data: session, error: sessionError } = await supabase
      .from("sessions")
      .select("id")
      .eq("id", sessionId)
      .single();

    if (sessionError || !session) {
      return new Response(
        JSON.stringify({ error: "Session not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    let result: any = {};

    // Fetch requested data types
    if (type === "leads" || type === "all") {
      const { data: leads } = await supabase
        .from("leads")
        .select("id, email, website_url, step, role, monthly_revenue, company_name, created_at")
        .eq("session_id", sessionId)
        .order("created_at", { ascending: false });
      result.leads = leads || [];
    }

    if (type === "audit_results" || type === "all") {
      const { data: auditResults } = await supabase
        .from("audit_results")
        .select("*")
        .in("lead_id", 
          (await supabase
            .from("leads")
            .select("id")
            .eq("session_id", sessionId)
          ).data?.map(l => l.id) || []
        )
        .order("created_at", { ascending: false });
      result.audit_results = auditResults || [];
    }

    if (type === "competitor_analysis" || type === "all") {
      const { data: competitorAnalysis } = await supabase
        .from("competitor_analysis")
        .select("*")
        .in("lead_id", 
          (await supabase
            .from("leads")
            .select("id")
            .eq("session_id", sessionId)
          ).data?.map(l => l.id) || []
        )
        .order("created_at", { ascending: false });
      result.competitor_analysis = competitorAnalysis || [];
    }

    console.log(`Session data fetched for: ${sessionId}, type: ${type}`);
    
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error in get-session-data:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
