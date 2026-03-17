import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, Target, Share2, Palette, Globe, Mail, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const verticals = [
  { icon: Search, label: "AI SEO", color: "18 100% 48%", desc: "Organic Visibility" },
  { icon: Target, label: "Performance Ads", color: "217 91% 60%", desc: "Paid Conversions" },
  { icon: Share2, label: "Social Media", color: "292 84% 61%", desc: "Brand Awareness" },
  { icon: Palette, label: "Design", color: "38 92% 50%", desc: "Visual Identity" },
  { icon: Globe, label: "Web Design", color: "168 76% 42%", desc: "Digital Experience" },
  { icon: Mail, label: "Email Marketing", color: "0 84% 60%", desc: "Lead Nurturing" },
];

// Positions around center (angle in degrees for each node)
const nodePositions = [
  { angle: 270, radius: 1 },   // top
  { angle: 330, radius: 1 },   // top-right
  { angle: 30, radius: 1 },    // bottom-right
  { angle: 90, radius: 1 },    // bottom
  { angle: 150, radius: 1 },   // bottom-left
  { angle: 210, radius: 1 },   // top-left
];

const FlowingDot = ({ angle, color, delay, isVisible }: { angle: number; color: string; delay: number; isVisible: boolean }) => {
  if (!isVisible) return null;
  
  const rad = (angle * Math.PI) / 180;
  
  return (
    <div
      className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full z-20"
      style={{
        background: `hsl(${color})`,
        boxShadow: `0 0 8px hsl(${color} / 0.8), 0 0 16px hsl(${color} / 0.4)`,
        animation: `flowToCenter-${Math.round(angle)} 2.5s ${delay}s ease-in-out infinite`,
      }}
    />
  );
};

