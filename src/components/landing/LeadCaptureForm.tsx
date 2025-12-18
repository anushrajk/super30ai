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
    <Card className="bg-background border border-border shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-orange-500" />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground text-center mb-2">
          Get Your Free AI SEO Audit
        </h3>
        <p className="text-muted-foreground text-center text-sm mb-6">
          See how AI search engines view your website
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="url"
              placeholder="https://yourcompany.com"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              required
              className="w-full bg-background border-input h-11"
            />
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-background border-input h-11"
            />
          </div>

          <div>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="w-full bg-background border-input h-11">
                <SelectValue placeholder="Your Role" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                {roleOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select value={monthlyRevenue} onValueChange={setMonthlyRevenue}>
              <SelectTrigger className="w-full bg-background border-input h-11">
                <SelectValue placeholder="Monthly Revenue" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                {revenueOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Analyzing...
              </>
            ) : (
              <>
                Start My Free Audit
                <Sparkles className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>

        <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>Takes &lt; 60 seconds</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3" />
            <span>Your data is secure</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
