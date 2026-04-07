import { Card, CardContent } from "@/components/ui/card";
import { Search, Layers, Rocket, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { icon: Search, number: "01", title: "Deep Discovery & Audit", description: "Complete audit of your digital presence, competitors, and market position — tailored for Bangalore's competitive landscape." },
  { icon: Layers, number: "02", title: "Custom Strategy Blueprint", description: "A bespoke digital marketing roadmap with channel priorities, budget allocation, content calendar & KPI targets." },
  { icon: Rocket, number: "03", title: "Multi-Channel Execution", description: "Our 30+ in-house experts launch SEO, ads, social, email & web campaigns simultaneously with continuous optimization." },
  { icon: TrendingUp, number: "04", title: "Optimize, Report & Scale", description: "A/B testing, cross-channel attribution, weekly strategy reviews & continuous scaling for compounding growth." },
];

export const DMProcessSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-8 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4 border border-brand/20">
            How Our Digital Marketing Agency Works
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Proven <span className="text-brand">Digital Marketing Process</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A structured, results-driven approach used by our digital marketing agency in Bangalore to deliver predictable, scalable growth.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {index < steps.length - 1 && (
                <div className={`hidden lg:block absolute top-20 left-[60%] w-[80%] h-1 bg-brand/20 rounded-full transition-all duration-700 ${isVisible ? 'opacity-50 scale-x-100' : 'opacity-0 scale-x-0'}`}
                  style={{ transitionDelay: `${(index + 2) * 150}ms`, transformOrigin: 'left' }}
                />
              )}
              <Card className="bg-white border border-border/50 rounded-2xl">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-brand/20 mb-3">{step.number}</div>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-brand rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2">{step.title}</h3>
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
