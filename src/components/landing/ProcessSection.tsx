import { Search, Layers, Rocket, TrendingUp, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description: "AI audit & strategy"
  },
  {
    icon: Layers,
    number: "02",
    title: "Foundation",
    description: "Technical setup"
  },
  {
    icon: Rocket,
    number: "03",
    title: "Optimization",
    description: "Content & entity work"
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Growth",
    description: "Scale & iterate"
  }
];

export const ProcessSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-8 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-brand/20 bg-brand/5 text-brand text-xs font-semibold uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] text-foreground mb-4">
            Our 4-step AI SEO process for <span className="text-brand">300% traffic growth</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We follow a strict path to success. From deep audits to multi-channel execution, our{" "}
            <span className="text-foreground font-semibold">SEO services in Bangalore</span> ensure your growth is
            predictable, scalable and built for the long term.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group rounded-xl border border-border bg-card p-5 md:p-6 hover:border-brand/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-11 h-11 rounded-xl bg-brand/10 group-hover:bg-brand flex items-center justify-center flex-shrink-0 transition-colors">
                  <step.icon className="w-5 h-5 text-brand group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-sm font-semibold tabular-nums text-muted-foreground">{step.number}</span>
              </div>
              <div className="flex items-end justify-between gap-3">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-brand flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
