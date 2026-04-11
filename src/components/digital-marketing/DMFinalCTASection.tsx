import { lazy, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const EnquiryPopup = lazy(() => import("@/components/EnquiryPopup").then(m => ({ default: m.EnquiryPopup })));

export const DMFinalCTASection = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section className="py-12 md:py-20 bg-brand relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full" />

      <div className="container mx-auto px-4 text-center relative">
        <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 mb-5">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-white text-xs sm:text-sm font-medium">Free, No-Obligation Brand Audit</span>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto leading-tight">
          Ready to Grow with Bangalore's Results-Driven Digital Marketing Agency?
        </h2>
        <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-6">
          Stop spending on digital marketing that doesn't compound. Get a free brand audit from our team — we'll analyse your digital presence, identify growth opportunities, and tell you exactly what it will take to rank, convert, and scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-white text-brand hover:bg-white/90 font-semibold rounded-full px-6 sm:px-8 text-sm sm:text-base">
            Start My Free Audit <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => setShowEnquiryPopup(true)} className="rounded-full px-6 sm:px-8 border-2 border-white bg-white/10 text-white hover:bg-white/20 text-sm sm:text-base font-semibold">
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
