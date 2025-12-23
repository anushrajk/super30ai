import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const clientLogos = [
  { name: "TechFlow", initials: "TF", industry: "SaaS" },
  { name: "DataSync", initials: "DS", industry: "Enterprise" },
  { name: "CloudNine", initials: "C9", industry: "Cloud" },
  { name: "ScaleUp", initials: "SU", industry: "Fintech" },
  { name: "GrowthIQ", initials: "GQ", industry: "Analytics" },
  { name: "VentureX", initials: "VX", industry: "VC" },
  { name: "NexGen", initials: "NG", industry: "AI/ML" },
  { name: "AlphaAI", initials: "AA", industry: "Automation" },
  { name: "ByteWise", initials: "BW", industry: "Security" },
  { name: "InnoTech", initials: "IT", industry: "IoT" },
];

export const ClientLogosSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number>();
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Intersection Observer to pause animation when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0]?.isIntersecting ?? false);
      },
      { threshold: 0.1 }
    );
    observer.observe(scrollContainer);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isVisible) return;

    let lastTime = 0;
    const FRAME_INTERVAL = 1000 / 30; // 30 FPS

    const animate = (timestamp: number) => {
      const elapsed = timestamp - lastTime;
      
      if (elapsed >= FRAME_INTERVAL) {
        lastTime = timestamp - (elapsed % FRAME_INTERVAL);
        scrollPositionRef.current += 0.4; // Slightly slower scroll
        
        if (scrollPositionRef.current >= scrollContainer.scrollWidth / 2) {
          scrollPositionRef.current = 0;
        }
        
        // Use transform for GPU acceleration
        scrollContainer.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section className="py-6 md:py-10 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements - consistent with dark sections */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-10 left-10 w-48 h-48 bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Trust header */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4 md:mb-6">
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm font-medium text-white">
            Trusted by <span className="text-brand font-bold">50+ leading companies</span> across industries
          </p>
        </div>

        {/* Scrolling logos container */}
        <div className="overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-6 will-change-transform"
            style={{ width: "fit-content" }}
          >
            {/* Duplicate logos for infinite scroll effect */}
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div 
                key={index}
                className="flex-shrink-0 flex items-center gap-3 px-5 py-3 bg-white/5 rounded-xl border border-white/10 transition-colors duration-200 hover:border-brand/50"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-white/10 to-white/5 rounded-lg flex items-center justify-center border border-white/10">
                  <span className="text-white font-bold text-sm">{client.initials}</span>
                </div>
                <div>
                  <span className="text-white font-medium whitespace-nowrap block text-sm">{client.name}</span>
                  <span className="text-gray-400 text-xs">{client.industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results proof */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-4 md:mt-6 pt-3 md:pt-4 border-t border-white/10">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">300%+</p>
            <p className="text-xs text-gray-400">Avg. Traffic Growth</p>
          </div>
          <div className="w-px h-8 bg-white/20 hidden sm:block" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white">50+</p>
            <p className="text-xs text-gray-400">AI Audits Delivered</p>
          </div>
          <div className="w-px h-8 bg-white/20 hidden sm:block" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white">$2M+</p>
            <p className="text-xs text-gray-400">Revenue Generated</p>
          </div>
          <div className="w-px h-8 bg-white/20 hidden sm:block" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white">4.9/5</p>
            <p className="text-xs text-gray-400">Client Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};
