export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      audit_results: {
        Row: {
          accessibility_score: number | null
          ai_visibility_score: number | null
          analysis_timestamp: string | null
          analyzed_url: string | null
          best_practices_score: number | null
          created_at: string
          data_source: string | null
          diagnostics: Json | null
          id: string
          lead_id: string | null
          opportunities: Json | null
          performance_score: number | null
          seo_score: number | null
          technical_issues: number | null
        }
        Insert: {
          accessibility_score?: number | null
          ai_visibility_score?: number | null
          analysis_timestamp?: string | null
          analyzed_url?: string | null
          best_practices_score?: number | null
          created_at?: string
          data_source?: string | null
          diagnostics?: Json | null
          id?: string
          lead_id?: string | null
          opportunities?: Json | null
          performance_score?: number | null
          seo_score?: number | null
          technical_issues?: number | null
        }
        Update: {
          accessibility_score?: number | null
          ai_visibility_score?: number | null
          analysis_timestamp?: string | null
          analyzed_url?: string | null
          best_practices_score?: number | null
          created_at?: string
          data_source?: string | null
          diagnostics?: Json | null
          id?: string
          lead_id?: string | null
          opportunities?: Json | null
          performance_score?: number | null
          seo_score?: number | null
          technical_issues?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_results_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      competitor_analysis: {
        Row: {
          analyzed_url: string | null
          audit_id: string | null
          business_niche: string | null
          competitors: Json | null
          created_at: string
          estimated_monthly_loss: Json | null
          id: string
          industry_category: string | null
          lead_id: string | null
          missed_opportunity_score: number | null
          opportunity_breakdown: Json | null
          recommendations: Json | null
        }
        Insert: {
          analyzed_url?: string | null
          audit_id?: string | null
          business_niche?: string | null
          competitors?: Json | null
          created_at?: string
          estimated_monthly_loss?: Json | null
          id?: string
          industry_category?: string | null
          lead_id?: string | null
          missed_opportunity_score?: number | null
          opportunity_breakdown?: Json | null
          recommendations?: Json | null
        }
        Update: {
          analyzed_url?: string | null
          audit_id?: string | null
          business_niche?: string | null
          competitors?: Json | null
          created_at?: string
          estimated_monthly_loss?: Json | null
          id?: string
          industry_category?: string | null
          lead_id?: string | null
          missed_opportunity_score?: number | null
          opportunity_breakdown?: Json | null
          recommendations?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "competitor_analysis_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "audit_results"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "competitor_analysis_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      engagement_metrics: {
        Row: {
          created_at: string | null
          id: string
          interactions: Json | null
          max_scroll_depth: number | null
          page_url: string
          scroll_milestones: Json | null
          sections_viewed: Json | null
          session_id: string | null
          time_on_page: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          interactions?: Json | null
          max_scroll_depth?: number | null
          page_url: string
          scroll_milestones?: Json | null
          sections_viewed?: Json | null
          session_id?: string | null
          time_on_page?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          interactions?: Json | null
          max_scroll_depth?: number | null
          page_url?: string
          scroll_milestones?: Json | null
          sections_viewed?: Json | null
          session_id?: string | null
          time_on_page?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "engagement_metrics_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          business_type: string | null
          company_name: string | null
          created_at: string
          email: string
          id: string
          monthly_revenue: string | null
          phone: string | null
          preferred_platforms: Json | null
          role: string | null
          service_type: string | null
          session_id: string | null
          step: number
          updated_at: string
          website_url: string
        }
        Insert: {
          business_type?: string | null
          company_name?: string | null
          created_at?: string
          email: string
          id?: string
          monthly_revenue?: string | null
          phone?: string | null
          preferred_platforms?: Json | null
          role?: string | null
          service_type?: string | null
          session_id?: string | null
          step?: number
          updated_at?: string
          website_url: string
        }
        Update: {
          business_type?: string | null
          company_name?: string | null
          created_at?: string
          email?: string
          id?: string
          monthly_revenue?: string | null
          phone?: string | null
          preferred_platforms?: Json | null
          role?: string | null
          service_type?: string | null
          session_id?: string | null
          step?: number
          updated_at?: string
          website_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "leads_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      performance_audit_results: {
        Row: {
          action_plan: Json | null
          ai_recommendations: Json | null
          analysis_timestamp: string | null
          analyzed_url: string | null
          business_niche: string | null
          business_type: string | null
          competitive_gap: Json | null
          competitive_rank: string | null
          competitors: Json | null
          created_at: string | null
          data_source: string | null
          estimated_monthly_loss: Json | null
          expected_roi: Json | null
          id: string
          industry_category: string | null
          lead_id: string | null
          opportunity_score: number | null
          platform_recommendations: Json | null
          preferred_platforms: Json | null
          recommended_budget: Json | null
        }
        Insert: {
          action_plan?: Json | null
          ai_recommendations?: Json | null
          analysis_timestamp?: string | null
          analyzed_url?: string | null
          business_niche?: string | null
          business_type?: string | null
          competitive_gap?: Json | null
          competitive_rank?: string | null
          competitors?: Json | null
          created_at?: string | null
          data_source?: string | null
          estimated_monthly_loss?: Json | null
          expected_roi?: Json | null
          id?: string
          industry_category?: string | null
          lead_id?: string | null
          opportunity_score?: number | null
          platform_recommendations?: Json | null
          preferred_platforms?: Json | null
          recommended_budget?: Json | null
        }
        Update: {
          action_plan?: Json | null
          ai_recommendations?: Json | null
          analysis_timestamp?: string | null
          analyzed_url?: string | null
          business_niche?: string | null
          business_type?: string | null
          competitive_gap?: Json | null
          competitive_rank?: string | null
          competitors?: Json | null
          created_at?: string | null
          data_source?: string | null
          estimated_monthly_loss?: Json | null
          expected_roi?: Json | null
          id?: string
          industry_category?: string | null
          lead_id?: string | null
          opportunity_score?: number | null
          platform_recommendations?: Json | null
          preferred_platforms?: Json | null
          recommended_budget?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "performance_audit_results_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      rate_limits: {
        Row: {
          created_at: string
          id: string
          identifier: string
          operation: string
        }
        Insert: {
          created_at?: string
          id?: string
          identifier: string
          operation: string
        }
        Update: {
          created_at?: string
          id?: string
          identifier?: string
          operation?: string
        }
        Relationships: []
      }
      sessions: {
        Row: {
          browser: string | null
          created_at: string
          current_page_url: string | null
          first_landed_at: string
          first_page_url: string | null
          id: string
          ip_address: string | null
          ip_city: string | null
          ip_country: string | null
          ip_state: string | null
          referrer: string | null
          user_agent: string | null
        }
        Insert: {
          browser?: string | null
          created_at?: string
          current_page_url?: string | null
          first_landed_at?: string
          first_page_url?: string | null
          id?: string
          ip_address?: string | null
          ip_city?: string | null
          ip_country?: string | null
          ip_state?: string | null
          referrer?: string | null
          user_agent?: string | null
        }
        Update: {
          browser?: string | null
          created_at?: string
          current_page_url?: string | null
          first_landed_at?: string
          first_page_url?: string | null
          id?: string
          ip_address?: string | null
          ip_city?: string | null
          ip_country?: string | null
          ip_state?: string | null
          referrer?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      cleanup_old_rate_limits: { Args: never; Returns: undefined }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
