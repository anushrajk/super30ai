import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Clock, Loader2, Users, Star, CheckCircle, AlertCircle, Phone, Target, TrendingUp } from "lucide-react";
import { submitFormToGoogleSheets } from "@/hooks/useFormSubmit";

interface PMLeadCaptureFormProps {
  onSubmit: (data: { 
    website_url: string; 
    email: string; 
    phone?: string; 
    role?: string; 
    monthly_revenue?: string;
    full_name?: string;
    company_name?: string;
  }) => void;
  loading?: boolean;
}

const roleOptions = [
  { value: "founder_ceo", label: "Founder/CEO" },
  { value: "cmo_marketing_director", label: "CMO/Marketing Director" },
  { value: "vp_growth", label: "VP of Growth" },
  { value: "marketing_manager", label: "Marketing Manager" },
  { value: "ecommerce_manager", label: "E-commerce Manager" },
  { value: "other", label: "Other" },
];

const adBudgetOptions = [
  { value: "under_10k", label: "Under ₹10k/month" },
  { value: "10k_50k", label: "₹10k-₹50k/month" },
  { value: "50k_1L", label: "₹50k-₹1L/month" },
  { value: "1L_5L", label: "₹1L-₹5L/month" },
  { value: "over_5L", label: "Over ₹5L/month" },
];

// Validation functions
const validateUrl = (url: string): boolean => {
  if (!url) return false;
  try {
    const urlWithProtocol = url.startsWith('http') ? url : `https://${url}`;
    const urlObj = new URL(urlWithProtocol);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
};

const validateEmail = (email: string): boolean => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};

