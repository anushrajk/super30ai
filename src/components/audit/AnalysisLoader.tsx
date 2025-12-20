import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Globe, 
  Lightbulb,
  Clock,
  Sparkles,
  TrendingUp,
  Search,
  BarChart3,
  Shield
} from "lucide-react";

interface LoadingStep {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface AnalysisLoaderProps {
  currentStep: number;
  steps: LoadingStep[];
  analyzedUrl?: string | null;
  variant?: "primary" | "ai";
}

// SEO tips to rotate during loading
const seoTips = [
  { fact: "68% of online experiences begin with a search engine", source: "BrightEdge" },
  { fact: "AI-powered search now handles 25% of all queries", source: "Gartner 2024" },
  { fact: "The average first-page result contains 1,447 words", source: "Backlinko" },
  { fact: "Mobile devices generate 58% of global website traffic", source: "Statista" },
  { fact: "Pages loading in under 3 seconds have 32% higher conversion", source: "Google" },
  { fact: "75% of users never scroll past the first page of search", source: "HubSpot" },
  { fact: "Core Web Vitals are a confirmed Google ranking factor", source: "Google" },
  { fact: "Voice search accounts for 20% of mobile queries", source: "Think with Google" },
];

const AnalysisLoader = ({
  currentStep,
  steps,
  analyzedUrl,
  variant = "primary"
}: AnalysisLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [tipFading, setTipFading] = useState(false);

  const totalSteps = steps.length;
  const targetProgress = Math.min(((currentStep + 1) / totalSteps) * 100, 95);
  
  const isPrimary = variant === "primary";
  const ringColor = isPrimary ? "stroke-orange-500" : "stroke-purple-500";
  const glowColor = isPrimary ? "shadow-orange-500/30" : "shadow-purple-500/30";
  const bgGradient = isPrimary 
    ? "from-orange-50 via-amber-50 to-orange-50" 
    : "from-purple-50 via-violet-50 to-purple-50";
  const accentColor = isPrimary ? "text-orange-500" : "text-purple-500";
  const accentBg = isPrimary ? "bg-orange-100" : "bg-purple-100";

  // Animate progress smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= targetProgress) return targetProgress;
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [targetProgress]);

  // Rotate tips every 4 seconds
  useEffect(() => {
    const tipTimer = setInterval(() => {
      setTipFading(true);
      setTimeout(() => {
        setCurrentTipIndex(prev => (prev + 1) % seoTips.length);
        setTipFading(false);
      }, 300);
    }, 4000);
    return () => clearInterval(tipTimer);
  }, []);

