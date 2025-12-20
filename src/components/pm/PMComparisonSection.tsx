import { CheckCircle2, XCircle, Zap, Bot, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const traditionalItems = [
  { text: "Manual bidding adjustments", icon: XCircle },
  { text: "Limited audience targeting", icon: XCircle },
  { text: "Slow optimization cycles", icon: XCircle },
  { text: "Guesswork-based decisions", icon: XCircle },
  { text: "Reactive campaign changes", icon: XCircle },
];

const aiPoweredItems = [
  { text: "Smart automated bidding", icon: CheckCircle2 },
  { text: "Predictive audience targeting", icon: CheckCircle2 },
  { text: "Real-time optimization", icon: CheckCircle2 },
  { text: "Data-driven decisions", icon: CheckCircle2 },
  { text: "Proactive campaign scaling", icon: CheckCircle2 },
];

export const PMComparisonSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-orange-50/50" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Why Choose AI
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Traditional Ads vs AI-Powered Ads
          </h2>
          <p className="text-lg text-muted-foreground">
            See the difference AI makes in performance marketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Traditional Ads */}
          <Card className="bg-background border-border/50 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 to-slate-500" />
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-slate-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Traditional Ads</h3>
                  <p className="text-sm text-muted-foreground">Manual approach</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {traditionalItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-slate-50 rounded-xl">
                <div className="text-center">
                  <span className="text-2xl font-bold text-slate-500">2-3x</span>
                  <p className="text-sm text-muted-foreground">Typical ROAS</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI-Powered Ads */}
          <Card className="bg-background border-blue-200 relative overflow-hidden group shadow-xl shadow-blue-500/10">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-2xl" />
            <CardContent className="p-6 md:p-8 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">AI-Powered Ads</h3>
                  <p className="text-sm text-blue-600">Smart automation</p>
                </div>
                <span className="ml-auto px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                  Recommended
                </span>
              </div>
              
              <ul className="space-y-4">
                {aiPoweredItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">4-6x</span>
                  </div>
                  <p className="text-sm text-blue-600 font-medium">Average ROAS</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
