import { useEffect, useRef, useState } from "react";

const tools = [
  { name: "Google Ads", color: "#4285F4", icon: "G" },
  { name: "Meta", color: "#0082FB", icon: "M" },
  { name: "SEMrush", color: "#FF642D", icon: "S" },
  { name: "GTM", color: "#8AB4F8", icon: "⬡" },
  { name: "Analytics", color: "#E37400", icon: "📊" },
  { name: "ChatGPT", color: "#10A37F", icon: "◈" },
  { name: "Gemini", color: "#886FBF", icon: "✦" },
  { name: "Canva", color: "#00C4CC", icon: "C" },
  { name: "Mailchimp", color: "#FFE01B", icon: "✉" },
  { name: "HubSpot", color: "#FF7A59", icon: "H" },
  { name: "Ahrefs", color: "#FF8C00", icon: "A" },
  { name: "Hootsuite", color: "#143059", icon: "🦉" },
  { name: "Figma", color: "#A259FF", icon: "F" },
  { name: "Shopify", color: "#96BF48", icon: "🛒" },
  { name: "WordPress", color: "#21759B", icon: "W" },
  { name: "Slack", color: "#E01E5A", icon: "⌗" },
  { name: "Notion", color: "#000000", icon: "N" },
  { name: "Zapier", color: "#FF4F00", icon: "⚡" },
  { name: "Moz", color: "#1BA1E3", icon: "⬢" },
  { name: "Buffer", color: "#231F20", icon: "B" },
  { name: "Midjourney", color: "#D946EF", icon: "◆" },
  { name: "Claude", color: "#D4A574", icon: "⊛" },
  { name: "Hotjar", color: "#FD3A5C", icon: "🔥" },
  { name: "Clarity", color: "#2B88D8", icon: "◎" },
];

interface FallingItem {
  id: number;
  tool: typeof tools[number];
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  opacity: number;
}

export const DMToolsRainSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [items] = useState<FallingItem[]>(() => {
    const arr: FallingItem[] = [];
    for (let i = 0; i < 40; i++) {
      arr.push({
        id: i,
        tool: tools[i % tools.length],
        x: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 4 + Math.random() * 5,
        size: 40 + Math.random() * 28,
        rotation: -30 + Math.random() * 60,
        opacity: 0.15 + Math.random() * 0.45,
      });
    }
    return arr;
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-foreground"
    >
      {/* Falling logos background */}
      <div className="absolute inset-0 pointer-events-none">
        {isVisible &&
          items.map((item) => (
            <div
              key={item.id}
              className="absolute animate-tool-fall"
              style={{
                left: `${item.x}%`,
                top: "-80px",
                animationDelay: `${item.delay}s`,
                animationDuration: `${item.duration}s`,
                opacity: 0,
              }}
            >
              <div
                className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm flex items-center justify-center font-bold select-none"
                style={{
                  width: item.size,
                  height: item.size,
                  transform: `rotate(${item.rotation}deg)`,
                  color: item.tool.color,
                  fontSize: item.size * 0.4,
                }}
              >
                {item.tool.icon}
              </div>
            </div>
          ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-foreground to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-foreground to-transparent z-10" />

      {/* Center content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block px-4 py-1.5 bg-brand/15 text-brand rounded-full text-xs font-medium tracking-widest uppercase mb-6 border border-brand/20">
            Our Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-5 leading-tight tracking-tight">
            Every Tool. One Team.
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-10">
            From Google Ads and Meta to AI models like ChatGPT and Gemini — we master every platform so you don't have to.
          </p>

          {/* Floating tool badges */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {tools.slice(0, 16).map((t, i) => (
              <div
                key={t.name}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-700 hover:border-white/25 hover:bg-white/[0.08] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${0.8 + i * 0.06}s` }}
              >
                <span
                  className="text-base font-bold"
                  style={{ color: t.color }}
                >
                  {t.icon}
                </span>
                <span className="text-white/70 text-xs font-medium">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
