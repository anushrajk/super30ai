import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import socialPost1 from "@/assets/portfolio/social-post-1.jpg";
import socialPost2 from "@/assets/portfolio/social-post-2.jpg";
import socialPost3 from "@/assets/portfolio/social-post-3.jpg";
import socialPost4 from "@/assets/portfolio/social-post-4.jpg";
import socialPost5 from "@/assets/portfolio/social-post-5.jpg";
import socialPost6 from "@/assets/portfolio/social-post-6.jpg";
import webDesign1 from "@/assets/portfolio/web-design-1.jpg";
import webDesign2 from "@/assets/portfolio/web-design-2.jpg";
import webDesign3 from "@/assets/portfolio/web-design-3.jpg";

const clientProfiles = [
  {
    brand: "Magicbricks",
    description: "A complete digital redesign with +40% lead generation uplift. We rebuilt their brand presence across web and social.",
    gradient: "from-emerald-500 to-green-700",
    images: [socialPost1, webDesign1],
    stat: "+40% Leads",
  },
  {
    brand: "Jain University",
    description: "End-to-end brand identity and social media design for one of India's leading universities. Admissions campaigns that convert.",
    gradient: "from-blue-600 to-indigo-800",
    images: [socialPost2, webDesign2],
    stat: "2x Engagement",
  },
  {
    brand: "Mamaearth",
    description: "Vibrant D2C creatives across Instagram and Facebook. We designed scroll-stopping visuals that drove massive engagement.",
    gradient: "from-amber-400 to-orange-600",
    images: [socialPost3, webDesign3],
    stat: "+65% CTR",
  },
  {
    brand: "Tata 1mg",
    description: "Healthcare UI/UX and marketing creatives. Clean, trustworthy designs that simplified complex health information.",
    gradient: "from-rose-500 to-pink-700",
    images: [socialPost4, socialPost5],
    stat: "3x Conversions",
  },
  {
    brand: "upGrad",
    description: "EdTech social creatives for LinkedIn & Instagram — course promotions, student success stories, and webinar graphics.",
    gradient: "from-violet-600 to-purple-900",
    images: [socialPost6, webDesign1],
    stat: "+80% Leads",
  },
];

export const SMClientProfilesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-[#020617] text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header row */}
        <div className={`flex items-center justify-between mb-10 md:mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-brand rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-widest text-foreground">Featured Projects</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-5 py-2 rounded-full text-sm font-medium">
              Recent Projects
              <span className="w-5 h-5 bg-brand rounded-full flex items-center justify-center text-white text-[10px] font-bold">{clientProfiles.length}</span>
            </span>
            <button onClick={() => scroll("left")} className="w-10 h-10 border-2 border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors" aria-label="Previous">
              <ArrowRight className="w-4 h-4 text-foreground rotate-180" />
            </button>
            <button onClick={() => scroll("right")} className="w-10 h-10 border-2 border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors" aria-label="Next">
              <ArrowRight className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {clientProfiles.map((client, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[320px] md:w-[380px] rounded-3xl overflow-hidden relative group cursor-pointer snap-start
                bg-gradient-to-br ${client.gradient}
                transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
                ${isVisible ? "animate-bento-reveal" : "opacity-0"}`}
              style={{ animationDelay: `${index * 120}ms`, aspectRatio: "4/5" }}
            >
              {/* Top content */}
              <div className="p-6 md:p-8 pb-0 relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight leading-tight">{client.brand}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5 line-clamp-3 max-w-[90%]">
                  {client.description}
                </p>
              </div>

              {/* Device mockups — bottom half */}
              <div className="absolute bottom-0 left-0 right-0 h-[55%] flex items-end justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-end justify-center px-5">
                  {/* Laptop / Tablet mockup */}
                  <div className="relative w-[80%] mb-0 transform group-hover:scale-[1.04] group-hover:-translate-y-2 transition-all duration-500 z-[1]">
                    <div className="bg-[hsl(var(--foreground))]/90 rounded-t-xl p-[3px] shadow-2xl">
                      <div className="rounded-t-lg overflow-hidden aspect-[4/3] bg-muted">
                        <img
                          src={client.images[0]}
                          alt={`${client.brand} design`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="bg-[hsl(var(--foreground))]/70 h-[6px] rounded-b-lg w-[108%] -ml-[4%]" />
                  </div>

                  {/* Phone mockup */}
                  <div className="absolute -right-1 bottom-3 w-[32%] transform group-hover:scale-110 group-hover:-translate-y-3 transition-all duration-700 delay-100 z-[2]">
                    <div className="bg-[hsl(var(--foreground))]/90 rounded-2xl p-[3px] shadow-2xl">
                      <div className="rounded-xl overflow-hidden aspect-[9/16] bg-muted">
                        <img
                          src={client.images[1]}
                          alt={`${client.brand} mobile`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat badge */}
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
                {client.stat}
              </div>

              {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
