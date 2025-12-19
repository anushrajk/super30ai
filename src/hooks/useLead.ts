import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface LeadData {
  id?: string;
  session_id?: string;
  website_url: string;
  email: string;
  role?: string;
  monthly_revenue?: string;
  phone?: string;
  company_name?: string;
  step: number;
}

export const useLead = () => {
  const [lead, setLead] = useState<LeadData | null>(null);
  const [loading, setLoading] = useState(false);

  const createLead = async (data: Partial<LeadData>, sessionId?: string) => {
    setLoading(true);
    try {
      // Use rate-limited edge function for creating leads
      const { data: newLead, error } = await supabase.functions.invoke('create-lead', {
        body: {
          website_url: data.website_url || '',
          email: data.email || '',
          role: data.role,
          monthly_revenue: data.monthly_revenue,
          phone: data.phone,
          company_name: data.company_name,
          step: data.step || 1
        },
        headers: sessionId ? { 'x-session-id': sessionId } : undefined
      });

      if (error) throw error;
      
      if (newLead) {
        localStorage.setItem('seo_lead_id', newLead.id);
        setLead(newLead as LeadData);
      }
      
      return newLead;
    } catch (error) {
      console.error('Failed to create lead:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateLead = async (id: string, data: Partial<LeadData>, sessionId?: string) => {
    setLoading(true);
    try {
      // Use rate-limited edge function for updating leads
      const { data: updatedLead, error } = await supabase.functions.invoke('create-lead', {
        body: {
          lead_id: id,
          website_url: data.website_url || '',
          email: data.email || '',
          role: data.role,
          monthly_revenue: data.monthly_revenue,
          phone: data.phone,
          company_name: data.company_name,
          step: data.step || 1
        },
        headers: sessionId ? { 'x-session-id': sessionId } : undefined
      });

      if (error) throw error;
      
      if (updatedLead) {
        setLead(updatedLead as LeadData);
      }
      
      return updatedLead;
    } catch (error) {
      console.error('Failed to update lead:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getLead = async (id: string) => {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      
      if (data) {
        setLead(data as LeadData);
      }
      
      return data;
    } catch (error) {
      console.error('Failed to get lead:', error);
      return null;
    }
  };

  const sendLeadEmail = async (leadData: LeadData, sessionData: any, formStep: string) => {
    try {
      const { error } = await supabase.functions.invoke('send-lead-email', {
        body: {
          lead: leadData,
          session: sessionData,
          submission_time: new Date().toISOString(),
          form_step: formStep
        }
      });

      if (error) throw error;
    } catch (error) {
      console.error('Failed to send lead email:', error);
    }
  };

  return { lead, setLead, loading, createLead, updateLead, getLead, sendLeadEmail };
};
