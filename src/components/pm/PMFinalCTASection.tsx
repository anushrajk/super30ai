import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PMLeadCaptureForm } from "@/components/pm/PMLeadCaptureForm";
import { ArrowRight, Target, TrendingUp, BarChart3, Zap } from "lucide-react";

interface PMFinalCTASectionProps {
  onSubmit: (data: { website_url: string; email: string; role?: string; monthly_revenue?: string }) => void;
  loading?: boolean;
}

const benefits = [
  { icon: BarChart3, text: "Complete ads account audit" },
  { icon: Target, text: "Custom campaign strategy" },
  { icon: TrendingUp, text: "ROI projections & forecasts" },
  { icon: Zap, text: "Quick wins identification" },
];

export const PMFinalCTASection = ({ onSubmit, loading }: PMFinalCTASectionProps) => {
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <section ref={ref} className={`py-24 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-1.5 rounded-full mb-6">
              <Target className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Free Ads Strategy Session</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Maximize Your Ad ROI?</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Book a free consultation with our ads experts. Get a complete audit of your campaigns and discover hidden revenue opportunities.
            </p>
            <ul className="space-y-4">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform">
                    <item.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 shadow-2xl shadow-blue-500/10">
            <PMLeadCaptureForm onSubmit={onSubmit} loading={loading} />
          </div>
        </div>
      </div>
    </section>
  );
};
