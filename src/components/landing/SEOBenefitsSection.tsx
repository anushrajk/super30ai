import { useState, useRef, useEffect } from "react";
import { 
  Search, 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3,
  Shield,
  Globe,
  Zap,
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const benefits = [
  {
    icon: Search,
    title: "AI Search Visibility",
    description: "Dominate ChatGPT, Perplexity, and Google AI Overviews with optimized content.",
    features: ["AI query optimization", "LLM citations", "Generative search visibility"],
  },
  {
    icon: TrendingUp,
    title: "Organic Traffic Growth",
    description: "Drive sustainable, high-quality traffic that converts without paid ads.",
    features: ["Long-term rankings", "Compound growth", "Zero ad spend"],
  },
  {
    icon: Target,
    title: "High-Intent Leads",
    description: "Attract visitors actively searching for your solutions.",
    features: ["Intent mapping", "Buyer journey targeting", "Conversion optimization"],
  },
  {
    icon: Users,
    title: "Brand Authority",
    description: "Position your business as the trusted expert in your industry.",
    features: ["Thought leadership", "Industry citations", "Trust signals"],
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    description: "Track every lead and sale back to your SEO investment.",
    features: ["Revenue attribution", "Clear reporting", "Performance metrics"],
  },
  {
    icon: Shield,
    title: "Future-Proof Strategy",
    description: "Stay ahead as AI transforms how people discover businesses.",
    features: ["Algorithm-proof", "AI-ready content", "Adaptive optimization"],
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Expand your visibility beyond local markets to global audiences.",
    features: ["International SEO", "Multi-language", "Market expansion"],
  },
  {
    icon: Zap,
    title: "Faster Results",
    description: "See meaningful improvements in weeks, not months.",
    features: ["Quick wins", "Prioritized actions", "Accelerated growth"],
  },
  {
    icon: Clock,
    title: "24/7 Visibility",
    description: "Your content works around the clock to attract customers.",
    features: ["Always-on marketing", "Passive lead gen", "Consistent presence"],
  },
];

export const SEOBenefitsSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  const scrollToForm = () => {
    const heroSection = document.getElementById('seo-hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isVisible) return;

    let animationId: number;
    const scrollSpeed = 0.5;

    const autoScroll = () => {
      if (!isPaused && container) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollSpeed;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused, isVisible]);

  const scrollCards = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-6 md:py-10 lg:py-16 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-3 md:px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-6 md:mb-10 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4 border border-orange-500/30">
            Why Choose AI SEO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            This is How Our SEO Services Will Help Your Business Thrive
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            Comprehensive AI-powered SEO that delivers real business results
          </p>
        </div>

        {/* Scrollable container with arrows */}
        <div className="relative group/carousel">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-4 w-8 md:w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-4 w-8 md:w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          {/* Left Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollCards('left')}
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white/10 hover:border-brand/30 hover:scale-110 text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div 
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-4 md:gap-5 overflow-x-auto pb-6 px-6 sm:px-12 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(255,255,255,0.1) transparent'
            }}
          >
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className={`flex-shrink-0 w-[280px] sm:w-[300px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 transition-all duration-500 group overflow-hidden snap-start rounded-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${(index + 1) * 50}ms` }}
              >
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/0 via-brand/0 to-brand/0 group-hover:from-brand/10 group-hover:via-transparent group-hover:to-brand/5 transition-all duration-500" />
                
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand/0 via-brand/20 to-brand/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                
                <CardContent className="p-5 md:p-6 relative">
                  {/* Icon with animated ring */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 w-14 h-14 bg-brand/20 rounded-xl blur-lg group-hover:bg-brand/40 transition-all duration-300" />
                    <div className="relative w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:border-brand/30 group-hover:from-brand/20 group-hover:to-brand/10 group-hover:scale-105 transition-all duration-300">
                      <benefit.icon className="w-7 h-7 text-brand group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">{benefit.description}</p>

                  <ul className="space-y-2">
                    {benefit.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-gray-300 group-hover:text-white/90 transition-colors duration-300">
                        <div className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/30 transition-colors">
                          <CheckCircle2 className="w-3 h-3 text-brand" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollCards('right')}
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white/10 hover:border-brand/30 hover:scale-110 text-white"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Scroll indicator dots - mobile */}
        <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
          <div className="w-8 h-1 rounded-full bg-brand/50" />
          <div className="w-2 h-1 rounded-full bg-white/20" />
          <div className="w-2 h-1 rounded-full bg-white/20" />
        </div>
        
        {/* Mobile swipe hint */}
        <p className="text-center mt-3 text-sm text-gray-500 sm:hidden flex items-center justify-center gap-2">
          <ChevronLeft className="w-4 h-4" />
          Swipe to explore
          <ChevronRight className="w-4 h-4" />
        </p>

        {/* Dual CTA */}
        <div className={`flex flex-col sm:flex-row gap-3 justify-center mt-8 md:mt-12 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25 hover:scale-105 transition-all duration-300 group"
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

      <EnquiryPopup 
        open={showEnquiryPopup} 
        onOpenChange={setShowEnquiryPopup} 
      />
    </section>
  );
};
