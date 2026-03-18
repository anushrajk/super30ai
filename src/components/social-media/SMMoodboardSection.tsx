import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Instagram, Palette, CheckCircle2 } from "lucide-react";
import { BentoBadge } from "@/components/ui/bento-grid";

import socialPost1 from "@/assets/portfolio/social-post-1.jpg";
import socialPost2 from "@/assets/portfolio/social-post-2.jpg";
import socialPost3 from "@/assets/portfolio/social-post-3.jpg";
import socialPost4 from "@/assets/portfolio/social-post-4.jpg";
import socialPost5 from "@/assets/portfolio/social-post-5.jpg";
import socialPost6 from "@/assets/portfolio/social-post-6.jpg";

const gridPosts = [socialPost1, socialPost2, socialPost3, socialPost4, socialPost5, socialPost6];

const brandPoints = [
  "Custom color palette & typography for every client",
  "Consistent visual language across all platforms",
  "Mood board & style guide before first post",
  "Grid-planned Instagram feeds for aesthetic cohesion",
  "Template systems for scalable, on-brand posting",
  "Tone-matched visuals — corporate, playful, or luxury",
];

export const SMMoodboardSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-8 md:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <BentoBadge className="mb-4"><Palette className="w-4 h-4" />Moodboards & Brand Consistency</BentoBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Instagram Feeds That <span className="text-brand">Tell Your Story</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">We don't just design posts — we craft cohesive visual identities that make your Instagram profile look like a premium brand.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          {/* Instagram Profile Grid Mockup */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
              {/* Profile Header */}
              <div className="p-4 border-b border-border flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">yourbrand</p>
                  <p className="text-muted-foreground text-xs">Designed by Super 30</p>
                </div>
              </div>
              {/* Grid */}
              <div className="grid grid-cols-3 gap-[2px]">
                {gridPosts.map((post, i) => (
                  <div key={i} className="aspect-square overflow-hidden group">
                    <img src={post} alt={`Grid post ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                ))}
                {/* Repeat 3 more for a fuller grid */}
                {gridPosts.slice(0, 3).map((post, i) => (
                  <div key={`r-${i}`} className="aspect-square overflow-hidden group">
                    <img src={post} alt={`Grid post ${i + 7}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Brand Consistency Points */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Why Brand Consistency <span className="text-brand">Matters</span>
            </h3>
            <div className="space-y-4">
              {brandPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
