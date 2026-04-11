import { Eye, Unlock, UserCheck, Award, Headphones, Brain } from "lucide-react";

const trustSignals = [
  { icon: Eye, what: "Full transparency, no black-box reporting", why: "You get a live dashboard with real-time access to your campaign data — spend, leads, rankings, ROAS — 24/7. No waiting for monthly reports to know what's happening." },
  { icon: Unlock, what: "No lock-in contracts", why: "We earn your trust month after month. All retainers are monthly — cancel anytime with 30 days notice. We're confident enough in our results not to need a 12-month trap." },
  { icon: UserCheck, what: "100% in-house execution", why: "No work is outsourced to freelancers or offshore teams. Your campaigns are managed by certified in-house specialists with deep vertical expertise." },
  { icon: Award, what: "Google & Meta Partner Certified", why: "Our PPC and social media teams hold active Google Partner and Meta Business Partner certifications — meaning your campaigns meet the highest standards of platform expertise." },
  { icon: Headphones, what: "Dedicated account manager", why: "One point of contact who knows your brand, your goals, and your competitive landscape. No rotating juniors, no chasing people across departments." },
  { icon: Brain, what: "AI + Human strategy", why: "We use AI-powered tools for audience research, bid optimisation, and content strategy — but every campaign decision is reviewed and owned by a senior strategist." },
];

export const DMBenefitsSection = () => (
  <section className="py-12 md:py-20 lg:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
          Why Choose Us
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
          Why 200+ Brands Choose Our <span className="text-brand">Digital Marketing Company in Bangalore</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          In a city with hundreds of agencies, here is what separates a good agency from the right agency for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {trustSignals.map((signal, i) => (
          <div
            key={i}
            className="bg-card border border-border/50 rounded-2xl p-5 md:p-7 animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
              <signal.icon className="w-6 h-6 text-brand" />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-2">{signal.what}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{signal.why}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
