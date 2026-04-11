import { lazy, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const EnquiryPopup = lazy(() => import("@/components/EnquiryPopup").then(m => ({ default: m.EnquiryPopup })));

export const DMFinalCTASection = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section className="py-12 md:py-20 bg-brand relative overflow-hidden">
      {/* Refined decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(18_100%_55%/0.4),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(18_100%_40%/0.3),_transparent_50%)]" />
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/[0.04] rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-white/[0.04] rounded-full" />

      <div className="container mx-auto px-4 text-center relative">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5 border border-white/10">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-white text-xs sm:text-sm font-medium">Free, No-Obligation Brand Audit</span>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto leading-tight">
          Ready to Grow with Bangalore's Results-Driven Digital Marketing Agency?
        </h2>
        <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8">
          Stop spending on digital marketing that doesn't compound. Get a free brand audit from our team — we'll analyse your digital presence, identify growth opportunities, and tell you exactly what it will take to rank, convert, and scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-white text-brand hover:bg-white/90 font-semibold rounded-full px-6 sm:px-8 text-sm sm:text-base shadow-[0_8px_24px_-6px_hsl(0_0%_0%/0.2)]">
            Start My Free Audit <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => setShowEnquiryPopup(true)} className="rounded-full px-6 sm:px-8 border-2 border-white/20 bg-white/[0.08] text-white hover:bg-white/15 text-sm sm:text-base font-semibold backdrop-blur-sm">
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
