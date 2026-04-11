import { lazy, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const EnquiryPopup = lazy(() => import("@/components/EnquiryPopup").then(m => ({ default: m.EnquiryPopup })));

const plans = [
  { name: "Starter", subtitle: "Single Channel", price: "From ₹25,000/month", description: "Ideal for businesses starting with SEO or PPC. Covers one primary channel with dedicated specialist, monthly reporting, and a live performance dashboard." },
  { name: "Growth", subtitle: "Multi-Channel", price: "From ₹60,000/month", description: "Covers 2–3 channels (e.g., SEO + Google Ads + Social Media). Includes a dedicated account manager, content production, and bi-weekly strategy calls.", highlighted: true },
  { name: "Scale", subtitle: "Full-Service", price: "From ₹1,20,000/month", description: "Full-service digital marketing across all channels: SEO, PPC, social media, content, email, and ORM. Includes GEO (AI search optimisation) and quarterly brand reviews." },
  { name: "Enterprise", subtitle: "Custom", price: "Custom pricing", description: "For large e-commerce brands, enterprise SaaS, and businesses with complex multi-market requirements. Includes dedicated team, custom reporting, and SLA-backed delivery." },
];

export const DMPricingSection = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-14">
          <span className="inline-block px-3 py-1 bg-brand/20 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/30">
            Transparent Pricing
          </span>
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Digital Marketing Services in Bangalore — <span className="text-brand">Pricing</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            All plans include no lock-in contracts and a free brand audit before you commit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto mb-8">
          {plans.map((plan, i) => (
            <div key={i} className={`rounded-xl p-4 sm:p-6 ${plan.highlighted ? 'bg-brand/10 border-2 border-brand/40' : 'bg-white/5 border border-white/10'}`}>
              {plan.highlighted && (
                <span className="inline-block px-2 py-0.5 bg-brand text-white text-[10px] font-bold rounded-full mb-2">MOST POPULAR</span>
              )}
              <h3 className="text-base sm:text-lg font-bold text-white">{plan.name}</h3>
              <p className="text-xs text-gray-400 mb-3">{plan.subtitle}</p>
              <p className="text-brand font-bold text-sm sm:text-base mb-3">{plan.price}</p>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{plan.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 text-center max-w-3xl mx-auto">
          <p className="text-white font-semibold text-sm sm:text-base mb-1">All plans start with a Free Brand Audit. No commitment required.</p>
          <p className="text-gray-400 text-xs sm:text-sm mb-4">We analyse your website, current digital presence, competitor landscape, and growth opportunities — and deliver a detailed report within 5 business days.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} size="lg" className="bg-brand hover:bg-brand/90 text-white rounded-full px-6 sm:px-8 text-sm sm:text-base">
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
