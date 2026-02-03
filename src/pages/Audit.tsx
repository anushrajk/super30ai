import { useState, useEffect, lazy, Suspense } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/hooks/useSession";
import { useLead } from "@/hooks/useLead";
import { formatToIST } from "@/lib/timeUtils";
import { useFunnelData } from "@/hooks/useFunnelData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Loader2, 
  CheckCircle, 
  AlertTriangle, 
  Lock, 
  ArrowRight, 
  Zap, 
  Target, 
  TrendingUp,
  Eye,
  Settings,
  RefreshCw,
  ExternalLink,
  Clock,
  AlertCircle,
  Building,
  Users,
  TrendingDown,
  IndianRupee,
  Lightbulb,
  FileText,
  Search,
  Smartphone,
  BarChart,
  Shield,
  Mic,
  Sparkles
} from "lucide-react";
import { toast } from "sonner";
import { Footer } from "@/components/landing/Footer";
import {
  TooltipProvider,
} from "@/components/ui/tooltip";

// Import components - lazy load the heavy recharts component
import ScoreGauge from "@/components/audit/ScoreGauge";
const CompetitorRadarChart = lazy(() => import("@/components/audit/CompetitorRadarChart"));
import OpportunityCard from "@/components/audit/OpportunityCard";
import RevenueImpactCard from "@/components/audit/RevenueImpactCard";
import ScoreBreakdownTabs from "@/components/audit/ScoreBreakdownTabs";
import MissedOpportunityGauge from "@/components/audit/MissedOpportunityGauge";
import AnalysisLoader from "@/components/audit/AnalysisLoader";

// SEO Insights data for the insights tab
const seoInsights = [
  { fact: "68% of online experiences begin with a search engine", source: "BrightEdge", icon: Search },
  { fact: "AI-powered search now handles 25% of all queries", source: "Gartner 2024", icon: Sparkles },
  { fact: "The average first-page result contains 1,447 words", source: "Backlinko", icon: FileText },
  { fact: "Mobile devices generate 58% of global website traffic", source: "Statista", icon: Smartphone },
  { fact: "Pages loading in under 3 seconds have 32% higher conversion", source: "Google", icon: Zap },
  { fact: "75% of users never scroll past the first page of search", source: "HubSpot", icon: BarChart },
  { fact: "Core Web Vitals are a confirmed Google ranking factor", source: "Google", icon: Shield },
  { fact: "Voice search accounts for 20% of mobile queries", source: "Think with Google", icon: Mic },
];

interface AuditResults {
  seo_score: number;
  performance_score: number;
  accessibility_score: number;
  best_practices_score: number;
  ai_visibility_score: number;
  technical_issues: number;
  opportunities: any[];
  diagnostics: any[];
  analyzed_url?: string;
  original_url?: string;
  is_deep_page?: boolean;
  analysis_timestamp?: string;
  data_source?: string;
}

interface AnalysisError {
  message: string;
  errorCode?: string;
  suggestion?: string;
  checkedUrl?: string;
}

interface CompetitorData {
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

const loadingSteps = [
  { text: "Crawling your website...", icon: Settings },
  { text: "Checking AI visibility signals...", icon: Eye },
  { text: "Analyzing authority patterns...", icon: Target },
  { text: "Calculating conversion readiness...", icon: TrendingUp }
];

const aiAnalysisSteps = [
  { text: "Detecting business niche...", icon: Building },
  { text: "Finding competitors...", icon: Users },
  { text: "Calculating missed opportunities...", icon: TrendingDown },
  { text: "Estimating revenue impact...", icon: IndianRupee }
];

const Audit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { session, updateCurrentPage } = useSession();
  const { lead, getLead, updateLead, sendLeadEmail } = useLead();
  const { setAuditData, setCompetitorData: saveFunnelCompetitorData, leadData: funnelLeadData } = useFunnelData();
  
  const [analyzing, setAnalyzing] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [auditResults, setAuditResults] = useState<AuditResults | null>(null);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [analysisError, setAnalysisError] = useState<AnalysisError | null>(null);
  const [analyzedUrl, setAnalyzedUrl] = useState<string | null>(null);
  const [currentLeadId, setCurrentLeadId] = useState<string | null>(null);
  const [currentAuditId, setCurrentAuditId] = useState<string | null>(null);
  
