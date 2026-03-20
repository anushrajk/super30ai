import { CheckCircle2, XCircle, Bot, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const traditionalItems = [
  { text: "Siloed channel management" },
  { text: "Monthly PDF reports" },
  { text: "Vanity metric focus (impressions, likes)" },
  { text: "Reactive strategy adjustments" },
  { text: "One-size-fits-all playbooks" },
];

const integratedItems = [
  { text: "Unified cross-channel strategy" },
  { text: "Real-time performance dashboards" },
  { text: "Revenue & pipeline-focused metrics" },
  { text: "AI-driven proactive optimization" },
  { text: "Custom strategies per business model" },
];

export const DMComparisonSection = () => {
  return (
    <section className="py-8 md:py-14 lg:py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-4 border border-blue-500/30">
            The Difference
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Traditional Agency vs AI-Integrated Marketing
          </h2>
          <p className="text-lg text-gray-300">
            See why businesses are switching to an AI-first full-service approach
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          <Card className="bg-white/5 border-white/10 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 to-slate-500" />
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Traditional Agency</h3>
                  <p className="text-sm text-gray-400">Siloed approach</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {traditionalItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-400">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-center">
                  <span className="text-2xl font-bold text-gray-400">1.5-2x</span>
                  <p className="text-sm text-gray-500">Typical Marketing ROI</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-brand/30 relative overflow-hidden group shadow-xl shadow-brand/10 hover:-translate-y-2 transition-all duration-500">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-orange-600" />
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-brand/20 to-brand/10 rounded-full blur-2xl" />
            <CardContent className="p-6 md:p-8 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand/30">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">The Super 30 Approach</h3>
                  <p className="text-sm text-brand">AI-integrated</p>
                </div>
                <span className="ml-auto px-2 py-1 bg-brand/20 text-brand text-xs font-medium rounded-full border border-brand/30">
                  Recommended
                </span>
              </div>
              
              <ul className="space-y-4">
                {integratedItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
                    <span className="text-white font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-brand/10 rounded-xl border border-brand/30">
                <div className="text-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-brand to-orange-400 bg-clip-text text-transparent">5-8x</span>
                  <p className="text-sm text-brand font-medium">Average Marketing ROI</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
