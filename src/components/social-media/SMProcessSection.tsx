import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BentoBadge } from "@/components/ui/bento-grid";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Palette, PenTool, Rocket } from "lucide-react";

const steps = [
  { icon: Search, number: "01", title: "Brand Discovery", description: "We study your brand voice, audience, competitors, and content goals to build a creative brief." },
  { icon: Palette, number: "02", title: "Moodboard & Strategy", description: "We create moodboards, define visual direction, and plan a monthly content calendar." },
  { icon: PenTool, number: "03", title: "Design & Review", description: "Our designers craft scroll-stopping visuals. You review, give feedback, and we refine." },
  { icon: Rocket, number: "04", title: "Deliver & Schedule", description: "Final assets delivered in all formats. Optional posting, scheduling, and analytics included." },
];

export const SMProcessSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20" />

      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-8 md:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <BentoBadge className="mb-4">Our Process</BentoBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            From Brief to <span className="text-brand">Beautiful</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">A structured, brand-first approach to social media design</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {index < steps.length - 1 && (
                <div className={`hidden lg:block absolute top-20 left-[60%] w-[80%] h-1 bg-brand-gradient rounded-full transition-all duration-700 ${isVisible ? "opacity-50 scale-x-100" : "opacity-0 scale-x-0"}`}
                  style={{ transitionDelay: `${(index + 2) * 150}ms`, transformOrigin: "left" }}
                />
              )}
              <Card className="bento-card transition-all duration-500 relative z-10 hover:-translate-y-2">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-4xl md:text-6xl font-bold text-brand/30 mb-2 md:mb-4 group-hover:text-brand/50 transition-all duration-300">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 icon-bg-glow rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-brand group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-foreground mb-1 md:mb-2 group-hover:text-brand transition-colors">
                    {step.title}
                  </h3>
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
