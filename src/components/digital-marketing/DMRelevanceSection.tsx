import { lazy, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const EnquiryPopup = lazy(() => import("@/components/EnquiryPopup").then(m => ({ default: m.EnquiryPopup })));

const forYou = [
  "Invest significantly in marketing, but need clearer revenue visibility",
  "Prefer one agency managing SEO, advertising, social media, and design",
  "Focus on long-term business growth instead of short-term results",
  "Need performance reporting connected directly to leads and revenue",
  "Value transparency, live dashboards, and measurable campaign insights",
  "Want an experienced Bangalore marketing team with direct collaboration",
];

const notForYou = [
  "You are focused only on vanity metrics or artificial engagement",
  "Your current marketing budget is extremely limited for growth (under ₹25,000)",
  "You expect instant results without strategic planning and optimization",
  "You prefer hiring individual freelancers instead of a connected agency",
  "You frequently switch agencies before strategies have time to perform",
];

export const DMRelevanceSection = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <span className="inline-block px-3 py-1 bg-brand/20 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/30">Is Our Digital Marketing Agency Right for You?</span>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3">
            Is a Full-Service <span className="text-brand">Digital Marketing Agency in Bangalore</span> the Right Fit for Your Business?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">We believe in honest partnerships, measurable expectations, and long-term business growth focused on strategy, performance, and sustainable digital success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          <div className="bg-white/5 border border-brand/30 rounded-xl p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-brand mb-4">✓ Best for businesses that...</h3>
            <ul className="space-y-3">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] text-white font-bold">✓</div>
                  <span className="text-gray-300 text-xs sm:text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-400 mb-4">✗ May not be the right fit if...</h3>
            <ul className="space-y-3">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] text-white font-bold">✗</div>
                  <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} size="lg" className="bg-brand hover:bg-brand/90 text-white rounded-full px-6 sm:px-8 text-sm sm:text-base">
            Get Free Digital Marketing Strategy <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => setShowEnquiryPopup(true)} className="rounded-full px-6 sm:px-8 border-white/20 text-white hover:bg-white/10 text-sm sm:text-base">
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
