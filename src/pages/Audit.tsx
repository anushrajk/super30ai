import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/hooks/useSession";
import { useLead } from "@/hooks/useLead";
import { useFunnelData } from "@/hooks/useFunnelData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
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
  Info,
  ExternalLink,
  Clock,
  AlertCircle,
  Building,
  Users,
  TrendingDown,
  IndianRupee,
  Lightbulb
} from "lucide-react";
import { toast } from "sonner";
import { Footer } from "@/components/landing/Footer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  analysis_timestamp?: string;
  data_source?: string;
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
  const { lead, getLead, updateLead, sendLeadEmail, loading: leadLoading } = useLead();
  const { setAuditData, setCompetitorData: saveFunnelCompetitorData, leadData: funnelLeadData } = useFunnelData();
  
  const [analyzing, setAnalyzing] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [auditResults, setAuditResults] = useState<AuditResults | null>(null);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [analyzedUrl, setAnalyzedUrl] = useState<string | null>(null);
  const [currentLeadId, setCurrentLeadId] = useState<string | null>(null);
  const [currentAuditId, setCurrentAuditId] = useState<string | null>(null);
  
  // AI Competitor Analysis state
  const [analyzingCompetitors, setAnalyzingCompetitors] = useState(false);
  const [aiAnalysisStep, setAiAnalysisStep] = useState(0);
  const [competitorData, setCompetitorData] = useState<CompetitorData | null>(null);
  const [competitorError, setCompetitorError] = useState<string | null>(null);

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
      // If no leadId but we have form data, still run analysis
      runAnalysisWithUrl(formData.website_url);
    } else {
      navigate("/ai-seo");
    }
  }, []);

  const runAnalysisWithUrl = async (url: string) => {
    setAnalysisError(null);
    setAnalyzing(true);
    setAnalyzedUrl(url);
    
    // Animate through loading steps
    for (let i = 0; i < loadingSteps.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    try {
      // Call the SEO analysis edge function
      const { data: analysisData, error } = await supabase.functions.invoke('analyze-seo', {
        body: { url }
      });

      if (error) throw error;

      if (!analysisData || analysisData.error) {
        throw new Error(analysisData?.error || "Analysis failed");
      }

      if (typeof analysisData.seo_score !== 'number') {
        throw new Error("Invalid analysis response");
      }

      const results = {
        ...analysisData,
        data_source: 'google_pagespeed_v5'
      };

      setAuditResults(results);
      setAuditData(results);

      // Run AI competitor analysis
      runCompetitorAnalysis(url, results);

    } catch (error: any) {
      console.error("Analysis error:", error);
      setAnalysisError(error.message || "Failed to analyze website. Please try again.");
    } finally {
      setAnalyzing(false);
    }
  };

  const runAnalysis = async (leadId: string) => {
    setAnalysisError(null);
    setAnalyzing(true);
    
    // Animate through loading steps
    for (let i = 0; i < loadingSteps.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    try {
      // First try to get URL from lead data
      let websiteUrl = formData?.website_url;
      
      if (!websiteUrl) {
        const { data: leadData } = await supabase
          .from('leads')
          .select('website_url')
          .eq('id', leadId)
          .single();

        websiteUrl = leadData?.website_url;
      }

      if (!websiteUrl) {
        throw new Error("No website URL found. Please go back and enter your URL.");
      }

      setAnalyzedUrl(websiteUrl);

      // Call the SEO analysis edge function
      const { data: analysisData, error } = await supabase.functions.invoke('analyze-seo', {
        body: { url: websiteUrl, leadId }
      });

      if (error) throw error;

      if (!analysisData || analysisData.error) {
        throw new Error(analysisData?.error || "Analysis failed");
      }

      if (typeof analysisData.seo_score !== 'number') {
        throw new Error("Invalid analysis response");
      }

      const results = {
        ...analysisData,
        data_source: 'google_pagespeed_v5'
      };

      setAuditResults(results);
      setAuditData(results);

      // Save audit results to database
      const { data: auditRecord, error: insertError } = await supabase.from('audit_results').insert({
        lead_id: leadId,
        seo_score: analysisData.seo_score,
        performance_score: analysisData.performance_score,
        accessibility_score: analysisData.accessibility_score,
        best_practices_score: analysisData.best_practices_score,
        ai_visibility_score: analysisData.ai_visibility_score,
        technical_issues: analysisData.technical_issues,
        opportunities: analysisData.opportunities,
        diagnostics: analysisData.diagnostics,
        analyzed_url: analysisData.analyzed_url,
        analysis_timestamp: analysisData.analysis_timestamp,
        data_source: 'google_pagespeed_v5'
      }).select().single();

      if (auditRecord) {
        setCurrentAuditId(auditRecord.id);
      }

      // Run AI competitor analysis
      runCompetitorAnalysis(websiteUrl, results, leadId, auditRecord?.id);

    } catch (error: any) {
      console.error("Analysis error:", error);
      setAnalysisError(error.message || "Failed to analyze website. Please try again.");
    } finally {
      setAnalyzing(false);
    }
  };

  const runCompetitorAnalysis = async (url: string, auditData: AuditResults, leadId?: string, auditId?: string) => {
    setAnalyzingCompetitors(true);
    setCompetitorError(null);
    
    // Animate through AI analysis steps
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
      
      // Navigate with complete data bundle
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
      // Still navigate even if update fails
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

  const getScoreBg = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  const formatTimestamp = (timestamp: string) => {
    try {
      return new Date(timestamp).toLocaleString();
    } catch {
      return timestamp;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Error State Component
  const ErrorState = () => (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-8 text-center">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Analysis Failed
        </h2>
        <p className="text-muted-foreground mb-6">
          {analysisError || "We couldn't analyze your website at this time."}
        </p>
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

  // Data Disclaimer Component
  const DataDisclaimer = () => (
    <Card className="border-amber-200 bg-amber-50">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold text-amber-800 mb-1">Data Disclaimer</p>
            <p className="text-amber-700">
              This report is generated using Google PageSpeed Insights API and AI analysis. 
              Scores represent automated analysis and may not capture all SEO factors. 
              For the most accurate assessment, <button onClick={handleUnlockClick} className="underline font-medium hover:text-amber-900">book a FREE manual audit</button> with our expert team.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Data Source Badge Component
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
      <Badge variant="secondary" className="text-xs">
        Powered by Google PageSpeed Insights
      </Badge>
    </div>
  );

  // AI Analysis Loading Component
  const AIAnalysisLoading = () => (
    <Card className="border-purple-200 bg-purple-50/50">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Loader2 className="w-6 h-6 animate-spin text-purple-500" />
          <h3 className="font-semibold text-purple-900">AI Competitor Analysis</h3>
        </div>
        <div className="space-y-3">
          {aiAnalysisSteps.map((step, index) => (
            <div 
              key={index}
              className={`flex items-center gap-3 p-2 rounded-lg transition-all ${
                index === aiAnalysisStep 
                  ? "bg-purple-100 border border-purple-200" 
                  : index < aiAnalysisStep 
                    ? "bg-green-50 border border-green-200"
                    : "bg-white/50"
              }`}
            >
              {index < aiAnalysisStep ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : index === aiAnalysisStep ? (
                <Loader2 className="w-4 h-4 animate-spin text-purple-500" />
              ) : (
                <div className="w-4 h-4 rounded-full border-2 border-purple-300" />
              )}
              <span className={`text-sm ${index <= aiAnalysisStep ? "text-purple-900" : "text-purple-400"}`}>
                {step.text}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  // Competitor Analysis Results Component
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

        {/* Missed Opportunity Score */}
        <Card className="border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-red-100"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={352}
                    strokeDashoffset={352 - (352 * competitorData.missed_opportunity_score) / 100}
                    className="text-red-500"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-red-600">
                  {competitorData.missed_opportunity_score}
                </span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-red-800 mb-2">Missed Opportunity Score</h3>
                <p className="text-red-700 mb-4">
                  You're missing <span className="font-bold">{competitorData.missed_opportunity_score}%</span> of potential visibility compared to competitors
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/80 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">AI Visibility Gap</p>
                    <p className="font-bold text-red-600">{competitorData.opportunity_breakdown.ai_visibility_gap}%</p>
                  </div>
                  <div className="bg-white/80 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">Content Gap</p>
                    <p className="font-bold text-red-600">{competitorData.opportunity_breakdown.content_gap}%</p>
                  </div>
                  <div className="bg-white/80 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">Technical Gap</p>
                    <p className="font-bold text-red-600">{competitorData.opportunity_breakdown.technical_gap}%</p>
                  </div>
                  <div className="bg-white/80 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">Authority Gap</p>
                    <p className="font-bold text-red-600">{competitorData.opportunity_breakdown.authority_gap}%</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estimated Monthly Loss */}
        <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <IndianRupee className="w-6 h-6 text-orange-500" />
              <h3 className="text-lg font-semibold text-orange-900">Estimated Monthly Revenue Loss</h3>
            </div>
            <div className="text-center py-4">
              <p className="text-5xl font-bold text-orange-600 mb-2">
                {formatCurrency(competitorData.estimated_monthly_loss.amount)}
              </p>
              <p className="text-sm text-orange-700">/month</p>
            </div>
            <p className="text-sm text-orange-700 mt-4 p-3 bg-orange-100 rounded-lg">
              <strong>Calculation basis:</strong> {competitorData.estimated_monthly_loss.calculation_basis}
            </p>
          </CardContent>
        </Card>

        {/* Competitors */}
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
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
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

        {/* AI Recommendations */}
        <Card className="border-green-200 bg-green-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-green-500" />
              AI Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {competitorData.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{rec}</span>
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
      </Helmet>

      <main className="min-h-screen bg-muted/30">
        {/* Header */}
        <header id="audit-header" className="bg-slate-900 py-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Your AI SEO Visibility Report
            </h1>
            <p className="text-slate-400">
              {analyzedUrl ? `Analysis for ${analyzedUrl}` : 'Based on real-time analysis of your website'}
            </p>
          </div>
        </header>

        <div id="audit-content" className="container mx-auto px-4 py-12">
          {analyzing ? (
            /* Loading State */
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <Loader2 className="w-16 h-16 animate-spin text-orange-500 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Analyzing Your Website
                </h2>
                {analyzedUrl && (
                  <p className="text-muted-foreground mb-6">{analyzedUrl}</p>
                )}
                
                <div className="space-y-4">
                  {loadingSteps.map((step, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                        index === currentStep 
                          ? "bg-orange-50 border border-orange-200" 
                          : index < currentStep 
                            ? "bg-green-50 border border-green-200"
                            : "bg-muted"
                      }`}
                    >
                      {index < currentStep ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : index === currentStep ? (
                        <Loader2 className="w-5 h-5 animate-spin text-orange-500" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                      )}
                      <span className={index <= currentStep ? "text-foreground" : "text-muted-foreground"}>
                        {step.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : analysisError ? (
            /* Error State */
            <ErrorState />
          ) : auditResults && (
            /* Results */
            <TooltipProvider>
              <div className="space-y-8">
                {/* Data Source Info */}
                <DataSourceBadge />

                {/* Disclaimer */}
                <DataDisclaimer />

                {/* Score Cards */}
                <div className="grid md:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <svg className="w-24 h-24 transform -rotate-90">
                          <circle
                            cx="48"
                            cy="48"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-muted"
                          />
                          <circle
                            cx="48"
                            cy="48"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={251}
                            strokeDashoffset={251 - (251 * auditResults.seo_score) / 100}
                            className={getScoreColor(auditResults.seo_score)}
                          />
                        </svg>
                        <span className={`absolute inset-0 flex items-center justify-center text-2xl font-bold ${getScoreColor(auditResults.seo_score)}`}>
                          {auditResults.seo_score}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground">SEO Health</h3>
                      <p className="text-xs text-muted-foreground mt-1">Google PageSpeed</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className={`text-5xl font-bold mb-4 ${getScoreColor(auditResults.ai_visibility_score)}`}>
                        {auditResults.ai_visibility_score}%
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <h3 className="font-semibold text-foreground">AI Visibility</h3>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p>Estimated score based on: SEO (40%), Performance (30%), Accessibility (20%), Best Practices (10%)</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <Badge variant="outline" className="text-xs mt-1">Estimated</Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl font-bold text-red-500 mb-4">
                        {auditResults.technical_issues}
                      </div>
                      <h3 className="font-semibold text-foreground">Technical Issues</h3>
                      <p className="text-xs text-muted-foreground mt-1">From PageSpeed audit</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl font-bold text-orange-500 mb-4">
                        {competitorData 
                          ? formatCurrency(competitorData.estimated_monthly_loss.amount)
                          : `₹${Math.round(auditResults.technical_issues * 25000).toLocaleString('en-IN')}`
                        }
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <h3 className="font-semibold text-foreground">Revenue Impact</h3>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p>{competitorData 
                              ? "AI-calculated based on industry analysis and competitor comparison"
                              : "Projected monthly revenue impact based on industry averages"
                            }</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <Badge variant="outline" className="text-xs mt-1">
                        {competitorData ? "AI Calculated" : "Projected Monthly"}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>

                {/* AI Competitor Analysis Section */}
                {analyzingCompetitors ? (
                  <AIAnalysisLoading />
                ) : competitorError ? (
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

                {/* Detailed Scores */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      Performance Breakdown
                      <Badge variant="secondary" className="text-xs font-normal">Live Data</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground">Performance</span>
                        <span className={`font-semibold ${getScoreColor(auditResults.performance_score)}`}>
                          {auditResults.performance_score}%
                        </span>
                      </div>
                      <Progress value={auditResults.performance_score} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground">Accessibility</span>
                        <span className={`font-semibold ${getScoreColor(auditResults.accessibility_score)}`}>
                          {auditResults.accessibility_score}%
                        </span>
                      </div>
                      <Progress value={auditResults.accessibility_score} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground">Best Practices</span>
                        <span className={`font-semibold ${getScoreColor(auditResults.best_practices_score)}`}>
                          {auditResults.best_practices_score}%
                        </span>
                      </div>
                      <Progress value={auditResults.best_practices_score} className="h-3" />
                    </div>
                  </CardContent>
                </Card>

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
                        {auditResults.opportunities && auditResults.opportunities.length > 0 ? (
                          auditResults.opportunities.slice(0, 3).map((opp, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <AlertTriangle className={`w-4 h-4 ${opp.score < 50 ? 'text-red-500' : 'text-yellow-500'}`} />
                              <span>{opp.title}{opp.displayValue ? ` (${opp.displayValue})` : ''}</span>
                            </li>
                          ))
                        ) : auditResults.diagnostics && auditResults.diagnostics.length > 0 ? (
                          auditResults.diagnostics.slice(0, 3).map((diag, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <AlertTriangle className={`w-4 h-4 ${diag.score < 50 ? 'text-red-500' : 'text-yellow-500'}`} />
                              <span>{diag.title}</span>
                            </li>
                          ))
                        ) : (
                          <>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="w-4 h-4 text-yellow-500" />
                              <span>Performance optimization opportunities</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="w-4 h-4 text-yellow-500" />
                              <span>SEO improvements identified</span>
                            </li>
                          </>
                        )}
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
                      <p className="text-xs text-muted-foreground mt-4">
                        Projections calculated during strategy call
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Unlock CTA */}
                <Card className="bg-gradient-to-br from-orange-500 to-orange-600">
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
            </TooltipProvider>
          )}
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Audit;
