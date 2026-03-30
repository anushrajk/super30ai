/**
 * Detects the current service from the URL path and provides
 * service-specific form headlines.
 */

const SERVICE_MAP: Record<string, string> = {
  "/digital-marketing": "digital-marketing",
  "/ai-seo-agency-bangalore": "ai-seo",
  "/performance-marketing": "lead-generation",
  "/social-media-post-design": "social-media",
  "/design": "design",
  "/web-design-development": "web-design",
};

const HEADLINE_MAP: Record<string, string> = {
  "digital-marketing": "Get Your Free Digital Marketing Strategy",
  "ai-seo": "Get Your AI SEO Growth Plan",
  "lead-generation": "Get High-Intent Leads for Your Business",
  "social-media": "Get Scroll-Stopping Social Media Content",
  "design": "Upgrade Your Brand Design Strategy",
  "web-design": "Get a High-Converting Website Design",
};

export const detectService = (): string => {
  const path = window.location.pathname;
  return SERVICE_MAP[path] || "general";
};

export const getServiceHeadline = (service: string): string | null => {
  return HEADLINE_MAP[service] || null;
};

const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbyHu1YbqhQQdcqp0CeBAdN4dLMcCJakCHCj7CisR0ZPLL3Q-98car8VLsNmmfhwVOXm/exec";

export interface GoogleSheetsPayload {
  name: string;
  company: string;
  website: string;
  email: string;
  phone: string;
  role: string;
  revenue: string;
  message: string;
  service: string;
  page_url: string;
}

export const submitToGoogleSheets = async (
  payload: GoogleSheetsPayload
): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      mode: "no-cors", // Google Apps Script requires no-cors from browser
    });
    // no-cors returns opaque response, assume success
    return { success: true };
  } catch (error) {
    console.error("Google Sheets submission error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Submission failed",
    };
  }
};
