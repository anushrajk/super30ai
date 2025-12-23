import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, TrendingUp, Brain, Zap, Sparkles, MessageCircle } from "lucide-react";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const benefits = [
  { icon: Brain, text: "Complete AI visibility audit" },
  { icon: Search, text: "Custom SEO strategy" },
  { icon: TrendingUp, text: "Traffic growth projections" },
  { icon: Zap, text: "Quick wins identification" },
];

export const SEOFinalCTASection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  const scrollToForm = () => {
    const heroSection = document.getElementById("ai-seo-hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section ref={ref} className={`py-8 md:py-14 lg:py-20 relative bg-white overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 px-4 py-1.5 rounded-full mb-6">
            <Search className="w-4 h-4 text-brand" />
            <span className="text-brand text-sm font-medium">Free AI SEO Strategy Session</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Ready to <span className="bg-gradient-to-r from-brand to-orange-500 bg-clip-text text-transparent">Dominate AI Search?</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            Book a free consultation with our SEO experts. Get a complete audit of your AI visibility and discover hidden ranking opportunities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {benefits.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-4 py-2 hover:bg-slate-200 hover:border-brand/30 transition-all duration-300">
                <item.icon className="w-4 h-4 text-brand" />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25 hover:scale-105 transition-all duration-300 group"
            >
              <Sparkles className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Start Free Audit Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => setShowEnquiryPopup(true)}
              className="border-slate-300 text-slate-700 hover:bg-slate-100 hover:scale-105 transition-all duration-300 group"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Enquire Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-slate-500 text-sm mt-4">Takes 2 minutes • No credit card required</p>
        </div>
      </div>

      {/* Enquiry Popup */}
      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </section>
  );
};
