import { lazy, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Search, BadgeDollarSign, Megaphone, PenSquare, Mail, LayoutGrid } from "lucide-react";

const EnquiryPopup = lazy(() => import("@/components/EnquiryPopup").then(m => ({ default: m.EnquiryPopup })));

const services = [
  { icon: Search, title: "SEO Services", description: "Technical SEO, local visibility, content clusters, and authority building that improve rankings and lead quality." },
  { icon: BadgeDollarSign, title: "Google Ads", description: "Search, display, and remarketing campaigns built to lower CAC and improve qualified conversions." },
  { icon: Megaphone, title: "Social Media Marketing", description: "Platform strategy, campaign creatives, reels, and monthly content systems that drive awareness and engagement." },
  { icon: PenSquare, title: "Content Marketing", description: "Blogs, landing pages, ad copy, and funnel content mapped to search intent and buyer stages." },
  { icon: Mail, title: "Email Automation", description: "Lifecycle flows, lead nurture sequences, and retention campaigns designed to turn traffic into repeat revenue." },
  { icon: LayoutGrid, title: "Web Design & CRO", description: "Conversion-focused pages, UX improvements, and fast landing experiences that turn clicks into enquiries." },
];

export const DMProblemSection = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-14">
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
            Digital Marketing Services in Bangalore
          </span>
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Full-Funnel Services Built to <span className="text-brand">Grow Bangalore Brands</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            The same compact card layout — now focused on the core services we execute in-house to drive traffic, leads, and revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mb-6 md:mb-12 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div key={i} className="bg-background border border-brand/15 rounded-xl p-4 md:p-5">
              <div className="w-11 h-11 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                <service.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} size="lg" className="bg-brand hover:bg-brand/90 text-white rounded-full px-6 sm:px-8 text-sm sm:text-base">
            Get Your Free Digital Marketing Audit <ArrowRight className="w-4 h-4 ml-2" />
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
