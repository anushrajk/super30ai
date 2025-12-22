import { LeadCaptureForm } from "./LeadCaptureForm";
import { Check, Shield, Clock, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FinalCTASectionProps {
  onSubmit: (data: { website_url: string; email: string; phone?: string; role?: string; monthly_revenue?: string }) => void;
  loading?: boolean;
}

const benefits = [
  "Complete AI visibility score across ChatGPT, Perplexity & Google AI",
  "Competitor analysis with actionable insights",
  "Custom 90-day growth roadmap",
  "Direct access to senior SEO strategists",
];

const guarantees = [
  { icon: Shield, text: "No credit card required" },
  { icon: Clock, text: "Results in under 60 seconds" },
  { icon: Award, text: "Guaranteed actionable insights" },
];

export const FinalCTASection = ({ onSubmit, loading }: FinalCTASectionProps) => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className="py-8 md:py-16 lg:py-20 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-brand/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-brand/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Urgency banner */}
          <div className={`text-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/30 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              <span className="text-brand text-sm font-medium">
                Limited: Only 5 free audits remaining this week
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className={`text-center lg:text-left transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                Stop Guessing.{" "}
                <span className="text-brand-gradient">
                  Start Dominating.
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Your competitors are already optimizing for AI search. Get your free visibility audit and discover exactly what you're missing.
              </p>

              {/* Benefits checklist */}
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-3 justify-center lg:justify-start group transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                  >
                    <div className="w-6 h-6 bg-brand-gradient rounded-full flex items-center justify-center shadow-brand flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-gray-200 text-left">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Guarantees */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {guarantees.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-2 text-gray-300 text-sm transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${(index + 6) * 100}ms` }}
                  >
                    <item.icon className="w-4 h-4 text-brand" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <LeadCaptureForm onSubmit={onSubmit} loading={loading} />
            </div>
          </div>

          {/* Bottom social proof */}
          <div className={`mt-12 pt-8 border-t border-white/10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400 text-sm">
              <span>Trusted by leaders at:</span>
              <div className="flex items-center gap-4">
                {["TechFlow", "ScaleUp", "GrowthIQ", "VentureX"].map((company, i) => (
                  <span key={i} className="text-gray-300 font-medium">{company}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
