import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import magicbricksImg from "@/assets/case-studies/magicbricks.png";
import jainUniversityImg from "@/assets/case-studies/jain-university.png";
import mamaEarthImg from "@/assets/case-studies/mamaearth.png";
import tata1mgImg from "@/assets/case-studies/tata1mg.png";
import upgradImg from "@/assets/case-studies/upgrad.png";

const clientProfiles = [
  {
    brand: "Magicbricks",
    description: "Complete social media overhaul — feed design, stories, and carousel templates that boosted profile visits by 60%.",
    gradient: "from-emerald-500 to-teal-700",
    stat: "+60% Profile Visits",
    image: magicbricksImg,
  },
  {
    brand: "Jain University",
    description: "End-to-end Instagram & LinkedIn management with branded templates for admissions, events, and campus life content.",
    gradient: "from-blue-600 to-indigo-800",
    stat: "2x Engagement",
    image: jainUniversityImg,
  },
  {
    brand: "Mamaearth",
    description: "Vibrant D2C creatives across Instagram & Facebook — product launches, influencer collab posts, and festive campaigns.",
    gradient: "from-amber-400 to-orange-600",
    stat: "+65% CTR",
    image: mamaEarthImg,
  },
  {
    brand: "Tata 1mg",
    description: "Healthcare social media design — informative carousels, health tips reels, and trust-building content that simplified complex topics.",
    gradient: "from-rose-500 to-pink-700",
    stat: "3x Reach",
    image: tata1mgImg,
  },
  {
    brand: "upGrad",
    description: "EdTech social creatives for LinkedIn & Instagram — course promotions, student success stories, and webinar graphics.",
    gradient: "from-violet-600 to-purple-900",
    stat: "+80% Leads",
    image: upgradImg,
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
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between mb-8 md:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-brand rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-widest text-foreground">Our Client Profiles</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-5 py-2 rounded-full text-sm font-medium">
              Recent Clients
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

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {clientProfiles.map((client, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[300px] md:w-[360px] rounded-3xl overflow-hidden relative group cursor-pointer snap-start
                bg-gradient-to-br ${client.gradient}
                transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
                ${isVisible ? "animate-bento-reveal" : "opacity-0"}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="p-6 md:p-8 relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">{client.brand}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5 line-clamp-3">{client.description}</p>
              </div>

              <div className="px-6 pb-6 relative z-10">
                <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl group-hover:scale-[1.02] transition-transform duration-500">
                  <img src={client.image} alt={`${client.brand} social media work`} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </div>
              </div>

              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
                {client.stat}
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
