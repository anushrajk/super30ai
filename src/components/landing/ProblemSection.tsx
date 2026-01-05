import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, TrendingDown, FileX, DollarSign, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BentoGrid, BentoBadge } from "@/components/ui/bento-grid";

const problems = [
  {
    icon: Bot,
    title: "AI Assistants Don't Recommend You",
    description: "ChatGPT and Perplexity recommend your competitors. Not you."
  },
  {
    icon: TrendingDown,
    title: "Your Rankings Are Declining",
    description: "Google's AI Overviews are pushing organic results down."
  },
  {
    icon: FileX,
    title: "Content Gets Ignored",
    description: "You publish quality content, but AI systems don't cite you."
  },
  {
    icon: DollarSign,
    title: "Rankings ≠ Revenue Anymore",
    description: "Traditional SEO metrics don't translate to business growth."
  }
];

export const ProblemSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-8 md:py-14 lg:py-20 bg-muted/30 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-6 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <BentoBadge className="bg-destructive/10 text-destructive mb-4">
            The Problem
          </BentoBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            SEO Didn't Die. <span className="text-destructive">Control Did.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            While you focus on traditional SEO, AI is rewriting the rules of discovery
          </p>
        </div>

        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6 md:mb-10">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className={`bento-card hover:border-destructive/50 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <CardContent className="p-4 md:p-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-destructive/10 rounded-2xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-destructive transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <problem.icon className="w-7 h-7 text-destructive group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-destructive transition-colors">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </BentoGrid>

        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-brand-gradient hover:opacity-90 text-white hover:scale-105 transition-all duration-300"
          >
            See how your site looks to AI
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
