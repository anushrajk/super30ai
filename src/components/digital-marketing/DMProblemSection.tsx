import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const problems = [
  { title: "Disconnected Marketing Channels", description: "Your SEO, ads, social media, and email are managed by different teams with no unified strategy — leading to missed opportunities and wasted budget." },
  { title: "Plateaued Growth Despite Spend", description: "You've hired agencies but results flatline after the first quarter. Without an integrated approach, growth hits a ceiling every time." },
  { title: "Rising Costs, Flat Revenue", description: "Your marketing spend keeps climbing but customer acquisition cost stays stubbornly high. Every campaign leaks money without proper optimization." },
  { title: "Zero Attribution Clarity", description: "You can't tell which channel actually drives revenue. A proper digital marketing agency in Bangalore should solve this on day one." },
];

export const DMProblemSection = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-14">
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
            The Problem with Most Digital Marketing in Bangalore
          </span>
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Digital Marketing Without Strategy Is Just <span className="text-brand">Expensive Noise</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Most Bangalore businesses juggle 5+ tools, 3+ agencies, and still can't answer: <em>"Where did that lead come from?"</em>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-12">
          {problems.map((problem, i) => (
            <div key={i} className="bg-white border border-border/50 rounded-xl p-4 md:p-6">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} size="lg" className="bg-brand hover:bg-brand/90 text-white rounded-full px-6 sm:px-8 text-sm sm:text-base">
            Get Your Free Digital Marketing Audit <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => setShowEnquiryPopup(true)} className="rounded-full px-6 sm:px-8 border-brand/30 text-brand hover:bg-brand/5 text-sm sm:text-base">
            <MessageCircle className="w-4 h-4 mr-2" /> Enquire Now
          </Button>
        </div>
      </div>
      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </section>
  );
};
