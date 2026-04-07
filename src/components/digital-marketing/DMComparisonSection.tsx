import { CheckCircle2, XCircle, Bot, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const traditionalItems = [
  { text: "Siloed channel management — SEO, ads, social run independently" },
  { text: "Monthly PDF reports with vanity metrics (impressions, likes)" },
  { text: "Reactive strategy adjustments after budget is already wasted" },
  { text: "One-size-fits-all playbooks not built for Bangalore's market" },
  { text: "Outsourced execution to freelancers with no accountability" },
];

const integratedItems = [
  { text: "Unified cross-channel digital marketing strategy" },
  { text: "Real-time performance dashboards tied to revenue" },
  { text: "AI-driven proactive optimization across all channels" },
  { text: "Custom strategies built for Bangalore's competitive landscape" },
  { text: "100% in-house team of 30+ digital marketing experts" },
];

export const DMComparisonSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-24 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-8 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand/20 text-brand rounded-full text-sm font-medium mb-4 border border-brand/30">
            The Difference
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Traditional Agency vs Our <span className="text-brand">Digital Marketing Agency in Bangalore</span>
          </h2>
          <p className="text-lg text-gray-300">
            See why 300+ Bangalore businesses switched to The Super 30's AI-integrated digital marketing approach
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <Card className={`bg-white/5 border-white/10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="h-1 bg-gray-500" />
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Generic Agency</h3>
                  <p className="text-sm text-gray-400">Outdated approach</p>
                </div>
              </div>
              <ul className="space-y-4">
                {traditionalItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                <span className="text-2xl font-bold text-gray-400">1.5-2x</span>
                <p className="text-sm text-gray-500">Typical Marketing ROI</p>
              </div>
            </CardContent>
          </Card>

          <Card className={`bg-white/5 border-brand/30 shadow-xl shadow-brand/10 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="h-1 bg-brand" />
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">The Super 30</h3>
                  <p className="text-sm text-brand">AI-Integrated Digital Marketing</p>
                </div>
                <span className="ml-auto px-3 py-1 bg-brand/20 text-brand text-xs font-bold rounded-full border border-brand/30">
                  RECOMMENDED
                </span>
              </div>
              <ul className="space-y-4">
                {integratedItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-brand/10 rounded-xl border border-brand/30 text-center">
                <span className="text-2xl font-bold text-brand">5-8x</span>
                <p className="text-sm text-brand font-medium">Average Marketing ROI</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
