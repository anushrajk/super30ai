import { Button } from "@/components/ui/button";
import { Bot, TrendingDown, FileX, DollarSign, ArrowRight, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  {
    icon: Bot,
    title: "AI Platforms Do Not Feature Your Business",
    description: "ChatGPT and Perplexity reference competitors rather than your brand."
  },
  {
    icon: TrendingDown,
    title: "Your Search Visibility Keeps Dropping Lower",
    description: "Google AI results continue to reduce traditional organic search visibility."
  },
  {
    icon: FileX,
    title: "Your Content Fails to Gain Visibility",
    description: "You create valuable content, but AI platforms rarely reference it."
  },
  {
    icon: DollarSign,
    title: "Search Rankings No Longer Drive Revenue",
    description: "Traditional SEO reporting no longer reflects actual business performance."
  }
];

const proofChips = [
  { value: "70%+", label: "Clicks lost to AI answers" },
  { value: "60+", label: "Audits run on stalled sites" },
];

export const ProblemSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-8 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-brand/20 bg-brand/5 text-brand text-xs font-semibold uppercase mb-4">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-4">
            Your competitors are <span className="text-brand">ranking on Google.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Search visibility is evolving rapidly, and outdated SEO methods are becoming less effective. Our{" "}
              <span className="text-foreground font-semibold">SEO services in Bangalore</span> leverage advanced search
              intelligence to identify missed ranking opportunities, enhance AI visibility, and position your business
              ahead of competitors.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
              {proofChips.map((c) => (
                <div key={c.label} className="flex items-center gap-3 rounded-xl bg-muted/50 border border-border px-4 py-3">
                  <span className="text-xl font-bold text-foreground">{c.value}</span>
                  <span className="text-xs text-muted-foreground max-w-[120px] leading-snug">{c.label}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {problems.map((problem, index) => {
            const highlight = index === 1;
            return (
              <div
                key={index}
                className={`group relative rounded-xl p-5 md:p-6 min-h-[220px] flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  highlight ? "bg-brand text-primary-foreground border-brand" : "bg-card border-border hover:border-brand/30"
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${(index + 1) * 90}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                      highlight ? "bg-primary-foreground/15" : "bg-brand/10"
                    }`}
                  >
                    <problem.icon className={`w-5 h-5 ${highlight ? "text-primary-foreground" : "text-brand"}`} />
                  </div>
                  <ArrowUpRight
                    className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      highlight ? "text-primary-foreground" : "text-brand"
                    }`}
                  />
                </div>
                <div className="mt-8">
                  <h3 className={`text-base md:text-lg font-bold leading-snug ${highlight ? "text-primary-foreground" : "text-foreground"}`}>
                    {problem.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-foreground text-background p-6 md:p-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-lg md:text-2xl font-bold tracking-tight max-w-xl">
            From invisible to referenced — see exactly where your search visibility leaks.
          </p>
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-brand text-primary-foreground hover:bg-brand/90 rounded-full px-7 flex-shrink-0"
          >
            Discover Your Search Visibility
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
