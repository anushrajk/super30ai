import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from "../_shared/cors.ts";
import { checkRateLimit } from "../_shared/rate-limit.ts";
import { escapeHtml } from "../_shared/escape-html.ts";

interface LeadEmailRequest {
  lead: {
    website_url: string;
    email: string;
    role?: string;
    monthly_revenue?: string;
    phone?: string;
    company_name?: string;
    step: number;
  };
  session: {
    first_page_url?: string;
    current_page_url?: string;
    referrer?: string;
    ip_address?: string;
    ip_city?: string;
    ip_state?: string;
    ip_country?: string;
    browser?: string;
    user_agent?: string;
    first_landed_at?: string;
  };
  submission_time: string;
  form_step: string;
}

// Convert UTC to IST formatted string (DD MM YYYY HH:MM AM/PM IST)
const formatToIST = (dateString: string | undefined): string => {
  if (!dateString) return 'N/A';
  
  try {
    const date = new Date(dateString);
    
    // Use Intl.DateTimeFormat for reliable IST conversion
    const formatter = new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    });
    
    return formatter.format(date) + ' IST';
  } catch {
    return dateString;
  }
};

// Get current time in IST (DD MM YYYY HH:MM:SS AM/PM IST)
const getCurrentIST = (): string => {
  const now = new Date();
  
  const formatter = new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata'
  });
  
  return formatter.format(now) + ' IST';
};

const handler = async (req: Request): Promise<Response> => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  // Check for API key
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return new Response(
      JSON.stringify({ error: "Email service not configured" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  const lovableKey = Deno.env.get("LOVABLE_API_KEY");

  try {
    const { lead, session, submission_time, form_step }: LeadEmailRequest = await req.json();

    // Rate limit: 10 requests per IP per hour
    const rateLimitResult = await checkRateLimit(req, corsHeaders, {
      operation: "send_lead_email",
      limit: 10,
    });
    if (!rateLimitResult.allowed) return rateLimitResult.response!;
    
    console.log("send-lead-email invoked, step:", form_step);

    // Format location with state
    const location = [
      session.ip_city || 'Unknown',
      session.ip_state || '',
      session.ip_country || 'Unknown'
    ].filter(Boolean).join(', ');

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #F97316; border-bottom: 2px solid #F97316; padding-bottom: 10px;">
          🚀 New Lead - ${escapeHtml(form_step)}
        </h1>
        
        <h2 style="color: #333; margin-top: 20px;">Lead Information</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="background: #f9fafb;">
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Website URL</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(lead.website_url)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Email</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(lead.email)}</td>
          </tr>
          ${lead.role ? `<tr style="background: #f9fafb;">
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Role</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(lead.role)}</td>
          </tr>` : ''}
          ${lead.monthly_revenue ? `<tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Monthly Revenue</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(lead.monthly_revenue)}</td>
          </tr>` : ''}
          ${lead.phone ? `<tr style="background: #f9fafb;">
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Phone</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(lead.phone)}</td>
          </tr>` : ''}
          ${lead.company_name ? `<tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Company Name</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(lead.company_name)}</td>
          </tr>` : ''}
        </table>

        <h2 style="color: #333;">Browser & Session Data</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="background: #f9fafb;">
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">First Page URL</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(session.first_page_url || 'N/A')}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Current Page URL</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(session.current_page_url || 'N/A')}</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Referrer</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(session.referrer || 'Direct')}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">IP Address</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(session.ip_address || 'N/A')}</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Location</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(location)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Browser</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(session.browser || 'N/A')}</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">First Landed (IST)</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${formatToIST(session.first_landed_at)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Submission Time (IST)</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${getCurrentIST()}</td>
          </tr>
        </table>

        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This lead was captured from the AI SEO Agency landing page funnel.
        </p>
      </div>
    `;

    // Sending email...
    
    const gwRes = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": apiKey,
      },
      body: JSON.stringify({
        // Until thesuper30.ai is verified in Resend, only the account owner's inbox can receive.
        from: "Super30 Leads <onboarding@resend.dev>",
        to: ["thesuper30.ai@gmail.com"],
        subject: `🚀 New Lead (${form_step}): ${lead.email}`,
        html: emailHtml,
      }),
    });
    const gwText = await gwRes.text();
    if (!gwRes.ok) {
      console.error(`Resend error [${gwRes.status}]: ${gwText}`);
      return new Response(
        JSON.stringify({ error: "Email send failed", status: gwRes.status, details: gwText }),
        { status: gwRes.status, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }
    const emailResponse = { data: JSON.parse(gwText) };

    console.log("Email sent successfully");

    return new Response(JSON.stringify({ success: true, id: emailResponse.data?.id }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("========================================");
    console.error("ERROR in send-lead-email function:");
    console.error("Message:", error.message);
    console.error("Stack:", error.stack);
    console.error("========================================");
    
    return new Response(
      JSON.stringify({ error: "Service temporarily unavailable. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);