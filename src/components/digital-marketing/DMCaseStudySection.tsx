import { TrendingUp, ArrowDown, Target } from "lucide-react";

const caseStudies = [
  {
    industry: "E-commerce Brand",
    location: "Koramangala, Bangalore",
    challenge: "Zero organic presence, entirely dependent on paid ads with 1.2x ROAS",
    solution: "6-month SEO roadmap + Google Shopping campaign restructure + Meta retargeting",
    results: [
      { icon: TrendingUp, value: "340%", label: "increase in organic traffic" },
      { icon: Target, value: "4.1x", label: "ROAS (up from 1.2x)" },
      { icon: ArrowDown, value: "62%", label: "reduction in cost-per-lead" },
    ],
    timeframe: "Results visible from Month 2; full impact by Month 6",
  },
  {
    industry: "SaaS Startup",
    location: "HSR Layout, Bangalore",
    challenge: "High CAC with no organic lead pipeline and low brand visibility in a crowded market",
    solution: "Product-led SEO strategy + LinkedIn demand generation + content thought leadership",
    results: [
      { icon: TrendingUp, value: "280%", label: "growth in organic signups" },
      { icon: ArrowDown, value: "54%", label: "reduction in cost-per-lead" },
      { icon: Target, value: "3", label: "industry publication features" },
    ],
    timeframe: "Pipeline impact from Month 3; sustained growth by Month 8",
  },
  {
    industry: "Real Estate Developer",
    location: "Whitefield, Bangalore",
    challenge: "Dependence on offline sales with declining walk-ins and no digital lead system",
    solution: "Hyper-local Google Ads + WhatsApp lead funnels + video content for launches",
    results: [
      { icon: Target, value: "520+", label: "qualified leads in Q1" },
      { icon: TrendingUp, value: "4.2x", label: "ROAS on Google Ads" },
      { icon: TrendingUp, value: "38%", label: "bookings from digital" },
    ],
    timeframe: "First leads within Week 2; full funnel operational by Month 2",
  },
];

export const DMCaseStudySection = () => (
  <section className="py-12 md:py-20 lg:py-28 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
          Real Results
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
          Real Results for <span className="text-brand">Bangalore Businesses</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {caseStudies.map((cs, i) => (
          <div
            key={i}
            className="bg-card border border-border/50 rounded-2xl overflow-hidden animate-fade-in"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {/* Header */}
            <div className="bg-foreground p-5">
              <h3 className="text-base sm:text-lg font-bold text-white">{cs.industry}</h3>
              <span className="text-xs text-gray-400">{cs.location}</span>
            </div>

            <div className="p-5 sm:p-6">
              {/* Challenge */}
              <div className="mb-4">
                <h4 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Challenge</h4>
                <p className="text-xs sm:text-sm text-foreground leading-relaxed">{cs.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-5">
                <h4 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">What We Did</h4>
                <p className="text-xs sm:text-sm text-foreground leading-relaxed">{cs.solution}</p>
              </div>

              {/* Results as mini stat cards */}
              <div className="space-y-2.5 mb-4">
                {cs.results.map((r, ri) => (
                  <div key={ri} className="flex items-center gap-3 bg-brand/5 rounded-xl p-3">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <r.icon className="w-4 h-4 text-brand" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-brand">{r.value}</span>
                      <span className="text-xs text-muted-foreground ml-1.5">{r.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[10px] sm:text-xs text-muted-foreground italic">{cs.timeframe}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
