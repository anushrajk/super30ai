import { Card, CardContent } from "@/components/ui/card";
import { Check, Eye, MessageSquare, Users } from "lucide-react";

const features = ["Real-time AI visibility tracking", "ChatGPT & Perplexity monitoring", "Competitor AI presence analysis", "Citation & mention tracking", "ROI & revenue attribution", "Custom reporting dashboards"];
const metrics = [{ label: "AI Visibility", value: "78%", icon: Eye }, { label: "Citations", value: "124", icon: MessageSquare }, { label: "AI Leads", value: "89", icon: Users }];

export const DashboardPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Reporting & Dashboard</h2>
          <p className="text-lg text-muted-foreground">See your AI SEO performance in real-time</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0"><Check className="w-4 h-4 text-white" /></div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
          <Card className="bg-muted/30 border-border overflow-hidden">
            <div className="bg-muted px-4 py-2 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" /><div className="w-3 h-3 bg-yellow-500 rounded-full" /><div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-xs text-muted-foreground ml-4">dashboard.da360.ai</span>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-background rounded-lg border border-border">
                    <metric.icon className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
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
