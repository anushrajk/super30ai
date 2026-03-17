import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, Target, Share2, Palette, Globe, Mail } from "lucide-react";
import { BentoBadge } from "@/components/ui/bento-grid";
import super30Logo from "@/assets/super30-new-logo.png";

const services = [
  { icon: Search, label: "AI SEO", side: "left" as const },
  { icon: Globe, label: "Web Design", side: "left" as const },
  { icon: Target, label: "Performance Ads", side: "left" as const },
  { icon: Share2, label: "Social Media", side: "right" as const },
  { icon: Palette, label: "Design", side: "right" as const },
  { icon: Mail, label: "Email Marketing", side: "right" as const },
];

const leftServices = services.filter((s) => s.side === "left");
const rightServices = services.filter((s) => s.side === "right");

export const GrowthEcosystemSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="py-10 md:py-16 lg:py-24 bg-background overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-3 md:px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <BentoBadge className="mb-4">Integrated Growth</BentoBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.3] text-foreground mb-4">
            We work across{" "}
            <span className="text-brand">all verticals.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Every service connects to your brand — working in harmony to drive growth from every direction.
          </p>
        </div>

        {/* Integration Diagram */}
        <div className="max-w-4xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:block relative">
            <svg
              className="absolute inset-0 w-full h-full z-0"
              viewBox="0 0 800 400"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Left side lines */}
              {leftServices.map((_, i) => {
                const nodeY = 80 + i * 120;
                const centerX = 400;
                const centerY = 200;
                const nodeX = 160;
                const elbowX = 280;
                return (
                  <g key={`left-${i}`}>
                    <path
                      d={`M ${nodeX} ${nodeY} L ${elbowX} ${nodeY} L ${elbowX} ${centerY} L ${centerX - 70} ${centerY}`}
                      stroke="hsl(var(--foreground) / 0.15)"
                      strokeWidth="2"
                      fill="none"
                      className={`transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
                      style={{ transitionDelay: `${i * 150}ms` }}
                    />
                    {/* Junction dots */}
                    <circle cx={elbowX} cy={nodeY} r="4" fill="hsl(var(--brand))" opacity={isVisible ? 0.6 : 0}
                      className="transition-opacity duration-500" style={{ transitionDelay: `${i * 150 + 200}ms` }} />
                    <circle cx={elbowX} cy={centerY} r="4" fill="hsl(var(--brand))" opacity={isVisible ? 0.4 : 0}
                      className="transition-opacity duration-500" style={{ transitionDelay: `${i * 150 + 300}ms` }} />
                  </g>
                );
              })}
              {/* Right side lines */}
              {rightServices.map((_, i) => {
                const nodeY = 80 + i * 120;
                const centerX = 400;
                const centerY = 200;
                const nodeX = 640;
                const elbowX = 520;
                return (
                  <g key={`right-${i}`}>
                    <path
                      d={`M ${nodeX} ${nodeY} L ${elbowX} ${nodeY} L ${elbowX} ${centerY} L ${centerX + 70} ${centerY}`}
                      stroke="hsl(var(--foreground) / 0.15)"
                      strokeWidth="2"
                      fill="none"
                      className={`transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
                      style={{ transitionDelay: `${i * 150 + 100}ms` }}
                    />
                    <circle cx={elbowX} cy={nodeY} r="4" fill="hsl(var(--brand))" opacity={isVisible ? 0.6 : 0}
                      className="transition-opacity duration-500" style={{ transitionDelay: `${i * 150 + 300}ms` }} />
                    <circle cx={elbowX} cy={centerY} r="4" fill="hsl(var(--brand))" opacity={isVisible ? 0.4 : 0}
                      className="transition-opacity duration-500" style={{ transitionDelay: `${i * 150 + 400}ms` }} />
                  </g>
                );
              })}
            </svg>

            <div className="relative z-10 grid grid-cols-3 items-center" style={{ minHeight: 400 }}>
              {/* Left services */}
              <div className="flex flex-col gap-10 items-end pr-4">
                {leftServices.map((s, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-muted border border-border flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="font-semibold text-foreground text-sm">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Center brand hub */}
              <div className="flex justify-center">
                <div
                  className={`w-32 h-32 lg:w-36 lg:h-36 rounded-2xl bg-foreground flex items-center justify-center transition-all duration-700 ${isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
                >
                  <img src={super30Logo} alt="The Super 30" className="w-20 h-20 lg:w-24 lg:h-24 object-contain" />
                </div>
              </div>

              {/* Right services */}
              <div className="flex flex-col gap-10 items-start pl-4">
                {rightServices.map((s, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                    style={{ transitionDelay: `${i * 120 + 100}ms` }}
                  >
                    <span className="font-semibold text-foreground text-sm">{s.label}</span>
                    <div className="w-11 h-11 rounded-xl bg-muted border border-border flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden relative">
            {/* Center brand */}
            <div className={`flex justify-center mb-8 transition-all duration-700 ${isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}>
              <div className="w-24 h-24 rounded-2xl bg-foreground flex items-center justify-center">
                <img src={super30Logo} alt="The Super 30" className="w-16 h-16 object-contain" />
              </div>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-2 gap-3">
              {services.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-xl border border-border bg-card transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${i * 100 + 300}ms` }}
                >
                  <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <s.icon className="w-4 h-4 text-foreground" />
                  </div>
                  <span className="font-medium text-foreground text-xs">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Message */}
          <div
            className={`mt-10 md:mt-14 text-center transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="bg-muted/50 border border-border rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
              <p className="text-foreground text-base md:text-lg font-medium mb-2">
                Brands with a longer vision need <span className="text-brand font-bold">all verticals working in harmony</span>.
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                SEO builds authority, ads drive conversions, social creates recall,
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
