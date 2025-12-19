import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  ShoppingCart, 
  Briefcase, 
  GraduationCap, 
  Stethoscope, 
  Rocket,
  ArrowRight,
  Home,
  Scale,
  Utensils
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const audiences = [
  {
    icon: Building2,
    title: "B2B SaaS",
    description: "Software companies seeking qualified leads"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Online stores wanting AI visibility"
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Consultants and agencies"
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description: "Educational platforms and courses"
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Medical and wellness brands"
  },
  {
    icon: Rocket,
    title: "Tech Startups",
    description: "Innovative companies scaling fast"
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Property developers and brokers"
  },
  {
    icon: Scale,
    title: "Legal Services",
    description: "Law firms and legal consultants"
  },
  {
    icon: Utensils,
    title: "Hospitality & Travel",
    description: "Hotels, restaurants, and travel agencies"
  }
];

export const TargetAudienceSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Who We Help
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Who Is This For?
          </h2>
          <p className="text-lg text-muted-foreground">
            AI SEO works best for businesses ready to lead, not follow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {audiences.map((audience, index) => (
            <Card 
              key={index} 
              className={`bg-background/80 backdrop-blur-sm border-border/50 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
              style={{ transitionDelay: `${(index + 1) * 75}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-4 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <audience.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-orange-600 transition-colors">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
          >
            See If You Qualify
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
