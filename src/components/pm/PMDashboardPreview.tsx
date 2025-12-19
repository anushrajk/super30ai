import { useState, useEffect } from "react";
import { TrendingUp, DollarSign, MousePointerClick, Target, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AnimatedValue = ({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(start + (end - start) * easeOut));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return <span>{prefix}{value.toLocaleString()}{suffix}</span>;
};

export const PMDashboardPreview = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const metrics = [
    { icon: DollarSign, label: "Ad Spend", value: 25000, prefix: "₹", color: "text-blue-500", bgColor: "bg-blue-100" },
    { icon: Target, label: "ROAS", value: 4.2, suffix: "x", color: "text-green-500", bgColor: "bg-green-100" },
    { icon: MousePointerClick, label: "Conversions", value: 847, color: "text-purple-500", bgColor: "bg-purple-100" },
    { icon: TrendingUp, label: "Cost/Lead", value: 295, prefix: "₹", color: "text-orange-500", bgColor: "bg-orange-100" },
  ];

  const campaigns = [
    { name: "Google Search", status: "Active", spend: "₹8,500", conv: "312", roas: "4.8x", color: "bg-green-500" },
    { name: "Meta Retargeting", status: "Active", spend: "₹6,200", conv: "245", roas: "5.2x", color: "bg-green-500" },
    { name: "LinkedIn B2B", status: "Learning", spend: "₹4,800", conv: "89", roas: "3.4x", color: "bg-yellow-500" },
    { name: "Display Network", status: "Active", spend: "₹5,500", conv: "201", roas: "3.9x", color: "bg-green-500" },
  ];

  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Real-Time Dashboard
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            See Your Campaigns in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            Track performance across all platforms in one unified dashboard
          </p>
        </div>

        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="bg-background border-border/50 shadow-2xl overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Campaign Performance</h4>
                    <p className="text-sm text-white/80">Last 30 days</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-white font-medium">Live</span>
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {metrics.map((metric, index) => (
                  <div 
                    key={index}
                    className="bg-muted/50 rounded-xl p-4 hover:bg-muted/80 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 ${metric.bgColor} rounded-lg flex items-center justify-center`}>
                        <metric.icon className={`w-4 h-4 ${metric.color}`} />
                      </div>
                      <span className="text-sm text-muted-foreground">{metric.label}</span>
                    </div>
                    <div className={`text-2xl font-bold ${metric.color}`}>
                      {metric.suffix === "x" ? (
                        <span>{metric.value}x</span>
                      ) : (
                        <AnimatedValue end={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Campaign Table */}
              <div className="border border-border rounded-xl overflow-hidden">
                <div className="bg-muted/50 px-4 py-3 border-b border-border">
                  <span className="font-semibold text-foreground">Active Campaigns</span>
                </div>
                <div className="divide-y divide-border">
                  {campaigns.map((campaign, index) => (
                    <div key={index} className="px-4 py-3 flex items-center justify-between hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 ${campaign.color} rounded-full`} />
                        <div>
                          <span className="font-medium text-foreground">{campaign.name}</span>
                          <span className="text-xs text-muted-foreground ml-2">{campaign.status}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="text-right">
                          <span className="text-muted-foreground">Spend:</span>
                          <span className="font-medium text-foreground ml-1">{campaign.spend}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-muted-foreground">Conv:</span>
                          <span className="font-medium text-foreground ml-1">{campaign.conv}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-green-500">{campaign.roas}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