export const GrowthEcosystemSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 });
  const [animStarted, setAnimStarted] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setAnimStarted(true), 600);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Generate CSS keyframes for each angle
  const keyframes = nodePositions.map((pos) => {
    const rad = (pos.angle * Math.PI) / 180;
    const startX = Math.cos(rad) * 140;
    const startY = Math.sin(rad) * 140;
    return `
      @keyframes flowToCenter-${Math.round(pos.angle)} {
        0% { transform: translate(calc(-50% + ${startX}px), calc(-50% + ${startY}px)); opacity: 0; }
        15% { opacity: 1; }
        85% { opacity: 1; }
        100% { transform: translate(-50%, -50%); opacity: 0; }
      }
    `;
  }).join("\n");

  // Mobile keyframes (smaller radius)
  const mobileKeyframes = nodePositions.map((pos) => {
    const rad = (pos.angle * Math.PI) / 180;
    const startX = Math.cos(rad) * 100;
    const startY = Math.sin(rad) * 100;
    return `
      @keyframes mobileFlowToCenter-${Math.round(pos.angle)} {
        0% { transform: translate(calc(-50% + ${startX}px), calc(-50% + ${startY}px)); opacity: 0; }
        15% { opacity: 1; }
        85% { opacity: 1; }
        100% { transform: translate(-50%, -50%); opacity: 0; }
      }
    `;
  }).join("\n");

  return (
    <section className="py-10 md:py-16 lg:py-24 bg-foreground overflow-hidden" ref={sectionRef}>
      <style>{keyframes}{mobileKeyframes}</style>
      <div className="container mx-auto px-3 md:px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.3] mb-4">
            <span className="text-brand">360° Growth</span>{" "}
            <span className="text-white">Ecosystem</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            Every service is a growth lever. When all verticals work in sync, your brand doesn't just grow — it dominates.
          </p>
        </div>

        {/* Motherboard / Chip Layout */}
        <div className="max-w-2xl mx-auto relative">
          {/* Circuit board background pattern */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            
            {/* Circuit traces (lines from nodes to center) */}
            <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 500 500">
              {nodePositions.map((pos, i) => {
                const rad = (pos.angle * Math.PI) / 180;
                const outerX = 250 + Math.cos(rad) * 190;
                const outerY = 250 + Math.sin(rad) * 190;
                const color = verticals[i].color;
                return (
                  <g key={i}>
                    {/* Main trace line */}
                    <line
                      x1={250} y1={250}
                      x2={outerX} y2={outerY}
                      stroke={`hsl(${color} / 0.25)`}
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                      style={{ transitionDelay: `${i * 150}ms` }}
                    />
                    {/* Circuit board junction dots */}
                    <circle
                      cx={250 + Math.cos(rad) * 95}
                      cy={250 + Math.sin(rad) * 95}
                      r="3"
                      fill={`hsl(${color} / 0.4)`}
                      className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                      style={{ transitionDelay: `${i * 150 + 300}ms` }}
                    />
                    <circle
                      cx={250 + Math.cos(rad) * 145}
                      cy={250 + Math.sin(rad) * 145}
                      r="2.5"
                      fill={`hsl(${color} / 0.3)`}
                      className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                      style={{ transitionDelay: `${i * 150 + 200}ms` }}
                    />
                  </g>
                );
              })}
              {/* Inner ring around brand hub */}
              <circle cx="250" cy="250" r="65" fill="none" stroke="hsl(18 100% 48% / 0.15)" strokeWidth="1" strokeDasharray="3 6"
                className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              />
              {/* Outer ring */}
              <circle cx="250" cy="250" r="190" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.08"
                className={`transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              />
            </svg>

            {/* Central BRAND Hub (chip) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div
                className={`w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-brand flex flex-col items-center justify-center transition-all duration-700 border border-brand/50 ${
                  isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}
                style={{ boxShadow: "0 0 40px hsl(18 100% 48% / 0.2)" }}
              >
                <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-white mb-1" />
                <span className="text-white font-bold text-sm md:text-base tracking-wider">BRAND</span>
                <span className="text-white/70 text-[10px] uppercase tracking-widest">Growth</span>
              </div>
            </div>

            {/* Flowing dots */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 w-0 h-0">
                {animStarted && verticals.map((v, i) => (
                  <div key={`dots-${i}`}>
                    <FlowingDot angle={nodePositions[i].angle} color={v.color} delay={0} isVisible={animStarted} />
                    <FlowingDot angle={nodePositions[i].angle} color={v.color} delay={0.8} isVisible={animStarted} />
                    <FlowingDot angle={nodePositions[i].angle} color={v.color} delay={1.6} isVisible={animStarted} />
                  </div>
                ))}
              </div>
            </div>

            {/* Service Nodes (chips around the center) */}
            {verticals.map((v, i) => {
              const rad = (nodePositions[i].angle * Math.PI) / 180;
              const x = 50 + (Math.cos(rad) * 38); // percentage from center
              const y = 50 + (Math.sin(rad) * 38);

              return (
                <div
                  key={i}
                  className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transitionDelay: `${i * 120 + 200}ms`,
                  }}
                >
                  <div
                    className="flex flex-col items-center gap-1.5 px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-white/10 backdrop-blur-sm hover:border-white/25 transition-colors duration-300 cursor-default group"
                    style={{
                      background: `linear-gradient(135deg, hsl(${v.color} / 0.12), hsl(${v.color} / 0.04))`,
                    }}
                  >
                    <div
                      className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `hsl(${v.color} / 0.2)` }}
                    >
                      <v.icon className="w-4 h-4 md:w-5 md:h-5" style={{ color: `hsl(${v.color})` }} />
                    </div>
                    <span className="text-white font-semibold text-[10px] md:text-xs whitespace-nowrap">{v.label}</span>
                    <span className="text-white/40 text-[8px] md:text-[10px] whitespace-nowrap hidden md:block">{v.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Message */}
          <div
            className={`mt-10 md:mt-14 text-center transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
              <p className="text-white/90 text-base md:text-lg font-medium mb-2">
                🚀 Brands with a longer vision need <span className="text-brand font-bold">all verticals working in harmony</span>.
              </p>
              <p className="text-white/50 text-sm md:text-base">
                SEO builds long-term authority, ads drive immediate conversions, social creates brand recall, 
                design shapes perception, web converts visitors, and email nurtures relationships. 
                Together, they create an unstoppable growth engine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
