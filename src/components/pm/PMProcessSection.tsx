import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, Settings, Rocket, BarChart3 } from "lucide-react";

const steps = [
  { icon: Search, title: "Audit & Analysis", description: "Deep dive into your current ad performance and identify opportunities" },
  { icon: Settings, title: "Strategy & Setup", description: "Build campaigns with proper tracking, audiences, and creative" },
  { icon: Rocket, title: "Launch & Optimize", description: "Go live with AI-powered bid management and continuous optimization" },
  { icon: BarChart3, title: "Scale & Report", description: "Scale winning campaigns and provide transparent reporting" },
];

export const PMProcessSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <section ref={ref} className={`py-24 bg-muted/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We Work</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-background border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
