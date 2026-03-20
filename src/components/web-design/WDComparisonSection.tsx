import { CheckCircle2, XCircle, Globe, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const oldWayItems = [
  { text: "WordPress themes with no customization" },
  { text: "Slow 8-12 week timelines" },
  { text: "Not optimized for mobile or speed" },
  { text: "No SEO or conversion strategy built in" },
  { text: "Expensive ongoing maintenance" },
];

const newWayItems = [
  { text: "Custom-designed for your brand & audience" },
  { text: "Fast 2-4 week delivery" },
  { text: "Mobile-first, Core Web Vitals optimized" },
  { text: "SEO & conversion strategy baked into every page" },
  { text: "Affordable maintenance with real support" },
];

export const WDComparisonSection = () => {
  return (
    <section className="py-8 md:py-14 lg:py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-4 border border-emerald-500/30">The Difference</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Template Websites vs Custom-Built Websites</h2>
          <p className="text-lg text-gray-300">See why a custom website outperforms template-based alternatives in every metric</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          <Card className="bg-white/5 border-white/10 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 to-slate-500" />
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><Globe className="w-6 h-6 text-gray-400" /></div>
                <div><h3 className="text-xl font-bold text-white">Template Websites</h3><p className="text-sm text-gray-400">Cookie-cutter approach</p></div>
              </div>
              <ul className="space-y-4">
                {oldWayItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3"><XCircle className="w-5 h-5 text-gray-500 flex-shrink-0" /><span className="text-gray-400">{item.text}</span></li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-center"><span className="text-2xl font-bold text-gray-400">1-2%</span><p className="text-sm text-gray-500">Avg. Conversion Rate</p></div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-emerald-500/30 relative overflow-hidden group shadow-xl shadow-emerald-500/10 hover:-translate-y-2 transition-all duration-500">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-brand" />
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-brand/10 rounded-full blur-2xl" />
            <CardContent className="p-6 md:p-8 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-brand rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30"><Bot className="w-6 h-6 text-white" /></div>
                <div><h3 className="text-xl font-bold text-white">Super 30 Custom Websites</h3><p className="text-sm text-emerald-400">Built for performance</p></div>
                <span className="ml-auto px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/30">Recommended</span>
              </div>
              <ul className="space-y-4">
                {newWayItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" /><span className="text-white font-medium">{item.text}</span></li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/30">
                <div className="text-center"><span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-brand bg-clip-text text-transparent">4-8%</span><p className="text-sm text-emerald-400 font-medium">Avg. Conversion Rate</p></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
