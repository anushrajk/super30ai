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
  ChevronRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BentoBadge } from "@/components/ui/bento-grid";

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
      className="py-6 md:py-10 lg:py-16 bg-muted/30 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/5 to-transparent" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-3 md:px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-6 md:mb-10 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <BentoBadge className="mb-4">Why Choose AI SEO</BentoBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            This is How Our SEO Services Will Help Your Business Thrive
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
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
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-background"
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
                className={`flex-shrink-0 w-[260px] sm:w-[280px] bento-card border-border/50 hover:border-brand/30 transition-all duration-500 group overflow-hidden snap-start ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${(index + 1) * 50}ms` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand/0 to-brand/0 group-hover:from-brand/5 group-hover:to-brand/10 transition-colors duration-300" />
                
                <CardContent className="p-4 md:p-5 relative">
                  <div className="icon-bg-glow w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:bg-brand-gradient group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <benefit.icon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-brand transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{benefit.description}</p>

                  <ul className="space-y-1.5">
                    {benefit.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
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
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-background"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile swipe hint */}
        <p className="text-center mt-3 text-sm text-muted-foreground sm:hidden">
          Swipe to explore more
        </p>
      </div>
    </section>
  );
};
