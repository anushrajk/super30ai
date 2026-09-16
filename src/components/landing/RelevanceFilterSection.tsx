import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { AuditChoicePopup } from "@/components/popups/AuditChoicePopup";

const forYou = [
  "You invest ₹50,000 monthly and expect measurable SEO performance",
  "Organic search visibility directly impacts your business growth",
  "You want stronger visibility across ChatGPT and Google AI results",
  "You prefer one accountable agency managing complete SEO execution",
  "You value sustainable long-term search growth and brand authority",
  "You rely on data driven decisions for marketing performance",
];

const notForYou = [
  "You only want short-term traffic spikes without a strategy",
  "You expect enterprise level SEO growth with only a 10k/mo budget",
  "You rely on outdated backlink selling or spam SEO tactics",
  "You expect overnight rankings without consistent optimization efforts",
  "You are not ready for a structured long-term SEO strategy",
];

export const RelevanceFilterSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [leftCardRef, leftCardVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [rightCardRef, rightCardVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [showAuditPopup, setShowAuditPopup] = useState(false);

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-20 lg:py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-6 md:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand/5 text-brand rounded-full text-xs font-semibold uppercase mb-4 border border-brand/20">
            Instant Fit Assessment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Is This SEO Strategy Right for Your Business?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            We're selective about who we work with and honest about who we can help. We partner with businesses that prioritize growth, search visibility, and measurable performance outcomes across Google and AI driven search platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {/* This is for you */}
          <div
            ref={leftCardRef}
            className={`transition-all duration-700 delay-100 ${leftCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <Card className="bg-card border-border hover:border-brand/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group h-full rounded-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-brand" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">This Is Best for You If...</h3>
                </div>
                <ul className="space-y-4">
                  {forYou.map((item, index) => (
                    <li 
                      key={index} 
                      className={`flex items-start gap-3 transition-all duration-500 ${leftCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                    >
                      <div className="w-5 h-5 bg-brand/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-brand" />
                      </div>
                      <span className="text-muted-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Not for you */}
          <div
            ref={rightCardRef}
            className={`transition-all duration-700 delay-200 ${rightCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <Card className="bg-card border-border hover:border-border/80 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group h-full rounded-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Not the Right Fit If...</h3>
                </div>
                <ul className="space-y-4">
                  {notForYou.map((item, index) => (
                    <li 
                      key={index} 
                      className={`flex items-start gap-3 transition-all duration-500 ${rightCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                      style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                    >
                      <div className="w-5 h-5 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <span className="text-muted-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Dual CTA */}
        <div className={`flex flex-col sm:flex-row gap-3 justify-center mt-8 md:mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          <Button 
            onClick={() => setShowAuditPopup(true)}
            size="lg"
            className="bg-brand hover:bg-brand/90 text-primary-foreground rounded-full transition-all duration-300 group"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Start Your Free SEO Audit
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline-brand"
            size="lg"
            onClick={() => setShowEnquiryPopup(true)}
            className="rounded-full transition-all duration-300 group"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Enquire Now
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <EnquiryPopup 
        open={showEnquiryPopup} 
        onOpenChange={setShowEnquiryPopup} 
      />
      <AuditChoicePopup 
        open={showAuditPopup} 
        onOpenChange={setShowAuditPopup} 
      />
    </section>
  );
};
