-- Add metadata columns to audit_results table
ALTER TABLE public.audit_results 
ADD COLUMN IF NOT EXISTS analyzed_url TEXT,
ADD COLUMN IF NOT EXISTS analysis_timestamp TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS data_source TEXT DEFAULT 'google_pagespeed_v5';