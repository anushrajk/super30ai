import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle, TrendingDown, Users, DollarSign, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const problems = [
  { icon: DollarSign, title: "High CPC, Low Returns", description: "Your cost-per-click keeps rising but conversions stay flat" },
  { icon: Users, title: "Wrong Audiences", description: "Ads reaching people who will never convert" },
  { icon: TrendingDown, title: "No Attribution", description: "Can't track which channels actually drive revenue" },
  { icon: AlertTriangle, title: "Wasted Budget", description: "50%+ of ad spend goes to non-converting clicks" },
];

export const PMProblemSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  
  const scrollToForm = () => {
    document.getElementById('pm-hero')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section ref={ref} className={`py-8 md:py-14 lg:py-20 bg-background relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">The Problem</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Your Ads Burn Money Without Results</h2>
          <p className="text-lg text-muted-foreground">Most businesses waste 40-60% of their ad budget on ineffective campaigns</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="bg-red-50 border border-red-200 rounded-2xl p-4 md:p-6 hover:border-red-400 transition-all duration-300 group">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </div>
          ))}
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
            variant="outline"
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
