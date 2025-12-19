import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/hooks/useSession";
import { useLead } from "@/hooks/useLead";
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
  AlertCircle
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

const loadingSteps = [
  { text: "Crawling your website...", icon: Settings },
  { text: "Checking AI visibility signals...", icon: Eye },
  { text: "Analyzing authority patterns...", icon: Target },
  { text: "Calculating conversion readiness...", icon: TrendingUp }
];

const Audit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { session, updateCurrentPage } = useSession();
  const { lead, getLead, updateLead, sendLeadEmail, loading: leadLoading } = useLead();
  
  const [analyzing, setAnalyzing] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [auditResults, setAuditResults] = useState<AuditResults | null>(null);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [analyzedUrl, setAnalyzedUrl] = useState<string | null>(null);

  useEffect(() => {
    updateCurrentPage();
    
    const leadId = location.state?.leadId || localStorage.getItem('seo_lead_id');
    
    if (leadId) {
      getLead(leadId);
      runAnalysis(leadId);
    } else {
      navigate("/");
    }
  }, []);

  const runAnalysis = async (leadId: string) => {
    setAnalysisError(null);
    setAnalyzing(true);
    
    // Animate through loading steps
    for (let i = 0; i < loadingSteps.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    try {
      // Get lead data to get the website URL
      const { data: leadData } = await supabase
        .from('leads')
        .select('website_url')
        .eq('id', leadId)
        .single();

      if (!leadData?.website_url) {
        throw new Error("No website URL found");
      }

      setAnalyzedUrl(leadData.website_url);

      // Call the SEO analysis edge function with lead ID for validation
      const { data: analysisData, error } = await supabase.functions.invoke('analyze-seo', {
        body: { url: leadData.website_url, leadId }
      });

      if (error) throw error;

      if (!analysisData || analysisData.error) {
        throw new Error(analysisData?.error || "Analysis failed");
      }

      // Ensure we have valid data
      if (typeof analysisData.seo_score !== 'number') {
        throw new Error("Invalid analysis response");
      }

      setAuditResults({
        ...analysisData,
        data_source: 'google_pagespeed_v5'
      });

      // Save audit results to database with metadata
      await supabase.from('audit_results').insert({
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
      });

    } catch (error: any) {
      console.error("Analysis error:", error);
      setAnalysisError(error.message || "Failed to analyze website. Please try again.");
      // Do NOT set fallback data - show error state instead
    } finally {
      setAnalyzing(false);
    }
  };

  const handleRetry = () => {
    const leadId = location.state?.leadId || localStorage.getItem('seo_lead_id');
    if (leadId) {
      runAnalysis(leadId);
    }
  };

  const handleUnlockClick = async () => {
    const leadId = location.state?.leadId || localStorage.getItem('seo_lead_id');
    if (!leadId) return;

    setIsUnlocking(true);
    try {
      await updateLead(leadId, { step: 2 }, session?.id);

      // Send email notification in background (non-blocking)
      if (session && lead) {
        sendLeadEmail(
          { ...lead, step: 2 },
          session,
          "Step 2 - Viewed Audit Results"
        ).catch((err) => console.error("Email send failed:", err));
      }

      toast.success("Redirecting to book your strategy call...");
      navigate("/booking", { state: { leadId } });
    } catch (error) {
      console.error("Failed to update lead:", error);
      toast.error("Something went wrong. Please try again.");
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

  // Error State Component
  const ErrorState = () => (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-8 text-center">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Analysis Failed
        </h2>
        <p className="text-slate-600 mb-6">
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
        <p className="text-sm text-slate-500 mt-6">
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
              This report is generated using Google PageSpeed Insights API and estimation algorithms. 
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
    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500 mb-6">
      {auditResults?.analyzed_url && (
        <div className="flex items-center gap-1">
          <ExternalLink className="w-4 h-4" />
          <span className="font-medium">{auditResults.analyzed_url}</span>
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

  return (
    <>
      <Helmet>
        <title>Your AI SEO Audit Results | DA360</title>
        <meta name="description" content="View your personalized AI SEO visibility report and discover opportunities to improve your search presence." />
      </Helmet>

      <main className="min-h-screen bg-slate-50">
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
            /* Loading State */
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <Loader2 className="w-16 h-16 animate-spin text-orange-500 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Analyzing Your Website
                </h2>
                {analyzedUrl && (
                  <p className="text-slate-600 mb-6">{analyzedUrl}</p>
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
                            : "bg-slate-50"
                      }`}
                    >
                      {index < currentStep ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : index === currentStep ? (
                        <Loader2 className="w-5 h-5 animate-spin text-orange-500" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-slate-300" />
                      )}
                      <span className={index <= currentStep ? "text-slate-900" : "text-slate-400"}>
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
                            className="text-slate-200"
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
                      <h3 className="font-semibold text-slate-900">SEO Health</h3>
                      <p className="text-xs text-slate-500 mt-1">Google PageSpeed</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className={`text-5xl font-bold mb-4 ${getScoreColor(auditResults.ai_visibility_score)}`}>
                        {auditResults.ai_visibility_score}%
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <h3 className="font-semibold text-slate-900">AI Visibility</h3>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-slate-400" />
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
                      <h3 className="font-semibold text-slate-900">Technical Issues</h3>
                      <p className="text-xs text-slate-500 mt-1">From PageSpeed audit</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl font-bold text-orange-500 mb-4">
                        ${Math.round(auditResults.technical_issues * 2500).toLocaleString()}
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <h3 className="font-semibold text-slate-900">Potential Impact</h3>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-slate-400" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p>Projected monthly revenue impact based on industry averages. Actual results vary based on traffic, conversion rates, and business model.</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <Badge variant="outline" className="text-xs mt-1">Projected Monthly</Badge>
                    </CardContent>
                  </Card>
                </div>

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
                        <span className="text-slate-700">Performance</span>
                        <span className={`font-semibold ${getScoreColor(auditResults.performance_score)}`}>
                          {auditResults.performance_score}%
                        </span>
                      </div>
                      <Progress value={auditResults.performance_score} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700">Accessibility</span>
                        <span className={`font-semibold ${getScoreColor(auditResults.accessibility_score)}`}>
                          {auditResults.accessibility_score}%
                        </span>
                      </div>
                      <Progress value={auditResults.accessibility_score} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700">Best Practices</span>
                        <span className={`font-semibold ${getScoreColor(auditResults.best_practices_score)}`}>
                          {auditResults.best_practices_score}%
                        </span>
                      </div>
                      <Progress value={auditResults.best_practices_score} className="h-3" />
                    </div>
                  </CardContent>
                </Card>

                {/* Locked Sections - Using REAL opportunities/diagnostics */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="relative overflow-hidden">
                    <div className="absolute inset-0 backdrop-blur-sm bg-white/80 z-10 flex items-center justify-center">
                      <div className="text-center p-6">
                        <Lock className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                        <h3 className="font-semibold text-slate-900 mb-2">Exact Fixes & Recommendations</h3>
                        <p className="text-sm text-slate-500">Unlock to see step-by-step fixes</p>
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
                    <div className="absolute inset-0 backdrop-blur-sm bg-white/80 z-10 flex items-center justify-center">
                      <div className="text-center p-6">
                        <Lock className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                        <h3 className="font-semibold text-slate-900 mb-2">90-Day Growth Roadmap</h3>
                        <p className="text-sm text-slate-500">Unlock to see your personalized plan</p>
                      </div>
                    </div>
                    <CardContent className="p-6 filter blur-sm">
                      <h3 className="font-semibold mb-4">Personalized Growth Plan</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Month 1</span>
                          <span className="font-semibold text-slate-400">Technical fixes</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Month 2</span>
                          <span className="font-semibold text-slate-400">Content optimization</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Month 3</span>
                          <span className="font-semibold text-slate-400">Authority building</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 mt-4">
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
