import { supabase } from '@/integrations/supabase/client';
import { detectService } from '@/lib/serviceDetection';
import { enquiryPayload } from '@/lib/enquiryPayload.js';

export interface FormSubmitPayload {
  form_id: string;
  form_name: string;
  page_url: string;
  trigger_type: "popup" | "embedded" | "exit_intent" | "button" | "scroll" | "form_submit";
  data: Record<string, unknown>;
}

export interface FormSubmitResult {
  success: boolean;
  error?: string;
}

/**
 * Submit form data to Web3Forms endpoint
 */
export const submitFormToGoogleSheets = async (
  payload: FormSubmitPayload
): Promise<FormSubmitResult> => {
  try {
    let sessionId: string | null = null;
    try { sessionId = localStorage.getItem('seo_session_id'); } catch { /* Server recovers the session. */ }
    const body = enquiryPayload(payload, { service: detectService() });
    const { data: result, error } = await supabase.functions.invoke('create-lead', {
      body, headers: sessionId ? { 'x-session-id': sessionId } : undefined,
    });
    if (error || result?.error || !result?.id) throw new Error('Your enquiry could not be saved. Please try again or call 89041 50555.');
    try { localStorage.setItem('seo_lead_id', result.id); } catch { /* Saving succeeded independently. */ }
    await supabase.functions.invoke('send-lead-email', { body: {
      lead: result, session: { first_page_url: result.first_page_url, current_page_url: result.last_page_url, referrer: document.referrer || 'Direct', browser: navigator.userAgent },
      submission_time: result.created_at, form_step: payload.form_name,
    }}).catch(() => undefined);
    return { success: true };
  } catch (error) {
    // Callers must not close or show success when persistence fails.
    throw error instanceof Error ? error : new Error('Enquiry submission failed. Please try again.');
  }
};

/**
 * Hook for form submission with loading state management
 */
export const useFormSubmit = () => {
  const submitForm = async (payload: FormSubmitPayload): Promise<FormSubmitResult> => {
    return submitFormToGoogleSheets(payload);
  };

  return { submitForm };
};
