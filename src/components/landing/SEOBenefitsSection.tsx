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
          {/* Left Arrow - Hidden on mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollCards('left')}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white/20 text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <div 
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 sm:px-8 snap-x snap-mandatory custom-scrollbar"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className={`flex-shrink-0 w-[260px] sm:w-[280px] bg-white/5 border-white/10 hover:border-brand/30 transition-all duration-500 group overflow-hidden snap-start ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${(index + 1) * 50}ms` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand/0 to-brand/0 group-hover:from-brand/5 group-hover:to-brand/10 transition-colors duration-300" />
                
                <CardContent className="p-4 md:p-5 relative">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-brand/20 group-hover:bg-brand-gradient group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <benefit.icon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-brand transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">{benefit.description}</p>

                  <ul className="space-y-1.5">
                    {benefit.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Arrow - Hidden on mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollCards('right')}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white/20 text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile swipe hint */}
        <p className="text-center mt-3 text-sm text-gray-400 sm:hidden">
          Swipe to explore more
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
