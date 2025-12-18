import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Loader2, Shield, Zap, Clock } from "lucide-react";

interface LeadCaptureFormProps {
  onSubmit: (data: { website_url: string; email: string }) => void;
  loading?: boolean;
  variant?: "default" | "compact";
}

export const LeadCaptureForm = ({ onSubmit, loading, variant = "default" }: LeadCaptureFormProps) => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (websiteUrl && email) {
      onSubmit({ website_url: websiteUrl, email });
    }
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="url"
          placeholder="yourwebsite.com"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
          required
        />
        <Input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
          required
        />
        <Button 
          type="submit" 
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Get Free Audit"}
        </Button>
      </form>
    );
  }

  return (
    <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl text-white">
          Get Your Free AI SEO Audit
        </CardTitle>
        <p className="text-slate-400 text-sm mt-2">
          Discover how AI search engines see your website
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-slate-300 mb-2 block">Website URL</label>
            <Input
              type="text"
              placeholder="yourwebsite.com"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              required
            />
          </div>
          <div>
            <label className="text-sm text-slate-300 mb-2 block">Work Email</label>
            <Input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              required
            />
          </div>
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg shadow-lg shadow-orange-500/25"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Analyzing...
              </>
            ) : (
              <>
                Get My Free AI Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </form>

        {/* Trust indicators */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-green-500" />
              No credit card
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-orange-500" />
              Instant results
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-blue-500" />
              2-min analysis
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
