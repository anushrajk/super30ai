import { useState } from "react";
import { Eye, Unlock, UserCheck, Award, Headphones, Brain, ChevronDown } from "lucide-react";

const trustSignals = [
  { icon: Eye, what: "Full transparency, no black-box reporting", why: "You get a live dashboard with real-time access to your campaign data — spend, leads, rankings, ROAS — 24/7. No waiting for monthly reports to know what's happening." },
  { icon: Unlock, what: "No lock-in contracts", why: "We earn your trust month after month. All retainers are monthly — cancel anytime with 30 days notice. We're confident enough in our results not to need a 12-month trap." },
  { icon: UserCheck, what: "100% in-house execution", why: "No work is outsourced to freelancers or offshore teams. Your campaigns are managed by certified in-house specialists with deep vertical expertise." },
  { icon: Award, what: "Google & Meta Partner Certified", why: "Our PPC and social media teams hold active Google Partner and Meta Business Partner certifications — meaning your campaigns meet the highest standards of platform expertise." },
  { icon: Headphones, what: "Dedicated account manager", why: "One point of contact who knows your brand, your goals, and your competitive landscape. No rotating juniors, no chasing people across departments." },
  { icon: Brain, what: "AI + Human strategy", why: "We use AI-powered tools for audience research, bid optimisation, and content strategy — but every campaign decision is reviewed and owned by a senior strategist." },
];

const BenefitCard = ({ signal, index }: { signal: typeof trustSignals[0]; index: number }) => {
  const [open, setOpen] = useState(index === 0);
  const Icon = signal.icon;

  return (
    <div
      className={`group relative rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
        open
          ? "border-brand/30 bg-gradient-to-br from-brand/5 via-background to-background shadow-lg"
          : "border-border/40 bg-background hover:border-brand/20"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 sm:gap-5 p-5 sm:p-7 text-left"
      >
        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
          open ? "bg-brand/15" : "bg-brand/8"
        }`}>
          <Icon className={`w-6 h-6 sm:w-7 sm:h-7 text-brand transition-transform duration-300 ${open ? "scale-110" : ""}`} />
        </div>
        <span className="flex-1 text-base sm:text-lg font-bold text-foreground leading-snug">
          {signal.what}
        </span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-7 pb-6 sm:pb-7 pl-[84px] sm:pl-[104px]">
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {signal.why}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DMBenefitsSection = () => (
  <section className="py-12 md:py-20 lg:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
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

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {trustSignals.map((signal, i) => (
          <BenefitCard key={i} signal={signal} index={i} />
        ))}
      </div>
    </div>
  </section>
);
