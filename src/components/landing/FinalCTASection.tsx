import { LeadCaptureForm } from "./LeadCaptureForm";
import { Check } from "lucide-react";

interface FinalCTASectionProps {
  onSubmit: (data: { website_url: string; email: string; role?: string; monthly_revenue?: string }) => void;
  loading?: boolean;
}

const benefits = [
  "Free AI visibility audit",
  "Custom strategy recommendations",
  "No commitment required"
];

export const FinalCTASection = ({ onSubmit, loading }: FinalCTASectionProps) => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4 border border-orange-500/30">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Dominate{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  AI Search?
                </span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Get your free AI SEO audit and discover exactly how to make AI search engines recommend your business.
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 justify-center lg:justify-start group"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-500 text-sm">
                Takes less than 60 seconds
              </p>
            </div>

            {/* Right - Form */}
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <LeadCaptureForm onSubmit={onSubmit} loading={loading} />
            </div>
          </div>

          <p className="text-slate-500 text-sm mt-12 text-center">
            Join <span className="text-orange-400 font-semibold">50+ businesses</span> already winning in AI search
          </p>
        </div>
      </div>
    </section>
  );
};
