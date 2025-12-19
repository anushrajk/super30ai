import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LeadCaptureForm } from "@/components/landing/LeadCaptureForm";
import { ArrowRight } from "lucide-react";

interface PMFinalCTASectionProps {
  onSubmit: (data: { website_url: string; email: string; role?: string; monthly_revenue?: string }) => void;
  loading?: boolean;
}

export const PMFinalCTASection = ({ onSubmit, loading }: PMFinalCTASectionProps) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className={`py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Maximize Your Ad ROI?</h2>
            <p className="text-lg text-slate-300 mb-8">Get a free audit of your current ad performance and discover untapped opportunities.</p>
            <ul className="space-y-3">
              {["Free ads account audit", "Custom strategy recommendations", "ROI projections", "No obligation"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <ArrowRight className="w-4 h-4 text-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <LeadCaptureForm onSubmit={onSubmit} loading={loading} />
          </div>
        </div>
      </div>
    </section>
  );
};
