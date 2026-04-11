import { lazy, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const EnquiryPopup = lazy(() => import("@/components/EnquiryPopup").then(m => ({ default: m.EnquiryPopup })));

export const DMFinalCTASection = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section className="py-8 md:py-14 bg-brand relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-white mb-3">
          Ready to Grow with Bangalore's Results-Driven Digital Marketing Agency?
        </h2>
        <p className="text-white/80 text-xs sm:text-sm md:text-lg max-w-3xl mx-auto mb-5">
          Stop spending on digital marketing that doesn't compound. Get a free, no-obligation brand audit from our team — we'll analyse your current digital presence, identify your biggest growth opportunities, and tell you exactly what it will take to rank, convert, and scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-white text-brand hover:bg-white/90 font-semibold rounded-full px-6 sm:px-8 text-sm sm:text-base">
            Start My Free Audit <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => setShowEnquiryPopup(true)} className="rounded-full px-6 sm:px-8 border-white/30 text-white hover:bg-white/10 text-sm sm:text-base">
            <MessageCircle className="w-4 h-4 mr-2" /> Speak to a Strategist
          </Button>
        </div>
      </div>
      {showEnquiryPopup && (
        <Suspense fallback={null}>
          <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
        </Suspense>
      )}
    </section>
  );
};
