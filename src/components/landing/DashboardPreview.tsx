import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Eye, MessageSquare, Users, TrendingUp, BarChart3, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { 
    id: "visibility",
    label: "Real-time AI visibility tracking",
    metrics: [
      { label: "AI Visibility", value: "78%", icon: Eye, color: "from-orange-500 to-orange-600" },
      { label: "Impressions", value: "12.4K", icon: TrendingUp, color: "from-blue-500 to-blue-600" },
      { label: "Growth", value: "+24%", icon: BarChart3, color: "from-green-500 to-green-600" }
    ]
  },
  { 
    id: "chatgpt",
    label: "ChatGPT & Perplexity monitoring",
    metrics: [
      { label: "ChatGPT Mentions", value: "89", icon: MessageSquare, color: "from-purple-500 to-purple-600" },
      { label: "Perplexity Cites", value: "56", icon: Target, color: "from-pink-500 to-pink-600" },
      { label: "Claude Refs", value: "34", icon: Eye, color: "from-indigo-500 to-indigo-600" }
    ]
  },
  { 
    id: "competitor",
    label: "Competitor AI presence analysis",
    metrics: [
      { label: "Your Rank", value: "#2", icon: TrendingUp, color: "from-orange-500 to-orange-600" },
      { label: "Share of Voice", value: "34%", icon: BarChart3, color: "from-blue-500 to-blue-600" },
      { label: "Gap Score", value: "12pts", icon: Target, color: "from-red-500 to-red-600" }
    ]
  },
  { 
    id: "citations",
    label: "Citation & mention tracking",
    metrics: [
      { label: "Citations", value: "124", icon: MessageSquare, color: "from-green-500 to-green-600" },
      { label: "Brand Mentions", value: "287", icon: Users, color: "from-orange-500 to-orange-600" },
      { label: "Backlinks", value: "1.2K", icon: TrendingUp, color: "from-blue-500 to-blue-600" }
    ]
  },
  { 
    id: "roi",
    label: "ROI & revenue attribution",
    metrics: [
      { label: "AI Revenue", value: "$48K", icon: TrendingUp, color: "from-green-500 to-green-600" },
      { label: "ROI", value: "340%", icon: BarChart3, color: "from-orange-500 to-orange-600" },
      { label: "Leads", value: "89", icon: Users, color: "from-blue-500 to-blue-600" }
    ]
  },
  { 
    id: "custom",
    label: "Custom reporting dashboards",
    metrics: [
      { label: "Reports", value: "12", icon: BarChart3, color: "from-purple-500 to-purple-600" },
      { label: "Widgets", value: "48", icon: Eye, color: "from-pink-500 to-pink-600" },
      { label: "Exports", value: "156", icon: Target, color: "from-indigo-500 to-indigo-600" }
    ]
  }
];

export const DashboardPreview = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-24 bg-background relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Analytics
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Reporting & Dashboard
          </h2>
          <p className="text-lg text-muted-foreground">
            See your AI SEO performance in real-time
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className={`space-y-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group text-left ${
                  activeFeature.id === feature.id
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg'
                    : 'hover:bg-muted/50'
                }`}
                style={{ transitionDelay: `${(index + 1) * 50}ms` }}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  activeFeature.id === feature.id
                    ? 'bg-white/20'
                    : 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg group-hover:scale-110'
                }`}>
                  <Check className={`w-4 h-4 ${activeFeature.id === feature.id ? 'text-white' : 'text-white'}`} />
                </div>
                <span className={`font-medium transition-colors ${
                  activeFeature.id === feature.id ? 'text-white' : 'text-foreground'
                }`}>{feature.label}</span>
              </button>
            ))}
          </div>

          <Card className={`bg-background/80 backdrop-blur-sm border-border/50 overflow-hidden shadow-2xl hover:shadow-xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Browser chrome */}
            <div className="bg-muted/50 px-4 py-3 border-b border-border/50 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-background/80 px-4 py-1 rounded-full text-xs text-muted-foreground border border-border/50">
                  dashboard.thesuper30.ai
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-4 font-medium">{activeFeature.label}</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {activeFeature.metrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className="text-center p-4 bg-muted/30 rounded-xl border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <metric.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                    <div className="text-xs text-muted-foreground font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
