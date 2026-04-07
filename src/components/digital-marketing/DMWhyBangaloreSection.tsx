import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Building2, Rocket, Target, Globe, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: Building2,
    title: "India's Tech Capital Demands a Specialized Digital Marketing Agency",
    description: "Bangalore is home to 10,000+ startups and 400+ MNCs. A digital marketing agency in Bangalore must understand the tech-savvy, fast-moving audience that defines this city. Generic marketing playbooks don't work here — you need an agency that speaks Bangalore's language."
  },
  {
    icon: Target,
    title: "Hyper-Competitive Market Requires Expert Digital Marketing Services",
    description: "With over 500 digital marketing agencies in Bangalore, competition for online visibility is fierce. Our digital marketing agency stands apart by combining AI-powered automation with 30+ in-house specialists who understand the Bangalore market inside out."
  },
  {
    icon: Globe,
    title: "Local Expertise with Global Digital Marketing Standards",
    description: "As a Bangalore-based digital marketing agency, we bring deep local market knowledge — from Koramangala startups to Whitefield enterprises — combined with world-class digital marketing methodologies used by top agencies globally."
  },
  {
    icon: Rocket,
    title: "Why Bangalore Businesses Choose Our Digital Marketing Agency",
    description: "Bangalore businesses need speed, transparency, and measurable ROI from their digital marketing partner. Our agency delivers all three: campaigns launch in days, real-time dashboards provide full transparency, and every rupee is tracked to revenue."
  },
  {
    icon: TrendingUp,
    title: "Scaling Bangalore Brands with Data-Driven Digital Marketing",
    description: "From HSR Layout cafes to MG Road enterprises, our digital marketing agency in Bangalore has helped 300+ brands scale with integrated strategies across SEO, paid ads, social media, and web design — all optimized by AI for maximum impact."
  },
  {
    icon: MapPin,
    title: "Your Neighbourhood Digital Marketing Agency in Bangalore",
    description: "We're not a remote agency sending cookie-cutter reports. As a digital marketing agency headquartered in Bangalore, we offer in-person strategy sessions, local market insights, and the accountability that comes with being your neighbour."
  },
];

export const DMWhyBangaloreSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-10" />

      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-4xl mx-auto mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4 border border-brand/20">
            Why Bangalore
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose a <span className="text-brand">Digital Marketing Agency in Bangalore</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bangalore is India's fastest-growing business hub. Choosing the right digital marketing agency in Bangalore can be the difference between stagnation and 10x growth. Here's why location-specific expertise matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className={`bg-white border border-border/50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
