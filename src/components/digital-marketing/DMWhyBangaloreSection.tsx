import { Building2, Users, Globe, Smartphone, Languages, MapPin, TrendingUp, IndianRupee } from "lucide-react";

const stats = [
  { icon: MapPin, value: "10,000+", label: "Registered Startups" },
  { icon: IndianRupee, value: "₹4.5L Cr", label: "IT Economy" },
  { icon: TrendingUp, value: "#1", label: "Most Competitive Market" },
];

const points = [
  { icon: Building2, title: "10,000+ Startups", text: "Highest startup density in India — over 10,000 registered startups across the city." },
  { icon: Users, title: "Digital-First Consumers", text: "Highly educated, digitally native consumer base with strong research-before-purchase behaviour." },
  { icon: Globe, title: "Cross-Channel Competition", text: "Intense cross-channel competition: brands compete simultaneously on Google, Meta, LinkedIn, and YouTube." },
  { icon: Smartphone, title: "Complex B2B Cycles", text: "B2B SaaS and enterprise sales cycles require multi-touch, content-driven digital strategies." },
  { icon: Languages, title: "Vernacular Opportunity", text: "Growing Kannada-language search volume creates vernacular marketing opportunities most agencies miss." },
];

export const DMWhyBangaloreSection = () => (
  <section className="py-14 md:py-24 lg:py-32 bg-foreground">
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <span className="inline-block px-3 py-1 bg-brand/15 text-brand rounded-full text-xs sm:text-sm font-medium mb-4 border border-brand/25">
          Why Bangalore Needs Specialist Digital Marketing
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          Why Bangalore Is India's Most Competitive <span className="text-brand">Digital Market</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
          Bangalore is the Silicon Valley of India — home to 10,000+ startups, global tech giants, and a ₹4.5 lakh crore IT economy. Generic marketing won't cut it here.
        </p>
      </div>

      {/* Stats row */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-3xl mx-auto mb-14 md:mb-20">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1">{stat.value}</div>
            <div className="text-[11px] sm:text-xs text-white/40 font-medium uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-12 h-px bg-white/10 mx-auto mb-14 md:mb-20" />

      {/* Points — clean minimal list */}
      <div className="max-w-4xl mx-auto space-y-0">
        {points.map((point, i) => (
          <div
            key={i}
            className="flex items-start gap-5 py-6 border-b border-white/[0.06] last:border-b-0"
          >
            <div className="w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center shrink-0 mt-0.5">
              <point.icon className="w-5 h-5 text-brand" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-1">{point.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{point.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="text-xs sm:text-sm text-white/25 text-center mt-12 max-w-2xl mx-auto">
        Our internet marketing services in Bangalore are specifically calibrated for this environment — not copy-pasted templates from a national playbook.
      </p>
    </div>
  </section>
);
