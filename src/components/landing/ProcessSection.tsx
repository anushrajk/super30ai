import { Card, CardContent } from "@/components/ui/card";
import { Search, Layers, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description: "We analyze your current AI visibility, competitors, and opportunities across all AI search platforms."
  },
  {
    icon: Layers,
    number: "02",
    title: "Foundation",
    description: "Build your technical SEO foundation and establish entity relationships for AI understanding."
  },
  {
    icon: Rocket,
    number: "03",
    title: "Optimization",
    description: "Implement AI-specific optimizations across content, structure, and authority signals."
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Growth",
    description: "Continuous monitoring, testing, and scaling of what works in AI search."
  }
];

export const ProcessSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-slate-600">
            A proven framework for AI search domination
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-orange-500 to-orange-300" />
              )}
              
              <Card className="bg-white border-slate-200 hover:shadow-xl transition-shadow relative z-10">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-bold text-orange-500/20 mb-4">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
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
