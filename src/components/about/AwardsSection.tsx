import { Award, Star, Trophy, Medal, Shield, BadgeCheck } from "lucide-react";
import { BentoGrid, BentoCard, BentoIcon, BentoBadge } from "@/components/ui/bento-grid";

const awards = [
  {
    icon: Trophy,
    title: "Best AI Marketing Agency",
    org: "India Digital Awards 2024",
  },
  {
    icon: Star,
    title: "Top SEO Agency",
    org: "Clutch.co 2024",
  },
  {
    icon: Medal,
    title: "Excellence in Performance",
    org: "Google Premier Partner",
  },
  {
    icon: Award,
    title: "Best ROI Agency",
    org: "MarTech India 2023",
  },
];

const certifications = [
  { name: "Google Partner", icon: BadgeCheck },
  { name: "Meta Business Partner", icon: BadgeCheck },
  { name: "LinkedIn Marketing Partner", icon: BadgeCheck },
  { name: "HubSpot Certified", icon: Shield },
  { name: "SEMrush Certified", icon: Shield },
  { name: "Ahrefs Certified", icon: Shield },
];

export const AwardsSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements - consistent with dark sections */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-3 md:px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4 border border-orange-500/30">
            Recognition
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Awards & Certifications
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            Industry recognition for our commitment to excellence.
          </p>
        </div>

        {/* Awards Grid */}
        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-10 md:mb-12">
          {awards.map((award, index) => (
            <BentoCard key={index} className="group text-center overflow-hidden bg-white/5 border-white/10 hover:border-brand/30">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <BentoIcon size="lg" className="mx-auto mb-4 bg-brand/20">
                <award.icon className="w-7 h-7 md:w-8 md:h-8 text-brand group-hover:text-white transition-colors" />
              </BentoIcon>
              <h3 className="text-base md:text-lg font-bold text-white mb-1">{award.title}</h3>
              <p className="text-sm text-gray-400">{award.org}</p>
            </BentoCard>
          ))}
        </BentoGrid>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-base md:text-lg font-semibold text-gray-400 mb-6">
            Certified Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:border-brand/50 hover:bg-brand/10 transition-all duration-300 group"
              >
                <cert.icon className="w-4 h-4 text-green-500 group-hover:text-brand transition-colors" />
                <span className="text-xs md:text-sm font-medium text-white">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
