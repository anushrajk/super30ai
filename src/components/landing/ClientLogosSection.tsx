import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-10 bg-background border-b border-border/30 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 via-transparent to-orange-50/50 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        {/* Trust header */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm font-medium text-foreground">
            Trusted by <span className="text-orange-500 font-bold">50+ leading companies</span> across industries
          </p>
        </div>

        {/* Scrolling logos */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Duplicate logos for infinite scroll effect */}
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <div 
              key={index}
              className="flex-shrink-0 flex items-center gap-3 px-5 py-3 bg-background rounded-xl border border-border/50 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 hover:scale-105 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center shadow-inner">
                <span className="text-slate-700 font-bold text-sm">{client.initials}</span>
              </div>
              <div>
                <span className="text-foreground font-medium whitespace-nowrap block text-sm">{client.name}</span>
                <span className="text-muted-foreground text-xs">{client.industry}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Results proof */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-6 border-t border-border/50">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">300%+</p>
            <p className="text-xs text-muted-foreground">Avg. Traffic Growth</p>
          </div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">50+</p>
            <p className="text-xs text-muted-foreground">AI Audits Delivered</p>
          </div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">$2M+</p>
            <p className="text-xs text-muted-foreground">Revenue Generated</p>
          </div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">4.9/5</p>
            <p className="text-xs text-muted-foreground">Client Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};
