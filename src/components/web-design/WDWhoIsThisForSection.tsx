import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Building2, ShoppingCart, Briefcase, GraduationCap, Stethoscope, Rocket,
  Home as HomeIcon, Scale, Cloud, Sparkles, ArrowRight, MessageCircle
} from "lucide-react";
import { BentoGrid, BentoCard, BentoIcon } from "@/components/ui/bento-grid";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const audiences = [
  { icon: Cloud, title: "SaaS & Technology", description: "Product showcases, feature highlights, pricing pages, and demo booking experiences with a focus on converting prospects to customers." },
  { icon: ShoppingCart, title: "E-commerce", description: "Product catalogs, checkout optimization, payment gateway integration and inventory management that is optimized to push sales and revenue online." },
  { icon: Building2, title: "Real Estate", description: "Property listing portals, virtual tours, lead generation forms, and location driven landing pages for developers and builders." },
  { icon: GraduationCap, title: "Education & EdTech", description: "Improved admissions and engagement through course sections, enrollment journeys, student portals and learning management integrations." },
  { icon: Stethoscope, title: "Healthcare", description: "Patient friendly interfaces, appointment scheduling, doctor profiles, and compliant website solutions that create credibility." },
  { icon: Rocket, title: "Startups", description: "MVP websites, presentation sites for investors, and scalable digital experiences and web apps for quick business expansion." },
  { icon: Briefcase, title: "Professional Services", description: "For service-based companies, consultancies and agencies, portfolio websites, case study presentations, trust building digital experiences & consultation booking systems." },
  { icon: Scale, title: "Legal & Finance", description: "Websites that build trust and confidence such as credibility focused, service pages, professional profiles and consultation booking systems." },
  { icon: HomeIcon, title: "Hospitality", description: "Reservation systems, room showcases, restaurant menus, event spaces, and guest experiences designed to increase bookings." },
];

export const WDWhoIsThisForSection = () => {
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">Custom Websites Designed for Every Industry</h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">Our web design company in Bangalore has delivered 200+ websites across diverse industries, each strategically designed to meet unique business goals, audience expectations, and growth objectives.</p>
        </div>

        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-5 md:mb-8">
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
          <p className="text-gray-400 mb-5 text-sm md:text-base">Don't see your industry? We've got you covered with custom design websites for businesses across every sector.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:scale-105 transition-all duration-300 group">
              <Sparkles className="w-4 h-4 mr-2" />Get Free Website Consultation<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-white" size="lg" onClick={() => setShowEnquiryPopup(true)} className="hover:scale-105 transition-all duration-300"><MessageCircle className="w-4 h-4 mr-2" />Enquire Now</Button>
          </div>
        </div>
      </div>

      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </section>
  );
};
