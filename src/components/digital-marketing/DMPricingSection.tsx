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
    <section className="py-12 md:py-20 lg:py-28 bg-foreground relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <span className="inline-block px-3 py-1 bg-brand/20 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/30">
            Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            Digital Marketing Services in Bangalore — <span className="text-brand">Pricing</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            All plans include no lock-in contracts and a free brand audit before you commit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto mb-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-5 sm:p-7 animate-fade-in relative ${
                plan.highlighted
                  ? "bg-brand/10 border-2 border-brand/40 ring-1 ring-brand/20"
                  : "bg-white/5 border border-white/10"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand text-white text-[10px] font-bold rounded-full">
                    <Star className="w-3 h-3" /> MOST POPULAR
                  </span>
                </div>
              )}
              <h3 className="text-lg sm:text-xl font-bold text-white">{plan.name}</h3>
              <p className="text-xs text-gray-400 mb-4">{plan.subtitle}</p>
              <div className="mb-5">
                <span className="text-2xl sm:text-3xl font-bold text-brand">{plan.price}</span>
                <span className="text-gray-400 text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-2.5">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                    <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto backdrop-blur-sm">
          <p className="text-white font-semibold text-base sm:text-lg mb-1">All plans start with a Free Brand Audit</p>
          <p className="text-gray-400 text-xs sm:text-sm mb-5">We analyse your website, current digital presence, competitor landscape, and growth opportunities — delivered within 5 business days.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} size="lg" className="bg-brand hover:bg-brand/90 text-white rounded-full px-6 sm:px-8 text-sm sm:text-base">
              Start My Free Audit <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => setShowEnquiryPopup(true)} className="rounded-full px-6 sm:px-8 border-white/20 text-white hover:bg-white/10 text-sm sm:text-base">
              <MessageCircle className="w-4 h-4 mr-2" /> Speak to a Strategist
            </Button>
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
