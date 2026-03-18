import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import profileMockup from "@/assets/portfolio/profile-mockup.png";
import magicbricksLogo from "@/assets/clients/magicbricks.png";
import jainUniversityLogo from "@/assets/clients/jain-university.png";
import mamaEarthLogo from "@/assets/clients/mamaearth.png";
import tata1mgLogo from "@/assets/clients/tata1mg.png";
import upgradLogo from "@/assets/clients/upgrad.png";

const clientProfiles = [
  {
    brand: "Magicbricks",
    description: "Complete social media overhaul — feed design, stories, and carousel templates that boosted profile visits by 60%.",
    stat: "+60% Profile Visits",
    logo: magicbricksLogo,
  },
  {
    brand: "Jain University",
    description: "End-to-end Instagram & LinkedIn management with branded templates for admissions, events, and campus life content.",
    stat: "2x Engagement",
    logo: jainUniversityLogo,
  },
  {
    brand: "Mamaearth",
    description: "Vibrant D2C creatives across Instagram & Facebook — product launches, influencer collab posts, and festive campaigns.",
    stat: "+65% CTR",
    logo: mamaEarthLogo,
  },
  {
    brand: "Tata 1mg",
    description: "Healthcare social media design — informative carousels, health tips reels, and trust-building content that simplified complex topics.",
    stat: "3x Reach",
    logo: tata1mgLogo,
  },
  {
    brand: "upGrad",
    description: "EdTech social creatives for LinkedIn & Instagram — course promotions, student success stories, and webinar graphics.",
    stat: "+80% Leads",
    logo: upgradLogo,
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
              className={`flex-shrink-0 w-[320px] md:w-[400px] rounded-2xl overflow-hidden relative group cursor-pointer snap-start
                bg-card border border-border
                transition-all duration-500 hover:-translate-y-2 hover:shadow-xl
                ${isVisible ? "animate-bento-reveal" : "opacity-0"}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Mockup image showing desktop + mobile */}
              <div className="p-4 pb-0">
                <div className="rounded-xl overflow-hidden bg-muted">
                  <img
                    src={profileMockup}
                    alt={`${client.brand} social media profile on desktop and mobile`}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted overflow-hidden flex items-center justify-center">
                      <img src={client.logo} alt={client.brand} className="w-6 h-6 object-contain" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">{client.brand}</h3>
                  </div>
                  <span className="bg-brand/10 text-brand text-xs font-bold px-2.5 py-1 rounded-full">
                    {client.stat}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
