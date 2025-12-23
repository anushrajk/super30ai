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
    <section className="py-8 md:py-14 lg:py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements - consistent with dark sections */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-4 border border-blue-500/30">
            Why Choose AI
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Traditional Ads vs AI-Powered Ads
          </h2>
          <p className="text-lg text-gray-300">
            See the difference AI makes in performance marketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {/* Traditional Ads */}
          <Card className="bg-white/5 border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 to-slate-500" />
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Traditional Ads</h3>
                  <p className="text-sm text-gray-400">Manual approach</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {traditionalItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-400">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-center">
                  <span className="text-2xl font-bold text-gray-400">2-3x</span>
                  <p className="text-sm text-gray-500">Typical ROAS</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI-Powered Ads */}
          <Card className="bg-white/5 border-blue-500/30 relative overflow-hidden group shadow-xl shadow-blue-500/10">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-2xl" />
            <CardContent className="p-6 md:p-8 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AI-Powered Ads</h3>
                  <p className="text-sm text-blue-400">Smart automation</p>
                </div>
                <span className="ml-auto px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
                  Recommended
                </span>
              </div>
              
              <ul className="space-y-4">
                {aiPoweredItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-white font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">4-6x</span>
                  </div>
                  <p className="text-sm text-blue-400 font-medium">Average ROAS</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
