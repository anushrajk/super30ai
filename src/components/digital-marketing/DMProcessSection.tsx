import { ClipboardCheck, Map, Rocket, TrendingUp, BarChart3 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible defaultValue="step-0" className="space-y-3">
          {steps.map((step, i) => (
            <AccordionItem
              key={i}
              value={`step-${i}`}
              className="bg-card border border-border/50 rounded-2xl px-5 sm:px-7 overflow-hidden data-[state=open]:border-brand/30 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline gap-4 py-5">
                <span className="flex items-center gap-4 text-left">
                  <div className="w-11 h-11 rounded-2xl bg-brand flex items-center justify-center flex-shrink-0 shadow-md">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="flex items-center gap-3">
                    <span className="text-sm sm:text-base md:text-lg font-bold text-foreground">{step.title}</span>
                    <span className="inline-block px-2.5 py-0.5 bg-brand/10 text-brand text-[10px] sm:text-xs font-semibold rounded-full">
                      {step.timeline}
                    </span>
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed pb-6 pl-[60px]">
                {step.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);
