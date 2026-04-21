import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { EnquiryPopup } from "@/components/EnquiryPopup";

export const WDFinalCTASection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section ref={sectionRef} className="py-10 md:py-16 bg-brand relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      
      <div className={`container mx-auto px-3 md:px-4 text-center relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Hire Bangalore's Top Web Design Company Today</h2>
        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-6">Get a free consultation and website audit from our website designing agency in Bangalore — we'll show you exactly how to turn your custom-designed website into your best salesperson.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-white text-brand hover:bg-white/90 font-semibold rounded-full px-8">
            <Sparkles className="w-4 h-4 mr-2" />Get Free Website Quote<ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline-white" onClick={() => setShowEnquiryPopup(true)} className="rounded-full px-8">
            <MessageCircle className="w-4 h-4 mr-2" />Enquire Now
          </Button>
        </div>
      </div>

      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </section>
  );
};
