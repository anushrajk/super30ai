import { ClipboardCheck, Map, Rocket, TrendingUp, BarChart3 } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, number: "01", title: "Free Brand Audit", timeline: "Week 1", description: "We analyse your website, current rankings, competitor landscape, ad account performance, and social presence. You receive a detailed audit report regardless of whether you proceed." },
  { icon: Map, number: "02", title: "Strategy & Roadmap", timeline: "Week 1–2", description: "Based on the audit, we build a 90-day growth roadmap with channel priorities, budget allocation, keyword strategy, and KPI benchmarks." },
  { icon: Rocket, number: "03", title: "Campaign Setup & Launch", timeline: "Week 2–3", description: "Technical SEO fixes, PPC campaign builds, content calendar creation, tracking setup (GA4, GTM, conversion events), and creative production." },
  { icon: TrendingUp, number: "04", title: "Optimisation & Scaling", timeline: "Month 1+", description: "Weekly performance reviews, A/B testing, bid adjustments, content publishing, and link building. Monthly strategy calls to review results and plan the next cycle." },
  { icon: BarChart3, number: "05", title: "Reporting & Transparency", timeline: "Ongoing", description: "Live dashboard access, monthly detailed reports, quarterly business reviews with growth benchmarks and projections." },
];

export const DMProcessSection = () => (
  <section className="py-12 md:py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
    <div className="container mx-auto px-4 relative">
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
          How We Work
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
          Our Proven <span className="text-brand">Digital Marketing Process</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          Every engagement follows a structured, repeatable process designed to minimise wasted spend and accelerate results.
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Vertical connecting line */}
        <div className="hidden md:block absolute left-[39px] top-8 bottom-8 w-0.5 bg-border" />

        <div className="space-y-4 md:space-y-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-5 md:gap-8 animate-fade-in md:pb-10 last:pb-0"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Number circle */}
              <div className="relative flex-shrink-0">
                <div className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-2xl bg-brand flex items-center justify-center shadow-lg relative z-10">
                  <step.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              {/* Content card */}
              <div className="bg-card border border-border/50 rounded-2xl p-5 md:p-7 flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">{step.title}</h3>
                  <span className="inline-block px-2.5 py-0.5 bg-brand/10 text-brand text-[10px] sm:text-xs font-semibold rounded-full">
                    {step.timeline}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
