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

const audiences = [
  {
    icon: ShoppingCart,
    title: "E-commerce Brands",
    description: "Scale your online store with AI-optimized product ads and retargeting campaigns.",
    features: ["Shopping campaigns", "Dynamic retargeting", "ROAS optimization"],
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Cloud,
    title: "SaaS Companies",
    description: "Generate qualified demos and trials with precision B2B targeting.",
    features: ["Lead gen campaigns", "Account-based ads", "Free trial acquisition"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Fill your pipeline with high-intent leads at predictable costs.",
    features: ["Form campaigns", "Call ads", "Landing page optimization"],
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Package,
    title: "D2C Brands",
    description: "Build brand awareness and drive direct sales with social-first strategies.",
    features: ["Meta & Instagram ads", "Influencer amplification", "Brand campaigns"],
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description: "Reach students and professionals with targeted educational campaigns.",
    features: ["Enrollment campaigns", "Webinar promotion", "Course marketing"],
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Build trust and attract patients with compliant healthcare advertising.",
    features: ["Patient acquisition", "HIPAA-compliant ads", "Local targeting"],
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Rocket,
    title: "Tech Startups",
    description: "Scale your user acquisition with data-driven growth campaigns.",
    features: ["App installs", "User acquisition", "Growth experiments"],
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: HomeIcon,
    title: "Real Estate",
    description: "Generate quality property leads with hyper-local targeting strategies.",
    features: ["Property listing ads", "Lead generation", "Geo-targeting"],
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Scale,
    title: "Legal Services",
    description: "Attract high-value clients with precision legal marketing campaigns.",
    features: ["Case type targeting", "Local service ads", "Retargeting"],
    color: "from-slate-500 to-gray-600",
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
      className="py-12 md:py-16 lg:py-24 bg-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent dark:via-blue-950/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-10 md:mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Who We Help
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for Growth-Focused Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
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
            className="flex gap-4 md:gap-6 overflow-x-auto pb-4 px-4 sm:px-8 snap-x snap-mandatory custom-scrollbar-blue"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {audiences.map((audience, index) => (
              <Card 
                key={index}
                className={`flex-shrink-0 w-[280px] sm:w-[300px] bg-background/95 border-border/50 hover:border-blue-500/50 hover:shadow-2xl transition-all duration-500 group overflow-hidden snap-start ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${(index + 1) * 50}ms` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-primary/0 group-hover:from-blue-500/5 group-hover:to-primary/5 transition-colors duration-300" />
                
                <CardContent className="p-6 relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${audience.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <audience.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors duration-300">{audience.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{audience.description}</p>

                  <ul className="space-y-2">
                    {audience.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
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
        <p className="text-center mt-4 text-sm text-muted-foreground sm:hidden">
          Swipe to explore more
        </p>
      </div>
    </section>
  );
};