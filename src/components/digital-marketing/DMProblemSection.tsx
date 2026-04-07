import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Unplug, TrendingDown, Shuffle, DollarSign, ArrowRight, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const problems = [
  {
    icon: Shuffle,
    title: "Disconnected Marketing Channels",
    description: "Your SEO, ads, social media, and email are managed by different teams with no unified strategy — leading to missed opportunities and wasted budget."
  },
  {
    icon: TrendingDown,
    title: "Plateaued Growth Despite Spend",
    description: "You've hired agencies but results flatline after the first quarter. Without an integrated approach, growth hits a ceiling every time."
  },
  {
    icon: DollarSign,
    title: "Rising Costs, Flat Revenue",
    description: "Your marketing spend keeps climbing but customer acquisition cost stays stubbornly high. Every campaign leaks money without proper optimization."
  },
  {
    icon: Unplug,
    title: "Zero Attribution Clarity",
    description: "You can't tell which channel actually drives revenue. A proper digital marketing agency in Bangalore should solve this on day one."
  }
];

export const DMProblemSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-8 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4 border border-brand/20">
            The Problem with Most Digital Marketing in Bangalore
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Digital Marketing Without Strategy Is Just <span className="text-brand">Expensive Noise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Most Bangalore businesses juggle 5+ tools, 3+ agencies, and still can't answer: <em>"Where did that lead come from?"</em>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className={`bg-white border border-border/50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <CardContent className="p-5 md:p-6">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`flex flex-col sm:flex-row gap-3 justify-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            size="lg"
            className="bg-brand hover:bg-brand/90 text-white rounded-full px-8"
          >
            Get Your Free Digital Marketing Audit
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowEnquiryPopup(true)}
            className="rounded-full px-8 border-brand/30 text-brand hover:bg-brand/5"
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
