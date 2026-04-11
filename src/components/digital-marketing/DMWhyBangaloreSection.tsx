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
    {/* Decorative background elements */}
    <div className="absolute top-0 right-0 w-72 h-72 bg-brand/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/3 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 relative">
      {/* Header — centered */}
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 animate-fade-in">
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

      {/* Two-column: Text + Cards */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start max-w-6xl mx-auto">
        {/* Left: Text content */}
        <div className="animate-fade-in space-y-4">
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            Bangalore is the Silicon Valley of India — home to 10,000+ startups, global tech giants, and a ₹4.5 lakh crore IT economy. Every business here, from a D2C brand in Indiranagar to a SaaS company in Bellandur, competes for the same high-intent customers across Google, LinkedIn, Instagram, and YouTube.
          </p>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Generic online marketing services won't differentiate you in this market. You need a digital marketing company in Bangalore that understands the local ecosystem: startup funding cycles, B2B SaaS buyer journeys, enterprise procurement timelines, and the fast-evolving Kannada-language audience segment.
          </p>
          <p className="text-xs sm:text-sm text-gray-500 pt-2 italic border-l-2 border-brand/30 pl-4">
            Our internet marketing services in Bangalore are specifically calibrated for this environment — not copy-pasted templates from a national playbook.
          </p>
        </div>

        {/* Right: Cards */}
        <div className="space-y-3">
          <h3 className="text-sm sm:text-base font-semibold text-gray-400 uppercase tracking-wider mb-4">What Makes Bangalore Unique</h3>
          {points.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-brand/15 flex items-center justify-center flex-shrink-0">
                <point.icon className="w-5 h-5 text-brand" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-0.5">{point.title}</h4>
                <span className="text-gray-400 text-xs sm:text-sm leading-relaxed">{point.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
