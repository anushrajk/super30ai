import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Shield, Clock, Loader2, Users, TrendingUp, Star, CheckCircle } from "lucide-react";

interface LeadCaptureFormProps {
  onSubmit: (data: { website_url: string; email: string; role?: string; monthly_revenue?: string }) => void;
  loading?: boolean;
  variant?: "default" | "compact";
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
  { value: "under_50k", label: "Under $50k/month" },
  { value: "50k_100k", label: "$50k-$100k/month" },
  { value: "100k_500k", label: "$100k-$500k/month" },
  { value: "500k_1m", label: "$500k-$1M/month" },
  { value: "over_1m", label: "Over $1M/month" },
];

export const LeadCaptureForm = ({ onSubmit, loading, variant = "default" }: LeadCaptureFormProps) => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [monthlyRevenue, setMonthlyRevenue] = useState("");
  const [recentSignups, setRecentSignups] = useState(47);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Simulate live activity counter
  useEffect(() => {
    const interval = setInterval(() => {
      setRecentSignups(prev => {
        const change = Math.random() > 0.7 ? 1 : 0;
        return Math.min(prev + change, 99);
      });
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (websiteUrl && email) {
      onSubmit({ 
        website_url: websiteUrl, 
        email, 
        role: role || undefined, 
        monthly_revenue: monthlyRevenue || undefined 
      });
    }
  };

  const filledFields = [websiteUrl, email, role, monthlyRevenue].filter(Boolean).length;
  const progress = (filledFields / 4) * 100;

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
        <Button type="submit" disabled={loading} className="h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] transition-all duration-300">
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Get Free Audit"}
          {!loading && <Sparkles className="w-4 h-4 ml-2" />}
        </Button>
      </form>
    );
  }

  return (
    <Card className="bg-background/95 backdrop-blur-xl border-2 border-orange-500/20 shadow-2xl shadow-orange-500/10 overflow-hidden relative group">
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-transparent to-orange-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Live activity indicator */}
      <div className="absolute top-3 right-3 z-10">
        <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 px-2.5 py-1 rounded-full animate-pulse">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
          <span className="text-xs font-medium text-green-600">{recentSignups} audits today</span>
        </div>
      </div>
      
      <CardContent className="p-6 relative">
        {/* Progress bar */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground">
              {filledFields === 0 ? "Start your audit" : filledFields < 4 ? `${4 - filledFields} fields remaining` : "Ready to analyze!"}
            </span>
            <span className="text-xs font-bold text-orange-500">{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Icon with value prop */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <TrendingUp className="w-7 h-7 text-white" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-foreground text-center mb-1">
          Free AI Visibility Audit
        </h3>
        <p className="text-muted-foreground text-center text-sm mb-1">
          See exactly where you rank in AI search
        </p>
        
        {/* Value badges */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">
            Worth $500
          </span>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
            100% Free
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className={`relative transition-all duration-300 ${focusedField === 'url' ? 'scale-[1.02]' : ''}`}>
            <Input
              type="url"
              placeholder="https://yourcompany.com"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              onFocus={() => setFocusedField('url')}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full bg-background border-border h-12 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 pl-4"
            />
            {websiteUrl && (
              <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500 animate-scale-in" />
            )}
          </div>
          
          <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
            <Input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full bg-background border-border h-12 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 pl-4"
            />
            {email && email.includes('@') && (
              <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500 animate-scale-in" />
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className={`bg-background border-border h-12 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 ${role ? 'border-green-500/50' : ''}`}>
                <SelectValue placeholder="Your Role" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                {roleOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="hover:bg-orange-50 cursor-pointer">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={monthlyRevenue} onValueChange={setMonthlyRevenue}>
              <SelectTrigger className={`bg-background border-border h-12 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 ${monthlyRevenue ? 'border-green-500/50' : ''}`}>
                <SelectValue placeholder="Revenue" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                {revenueOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="hover:bg-orange-50 cursor-pointer">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            disabled={loading || !websiteUrl || !email}
            className="w-full h-14 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-semibold shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group/btn disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Analyzing Your Site...
              </>
            ) : (
              <>
                Get My Free Audit Now
                <Sparkles className="w-5 h-5 ml-2 group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-transform" />
              </>
            )}
          </Button>
        </form>

        {/* Trust indicators */}
        <div className="mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-orange-500" />
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
                className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-background flex items-center justify-center"
              >
                <Users className="w-3 h-3 text-slate-600" />
              </div>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">300+</span> founders audited this month
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
