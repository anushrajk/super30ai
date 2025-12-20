import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Target, TrendingUp, Calendar, Settings, Loader2, CheckCircle,
  ArrowRight, Lock, Sparkles, AlertTriangle, Users, DollarSign,
  BarChart3, Zap, Clock, Phone
} from "lucide-react";
import { PlatformLogo, RecommendedPlatformCard } from "@/components/performance/PlatformLogos";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const loadingSteps = [
  { icon: Settings, text: "Analyzing your website...", duration: 2000 },
  { icon: Target, text: "Detecting ad opportunity gaps...", duration: 2500 },
  { icon: TrendingUp, text: "Calculating ROI potential...", duration: 2000 },
  { icon: Calendar, text: "Building your 90-day roadmap...", duration: 1500 },
];

const industryInsights = [
  { fact: "The average ROI for Google Ads is 8:1", source: "Google Economic Impact 2024" },
  { fact: "Meta Ads reach 2.9 billion monthly active users", source: "Meta Q4 2024" },
  { fact: "LinkedIn Ads have 2x higher conversion for B2B", source: "LinkedIn 2024" },
  { fact: "Retargeting ads have 10x higher CTR than display", source: "WordStream" },
  { fact: "Mobile ad spend accounts for 72% of digital budgets", source: "eMarketer" },
  { fact: "A/B testing can improve conversion rates by 49%", source: "Invesp" },
];

export default function PerformancePlanner() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);
  const [auditData, setAuditData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const formData = location.state?.formData;
  const leadId = location.state?.leadId;

  useEffect(() => {
    if (!formData) {
      navigate("/performance-marketing");
      return;
    }
    runAnalysis();
  }, []);

  const runAnalysis = async () => {
    try {
      // Progress through loading steps
      for (let i = 0; i < loadingSteps.length; i++) {
        setLoadingStep(i);
        await new Promise(r => setTimeout(r, loadingSteps[i].duration));
      }

      const { data, error: fnError } = await supabase.functions.invoke("analyze-performance", {
        body: {
          url: formData.website_url,
          email: formData.email,
          leadId,
          businessType: formData.business_type,
          preferredPlatforms: formData.preferred_platforms,
          adBudget: formData.monthly_revenue,
        },
      });

      if (fnError) throw fnError;
      if (data?.error) throw new Error(data.error);

      setAuditData(data);
      localStorage.setItem("pm_audit_data", JSON.stringify(data));
    } catch (err) {
      console.error("Analysis error:", err);
      setError(err instanceof Error ? err.message : "Analysis failed");
      toast.error("Failed to complete analysis");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookCall = () => {
    navigate("/booking", {
      state: {
        leadId,
        formData,
        auditData,
        service: "pm",
      },
    });
  };

  if (isLoading) {
    const CurrentIcon = loadingSteps[loadingStep]?.icon || Settings;
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CurrentIcon className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {loadingSteps[loadingStep]?.text}
          </h2>
          <p className="text-muted-foreground mb-6">This usually takes 15-20 seconds</p>
          <div className="flex justify-center gap-2">
            {loadingSteps.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i <= loadingStep ? "bg-blue-500" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Analysis Failed</h2>
            <p className="text-muted-foreground mb-4">{error}</p>
            <div className="flex gap-3 justify-center">
              <Button variant="outline" onClick={() => navigate("/performance-marketing")}>
                Go Back
              </Button>
              <Button onClick={() => { setError(null); setIsLoading(true); runAnalysis(); }}>
                Retry
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const isB2B = auditData?.business_type === "b2b" || auditData?.business_type === "both";

  return (
    <>
      <Helmet>
        <title>Your Ad Performance Plan | Super30</title>
      </Helmet>
      <Navbar />
      
      <main className="min-h-screen pt-20 pb-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4">
              <CheckCircle className="w-4 h-4" />
              Analysis Complete
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Your Ad Opportunity Report
            </h1>
            <p className="text-muted-foreground">
              Personalized recommendations for {auditData?.analyzed_url}
            </p>
          </div>

          <Tabs defaultValue="report" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="report">Ad Opportunity Report</TabsTrigger>
              <TabsTrigger value="insights">Industry Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="report" className="space-y-6">
              {/* Executive Summary */}
              <Card className="border-2 border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">{auditData?.opportunity_score || 0}</span>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        {auditData?.industry_category} - {auditData?.business_niche}
                      </h2>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          isB2B ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"
                        }`}>
                          {auditData?.business_type?.toUpperCase()}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                          Competition: {auditData?.competitive_rank}
                        </span>
                      </div>
                      <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                        {auditData?.preferred_platforms?.map((p: string) => (
                          <PlatformLogo key={p} platform={p} size="sm" showLabel />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Monthly Loss Alert */}
              <Card className="bg-destructive/5 border-destructive/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">You're losing money to competitors</h3>
                      <p className="text-2xl font-bold text-destructive">
                        ₹{(auditData?.estimated_monthly_loss?.value || 0).toLocaleString("en-IN")}/month
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Platform Recommendations */}
              <div>
                <h3 className="text-xl font-bold mb-4">Platform Recommendations</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {auditData?.platform_recommendations?.map((rec: any) => (
                    <RecommendedPlatformCard
                      key={rec.platform}
                      platform={rec.platform}
                      budgetAllocation={rec.budget_percentage}
                      expectedLeads={rec.calculated_leads || rec.expected_leads}
                      expectedROI={rec.expected_roi}
                      isB2B={isB2B}
                    />
                  ))}
                </div>
              </div>

              {/* 90-Day Plan Preview */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    90-Day Action Plan
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {auditData?.action_plan?.slice(0, 3).map((month: any, i: number) => (
                      <div key={i} className="p-4 rounded-lg bg-muted/50 border border-border">
                        <div className="text-sm text-muted-foreground mb-1">Month {month.month}</div>
                        <div className="font-semibold text-foreground mb-2">{month.title}</div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {month.actions?.slice(0, 2).map((action: string, j: number) => (
                            <li key={j} className="flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Locked Recommendations */}
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 backdrop-blur-sm bg-background/80 flex items-center justify-center z-10">
                  <div className="text-center">
                    <Lock className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="font-medium text-foreground">Unlock full recommendations</p>
                    <p className="text-sm text-muted-foreground mb-4">Book a free strategy call</p>
                    <Button onClick={handleBookCall} className="bg-gradient-to-r from-blue-600 to-blue-700">
                      Book Free Call <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">AI Recommendations</h3>
                  <div className="space-y-3 opacity-30">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-16 bg-muted rounded-lg" />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Final CTA */}
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0">
                <CardContent className="p-8 text-center text-white">
                  <Sparkles className="w-10 h-10 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Ready to 10x Your Ad ROI?</h3>
                  <p className="opacity-90 mb-6">Book a free 30-minute strategy session with our experts</p>
                  <Button 
                    onClick={handleBookCall}
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-white/90"
                  >
                    Book Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights">
              <div className="grid md:grid-cols-2 gap-4">
                {industryInsights.map((insight, i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <p className="font-medium text-foreground mb-1">{insight.fact}</p>
                      <p className="text-sm text-muted-foreground">— {insight.source}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
