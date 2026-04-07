import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Building2, Rocket, Target, Globe, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: Building2,
    title: "India's Tech Capital Needs Specialized Digital Marketing",
    description: "Bangalore has 10,000+ startups and 400+ MNCs. A digital marketing agency here must understand the tech-savvy, fast-moving audience. Generic playbooks don't work."
  },
  {
    icon: Target,
    title: "Hyper-Competitive Market Requires Expert Execution",
    description: "With 500+ digital marketing agencies in Bangalore, competition for visibility is fierce. We stand apart with 30+ in-house specialists and data-driven strategies."
  },
  {
    icon: Globe,
    title: "Local Expertise with Global Standards",
    description: "We bring deep local knowledge — from Koramangala startups to Whitefield enterprises — combined with world-class digital marketing methodologies."
  },
  {
    icon: Rocket,
    title: "Speed, Transparency, and Measurable ROI",
    description: "Bangalore businesses need results fast. Campaigns launch in days, real-time dashboards provide full transparency, and every rupee is tracked to revenue."
  },
  {
    icon: TrendingUp,
    title: "300+ Bangalore Brands Scaled",
    description: "From HSR Layout cafes to MG Road enterprises, we've helped 300+ brands scale with integrated SEO, ads, social media, and web design strategies."
  },
  {
    icon: MapPin,
    title: "Your Neighbourhood Digital Marketing Agency",
    description: "We're not a remote agency sending cookie-cutter reports. We offer in-person strategy sessions, local market insights, and hands-on accountability."
  },
];

export const DMWhyBangaloreSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-4xl mx-auto mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4 border border-brand/20">
            Why Bangalore
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose a <span className="text-brand">Digital Marketing Agency in Bangalore</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choosing the right digital marketing agency in Bangalore can be the difference between stagnation and 10x growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
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
