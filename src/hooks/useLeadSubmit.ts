import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { openThankYouPage } from '@/lib/thankYouRedirect';
import { submitFormToGoogleSheets } from '@/hooks/useFormSubmit';
import { detectService } from '@/lib/serviceDetection';

interface FormData {
  website_url: string;
  email: string;
  phone?: string;
  role?: string;
  monthly_revenue?: string;
  full_name?: string;
  company_name?: string;
}

interface UseLeadSubmitOptions {
  source: string;
  formId?: string;
  formName?: string;
}

export const useLeadSubmit = ({ source, formId, formName }: UseLeadSubmitOptions) => {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const sessionId = localStorage.getItem('seo_session_id');
      const service = detectService();

      // 1. Create lead in database via edge function (non-blocking for UX, but awaited for reliability)
      const createLeadPromise = supabase.functions.invoke('create-lead', {
        body: {
          website_url: data.website_url,
          email: data.email,
          phone: data.phone,
          role: data.role,
          monthly_revenue: data.monthly_revenue,
          company_name: data.company_name,
          service_type: service,
          step: 1,
        },
        headers: sessionId ? { 'x-session-id': sessionId } : undefined,
      });

      // 2. Submit to Web3Forms (non-blocking)
      void submitFormToGoogleSheets({
        form_id: formId || `${source}_form`,
        form_name: formName || `Lead Capture - ${source}`,
        page_url: window.location.href,
        trigger_type: 'form_submit',
        data: {
          name: data.full_name || '',
          company: data.company_name || '',
          website: data.website_url,
          email: data.email,
          phone: data.phone || '',
          role: data.role || '',
          revenue: data.monthly_revenue || '',
          service,
        },
      });

      // 3. Sync to Google Sheets via edge function (non-blocking)
      void supabase.functions.invoke('sync-lead-to-sheets', {
        body: {
          website: data.website_url,
          email: data.email,
          phone: data.phone || '',
          role: data.role || '',
          revenue: data.monthly_revenue || '',
          formSource: source,
        },
      });

      // Wait for the lead to be created so we can send email with session data
      const { data: leadResult } = await createLeadPromise;

      // 4. Send notification email via edge function (non-blocking)
      if (sessionId) {
        // Get session data for the email
        void supabase.functions.invoke('send-lead-email', {
          body: {
            lead: {
              website_url: data.website_url,
              email: data.email,
              role: data.role,
              monthly_revenue: data.monthly_revenue,
              phone: data.phone,
              company_name: data.company_name,
              step: 1,
            },
            session: {
              first_page_url: '',
              current_page_url: window.location.href,
              referrer: document.referrer || 'Direct',
              browser: navigator.userAgent,
            },
            submission_time: new Date().toISOString(),
            form_step: `Lead Capture - ${source}`,
          },
        });
      }

      // Store lead ID for future reference
      if (leadResult?.id) {
        localStorage.setItem('seo_lead_id', leadResult.id);
      }

      toast.success('Form submitted successfully!');

      openThankYouPage({
        name: data.full_name || data.email?.split('@')[0],
        email: data.email,
        company: data.company_name,
        source,
      });
    } catch (error) {
      console.error('Lead submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleFormSubmit };
};
