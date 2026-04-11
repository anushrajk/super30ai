import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    industry: "E-commerce Brand",
    location: "Koramangala, Bangalore",
    before: [
      { metric: "Organic Traffic", value: "1,200/mo" },
      { metric: "ROAS", value: "1.2x" },
      { metric: "Cost Per Lead", value: "₹580" },
    ],
    after: [
      { metric: "Organic Traffic", value: "5,280/mo", highlight: true },
      { metric: "ROAS", value: "4.1x", highlight: true },
      { metric: "Cost Per Lead", value: "₹220", highlight: true },
    ],
    strategy: "SEO roadmap + Google Shopping restructure + Meta retargeting",
    timeframe: "6 months",
  },
  {
    industry: "SaaS Startup",
    location: "HSR Layout, Bangalore",
    before: [
      { metric: "Organic Signups", value: "45/mo" },
      { metric: "CAC", value: "₹2,400" },
      { metric: "Brand Mentions", value: "0" },
    ],
    after: [
      { metric: "Organic Signups", value: "171/mo", highlight: true },
      { metric: "CAC", value: "₹1,100", highlight: true },
      { metric: "Brand Mentions", value: "3 publications", highlight: true },
    ],
    strategy: "Product-led SEO + LinkedIn demand gen + thought leadership",
    timeframe: "8 months",
  },
  {
    industry: "Real Estate Developer",
    location: "Whitefield, Bangalore",
    before: [
      { metric: "Digital Leads", value: "12/mo" },
      { metric: "Google Ads ROAS", value: "0.8x" },
      { metric: "Digital Bookings", value: "0%" },
    ],
    after: [
      { metric: "Digital Leads", value: "173/mo", highlight: true },
      { metric: "Google Ads ROAS", value: "4.2x", highlight: true },
      { metric: "Digital Bookings", value: "38%", highlight: true },
    ],
    strategy: "Hyper-local Google Ads + WhatsApp funnels + video content",
    timeframe: "3 months",
  },
];

export const DMCaseStudySection = () => (
  <section className="py-12 md:py-20 lg:py-28 bg-card relative overflow-hidden">
    {/* Subtle decorative */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
          Real Results
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
          Before & After: <span className="text-brand">Bangalore Businesses</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          See the measurable impact our digital marketing delivers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {caseStudies.map((cs, i) => (
          <div key={i} className="bg-background border border-border/40 rounded-3xl overflow-hidden shadow-[0_8px_30px_-12px_hsl(var(--foreground)/0.04)]">
            {/* Header */}
            <div className="px-6 pt-6 pb-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-brand" />
                <h3 className="text-lg font-bold text-foreground">{cs.industry}</h3>
              </div>
              <p className="text-xs text-muted-foreground pl-4">{cs.location}</p>
            </div>

            {/* Before / After comparison */}
            <div className="px-6 pb-5">
              <div className="grid grid-cols-[1fr_auto_1fr] gap-0 items-stretch">
                {/* Before column */}
                <div>
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-3 text-center">Before</div>
                  <div className="space-y-2.5">
                    {cs.before.map((b, bi) => (
                      <div key={bi} className="text-center py-3 px-2 bg-muted/40 rounded-xl border border-border/30">
                        <div className="text-lg sm:text-xl font-bold text-muted-foreground">{b.value}</div>
                        <div className="text-[10px] text-muted-foreground/60 mt-0.5">{b.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow divider */}
                <div className="flex flex-col items-center justify-center px-3 gap-2.5 pt-6">
                  {cs.before.map((_, bi) => (
                    <div key={bi} className="h-[56px] sm:h-[62px] flex items-center">
                      <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-brand" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* After column */}
                <div>
                  <div className="text-[10px] font-semibold text-brand uppercase tracking-widest mb-3 text-center">After</div>
                  <div className="space-y-2.5">
                    {cs.after.map((a, ai) => (
                      <div key={ai} className="text-center py-3 px-2 bg-brand/[0.06] border border-brand/15 rounded-xl">
                        <div className="text-lg sm:text-xl font-bold text-brand">{a.value}</div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">{a.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-border/20 bg-muted/20">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Strategy:</span> {cs.strategy}
              </p>
              <div className="flex items-center gap-1.5 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand/50" />
                <p className="text-[10px] text-muted-foreground/60">Results in {cs.timeframe}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
