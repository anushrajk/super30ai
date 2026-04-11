const points = [
  "Highest startup density in India — over 10,000 registered startups across the city",
  "Highly educated, digitally native consumer base with strong research-before-purchase behaviour",
  "Intense cross-channel competition: brands compete simultaneously on Google, Meta, LinkedIn, and YouTube",
  "B2B SaaS and enterprise sales cycles require multi-touch, content-driven digital strategies",
  "Growing Kannada-language search volume creates vernacular marketing opportunities most agencies miss",
];

export const DMWhyBangaloreSection = () => (
  <section className="py-8 md:py-16 lg:py-24 bg-foreground">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-3 py-1 bg-brand/20 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/30">
          Why Bangalore Needs Specialist Digital Marketing
        </span>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Why Bangalore Is India's Most Competitive <span className="text-brand">Digital Market</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
          Bangalore is the Silicon Valley of India — home to 10,000+ startups, global tech giants, and a ₹4.5 lakh crore IT economy. Every business here, from a D2C brand in Indiranagar to a SaaS company in Bellandur, competes for the same high-intent customers across Google, LinkedIn, Instagram, and YouTube.
        </p>
        <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">
          Generic online marketing services won't differentiate you in this market. You need a digital marketing company in Bangalore that understands the local ecosystem: startup funding cycles, B2B SaaS buyer journeys, enterprise procurement timelines, and the fast-evolving Kannada-language audience segment.
        </p>

        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4">What Makes Bangalore's Digital Landscape Unique</h3>
        <ul className="space-y-3 mb-6">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-brand rounded-full flex-shrink-0 mt-2" />
              <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
          Our internet marketing services in Bangalore are specifically calibrated for this environment — not copy-pasted templates from a national playbook.
        </p>
      </div>
    </div>
  </section>
);