  const circumference = 2 * Math.PI * 58;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const estimatedTimeRemaining = Math.max(10, Math.ceil((totalSteps - currentStep) * 15));

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Main Loading Card */}
      <Card className="overflow-hidden border-0 shadow-xl">
        <div className={`bg-gradient-to-br ${bgGradient} p-8`}>
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Animated Progress Ring */}
              <div className="relative flex-shrink-0">
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-full blur-xl ${glowColor} shadow-2xl animate-pulse`} />
                
                {/* Progress ring container */}
                <div className="relative w-40 h-40">
                  <svg className="w-40 h-40 transform -rotate-90">
                    {/* Background ring */}
                    <circle
                      cx="80"
                      cy="80"
                      r="58"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-muted/50"
                    />
                    {/* Progress ring */}
                    <circle
                      cx="80"
                      cy="80"
                      r="58"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      className={`${ringColor} transition-all duration-500 ease-out`}
                    />
                  </svg>
                  
                  {/* Center content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Globe className={`w-8 h-8 ${accentColor} mb-1 animate-pulse`} />
                    <span className={`text-3xl font-bold ${accentColor}`}>{Math.round(progress)}%</span>
                    <span className="text-xs text-muted-foreground">analyzing</span>
                  </div>
                </div>
              </div>

              {/* Right side content */}
              <div className="flex-1 text-center lg:text-left space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {isPrimary ? "Analyzing Your Website" : "AI Competitor Analysis"}
                  </h2>
                  {analyzedUrl && (
                    <p className="text-muted-foreground text-sm truncate max-w-xs mx-auto lg:mx-0">
                      {analyzedUrl}
                    </p>
                  )}
                </div>

                {/* Estimated time */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Estimated time: ~{estimatedTimeRemaining}s remaining</span>
                </div>

                {/* Step indicators - horizontal on desktop */}
                <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
                  {steps.map((_, index) => (
                    <div 
                      key={index}
                      className={`
                        w-2.5 h-2.5 rounded-full transition-all duration-300
                        ${index < currentStep 
                          ? "bg-green-500 scale-100" 
                          : index === currentStep 
                            ? `${isPrimary ? "bg-orange-500" : "bg-purple-500"} scale-125 animate-pulse`
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
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isCompleted = index < currentStep;
                const isActive = index === currentStep;
                const isPending = index > currentStep;

                return (
                  <div 
                    key={index}
                    className={`
                      flex items-center gap-3 p-3 rounded-xl transition-all duration-500
                      ${isActive 
                        ? `${isPrimary ? "bg-orange-100 border border-orange-200" : "bg-purple-100 border border-purple-200"} animate-fade-in` 
                        : isCompleted 
                          ? "bg-green-50 border border-green-200"
                          : "bg-background/50 border border-transparent"
                      }
                    `}
                  >
                    <div className={`
                      p-2 rounded-lg transition-all duration-300
                      ${isCompleted 
                        ? "bg-green-100" 
                        : isActive 
                          ? accentBg 
                          : "bg-muted"
                      }
                    `}>
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : isActive ? (
                        <StepIcon className={`w-5 h-5 ${accentColor} animate-pulse`} />
                      ) : (
                        <StepIcon className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <span className={`
                      font-medium transition-colors duration-300
                      ${isCompleted ? "text-green-700" : isActive ? "text-foreground" : "text-muted-foreground"}
                    `}>
                      {step.text}
                    </span>
                    {isActive && (
                      <div className="ml-auto">
                        <div className="flex gap-1">
                          <span className={`w-1.5 h-1.5 rounded-full ${isPrimary ? "bg-orange-500" : "bg-purple-500"} animate-bounce`} style={{ animationDelay: "0ms" }} />
                          <span className={`w-1.5 h-1.5 rounded-full ${isPrimary ? "bg-orange-500" : "bg-purple-500"} animate-bounce`} style={{ animationDelay: "150ms" }} />
                          <span className={`w-1.5 h-1.5 rounded-full ${isPrimary ? "bg-orange-500" : "bg-purple-500"} animate-bounce`} style={{ animationDelay: "300ms" }} />
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

      {/* SEO Tips Carousel */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-slate-900 to-slate-800">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-500/20 rounded-xl flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-amber-400" />
            </div>
            <div className={`flex-1 transition-opacity duration-300 ${tipFading ? "opacity-0" : "opacity-100"}`}>
              <p className="text-sm text-slate-400 mb-1">Did you know?</p>
              <p className="text-white font-medium">
                {seoTips[currentTipIndex].fact}
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Source: {seoTips[currentTipIndex].source}
              </p>
            </div>
            <Sparkles className="w-5 h-5 text-amber-400/50 animate-pulse flex-shrink-0" />
          </div>
        </CardContent>
      </Card>

      {/* Skeleton Preview */}
      <Card className="border shadow-lg overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Preview of your audit report</span>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {/* Score skeletons */}
            {[Search, TrendingUp, Shield, BarChart3].map((Icon, idx) => (
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

          {/* Content skeleton */}
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

      {/* Analyzing message */}
      <p className="text-center text-sm text-muted-foreground">
        We're analyzing <span className="font-medium">50+ SEO factors</span> to give you actionable insights
      </p>
    </div>
  );
};

export default AnalysisLoader;