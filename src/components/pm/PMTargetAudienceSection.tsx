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

// Color palette for multi-colored icons
const iconColors = [
  { bg: "from-violet-500/20 to-purple-500/20", border: "border-violet-500/30", glow: "bg-violet-500/30", text: "text-violet-400", hoverBg: "group-hover:from-violet-500 group-hover:to-purple-500" },
  { bg: "from-emerald-500/20 to-teal-500/20", border: "border-emerald-500/30", glow: "bg-emerald-500/30", text: "text-emerald-400", hoverBg: "group-hover:from-emerald-500 group-hover:to-teal-500" },
  { bg: "from-amber-500/20 to-orange-500/20", border: "border-amber-500/30", glow: "bg-amber-500/30", text: "text-amber-400", hoverBg: "group-hover:from-amber-500 group-hover:to-orange-500" },
  { bg: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-500/30", glow: "bg-cyan-500/30", text: "text-cyan-400", hoverBg: "group-hover:from-cyan-500 group-hover:to-blue-500" },
  { bg: "from-rose-500/20 to-pink-500/20", border: "border-rose-500/30", glow: "bg-rose-500/30", text: "text-rose-400", hoverBg: "group-hover:from-rose-500 group-hover:to-pink-500" },
  { bg: "from-indigo-500/20 to-blue-500/20", border: "border-indigo-500/30", glow: "bg-indigo-500/30", text: "text-indigo-400", hoverBg: "group-hover:from-indigo-500 group-hover:to-blue-500" },
  { bg: "from-lime-500/20 to-green-500/20", border: "border-lime-500/30", glow: "bg-lime-500/30", text: "text-lime-400", hoverBg: "group-hover:from-lime-500 group-hover:to-green-500" },
  { bg: "from-fuchsia-500/20 to-purple-500/20", border: "border-fuchsia-500/30", glow: "bg-fuchsia-500/30", text: "text-fuchsia-400", hoverBg: "group-hover:from-fuchsia-500 group-hover:to-purple-500" },
  { bg: "from-sky-500/20 to-cyan-500/20", border: "border-sky-500/30", glow: "bg-sky-500/30", text: "text-sky-400", hoverBg: "group-hover:from-sky-500 group-hover:to-cyan-500" },
];

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
                className={`flex-shrink-0 w-[260px] sm:w-[280px] bento-card border-border/50 hover:border-brand/30 transition-all duration-500 group overflow-hidden snap-start ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${(index + 1) * 50}ms` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand/0 to-brand/0 group-hover:from-brand/5 group-hover:to-brand/10 transition-colors duration-300" />
                
                <CardContent className="p-4 md:p-5 relative">
                  {/* Multi-colored icon */}
                  <div className="relative mb-3">
                    <div className={`absolute inset-0 w-12 h-12 ${iconColors[index % iconColors.length].glow} rounded-xl blur-lg group-hover:blur-xl transition-all duration-300`} />
                    <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${iconColors[index % iconColors.length].bg} border ${iconColors[index % iconColors.length].border} ${iconColors[index % iconColors.length].hoverBg} group-hover:scale-110 group-hover:rotate-3 group-hover:border-white/30 transition-all duration-300 shadow-lg`}>
                      <audience.icon className={`w-6 h-6 ${iconColors[index % iconColors.length].text} group-hover:text-white transition-colors duration-300`} />
                    </div>
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-foreground transition-colors duration-300">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{audience.description}</p>

                  <ul className="space-y-1.5">
                    {audience.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${iconColors[index % iconColors.length].bg} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle2 className={`w-2.5 h-2.5 ${iconColors[index % iconColors.length].text}`} />
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
