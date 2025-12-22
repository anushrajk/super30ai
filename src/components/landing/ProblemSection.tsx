import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, TrendingDown, FileX, DollarSign, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
      className="py-10 md:py-14 lg:py-20 bg-muted/30 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-8 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            The Problem
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            SEO Didn't Die. <span className="text-red-500">Control Did.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            While you focus on traditional SEO, AI is rewriting the rules of discovery
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className={`bg-background/80 backdrop-blur-sm border-border/50 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <CardContent className="p-4 md:p-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mb-3 md:mb-4 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <problem.icon className="w-7 h-7 text-red-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-red-600 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
          >
            See how your site looks to AI
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
