import { Search, Facebook, Linkedin, Youtube, RefreshCw, BarChart3, Palette, Target } from "lucide-react";
import { BentoGrid, BentoCard, BentoIcon, BentoBadge } from "@/components/ui/bento-grid";

const services = [
  { icon: Search, title: "PPC Services in Bangalore", description: "Google Ads Search, Display, Shopping & YouTube campaigns optimized with AI" },
  { icon: Facebook, title: "Meta Ads", description: "Facebook & Instagram advertising for targeted reach" },
  { icon: Linkedin, title: "LinkedIn Ads", description: "B2B lead generation campaigns" },
  { icon: Youtube, title: "YouTube Ads", description: "Video advertising for brand awareness" },
  { icon: RefreshCw, title: "Remarketing & Retargeting", description: "Re-engage visitors who didn't convert" },
  { icon: BarChart3, title: "Performance Tracking & Reporting", description: "Full-funnel tracking & transparent reporting" },
  { icon: Palette, title: "AI Powered Ad Campaigns", description: "AI powered ads that learn, adapt, and improve in real time" },
  { icon: Target, title: "Landing Page CRO", description: "Optimize pages for conversions" },
];

export const PMServicesSection = () => {
  return (
    <section className="py-6 md:py-10 lg:py-16 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
          <BentoBadge className="mb-4">Our Services</BentoBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Performance Marketing Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Full-funnel paid advertising across all major platforms
          </p>
        </div>
        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <BentoCard key={index} className="group">
              <BentoIcon size="md">
                <service.icon className="w-5 h-5 md:w-6 md:h-6 text-brand group-hover:text-white transition-colors duration-300" />
              </BentoIcon>
              <h3 className="text-base md:text-lg font-bold text-foreground mt-3 mb-2 group-hover:text-brand transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
