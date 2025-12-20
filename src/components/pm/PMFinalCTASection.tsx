import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp, BarChart3, Zap, Sparkles } from "lucide-react";

interface PMFinalCTASectionProps {
  onOpenSurvey: () => void;
}

const benefits = [
  { icon: BarChart3, text: "Complete ads account audit" },
  { icon: Target, text: "Custom campaign strategy" },
  { icon: TrendingUp, text: "ROI projections & forecasts" },
  { icon: Zap, text: "Quick wins identification" },
];

export const PMFinalCTASection = ({ onOpenSurvey }: PMFinalCTASectionProps) => {
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <section ref={ref} className={`py-12 md:py-16 lg:py-24 relative bg-slate-900 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-1.5 rounded-full mb-6">
            <Target className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Free Ads Strategy Session</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Maximize Your Ad ROI?</span>
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
            Book a free consultation with our ads experts. Get a complete audit of your campaigns and discover hidden revenue opportunities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {benefits.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2">
                <item.icon className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <Button 
            onClick={onOpenSurvey}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6 h-auto rounded-xl shadow-lg shadow-orange-500/25 group"
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Start Free Audit Now
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-slate-400 text-sm mt-4">Takes 2 minutes • No credit card required</p>
        </div>
      </div>
    </section>
  );
};
