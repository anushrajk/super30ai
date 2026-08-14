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
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="border-t border-border pt-4 mb-6 md:mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            The Problem
          </span>
        </div>

        {/* Split heading */}
        <div
          className={`grid lg:grid-cols-12 gap-4 md:gap-10 items-start mb-8 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="lg:col-span-7 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            <span className="block text-brand">Your competitors are</span>
            <span className="block text-foreground">ranking on Google.</span>
          </h2>
          <div className="lg:col-span-5 lg:pt-2">
            <p className="text-base md:text-lg text-muted-foreground">
              Search visibility is evolving rapidly, and outdated SEO methods are becoming less effective. Our{" "}
              <span className="text-foreground font-semibold">SEO services in Bangalore</span> leverage advanced search
              intelligence to identify missed ranking opportunities, enhance AI visibility, and position your business
              ahead of competitors.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {proofChips.map((c) => (
                <div key={c.label} className="flex items-center gap-3 rounded-2xl bg-card border border-border px-4 py-3">
                  <span className="text-xl font-bold text-foreground">{c.value}</span>
                  <span className="text-xs text-muted-foreground max-w-[120px] leading-snug">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {problems.map((problem, index) => {
            const highlight = index === 1;
            return (
              <div
                key={index}
                className={`group relative rounded-3xl p-6 md:p-7 min-h-[240px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 ${
                  highlight ? "bg-brand text-white" : "bg-card border border-border"
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${(index + 1) * 90}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                      highlight ? "bg-white/15" : "bg-brand/10"
                    }`}
                  >
                    <problem.icon className={`w-5 h-5 ${highlight ? "text-white" : "text-brand"}`} />
                  </div>
                  <ArrowUpRight
                    className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      highlight ? "text-white" : "text-brand"
                    }`}
                  />
                </div>
                <div className="mt-8">
                  <h3 className={`text-base md:text-lg font-bold leading-snug ${highlight ? "text-white" : "text-foreground"}`}>
                    {problem.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${highlight ? "text-white/80" : "text-muted-foreground"}`}>
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-3xl bg-foreground text-background p-6 md:p-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-lg md:text-2xl font-bold tracking-tight max-w-xl">
            From invisible to referenced — see exactly where your search visibility leaks.
          </p>
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-brand text-white hover:opacity-90 rounded-full px-7 flex-shrink-0"
          >
            Discover Your Search Visibility
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
