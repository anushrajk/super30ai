import { lazy, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const EnquiryPopup = lazy(() => import("@/components/EnquiryPopup").then(m => ({ default: m.EnquiryPopup })));

export const DMFinalCTASection = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-brand relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(18_100%_55%/0.4),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(18_100%_40%/0.3),_transparent_50%)]" />

      <div className="container mx-auto px-4 text-center relative">
        <span className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
          Get Started
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-[1.1]">
          Book Your Free Brand Audit with Bangalore's Top Digital Marketing Agency Today
        </h2>
        <p className="text-white/50 text-base max-w-2xl mx-auto mb-10">
          Ready to stop the guesswork and start growing with a leading <span className="text-white font-semibold">digital marketing agency in Bangalore</span>? Connect with our experts for a strategy session and see how our AI roadmap can help you lead your industry.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-white text-brand hover:bg-white/90 font-semibold rounded-full px-8"
          >
            Start My Free Audit <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => setShowEnquiryPopup(true)}
            className="rounded-full px-8 border-2 border-white/20 bg-white/[0.08] text-white hover:bg-white/15 font-semibold backdrop-blur-sm"
          >
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
