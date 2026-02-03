import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Target, TrendingUp, Calendar, Settings, CheckCircle,
  ArrowRight, Lock, Sparkles, AlertTriangle, Users, 
  BarChart3, Zap, Clock, Lightbulb, Globe, DollarSign,
  Smartphone, Monitor, Play, Radio
} from "lucide-react";
import { PlatformLogo, RecommendedPlatformCard } from "@/components/performance/PlatformLogos";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const loadingSteps = [
  { icon: Settings, text: "Analyzing your website performance...", duration: 2000 },
  { icon: Target, text: "Detecting ad opportunity gaps...", duration: 2500 },
  { icon: TrendingUp, text: "Calculating ROI potential...", duration: 2000 },
  { icon: Calendar, text: "Building your 90-day roadmap...", duration: 1500 },
];

// Get current month name for dynamic insights
const getCurrentMonth = () => {
  const months = ["January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"];
  return months[new Date().getMonth()];
};

const currentMonth = getCurrentMonth();

const industryInsights = [
  { fact: `Google Ads CPCs trending 12% lower in ${currentMonth} vs last month`, source: `Google Ads Benchmark ${currentMonth} 2024` },
  { fact: `Meta's holiday ad inventory increasing — expect 15% higher reach in ${currentMonth}`, source: `Meta Business ${currentMonth} Report` },
  { fact: `LinkedIn B2B engagement up 23% this month due to year-end planning`, source: `LinkedIn Marketing ${currentMonth} 2024` },
  { fact: `Video ad completion rates 18% higher in ${currentMonth} across platforms`, source: `IAB ${currentMonth} Insights` },
  { fact: `Mobile ad spend accounts for 74% of digital budgets this ${currentMonth}`, source: `eMarketer ${currentMonth} 2024` },
  { fact: `Programmatic CPMs down 8% — ideal time to scale campaigns`, source: `Trade Desk ${currentMonth} Report` },
];

// Loading tips for performance marketing
const performanceTips = [
  { fact: "The average ROI for Google Ads is 8:1", source: "Google Economic Impact 2024" },
  { fact: "Meta Ads reach 2.9 billion monthly active users", source: "Meta Q4 2024" },
  { fact: "LinkedIn Ads have 2x higher conversion for B2B", source: "LinkedIn 2024" },
  { fact: "Retargeting ads have 10x higher CTR than display", source: "WordStream" },
  { fact: "A/B testing can improve conversion rates by 49%", source: "Invesp" },
  { fact: "Mobile ad spend accounts for 72% of digital budgets", source: "eMarketer" },
];

// Other ad services with platform logos
const otherAdServices = [
  {
    title: "In-App Advertising",
    description: "Reach users within mobile apps",
    platformCount: "25+",
    platforms: [
      { name: "AdMob", color: "#4285F4" },
      { name: "Unity Ads", color: "#000000" },
      { name: "ironSource", color: "#FF6B6B" },
      { name: "AppLovin", color: "#0066FF" },
      { name: "Vungle", color: "#00C7B7" },
    ]
  },
  {
    title: "Media Buying",
    description: "Traditional & digital media placements",
    platformCount: "50+",
    platforms: [
      { name: "TV Ads", color: "#E91E63" },
      { name: "Radio", color: "#9C27B0" },
      { name: "OOH", color: "#FF5722" },
      { name: "Print", color: "#607D8B" },
      { name: "Podcast", color: "#00BCD4" },
    ]
  },
  {
    title: "Programmatic Ads",
    description: "AI-powered automated bidding",
    platformCount: "35+",
    platforms: [
      { name: "DV360", color: "#4285F4" },
      { name: "Trade Desk", color: "#00DC82" },
      { name: "Amazon DSP", color: "#FF9900" },
      { name: "MediaMath", color: "#6366F1" },
      { name: "Criteo", color: "#F97316" },
    ]
  },
];

