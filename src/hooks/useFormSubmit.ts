/**
 * Centralized hook for submitting all forms to Web3Forms endpoint
 */

const WEB3FORMS_ACCESS_KEY = "2e6b168e-6519-4f0f-8c81-86fb009e0900";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

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
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `${payload.form_name} — ${payload.form_id}`,
        from_name: "The Super 30 Website",
        form_id: payload.form_id,
        form_name: payload.form_name,
        page_url: payload.page_url,
        trigger_type: payload.trigger_type,
        ...payload.data,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return { success: true };
    }

    return {
      success: false,
      error: result.message || "Form submission failed",
    };
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
