import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BentoBadge, BentoGrid, BentoCard, BentoIcon } from "@/components/ui/bento-grid";
import { Video, Camera, Clapperboard, Mic, Film, Sparkles } from "lucide-react";

const contentTypes = [
  {
    icon: Video,
    title: "Instagram Reels",
    description: "Trending, short-form vertical videos — from product demos to behind-the-scenes stories that drive massive reach.",
  },
  {
    icon: Camera,
    title: "Product Shoots",
    description: "Professional flat-lays, lifestyle shots, and product photography optimized for social media feeds.",
  },
  {
    icon: Clapperboard,
    title: "Brand Films & Promos",
    description: "Short promotional videos and brand intro clips for Instagram, YouTube Shorts, and LinkedIn.",
  },
  {
    icon: Mic,
    title: "Talking Head Videos",
    description: "Founder/CEO thought-leadership reels, testimonials, and expert opinion clips that build trust.",
  },
  {
    icon: Film,
    title: "Motion Graphics",
    description: "Animated posts, logo reveals, explainer reels, and kinetic typography for higher engagement.",
  },
  {
    icon: Sparkles,
    title: "UGC-Style Content",
    description: "Authentic, raw-feeling content designed to blend with user feeds — the format audiences trust most.",
  },
];

export const SMReelsContentSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-20 bg-[#020617] text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-8 md:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <BentoBadge className="mb-4"><Video className="w-4 h-4" />Reels & Content Production</BentoBadge>
           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
47:             Reels, Shoots & <span className="text-brand">Video Content</span>
          </h2>
          <p className="text-base md:text-lg text-white/60">
            From concept to final cut — we produce scroll-stopping video content that gets your brand seen and shared.
          </p>
        </div>

        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {contentTypes.map((item, i) => (
            <BentoCard
              key={i}
              className={`group transition-all duration-700 bg-white/5 border-white/10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <BentoIcon size="md">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-brand group-hover:text-white transition-colors duration-300" />
              </BentoIcon>
              <h3 className="text-base md:text-lg font-bold text-white mt-3 mb-2 group-hover:text-brand transition-colors duration-300">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.description}</p>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
