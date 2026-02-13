import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp, BarChart3, Zap, Sparkles, MessageCircle } from "lucide-react";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const benefits = [
  { icon: BarChart3, text: "Complete ads account audit" },
  { icon: Target, text: "Custom campaign strategy" },
  { icon: TrendingUp, text: "ROI projections & forecasts" },
  { icon: Zap, text: "Quick wins identification" },
];

export const PMFinalCTASection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  const scrollToForm = () => {
    const heroSection = document.getElementById("pm-hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section ref={ref} className={`py-8 md:py-14 lg:py-20 relative bg-[#0a0a0a] overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-1.5 rounded-full mb-6">
            <Target className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Free Ads Strategy Session</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-[#F95B00]">Maximize Your Ad ROI?</span>
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Book a free consultation with our ads experts. Get a complete audit of your campaigns and discover hidden revenue opportunities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {benefits.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                <item.icon className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <Sparkles className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Start Free Audit Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => setShowEnquiryPopup(true)}
              className="bg-white text-gray-900 border-white hover:bg-gray-100 hover:scale-105 transition-all duration-300 group"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Enquire Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-white/60 text-sm mt-4">Takes 2 minutes • No credit card required</p>
        </div>
      </div>

      {/* Enquiry Popup */}
      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </section>
  );
};
