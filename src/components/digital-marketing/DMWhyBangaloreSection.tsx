import { Building2, Users, Globe, Smartphone, Languages, MapPin, TrendingUp, IndianRupee } from "lucide-react";

const points = [
  { icon: Building2, title: "10,000+ Startups", text: "Highest startup density in India — over 10,000 registered startups across the city" },
  { icon: Users, title: "Digital-First Consumers", text: "Highly educated, digitally native consumer base with strong research-before-purchase behaviour" },
  { icon: Globe, title: "Cross-Channel Competition", text: "Intense cross-channel competition: brands compete simultaneously on Google, Meta, LinkedIn, and YouTube" },
  { icon: Smartphone, title: "Complex B2B Cycles", text: "B2B SaaS and enterprise sales cycles require multi-touch, content-driven digital strategies" },
  { icon: Languages, title: "Vernacular Opportunity", text: "Growing Kannada-language search volume creates vernacular marketing opportunities most agencies miss" },
];

const stats = [
  { icon: MapPin, value: "10,000+", label: "Registered Startups" },
  { icon: IndianRupee, value: "₹4.5L Cr", label: "IT Economy" },
  { icon: TrendingUp, value: "#1", label: "Most Competitive Market" },
];

export const DMWhyBangaloreSection = () => (
  <section className="py-14 md:py-24 lg:py-32 bg-foreground relative overflow-hidden">
    <div className="absolute top-0 right-0 w-72 h-72 bg-brand/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/3 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 animate-fade-in">
        <span className="inline-block px-3 py-1 bg-brand/20 text-brand rounded-full text-xs sm:text-sm font-medium mb-4 border border-brand/30">
          Why Bangalore Needs Specialist Digital Marketing
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          Why Bangalore Is India's Most Competitive <span className="text-brand">Digital Market</span>
        </h2>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 md:gap-5 max-w-3xl mx-auto mb-10 md:mb-14">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-center bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand/15 flex items-center justify-center mx-auto mb-3">
              <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-brand" />
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5">{stat.value}</div>
            <div className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Text content — centered */}
      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14 animate-fade-in space-y-4">
        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          Bangalore is the Silicon Valley of India — home to 10,000+ startups, global tech giants, and a ₹4.5 lakh crore IT economy. Every business here, from a D2C brand in Indiranagar to a SaaS company in Bellandur, competes for the same high-intent customers across Google, LinkedIn, Instagram, and YouTube.
        </p>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
          Generic online marketing services won't differentiate you in this market. You need a digital marketing company in Bangalore that understands the local ecosystem: startup funding cycles, B2B SaaS buyer journeys, enterprise procurement timelines, and the fast-evolving Kannada-language audience segment.
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider text-center mb-6">What Makes Bangalore Unique</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {points.map((point, i) => (
            <div
              key={i}
              className={`bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 animate-fade-in ${i === 4 ? "sm:col-span-2 lg:col-span-1 lg:mx-0 sm:max-w-sm sm:mx-auto lg:max-w-none" : ""}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-brand/15 flex items-center justify-center mb-4">
                <point.icon className="w-5 h-5 text-brand" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">{point.title}</h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-gray-500 italic text-center mt-6 border-t border-white/5 pt-5 max-w-2xl mx-auto">
          Our internet marketing services in Bangalore are specifically calibrated for this environment — not copy-pasted templates from a national playbook.
        </p>
      </div>
    </div>
  </section>
);
