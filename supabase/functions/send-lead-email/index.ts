import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

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
    ip_country?: string;
    browser?: string;
    user_agent?: string;
    first_landed_at?: string;
  };
  submission_time: string;
  form_step: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { lead, session, submission_time, form_step }: LeadEmailRequest = await req.json();
    
    console.log("Sending lead email for:", lead.email, "step:", form_step);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #F97316; border-bottom: 2px solid #F97316; padding-bottom: 10px;">
          🚀 New Lead - ${form_step}
        </h1>
        
        <h2 style="color: #333; margin-top: 20px;">Lead Information</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="background: #f9fafb;">
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Website URL</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${lead.website_url}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Email</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${lead.email}</td>
          </tr>
          ${lead.role ? `<tr style="background: #f9fafb;">
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Role</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${lead.role}</td>
          </tr>` : ''}
          ${lead.monthly_revenue ? `<tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Monthly Revenue</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${lead.monthly_revenue}</td>
          </tr>` : ''}
          ${lead.phone ? `<tr style="background: #f9fafb;">
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Phone</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${lead.phone}</td>
          </tr>` : ''}
          ${lead.company_name ? `<tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Company Name</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${lead.company_name}</td>
          </tr>` : ''}
        </table>

        <h2 style="color: #333;">Browser & Session Data</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="background: #f9fafb;">
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">First Page URL</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${session.first_page_url || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Current Page URL</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${session.current_page_url || 'N/A'}</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Referrer</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${session.referrer || 'Direct'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">IP Address</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${session.ip_address || 'N/A'}</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Location</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${session.ip_city || 'N/A'}, ${session.ip_country || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Browser</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${session.browser || 'N/A'}</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">First Landed Time</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${session.first_landed_at || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Submission Time</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${submission_time}</td>
          </tr>
        </table>

        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This lead was captured from the AI SEO Agency landing page funnel.
        </p>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "AI SEO Agency <onboarding@resend.dev>",
      to: ["thesuper30.ai@gmail.com"],
      subject: `🚀 New Lead (${form_step}): ${lead.email}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-lead-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
