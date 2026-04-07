import { CheckCircle2, XCircle } from "lucide-react";

const traditionalItems = [
  "Siloed channel management — SEO, ads, social run independently",
  "Monthly PDF reports with vanity metrics (impressions, likes)",
  "Reactive strategy adjustments after budget is already wasted",
  "One-size-fits-all playbooks not built for Bangalore's market",
  "Outsourced execution to freelancers with no accountability",
];

const integratedItems = [
  "Unified cross-channel digital marketing strategy",
  "Real-time performance dashboards tied to revenue",
  "Proactive optimization across all channels",
  "Custom strategies built for Bangalore's competitive landscape",
  "100% in-house team of 30+ digital marketing experts",
];

export const DMComparisonSection = () => (
  <section className="py-8 md:py-16 lg:py-24 bg-foreground">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-6 md:mb-14">
        <span className="inline-block px-3 py-1 bg-brand/20 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/30">The Difference</span>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
          Traditional Agency vs Our <span className="text-brand">Digital Marketing Agency in Bangalore</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300">See why 300+ Bangalore businesses switched to The Super 30</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div className="h-1 bg-gray-500" />
          <div className="p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Generic Agency</h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">Outdated approach</p>
            <ul className="space-y-3">
              {traditionalItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 p-3 bg-white/5 rounded-xl border border-white/10 text-center">
              <span className="text-xl sm:text-2xl font-bold text-gray-400">1.5-2x</span>
              <p className="text-xs text-gray-500">Typical Marketing ROI</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-brand/30 rounded-xl overflow-hidden">
          <div className="h-1 bg-brand" />
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg sm:text-xl font-bold text-white">The Super 30</h3>
              <span className="px-2 py-0.5 bg-brand/20 text-brand text-[10px] sm:text-xs font-bold rounded-full border border-brand/30">RECOMMENDED</span>
            </div>
            <p className="text-xs sm:text-sm text-brand mb-4 sm:mb-6">Integrated Digital Marketing</p>
            <ul className="space-y-3">
              {integratedItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium text-xs sm:text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 p-3 bg-brand/10 rounded-xl border border-brand/30 text-center">
              <span className="text-xl sm:text-2xl font-bold text-brand">5-8x</span>
              <p className="text-xs text-brand font-medium">Average Marketing ROI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
