import { Helmet } from "react-helmet-async";
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
const DMToolsRainSection = lazy(() => import("@/components/digital-marketing/DMToolsRainSection").then((m) => ({ default: m.DMToolsRainSection })));


const faqSchemaData = [
  { q: "How much do digital marketing services in Bangalore cost?", a: "Our digital marketing services in Bangalore start from ₹25,000/month for a focused single-channel engagement (SEO or PPC). Full-service retainers covering multiple channels range from ₹60,000 to ₹1,50,000+/month depending on the scope, industry competitiveness, and campaign goals." },
  { q: "How long does it take to see results from a digital marketing company in Bangalore?", a: "SEO typically delivers measurable ranking improvements within 3–6 months, with significant traffic growth building from Month 4 onwards. PPC and paid social campaigns can generate qualified leads within the first 2–4 weeks of launch." },
  { q: "What is the difference between an online marketing company and a digital marketing agency in Bangalore?", a: "The terms are used interchangeably. A full-service digital marketing agency provides integrated strategy across all channels, while some online marketing companies focus on individual services like SEO or social media alone." },
  { q: "Do you work with startups or only large enterprises?", a: "Both. We work with early-stage startups in Koramangala and HSR Layout that need cost-efficient digital marketing, and with enterprise brands in Electronic City, Whitefield, and MG Road that need scale, compliance, and multi-market reach." },
  { q: "Which digital marketing services in Bangalore are most effective for B2B companies?", a: "For B2B companies in Bangalore, SEO with long-form thought leadership content, LinkedIn Ads targeting decision-makers, and Google Search Ads for high-intent keywords typically deliver the strongest results." },
  { q: "How is your digital marketing agency different from other agencies in Bangalore?", a: "Full transparency (live dashboard access), no lock-in contracts (monthly retainers, cancel anytime), and 100% in-house execution (no outsourcing). We also integrate Generative Engine Optimisation (GEO) for AI search visibility." },
  { q: "Do you offer SEO, PPC, and social media together as a package?", a: "Yes. We manage SEO, Google Ads, Meta Ads, LinkedIn campaigns, content marketing, email marketing, and social media under one roof with a unified strategy and single performance dashboard." },
];

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
        <meta
          name="description"
          content="Scale your brand with leading digital marketing company in Bangalore. Our services deliver ROI-focused SEO, PPC & social media strategies. Get a free brand audit"
        />
        <meta
          name="keywords"
          content="digital marketing agency in bangalore, digital marketing company in bangalore, digital marketing services in bangalore, online marketing company in bangalore, internet marketing services in bangalore"
        />
        <link rel="canonical" href="https://www.thesuper30.ai/digital-marketing-agency-bangalore" />
        <meta property="og:title" content="Is Your Digital Marketing Agency Actually Driving Growth?" />
        <meta
          property="og:description"
          content="Most agencies promise results. We deliver 10x growth with AI-powered strategies. Let's talk today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/digital-marketing-agency-bangalore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Is Your Digital Marketing Agency Actually Driving Growth?" />
        <meta
          name="twitter:description"
          content="Most agencies promise results. We deliver 10x growth with AI-powered strategies. Let's talk today!"
        />
        <meta name="twitter:url" content="https://www.thesuper30.ai/digital-marketing-agency-bangalore" />
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
                <span className="text-brand">Digital Marketing Agency in Bangalore</span> — 10x Your Business Growth
              </span>
            }
            description={
              <>
                Scale your brand with the leading <span className="text-foreground font-semibold">digital marketing company in Bangalore</span>. Our digital marketing services deliver ROI-focused SEO, PPC and social media strategies — across Koramangala, HSR Layout, Whitefield and Electronic City.
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
          <DMToolsRainSection />
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
