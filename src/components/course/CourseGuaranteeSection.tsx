import { Shield, Clock, Users, BadgeCheck, Handshake, RotateCcw, Heart, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseGuaranteeSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const guarantees = [
    {
      icon: Shield,
      title: "90-Day Job Guarantee",
      description: "No job in 90 days after course completion? We'll refund 50% of your fee. No excuses, no complicated terms.",
      highlight: "50% Money Back",
      subtext: "We only succeed when you get hired"
    },
    {
      icon: RotateCcw,
      title: "7-Day 'Kuch Nahi Samjha' Refund",
      description: "Attended the first week and realized this isn't for you? Full refund, no questions asked. We get it—not everything is for everyone.",
      highlight: "100% Refund",
      subtext: "No hard feelings, seriously"
    },
    {
      icon: Users,
      title: "Lifetime Alumni Support",
      description: "Job search support, resume reviews, mock interviews, salary negotiation help—even 5 years after you graduate. We're in this together.",
      highlight: "Forever Free",
      subtext: "You're family now"
    },
  ];

  const trustSignals = [
    { icon: BadgeCheck, text: "Applied AI Institute Certified" },
    { icon: Handshake, text: "50+ Hiring Partner Companies" },
    { icon: Clock, text: "95% Placed Within 90 Days" },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-emerald-500/10 text-emerald-500 text-sm font-semibold rounded-full border border-emerald-500/30 mb-4">
            Zero Risk
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We Put Our Money <span className="text-gradient">Where Our Mouth Is</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If you don't get placed, you don't pay the full fee. Simple as that.
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
                <p className="text-sm text-muted-foreground mb-3">{guarantee.description}</p>
                <p className="text-xs text-emerald-500 font-medium">{guarantee.subtext}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why We Can Afford This */}
        <div className={`max-w-2xl mx-auto mb-10 p-6 bg-card rounded-xl border border-border/50 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[hsl(var(--brand-orange))]/10 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Why can we afford this guarantee?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Because we've done it 500+ times. Our curriculum is battle-tested, our hiring partners are real, and our alumni network is strong. 
                <span className="text-foreground"> When 95% of students get placed, we can afford to take the risk on the 5%.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className={`flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50">
              <signal.icon className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
              <span className="text-sm text-foreground font-medium">{signal.text}</span>
            </div>
          ))}
        </div>

        {/* Fine Print */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xs text-muted-foreground max-w-xl mx-auto">
            *Guarantee applies if you complete all assignments, attend 90%+ classes, and actively apply to jobs. We track this, so please don't game the system. 
            We want you to succeed, not just get a refund.
          </p>
        </div>
      </div>
    </section>
  );
};
