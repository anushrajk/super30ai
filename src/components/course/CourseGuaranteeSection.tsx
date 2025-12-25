import { Shield, Clock, Users, BadgeCheck, Handshake, RotateCcw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseGuaranteeSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const guarantees = [
    {
      icon: Shield,
      title: "90-Day Placement Guarantee",
      description: "If you don't get placed within 90 days of course completion, we'll refund 50% of your fee. No questions asked.",
      highlight: "50% Refund",
    },
    {
      icon: RotateCcw,
      title: "7-Day Money-Back",
      description: "Not satisfied with the course in the first week? Get a full refund within 7 days of starting.",
      highlight: "100% Refund",
    },
    {
      icon: Users,
      title: "Lifetime Support",
      description: "Access to alumni network, job postings, and career support even after you complete the course.",
      highlight: "Forever",
    },
  ];

  const trustSignals = [
    { icon: BadgeCheck, text: "Applied AI Institute Certified" },
    { icon: Handshake, text: "50+ Hiring Partners" },
    { icon: Clock, text: "95% Placement Rate" },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-emerald-500/10 text-emerald-500 text-sm font-semibold rounded-full border border-emerald-500/30 mb-4">
            Our Promise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Success is <span className="text-gradient">Guaranteed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're so confident in our program that we back it with industry-leading guarantees
          </p>
        </div>

        {/* Guarantee Cards */}
        <div className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="bg-card border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className="w-8 h-8 text-emerald-500" />
                </div>
                <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-semibold rounded-full mb-3">
                  {guarantee.highlight}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-2">{guarantee.title}</h3>
                <p className="text-sm text-muted-foreground">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Signals */}
        <div className={`flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50">
              <signal.icon className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
              <span className="text-sm text-foreground font-medium">{signal.text}</span>
            </div>
          ))}
        </div>

        {/* Fine Print */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xs text-muted-foreground max-w-xl mx-auto">
            *Placement guarantee applies to students who complete all assignments, attend 90%+ classes, and actively participate in the job search process. Terms and conditions apply.
          </p>
        </div>
      </div>
    </section>
  );
};
