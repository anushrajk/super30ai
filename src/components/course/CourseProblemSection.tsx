import { AlertTriangle, TrendingUp, X, Check, Clock, Brain, Award, DollarSign, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseProblemSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const problems = [
    { icon: Clock, text: "Working 12-hour days but rankings keep dropping?" },
    { icon: X, text: "Spending lakhs on courses that teach 2019 SEO tactics?" },
    { icon: AlertTriangle, text: "Watching juniors with AI skills get promoted over you?" },
    { icon: Brain, text: "Feeling like ChatGPT might replace your job soon?" },
  ];

  const opportunities = [
    { icon: Zap, text: "AI does 80% of the grunt work while you strategize" },
    { icon: Brain, text: "Your AI agents work 24/7 optimizing campaigns" },
    { icon: DollarSign, text: "AI SEO specialists start at ₹7-12L in India" },
    { icon: Award, text: "Be the expert everyone calls when AI breaks things" },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Are You Still Doing SEO <span className="text-red-500">the 2019 Way?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The marketing game changed. The question is—will you adapt or get left behind?
          </p>
        </div>

        {/* Two Column Layout */}
        <div className={`grid md:grid-cols-2 gap-6 md:gap-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Problem Column */}
          <div className="relative p-6 md:p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
            <div className="absolute -top-4 left-6">
              <span className="px-4 py-1 bg-red-500/20 text-red-500 text-sm font-semibold rounded-full border border-red-500/30">
                😰 The Painful Truth
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-red-500 mt-4 mb-2">
              Sound Familiar?
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              If you said yes to even one of these, you're not alone.
            </p>
            
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
                📊 <strong>78%</strong> of Indian SEO professionals fear their skills will be obsolete by 2026
              </p>
            </div>
          </div>

          {/* Opportunity Column */}
          <div className="relative p-6 md:p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
            <div className="absolute -top-4 left-6">
              <span className="px-4 py-1 bg-emerald-500/20 text-emerald-500 text-sm font-semibold rounded-full border border-emerald-500/30">
                🚀 What Smart Marketers Do
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-500 mt-4 mb-2">
              Imagine This Instead
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              This is what life looks like when you master AI SEO.
            </p>
            
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
                💰 AI SEO specialists earn <strong>60% more</strong> than traditional SEO pros. That's ₹3-5L extra per year.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="text-foreground font-semibold">The question isn't whether AI will change marketing.</span> It's whether you'll be leading that change—or updating your resume.
          </p>
        </div>
      </div>
    </section>
  );
};
