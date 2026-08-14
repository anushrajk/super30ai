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
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="border-t border-border pt-4 mb-6 md:mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            How It Works
          </span>
        </div>

        <div
          className={`grid lg:grid-cols-12 gap-4 md:gap-10 items-start mb-8 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="lg:col-span-7 text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight leading-[1.05] text-foreground">
            Our 4-step AI SEO process for <span className="text-brand">300% traffic growth</span>
          </h2>
          <p className="lg:col-span-5 text-base md:text-lg text-muted-foreground lg:pt-2">
            We follow a strict path to success. From deep audits to multi-channel execution, our{" "}
            <span className="text-foreground font-semibold">SEO services in Bangalore</span> ensure your growth is
            predictable, scalable and built for the long term.
          </p>
        </div>

        <div className="rounded-2xl border border-border overflow-hidden">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group grid grid-cols-12 gap-3 md:gap-6 items-center px-5 md:px-8 py-5 md:py-7 border-b border-border last:border-b-0 bg-card hover:bg-foreground hover:text-background transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="col-span-2 md:col-span-1 text-sm font-semibold tabular-nums text-muted-foreground group-hover:text-background/60">
                {step.number}
              </div>
              <div className="col-span-10 md:col-span-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand/10 group-hover:bg-brand flex items-center justify-center flex-shrink-0 transition-colors">
                  <step.icon className="w-4 h-4 text-brand group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base md:text-xl font-bold uppercase tracking-tight">{step.title}</h3>
              </div>
              <p className="col-span-12 md:col-span-6 text-sm text-muted-foreground group-hover:text-background/70 pl-12 md:pl-0">
                {step.description}
              </p>
              <div className="hidden md:flex md:col-span-1 justify-end">
                <div className="w-9 h-9 rounded-full border border-border group-hover:border-brand group-hover:bg-brand flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
