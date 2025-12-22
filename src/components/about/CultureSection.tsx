import { Card, CardContent } from "@/components/ui/card";
import { Heart, Coffee, Rocket, Users, Zap, Globe } from "lucide-react";
import { BentoCard, BentoIcon, BentoBadge } from "@/components/ui/bento-grid";

const cultureHighlights = [
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We're always exploring new AI tools and strategies to stay ahead.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your wins are our wins. We celebrate every milestone together.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Cross-functional teams work together to deliver holistic solutions.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible hours and remote-first culture for peak productivity.",
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    description: "Regular workshops, certifications, and conference sponsorships.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description: "Serving clients across 15+ countries with localized strategies.",
  },
];

export const CultureSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-3 md:px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Text */}
          <div>
            <BentoBadge className="mb-4">Our Culture</BentoBadge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
              Where Passion Meets Performance
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At The Super 30, we believe great results come from great people. Our culture is built on trust, innovation, and an obsession with client success.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cultureHighlights.slice(0, 4).map((item, index) => (
                <BentoCard key={index} className="group !p-3 md:!p-4">
                  <div className="flex items-start gap-3">
                    <BentoIcon size="sm">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-brand group-hover:text-white transition-colors" />
                    </BentoIcon>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </BentoCard>
              ))}
            </div>
          </div>

          {/* Right - Visual Grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {/* Large card */}
            <Card className="col-span-2 bg-brand-gradient border-0 overflow-hidden">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/90 mb-2">50+</div>
                <p className="text-white/80 text-base md:text-lg">Team Members & Growing</p>
              </CardContent>
            </Card>
            
            {/* Smaller cards */}
            <Card className="bento-card">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-gradient mb-1">15+</div>
                <p className="text-xs md:text-sm text-muted-foreground">Countries Served</p>
              </CardContent>
            </Card>
            
            <Card className="bento-card">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-gradient mb-1">4.9★</div>
                <p className="text-xs md:text-sm text-muted-foreground">Glassdoor Rating</p>
              </CardContent>
            </Card>

            {/* Additional culture highlights */}
            {cultureHighlights.slice(4).map((item, index) => (
              <Card key={index} className="bento-card group">
                <CardContent className="p-3 md:p-4 flex items-center gap-3">
                  <BentoIcon size="sm">
                    <item.icon className="w-4 h-4 text-brand group-hover:text-white transition-colors" />
                  </BentoIcon>
                  <div>
                    <h3 className="font-semibold text-foreground text-xs md:text-sm">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
