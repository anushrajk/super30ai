import { Card, CardContent } from "@/components/ui/card";
import { Search, Layers, Rocket, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BentoBadge } from "@/components/ui/bento-grid";

const steps = [
  { icon: Search, number: "01", title: "Discovery & Wireframing", description: "Deep dive into your business goals, target audience, and competitive landscape. We create detailed sitemaps and wireframes before touching a single pixel." },
  { icon: Layers, number: "02", title: "UI/UX Design in Figma", description: "High-fidelity mockups with your brand colors, typography, and imagery. You review and approve every page before development begins." },
  { icon: Rocket, number: "03", title: "Development & QA", description: "Clean, responsive code with thorough testing across all devices and browsers. Core Web Vitals optimization and SEO setup included." },
  { icon: TrendingUp, number: "04", title: "Launch & Optimize", description: "Deploy, configure analytics and tracking, set up heatmaps, and begin continuous conversion optimization based on real user data." },
];

export const WDProcessSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-8 md:py-14 lg:py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-6 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <BentoBadge className="mb-4">Our Process</BentoBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">From Concept to Launch in 4 Clear Steps</h2>
          <p className="text-lg text-muted-foreground">A transparent, structured process so you always know exactly where your project stands</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${(index + 1) * 150}ms` }}>
              {index < steps.length - 1 && (
                <div className={`hidden lg:block absolute top-20 left-[60%] w-[80%] h-1 bg-brand-gradient rounded-full transition-all duration-700 ${isVisible ? 'opacity-50 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: `${(index + 2) * 150}ms`, transformOrigin: 'left' }} />
              )}
              <Card className="bento-card hover:-translate-y-2">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-4xl md:text-6xl font-bold text-brand-gradient mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">{step.number}</div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-gradient rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-foreground mb-1 md:mb-2 group-hover:text-brand transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
