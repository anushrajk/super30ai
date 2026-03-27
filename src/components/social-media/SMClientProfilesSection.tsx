import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import aadhyaImg from "@/assets/portfolio/aadhya-animatics.png";
import madrabbitImg from "@/assets/portfolio/madrabbit.png";
import isitImg from "@/assets/portfolio/isit.png";
import interiorsImg from "@/assets/portfolio/interiors-and-more.png";
import da360Img from "@/assets/portfolio/digital-academy-360.png";

const clientProfiles = [
  {
    brand: "Aadhya Animatics",
    description: "Complete web and social media design for a leading video production company. Dark-themed, cinematic visuals that match their creative identity.",
    gradient: "from-blue-600 to-indigo-900",
    images: [aadhyaImg, aadhyaImg],
    stat: "+55% Leads",
  },
  {
    brand: "Mad Rabbit Racing",
    description: "Bold, high-energy social creatives and web design for India's premier motorcycle racing academy. Action-packed visuals that drive enrollments.",
    gradient: "from-amber-500 to-yellow-700",
    images: [madrabbitImg, madrabbitImg],
    stat: "3x Enrollments",
  },
  {
    brand: "iSit",
    description: "Modern corporate website and social media presence for an IT solutions company. Clean, professional designs that build trust and generate B2B leads.",
    gradient: "from-teal-500 to-cyan-800",
    images: [isitImg, isitImg],
    stat: "+70% Traffic",
  },
  {
    brand: "Interiors & More",
    description: "Premium e-commerce design and social creatives for India's largest artificial flowers brand. Elegant visuals that showcase product beauty and drive sales.",
    gradient: "from-amber-700 to-rose-800",
    images: [interiorsImg, interiorsImg],
    stat: "2x Sales",
  },
  {
    brand: "Digital Academy 360",
    description: "End-to-end digital branding and social media campaigns for a top digital marketing school. Admission-focused creatives that convert prospective students.",
    gradient: "from-red-500 to-orange-600",
    images: [da360Img, da360Img],
    stat: "+90% Admissions",
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
73:             <span className="text-sm font-semibold uppercase tracking-widest text-white">Featured Projects</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-2 bg-white text-[#020617] px-5 py-2 rounded-full text-sm font-medium">
              Recent Projects
              <span className="w-5 h-5 bg-brand rounded-full flex items-center justify-center text-white text-[10px] font-bold">{clientProfiles.length}</span>
            </span>
            <button onClick={() => scroll("left")} className="w-10 h-10 border-2 border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Previous">
              <ArrowRight className="w-4 h-4 text-white rotate-180" />
            </button>
            <button onClick={() => scroll("right")} className="w-10 h-10 border-2 border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Next">
              <ArrowRight className="w-4 h-4 text-white" />
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
              className={`flex-shrink-0 w-[260px] sm:w-[320px] md:w-[380px] rounded-3xl overflow-hidden relative group cursor-pointer snap-start
                bg-gradient-to-br ${client.gradient}
                transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
                ${isVisible ? "animate-bento-reveal" : "opacity-0"}`}
              style={{ animationDelay: `${index * 120}ms`, aspectRatio: "4/5" }}
            >
              {/* Top content */}
              <div className="p-4 sm:p-6 md:p-8 pb-0 relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-tight leading-tight">{client.brand}</h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5 line-clamp-2 sm:line-clamp-3 max-w-[90%]">
                  {client.description}
                </p>
              </div>

              {/* Phone mockup only */}
              <div className="absolute bottom-0 left-0 right-0 h-[55%] sm:h-[60%] flex items-end justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-end justify-center px-3 sm:px-5">
                  <div className="relative w-[45%] sm:w-[40%] mb-0 transform group-hover:scale-110 group-hover:-translate-y-3 transition-all duration-500 z-[2]">
                    <div className="bg-[hsl(var(--foreground))]/90 rounded-xl sm:rounded-2xl p-[2px] sm:p-[3px] shadow-2xl">
                      <div className="rounded-lg sm:rounded-xl overflow-hidden aspect-[9/16] bg-muted">
                        <img
                          src={client.images[0]}
                          alt={`${client.brand} mobile`}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-28 sm:w-40 h-28 sm:h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
