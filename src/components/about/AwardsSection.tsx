import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Trophy, Medal, Shield, BadgeCheck } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "Best AI Marketing Agency",
    org: "India Digital Awards 2024",
    color: "from-amber-400 to-amber-600",
  },
  {
    icon: Star,
    title: "Top SEO Agency",
    org: "Clutch.co 2024",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Medal,
    title: "Excellence in Performance",
    org: "Google Premier Partner",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Award,
    title: "Best ROI Agency",
    org: "MarTech India 2023",
    color: "from-purple-400 to-purple-600",
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Recognition
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Awards & Certifications
          </h2>
          <p className="text-lg text-muted-foreground">
            Industry recognition for our commitment to excellence.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {awards.map((award, index) => (
            <Card
              key={index}
              className="bg-muted/30 border-border/50 hover:border-orange-500/50 hover:shadow-xl transition-all duration-500 group overflow-hidden"
            >
              <CardContent className="p-6 text-center relative">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  <award.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{award.title}</h3>
                <p className="text-sm text-muted-foreground">{award.org}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
            Certified Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50 hover:border-orange-500/50 hover:bg-orange-50 transition-all duration-300 group"
              >
                <cert.icon className="w-4 h-4 text-green-500 group-hover:text-orange-500 transition-colors" />
                <span className="text-sm font-medium text-foreground">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
