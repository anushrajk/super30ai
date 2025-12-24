import { useState } from "react";
import { Building2, ShoppingCart, Briefcase, Rocket, BarChart3, Target, Building, TrendingUp, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BentoGrid, BentoCard, BentoIcon } from "@/components/ui/bento-grid";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const audiences = [
  {
    icon: Building2,
    title: "B2B SaaS",
    description: "Software companies looking to scale MQLs with AI-optimized paid campaigns"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Online stores seeking higher ROAS through smart bidding & AI audiences"
  },
  {
    icon: Briefcase,
    title: "Lead Generation",
    description: "Businesses needing a predictable pipeline of qualified leads"
  },
  {
    icon: Rocket,
    title: "Tech Startups",
    description: "Fast-growing companies scaling user acquisition cost-effectively"
  },
  {
    icon: BarChart3,
    title: "DTC Brands",
    description: "Direct-to-consumer brands maximizing ad spend efficiency"
  },
  {
    icon: Target,
    title: "Local Services",
    description: "Service businesses targeting high-intent local customers"
  },
  {
    icon: Building,
    title: "Enterprise",
    description: "Large organizations optimizing multi-million ad budgets"
  },
  {
    icon: TrendingUp,
    title: "High-Ticket Sales",
    description: "Businesses selling premium products/services with longer sales cycles"
  },
  {
    icon: Users,
    title: "Subscription Businesses",
    description: "SaaS & membership companies reducing CAC and increasing LTV"
  }
];

export const PMWhoIsThisForSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  const scrollToForm = () => {
    const element = document.getElementById('pm-hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 text-primary border border-primary/30 bg-primary/10">
            Perfect Fit
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Who Is This For?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Our AI-powered performance marketing strategies work best for businesses ready to scale their paid advertising with data-driven precision
          </p>
        </div>

        <BentoGrid className={`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {audiences.map((audience, index) => (
            <BentoCard 
              key={index} 
              variant="glass"
              className="bg-card/50 border-border/30 hover:border-primary/50"
            >
              <BentoIcon size="md" className="mb-4">
                <audience.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </BentoIcon>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                {audience.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {audience.description}
              </p>
            </BentoCard>
          ))}
        </BentoGrid>

        <div className={`text-center mt-12 md:mt-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Ready to transform your ad performance with AI-powered optimization?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
            >
              Start Free Audit Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setShowEnquiryPopup(true)}
              className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg"
            >
              Enquire Now
            </Button>
          </div>
        </div>
      </div>

      <EnquiryPopup 
        open={showEnquiryPopup} 
        onOpenChange={setShowEnquiryPopup} 
      />
    </section>
  );
};

export default PMWhoIsThisForSection;
