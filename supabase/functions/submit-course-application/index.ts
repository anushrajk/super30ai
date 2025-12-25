import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ApplicationRequest {
  fullName: string;
  email: string;
  phone: string;
  currentRole?: string;
  experience?: string;
  linkedin?: string;
  motivation?: string;
  sessionId?: string;
}

interface SessionData {
  first_page_url?: string;
  current_page_url?: string;
  referrer?: string;
  ip_address?: string;
  ip_city?: string;
  ip_state?: string;
  ip_country?: string;
  browser?: string;
  first_landed_at?: string;
}

// Convert UTC to IST formatted string
const formatToIST = (dateString: string | undefined): string => {
  if (!dateString) return 'N/A';
  
  try {
    const date = new Date(dateString);
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

// Get current time in IST
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

// Simple email validation
const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Phone validation (10 digits)
const isValidPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 10;
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  console.log("========================================");
  console.log("SUBMIT-COURSE-APPLICATION INVOKED");
  console.log("Time:", getCurrentIST());
  console.log("========================================");

  try {
    const body: ApplicationRequest = await req.json();
    const { fullName, email, phone, currentRole, experience, linkedin, motivation, sessionId } = body;

    // Validation
    if (!fullName?.trim()) {
      return new Response(
        JSON.stringify({ error: "Name is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!email?.trim() || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Valid email is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!phone?.trim() || !isValidPhone(phone)) {
      return new Response(
        JSON.stringify({ error: "Valid 10-digit phone number is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!motivation?.trim()) {
      return new Response(
        JSON.stringify({ error: "Please tell us what's holding you back" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Initialize Supabase client with service role for insert
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch session data if sessionId provided
    let sessionData: SessionData = {};
    if (sessionId) {
      const { data: session } = await supabase
        .from('sessions')
        .select('*')
        .eq('id', sessionId)
        .maybeSingle();
      
      if (session) {
        sessionData = session;
      }
    }

    // Clean phone number
    const cleanedPhone = phone.replace(/\D/g, '');

    // Insert application into database
    const { data: application, error: insertError } = await supabase
      .from('course_applications')
      .insert({
        session_id: sessionId || null,
        full_name: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: cleanedPhone,
        applicant_role: currentRole || null,
        experience: experience || null,
        linkedin_url: linkedin?.trim() || null,
        motivation: motivation.trim(),
        status: 'new'
      })
      .select()
      .single();

    if (insertError) {
      console.error("Database insert error:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to save application. Please try again." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Application saved with ID:", application.id);

    // Send email notification
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      // Format location
      const location = [
        sessionData.ip_city || '',
        sessionData.ip_state || '',
        sessionData.ip_country || ''
      ].filter(Boolean).join(', ') || 'Unknown';

      // WhatsApp quick reply link
      const whatsappMessage = encodeURIComponent(
        `Hi ${fullName.split(' ')[0]}, thanks for applying to The Super 30 AI SEO Course! This is regarding your application. When can we schedule a quick call?`
      );
      const whatsappLink = `https://wa.me/91${cleanedPhone}?text=${whatsappMessage}`;

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px; background: #fefefe;">
          <div style="background: linear-gradient(135deg, #F97316, #EA580C); padding: 25px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">
              📚 New Course Application
            </h1>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">
              ${fullName} wants to join The Super 30!
            </p>
          </div>
          
          <div style="background: white; border: 1px solid #e5e7eb; border-top: none; padding: 25px; border-radius: 0 0 12px 12px;">
            
            <!-- Quick Actions -->
            <div style="background: #FFF7ED; border: 1px solid #FDBA74; border-radius: 8px; padding: 15px; margin-bottom: 25px; text-align: center;">
              <p style="margin: 0 0 12px 0; color: #9A3412; font-weight: 600;">⚡ Quick Actions</p>
              <a href="${whatsappLink}" style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-right: 10px;">
                📱 Reply on WhatsApp
              </a>
              <a href="mailto:${email}?subject=Re: Your Super 30 Course Application" style="display: inline-block; background: #3B82F6; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                ✉️ Reply via Email
              </a>
            </div>

            <h2 style="color: #1F2937; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #F97316; padding-bottom: 8px;">
              👤 Applicant Details
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr style="background: #f9fafb;">
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: 600; width: 35%;">Name</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: 600;">Email</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">
                  <a href="mailto:${email}" style="color: #2563EB;">${email}</a>
                </td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: 600;">Phone</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">
                  <a href="tel:+91${cleanedPhone}" style="color: #2563EB;">+91 ${cleanedPhone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: 600;">Current Role</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${currentRole || 'Not specified'}</td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: 600;">Experience</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${experience || 'Not specified'}</td>
              </tr>
              ${linkedin ? `<tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: 600;">LinkedIn</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">
                  <a href="${linkedin}" style="color: #2563EB;" target="_blank">${linkedin}</a>
                </td>
              </tr>` : ''}
            </table>

            <h2 style="color: #1F2937; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #F97316; padding-bottom: 8px;">
              💭 What's Holding Them Back
            </h2>
            <div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
              <p style="margin: 0; color: #92400E; font-style: italic; line-height: 1.6;">
                "${motivation}"
              </p>
            </div>

            <h2 style="color: #1F2937; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #F97316; padding-bottom: 8px;">
              📍 Session Data
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
              <tr style="background: #f9fafb;">
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: 600; width: 35%;">Location</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${location}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: 600;">Browser</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${sessionData.browser || 'N/A'}</td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: 600;">Referrer</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${sessionData.referrer || 'Direct'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: 600;">Landing Page</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${sessionData.first_page_url || 'N/A'}</td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: 600;">First Visit (IST)</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${formatToIST(sessionData.first_landed_at)}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: 600;">Application Time (IST)</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${getCurrentIST()}</td>
              </tr>
            </table>

            <p style="color: #6B7280; font-size: 12px; margin: 20px 0 0 0; text-align: center;">
              Application ID: ${application.id}<br/>
              This application was submitted from The Super 30 AI SEO Course page.
            </p>
          </div>
        </div>
      `;

      try {
        const emailResponse = await resend.emails.send({
          from: "The Super 30 <onboarding@resend.dev>",
          to: ["thesuper30.ai@gmail.com"],
          subject: `📚 Course Application: ${fullName} (${email})`,
          html: emailHtml,
        });

        if (emailResponse.error) {
          console.error("Resend error:", emailResponse.error);
        } else {
          console.log("Email sent successfully! ID:", emailResponse.data?.id);
        }
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Don't fail the request if email fails
      }
    } else {
      console.warn("RESEND_API_KEY not configured, skipping email notification");
    }

    console.log("Application submission complete!");
    console.log("========================================");

    return new Response(
      JSON.stringify({ 
        success: true, 
        applicationId: application.id,
        message: "Application submitted successfully!" 
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error: any) {
    console.error("========================================");
    console.error("ERROR in submit-course-application:");
    console.error("Message:", error.message);
    console.error("Stack:", error.stack);
    console.error("========================================");

    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
