import { LeadCaptureForm } from "./LeadCaptureForm";
import { Check, Shield, Clock, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FinalCTASectionProps {
  onSubmit: (data: { website_url: string; email: string; phone?: string; role?: string; monthly_revenue?: string }) => void;
  loading?: boolean;
  variant?: "light" | "dark";
}

const benefits = [
  "Comprehensive AI visibility analysis across ChatGPT, Perplexity, and Google AI",
  "Competitor research supported by actionable SEO growth insights",
  "Personalized 90-day SEO growth strategy roadmap",
  "Direct collaboration with experienced SEO consultants",
];

const guarantees = [
  { icon: Shield, text: "No credit card required" },
  { icon: Clock, text: "Results in under 60 seconds" },
  { icon: Award, text: "Guaranteed actionable insights" },
];

export const FinalCTASection = ({ onSubmit, loading, variant = "dark" }: FinalCTASectionProps) => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const isDark = variant === "dark";

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto rounded-2xl p-6 md:p-10 lg:p-12 overflow-hidden ${isDark ? 'bg-foreground' : 'bg-muted/40 border border-border'}`}>
            {/* Urgency banner */}
            <div className={`text-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-brand/20 border border-brand/30' : 'bg-brand/10 border border-brand/20'}`}>
                <div className="w-2 h-2 bg-brand rounded-full" />
                <span className="text-brand text-sm font-medium">
                  Limited: Only 5 free audits remaining this week
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left Content */}
              <div className={`text-center lg:text-left transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight ${isDark ? 'text-background' : 'text-foreground'}`}>
                  Why Brands Choose Our{" "}
                  <span className="text-brand-gradient">
                    SEO Company in Bangalore?
                  </span>
                </h2>
                <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-background/70' : 'text-muted-foreground'}`}>
                  Transparency is our core value. Our SEO agency in Bangalore combines data backed execution, advanced AI visibility insights, and performance driven reporting so your business clearly understands how search growth contributes to revenue.
                </p>

                {/* Benefits checklist */}
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start gap-3 justify-center lg:justify-start group transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                    >
                       <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                         <Check className="w-3.5 h-3.5 text-primary-foreground" />
                      </div>
                      <span className={`text-left ${isDark ? 'text-background' : 'text-foreground'}`}>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Guarantees */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  {guarantees.map((item, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center gap-2 text-sm transition-all duration-500 ${isDark ? 'text-background/60' : 'text-muted-foreground'} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
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
                <LeadCaptureForm 
                  onSubmit={onSubmit} 
                  loading={loading} 
                  formTitle="Book Your Free AI Visibility Consultation"
                  formDescription="In a brief consultation session, learn how you can enhance AI search results and generate higher-quality organic leads for your business."
                  formBadgeText="100% Free"
                  formButtonText="Book Your Free Consultation Now"
                />
              </div>
            </div>

            {/* Bottom social proof */}
            <div className={`mt-12 pt-8 border-t transition-all duration-700 delay-500 ${isDark ? 'border-white/10' : 'border-border'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 text-sm ${isDark ? 'text-background/60' : 'text-muted-foreground'}`}>
                <span>Trusted by leaders at:</span>
                <div className="flex items-center gap-4">
                  {["Digital Academy 360", "ICS", "BuildingWorld", "I-Sit"].map((company, i) => (
                    <span key={i} className={`font-medium ${isDark ? 'text-background' : 'text-foreground'}`}>{company}</span>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
