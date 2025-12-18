import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  ShoppingCart, 
  Briefcase, 
  GraduationCap, 
  Stethoscope, 
  Rocket,
  ArrowRight 
} from "lucide-react";

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
  }
];

export const TargetAudienceSection = () => {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
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
              className="bg-muted/30 border-border hover:border-orange-500/50 hover:shadow-lg transition-all group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <audience.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToForm}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            See If You Qualify
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
