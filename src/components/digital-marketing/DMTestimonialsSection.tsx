import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Rajesh K.", role: "Founder, SaaS Startup", text: "Super 30 helped us go from zero organic traffic to 15,000 monthly visitors in 6 months. Their SEO strategy is razor-sharp." },
  { name: "Priya M.", role: "Marketing Head, D2C Brand", text: "Our ROAS improved from 1.8x to 4.2x after switching to Super 30 for Google Ads. The transparency in reporting is unmatched." },
  { name: "Arjun S.", role: "CEO, Real Estate Firm", text: "520+ qualified leads in one quarter through hyper-local campaigns. They truly understand the Bangalore market." },
  { name: "Sneha R.", role: "Director, Healthcare Chain", text: "Patient appointments increased 3x after Super 30 optimised our local SEO and Google Business profiles across all locations." },
  { name: "Vikram P.", role: "Co-founder, EdTech Platform", text: "Their content strategy and YouTube pre-roll campaigns drove a 40% increase in enrollments. Highly data-driven team." },
  { name: "Ananya D.", role: "Brand Manager, Fashion Label", text: "Instagram engagement went up 280% and we consistently hit 10x ROAS on Meta ads. Best agency decision we've made." },
  { name: "Karthik N.", role: "CTO, B2B Enterprise", text: "LinkedIn lead gen campaigns brought in enterprise-level prospects we couldn't reach before. The ABM approach is excellent." },
  { name: "Meera J.", role: "Owner, Restaurant Chain", text: "Local SEO + Zomato optimisation doubled our footfall. Super 30 knows food & restaurant marketing inside out." },
];

const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4);

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="w-[340px] shrink-0 bg-card border border-border/40 rounded-2xl p-6 flex flex-col gap-4 relative">
    <Quote className="absolute top-5 right-5 w-6 h-6 text-brand/[0.08]" />
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-brand text-brand" />
      ))}
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>
    <div className="flex items-center gap-3 pt-3 border-t border-border/30">
      <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
        <span className="text-xs font-bold text-foreground">{t.name[0]}</span>
      </div>
      <div>
        <div className="text-sm font-semibold text-foreground">{t.name}</div>
        <div className="text-xs text-muted-foreground">{t.role}</div>
      </div>
    </div>
  </div>
);

const MarqueeRow = ({ items, direction = "left" }: { items: typeof testimonials; direction?: "left" | "right" }) => (
  <div className="relative overflow-hidden py-1.5" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
    <div
      className="flex gap-3 w-max"
      style={{ animation: `${direction === "left" ? "tm-l" : "tm-r"} 50s linear infinite` }}
    >
      {[...items, ...items].map((t, i) => (
        <TestimonialCard key={i} t={t} />
      ))}
    </div>
  </div>
);

export const DMTestimonialsSection = () => (
  <section className="py-20 md:py-28 lg:py-36 bg-background overflow-hidden relative">
    <style>{`
      @keyframes tm-l { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      @keyframes tm-r { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
    `}</style>

    <div className="container mx-auto px-4 mb-12 md:mb-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="text-brand text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
            What our <span className="text-brand">clients say</span>
          </h2>
        </div>
        <p className="text-muted-foreground text-sm max-w-sm">
          Real results from real businesses across Bangalore.
        </p>
      </div>
    </div>
    <div className="space-y-3">
      <MarqueeRow items={row1} direction="left" />
      <MarqueeRow items={row2} direction="right" />
    </div>
  </section>
);
