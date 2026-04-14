import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    industry: "E-commerce Brand",
    location: "Koramangala, Bangalore",
    metrics: [
      { label: "Organic Traffic", before: "1,200/mo", after: "5,280/mo", change: "+340%" },
      { label: "ROAS", before: "1.2x", after: "4.1x", change: "+242%" },
      { label: "Cost Per Lead", before: "₹580", after: "₹220", change: "-62%" },
    ],
    strategy: "SEO roadmap + Google Shopping restructure + Meta retargeting",
    timeframe: "6 months",
  },
  {
    industry: "SaaS Startup",
    location: "HSR Layout, Bangalore",
    metrics: [
      { label: "Organic Signups", before: "45/mo", after: "171/mo", change: "+280%" },
      { label: "CAC", before: "₹2,400", after: "₹1,100", change: "-54%" },
      { label: "Brand Mentions", before: "0", after: "3 pubs", change: "New" },
    ],
    strategy: "Product-led SEO + LinkedIn demand gen + thought leadership",
    timeframe: "8 months",
  },
  {
    industry: "Real Estate Developer",
    location: "Whitefield, Bangalore",
    metrics: [
      { label: "Digital Leads", before: "12/mo", after: "173/mo", change: "+1342%" },
      { label: "Google Ads ROAS", before: "0.8x", after: "4.2x", change: "+425%" },
      { label: "Digital Bookings", before: "0%", after: "38%", change: "New" },
    ],
    strategy: "Hyper-local Google Ads + WhatsApp funnels + video content",
    timeframe: "3 months",
  },
];

export const DMCaseStudySection = () => (
  <section className="py-20 md:py-28 lg:py-36 bg-card relative">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-20">
          <div>
            <span className="text-brand text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Real Results
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
              Before & after:<br className="hidden md:block" />
              <span className="text-brand"> Bangalore businesses</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm">
            See the measurable impact our digital marketing delivers for real clients.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="bg-background border border-border/40 rounded-2xl overflow-hidden group hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-foreground">{cs.industry}</h3>
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-brand/10 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-brand transition-colors" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{cs.location} · {cs.timeframe}</p>
              </div>

              {/* Metrics */}
              <div className="px-6 pb-6">
                <div className="space-y-3">
                  {cs.metrics.map((m, mi) => (
                    <div key={mi} className="flex items-center justify-between py-3 border-b border-border/30 last:border-b-0">
                      <div>
                        <div className="text-xs text-muted-foreground mb-0.5">{m.label}</div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground/60 line-through">{m.before}</span>
                          <span className="text-sm font-bold text-foreground">{m.after}</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-brand bg-brand/8 px-2.5 py-1 rounded-full">
                        {m.change}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-muted/30 border-t border-border/20">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Strategy:</span> {cs.strategy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