  // AI Competitor Analysis state
  const [analyzingCompetitors, setAnalyzingCompetitors] = useState(false);
  const [aiAnalysisStep, setAiAnalysisStep] = useState(0);
  const [competitorData, setCompetitorData] = useState<CompetitorData | null>(null);
  const [competitorError, setCompetitorError] = useState<string | null>(null);

  // Transition state for smooth loading-to-results animation
  const [showResults, setShowResults] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get form data from navigation state or funnel storage
  const formData = location.state?.formData || funnelLeadData;

  useEffect(() => {
    updateCurrentPage();
    
    const leadId = location.state?.leadId || localStorage.getItem('seo_lead_id');
    
    if (leadId) {
      setCurrentLeadId(leadId);
      getLead(leadId);
      runAnalysis(leadId);
    } else if (formData?.website_url) {
      runAnalysisWithUrl(formData.website_url);
    } else {
      navigate("/ai-seo");
    }
  }, []);

  // Trigger transition celebration when competitor analysis completes
  useEffect(() => {
    if (!analyzing && !analyzingCompetitors && auditResults && competitorData && !showResults) {
      setIsTransitioning(true);
      setTimeout(() => {
        setShowResults(true);
        setIsTransitioning(false);
      }, 1500);
    }
  }, [analyzing, analyzingCompetitors, auditResults, competitorData, showResults]);

