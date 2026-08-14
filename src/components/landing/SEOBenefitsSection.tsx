import { useState } from "react";
import {
  Search,
  TrendingUp,
  Target,
  Users,
  BarChart3,
  Shield,
  Globe,
  Zap,
  Clock,
  Check,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { EnquiryPopup } from "@/components/EnquiryPopup";

/* ---------------- Hover micro-visuals (orange / white only) ---------------- */

const Chip = ({ children, i }: { children: React.ReactNode; i: number }) => (
  <span
    className="rounded-full border border-brand/30 bg-brand/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
    style={{ transitionDelay: `${i * 90}ms` }}
  >
    {children}
  </span>
);

const Bar = ({ w, i, filled }: { w: string; i: number; filled?: boolean }) => (
  <div className="flex items-center gap-2">
    <div className={`h-1.5 w-1.5 rounded-full ${filled ? "bg-brand" : "bg-brand/30"}`} />
    <div className="h-2 flex-1 overflow-hidden rounded-full bg-brand/10">
      <div
        className={`h-full rounded-full ${filled ? "bg-brand" : "bg-brand/40"} w-0 transition-all duration-700 ease-out`}
        style={{ transitionDelay: `${i * 120}ms` }}
        data-w={w}
      />
    </div>
  </div>
);

// AI logos popping in
const LLMVisual = () => (
  <div className="flex flex-wrap items-center gap-1.5">
    {["ChatGPT", "Gemini", "Perplexity", "Claude", "Copilot", "AI Overviews"].map((n, i) => (
      <Chip key={n} i={i}>
        {n}
      </Chip>
    ))}
  </div>
);

// SERP results sliding up, #1 highlighted
const SerpVisual = () => (
  <div className="space-y-1.5">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className={`flex items-center gap-2 rounded-lg border px-2 py-1.5 opacity-0 -translate-x-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 ${
          i === 0 ? "border-brand bg-brand/10" : "border-border bg-background"
        }`}
        style={{ transitionDelay: `${i * 140}ms` }}
      >
        <span className={`text-[10px] font-bold ${i === 0 ? "text-brand" : "text-muted-foreground"}`}>
          #{i + 1}
        </span>
        <div className={`h-1.5 rounded-full ${i === 0 ? "w-24 bg-brand" : "w-16 bg-brand/25"}`} />
        {i === 0 && (
          <TrendingUp className="ml-auto h-3.5 w-3.5 text-brand transition-transform duration-500 group-hover:-translate-y-0.5" />
        )}
      </div>
    ))}
  </div>
);

// Lead form auto-filling
const FormVisual = () => (
  <div className="space-y-1.5 rounded-lg border border-border bg-background p-2">
    {["Name", "Email", "Requirement"].map((f, i) => (
      <div key={f} className="flex items-center gap-2 rounded-md border border-border px-2 py-1">
        <span className="w-16 text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">{f}</span>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-brand/10">
          <div
            className="h-full w-0 rounded-full bg-brand transition-all duration-700 ease-out group-hover:w-full"
            style={{ transitionDelay: `${i * 180}ms` }}
          />
        </div>
      </div>
    ))}
    <div className="flex justify-end">
      <span className="rounded-full bg-brand px-2 py-0.5 text-[9px] font-bold text-white opacity-0 transition-all duration-500 delay-[600ms] group-hover:opacity-100">
        Lead captured
      </span>
    </div>
  </div>
);

// Authority: mentions stacking
const AuthorityVisual = () => (
  <div className="flex items-end gap-1.5">
    {[40, 60, 45, 80, 100].map((h, i) => (
      <div
        key={i}
        className="w-6 rounded-t-md bg-brand/20 transition-all duration-700 ease-out group-hover:bg-brand"
        style={{ height: 12, transitionDelay: `${i * 90}ms` }}
        data-h={h}
      />
    ))}
    <span className="ml-2 text-[10px] font-semibold uppercase tracking-wide text-brand opacity-0 transition-opacity duration-500 delay-500 group-hover:opacity-100">
      Trusted brand
    </span>
  </div>
);

// ROI counter
const RoiVisual = () => (
  <div className="flex items-center gap-3">
    <div className="rounded-xl border border-brand/30 bg-brand/5 px-3 py-2">
      <div className="text-xl font-bold leading-none text-brand transition-transform duration-500 group-hover:scale-110">
        300%+
      </div>
      <div className="mt-1 text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">Growth</div>
    </div>
    <div className="flex-1 space-y-1.5">
      {[0, 1, 2].map((i) => (
        <div key={i} className="h-1.5 overflow-hidden rounded-full bg-brand/10">
          <div
            className="h-full w-1/4 rounded-full bg-brand transition-all duration-700 ease-out group-hover:w-full"
            style={{ transitionDelay: `${i * 130}ms` }}
          />
        </div>
      ))}
    </div>
  </div>
);

// Shield pulse / algorithm proof
const ShieldVisual = () => (
  <div className="flex items-center gap-2">
    {["Core Update", "AI Mode", "SGE", "Helpful Content"].map((n, i) => (
      <Chip key={n} i={i}>
        {n}
      </Chip>
    ))}
  </div>
);

// Globe reach
const GlobeVisual = () => (
  <div className="flex items-center gap-2">
    {["IN", "US", "UK", "AE", "SG"].map((n, i) => (
      <span
        key={n}
        className="flex h-8 w-8 scale-75 items-center justify-center rounded-full border border-brand/30 bg-brand/5 text-[10px] font-bold text-brand opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
        style={{ transitionDelay: `${i * 100}ms` }}
      >
        {n}
      </span>
    ))}
  </div>
);

