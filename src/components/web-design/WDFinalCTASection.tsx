import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { EnquiryPopup } from "@/components/EnquiryPopup";

export const WDFinalCTASection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section ref={sectionRef} className="py-8 md:py-12 relative overflow-hidden bg-background transition-all duration-700">
      <div className="container mx-auto px-4 relative">
        <div className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] p-8 md:p-12 lg:p-16">
          {/* Glow accents */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-brand/5 blur-3xl" aria-hidden="true" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className={`relative text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Partner With a Leading Web Design Company in Bangalore</h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-6">Get a free consultation and website review from our website designing agency in Bangalore. We will show you how a custom designed website can improve visibility, user experience, and business enquiries.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-white text-brand hover:bg-white/90 font-semibold rounded-full px-8">
                <Sparkles className="w-4 h-4 mr-2" />Get Free Website Consultation<ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline-white" onClick={() => setShowEnquiryPopup(true)} className="rounded-full px-8 border-2 border-white/20 bg-white/[0.08] text-white hover:bg-white/15 font-semibold backdrop-blur-sm">
                <MessageCircle className="w-4 h-4 mr-2" />Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </section>
  );
};
