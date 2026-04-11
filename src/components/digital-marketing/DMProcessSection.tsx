const steps = [
  { number: "01", title: "Free Brand Audit", timeline: "Week 1", description: "We analyse your website, current rankings, competitor landscape, ad account performance, and social presence. You receive a detailed audit report regardless of whether you proceed." },
  { number: "02", title: "Strategy & Roadmap", timeline: "Week 1–2", description: "Based on the audit, we build a 90-day growth roadmap with channel priorities, budget allocation, keyword strategy, and KPI benchmarks." },
  { number: "03", title: "Campaign Setup & Launch", timeline: "Week 2–3", description: "Technical SEO fixes, PPC campaign builds, content calendar creation, tracking setup (GA4, GTM, conversion events), and creative production." },
  { number: "04", title: "Optimisation & Scaling", timeline: "Month 1+", description: "Weekly performance reviews, A/B testing, bid adjustments, content publishing, and link building. Monthly strategy calls to review results and plan the next cycle." },
  { number: "05", title: "Reporting & Transparency", timeline: "Ongoing", description: "Live dashboard access, monthly detailed reports, quarterly business reviews with growth benchmarks and projections." },
];

export const DMProcessSection = () => (
  <section className="py-8 md:py-16 lg:py-24 bg-muted/20">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-6 md:mb-14">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
          How We Work
        </span>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
          Our Proven <span className="text-brand">Digital Marketing Process</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          Every engagement follows a structured, repeatable process designed to minimise wasted spend and accelerate results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="bg-white border border-border/50 rounded-xl p-4 md:p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand/20 mb-1">{step.number}</div>
            <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">{step.title}</h3>
            <span className="inline-block text-[10px] sm:text-xs text-brand font-medium mb-2">{step.timeline}</span>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
