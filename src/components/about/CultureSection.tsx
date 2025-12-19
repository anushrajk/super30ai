import { Card, CardContent } from "@/components/ui/card";
import { Heart, Coffee, Rocket, Users, Zap, Globe } from "lucide-react";

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
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Text */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              Our Culture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Where Passion Meets Performance
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At The Super 30, we believe great results come from great people. Our culture is built on trust, innovation, and an obsession with client success.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {cultureHighlights.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border/50 hover:border-orange-500/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large card */}
            <Card className="col-span-2 bg-gradient-to-br from-orange-500 to-orange-600 border-0 overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="text-6xl font-bold text-white/90 mb-2">50+</div>
                <p className="text-white/80 text-lg">Team Members & Growing</p>
              </CardContent>
            </Card>
            
            {/* Smaller cards */}
            <Card className="bg-background border-border/50 hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">15+</div>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-border/50 hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">4.9★</div>
                <p className="text-sm text-muted-foreground">Glassdoor Rating</p>
              </CardContent>
            </Card>

            {/* Additional culture highlights */}
            {cultureHighlights.slice(4).map((item, index) => (
              <Card key={index} className="bg-muted/50 border-border/50 hover:border-orange-500/50 transition-all duration-300 group">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                    <item.icon className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
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
