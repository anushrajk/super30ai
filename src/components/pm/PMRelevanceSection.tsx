import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, X, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const forYou = [
  "You spend ₹1L+/month on ads",
  "You want measurable ROI",
  "You need multi-platform expertise",
  "You value data-driven decisions",
];

const notForYou = [
  "You're not ready to invest in ads",
  "You expect overnight results",
  "You want to micromanage campaigns",
  "You're not tracking conversions",
];

export const PMRelevanceSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  
  const scrollToForm = () => {
    document.getElementById('pm-hero')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section ref={ref} className={`py-8 md:py-14 lg:py-20 bg-[#0a0a0a] relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      {/* Floating blur elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Is This Right For You?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-green-950/50 border border-green-800 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-green-400 mb-6">This is for you if:</h3>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-950/50 border border-red-800 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-red-400 mb-6">This is NOT for you if:</h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <X className="w-5 h-5 text-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8 md:mt-12">
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
            variant="outline-white"
            size="lg"
            onClick={() => setShowEnquiryPopup(true)}
            className="hover:scale-105 transition-all duration-300 group"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Enquire Now
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Enquiry Popup */}
      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </section>
  );
};
