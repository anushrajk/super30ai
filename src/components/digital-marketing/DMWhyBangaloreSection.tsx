import { Building2, Users, Globe, Smartphone, Languages } from "lucide-react";

const points = [
  { icon: Building2, text: "Highest startup density in India — over 10,000 registered startups across the city" },
  { icon: Users, text: "Highly educated, digitally native consumer base with strong research-before-purchase behaviour" },
  { icon: Globe, text: "Intense cross-channel competition: brands compete simultaneously on Google, Meta, LinkedIn, and YouTube" },
  { icon: Smartphone, text: "B2B SaaS and enterprise sales cycles require multi-touch, content-driven digital strategies" },
  { icon: Languages, text: "Growing Kannada-language search volume creates vernacular marketing opportunities most agencies miss" },
];

export const DMWhyBangaloreSection = () => (
  <section className="py-12 md:py-20 lg:py-28 bg-foreground relative overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute top-0 right-0 w-72 h-72 bg-brand/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/3 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 relative">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
        {/* Left: Text content */}
        <div className="animate-fade-in">
          <span className="inline-block px-3 py-1 bg-brand/20 text-brand rounded-full text-xs sm:text-sm font-medium mb-4 border border-brand/30">
            Why Bangalore Needs Specialist Digital Marketing
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Why Bangalore Is India's Most Competitive <span className="text-brand">Digital Market</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
            Bangalore is the Silicon Valley of India — home to 10,000+ startups, global tech giants, and a ₹4.5 lakh crore IT economy. Every business here, from a D2C brand in Indiranagar to a SaaS company in Bellandur, competes for the same high-intent customers across Google, LinkedIn, Instagram, and YouTube.
          </p>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Generic online marketing services won't differentiate you in this market. You need a digital marketing company in Bangalore that understands the local ecosystem: startup funding cycles, B2B SaaS buyer journeys, enterprise procurement timelines, and the fast-evolving Kannada-language audience segment.
          </p>
        </div>

        {/* Right: Cards grid */}
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4">What Makes Bangalore's Digital Landscape Unique</h3>
          {points.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-brand/15 flex items-center justify-center flex-shrink-0">
                <point.icon className="w-5 h-5 text-brand" />
              </div>
              <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">{point.text}</span>
            </div>
          ))}
          <p className="text-sm text-gray-500 pt-2 italic">
            Our internet marketing services in Bangalore are specifically calibrated for this environment — not copy-pasted templates from a national playbook.
          </p>
        </div>
      </div>
    </div>
  </section>
);
