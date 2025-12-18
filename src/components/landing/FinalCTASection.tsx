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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Dominate AI Search?
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                Get your free AI SEO audit and discover exactly how to make AI search engines recommend your business.
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
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
            <div>
              <LeadCaptureForm onSubmit={onSubmit} loading={loading} />
            </div>
          </div>

          <p className="text-slate-500 text-sm mt-12 text-center">
            Join 50+ businesses already winning in AI search
          </p>
        </div>
      </div>
    </section>
  );
};
