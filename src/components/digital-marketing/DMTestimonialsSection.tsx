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
  <div className="w-[320px] sm:w-[360px] shrink-0 bg-card border border-border/40 rounded-2xl p-5 sm:p-6 flex flex-col gap-3 relative overflow-hidden">
    {/* Subtle quote mark */}
    <Quote className="absolute top-4 right-4 w-8 h-8 text-brand/[0.06]" />

    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-brand text-brand" />
      ))}
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed flex-1 relative">"{t.text}"</p>
    <div className="flex items-center gap-3 pt-1 border-t border-border/30">
      <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center">
        <span className="text-xs font-bold text-brand">{t.name[0]}</span>
      </div>
      <div>
        <div className="text-sm font-semibold text-foreground">{t.name}</div>
        <div className="text-xs text-muted-foreground">{t.role}</div>
      </div>
    </div>
  </div>
);

const MarqueeRow = ({ items, direction = "left" }: { items: typeof testimonials; direction?: "left" | "right" }) => (
  <div className="relative overflow-hidden py-2" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
    <div
      className="flex gap-4 w-max"
      style={{ animation: `${direction === "left" ? "tm-left" : "tm-right"} 45s linear infinite` }}
    >
      {[...items, ...items].map((t, i) => (
        <TestimonialCard key={i} t={t} />
      ))}
    </div>
  </div>
);

export const DMTestimonialsSection = () => (
  <section className="py-12 md:py-20 lg:py-28 bg-background overflow-hidden relative">
    <style>{`
      @keyframes tm-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      @keyframes tm-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
    `}</style>

    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container mx-auto px-4 mb-8 md:mb-12">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
          Client Testimonials
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
          What Our <span className="text-brand">Clients Say</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Real results from real businesses across Bangalore.
        </p>
      </div>
    </div>
    <div className="-mx-4 sm:mx-0 space-y-3">
      <MarqueeRow items={row1} direction="left" />
      <MarqueeRow items={row2} direction="right" />
    </div>
  </section>
);