  const runAnalysisWithUrl = async (url: string) => {
    setAnalysisError(null);
    setAnalyzing(true);
    setAnalyzedUrl(url);
    
    for (let i = 0; i < loadingSteps.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    try {
      const { data: analysisData, error } = await supabase.functions.invoke('analyze-seo', {
        body: { url }
      });

      if (error) throw error;

      if (!analysisData || analysisData.error) {
        // Handle structured error response from edge function
        const errorData = analysisData || {};
        throw {
          message: errorData.error || "Analysis failed",
          errorCode: errorData.errorCode,
          suggestion: errorData.suggestion,
          checkedUrl: errorData.checkedUrl
        };
      }

      if (typeof analysisData.seo_score !== 'number') {
        throw { message: "Invalid analysis response" };
      }

      const results = { ...analysisData };
      setAuditResults(results);
      setAuditData(results);
      runCompetitorAnalysis(url, results);

    } catch (error: any) {
      console.error("Analysis error:", error);
      setAnalysisError({
        message: error.message || "Failed to analyze website. Please try again.",
        errorCode: error.errorCode,
        suggestion: error.suggestion,
        checkedUrl: error.checkedUrl
      });
    } finally {
      setAnalyzing(false);
    }
  };

  const runAnalysis = async (leadId: string) => {
    setAnalysisError(null);
    setAnalyzing(true);
    
    for (let i = 0; i < loadingSteps.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    try {
      let websiteUrl = formData?.website_url;
      
      if (!websiteUrl && session?.id) {
        // Use secure edge function to get lead data
        const { data: sessionData } = await supabase.functions.invoke('get-session-data', {
          body: { type: 'leads' },
          headers: { 'x-session-id': session.id }
        });

        const leadData = sessionData?.leads?.find((l: any) => l.id === leadId);
        websiteUrl = leadData?.website_url;
      }

      if (!websiteUrl) {
        throw { message: "No website URL found. Please go back and enter your URL." };
      }

      setAnalyzedUrl(websiteUrl);

      const { data: analysisData, error } = await supabase.functions.invoke('analyze-seo', {
        body: { url: websiteUrl, leadId }
      });

      if (error) throw error;

      if (!analysisData || analysisData.error) {
        // Handle structured error response from edge function
        const errorData = analysisData || {};
        throw {
          message: errorData.error || "Analysis failed",
          errorCode: errorData.errorCode,
          suggestion: errorData.suggestion,
          checkedUrl: errorData.checkedUrl
        };
      }

      if (typeof analysisData.seo_score !== 'number') {
        throw { message: "Invalid analysis response" };
      }

      const results = { ...analysisData };
      setAuditResults(results);
      setAuditData(results);

      // Audit record is now saved server-side by the analyze-seo edge function
      // Use the audit ID returned from the analysis if available
      if (analysisData.audit_id) {
        setCurrentAuditId(analysisData.audit_id);
      }

      runCompetitorAnalysis(websiteUrl, results, leadId, analysisData.audit_id);

    } catch (error: any) {
      console.error("Analysis error:", error);
      setAnalysisError({
        message: error.message || "Failed to analyze website. Please try again.",
        errorCode: error.errorCode,
        suggestion: error.suggestion,
        checkedUrl: error.checkedUrl
      });
    } finally {
      setAnalyzing(false);
    }
  };

  const runCompetitorAnalysis = async (url: string, auditData: AuditResults, leadId?: string, auditId?: string) => {
    setAnalyzingCompetitors(true);
    setCompetitorError(null);
    
    for (let i = 0; i < aiAnalysisSteps.length; i++) {
      setAiAnalysisStep(i);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    try {
      const { data: competitorResult, error } = await supabase.functions.invoke('analyze-competitor', {
        body: { 
          url, 
          auditData,
          leadId: leadId || currentLeadId,
          auditId: auditId || currentAuditId
        }
      });

      if (error) throw error;

      if (competitorResult?.error) {
        throw new Error(competitorResult.error);
      }

      setCompetitorData(competitorResult);
      saveFunnelCompetitorData(competitorResult);

    } catch (error: any) {
      console.error("Competitor analysis error:", error);
      setCompetitorError(error.message || "Failed to analyze competitors");
    } finally {
      setAnalyzingCompetitors(false);
    }
  };

  const handleRetry = () => {
    const leadId = currentLeadId || location.state?.leadId || localStorage.getItem('seo_lead_id');
    if (leadId) {
      runAnalysis(leadId);
    } else if (formData?.website_url) {
      runAnalysisWithUrl(formData.website_url);
    }
  };

  const handleUnlockClick = async () => {
    const leadId = currentLeadId || location.state?.leadId || localStorage.getItem('seo_lead_id');
    
    setIsUnlocking(true);
    try {
      if (leadId) {
        await updateLead(leadId, { step: 2 }, session?.id);

        if (session && lead) {
          sendLeadEmail(
            { ...lead, step: 2 },
            session,
            "Step 2 - Viewed Audit Results"
          ).catch((err) => console.error("Email send failed:", err));
        }
      }

      toast.success("Redirecting to book your strategy call...");
      
      navigate("/booking", { 
        state: { 
          leadId,
          leadData: formData || lead,
          auditData: auditResults,
          competitorData
        } 
      });
    } catch (error) {
      console.error("Failed to update lead:", error);
      navigate("/booking", { 
        state: { 
          leadId,
          leadData: formData || lead,
          auditData: auditResults,
          competitorData
        } 
      });
    } finally {
      setIsUnlocking(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    return "text-red-500";
  };

  // Use centralized IST formatting
  const formatTimestamp = (timestamp: string) => {
    return formatToIST(timestamp);
  };

  // Loading State - Using advanced AnalysisLoader
  const LoadingState = () => (
    <AnalysisLoader
      currentStep={currentStep}
      steps={loadingSteps}
      analyzedUrl={analyzedUrl}
      variant="primary"
    />
  );

  // Error State
  const ErrorState = () => (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-8 text-center">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Analysis Failed
        </h2>
        <p className="text-muted-foreground mb-4">
          {analysisError?.message || "We couldn't analyze your website at this time."}
        </p>
        {analysisError?.suggestion && (
          <p className="text-sm text-muted-foreground mb-4 bg-muted/50 p-3 rounded-lg">
            <Lightbulb className="w-4 h-4 inline mr-1" />
            {analysisError.suggestion}
          </p>
        )}
        {analysisError?.checkedUrl && (
          <p className="text-xs text-muted-foreground mb-4">
            Attempted to analyze: <code className="bg-muted px-1 rounded">{analysisError.checkedUrl}</code>
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={handleRetry} variant="default">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Button onClick={handleUnlockClick} variant="outline">
            Book Strategy Call Instead
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-6">
          If the issue persists, our experts can perform a manual audit during your strategy call.
        </p>
      </CardContent>
    </Card>
  );

  // Data Source Badge with Google + Gemini Logos
  const DataSourceBadge = () => (
    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
      {analyzedUrl && (
        <div className="flex items-center gap-1">
          <ExternalLink className="w-4 h-4" />
          <span className="font-medium">{analyzedUrl}</span>
        </div>
      )}
      {auditResults?.analysis_timestamp && (
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>Analyzed: {formatTimestamp(auditResults.analysis_timestamp)}</span>
        </div>
      )}
      <Badge variant="secondary" className="text-xs flex items-center gap-1.5">
        Powered by
        <img 
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
          alt="Google" 
          className="h-4 w-auto"
        />
        <span className="text-muted-foreground">+</span>
        <img 
          src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" 
          alt="Gemini" 
          className="h-4 w-auto"
        />
      </Badge>
    </div>
  );

  // Transition Celebration Component
  const TransitionCelebration = () => (
    <div className="max-w-2xl mx-auto text-center py-12">
      <div className="animate-celebrate-in">
        {/* Animated checkmark */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30">
          <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path className="animate-checkmark" d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3">
          Analysis Complete!
        </h2>
        
        {auditResults && (
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-center">
              <div className={`text-4xl font-bold ${getScoreColor(auditResults.seo_score)}`}>
                {auditResults.seo_score}
              </div>
              <p className="text-sm text-muted-foreground">SEO Score</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className={`text-4xl font-bold ${getScoreColor(auditResults.ai_visibility_score)}`}>
                {auditResults.ai_visibility_score}
              </div>
              <p className="text-sm text-muted-foreground">AI Visibility</p>
            </div>
          </div>
        )}
        
        <p className="text-muted-foreground">
          Loading your detailed report...
        </p>
      </div>
    </div>
  );

  // SEO Insights Tab Content
  const SEOInsightsContent = () => (
    <div className="space-y-6 animate-fade-slide-up">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">SEO Industry Insights</h2>
        <p className="text-muted-foreground">Key facts that shape modern search optimization</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        {seoInsights.map((insight, idx) => {
          const InsightIcon = insight.icon;
          return (
            <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]" style={{ animationDelay: `${idx * 50}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-xl flex-shrink-0">
                    <InsightIcon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-2">{insight.fact}</p>
                    <p className="text-xs text-muted-foreground">Source: {insight.source}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      {/* How This Affects Your Website */}
      <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-0">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-500/20 rounded-xl flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-white mb-2">What This Means For Your Website</h3>
              <p className="text-slate-300 text-sm mb-4">
                Based on these industry benchmarks, your website needs to be optimized for both traditional search engines and AI-powered assistants. 
                Our analysis shows exactly where you stand and what improvements can drive the most impact.
              </p>
              <Button onClick={handleUnlockClick} className="bg-orange-500 hover:bg-orange-600 text-white">
                Get Personalized Recommendations
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Deep Page Warning CTA
  const DeepPageWarning = () => {
    if (!auditResults?.is_deep_page || !auditResults?.original_url) return null;
    
    return (
      <Card className="border-amber-300 bg-amber-50 mb-6">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="p-3 bg-amber-100 rounded-full">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-amber-900 mb-1">
                Partial Analysis Notice
              </h3>
              <p className="text-sm text-amber-700 mb-2">
                You submitted a specific page URL: <span className="font-medium break-all">{auditResults.original_url}</span>
              </p>
              <p className="text-sm text-amber-700">
                This audit was performed on your <strong>homepage only</strong>. To get a comprehensive audit of your entire website including all pages, book a consultation with our experts.
              </p>
            </div>
            <Button 
              onClick={handleUnlockClick}
              className="bg-amber-600 hover:bg-amber-700 text-white whitespace-nowrap"
            >
              Book Full Website Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  // AI Analysis Loading - Using advanced AnalysisLoader
  const AIAnalysisLoading = () => (
    <AnalysisLoader
      currentStep={aiAnalysisStep}
      steps={aiAnalysisSteps}
      analyzedUrl={analyzedUrl}
      variant="ai"
    />
  );

  // Competitor Results
  const CompetitorAnalysisResults = () => {
    if (!competitorData) return null;

    return (
      <div className="space-y-6">
        {/* Business Context */}
        <Card className="border-purple-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Building className="w-5 h-5 text-purple-500" />
              Business Analysis
              <Badge className="bg-purple-100 text-purple-700">AI-Powered</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Business Niche</p>
                <p className="font-semibold text-foreground">{competitorData.business_niche}</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Industry Category</p>
                <p className="font-semibold text-foreground">{competitorData.industry_category}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Fix CTA Section */}
        <Card className="border-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
          
          <CardContent className="p-6 md:p-8 relative">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              {/* Left: Issues & Hook */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Critical Issues Found
                  </h3>
                </div>
                
                {/* Key Issues List */}
                <div className="flex flex-wrap gap-2">
                  {competitorData.opportunity_breakdown.ai_visibility_gap > 30 && (
                    <Badge className="bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30">
                      Low AI Visibility ({competitorData.opportunity_breakdown.ai_visibility_gap}% gap)
                    </Badge>
                  )}
                  {competitorData.opportunity_breakdown.content_gap > 30 && (
                    <Badge className="bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30">
                      Content Gap ({competitorData.opportunity_breakdown.content_gap}%)
                    </Badge>
                  )}
                  {competitorData.opportunity_breakdown.technical_gap > 30 && (
                    <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30">
                      Technical Issues ({competitorData.opportunity_breakdown.technical_gap}%)
                    </Badge>
                  )}
                  {competitorData.opportunity_breakdown.authority_gap > 30 && (
                    <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30">
                      Authority Gap ({competitorData.opportunity_breakdown.authority_gap}%)
                    </Badge>
                  )}
                  {auditResults && auditResults.technical_issues > 0 && (
                    <Badge className="bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-500/30">
                      {auditResults.technical_issues} Technical Errors
                    </Badge>
                  )}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  Your website is losing <span className="text-orange-400 font-semibold">₹{competitorData.estimated_monthly_loss.amount.toLocaleString("en-IN")}/month</span> in potential revenue. 
                  Our SEO experts can fix these issues and help you outrank competitors.
                </p>
              </div>

              {/* Right: CTA Button */}
              <div className="flex-shrink-0 w-full lg:w-auto">
                <Button 
                  onClick={handleUnlockClick}
                  size="lg"
                  className="w-full lg:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg px-8"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get Expert Help
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-slate-500 mt-2 text-center lg:text-left">
                  Free 30-min strategy call
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <MissedOpportunityGauge 
          score={competitorData.missed_opportunity_score}
          breakdown={competitorData.opportunity_breakdown}
        />

        {/* Revenue Impact */}
        <RevenueImpactCard 
          amount={competitorData.estimated_monthly_loss.amount}
          currency={competitorData.estimated_monthly_loss.currency}
          calculationBasis={competitorData.estimated_monthly_loss.calculation_basis}
          breakdown={{
            aiVisibilityGap: competitorData.opportunity_breakdown.ai_visibility_gap,
            contentGap: competitorData.opportunity_breakdown.content_gap,
            technicalGap: competitorData.opportunity_breakdown.technical_gap,
            authorityGap: competitorData.opportunity_breakdown.authority_gap
          }}
        />

        {/* Competitor Radar Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-500" />
              Your Position vs Competitors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={
              <div className="h-[300px] flex items-center justify-center">
                <Skeleton className="w-full h-full rounded-lg" />
              </div>
            }>
              <CompetitorRadarChart 
                yourScores={{
                  aiVisibility: 100 - competitorData.opportunity_breakdown.ai_visibility_gap,
                  content: 100 - competitorData.opportunity_breakdown.content_gap,
                  technical: 100 - competitorData.opportunity_breakdown.technical_gap,
                  authority: 100 - competitorData.opportunity_breakdown.authority_gap
                }}
              />
            </Suspense>
          </CardContent>
        </Card>

        {/* Competitors List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              Top Competitors in Your Space
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {competitorData.competitors.map((competitor, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-foreground">{competitor.name}</span>
                      <Badge variant="outline" className="text-xs">{competitor.domain}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{competitor.why_competitor}</p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-sm text-muted-foreground">SEO Strength</p>
                    <p className={`text-xl font-bold ${getScoreColor(competitor.estimated_strength)}`}>
                      {competitor.estimated_strength}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Recommendations - Blurred/Locked */}
        <Card className="border-green-200 bg-green-50/50 relative overflow-hidden">
          {/* Blur overlay with lock */}
          <div className="absolute inset-0 backdrop-blur-md bg-green-50/70 z-10 flex items-center justify-center">
            <div className="text-center p-6">
              <Lock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-green-800 mb-2">
                AI Recommendations Locked
              </h3>
              <p className="text-sm text-green-700 mb-4 max-w-xs mx-auto">
                Book a strategy call to unlock personalized AI-powered recommendations for your website
              </p>
              <Button onClick={handleUnlockClick} className="bg-green-600 hover:bg-green-700">
                Unlock Recommendations
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Blurred placeholder content (no real data) */}
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-green-500" />
              AI Recommendations
              <Badge className="bg-purple-100 text-purple-700 text-xs">AI-Powered</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="filter blur-sm pointer-events-none select-none">
            <ul className="space-y-3">
              {[1, 2, 3, 4].map((_, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted/70 rounded w-3/4" />
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Your AI SEO Audit Results | The Super 30</title>
        <meta name="description" content="View your personalized AI SEO visibility report and discover opportunities to improve your search presence." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen bg-muted/30">
        {/* Header */}
        <header className="bg-slate-900 py-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Your AI SEO Visibility Report
            </h1>
            <p className="text-slate-400">
              {analyzedUrl ? `Analysis for ${analyzedUrl}` : 'Based on real-time analysis of your website'}
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          {analyzing ? (
            <LoadingState />
          ) : analysisError ? (
            <ErrorState />
          ) : auditResults && (
            <>
              {/* Show loading for competitor analysis or transition */}
              {analyzingCompetitors ? (
                <AIAnalysisLoading />
              ) : isTransitioning ? (
                <TransitionCelebration />
              ) : (
                <TooltipProvider>
                  <div className="space-y-8">
                    {/* Deep Page Warning */}
                    <DeepPageWarning />

                    {/* Data Source Info */}
                    <DataSourceBadge />

                    {/* Tabs for Report and SEO Insights */}
                    <Tabs defaultValue="report" className="w-full">
                      <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                        <TabsTrigger value="report" className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Report
                        </TabsTrigger>
                        <TabsTrigger value="insights" className="flex items-center gap-2">
                          <Lightbulb className="w-4 h-4" />
                          SEO Insights
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="report" className="animate-fade-slide-up">
                        <div className="space-y-8">
                          {/* Main Score Cards */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                              <CardContent className="p-4 md:p-6">
                                <ScoreGauge 
                                  score={auditResults.seo_score}
                                  label="SEO Health"
                                  sublabel="Google PageSpeed"
                                  size="md"
                                />
                              </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                              <CardContent className="p-4 md:p-6">
                                <ScoreGauge 
                                  score={auditResults.ai_visibility_score}
                                  label="AI Visibility"
                                  sublabel="Composite Score"
                                  size="md"
                                  showTooltip
                                  tooltipContent="Calculated from SEO (40%), Performance (30%), Accessibility (20%), Best Practices (10%)"
                                />
                              </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                              <CardContent className="p-4 md:p-6 flex flex-col items-center">
                                <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                                  {auditResults.technical_issues}
                                </div>
                                <h3 className="font-semibold text-foreground text-sm">Technical Issues</h3>
                                <p className="text-xs text-muted-foreground">From PageSpeed audit</p>
                              </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
                              <CardContent className="p-4 md:p-6 flex flex-col items-center">
                                <div className="flex items-center gap-1 text-2xl md:text-3xl font-bold text-orange-600 mb-2">
                                  <IndianRupee className="w-5 h-5 md:w-6 md:h-6" />
                                  {competitorData 
                                    ? competitorData.estimated_monthly_loss.amount.toLocaleString('en-IN')
                                    : Math.round(auditResults.technical_issues * 25000).toLocaleString('en-IN')
                                  }
                                </div>
                                <h3 className="font-semibold text-foreground text-sm">Revenue Impact</h3>
                                <Badge variant="outline" className="text-xs mt-1 border-orange-300 text-orange-600">
                                  {competitorData ? "AI Calculated" : "Projected"}/mo
                                </Badge>
                              </CardContent>
                            </Card>
                          </div>

                          {/* AI Competitor Analysis Section */}
                          {competitorError ? (
                            <Card className="border-red-200 bg-red-50">
                              <CardContent className="p-4">
                                <div className="flex items-center gap-3">
                                  <AlertCircle className="w-5 h-5 text-red-500" />
                                  <div>
                                    <p className="font-semibold text-red-800">AI Analysis Failed</p>
                                    <p className="text-sm text-red-700">{competitorError}</p>
                                  </div>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => auditResults && analyzedUrl && runCompetitorAnalysis(analyzedUrl, auditResults)}
                                    className="ml-auto"
                                  >
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    Retry
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          ) : competitorData ? (
                            <CompetitorAnalysisResults />
                          ) : null}

                          {/* Detailed Score Breakdown Tabs */}
                          <ScoreBreakdownTabs 
                            performance={auditResults.performance_score}
                            seo={auditResults.seo_score}
                            accessibility={auditResults.accessibility_score}
                            bestPractices={auditResults.best_practices_score}
                            opportunities={auditResults.opportunities || []}
                            diagnostics={auditResults.diagnostics || []}
                          />

                          {/* Opportunities Section */}
                          {auditResults.opportunities && auditResults.opportunities.length > 0 && (
                            <Card>
                              <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                                  Improvement Opportunities
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-3">
                                {auditResults.opportunities.map((opp, idx) => (
                                  <OpportunityCard 
                                    key={idx}
                                    title={opp.title}
                                    description={opp.description}
                                    score={opp.score}
                                    displayValue={opp.displayValue}
                                  />
                                ))}
                              </CardContent>
                            </Card>
                          )}

                          {/* Locked Sections */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <Card className="relative overflow-hidden">
                              <div className="absolute inset-0 backdrop-blur-sm bg-background/80 z-10 flex items-center justify-center">
                                <div className="text-center p-6">
                                  <Lock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                  <h3 className="font-semibold text-foreground mb-2">Exact Fixes & Recommendations</h3>
                                  <p className="text-sm text-muted-foreground">Unlock to see step-by-step fixes</p>
                                </div>
                              </div>
                              <CardContent className="p-6 filter blur-sm">
                                <h3 className="font-semibold mb-4">Top Issues to Fix</h3>
                                <ul className="space-y-2">
                                  <li className="flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                                    <span>Performance optimization opportunities</span>
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                                    <span>SEO improvements identified</span>
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4 text-red-500" />
                                    <span>Critical issues requiring attention</span>
                                  </li>
                                </ul>
                              </CardContent>
                            </Card>

                            <Card className="relative overflow-hidden">
                              <div className="absolute inset-0 backdrop-blur-sm bg-background/80 z-10 flex items-center justify-center">
                                <div className="text-center p-6">
                                  <Lock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                  <h3 className="font-semibold text-foreground mb-2">90-Day Growth Roadmap</h3>
                                  <p className="text-sm text-muted-foreground">Unlock to see your personalized plan</p>
                                </div>
                              </div>
                              <CardContent className="p-6 filter blur-sm">
                                <h3 className="font-semibold mb-4">Personalized Growth Plan</h3>
                                <div className="space-y-4">
                                  <div className="flex justify-between">
                                    <span>Month 1</span>
                                    <span className="font-semibold text-muted-foreground">Technical fixes</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Month 2</span>
                                    <span className="font-semibold text-muted-foreground">Content optimization</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Month 3</span>
                                    <span className="font-semibold text-muted-foreground">Authority building</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          {/* Unlock CTA */}
                          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 border-0">
                            <CardContent className="p-8 text-center">
                              <Zap className="w-12 h-12 text-white mx-auto mb-4" />
                              <h2 className="text-2xl font-bold text-white mb-2">
                                Get Your Complete Analysis & Action Plan
                              </h2>
                              <p className="text-orange-100 mb-6 max-w-lg mx-auto">
                                Book a FREE strategy call to unlock detailed recommendations, step-by-step fixes, and a personalized 90-day growth roadmap from our SEO experts.
                              </p>
                              <Button 
                                onClick={handleUnlockClick}
                                disabled={isUnlocking}
                                className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-6 text-lg"
                              >
                                {isUnlocking ? (
                                  <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Processing...
                                  </>
                                ) : (
                                  <>
                                    Book Free Strategy Call
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                  </>
                                )}
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      </TabsContent>

                      <TabsContent value="insights">
                        <SEOInsightsContent />
                      </TabsContent>
                    </Tabs>
                  </div>
                </TooltipProvider>
              )}
            </>
          )}
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Audit;
