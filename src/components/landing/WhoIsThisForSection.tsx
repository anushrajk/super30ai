import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Building2, 
  ShoppingCart, 
  Briefcase, 
  GraduationCap, 
  Stethoscope, 
  Rocket, 
  Home as HomeIcon, 
  Scale, 
  Utensils 
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const audiences = [
  { icon: Building2, title: "B2B SaaS", description: "Software companies seeking qualified leads through AI-powered visibility" },
  { icon: ShoppingCart, title: "E-commerce", description: "Online stores wanting AI visibility and high-converting campaigns" },
  { icon: Briefcase, title: "Professional Services", description: "Consultants and agencies looking to dominate their niche" },
  { icon: GraduationCap, title: "EdTech", description: "Educational platforms and courses reaching the right audience" },
  { icon: Stethoscope, title: "Healthcare", description: "Medical and wellness brands building trust online" },
  { icon: Rocket, title: "Tech Startups", description: "Innovative companies scaling fast with data-driven marketing" },
  { icon: HomeIcon, title: "Real Estate", description: "Property developers and brokers generating quality leads" },
  { icon: Scale, title: "Legal Services", description: "Law firms and legal consultants attracting ideal clients" },
  { icon: Utensils, title: "Hospitality & Travel", description: "Hotels, restaurants, and travel agencies driving bookings" },
];

export const WhoIsThisForSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-24 bg-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/20 to-transparent dark:via-orange-950/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-10 md:mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-accent text-primary rounded-full text-sm font-semibold mb-4 shadow-sm">
            Perfect Fit
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Who Is This For?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered marketing solutions work best for ambitious businesses ready to dominate their market
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-10 md:mb-12">
          {audiences.map((audience, index) => (
            <Card 
              key={index} 
              className={`group relative bg-background/95 border-border/50 overflow-hidden transition-[transform,box-shadow,border-color] duration-300 hover:border-orange-500/50 hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                transitionDelay: `${(index + 1) * 50}ms`,
                transform: "translateZ(0)"
              }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-primary/0 group-hover:from-orange-500/5 group-hover:to-primary/5 transition-colors duration-300" />
              
              <CardContent className="relative p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-600 transition-colors duration-300 shadow-lg group-hover:shadow-orange-500/30">
                    <audience.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-orange-600 transition-colors duration-300">
                      {audience.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <p className="text-muted-foreground mb-6">Don't see your industry? We work with all growth-focused businesses.</p>
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 transition-[transform,box-shadow] duration-300 hover:shadow-orange-500/50 hover:scale-105"
            >
              Let's Talk About Your Business
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
