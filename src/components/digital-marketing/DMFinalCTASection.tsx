import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { EnquiryPopup } from "@/components/EnquiryPopup";

export const DMFinalCTASection = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section className="py-8 md:py-14 bg-brand relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-white mb-3">
          Ready to Partner with the Best Digital Marketing Agency in Bangalore?
        </h2>
        <p className="text-white/80 text-xs sm:text-sm md:text-lg max-w-2xl mx-auto mb-5">
          Join 300+ Bangalore businesses that trust The Super 30. Get a free strategy session — no commitments, just clarity.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-white text-brand hover:bg-white/90 font-semibold rounded-full px-6 sm:px-8 text-sm sm:text-base">
            Get Free Strategy Session <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => setShowEnquiryPopup(true)} className="rounded-full px-6 sm:px-8 border-white/30 text-white hover:bg-white/10 text-sm sm:text-base">
            <MessageCircle className="w-4 h-4 mr-2" /> Enquire Now
          </Button>
        </div>
      </div>
      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </section>
  );
};
