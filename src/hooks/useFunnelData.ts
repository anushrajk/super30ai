import { useState, useEffect, useCallback } from 'react';

export interface FunnelLeadData {
  id?: string;
  website_url: string;
  email: string;
  phone?: string;
  role?: string;
  monthly_revenue?: string;
  company_name?: string;
}

export interface FunnelAuditData {
  seo_score: number;
  performance_score: number;
  accessibility_score: number;
  best_practices_score: number;
  ai_visibility_score: number;
  technical_issues: number;
  opportunities?: any[];
  diagnostics?: any[];
  analyzed_url?: string;
  analysis_timestamp?: string;
}

export interface FunnelCompetitorData {
  business_niche: string;
  industry_category: string;
  competitors: Array<{
    name: string;
    domain: string;
    estimated_strength: number;
    why_competitor: string;
  }>;
  missed_opportunity_score: number;
  opportunity_breakdown: {
    ai_visibility_gap: number;
    content_gap: number;
    technical_gap: number;
    authority_gap: number;
  };
  estimated_monthly_loss: {
    currency: string;
    amount: number;
    calculation_basis: string;
  };
  recommendations: string[];
}

export interface FunnelBookingData {
  date: string;
  startTime: string;
  endTime?: string;
  meetingLink?: string;
  attendeeName?: string;
  attendeeEmail?: string;
}

export interface FunnelData {
  leadData: FunnelLeadData | null;
  auditData: FunnelAuditData | null;
  competitorData: FunnelCompetitorData | null;
  bookingData: FunnelBookingData | null;
}

const FUNNEL_STORAGE_KEY = 'seo_funnel_data';

export const useFunnelData = () => {
  const [funnelData, setFunnelData] = useState<FunnelData>({
    leadData: null,
    auditData: null,
    competitorData: null,
    bookingData: null,
  });

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(FUNNEL_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setFunnelData(parsed);
      } catch (e) {
        console.error('Failed to parse funnel data:', e);
      }
    }
  }, []);

  // Save to localStorage whenever data changes
  const saveToStorage = useCallback((data: FunnelData) => {
    localStorage.setItem(FUNNEL_STORAGE_KEY, JSON.stringify(data));
  }, []);

  const setLeadData = useCallback((leadData: FunnelLeadData) => {
    setFunnelData(prev => {
      const updated = { ...prev, leadData };
      saveToStorage(updated);
      return updated;
    });
  }, [saveToStorage]);

  const setAuditData = useCallback((auditData: FunnelAuditData) => {
    setFunnelData(prev => {
      const updated = { ...prev, auditData };
      saveToStorage(updated);
      return updated;
    });
  }, [saveToStorage]);

  const setCompetitorData = useCallback((competitorData: FunnelCompetitorData) => {
    setFunnelData(prev => {
      const updated = { ...prev, competitorData };
      saveToStorage(updated);
      return updated;
    });
  }, [saveToStorage]);

  const setBookingData = useCallback((bookingData: FunnelBookingData) => {
    setFunnelData(prev => {
      const updated = { ...prev, bookingData };
      saveToStorage(updated);
      return updated;
    });
  }, [saveToStorage]);

  const clearFunnelData = useCallback(() => {
    localStorage.removeItem(FUNNEL_STORAGE_KEY);
    setFunnelData({
      leadData: null,
      auditData: null,
      competitorData: null,
      bookingData: null,
    });
  }, []);

  const getCompleteFunnelData = useCallback(() => {
    return funnelData;
  }, [funnelData]);

  return {
    ...funnelData,
    setLeadData,
    setAuditData,
    setCompetitorData,
    setBookingData,
    clearFunnelData,
    getCompleteFunnelData,
  };
};
