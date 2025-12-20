import { ShoppingCart, Cloud, Users, Package, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const audiences = [
  {
    icon: ShoppingCart,
    title: "E-commerce Brands",
    description: "Scale your online store with AI-optimized product ads and retargeting campaigns.",
    features: ["Shopping campaigns", "Dynamic retargeting", "ROAS optimization"],
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: Cloud,
    title: "SaaS Companies",
    description: "Generate qualified demos and trials with precision B2B targeting.",
    features: ["Lead gen campaigns", "Account-based ads", "Free trial acquisition"],
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Fill your pipeline with high-intent leads at predictable costs.",
    features: ["Form campaigns", "Call ads", "Landing page optimization"],
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Package,
    title: "D2C Brands",
    description: "Build brand awareness and drive direct sales with social-first strategies.",
    features: ["Meta & Instagram ads", "Influencer amplification", "Brand campaigns"],
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
  },
];

export const PMTargetAudienceSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Who We Help
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for Growth-Focused Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI-powered approach works across industries and business models
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {audiences.map((audience, index) => (
            <Card 
              key={index}
              className="bg-background border-border/50 hover:border-blue-500/50 hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${audience.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <audience.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{audience.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{audience.description}</p>

                <ul className="space-y-2">
                  {audience.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
