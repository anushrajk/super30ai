const caseStudies = [
  {
    industry: "E-commerce Brand",
    location: "Koramangala, Bangalore",
    challenge: "Zero organic presence, entirely dependent on paid ads with 1.2x ROAS",
    solution: "6-month SEO roadmap + Google Shopping campaign restructure + Meta retargeting",
    results: ["340% increase in organic traffic", "ROAS improved from 1.2x to 4.1x", "62% reduction in cost-per-lead"],
    timeframe: "Results visible from Month 2; full impact by Month 6",
  },
  {
    industry: "SaaS Startup",
    location: "HSR Layout, Bangalore",
    challenge: "High customer acquisition cost with no organic lead pipeline and low brand visibility in a crowded market",
    solution: "Product-led SEO strategy + LinkedIn demand generation + content-led thought leadership",
    results: ["280% growth in organic signups", "Cost-per-lead reduced by 54%", "Featured in 3 industry publications"],
    timeframe: "Pipeline impact from Month 3; sustained growth by Month 8",
  },
  {
    industry: "Real Estate Developer",
    location: "Whitefield, Bangalore",
    challenge: "Dependence on offline sales channels with declining walk-ins and no digital lead generation system",
    solution: "Hyper-local Google Ads + WhatsApp lead funnels + video content for project launches",
    results: ["520+ qualified leads in first quarter", "4.2x ROAS on Google Ads", "38% of bookings from digital channels"],
    timeframe: "First leads within Week 2; full funnel operational by Month 2",
  },
];

export const DMCaseStudySection = () => (
  <section className="py-8 md:py-16 lg:py-24 bg-muted/20">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-6 md:mb-14">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
          Real Results
        </span>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
          Real Results for <span className="text-brand">Bangalore Businesses</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 max-w-6xl mx-auto">
        {caseStudies.map((cs, i) => (
          <div key={i} className="bg-white border border-border/50 rounded-xl p-4 sm:p-6">
            <div className="mb-3">
              <h3 className="text-sm sm:text-base font-bold text-foreground">{cs.industry}</h3>
              <span className="text-xs text-muted-foreground">{cs.location}</span>
            </div>
            <div className="mb-3">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Challenge</h4>
              <p className="text-xs sm:text-sm text-foreground leading-relaxed">{cs.challenge}</p>
            </div>
            <div className="mb-3">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">What We Did</h4>
              <p className="text-xs sm:text-sm text-foreground leading-relaxed">{cs.solution}</p>
            </div>
            <div className="mb-3">
              <h4 className="text-xs font-semibold text-brand uppercase tracking-wider mb-1">Results</h4>
              <ul className="space-y-1">
                {cs.results.map((r, ri) => (
                  <li key={ri} className="flex items-start gap-2 text-xs sm:text-sm text-foreground font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-1.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground italic">{cs.timeframe}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
