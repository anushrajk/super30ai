import { Building2, ShoppingBag, Stethoscope, Landmark, GraduationCap, Laptop } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const industries = [
  { name: "E-commerce", icon: ShoppingBag },
  { name: "SaaS", icon: Laptop },
  { name: "HealthTech", icon: Stethoscope },
  { name: "FinTech", icon: Landmark },
  { name: "EdTech", icon: GraduationCap },
  { name: "Enterprise", icon: Building2 },
];

const companies = [
  "TechFlow", "DataSync", "CloudNine", "GrowthIQ", "ScaleUp", "NexGen",
  "PropTech", "MediCare", "EduPlus", "FinServ", "RetailMax", "LogiTech",
];

export const TrustBanner = () => {
  return (
    <section className="py-16 bg-muted/30 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Trusted by 50+ Leading Companies Across Industries
          </h2>
          <p className="text-muted-foreground">
            From startups to enterprises, we deliver results
          </p>
        </div>

        {/* Industry Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 bg-background border border-border/50 px-4 py-2 rounded-full hover:border-orange-500/50 hover:shadow-md transition-all duration-300"
            >
              <industry.icon className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-foreground">{industry.name}</span>
            </div>
          ))}
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/80 to-transparent z-10" />
          
          <Marquee speed="slow" className="py-4">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="mx-8 flex items-center justify-center w-32 h-12 bg-background border border-border/50 rounded-lg px-4"
              >
                <span className="text-lg font-bold text-muted-foreground/60">{company}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