export const PMLeadCaptureForm = ({ onSubmit, loading }: PMLeadCaptureFormProps) => {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [adBudget, setAdBudget] = useState("");
  const [recentSignups, setRecentSignups] = useState(32);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setRecentSignups(prev => {
        const change = Math.random() > 0.7 ? 1 : 0;
        return Math.min(prev + change, 99);
      });
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleBlur = (field: string) => {
    setFocusedField(null);
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handlePhoneChange = (value: string) => {
    // Only allow digits, max 10, must start with 6-9
    let cleaned = value.replace(/\D/g, '').slice(0, 10);
    if (cleaned.length > 0 && !/^[6-9]/.test(cleaned)) {
      cleaned = '';
    }
    setPhone(cleaned);
  };

  const isUrlValid = validateUrl(websiteUrl);
  const isEmailValid = validateEmail(email);
  const isPhoneValid = validatePhone(phone);

  const canSubmit = isUrlValid && isEmailValid && isPhoneValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ url: true, email: true, phone: true });
    
    if (canSubmit) {
      const urlWithProtocol = websiteUrl.startsWith('http') ? websiteUrl : `https://${websiteUrl}`;
      
      // Submit to Google Sheets (non-blocking)
      void submitFormToGoogleSheets({
        form_id: "pm_lead_capture_form",
        form_name: "Performance Marketing Audit Form",
        page_url: window.location.href,
        trigger_type: "embedded",
        data: {
          full_name: fullName,
          company_name: companyName,
          website_url: urlWithProtocol,
          email: email,
          phone: phone ? `+91${phone}` : "",
          role: roleOptions.find(r => r.value === role)?.label || role || "",
          ad_budget: adBudgetOptions.find(r => r.value === adBudget)?.label || adBudget || "",
        },
      });

      onSubmit({ 
        website_url: urlWithProtocol, 
        email,
        phone: phone ? `+91${phone}` : undefined,
        role: role || undefined, 
        monthly_revenue: adBudget || undefined,
        full_name: fullName || undefined,
        company_name: companyName || undefined,
      });
    }
  };

  const filledFields = [fullName, companyName, websiteUrl, email, phone, role, adBudget].filter(Boolean).length;
  const progress = (filledFields / 7) * 100;

  return (
    <Card className="bg-background/95 backdrop-blur-xl border-2 border-border shadow-2xl overflow-hidden relative group">
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <CardContent className="p-4 sm:p-6 relative">
        {/* Progress bar */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 px-2 py-0.5 rounded-full">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-green-600">{recentSignups} audits today</span>
              </div>
            <span className="text-xs font-medium text-muted-foreground">
              {filledFields === 0 ? "Start your ads audit" : filledFields < 5 ? `${5 - filledFields} fields remaining` : "Ready to continue!"}
            </span>
            </div>
            <span className="text-xs font-bold text-primary">{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-2">
          <Target className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-bold text-foreground text-center">
            Free Ads Audit
          </h3>
        </div>
        <p className="text-muted-foreground text-center text-sm mb-1">
          Discover hidden ROI opportunities in your campaigns
        </p>
        
        {/* Value badges */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
            Worth ₹25,000
          </span>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
            100% Free
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Full Name & Company Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.02]' : ''}`}>
              <Input
                type="text"
                placeholder="Your Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onFocus={() => setFocusedField('name')}
                onBlur={() => { setFocusedField(null); }}
                className="w-full bg-background h-12 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 pl-4"
              />
            </div>
            <div className={`relative transition-all duration-300 ${focusedField === 'company' ? 'scale-[1.02]' : ''}`}>
              <Input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                onFocus={() => setFocusedField('company')}
                onBlur={() => { setFocusedField(null); }}
                className="w-full bg-background h-12 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 pl-4"
              />
            </div>
          </div>

          {/* Website URL */}
          <div className={`relative transition-all duration-300 ${focusedField === 'url' ? 'scale-[1.02]' : ''}`}>
            <Input
              type="text"
              placeholder="yourcompany.com"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              onFocus={() => setFocusedField('url')}
              onBlur={() => handleBlur('url')}
              className={`w-full bg-background h-12 transition-all duration-300 pl-4 pr-10 ${
                touched.url && !isUrlValid 
                  ? 'border-destructive focus:border-destructive focus:ring-destructive/20' 
                  : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/20'
              }`}
            />
            {websiteUrl && (
              isUrlValid ? (
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500 animate-scale-in" />
              ) : touched.url && (
                <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-destructive animate-scale-in" />
              )
            )}
          </div>
          {touched.url && !isUrlValid && websiteUrl && (
            <p className="text-xs text-destructive -mt-1 ml-1">Please enter a valid URL (e.g., example.com)</p>
          )}
          
          {/* Email */}
          <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
            <Input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => handleBlur('email')}
              className={`w-full bg-background h-12 transition-all duration-300 pl-4 pr-10 ${
                touched.email && !isEmailValid 
                  ? 'border-destructive focus:border-destructive focus:ring-destructive/20' 
                  : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/20'
              }`}
            />
            {email && (
              isEmailValid ? (
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500 animate-scale-in" />
              ) : touched.email && (
                <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-destructive animate-scale-in" />
              )
            )}
          </div>
          {touched.email && !isEmailValid && email && (
            <p className="text-xs text-destructive -mt-1 ml-1">Please enter a valid email address</p>
          )}

          {/* Phone Number with +91 */}
          <div className={`relative transition-all duration-300 ${focusedField === 'phone' ? 'scale-[1.02]' : ''}`}>
            <div className="flex">
              <div className="flex items-center gap-1 bg-muted border border-r-0 border-border rounded-l-md px-3 h-12">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">+91</span>
              </div>
              <Input
                type="tel"
                placeholder="8904150555"
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => handleBlur('phone')}
                className={`w-full bg-background h-12 rounded-l-none transition-all duration-300 pl-3 pr-10 ${
                  touched.phone && !isPhoneValid 
                  ? 'border-destructive focus:border-destructive focus:ring-destructive/20' 
                    : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/20'
                }`}
              />
            </div>
            {phone && (
              isPhoneValid ? (
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500 animate-scale-in" />
              ) : touched.phone && (
                <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-destructive animate-scale-in" />
              )
            )}
          </div>
          {touched.phone && !isPhoneValid && phone && (
            <p className="text-xs text-destructive -mt-1 ml-1">Enter 10 digit number starting with 6, 7, 8, or 9</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className={`bg-background border-border h-12 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${role ? 'border-green-500/50' : ''}`}>
                <SelectValue placeholder="Your Role" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                {roleOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="hover:bg-primary/10 cursor-pointer">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={adBudget} onValueChange={setAdBudget}>
              <SelectTrigger className={`bg-background border-border h-12 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${adBudget ? 'border-green-500/50' : ''}`}>
                <SelectValue placeholder="Ad Budget" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                {adBudgetOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="hover:bg-primary/10 cursor-pointer">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            disabled={loading || !canSubmit}
            className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group/btn disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Processing...
              </>
            ) : (
              <>
                Continue
                <TrendingUp className="w-5 h-5 ml-2 group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-transform" />
              </>
            )}
          </Button>
        </form>

        {/* Trust indicators */}
        <div className="mt-4 pt-4 border-t border-border/50">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 sm:gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span>60 sec setup</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-green-500" />
              <span>Bank-grade security</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-yellow-500" />
              <span>4.9/5 rating</span>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="flex -space-x-2">
            {[1,2,3,4].map((i) => (
              <div 
                key={i} 
                className="w-7 h-7 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 border-2 border-background flex items-center justify-center"
              >
                <Users className="w-3 h-3 text-muted-foreground" />
              </div>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">₹2Cr+</span> ad spend optimized this month
          </span>
        </div>
      </CardContent>
    </Card>
  );
};