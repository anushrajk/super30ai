import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { Search, Target, Share2, Palette, Globe, Mail, TrendingUp, ArrowRight } from "lucide-react";

const verticals = [
  { icon: Search, label: "AI SEO", color: "18 100% 48%", desc: "Organic Visibility" },
  { icon: Target, label: "Performance Ads", color: "217 91% 60%", desc: "Paid Conversions" },
  { icon: Share2, label: "Social Media", color: "292 84% 61%", desc: "Brand Awareness" },
  { icon: Palette, label: "Design", color: "38 92% 50%", desc: "Visual Identity" },
  { icon: Globe, label: "Web Design", color: "168 76% 42%", desc: "Digital Experience" },
  { icon: Mail, label: "Email Marketing", color: "0 84% 60%", desc: "Lead Nurturing" },
];

export const GrowthEcosystemSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 });
  const [cardsRef, cardsVisible, getDelay] = useStaggeredAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-10 md:py-16 lg:py-24 bg-foreground overflow-hidden" ref={sectionRef}>
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

        {/* Animated Hub */}
        <div className="max-w-5xl mx-auto relative" ref={cardsRef}>
          {/* Central Growth Hub */}
          <div className="flex justify-center mb-10 md:mb-0 md:absolute md:inset-0 md:flex md:items-center md:justify-center md:z-10 md:pointer-events-none">
            <div
              className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-brand flex flex-col items-center justify-center shadow-2xl transition-all duration-700 ${
                isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
              }`}
              style={{ boxShadow: "0 0 60px hsl(18 100% 48% / 0.3)" }}
            >
              <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-white mb-1" />
              <span className="text-white font-bold text-sm md:text-base">BRAND</span>
              <span className="text-white/80 text-xs">GROWTH</span>
            </div>
          </div>

          {/* Service Verticals Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {verticals.map((v, i) => (
              <div
                key={i}
                className={`relative rounded-2xl border border-white/10 p-5 md:p-6 transition-all duration-500 group hover:border-white/25 hover:-translate-y-1 ${
                  cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  background: `linear-gradient(160deg, hsl(${v.color} / 0.08), hsl(${v.color} / 0.02))`,
                  transitionDelay: getDelay(i),
                }}
              >
                {/* Connecting line animation */}
                <div
                  className={`hidden md:block absolute top-1/2 ${
                    i % 3 === 1 ? "left-1/2 -translate-x-1/2 w-px h-8 -top-4" : i % 3 === 0 ? "right-0 translate-x-full w-8 h-px top-1/2" : "left-0 -translate-x-full w-8 h-px top-1/2"
                  }`}
                  style={{
                    background: `hsl(${v.color} / 0.3)`,
                    transition: "opacity 0.5s",
                    transitionDelay: `${i * 150 + 500}ms`,
                    opacity: cardsVisible ? 1 : 0,
                  }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `hsl(${v.color} / 0.15)` }}
                >
                  <v.icon className="w-6 h-6" style={{ color: `hsl(${v.color})` }} />
                </div>
                <h3 className="text-white font-bold text-base mb-1">{v.label}</h3>
                <p className="text-white/50 text-sm">{v.desc}</p>

                {/* Growth indicator */}
                <div
                  className={`mt-3 h-1 rounded-full transition-all duration-1000 ${
                    cardsVisible ? "w-full" : "w-0"
                  }`}
                  style={{
                    background: `linear-gradient(90deg, hsl(${v.color} / 0.6), hsl(${v.color} / 0.1))`,
                    transitionDelay: `${i * 200 + 400}ms`,
                  }}
                />
              </div>
            ))}
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
