import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Shield, Clock, Loader2, Users, Star, CheckCircle, AlertCircle, Phone } from "lucide-react";
import { submitFormToGoogleSheets } from "@/hooks/useFormSubmit";

interface LeadCaptureFormProps {
  onSubmit: (data: { website_url: string; email: string; phone?: string; role?: string; monthly_revenue?: string; full_name?: string; company_name?: string }) => void;
  loading?: boolean;
  variant?: "default" | "compact";
  formTitle?: string;
  formDescription?: string;
  formBadgeText?: string;
  formButtonText?: string;
  formId?: string;
  formName?: string;
}

const roleOptions = [
  { value: "founder_ceo", label: "Founder/CEO" },
  { value: "cmo_marketing_director", label: "CMO/Marketing Director" },
  { value: "vp_growth", label: "VP of Growth" },
  { value: "head_of_seo", label: "Head of SEO" },
  { value: "marketing_manager", label: "Marketing Manager" },
  { value: "other", label: "Other" },
];

const revenueOptions = [
  { value: "under_50k", label: "Under ₹50L/month" },
  { value: "50k_100k", label: "₹50L-₹1Cr/month" },
  { value: "100k_500k", label: "₹1Cr-₹5Cr/month" },
  { value: "500k_1m", label: "₹5Cr-₹10Cr/month" },
  { value: "over_1m", label: "Over ₹10Cr/month" },
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
  // Must be 10 digits and start with 6, 7, 8, or 9
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};

export const LeadCaptureForm = ({ 
  onSubmit, 
  loading, 
  variant = "default",
  formTitle = "Book Your Free AI Visibility Consultation",
  formDescription = "In a short consultation we'll show how your business can appear in AI search results and attract more qualified leads.",
  formBadgeText = "100% Free",
  formButtonText = "Book Your Free Consultation",
  formId = "lead_capture_form_seo",
  formName = "Free AI Visibility Consultation",
}: LeadCaptureFormProps) => {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [monthlyRevenue, setMonthlyRevenue] = useState("");
  const [recentSignups, setRecentSignups] = useState(47);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});


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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ url: true, email: true, phone: true });
    
    if (canSubmit) {
      const formData = { 
        website_url: websiteUrl, 
        email,
        phone: phone ? `+91${phone}` : undefined,
        role: role || undefined, 
        monthly_revenue: monthlyRevenue || undefined,
        full_name: fullName || undefined,
        company_name: companyName || undefined,
      };

      // Submit to Google Sheets (non-blocking)
      void submitFormToGoogleSheets({
        form_id: formId,
        form_name: formName,
        page_url: window.location.href,
        trigger_type: "form_submit",
        data: {
          name: fullName,
          company: companyName,
          website: websiteUrl,
          email: email,
          phone: phone ? `+91${phone}` : "",
          role: roleOptions.find(r => r.value === role)?.label || role || "",
          revenue: revenueOptions.find(r => r.value === monthlyRevenue)?.label || monthlyRevenue || "",
        },
      });

      onSubmit(formData);
    }
  };

  const filledFields = [fullName, companyName, websiteUrl, email, phone, role, monthlyRevenue].filter(Boolean).length;
  const progress = (filledFields / 7) * 100;

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="url"
          placeholder="https://yourcompany.com"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          required
          className="flex-1 bg-background border-input h-12"
        />
        <Input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-background border-input h-12"
        />
        <Button type="submit" disabled={loading} className="h-12 bg-brand-gradient hover:opacity-90 text-white px-6 hover:scale-[1.02] transition-all duration-300">
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Get Free Audit"}
          {!loading && <Sparkles className="w-4 h-4 ml-2" />}
        </Button>
      </form>
    );
  }

  return (
    <Card className="glass border-2 border-border shadow-2xl overflow-hidden relative rounded-2xl">
      
      <CardContent className="p-4 sm:p-6 relative">
        <h3 className="text-xl font-bold text-foreground text-center mb-1">
          {formTitle}
        </h3>
        <p className="text-muted-foreground text-center text-sm mb-1">
          {formDescription}
        </p>
        
        {/* Value badge */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
            {formBadgeText}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Full Name & Company Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="relative">
              <Input
                type="text"
                placeholder="Your Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onFocus={() => setFocusedField('name')}
                onBlur={() => { setFocusedField(null); }}
                className="w-full bg-background h-12 border-border focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-300 pl-4"
              />
            </div>
            <div className="relative">
              <Input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                onFocus={() => setFocusedField('company')}
                onBlur={() => { setFocusedField(null); }}
                className="w-full bg-background h-12 border-border focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-300 pl-4"
              />
            </div>
          </div>

          {/* Website URL */}
          <div className="relative">
            <Input
              type="url"
              placeholder="https://yourcompany.com"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              onFocus={() => setFocusedField('url')}
              onBlur={() => handleBlur('url')}
              className={`w-full bg-background h-12 transition-all duration-300 pl-4 pr-10 ${
                touched.url && !isUrlValid 
                  ? 'border-destructive focus:border-destructive focus:ring-destructive/20' 
                  : 'border-border focus:border-brand focus:ring-2 focus:ring-brand/20'
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
            <p className="text-xs text-destructive -mt-1 ml-1">Please enter a valid URL (e.g., https://example.com)</p>
          )}
          
          {/* Email */}
          <div className="relative">
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
                  : 'border-border focus:border-brand focus:ring-2 focus:ring-brand/20'
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
          <div className="relative">
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
                    : 'border-border focus:border-brand focus:ring-2 focus:ring-brand/20'
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
              <SelectTrigger className={`bg-background border-border h-12 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-300 ${role ? 'border-green-500/50' : ''}`}>
                <SelectValue placeholder="Your Role" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                {roleOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="hover:bg-brand-light cursor-pointer">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={monthlyRevenue} onValueChange={setMonthlyRevenue}>
              <SelectTrigger className={`bg-background border-border h-12 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-300 ${monthlyRevenue ? 'border-green-500/50' : ''}`}>
                <SelectValue placeholder="Revenue" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                {revenueOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="hover:bg-brand-light cursor-pointer">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            disabled={loading || !canSubmit}
            className="w-full h-14 bg-brand-gradient hover:opacity-90 text-white text-lg font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group/btn disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Processing...
              </>
            ) : (
              <>
                {formButtonText}
                <Sparkles className="w-5 h-5 ml-2 group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-transform" />
              </>
            )}
          </Button>
        </form>

      </CardContent>
    </Card>
  );
};
