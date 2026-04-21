import { CheckCircle2, XCircle, Palette, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const templateItems = [
  { text: "Generic Canva/template designs" },
  { text: "Inconsistent brand identity" },
  { text: "No content strategy behind visuals" },
  { text: "Same formats recycled endlessly" },
  { text: "Low engagement and reach" },
];

const customItems = [
  { text: "Custom designs tailored to your brand" },
  { text: "Cohesive visual identity system" },
  { text: "Strategy-first, design-second approach" },
  { text: "Platform-optimized formats & trends" },
  { text: "Scroll-stopping engagement rates" },
];

export const SMComparisonSection = () => {
  return (
    <section className="py-8 md:py-14 lg:py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium mb-4 border border-pink-500/30">
            The Difference
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Template Designs vs a Real Social Media Design Company in Bangalore
          </h2>
          <p className="text-lg text-gray-300">
            See why brands using a dedicated social media creative designing agency in Bangalore outperform template-based content by 3–5x
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          <Card className="bg-white/5 border-white/10 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 to-slate-500" />
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Palette className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Template Designs</h3>
                  <p className="text-sm text-gray-400">Generic approach</p>
                </div>
              </div>
              <ul className="space-y-4">
                {templateItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-400">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-center">
                  <span className="text-2xl font-bold text-gray-400">0.5-1%</span>
                  <p className="text-sm text-gray-500">Avg. Engagement Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-pink-500/30 relative overflow-hidden group shadow-xl shadow-pink-500/10 hover:-translate-y-2 transition-all duration-500">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-brand" />
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-brand/10 rounded-full blur-2xl" />
            <CardContent className="p-6 md:p-8 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-brand rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/30">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">The Super 30 Creatives</h3>
                  <p className="text-sm text-pink-400">Custom & strategic</p>
                </div>
                <span className="ml-auto px-2 py-1 bg-pink-500/20 text-pink-400 text-xs font-medium rounded-full border border-pink-500/30">
                  Recommended
                </span>
              </div>
              <ul className="space-y-4">
                {customItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <span className="text-white font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-pink-500/10 rounded-xl border border-pink-500/30">
                <div className="text-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-brand bg-clip-text text-transparent">3-5%</span>
                  <p className="text-sm text-pink-400 font-medium">Avg. Engagement Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
