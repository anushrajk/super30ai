import { Helmet } from "react-helmet-async";
import { getFaqs } from "@/data/faqs";
import { lazy, Suspense } from "react";
import { Shield, BarChart3, Users, Zap, Megaphone } from "lucide-react";
import { Navbar } from "@/components/Navbar";

import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";


const Footer = lazy(() => import("@/components/landing/Footer").then((m) => ({ default: m.Footer })));
const StickyCTA = lazy(() => import("@/components/landing/StickyCTA").then((m) => ({ default: m.StickyCTA })));
const DMProblemSection = lazy(() => import("@/components/digital-marketing/DMProblemSection").then((m) => ({ default: m.DMProblemSection })));
const DMSocialProofSection = lazy(() => import("@/components/digital-marketing/DMSocialProofSection").then((m) => ({ default: m.DMSocialProofSection })));
const DMComparisonSection = lazy(() => import("@/components/digital-marketing/DMComparisonSection").then((m) => ({ default: m.DMComparisonSection })));
const DMAISections = lazy(() => import("@/components/digital-marketing/DMAISections").then((m) => ({ default: m.DMAISections })));
const DMWhyBangaloreSection = lazy(() => import("@/components/digital-marketing/DMWhyBangaloreSection").then((m) => ({ default: m.DMWhyBangaloreSection })));
const ServicesDetailSection = lazy(() => import("@/components/digital-marketing/ServicesDetailSection").then((m) => ({ default: m.ServicesDetailSection })));
const DMIndustriesSection = lazy(() => import("@/components/digital-marketing/DMIndustriesSection").then((m) => ({ default: m.DMIndustriesSection })));
const DMBenefitsSection = lazy(() => import("@/components/digital-marketing/DMBenefitsSection").then((m) => ({ default: m.DMBenefitsSection })));
const DMProcessSection = lazy(() => import("@/components/digital-marketing/DMProcessSection").then((m) => ({ default: m.DMProcessSection })));
const DMPricingSection = lazy(() => import("@/components/digital-marketing/DMPricingSection").then((m) => ({ default: m.DMPricingSection })));
const DMTestimonialsSection = lazy(() => import("@/components/digital-marketing/DMTestimonialsSection").then((m) => ({ default: m.DMTestimonialsSection })));
const DMCaseStudySection = lazy(() => import("@/components/digital-marketing/DMCaseStudySection").then((m) => ({ default: m.DMCaseStudySection })));
const DMContentSection = lazy(() => import("@/components/digital-marketing/DMContentSection").then((m) => ({ default: m.DMContentSection })));
const DMRelevanceSection = lazy(() => import("@/components/digital-marketing/DMRelevanceSection").then((m) => ({ default: m.DMRelevanceSection })));
const DMFinalCTASection = lazy(() => import("@/components/digital-marketing/DMFinalCTASection").then((m) => ({ default: m.DMFinalCTASection })));
const DMFAQSection = lazy(() => import("@/components/digital-marketing/DMFAQSection").then((m) => ({ default: m.DMFAQSection })));


const faqSchemaData = getFaqs("digital-marketing").map((f) => ({ q: f.question, a: f.answer }));

