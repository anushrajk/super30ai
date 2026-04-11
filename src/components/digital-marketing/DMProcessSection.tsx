import { useEffect, useRef, useState } from "react";
import { ClipboardCheck, Map, Rocket, TrendingUp, BarChart3 } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, number: "01", title: "Free Brand Audit", timeline: "Week 1", description: "We analyse your website, current rankings, competitor landscape, ad account performance, and social presence. You receive a detailed audit report regardless of whether you proceed." },
  { icon: Map, number: "02", title: "Strategy & Roadmap", timeline: "Week 1–2", description: "Based on the audit, we build a 90-day growth roadmap with channel priorities, budget allocation, keyword strategy, and KPI benchmarks." },
  { icon: Rocket, number: "03", title: "Campaign Setup & Launch", timeline: "Week 2–3", description: "Technical SEO fixes, PPC campaign builds, content calendar creation, tracking setup (GA4, GTM, conversion events), and creative production." },
  { icon: TrendingUp, number: "04", title: "Optimisation & Scaling", timeline: "Month 1+", description: "Weekly performance reviews, A/B testing, bid adjustments, content publishing, and link building. Monthly strategy calls to review results and plan the next cycle." },
  { icon: BarChart3, number: "05", title: "Reporting & Transparency", timeline: "Ongoing", description: "Live dashboard access, monthly detailed reports, quarterly business reviews with growth benchmarks and projections." },
];

export const DMProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.scrollHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / sectionHeight));
      const index = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-muted/30"
      style={{ height: `${(steps.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left: Header + Progress */}
            <div>
              <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-4 border border-brand/20">
                How We Work
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                Our Proven <span className="text-brand">Digital Marketing Process</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-10 max-w-md">
                Every engagement follows a structured, repeatable process designed to minimise wasted spend and accelerate results.
              </p>

              {/* Step indicators */}
              <div className="flex flex-col gap-1">
                {steps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (!sectionRef.current) return;
                      const sectionTop = sectionRef.current.offsetTop;
                      const sectionHeight = sectionRef.current.scrollHeight - window.innerHeight;
                      const targetScroll = sectionTop + (i / steps.length) * sectionHeight;
                      window.scrollTo({ top: targetScroll, behavior: "smooth" });
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                      i === activeIndex
                        ? "bg-brand/10 border border-brand/20"
                        : i < activeIndex
                        ? "opacity-60"
                        : "opacity-40"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors duration-300 ${
                        i === activeIndex
                          ? "bg-brand text-white"
                          : i < activeIndex
                          ? "bg-brand/20 text-brand"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step.number}
                    </div>
                    <span
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        i === activeIndex ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Active step card */}
            <div className="relative flex items-center justify-center min-h-[360px]">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = i === activeIndex;

                return (
                  <div
                    key={i}
                    className="absolute inset-0 flex items-center justify-center transition-all duration-500"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0) scale(1)"
                        : i < activeIndex
                        ? "translateY(-40px) scale(0.95)"
                        : "translateY(40px) scale(0.95)",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <div className="w-full max-w-lg bg-card border-2 border-border/50 rounded-3xl p-8 sm:p-10 shadow-xl">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-brand flex items-center justify-center shadow-lg">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <span className="inline-block px-2.5 py-0.5 bg-brand/10 text-brand text-xs font-semibold rounded-full mb-1">
                            {step.timeline}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                      <div className="mt-6 flex items-center gap-2">
                        {steps.map((_, j) => (
                          <div
                            key={j}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              j === activeIndex
                                ? "w-8 bg-brand"
                                : j < activeIndex
                                ? "w-4 bg-brand/30"
                                : "w-4 bg-muted"
                            }`}
                          />
                        ))}
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