export default function PerformancePlanner() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);
  const [auditData, setAuditData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [tipFading, setTipFading] = useState(false);

  const formData = location.state?.formData;
  const leadId = location.state?.leadId;

  useEffect(() => {
    if (!formData) {
      navigate("/performance-marketing");
      return;
    }
    runAnalysis();
  }, []);

  // Animate progress smoothly
  useEffect(() => {
    if (!isLoading) return;
    const totalSteps = loadingSteps.length;
    const targetProgress = Math.min(((loadingStep + 1) / totalSteps) * 100, 95);
    
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= targetProgress) return targetProgress;
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [loadingStep, isLoading]);

  // Rotate tips every 4 seconds
  useEffect(() => {
    if (!isLoading) return;
    const tipTimer = setInterval(() => {
      setTipFading(true);
      setTimeout(() => {
        setCurrentTipIndex(prev => (prev + 1) % performanceTips.length);
        setTipFading(false);
      }, 300);
    }, 4000);
    return () => clearInterval(tipTimer);
  }, [isLoading]);

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
        performanceAuditData: auditData,
        service: "pm",
      },
    });
  };

  // Loading State with SEO-style analysis loader
  if (isLoading) {
    const circumference = 2 * Math.PI * 58;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    const estimatedTimeRemaining = Math.max(10, Math.ceil((loadingSteps.length - loadingStep) * 15));

    return (
      <>
        <Helmet>
          <title>Analyzing Your Ad Potential | The Super 30</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="max-w-3xl mx-auto space-y-6 w-full">
            {/* Main Loading Card */}
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-blue-950/30 p-8">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Animated Progress Ring */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 rounded-full blur-xl shadow-blue-500/30 shadow-2xl animate-pulse" />
                      
                      <div className="relative w-40 h-40">
                        <svg className="w-40 h-40 transform -rotate-90">
                          <circle
                            cx="80"
                            cy="80"
                            r="58"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-muted/50"
                          />
                          <circle
                            cx="80"
                            cy="80"
                            r="58"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            className="stroke-blue-500 transition-all duration-500 ease-out"
                          />
                        </svg>
                        
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <Globe className="w-8 h-8 text-blue-500 mb-1 animate-pulse" />
                          <span className="text-3xl font-bold text-blue-500">{Math.round(progress)}%</span>
                          <span className="text-xs text-muted-foreground">analyzing</span>
                        </div>
                      </div>
                    </div>

                    {/* Right side content */}
                    <div className="flex-1 text-center lg:text-left space-y-4">
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">
                          Analyzing Your Ad Potential
                        </h2>
                        {formData?.website_url && (
                          <p className="text-muted-foreground text-sm truncate max-w-xs mx-auto lg:mx-0">
                            {formData.website_url}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>Estimated time: ~{estimatedTimeRemaining}s remaining</span>
                      </div>

                      <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
                        {loadingSteps.map((_, index) => (
                          <div 
                            key={index}
                            className={`
                              w-2.5 h-2.5 rounded-full transition-all duration-300
                              ${index < loadingStep 
                                ? "bg-green-500 scale-100" 
                                : index === loadingStep 
                                  ? "bg-blue-500 scale-125 animate-pulse"
                                  : "bg-muted"
                              }
                            `}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Steps Progress */}
                  <div className="mt-8 space-y-3">
                    {loadingSteps.map((step, index) => {
                      const StepIcon = step.icon;
                      const isCompleted = index < loadingStep;
                      const isActive = index === loadingStep;

                      return (
                        <div 
                          key={index}
                          className={`
                            flex items-center gap-3 p-3 rounded-xl transition-all duration-500
                            ${isActive 
                              ? "bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 animate-fade-in" 
                              : isCompleted 
                                ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                                : "bg-background/50 border border-transparent"
                            }
                          `}
                        >
                          <div className={`
                            p-2 rounded-lg transition-all duration-300
                            ${isCompleted 
                              ? "bg-green-100 dark:bg-green-900/30" 
                              : isActive 
                                ? "bg-blue-100 dark:bg-blue-900/30" 
                                : "bg-muted"
                            }
                          `}>
                            {isCompleted ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : isActive ? (
                              <StepIcon className="w-5 h-5 text-blue-500 animate-pulse" />
                            ) : (
                              <StepIcon className="w-5 h-5 text-muted-foreground" />
                            )}
                          </div>
                          <span className={`
                            font-medium transition-colors duration-300
                            ${isCompleted ? "text-green-700 dark:text-green-400" : isActive ? "text-foreground" : "text-muted-foreground"}
                          `}>
                            {step.text}
                          </span>
                          {isActive && (
                            <div className="ml-auto">
                              <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                              </div>
                            </div>
                          )}
                          {isCompleted && (
                            <Badge variant="outline" className="ml-auto text-xs border-green-300 text-green-600">
                              Done
                            </Badge>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Tips Carousel */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-slate-900 to-slate-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className={`flex-1 transition-opacity duration-300 ${tipFading ? "opacity-0" : "opacity-100"}`}>
                    <p className="text-sm text-slate-400 mb-1">Did you know?</p>
                    <p className="text-white font-medium">
                      {performanceTips[currentTipIndex].fact}
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      Source: {performanceTips[currentTipIndex].source}
                    </p>
                  </div>
                  <Sparkles className="w-5 h-5 text-blue-400/50 animate-pulse flex-shrink-0" />
                </div>
              </CardContent>
            </Card>

            {/* Skeleton Preview */}
            <Card className="border shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Preview of your ad opportunity report</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {[Target, TrendingUp, DollarSign].map((Icon, idx) => (
                    <div key={idx} className="p-4 bg-muted/50 rounded-xl animate-pulse">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-muted mb-2 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
                        </div>
                        <div className="h-3 w-16 bg-muted rounded mb-1 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
                        </div>
                        <div className="h-2 w-12 bg-muted/70 rounded relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <div className="h-4 bg-muted rounded w-3/4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
                  </div>
                  <div className="h-4 bg-muted rounded w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
                  </div>
                  <div className="h-4 bg-muted rounded w-5/6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-center text-sm text-muted-foreground">
              We're analyzing <span className="font-medium">your website & competitor landscape</span> to find the best ad opportunities
            </p>
          </div>
        </div>
      </>
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
        <title>Your Ad Performance Plan | The Super 30</title>
        <meta name="description" content="View your personalized performance marketing opportunity report and ROI projections." />
        <meta name="robots" content="noindex, nofollow" />
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
                      expectedROI={rec.expected_roi}
                      isB2B={isB2B}
                    />
                  ))}
                </div>
              </div>

              {/* Other Ad Services CTA Section */}
              <Card className="border-2 border-dashed border-muted-foreground/30">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Expand Your Reach with More Platforms
                    </h3>
                    <p className="text-muted-foreground">
                      Get expert strategies for in-app ads, media buying, and programmatic advertising
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {otherAdServices.map((service, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-muted/50 border border-border">
                        <div className="flex items-center gap-2 mb-3">
                          {idx === 0 && <Smartphone className="w-5 h-5 text-blue-500" />}
                          {idx === 1 && <Monitor className="w-5 h-5 text-purple-500" />}
                          {idx === 2 && <Zap className="w-5 h-5 text-orange-500" />}
                          <h4 className="font-semibold text-foreground">{service.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                        
                        {/* Platform logos */}
                        <div className="flex items-center gap-1 mb-2">
                          {service.platforms.map((platform, pIdx) => (
                            <div 
                              key={pIdx}
                              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[8px] font-bold"
                              style={{ backgroundColor: platform.color }}
                              title={platform.name}
                            >
                              {platform.name.charAt(0)}
                            </div>
                          ))}
                          <span className="text-xs text-muted-foreground ml-1">
                            +{service.platformCount} platforms
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <Button onClick={handleBookCall} variant="outline" className="gap-2">
                      Get Full Platform Strategy
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

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

            <TabsContent value="insights" className="space-y-6">
              {/* Current Month Badge */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <Badge variant="secondary" className="text-sm">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {currentMonth} 2024 Trends
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {industryInsights.map((insight, i) => (
                  <Card key={i} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex-shrink-0">
                          <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-1">{insight.fact}</p>
                          <p className="text-sm text-muted-foreground">— {insight.source}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTA Section for Insights Tab */}
              <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 border-0 mt-8">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1 text-center md:text-left text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        Get Your Custom Media Plan
                      </h3>
                      <p className="opacity-90 mb-4 md:mb-0">
                        Our experts will create a detailed media plan tailored to your industry trends and budget
                      </p>
                    </div>
                    <Button 
                      onClick={handleBookCall}
                      size="lg"
                      className="bg-white text-indigo-600 hover:bg-white/90 whitespace-nowrap"
                    >
                      Book Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
