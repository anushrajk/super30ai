import { Card, CardContent } from "@/components/ui/card";
import { Search, Layers, Rocket, TrendingUp } from "lucide-react";
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
    <section 
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-24 bg-muted/30 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-10 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground">
            A systematic approach to AI SEO success
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className={`hidden lg:block absolute top-20 left-[60%] w-[80%] h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full transition-all duration-700 ${isVisible ? 'opacity-50 scale-x-100' : 'opacity-0 scale-x-0'}`} 
                  style={{ transitionDelay: `${(index + 2) * 150}ms`, transformOrigin: 'left' }} 
                />
              )}
              
              <Card className="bg-background/80 backdrop-blur-sm border-border/50 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 relative z-10 hover:-translate-y-2">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-orange-200 to-orange-400 bg-clip-text text-transparent mb-2 md:mb-4 group-hover:from-orange-400 group-hover:to-orange-600 transition-all duration-300">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-foreground mb-1 md:mb-2 group-hover:text-orange-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
