import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Globe, Mail, Phone, Building2, Target, DollarSign, User,
  ChevronRight, ChevronLeft, CheckCircle, AlertCircle, Loader2,
  Sparkles, Shield, X
} from "lucide-react";
import { validateUrl, validateEmail, validatePhone, formatPhone } from "@/lib/validation";

interface PMSurveyPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onComplete: (data: SurveyData) => void;
  loading?: boolean;
  initialData?: {
    website_url?: string;
    email?: string;
    phone?: string;
    role?: string;
    monthly_revenue?: string;
  };
}

export interface SurveyData {
  website_url: string;
  email: string;
  phone: string;
  business_type: "b2b" | "b2c" | "both";
  preferred_platforms: string[];
  monthly_revenue: string;
  role: string;
}

const TOTAL_STEPS = 7;

const roleOptions = [
  { value: "founder_ceo", label: "Founder/CEO", icon: "👤" },
  { value: "cmo_marketing_director", label: "CMO/Marketing Director", icon: "📊" },
  { value: "vp_growth", label: "VP of Growth", icon: "📈" },
  { value: "marketing_manager", label: "Marketing Manager", icon: "🎯" },
  { value: "ecommerce_manager", label: "E-commerce Manager", icon: "🛒" },
  { value: "other", label: "Other", icon: "💼" },
];

const adBudgetOptions = [
  { value: "under_10k", label: "Under ₹10k/month", range: "₹0 - ₹10k" },
  { value: "10k_50k", label: "₹10k - ₹50k/month", range: "₹10k - ₹50k" },
  { value: "50k_1L", label: "₹50k - ₹1L/month", range: "₹50k - ₹1L" },
  { value: "1L_5L", label: "₹1L - ₹5L/month", range: "₹1L - ₹5L" },
  { value: "over_5L", label: "Over ₹5L/month", range: "₹5L+" },
];

const platformOptions = [
  { 
    value: "meta_ads", 
    label: "Meta Ads", 
    description: "Facebook & Instagram",
    color: "from-blue-500 to-blue-600",
    recommended: "b2c"
  },
  { 
    value: "google_ads", 
    label: "Google Ads", 
    description: "Search & Display",
    color: "from-green-500 to-yellow-500",
    recommended: "both"
  },
  { 
    value: "linkedin_ads", 
    label: "LinkedIn Ads", 
    description: "B2B Marketing",
    color: "from-blue-600 to-blue-800",
    recommended: "b2b"
  },
];