// Speed meter
const SpeedVisual = () => (
  <div className="space-y-2">
    <div className="h-2 overflow-hidden rounded-full bg-brand/10">
      <div className="h-full w-[15%] rounded-full bg-brand transition-all duration-1000 ease-out group-hover:w-[92%]" />
    </div>
    <div className="flex justify-between text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">
      <span>Week 1</span>
      <span className="text-brand opacity-0 transition-opacity duration-500 delay-700 group-hover:opacity-100">
        Momentum
      </span>
      <span>Week 12</span>
    </div>
  </div>
);

// 24/7 clock ticks
const ClockVisual = () => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="h-6 w-1.5 origin-bottom scale-y-[0.35] rounded-full bg-brand/25 transition-all duration-500 group-hover:scale-y-100 group-hover:bg-brand"
        style={{ transitionDelay: `${i * 60}ms` }}
      />
    ))}
    <span className="ml-2 text-[10px] font-semibold uppercase tracking-wide text-brand opacity-0 transition-opacity duration-500 delay-700 group-hover:opacity-100">
      Always on
    </span>
  </div>
);

const benefits = [
  {
    icon: Search,
    title: "AI Search Visibility",
    description:
      "Dominate visibility across ChatGPT, Perplexity, and Google AI platforms with strategically optimized search content.",
    features: ["AI search optimization", "LLM brand citations", "Generative search visibility"],
    visual: LLMVisual,
  },
  {
    icon: TrendingUp,
    title: "Organic Traffic Growth",
    description:
      "Drive sustainable organic traffic growth through search strategies focused on qualified business conversions without paid ads.",
    features: ["Long-term rankings", "Compounding search growth", "Zero paid ad spend"],
    visual: SerpVisual,
  },
  {
    icon: Target,
    title: "Highly Qualified Leads",
    description: "Attract high intent visitors actively searching for products, services, and business solutions.",
    features: ["Search intent mapping", "Customer journey targeting", "Conversion focused optimization"],
    visual: FormVisual,
  },
  {
    icon: Users,
    title: "Brand Authority Growth",
    description:
      "Position your business as a credible industry leader through trusted search visibility and authority signals.",
    features: ["Thought leadership content", "Industry mentions and citations", "Brand trust signals"],
    visual: AuthorityVisual,
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    description: "Track every qualified lead and conversion generated through your SEO strategy and search visibility.",
    features: ["Revenue attribution", "Transparent growth insights", "Performance driven metrics"],
    visual: RoiVisual,
  },
  {
    icon: Shield,
    title: "Future Ready SEO Strategy",
    description:
      "Stay visible as AI driven search experiences continue to reshape how customers discover businesses online.",
    features: ["Algorithm proof optimization", "AI optimized content", "Adaptive search strategy"],
    visual: ShieldVisual,
  },
  {
    icon: Globe,
    title: "Expanded Global Reach",
    description: "Grow your online presence beyond regional markets and connect with wider international audiences.",
    features: ["International SEO growth", "Multilingual search visibility", "Global market expansion"],
    visual: GlobeVisual,
  },
  {
    icon: Zap,
    title: "Faster Organic Results",
    description:
      "Achieve measurable SEO improvements through focused optimization strategies and smarter search execution.",
    features: ["Early growth momentum", "Priority based execution", "Accelerated search visibility"],
    visual: SpeedVisual,
  },
  {
    icon: Clock,
    title: "24/7 Visibility",
    description:
      "Your search visibility continues working around the clock to attract relevant customers and qualified business inquiries.",
    features: ["Consistent search presence", "Passive lead generation", "Consistent brand marketing"],
    visual: ClockVisual,
  },
];

export const SEOBenefitsSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  const scrollToForm = () => {
    document.getElementById("ai-seo-hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Eyebrow rule */}
        <div className="border-t border-border pt-4 mb-6 md:mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Why Modern AI SEO Matters?
          </span>
        </div>

        {/* Editorial split heading */}
        <div className="grid lg:grid-cols-12 gap-4 md:gap-10 items-start mb-8 md:mb-12">
          <h2 className="lg:col-span-7 text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight leading-[1.05] text-foreground">
            Content strategies designed for{" "}
            <span className="text-brand">modern AI search visibility</span>
          </h2>
          <p className="lg:col-span-5 text-base md:text-lg text-muted-foreground lg:pt-2">
            We don't just write for bots, we write for your customers. Modern SEO goes beyond just search rankings. Our{" "}
            <span className="text-foreground font-semibold">search engine optimization services in Bangalore</span>{" "}
            develop authoritative content strategies to boost your Google visibility, enhance your relevance for AI
            Search, and establish your brand as a trusted industry leader in your niche.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group relative flex flex-col rounded-2xl border border-border bg-card p-5 md:p-6 transition-all duration-500 hover:border-brand hover:shadow-[0_12px_40px_-24px_hsl(var(--brand)/0.6)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-brand">
                  <benefit.icon className="w-5 h-5 text-brand transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold uppercase tracking-tight text-foreground">
                  {benefit.title}
                </h3>
                <span className="ml-auto text-[11px] font-semibold tabular-nums text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Hover animation stage */}
              <div className="mb-4 rounded-xl border border-border bg-muted/40 p-3 min-h-[92px] flex items-center">
                <div className="w-full">
                  <benefit.visual />
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{benefit.description}</p>

              <ul className="mt-auto space-y-2">
                {benefit.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground font-medium">
                    <span className="w-4 h-4 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-brand" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8 md:mt-12">
          <Button onClick={scrollToForm} size="lg" className="rounded-full group">
            <Sparkles className="w-4 h-4 mr-2" />
            Start Your Free SEO Audit
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline-brand"
            size="lg"
            onClick={() => setShowEnquiryPopup(true)}
            className="rounded-full group"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Enquire Now
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </section>
  );
};
