import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Building2, ShoppingCart, Briefcase, GraduationCap, Stethoscope, Rocket,
  Home as HomeIcon, Utensils, Sparkles, ArrowRight, MessageCircle
} from "lucide-react";
import { BentoGrid, BentoCard, BentoIcon } from "@/components/ui/bento-grid";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const audiences = [
  { icon: ShoppingCart, title: "E-commerce & D2C", description: "Product focused creatives, lifestyle photography, and promotional visuals designed to improve engagement and purchase intent." },
  { icon: Building2, title: "Real Estate", description: "Property showcase creatives, launch campaigns, teaser visuals, and community focused content for builders and developers." },
  { icon: Briefcase, title: "Professional Services", description: "Thought leadership carousels, team highlights, and client success visuals designed for agencies and consulting brands." },
  { icon: GraduationCap, title: "Education & EdTech", description: "Course promotions, student success creatives, and admission campaign visuals created to increase visibility and inquiries." },
  { icon: Stethoscope, title: "Healthcare & Wellness", description: "Trust focused health creatives, doctor profiles, wellness education, and patient awareness content designed with care and clarity." },
  { icon: Rocket, title: "Tech Startups", description: "Product launches, feature highlights, and investor focused brand visuals created for scaling technology startups." },
  { icon: HomeIcon, title: "F&B Hospitality", description: "Menu promotions, ambiance visuals, event campaigns, and review driven creatives for restaurants and hospitality brands." },
  { icon: Utensils, title: "Restaurants & Cafes", description: "Food photography direction, daily specials content, and seasonal campaign visuals designed to increase customer attention." },
];

export const SMWhoIsThisForSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section ref={sectionRef} className="py-6 md:py-10 lg:py-16 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-3 md:px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-5 md:mb-10 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4 border border-orange-500/30">Industries We Serve</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">Who Benefits from Social Media Design Services?</h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">We develop social media content for different brands in various industries and business categories that keep your targeted audience engaged.</p>
        </div>

        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-5 md:mb-8">
          {audiences.map((audience, index) => (
            <BentoCard key={index} className={`group bg-white/5 border-white/10 hover:border-white/20 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>
              <div className="flex items-start gap-3 md:gap-4">
                <BentoIcon size="md" className="bg-brand/20">
                  <audience.icon className="w-6 h-6 md:w-7 md:h-7 text-brand group-hover:text-white transition-colors duration-300" />
                </BentoIcon>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-brand transition-colors duration-300">{audience.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{audience.description}</p>
                </div>
              </div>
            </BentoCard>
          ))}
        </BentoGrid>

        <div className={`text-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <p className="text-gray-400 mb-5 text-sm md:text-base">Is your industry not seen here? Don't worry, we create designs for all brands that value visual identity and excellence.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:scale-105 transition-all duration-300 group">
              <Sparkles className="w-4 h-4 mr-2" />Get Free Design Consultation<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-white" size="lg" onClick={() => setShowEnquiryPopup(true)} className="hover:scale-105 transition-all duration-300 group">
              <MessageCircle className="w-4 h-4 mr-2" />Enquire Now
            </Button>
          </div>
        </div>
      </div>

      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </section>
  );
};
