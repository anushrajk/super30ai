const trustSignals = [
  { what: "Full transparency, no black-box reporting", why: "You get a live dashboard with real-time access to your campaign data — spend, leads, rankings, ROAS — 24/7. No waiting for monthly reports to know what's happening." },
  { what: "No lock-in contracts", why: "We earn your trust month after month. All retainers are monthly — cancel anytime with 30 days notice. We're confident enough in our results not to need a 12-month trap." },
  { what: "100% in-house execution", why: "No work is outsourced to freelancers or offshore teams. Your campaigns are managed by certified in-house specialists with deep vertical expertise." },
  { what: "Google & Meta Partner Certified", why: "Our PPC and social media teams hold active Google Partner and Meta Business Partner certifications — meaning your campaigns meet the highest standards of platform expertise." },
  { what: "Dedicated account manager", why: "One point of contact who knows your brand, your goals, and your competitive landscape. No rotating juniors, no chasing people across departments." },
  { what: "AI + Human strategy", why: "We use AI-powered tools for audience research, bid optimisation, and content strategy — but every campaign decision is reviewed and owned by a senior strategist." },
];

export const DMBenefitsSection = () => (
  <section className="py-8 md:py-14 lg:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
          Why Choose Us
        </span>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
          Why 200+ Brands Choose Our <span className="text-brand">Digital Marketing Company in Bangalore</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          In a city with hundreds of agencies, here is what separates a good agency from the right agency for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto">
        {trustSignals.map((signal, i) => (
          <div key={i} className="bg-white border border-border/50 rounded-xl p-4 md:p-6">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-2">{signal.what}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{signal.why}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
