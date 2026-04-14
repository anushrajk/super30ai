import { lazy, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Check, Star } from "lucide-react";

const EnquiryPopup = lazy(() => import("@/components/EnquiryPopup").then(m => ({ default: m.EnquiryPopup })));

const plans = [
  {
    name: "Starter",
    subtitle: "Single Channel",
    price: "₹25,000",
    period: "/month",
    features: ["1 primary channel (SEO or PPC)", "Dedicated specialist", "Monthly reporting", "Live performance dashboard"],
  },
  {
    name: "Growth",
    subtitle: "Multi-Channel",
    price: "₹60,000",
    period: "/month",
    features: ["2–3 channels (SEO + Ads + Social)", "Dedicated account manager", "Content production included", "Bi-weekly strategy calls"],
    highlighted: true,
  },
  {
    name: "Scale",
    subtitle: "Full-Service",
    price: "₹1,20,000",
    period: "/month",
    features: ["All channels: SEO, PPC, Social, Content", "GEO (AI search optimisation)", "Email marketing & ORM", "Quarterly brand reviews"],
  },
  {
    name: "Enterprise",
    subtitle: "Custom",
    price: "Custom",
    period: "",
    features: ["Dedicated marketing team", "Multi-market campaigns", "Custom reporting & SLA", "Priority support & consulting"],
  },
];

export const DMPricingSection = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-20">
            <div>
              <span className="text-brand text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-background leading-[1.1]">
                Simple, transparent<br className="hidden md:block" />
                <span className="text-brand"> pricing</span>
              </h2>
            </div>
            <p className="text-background/40 text-sm max-w-sm">
              No lock-in contracts. All plans include a free brand audit before you commit.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 sm:p-7 relative transition-all duration-300 hover:-translate-y-0.5 ${
                  plan.highlighted
                    ? "bg-brand/10 border border-brand/20 ring-1 ring-brand/10"
                    : "bg-background/[0.04] border border-background/[0.08] hover:bg-background/[0.06]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                      <Star className="w-3 h-3" /> Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-background">{plan.name}</h3>
                  <p className="text-xs text-background/30 mt-0.5">{plan.subtitle}</p>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-brand">{plan.price}</span>
                  <span className="text-background/30 text-sm">{plan.period}</span>
                </div>

                <div className="w-full h-px bg-background/[0.06] mb-6" />

                <ul className="space-y-3">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm text-background/50">
                      <div className="w-4 h-4 rounded-full bg-brand/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-brand" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-background/[0.04] border border-background/[0.08] rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <p className="text-background font-semibold text-lg mb-1">All plans start with a Free Brand Audit</p>
            <p className="text-background/30 text-sm mb-6">
              Delivered within 5 business days — no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                size="lg"
                className="bg-brand hover:bg-brand/90 text-white rounded-full px-8"
              >
                Start My Free Audit <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowEnquiryPopup(true)}
                className="rounded-full px-8 border-background/15 text-background hover:bg-background/[0.06]"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> Speak to a Strategist
              </Button>
            </div>
          </div>
        </div>
      </div>
      {showEnquiryPopup && (
        <Suspense fallback={null}>
          <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
        </Suspense>
      )}
    </section>
  );
};