const DigitalMarketing = () => {
  const { loading, handleFormSubmit } = useLeadSubmit({
    source: "digital_marketing",
    formId: "digital-marketing-form",
    formName: "Digital Marketing Consultation",
  });

  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency in Bangalore | 10x Your Growth</title>
        <meta name="description" content="Scale your brand with leading digital marketing company in Bangalore. Our services deliver ROI-focused SEO, PPC & social media strategies. Get a free brand audit" />
        <meta name="keywords" content="AI Digital Marketing Agency in Bangalore, AI Digital Marketing Company In Bangalore, AI Digital Marketing Services In Bangalore, Digital Marketing Agency in Bangalore, Digital Marketing Company In Bangalore, Digital Marketing Services In Bangalore, Online marketing company in bangalore, Internet marketing services in bangalore" />
        <link rel="canonical" href="https://super30ai.lovable.app/digital-marketing-agency-bangalore" />
        <meta property="og:title" content="Is Your Digital Marketing Agency Actually Driving Growth?" />
        <meta property="og:description" content="Most agencies promise results. We deliver 10x growth with AI-powered strategies. Let's talk today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://super30ai.lovable.app/digital-marketing-agency-bangalore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Is Your Digital Marketing Agency Actually Driving Growth?" />
        <meta name="twitter:description" content="Most agencies promise results. We deliver 10x growth with AI-powered strategies. Let's talk today!" />
        <meta name="twitter:url" content="https://super30ai.lovable.app/digital-marketing-agency-bangalore" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "The Super 30 — Digital Marketing Agency in Bangalore",
            url: "https://www.thesuper30.ai/digital-marketing-agency-bangalore",
            description:
              "The Super 30 is a leading digital marketing agency in Bangalore offering SEO, PPC, social media marketing, web design, content marketing, and ORM services for startups and enterprises.",
            telephone: "+91-9876543210",
            priceRange: "₹₹–₹₹₹",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "12.9716",
              longitude: "77.5946",
            },
            areaServed: [
              { "@type": "City", name: "Bangalore" },
              { "@type": "State", name: "Karnataka" },
              { "@type": "Country", name: "India" },
            ],
            serviceType: [
              "Digital Marketing",
              "Search Engine Optimization",
              "Pay Per Click Advertising",
              "Social Media Marketing",
              "Content Marketing",
              "Web Design and Development",
              "Online Reputation Management",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "180",
              bestRating: "5",
            },
            foundingDate: "2017",
            numberOfEmployees: "30+",
            sameAs: [
              "https://www.linkedin.com/company/thesuper30",
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqSchemaData.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "The Super 30",
            url: "https://www.thesuper30.ai/",
            foundingDate: "2017",
            numberOfEmployees: { "@type": "QuantitativeValue", value: 30 },
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        {/* Section 1: Hero */}
        <div id="dm-hero">
          <ServiceHeroSection
            badgeIcon={Megaphone}
            badgeText="#1 Digital Marketing Agency in Bangalore"
            headline={
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.2]">
                <span className="text-brand">AI Digital Marketing Agency in Bangalore</span> for 10x Business Growth
              </span>
            }
            description={
              <>
                Grow your brand with the leading <span className="text-foreground font-semibold">Digital Marketing Company in Bangalore</span>. Our ROI driven Digital Marketing Services include SEO, PPC and Social Media Marketing across Bangalore, including Koramangala, HSR Layout, Whitefield, Electronic City and other major business hubs.
              </>
            }
            trustSignals={[
              { icon: Shield, text: "Google & Meta Partner Certified" },
              { icon: BarChart3, text: "Avg. 3.8x ROAS Across Campaigns" },
              { icon: Users, text: "30+ In-House Marketing Experts" },
              { icon: Zap, text: "No Lock-In Contracts Required" },
            ]}
            credentials={["200+ Brands Served", "4.9/5 Client Rating", "34 Awards"]}
            onSubmit={handleFormSubmit}
            loading={loading}
            formTitle="Get Your Free Brand Audit"
            formDescription="No commitment. Delivered in 5 business days."
            formButtonText="Start My Free Audit"
            formId="lead_capture_digital_marketing"
            formName="Digital Marketing Agency Bangalore — Free Brand Audit"
          />
        </div>

        {/* Client Logos */}
        <ClientLogosSection />

        <Suspense fallback={null}>
          <DMProblemSection />
          <DMSocialProofSection />
          <DMComparisonSection />
        </Suspense>

        {/* Section 2: Why Bangalore */}
        <Suspense fallback={null}>
          <DMWhyBangaloreSection />
        </Suspense>

        {/* Section 3: Services */}
        <Suspense fallback={null}>
          <ServicesDetailSection />
          <DMAISections />
        </Suspense>

        {/* Section 4: Industries */}
        <Suspense fallback={null}>
          <DMIndustriesSection />
        </Suspense>

        {/* Section 5: Why Choose Us */}
        <Suspense fallback={null}>
          <DMBenefitsSection />
        </Suspense>

        {/* Section 6: Process */}
        <Suspense fallback={null}>
          <DMProcessSection />
        </Suspense>

        <Suspense fallback={null}>
          <DMContentSection />
        </Suspense>

        {/* Section 7: Pricing */}
        <Suspense fallback={null}>
          <DMPricingSection />
        </Suspense>

        {/* Section 8: Case Studies */}
        <Suspense fallback={null}>
          <DMCaseStudySection />
        </Suspense>

        {/* Testimonials */}
        <Suspense fallback={null}>
          <DMTestimonialsSection />
          <DMRelevanceSection />
        </Suspense>

        {/* Section 9: FAQ */}
        <Suspense fallback={null}>
          <DMFAQSection />
        </Suspense>

        {/* Section 10: Final CTA */}
        <Suspense fallback={null}>
          <DMFinalCTASection />
        </Suspense>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <StickyCTA onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
      </Suspense>
    </>
  );
};

export default DigitalMarketing;
