import { useState, useRef, useEffect } from "react";
import {
  Search, TrendingUp, Target, Users, BarChart3, Shield, Globe, Zap, Clock,
  CheckCircle2, ChevronLeft, ChevronRight, Sparkles, ArrowRight, MessageCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const benefits = [
  {
    icon: Search,
    title: "Organic Visibility",
    description: "Dominate Google rankings with AI-powered SEO — a core strength of our digital marketing agency in Bangalore.",
    features: ["AI SEO optimization", "Content strategy", "Technical SEO"],
  },
  {
    icon: Target,
    title: "Paid Acquisition",
    description: "Google, Meta, and LinkedIn ads optimized by AI for maximum ROAS. Our Bangalore experts manage every rupee.",
    features: ["Smart bidding", "AI audiences", "Cross-platform"],
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description: "Every marketing dollar tracked from click to close. Our digital marketing services in Bangalore focus on pipeline, not vanity.",
    features: ["Full-funnel attribution", "Pipeline tracking", "Revenue dashboards"],
  },
  {
    icon: Users,
    title: "Brand Building",
    description: "Build a brand recognized and trusted across Bangalore — through strategic social media, content, and community.",
    features: ["Social media strategy", "Content creation", "Community building"],
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description: "AI-powered analytics that predict outcomes and prescribe next actions for your digital marketing campaigns.",
    features: ["Predictive analytics", "A/B testing", "Performance forecasting"],
  },
  {
    icon: Shield,
    title: "Competitive Intelligence",
    description: "Know what your Bangalore competitors are doing digitally — and stay three steps ahead with our AI tools.",
    features: ["Competitor monitoring", "Gap analysis", "Market positioning"],
  },
  {
    icon: Globe,
    title: "Multi-Channel Presence",
    description: "Unified brand voice across SEO, ads, social, email, and web — orchestrated as one coherent digital marketing engine.",
    features: ["Channel integration", "Consistent messaging", "Cross-platform synergy"],
  },
  {
    icon: Zap,
    title: "Speed to Market",
    description: "Launch digital marketing campaigns in days, not weeks. AI handles the heavy lifting so your Bangalore brand moves fast.",
    features: ["Rapid deployment", "AI content generation", "Automated workflows"],
  },
  {
    icon: Clock,
    title: "Always-On Marketing",
    description: "Your digital marketing machine works 24/7 — SEO, retargeting, and automation never sleep even when you do.",
    features: ["Marketing automation", "Nurture sequences", "Retargeting funnels"],
  },
];

export const DMBenefitsSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isVisible) return;
    let animationId: number;
    const autoScroll = () => {
      if (!isPaused && container) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll) container.scrollLeft = 0;
        else container.scrollLeft += 0.5;
      }
      animationId = requestAnimationFrame(autoScroll);
    };
    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, isVisible]);

  const scrollCards = (direction: 'left' | 'right') => {
    scrollContainerRef.current?.scrollBy({ left: direction === 'left' ? -320 : 320, behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="py-8 md:py-14 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-8 md:mb-12 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4 border border-brand/20">
            Why Choose Our Digital Marketing Agency in Bangalore
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Everything Your Business Needs to <span className="text-brand">Grow Online</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            A complete digital marketing engine — from traffic to revenue — built by Bangalore's top marketing experts
          </p>
        </div>

        <div className="relative group/carousel">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollCards('left')}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-border rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 text-foreground"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-4 md:gap-5 overflow-x-auto pb-6 px-4 sm:px-12 snap-x snap-mandatory custom-scrollbar"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className={`flex-shrink-0 w-[280px] sm:w-[300px] bg-white border border-border/50 shadow-none overflow-hidden snap-start rounded-2xl ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              >
                <CardContent className="p-5 md:p-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand/10 mb-4">
                    <benefit.icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-foreground font-medium">
                        <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollCards('right')}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-border rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 text-foreground"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        <p className="text-center mt-3 text-sm text-muted-foreground sm:hidden flex items-center justify-center gap-2">
          <ChevronLeft className="w-4 h-4" /> Swipe to explore <ChevronRight className="w-4 h-4" />
        </p>

        <div className={`flex flex-col sm:flex-row gap-3 justify-center mt-8 md:mt-12 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            size="lg"
            className="bg-brand hover:bg-brand/90 text-white rounded-full px-8"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Get Your Free Digital Marketing Strategy
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
