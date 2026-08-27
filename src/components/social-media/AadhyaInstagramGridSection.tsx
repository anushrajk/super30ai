import { useState } from "react";
import { Instagram, X, Grid3X3, Heart, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import img1 from "@/assets/aadhya/Image-99466.jpg.asset.json";
import img2 from "@/assets/aadhya/Image-62648.jpg.asset.json";
import img3 from "@/assets/aadhya/Image-31473.jpg.asset.json";
import img4 from "@/assets/aadhya/Image-66544.jpg.asset.json";
import img5 from "@/assets/aadhya/Image-70417.jpg.asset.json";
import img6 from "@/assets/aadhya/Image-94784.jpg.asset.json";
import img7 from "@/assets/aadhya/Image-64603.jpg.asset.json";
import img8 from "@/assets/aadhya/Image-26729.jpg.asset.json";
import img9 from "@/assets/aadhya/Image-45795.jpg.asset.json";

const posts = [
  { src: img1.url, caption: "2D vs 3D vs CGI — which does your brand need?" },
  { src: img2.url, caption: "Campa Cola — nostalgia has never looked this good." },
  { src: img3.url, caption: "Zero guess work — every frame is intentional." },
  { src: img4.url, caption: "5 things brands believe about animation that aren't true." },
  { src: img5.url, caption: "International Labour Day — Happy May Day." },
  { src: img6.url, caption: "CAT — built to move the earth, animated to move the market." },
  { src: img7.url, caption: "Anamorphic content — here's the science behind it." },
  { src: img8.url, caption: "Here's what the brief needs." },
  { src: img9.url, caption: "Happy Onam — a joyful and prosperous year ahead." },
];

export const AadhyaInstagramGridSection = () => {
  const [active, setActive] = useState<number | null>(null);
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 bg-muted/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand text-sm font-semibold mb-4">
            <Instagram className="w-4 h-4" />
            Client Feed Design
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Aadhya Animatics <span className="text-brand">Instagram Grid</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            A cohesive nine-post feed built around animation, CGI and campaign storytelling — planned
            as a grid, not as isolated posts.
          </p>
        </div>

        {/* Profile mockup */}
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
          <div className="p-5 md:p-6 flex items-center gap-4 md:gap-6 border-b border-border">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-[3px] bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] shrink-0">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-lg md:text-xl font-bold text-foreground">AA</span>
              </div>
            </div>
            <div className="min-w-0">
              <p className="font-bold text-foreground text-sm md:text-base truncate">aadhyaanimatics</p>
              <p className="text-xs md:text-sm text-muted-foreground">2D · 3D · CGI Animation Studio</p>
              <div className="flex gap-4 mt-2 text-xs md:text-sm">
                <span className="text-foreground font-semibold">
                  {posts.length} <span className="font-normal text-muted-foreground">posts</span>
                </span>
                <span className="text-foreground font-semibold">
                  12.4K <span className="font-normal text-muted-foreground">followers</span>
                </span>
                <span className="text-foreground font-semibold">
                  86 <span className="font-normal text-muted-foreground">following</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 py-3 border-b border-border text-muted-foreground">
            <Grid3X3 className="w-4 h-4" />
            <span className="text-[11px] tracking-[0.2em] uppercase font-semibold">Posts</span>
          </div>

          <div className="grid grid-cols-3 gap-[2px] md:gap-1 bg-border/50">
            {posts.map((post, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className="relative aspect-square overflow-hidden group bg-card"
                aria-label={`Open post ${i + 1}: ${post.caption}`}
              >
                <img
                  src={post.src}
                  alt={post.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-background">
                  <span className="flex items-center gap-1 text-sm font-semibold">
                    <Heart className="w-4 h-4 fill-current" /> 1.2K
                  </span>
                  <span className="flex items-center gap-1 text-sm font-semibold">
                    <MessageCircle className="w-4 h-4 fill-current" /> 48
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center text-foreground"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <figure className="max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={posts[active].src}
              alt={posts[active].caption}
              className="w-full rounded-xl shadow-2xl max-h-[75vh] object-contain bg-card"
            />
            <figcaption className="mt-3 text-center text-sm text-background/90">
              {posts[active].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};
