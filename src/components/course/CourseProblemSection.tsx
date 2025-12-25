import { AlertTriangle, TrendingUp, X, Check, Clock, Brain, Award, DollarSign } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const problems = [
    { icon: Clock, text: "Traditional SEO takes 6-12 months to show results" },
    { icon: X, text: "Manual keyword research is becoming obsolete" },
    { icon: AlertTriangle, text: "Google algorithm changes every week" },
    { icon: Brain, text: "Your current skills will be obsolete by 2026" },
  ];

  const opportunities = [
    { icon: TrendingUp, text: "AI-native strategies deliver results 3x faster" },
    { icon: Brain, text: "Autonomous agents work 24/7 optimizing your campaigns" },
    { icon: DollarSign, text: "AI SEO specialists earn ₹5-10L+ starting salary" },
    { icon: Award, text: "First-mover advantage in a $100B opportunity" },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The <span className="text-red-500">Problem</span> vs The <span className="text-gradient">Opportunity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The marketing landscape is shifting faster than ever. Where do you stand?
          </p>
        </div>

        {/* Two Column Layout */}
        <div className={`grid md:grid-cols-2 gap-6 md:gap-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Problem Column */}
          <div className="relative p-6 md:p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
            <div className="absolute -top-4 left-6">
              <span className="px-4 py-1 bg-red-500/20 text-red-500 text-sm font-semibold rounded-full border border-red-500/30">
                ⚠️ The Problem
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-red-500 mt-4 mb-6">
              Traditional SEO is Dying
            </h3>
            
            <ul className="space-y-4 mb-8">
              {problems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-foreground/80 pt-1">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
              <p className="text-sm text-red-400 font-medium">
                📊 <strong>67%</strong> of SEO professionals report their skills becoming obsolete by 2026
              </p>
            </div>
          </div>

          {/* Opportunity Column */}
          <div className="relative p-6 md:p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
            <div className="absolute -top-4 left-6">
              <span className="px-4 py-1 bg-emerald-500/20 text-emerald-500 text-sm font-semibold rounded-full border border-emerald-500/30">
                ✨ The Opportunity
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-500 mt-4 mb-6">
              AI SEO is the $100B Opportunity
            </h3>
            
            <ul className="space-y-4 mb-8">
              {opportunities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className="text-foreground/80 pt-1">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
              <p className="text-sm text-emerald-400 font-medium">
                💰 AI SEO specialists earn <strong>60% more</strong> than traditional SEO professionals
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-muted-foreground">
            The question isn't <em>whether</em> AI will transform marketing—it's whether <strong>you'll be leading the change</strong> or left behind.
          </p>
        </div>
      </div>
    </section>
  );
};
