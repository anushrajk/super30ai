import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Sparkles,
  ArrowRight, 
  Building2, 
  ShoppingCart, 
  Briefcase, 
  GraduationCap, 
  Stethoscope, 
  Rocket, 
  Home as HomeIcon, 
  Scale, 
  Utensils,
  MessageCircle
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BentoGrid, BentoCard, BentoIcon } from "@/components/ui/bento-grid";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { AuditChoicePopup } from "@/components/popups/AuditChoicePopup";

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
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [showAuditPopup, setShowAuditPopup] = useState(false);

  return (
    <section 
      ref={sectionRef}
      className="py-6 md:py-10 lg:py-16 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-3 md:px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-5 md:mb-10 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4 border border-orange-500/30">
            Perfect Fit
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Who Is This For?
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Our AI-powered marketing solutions work best for ambitious businesses ready to dominate their market
          </p>
        </div>

        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-5 md:mb-8">
          {audiences.map((audience, index) => (
            <BentoCard 
              key={index} 
              className={`group bg-white/5 border-white/10 hover:border-brand/30 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <BentoIcon size="md" className="bg-brand/20">
                  <audience.icon className="w-6 h-6 md:w-7 md:h-7 text-brand group-hover:text-white transition-colors duration-300" />
                </BentoIcon>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-brand transition-colors duration-300">
                    {audience.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            </BentoCard>
          ))}
        </BentoGrid>

        <div className={`text-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <p className="text-gray-400 mb-5 text-sm md:text-base">Don't see your industry? We work with all growth-focused businesses.</p>
          
          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => setShowAuditPopup(true)}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25 hover:scale-105 transition-all duration-300 group"
            >
              <Sparkles className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Start Free Audit Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline-white"
              size="lg"
              onClick={() => setShowEnquiryPopup(true)}
              className="hover:scale-105 transition-all duration-300 group"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Enquire Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      <EnquiryPopup 
        open={showEnquiryPopup} 
        onOpenChange={setShowEnquiryPopup} 
      />
      <AuditChoicePopup 
        open={showAuditPopup} 
        onOpenChange={setShowAuditPopup} 
      />
    </section>
  );
};
