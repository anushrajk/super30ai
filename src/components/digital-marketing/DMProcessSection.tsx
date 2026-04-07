const steps = [
  { number: "01", title: "Deep Discovery & Audit", description: "Complete audit of your digital presence, competitors, and market position — tailored for Bangalore's competitive landscape." },
  { number: "02", title: "Custom Strategy Blueprint", description: "A bespoke digital marketing roadmap with channel priorities, budget allocation, content calendar & KPI targets." },
  { number: "03", title: "Multi-Channel Execution", description: "Our 30+ in-house experts launch SEO, ads, social, email & web campaigns simultaneously with continuous optimization." },
  { number: "04", title: "Optimize, Report & Scale", description: "A/B testing, cross-channel attribution, weekly strategy reviews & continuous scaling for compounding growth." },
];

export const DMProcessSection = () => (
  <section className="py-8 md:py-16 lg:py-24 bg-muted/20">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-6 md:mb-14">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">How Our Digital Marketing Agency Works</span>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
          Our Proven <span className="text-brand">Digital Marketing Process</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          A structured, results-driven approach used by our digital marketing agency in Bangalore to deliver predictable, scalable growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {steps.map((step, i) => (
          <div key={i} className="bg-white border border-border/50 rounded-xl p-4 md:p-6 text-center">
            <div className="text-3xl md:text-5xl font-bold text-brand/20 mb-2">{step.number}</div>
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
