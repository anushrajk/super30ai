import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Building2, Megaphone, ArrowRight, CheckCircle } from "lucide-react";

interface PMPreAuditQuestionnaireProps {
  onComplete: (data: { 
    business_type: "b2b" | "b2c" | "both"; 
    preferred_platforms: string[] 
  }) => void;
  loading?: boolean;
  websiteUrl?: string;
}

const businessTypeOptions = [
  { value: "b2b", label: "B2B", description: "We sell to businesses", icon: "🏢" },
  { value: "b2c", label: "B2C", description: "We sell to consumers", icon: "👤" },
  { value: "both", label: "Both", description: "B2B and B2C", icon: "🔄" },
];

const platformOptions = [
  { value: "meta_ads", label: "Meta Ads", description: "Facebook & Instagram", icon: "📱" },
  { value: "google_ads", label: "Google Ads", description: "Search & Display", icon: "🔍" },
  { value: "linkedin_ads", label: "LinkedIn Ads", description: "B2B Targeting", icon: "💼" },
];

export const PMPreAuditQuestionnaire = ({ onComplete, loading, websiteUrl }: PMPreAuditQuestionnaireProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [businessType, setBusinessType] = useState<"b2b" | "b2c" | "both" | "">("");
  const [platforms, setPlatforms] = useState<string[]>([]);

  const togglePlatform = (platform: string) => {
    setPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const handleNext = () => {
    if (step === 1 && businessType) {
      setStep(2);
    }
  };

  const handleComplete = () => {
    if (businessType && platforms.length > 0) {
      onComplete({
        business_type: businessType as "b2b" | "b2c" | "both",
        preferred_platforms: platforms
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-background border-2 border-blue-500/20 shadow-2xl shadow-blue-500/10 overflow-hidden">
        <CardContent className="p-6 sm:p-8">
          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className={`w-3 h-3 rounded-full transition-colors ${step >= 1 ? 'bg-blue-500' : 'bg-muted'}`} />
            <div className="w-8 h-0.5 bg-muted">
              <div className={`h-full bg-blue-500 transition-all ${step >= 2 ? 'w-full' : 'w-0'}`} />
            </div>
            <div className={`w-3 h-3 rounded-full transition-colors ${step >= 2 ? 'bg-blue-500' : 'bg-muted'}`} />
          </div>

          {/* Analyzing badge */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Preparing audit for {websiteUrl ? new URL(websiteUrl.startsWith('http') ? websiteUrl : `https://${websiteUrl}`).hostname : 'your website'}
              </span>
            </div>
          </div>

          {step === 1 && (
            <div className="animate-fade-in">
              <div className="text-center mb-6">
                <Building2 className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  What type of business are you?
                </h2>
                <p className="text-muted-foreground">
                  This helps us tailor our analysis to your market
                </p>
              </div>

              <div className="space-y-3">
                {businessTypeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setBusinessType(option.value as "b2b" | "b2c" | "both")}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-4 ${
                      businessType === option.value
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg shadow-blue-500/10"
                        : "border-border hover:border-blue-300 hover:bg-muted/50"
                    }`}
                  >
                    <span className="text-2xl">{option.icon}</span>
                    <div className="flex-1">
                      <span className="font-semibold text-foreground">{option.label}</span>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                    {businessType === option.value && (
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                    )}
                  </button>
                ))}
              </div>

              <Button
                onClick={handleNext}
                disabled={!businessType}
                className="w-full mt-6 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold disabled:opacity-50"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <div className="text-center mb-6">
                <Megaphone className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Which platforms interest you?
                </h2>
                <p className="text-muted-foreground">
                  Select all platforms you'd like us to analyze
                </p>
              </div>

              <div className="space-y-3">
                {platformOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => togglePlatform(option.value)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-4 ${
                      platforms.includes(option.value)
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg shadow-blue-500/10"
                        : "border-border hover:border-blue-300 hover:bg-muted/50"
                    }`}
                  >
                    <span className="text-2xl">{option.icon}</span>
                    <div className="flex-1">
                      <span className="font-semibold text-foreground">{option.label}</span>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                    {platforms.includes(option.value) && (
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                    )}
                  </button>
                ))}
              </div>

              <Button
                onClick={handleComplete}
                disabled={loading || platforms.length === 0}
                className="w-full mt-6 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Starting Audit...
                  </>
                ) : (
                  <>
                    Start My Free Audit
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>

              <button
                onClick={() => setStep(1)}
                className="w-full mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to business type
              </button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};