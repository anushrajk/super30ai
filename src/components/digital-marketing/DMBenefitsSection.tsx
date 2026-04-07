import { lazy, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const EnquiryPopup = lazy(() => import("@/components/EnquiryPopup").then(m => ({ default: m.EnquiryPopup })));

const benefits = [
  { title: "Organic Visibility", description: "Dominate Google rankings with proven SEO — a core strength of our digital marketing agency in Bangalore.", features: ["Technical SEO", "Content strategy", "Link building"] },
  { title: "Paid Acquisition", description: "Google, Meta, and LinkedIn ads optimized for maximum ROAS. Our Bangalore experts manage every rupee.", features: ["Smart bidding", "Audience targeting", "Cross-platform"] },
  { title: "Revenue Growth", description: "Every marketing rupee tracked from click to close. We focus on pipeline, not vanity metrics.", features: ["Full-funnel attribution", "Pipeline tracking", "Revenue dashboards"] },
  { title: "Brand Building", description: "Build a brand that's recognized and trusted — through strategic social media, content, and community.", features: ["Social media strategy", "Content creation", "Community building"] },
  { title: "Data-Driven Decisions", description: "Analytics that tell you what's working, what's not, and what to do next. No guesswork.", features: ["Performance analytics", "A/B testing", "Campaign forecasting"] },
  { title: "Competitive Intelligence", description: "Know what your Bangalore competitors are doing online — and stay three steps ahead.", features: ["Competitor monitoring", "Gap analysis", "Market positioning"] },
  { title: "Multi-Channel Presence", description: "Unified brand voice across SEO, ads, social, email, and web — orchestrated as one growth engine.", features: ["Channel integration", "Consistent messaging", "Cross-platform synergy"] },
  { title: "Speed to Market", description: "Launch campaigns in days, not weeks. Our 30+ team handles everything so your brand moves fast.", features: ["Rapid deployment", "Content at scale", "Automated workflows"] },
  { title: "Always-On Marketing", description: "Your marketing machine works 24/7 — SEO, retargeting, and email automation never sleep.", features: ["Marketing automation", "Nurture sequences", "Retargeting funnels"] },
];

export const DMBenefitsSection = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section className="py-8 md:py-14 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
            Why Choose Our Digital Marketing Agency in Bangalore
          </span>
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Everything Your Business Needs to <span className="text-brand">Grow Online</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            A complete digital marketing engine — from traffic to revenue — built by Bangalore's top marketing experts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-white border border-border/50 rounded-xl p-4 md:p-6">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-relaxed">{benefit.description}</p>
              <ul className="space-y-1.5">
                {benefit.features.map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-xs sm:text-sm text-foreground font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 md:mt-12">
          <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} size="lg" className="bg-brand hover:bg-brand/90 text-white rounded-full px-6 sm:px-8 text-sm sm:text-base">
            Get Your Free Digital Marketing Strategy <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => setShowEnquiryPopup(true)} className="rounded-full px-6 sm:px-8 border-brand/30 text-brand hover:bg-brand/5 text-sm sm:text-base">
            <MessageCircle className="w-4 h-4 mr-2" /> Enquire Now
          </Button>
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
