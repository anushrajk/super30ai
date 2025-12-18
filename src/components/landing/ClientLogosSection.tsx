import { useEffect, useRef } from "react";

const clientLogos = [
  { name: "TechFlow", initials: "TF" },
  { name: "DataSync", initials: "DS" },
  { name: "CloudNine", initials: "C9" },
  { name: "ScaleUp", initials: "SU" },
  { name: "GrowthIQ", initials: "GQ" },
  { name: "VentureX", initials: "VX" },
  { name: "NexGen", initials: "NG" },
  { name: "AlphaAI", initials: "AA" },
  { name: "ByteWise", initials: "BW" },
  { name: "InnoTech", initials: "IT" },
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
    <section className="py-8 bg-background border-b border-border/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium text-muted-foreground mb-6">
          Our Happy Clients
        </p>
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Duplicate logos for infinite scroll effect */}
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <div 
              key={index}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-muted/30 rounded-xl border border-border/50 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 font-bold text-sm">{client.initials}</span>
              </div>
              <span className="text-foreground font-medium whitespace-nowrap">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
