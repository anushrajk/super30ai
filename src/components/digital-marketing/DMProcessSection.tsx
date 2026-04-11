import { useEffect, useRef, useState } from "react";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const totalScroll = section.offsetHeight - window.innerHeight;

      if (totalScroll <= 0) return;

      const scrolled = Math.max(0, -sectionTop);
      const progress = Math.min(1, scrolled / totalScroll);
      const idx = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      setActiveIndex(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-muted/30"
      style={{ minHeight: `${steps.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center max-w-6xl mx-auto">
            {/* Left side */}
            <div>
              <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-4 border border-brand/20">
                How We Work
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                Our Proven <span className="text-brand">Digital Marketing Process</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-md">
                Every engagement follows a structured, repeatable process designed to minimise wasted spend and accelerate results.
              </p>

              {/* Step list */}
              <div className="flex flex-col gap-0.5">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  const isActive = i === activeIndex;
                  const isPast = i < activeIndex;

                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-400 cursor-pointer ${
                        isActive
                          ? "bg-brand/10"
                          : ""
                      }`}
                      onClick={() => {
                        if (!sectionRef.current) return;
                        const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
                        const totalScroll = sectionRef.current.offsetHeight - window.innerHeight;
                        window.scrollTo({ top: sectionTop + (i / steps.length) * totalScroll + 10, behavior: "smooth" });
                      }}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isActive
                            ? "bg-brand text-white shadow-md"
                            : isPast
                            ? "bg-brand/20 text-brand"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={`text-sm font-semibold block transition-colors duration-300 ${
                          isActive ? "text-foreground" : "text-muted-foreground"
                        }`}>
                          {step.title}
                        </span>
                        {isActive && (
                          <span className="text-xs text-brand font-medium">{step.timeline}</span>
                        )}
                      </div>
                      {/* Progress bar */}
                      <div className={`w-1.5 h-8 rounded-full overflow-hidden transition-colors duration-300 ${
                        isActive ? "bg-brand" : isPast ? "bg-brand/30" : "bg-muted"
                      }`} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Card with image */}
            <div className="relative min-h-[420px] sm:min-h-[480px]">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = i === activeIndex;

                return (
                  <div
                    key={i}
                    className="absolute inset-0 transition-all duration-500 ease-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0) scale(1)"
                        : i < activeIndex
                        ? "translateY(-30px) scale(0.97)"
                        : "translateY(30px) scale(0.97)",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <div className="bg-card border border-border/50 rounded-3xl overflow-hidden shadow-xl h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-48 sm:h-56 overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          width={800}
                          height={512}
                        />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-brand text-white text-xs font-bold rounded-full">
                          Step {step.number}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 sm:p-8 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-brand" />
                          </div>
                          <div>
                            <span className="text-xs text-brand font-semibold">{step.timeline}</span>
                            <h3 className="text-lg sm:text-xl font-bold text-foreground">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                          {step.description}
                        </p>
                        {/* Dots */}
                        <div className="flex items-center gap-1.5 mt-5">
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
