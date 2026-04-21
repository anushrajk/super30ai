import { useState } from "react";
import { ClipboardCheck, Map, Rocket, TrendingUp, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Free Brand Audit",
    timeline: "Week 1",
    description: "We analyse your website, current rankings, competitor landscape, ad account performance, and social presence. You receive a detailed audit report regardless of whether you proceed.",
  },
  {
    icon: Map,
    number: "02",
    title: "Strategy & Roadmap",
    timeline: "Week 1–2",
    description: "Based on the audit, we build a 90-day growth roadmap with channel priorities, budget allocation, keyword strategy, and KPI benchmarks.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Campaign Setup & Launch",
    timeline: "Week 2–3",
    description: "Technical SEO fixes, PPC campaign builds, content calendar creation, tracking setup (GA4, GTM, conversion events), and creative production.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Optimisation & Scaling",
    timeline: "Month 1+",
    description: "Weekly performance reviews, A/B testing, bid adjustments, content publishing, and link building. Monthly strategy calls to review results.",
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Reporting & Transparency",
    timeline: "Ongoing",
    description: "Live dashboard access, monthly detailed reports, quarterly business reviews with growth benchmarks and projections.",
  },
];

export const DMProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <span className="text-brand text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-4">
              Our AI-Driven <span className="text-brand">Process for Predictable Success</span>
            </h2>
            <p className="text-muted-foreground text-base">
              We believe in a structured approach to growth. Our <span className="text-foreground font-semibold">digital marketing services in Bangalore</span> follow a four-step process designed to study your market, launch smart campaigns and scale your revenue.
            </p>
          </div>

          {/* Steps - Horizontal tabs */}
          <div className="mb-10">
            <div className="flex gap-0 border-b border-border/50 overflow-x-auto no-scrollbar">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`flex-1 min-w-[140px] flex flex-col items-center gap-2 py-5 px-4 text-center relative transition-all duration-300 ${
                    i === activeIndex ? "text-foreground" : "text-muted-foreground hover:text-foreground/70"
                  }`}
                >
                  <span className={`text-[10px] font-mono tracking-widest ${i === activeIndex ? "text-brand" : ""}`}>
                    {step.number}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
                    {step.title}
                  </span>
                  {/* Active indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                    i === activeIndex ? "bg-brand" : "bg-transparent"
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center">
                  <ActiveIcon className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <span className="text-xs text-brand font-semibold uppercase tracking-wider">{active.timeline}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">{active.title}</h3>
                </div>
              </div>

              <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
                {active.description}
              </p>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 text-brand font-semibold text-sm group"
              >
                Get started with step {active.number}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right: Visual stepper */}
            <div className="bg-muted/40 border border-border/50 rounded-2xl p-8">
              <div className="space-y-0">
                {steps.map((step, i) => {
                  const StepIcon = step.icon;
                  const isActive = i === activeIndex;
                  const isPast = i < activeIndex;
                  return (
                    <div key={i} className="flex gap-4">
                      {/* Vertical line + dot */}
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isActive ? "bg-brand text-white scale-110" : isPast ? "bg-brand/20 text-brand" : "bg-muted text-muted-foreground"
                        }`}>
                          <StepIcon className="w-3.5 h-3.5" />
                        </div>
                        {i < steps.length - 1 && (
                          <div className={`w-px flex-1 min-h-[32px] transition-colors duration-300 ${
                            isPast ? "bg-brand/30" : "bg-border/50"
                          }`} />
                        )}
                      </div>
                      {/* Text */}
                      <div className="pb-6">
                        <span className={`text-sm font-semibold block transition-colors duration-300 ${
                          isActive ? "text-foreground" : "text-muted-foreground"
                        }`}>
                          {step.title}
                        </span>
                        <span className={`text-xs transition-colors duration-300 ${
                          isActive ? "text-brand" : "text-muted-foreground/50"
                        }`}>
                          {step.timeline}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
