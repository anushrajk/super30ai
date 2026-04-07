import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const forYou = [
  "You're spending ₹1L+/month on marketing but can't connect spend to revenue",
  "You want one agency managing SEO, ads, social, and design together",
  "You need compounding growth, not just quick wins",
  "You're tired of agencies that report impressions but not pipeline",
  "You value transparency, real-time dashboards, and clear reporting",
  "You want a Bangalore-based team you can meet in person",
];

const notForYou = [
  "You just want to buy followers or fake engagement",
  "Your total monthly marketing budget is under ₹25,000",
  "You expect overnight results without investing in strategy",
  "You're looking for a single freelancer, not a full-service agency",
  "You change agencies every 2 months without giving strategies time",
];

export const DMRelevanceSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-24 bg-foreground">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-8 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand/20 text-brand rounded-full text-sm font-medium mb-4 border border-brand/30">
            Is Our Digital Marketing Agency Right for You?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Is a Full-Service <span className="text-brand">Digital Marketing Agency in Bangalore</span> Right For You?
          </h2>
          <p className="text-lg text-gray-300">
            We're honest about who we can help — and who would be better served elsewhere
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <Card className={`bg-white/5 border-brand/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand">For you if...</h3>
              </div>
              <ul className="space-y-4">
                {forYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className={`bg-white/5 border-white/10 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-400">Not for you if...</h3>
              </div>
              <ul className="space-y-4">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className={`flex flex-col sm:flex-row gap-3 justify-center mt-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            size="lg"
            className="bg-brand hover:bg-brand/90 text-white rounded-full px-8"
          >
            Get Free Digital Marketing Strategy
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowEnquiryPopup(true)}
            className="rounded-full px-8 border-white/20 text-white hover:bg-white/10"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Enquire Now
          </Button>
        </div>
      </div>

      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </section>
  );
};
