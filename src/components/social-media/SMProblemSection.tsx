import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ThumbsDown, Palette, Clock, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BentoGrid, BentoBadge } from "@/components/ui/bento-grid";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const problems = [
  {
    icon: Eye,
    title: "Your Posts Get Scrolled Past",
    description: "Generic Canva templates blend into the feed — no one stops, no one clicks, no one remembers your brand."
  },
  {
    icon: ThumbsDown,
    title: "Low Engagement Despite Posting Daily",
    description: "You're consistent but your likes, comments, and shares have flatlined for months."
  },
  {
    icon: Palette,
    title: "Inconsistent Brand Identity",
    description: "Every post looks different — no cohesive color palette, typography, or visual language across platforms."
  },
  {
    icon: Clock,
    title: "Design Takes Too Long",
    description: "Your team spends hours on each post instead of focusing on strategy and growth."
  }
];

export const SMProblemSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section 
      ref={sectionRef}
      className="py-8 md:py-14 lg:py-20 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-6 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <BentoBadge className="bg-destructive/10 text-destructive mb-4">The Problem</BentoBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Social Media Posts Should Stop the Scroll. <span className="text-destructive">Do They?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Most brands need a real social media design agency in Bangalore — not another Canva template factory. Here's why generic creatives fail.
          </p>
        </div>

        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6 md:mb-10">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className={`bento-card hover:border-destructive/50 transition-all duration-500 group hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <CardContent className="p-4 md:p-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-destructive/10 rounded-2xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-destructive transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <problem.icon className="w-7 h-7 text-destructive group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-destructive transition-colors">{problem.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </BentoGrid>

        <div className={`flex flex-col sm:flex-row gap-3 justify-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            size="lg"
            className="bg-brand-gradient hover:opacity-90 text-white hover:scale-105 transition-all duration-300 group"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Get Scroll-Stopping Designs
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => setShowEnquiryPopup(true)} className="hover:scale-105 transition-all duration-300 group">
            <MessageCircle className="w-4 h-4 mr-2" />
            Enquire Now
          </Button>
        </div>
      </div>

      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </section>
  );
};
