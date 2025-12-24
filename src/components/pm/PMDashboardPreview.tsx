import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Target, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Sparkles, 
  GitBranch,
  type LucideIcon
} from "lucide-react";

interface Metric {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

interface Feature {
  label: string;
  metrics: Metric[];
}

const features: Feature[] = [
  {
    label: "AI Bid Optimization",
    metrics: [
      { label: "Smart Bids", value: "2,847", icon: Target, color: "text-blue-500" },
      { label: "Cost Savings", value: "34%", icon: TrendingUp, color: "text-green-500" },
      { label: "Efficiency Score", value: "94/100", icon: Sparkles, color: "text-purple-500" },
    ],
  },
  {
    label: "Cross-Platform Performance",
    metrics: [
      { label: "Google Ads", value: "₹4.2L", icon: BarChart3, color: "text-red-500" },
      { label: "Meta Ads", value: "₹2.8L", icon: BarChart3, color: "text-blue-600" },
      { label: "LinkedIn Ads", value: "₹1.1L", icon: BarChart3, color: "text-sky-500" },
    ],
  },
  {
    label: "AI Audience Targeting",
    metrics: [
      { label: "Reach", value: "1.2M", icon: Users, color: "text-indigo-500" },
      { label: "Engagement", value: "8.4%", icon: TrendingUp, color: "text-emerald-500" },
      { label: "Conversion Rate", value: "3.2%", icon: Target, color: "text-orange-500" },
    ],
  },
  {
    label: "Real-Time ROAS Tracking",
    metrics: [
      { label: "ROAS", value: "4.8x", icon: TrendingUp, color: "text-green-500" },
      { label: "Revenue", value: "₹18.6L", icon: BarChart3, color: "text-blue-500" },
      { label: "Ad Spend", value: "₹3.9L", icon: Target, color: "text-amber-500" },
    ],
  },
  {
    label: "AI Creative Insights",
    metrics: [
      { label: "CTR", value: "5.7%", icon: Target, color: "text-pink-500" },
      { label: "Ad Score", value: "92/100", icon: Sparkles, color: "text-violet-500" },
      { label: "Impressions", value: "3.4M", icon: BarChart3, color: "text-cyan-500" },
    ],
  },
  {
    label: "Conversion Attribution",
    metrics: [
      { label: "Conversions", value: "1,247", icon: GitBranch, color: "text-emerald-500" },
      { label: "Leads", value: "3,892", icon: Users, color: "text-blue-500" },
      { label: "Cost per Lead", value: "₹284", icon: Target, color: "text-orange-500" },
    ],
  },
];

export const PMDashboardPreview = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-muted/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            AI-Powered Analytics
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See Your Campaigns in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get real-time insights into your campaign performance with AI-driven analytics 
            that optimize your ad spend and maximize conversions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Feature Buttons */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <button
                key={feature.label}
                onClick={() => setActiveFeature(index)}
                className={`w-full text-left px-6 py-4 rounded-xl border transition-all duration-300 ${
                  activeFeature === index
                    ? "bg-gradient-to-r from-primary/20 to-primary/5 border-primary/50 shadow-lg shadow-primary/10"
                    : "bg-card/50 border-border/50 hover:bg-card hover:border-border"
                }`}
              >
                <span
                  className={`font-medium ${
                    activeFeature === index
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {feature.label}
                </span>
              </button>
            ))}
          </div>

          {/* Dashboard Card */}
          <Card className="overflow-hidden border-border/50 shadow-xl">
            {/* Browser Chrome */}
            <div className="bg-muted/50 px-4 py-3 border-b border-border/50 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-background/50 rounded-md px-3 py-1.5 text-xs text-muted-foreground">
                campaigns.thesuper30.ai
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 bg-gradient-to-br from-card to-muted/20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {features[activeFeature].label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time metrics
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-muted-foreground">Live</span>
                </div>
              </div>

              <div className="grid gap-4">
                {features[activeFeature].metrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={metric.label}
                      className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-muted/50 ${metric.color}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {metric.label}
                          </span>
                        </div>
                        <span className="text-lg font-bold text-foreground">
                          {metric.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-border/30">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Last updated: Just now
                  </span>
                  <span className="text-primary font-medium">
                    AI Optimized ✨
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
