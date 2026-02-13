import { 
  ShoppingCart, 
  Cloud, 
  Users, 
  Package, 
  CheckCircle2,
  GraduationCap,
  Stethoscope,
  Rocket,
  Home as HomeIcon,
  Scale,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BentoBadge } from "@/components/ui/bento-grid";

// Color palette for multi-colored icons - SOLID colors with solid checkmarks
const iconColor = { bg: "from-[#F95B00] to-[#e04f00]", glow: "bg-[#F95B00]/50", text: "text-white", checkBg: "bg-[#F95B00]", checkText: "text-white" };

const audiences = [
  {
    icon: ShoppingCart,
    title: "E-commerce Brands",
    description: "Scale your online store with AI-optimized product ads and retargeting campaigns.",
    features: ["Shopping campaigns", "Dynamic retargeting", "ROAS optimization"],
  },
  {
    icon: Cloud,
    title: "SaaS Companies",
    description: "Generate qualified demos and trials with precision B2B targeting.",
    features: ["Lead gen campaigns", "Account-based ads", "Free trial acquisition"],
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Fill your pipeline with high-intent leads at predictable costs.",
    features: ["Form campaigns", "Call ads", "Landing page optimization"],
  },
  {
    icon: Package,
    title: "D2C Brands",
    description: "Build brand awareness and drive direct sales with social-first strategies.",
    features: ["Meta & Instagram ads", "Influencer amplification", "Brand campaigns"],
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description: "Reach students and professionals with targeted educational campaigns.",
    features: ["Enrollment campaigns", "Webinar promotion", "Course marketing"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Build trust and attract patients with compliant healthcare advertising.",
    features: ["Patient acquisition", "HIPAA-compliant ads", "Local targeting"],
  },
  {
    icon: Rocket,
    title: "Tech Startups",
    description: "Scale your user acquisition with data-driven growth campaigns.",
    features: ["App installs", "User acquisition", "Growth experiments"],
  },
  {
    icon: HomeIcon,
    title: "Real Estate",
    description: "Generate quality property leads with hyper-local targeting strategies.",
    features: ["Property listing ads", "Lead generation", "Geo-targeting"],
  },
  {
    icon: Scale,
    title: "Legal Services",
    description: "Attract high-value clients with precision legal marketing campaigns.",
    features: ["Case type targeting", "Local service ads", "Retargeting"],
  },
];

export const PMTargetAudienceSection = () => {
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
          <BentoBadge className="mb-4">Who We Help</BentoBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Built for Growth-Focused Businesses
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Our AI-powered approach works across industries and business models
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
            {audiences.map((audience, index) => (
              <Card 
                key={index}
                className={`flex-shrink-0 w-[260px] sm:w-[280px] bg-white border border-gray-100 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 hover:border-gray-200 hover:-translate-y-2 transition-all duration-500 group overflow-hidden snap-start rounded-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${(index + 1) * 50}ms` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand/0 to-brand/0 group-hover:from-brand/5 group-hover:to-brand/10 transition-colors duration-300" />
                
                <CardContent className="p-4 md:p-5 relative">
                  {/* Solid color icon */}
                  <div className="relative mb-3">
                    <div className={`absolute inset-0 w-12 h-12 ${iconColor.glow} rounded-xl blur-xl transition-all duration-300`} />
                    <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${iconColor.bg} shadow-lg group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl transition-all duration-300`}>
                      <audience.icon className={`w-6 h-6 ${iconColor.text}`} />
                    </div>
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{audience.description}</p>

                  <ul className="space-y-1.5">
                    {audience.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-800 font-medium">
                        <div className={`w-5 h-5 rounded-full ${iconColor.checkBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                          <CheckCircle2 className={`w-3 h-3 ${iconColor.checkText}`} />
                        </div>
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
