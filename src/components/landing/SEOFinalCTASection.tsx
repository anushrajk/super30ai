import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, TrendingUp, Brain, Zap, Sparkles, MessageCircle } from "lucide-react";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const benefits = [
  { icon: Brain, text: "Complete AI search visibility" },
  { icon: Search, text: "Customized SEO growth strategy" },
  { icon: TrendingUp, text: "Organic traffic growth forecasting" },
  { icon: Zap, text: "Priority opportunity identification" },
];

export const SEOFinalCTASection = () => {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  const scrollToForm = () => {
    const heroSection = document.getElementById("ai-seo-hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section ref={ref} className={`py-12 md:py-20 bg-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto rounded-2xl bg-foreground px-6 py-10 md:px-12 md:py-14 text-center overflow-hidden">
              <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/30 px-4 py-1.5 rounded-full mb-6">
                <Search className="w-4 h-4 text-brand" />
                <span className="text-brand text-sm font-medium">Free AI SEO Consultation</span>
              </div>
              
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
                 Ready to Lead with <span className="text-brand">AI SEO Company in Bangalore?</span>
              </h2>
              <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
                Stop losing qualified search traffic to your competitors. Connect with a leading <span className="text-white font-semibold">AI SEO agency in Bangalore</span> for a strategic AI visibility audit and discover how advanced search optimization can boost your rankings, increase qualified inquiries, and improve sustainable organic growth.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {benefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                    <item.icon className="w-4 h-4 text-brand" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  onClick={scrollToForm}
                  size="lg"
                 className="bg-brand hover:bg-brand/90 text-primary-foreground rounded-full transition-all duration-300 group"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Your Free SEO Audit
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => setShowEnquiryPopup(true)}
                 className="bg-background text-foreground border-background hover:bg-background/90 rounded-full transition-all duration-300 group"
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
