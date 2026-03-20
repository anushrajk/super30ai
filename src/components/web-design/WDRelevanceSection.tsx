import { useState } from "react";
import { Check, X, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const forYou = [
  "You need a website that generates leads, not just looks good",
  "Your current site is slow, outdated, or not mobile-friendly",
  "You want SEO built into your website from day one",
  "You need a reliable tech partner for ongoing maintenance and updates",
  "You want a website that integrates with your marketing stack (CRM, analytics, ads)",
  "You value clean code, fast loading, and Core Web Vitals compliance",
];

const notForYou = [
  "You just want a ₹5k WordPress site with no strategy",
  "You need a website builder tutorial, not a development partner",
  "You're looking for the cheapest option regardless of quality",
  "You need a website in 3 days with no design process",
  "You want to micromanage every pixel without trusting the process",
];

export const WDRelevanceSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [leftCardRef, leftCardVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [rightCardRef, rightCardVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section ref={sectionRef} className="py-8 md:py-14 lg:py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-6 md:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4 border border-orange-500/30">Instant Relevance Filter</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Is Custom Web Design Right For You?</h2>
          <p className="text-lg text-gray-300">We build websites for businesses serious about growth — here's how to know if we're the right fit</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          <div ref={leftCardRef} className={`transition-all duration-700 delay-100 ${leftCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <Card className="bg-green-950/50 backdrop-blur-sm border-green-800 shadow-xl shadow-green-500/5 hover:-translate-y-2 transition-all duration-500 h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30"><Check className="w-5 h-5 text-white" /></div>
                  <h3 className="text-xl font-bold text-green-400">This is for you if...</h3>
                </div>
                <ul className="space-y-4">
                  {forYou.map((item, index) => (
                    <li key={index} className={`flex items-start gap-3 transition-all duration-500 ${leftCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: `${(index + 2) * 100}ms` }}>
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-3 h-3 text-white" /></div>
                      <span className="text-gray-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div ref={rightCardRef} className={`transition-all duration-700 delay-200 ${rightCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <Card className="bg-red-950/50 backdrop-blur-sm border-red-800 shadow-xl shadow-red-500/5 hover:-translate-y-2 transition-all duration-500 h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30"><X className="w-5 h-5 text-white" /></div>
                  <h3 className="text-xl font-bold text-red-400">Not for you if...</h3>
                </div>
                <ul className="space-y-4">
                  {notForYou.map((item, index) => (
                    <li key={index} className={`flex items-start gap-3 transition-all duration-500 ${rightCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: `${(index + 3) * 100}ms` }}>
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><X className="w-3 h-3 text-white" /></div>
                      <span className="text-gray-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className={`flex flex-col sm:flex-row gap-3 justify-center mt-8 md:mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:scale-105 transition-all duration-300 group">
            <Sparkles className="w-4 h-4 mr-2" />Get Free Website Consultation<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline-white" size="lg" onClick={() => setShowEnquiryPopup(true)} className="hover:scale-105 transition-all duration-300"><MessageCircle className="w-4 h-4 mr-2" />Enquire Now</Button>
        </div>
      </div>

      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </section>
  );
};
