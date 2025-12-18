import { Card, CardContent } from "@/components/ui/card";
import { Check, Eye, MessageSquare, Users } from "lucide-react";

const features = [
  "Real-time AI visibility tracking",
  "ChatGPT & Perplexity monitoring",
  "Competitor AI presence analysis",
  "Citation & mention tracking",
  "ROI & revenue attribution",
  "Custom reporting dashboards"
];

const metrics = [
  { label: "AI Visibility", value: "78%", icon: Eye, color: "from-orange-500 to-orange-600" },
  { label: "Citations", value: "124", icon: MessageSquare, color: "from-blue-500 to-blue-600" },
  { label: "AI Leads", value: "89", icon: Users, color: "from-green-500 to-green-600" }
];

export const DashboardPreview = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-orange-50/50 transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <Card className="bg-background/80 backdrop-blur-sm border-border/50 overflow-hidden shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-500">
            {/* Browser chrome */}
            <div className="bg-muted/50 px-4 py-3 border-b border-border/50 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-background/80 px-4 py-1 rounded-full text-xs text-muted-foreground border border-border/50">
                  dashboard.da360.ai
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-4">
                {metrics.map((metric, index) => (
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
