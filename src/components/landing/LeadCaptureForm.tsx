import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Shield, Clock, Loader2 } from "lucide-react";

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

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="url"
          placeholder="https://yourcompany.com"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          required
          className="flex-1 bg-background border-input"
        />
        <Input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-background border-input"
        />
        <Button type="submit" disabled={loading} className="bg-orange-500 hover:bg-orange-600 text-white">
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Start Audit"}
          {!loading && <Sparkles className="w-4 h-4 ml-2" />}
        </Button>
      </form>
    );
  }

  return (
    <Card className="bg-background/80 backdrop-blur-xl border border-border/50 shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden relative group">
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-transparent to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <CardContent className="p-6 relative">
        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
            Step 1 of 2
          </span>
          <div className="flex gap-1.5">
            <div className="w-8 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
            <div className="w-8 h-1.5 bg-muted rounded-full" />
          </div>
        </div>

        {/* Icon with glow */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-foreground text-center mb-2">
          Get Your Free AI SEO Audit
        </h3>
        <p className="text-muted-foreground text-center text-sm mb-6">
          See how AI search engines view your website
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="group/input">
            <Input
              type="url"
              placeholder="https://yourcompany.com"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              required
              className="w-full bg-background/50 border-border/50 h-12 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 placeholder:text-muted-foreground/60"
            />
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-background/50 border-border/50 h-12 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 placeholder:text-muted-foreground/60"
            />
          </div>

          <div>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="w-full bg-background/50 border-border/50 h-12 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300">
                <SelectValue placeholder="Your Role" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                {roleOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="hover:bg-orange-50">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select value={monthlyRevenue} onValueChange={setMonthlyRevenue}>
              <SelectTrigger className="w-full bg-background/50 border-border/50 h-12 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300">
                <SelectValue placeholder="Monthly Revenue" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                {revenueOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="hover:bg-orange-50">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] transition-all duration-300 group/btn"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Analyzing...
              </>
            ) : (
              <>
                Start My Free Audit
                <Sparkles className="w-4 h-4 ml-2 group-hover/btn:rotate-12 transition-transform" />
              </>
            )}
          </Button>
        </form>

        <div className="flex items-center justify-center gap-4 mt-5 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 bg-muted/30 px-3 py-1.5 rounded-full">
            <Clock className="w-3.5 h-3.5 text-orange-500" />
            <span>Takes &lt; 60 seconds</span>
          </div>
          <div className="flex items-center gap-1.5 bg-muted/30 px-3 py-1.5 rounded-full">
            <Shield className="w-3.5 h-3.5 text-green-500" />
            <span>Your data is secure</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
