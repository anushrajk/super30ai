/**
 * Centralized hook for submitting all forms to Google Apps Script endpoint
 * Replaces Supabase/useLead() for lead storage
 */

const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyzxD425E9QSIUl1vjoRJJCr6IpOo0i2ZwJh7xIctSKseTJx1CCT3qNwir6nImU5oHh/exec";

export interface FormSubmitPayload {
  form_id: string;
  form_name: string;
  page_url: string;
  trigger_type: "popup" | "embedded" | "exit_intent" | "button" | "scroll";
  data: Record<string, unknown>;
}

export interface FormSubmitResult {
  success: boolean;
  error?: string;
}

/**
 * Submit form data to Google Apps Script endpoint
 */
export const submitFormToGoogleSheets = async (
  payload: FormSubmitPayload
): Promise<FormSubmitResult> => {
  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Google Apps Script requires no-cors for cross-origin requests
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // With no-cors mode, we can't read the response
    // We assume success if no error was thrown
    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
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