export const PMSurveyPopup = ({ open, onOpenChange, onComplete, loading, initialData }: PMSurveyPopupProps) => {
  const [step, setStep] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  
  // Form data
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState<"b2b" | "b2c" | "both" | "">("");
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [adBudget, setAdBudget] = useState("");
  const [role, setRole] = useState("");
  
  // Validation
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Pre-fill from initialData when popup opens
  useEffect(() => {
    if (open && initialData) {
      if (initialData.website_url) setWebsiteUrl(initialData.website_url);
      if (initialData.email) setEmail(initialData.email);
      if (initialData.phone) setPhone(initialData.phone.replace('+91', ''));
      if (initialData.role) setRole(initialData.role);
      if (initialData.monthly_revenue) setAdBudget(initialData.monthly_revenue);
    }
  }, [open, initialData]);

  // Reset on close
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStep(1);
        setTouched({});
      }, 300);
    }
  }, [open]);

  const goNext = useCallback(() => {
    if (step < TOTAL_STEPS && !animating) {
      setAnimating(true);
      setDirection("forward");
      setTimeout(() => {
        setStep(s => s + 1);
        setAnimating(false);
      }, 200);
    }
  }, [step, animating]);

  const goBack = useCallback(() => {
    if (step > 1 && !animating) {
      setAnimating(true);
      setDirection("backward");
      setTimeout(() => {
        setStep(s => s - 1);
        setAnimating(false);
      }, 200);
    }
  }, [step, animating]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Enter" && canProceed()) {
      e.preventDefault();
      if (step === TOTAL_STEPS) {
        handleSubmit();
      } else {
        goNext();
      }
    }
  }, [step, goNext]);

  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [open, handleKeyDown]);

  const togglePlatform = (platform: string) => {
    setPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const canProceed = (): boolean => {
    switch (step) {
      case 1: return validateUrl(websiteUrl);
      case 2: return validateEmail(email);
      case 3: return !phone || validatePhone(phone);
      case 4: return !!businessType;
      case 5: return platforms.length > 0;
      case 6: return !!adBudget;
      case 7: return !!role;
      default: return false;
    }
  };

  const handleSubmit = () => {
    if (canProceed()) {
      onComplete({
        website_url: websiteUrl.startsWith("http") ? websiteUrl : `https://${websiteUrl}`,
        email,
        phone: phone ? `+91${phone}` : "",
        business_type: businessType as "b2b" | "b2c" | "both",
        preferred_platforms: platforms,
        monthly_revenue: adBudget,
        role,
      });
    }
  };

  const handlePhoneChange = (value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 10);
    setPhone(cleaned);
  };

  const renderStep = () => {
    const baseClass = `transition-all duration-200 ${animating ? (direction === "forward" ? "opacity-0 translate-x-4" : "opacity-0 -translate-x-4") : "opacity-100 translate-x-0"}`;

    switch (step) {
      case 1:
        return (
          <div className={baseClass}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">What's your website?</h2>
              <p className="text-muted-foreground">We'll analyze your landing page for ad optimization</p>
            </div>
            <div className="relative">
              <Input
                type="url"
                placeholder="yourcompany.com"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                onBlur={() => setTouched(prev => ({ ...prev, url: true }))}
                autoFocus
                className={`h-14 text-lg pl-4 pr-12 ${
                  touched.url && !validateUrl(websiteUrl) && websiteUrl
                    ? "border-destructive focus:ring-destructive/20"
                    : "focus:border-blue-500 focus:ring-blue-500/20"
                }`}
              />
              {websiteUrl && validateUrl(websiteUrl) && (
                <CheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              )}
            </div>
            {touched.url && !validateUrl(websiteUrl) && websiteUrl && (
              <p className="text-sm text-destructive mt-2">Please enter a valid website URL</p>
            )}
          </div>
        );

      case 2:
        return (
          <div className={baseClass}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Your email address?</h2>
              <p className="text-muted-foreground">We'll send your personalized ad plan here</p>
            </div>
            <div className="relative">
              <Input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                autoFocus
                className={`h-14 text-lg pl-4 pr-12 ${
                  touched.email && !validateEmail(email) && email
                    ? "border-destructive focus:ring-destructive/20"
                    : "focus:border-blue-500 focus:ring-blue-500/20"
                }`}
              />
              {email && validateEmail(email) && (
                <CheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className={baseClass}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Your phone number?</h2>
              <p className="text-muted-foreground">For follow-up calls (optional)</p>
            </div>
            <div className="relative flex">
              <div className="flex items-center gap-1.5 bg-muted border border-r-0 border-border rounded-l-md px-4 h-14">
                <span className="text-base font-medium text-muted-foreground">+91</span>
              </div>
              <Input
                type="tel"
                placeholder="8904150555"
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                autoFocus
                className="h-14 text-lg rounded-l-none focus:border-blue-500 focus:ring-blue-500/20"
              />
              {phone && validatePhone(phone) && (
                <CheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">Press Enter to skip</p>
          </div>
        );

      case 4:
        return (
          <div className={baseClass}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">What type of business?</h2>
              <p className="text-muted-foreground">This helps us recommend the right platforms</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                { value: "b2b", label: "B2B", description: "Selling to businesses", icon: "🏢" },
                { value: "b2c", label: "B2C", description: "Selling to consumers", icon: "🛍️" },
                { value: "both", label: "Both", description: "B2B and B2C", icon: "🔄" },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setBusinessType(option.value as "b2b" | "b2c" | "both")}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                    businessType === option.value
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                      : "border-border hover:border-blue-300 hover:bg-muted/50"
                  }`}
                >
                  <span className="text-2xl">{option.icon}</span>
                  <div>
                    <div className="font-semibold text-foreground">{option.label}</div>
                    <div className="text-sm text-muted-foreground">{option.description}</div>
                  </div>
                  {businessType === option.value && (
                    <CheckCircle className="w-5 h-5 text-blue-500 ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className={baseClass}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Which platforms interest you?</h2>
              <p className="text-muted-foreground">Select all that apply</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {platformOptions.map((option) => {
                const isRecommended = 
                  (businessType === "b2b" && option.recommended === "b2b") ||
                  (businessType === "b2c" && option.recommended === "b2c") ||
                  option.recommended === "both";
                
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => togglePlatform(option.value)}
                    className={`relative flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                      platforms.includes(option.value)
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                        : "border-border hover:border-blue-300 hover:bg-muted/50"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${option.color} flex items-center justify-center`}>
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{option.label}</span>
                        {isRecommended && businessType && (
                          <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full">
                            Recommended
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">{option.description}</div>
                    </div>
                    <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                      platforms.includes(option.value)
                        ? "border-blue-500 bg-blue-500"
                        : "border-border"
                    }`}>
                      {platforms.includes(option.value) && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 6:
        return (
          <div className={baseClass}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Monthly ad budget?</h2>
              <p className="text-muted-foreground">Help us tailor recommendations to your scale</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {adBudgetOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setAdBudget(option.value)}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 ${
                    adBudget === option.value
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                      : "border-border hover:border-blue-300 hover:bg-muted/50"
                  }`}
                >
                  <span className="font-medium text-foreground">{option.label}</span>
                  {adBudget === option.value && (
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div className={baseClass}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">What's your role?</h2>
              <p className="text-muted-foreground">Almost done!</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {roleOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setRole(option.value)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                    role === option.value
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                      : "border-border hover:border-blue-300 hover:bg-muted/50"
                  }`}
                >
                  <span className="text-2xl">{option.icon}</span>
                  <span className="text-sm font-medium text-foreground text-center">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden bg-background border-border">
        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 p-1 rounded-full hover:bg-muted transition-colors z-10"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Progress bar */}
        <div className="h-1 bg-muted">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i + 1 === step 
                    ? "w-6 bg-blue-500" 
                    : i + 1 < step 
                      ? "bg-blue-500" 
                      : "bg-muted"
                }`}
              />
            ))}
          </div>

          {/* Form step */}
          {renderStep()}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              type="button"
              variant="ghost"
              onClick={goBack}
              disabled={step === 1 || animating}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>

            {step === TOTAL_STEPS ? (
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={!canProceed() || loading}
                className="gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    Get My Ad Plan
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </Button>
            ) : (
              <Button
                type="button"
                onClick={goNext}
                disabled={!canProceed() || animating}
                className="gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                Continue
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Trust indicator */}
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-muted-foreground">
            <Shield className="w-3.5 h-3.5" />
            <span>Your data is secure & never shared</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
