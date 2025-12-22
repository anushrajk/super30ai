import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
import { BentoGrid, BentoCard, BentoIcon } from "@/components/ui/bento-grid";

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
      className="py-6 md:py-10 lg:py-16 bg-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-brand-gradient-light dark:bg-transparent" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-3 md:px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-5 md:mb-10 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="badge-brand mb-4">
            Perfect Fit
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Who Is This For?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered marketing solutions work best for ambitious businesses ready to dominate their market
          </p>
        </div>

        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-5 md:mb-8">
          {audiences.map((audience, index) => (
            <BentoCard 
              key={index} 
              className={`group ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <BentoIcon size="md">
                  <audience.icon className="w-6 h-6 md:w-7 md:h-7 text-brand group-hover:text-white transition-colors duration-300" />
                </BentoIcon>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-1 group-hover:text-brand transition-colors duration-300">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            </BentoCard>
          ))}
        </BentoGrid>

        <div className={`text-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <p className="text-muted-foreground mb-5 text-sm md:text-base">Don't see your industry? We work with all growth-focused businesses.</p>
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-brand-gradient hover:opacity-90 text-white shadow-brand transition-all duration-300 hover:shadow-brand-lg hover:scale-105"
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
