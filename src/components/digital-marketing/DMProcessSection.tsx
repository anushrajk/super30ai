import { useState } from "react";
import { ClipboardCheck, Map, Rocket, TrendingUp, BarChart3 } from "lucide-react";
import stepAudit from "@/assets/process/step-audit.jpg";
import stepStrategy from "@/assets/process/step-strategy.jpg";
import stepLaunch from "@/assets/process/step-launch.jpg";
import stepOptimize from "@/assets/process/step-optimize.jpg";
import stepReporting from "@/assets/process/step-reporting.jpg";

const steps = [
  { icon: ClipboardCheck, number: "01", title: "Free Brand Audit", timeline: "Week 1", image: stepAudit, description: "We analyse your website, current rankings, competitor landscape, ad account performance, and social presence. You receive a detailed audit report regardless of whether you proceed." },
  { icon: Map, number: "02", title: "Strategy & Roadmap", timeline: "Week 1–2", image: stepStrategy, description: "Based on the audit, we build a 90-day growth roadmap with channel priorities, budget allocation, keyword strategy, and KPI benchmarks." },
  { icon: Rocket, number: "03", title: "Campaign Setup & Launch", timeline: "Week 2–3", image: stepLaunch, description: "Technical SEO fixes, PPC campaign builds, content calendar creation, tracking setup (GA4, GTM, conversion events), and creative production." },
  { icon: TrendingUp, number: "04", title: "Optimisation & Scaling", timeline: "Month 1+", image: stepOptimize, description: "Weekly performance reviews, A/B testing, bid adjustments, content publishing, and link building. Monthly strategy calls to review results and plan the next cycle." },
  { icon: BarChart3, number: "05", title: "Reporting & Transparency", timeline: "Ongoing", image: stepReporting, description: "Live dashboard access, monthly detailed reports, quarterly business reviews with growth benchmarks and projections." },
];

export const DMProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14">
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
            How We Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
            Our Proven <span className="text-brand">Digital Marketing Process</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Every engagement follows a structured, repeatable process designed to minimise wasted spend and accelerate results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start max-w-6xl mx-auto">
          {/* Left: Step list */}
          <div className="flex flex-col gap-1 bg-card rounded-2xl border border-border/40 p-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === activeIndex;

              return (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all duration-300 ${
                    isActive ? "bg-brand/10 border border-brand/20" : "border border-transparent hover:bg-muted/50"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive ? "bg-brand text-white" : "bg-muted text-muted-foreground"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`text-sm sm:text-base font-semibold block transition-colors duration-300 ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {step.title}
                    </span>
                    {isActive && (
                      <span className="text-xs text-brand font-medium">{step.timeline}</span>
                    )}
                  </div>
                  <div className={`w-1.5 h-8 rounded-full transition-all duration-300 ${
                    isActive ? "bg-brand" : i < activeIndex ? "bg-brand/30" : "bg-muted"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right: Active card */}
          <div className="bg-card border border-border/40 rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_hsl(var(--foreground)/0.06)]">
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-full object-cover transition-opacity duration-300"
                loading="lazy"
                width={800}
                height={512}
                key={activeIndex}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-brand text-white text-xs font-bold rounded-full">
                Step {active.number}
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                  <ActiveIcon className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <span className="text-xs text-brand font-semibold">{active.timeline}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">{active.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {active.description}
              </p>
              <div className="flex items-center gap-1.5 mt-6">
                {steps.map((_, j) => (
                  <div
                    key={j}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      j === activeIndex ? "w-8 bg-brand" : j < activeIndex ? "w-3 bg-brand/30" : "w-3 bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
