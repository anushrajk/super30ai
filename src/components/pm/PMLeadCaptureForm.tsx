import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Shield, Clock, Loader2, Users, Star, CheckCircle, AlertCircle, Phone, Target, TrendingUp } from "lucide-react";

interface PMLeadCaptureFormProps {
  onSubmit: (data: { website_url: string; email: string; phone?: string; role?: string; monthly_revenue?: string }) => void;
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
    const urlObj = new URL(url);
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
    const cleaned = value.replace(/\D/g, '').slice(0, 10);
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
      onSubmit({ 
        website_url: websiteUrl, 
        email,
        phone: phone ? `+91${phone}` : undefined,
        role: role || undefined, 
        monthly_revenue: adBudget || undefined 
      });
    }
  };

  const filledFields = [websiteUrl, email, phone, role, adBudget].filter(Boolean).length;
  const progress = (filledFields / 5) * 100;

  return (
    <Card className="bg-background/95 backdrop-blur-xl border-2 border-blue-500/20 shadow-2xl shadow-blue-500/10 overflow-hidden relative group">
      {/* Animated gradient border - blue for PM */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-transparent to-orange-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
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
                {filledFields === 0 ? "Start your ads audit" : filledFields < 5 ? `${5 - filledFields} fields remaining` : "Ready to analyze!"}
              </span>
            </div>
            <span className="text-xs font-bold text-blue-600">{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-2">
          <Target className="w-5 h-5 text-blue-600" />
          <h3 className="text-xl font-bold text-foreground text-center">
            Free Ads Audit
          </h3>
        </div>
        <p className="text-muted-foreground text-center text-sm mb-1">
          Discover hidden ROI opportunities in your campaigns
        </p>
        
        {/* Value badges */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
            Worth ₹25,000
          </span>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
            100% Free
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Website URL */}
          <div className={`relative transition-all duration-300 ${focusedField === 'url' ? 'scale-[1.02]' : ''}`}>
            <Input
              type="url"
              placeholder="https://yourcompany.com"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              onFocus={() => setFocusedField('url')}
              onBlur={() => handleBlur('url')}
              className={`w-full bg-background h-12 transition-all duration-300 pl-4 pr-10 ${
                touched.url && !isUrlValid 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-border focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
              }`}
            />
            {websiteUrl && (
              isUrlValid ? (
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500 animate-scale-in" />
              ) : touched.url && (
                <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500 animate-scale-in" />
              )
            )}
          </div>
          {touched.url && !isUrlValid && websiteUrl && (
            <p className="text-xs text-red-500 -mt-1 ml-1">Please enter a valid URL (e.g., https://example.com)</p>
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
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-border focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
              }`}
            />
            {email && (
              isEmailValid ? (
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500 animate-scale-in" />
              ) : touched.email && (
                <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500 animate-scale-in" />
              )
            )}
          </div>
          {touched.email && !isEmailValid && email && (
            <p className="text-xs text-red-500 -mt-1 ml-1">Please enter a valid email address</p>
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
                placeholder="7353252526"
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => handleBlur('phone')}
                className={`w-full bg-background h-12 rounded-l-none transition-all duration-300 pl-3 pr-10 ${
                  touched.phone && !isPhoneValid 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-border focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                }`}
              />
            </div>
            {phone && (
              isPhoneValid ? (
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500 animate-scale-in" />
              ) : touched.phone && (
                <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500 animate-scale-in" />
              )
            )}
          </div>
          {touched.phone && !isPhoneValid && phone && (
            <p className="text-xs text-red-500 -mt-1 ml-1">Enter 10 digit number starting with 6, 7, 8, or 9</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className={`bg-background border-border h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 ${role ? 'border-green-500/50' : ''}`}>
                <SelectValue placeholder="Your Role" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                {roleOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="hover:bg-blue-50 cursor-pointer">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={adBudget} onValueChange={setAdBudget}>
              <SelectTrigger className={`bg-background border-border h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 ${adBudget ? 'border-green-500/50' : ''}`}>
                <SelectValue placeholder="Ad Budget" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                {adBudgetOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="hover:bg-blue-50 cursor-pointer">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            disabled={loading || !canSubmit}
            className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group/btn disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Preparing Your Consultation...
              </>
            ) : (
              <>
                Get Free Ads Consultation
                <TrendingUp className="w-5 h-5 ml-2 group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-transform" />
              </>
            )}
          </Button>
        </form>

        {/* Trust indicators */}
        <div className="mt-4 pt-4 border-t border-border/50">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 sm:gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
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
                className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 border-2 border-background flex items-center justify-center"
              >
                <Users className="w-3 h-3 text-blue-600" />
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
