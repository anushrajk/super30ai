import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { Megaphone, BarChart3, Users, Zap, Shield } from "lucide-react";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";
import { LazySection } from "@/components/common/LazySection";
import { lazy, Suspense } from "react";

const ClientLogosSection = lazy(() => import("@/components/landing/ClientLogosSection").then(m => ({ default: m.ClientLogosSection })));
const DMSocialProofSection = lazy(() => import("@/components/digital-marketing/DMSocialProofSection").then(m => ({ default: m.DMSocialProofSection })));
const DMProblemSection = lazy(() => import("@/components/digital-marketing/DMProblemSection").then(m => ({ default: m.DMProblemSection })));
const DMComparisonSection = lazy(() => import("@/components/digital-marketing/DMComparisonSection").then(m => ({ default: m.DMComparisonSection })));
const ServicesBentoGrid = lazy(() => import("@/components/digital-marketing/ServicesBentoGrid").then(m => ({ default: m.ServicesBentoGrid })));
const DMBenefitsSection = lazy(() => import("@/components/digital-marketing/DMBenefitsSection").then(m => ({ default: m.DMBenefitsSection })));
const ServicesDetailSection = lazy(() => import("@/components/digital-marketing/ServicesDetailSection").then(m => ({ default: m.ServicesDetailSection })));
const WhoIsThisForSection = lazy(() => import("@/components/landing/WhoIsThisForSection").then(m => ({ default: m.WhoIsThisForSection })));
const DMProcessSection = lazy(() => import("@/components/digital-marketing/DMProcessSection").then(m => ({ default: m.DMProcessSection })));
const DMFinalCTASection = lazy(() => import("@/components/digital-marketing/DMFinalCTASection").then(m => ({ default: m.DMFinalCTASection })));
const DMRelevanceSection = lazy(() => import("@/components/digital-marketing/DMRelevanceSection").then(m => ({ default: m.DMRelevanceSection })));
const TestimonialSection = lazy(() => import("@/components/landing/TestimonialSection").then(m => ({ default: m.TestimonialSection })));
const DMWhyBangaloreSection = lazy(() => import("@/components/digital-marketing/DMWhyBangaloreSection").then(m => ({ default: m.DMWhyBangaloreSection })));
const DMContentSection = lazy(() => import("@/components/digital-marketing/DMContentSection").then(m => ({ default: m.DMContentSection })));
const DMFAQSection = lazy(() => import("@/components/digital-marketing/DMFAQSection").then(m => ({ default: m.DMFAQSection })));
const DMAISections = lazy(() => import("@/components/digital-marketing/DMAISections").then(m => ({ default: m.DMAISections })));

const DigitalMarketing = () => {
  const { loading, handleFormSubmit } = useLeadSubmit({
    source: 'digital_marketing',
    formId: 'digital-marketing-form',
    formName: 'Digital Marketing Consultation',
  });

  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency in Bangalore | 10x Your Growth</title>
        <meta name="description" content="Scale your brand with the leading digital marketing agency in Bangalore. Our 30+ experts deliver ROI-focused SEO, PPC, social media & web design services. Get a free brand audit today." />
        <meta name="keywords" content="digital marketing agency in bangalore, digital marketing company in bangalore, digital marketing services in bangalore, online marketing company in bangalore, internet marketing services in bangalore, best digital marketing agency bangalore, top digital marketing company bangalore" />
        <link rel="canonical" href="https://www.thesuper30.ai/digital-marketing-agency-bangalore" />
        <meta property="og:title" content="Is Your Digital Marketing Agency Actually Driving Growth?" />
        <meta property="og:description" content="Most agencies promise results. We deliver 10x growth with proven strategies. Let's talk today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/digital-marketing-agency-bangalore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Is Your Digital Marketing Agency Actually Driving Growth?" />
        <meta name="twitter:description" content="Most agencies promise results. We deliver 10x growth with proven strategies. Let's talk today!" />
        <meta name="twitter:url" content="https://www.thesuper30.ai/digital-marketing-agency-bangalore" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "The Super 30 — Digital Marketing Agency in Bangalore",
            "url": "https://www.thesuper30.ai/digital-marketing-agency-bangalore",
            "description": "The Super 30 is a leading digital marketing agency in Bangalore offering SEO, PPC, social media marketing, web design, and content marketing services for businesses of all sizes.",
            "telephone": "+91-9876543210",
            "address": { "@type": "PostalAddress", "addressLocality": "Bangalore", "addressRegion": "Karnataka", "addressCountry": "IN" },
            "areaServed": [{ "@type": "City", "name": "Bangalore" }, { "@type": "State", "name": "Karnataka" }, { "@type": "Country", "name": "India" }],
            "serviceType": ["Digital Marketing", "Search Engine Optimization", "Pay Per Click Advertising", "Social Media Marketing", "Web Design and Development", "Content Marketing"],
            "priceRange": "₹₹",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127", "bestRating": "5" },
            "provider": { "@type": "Organization", "name": "The Super 30", "url": "https://www.thesuper30.ai/" }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What makes The Super 30 the best digital marketing agency in Bangalore?", "acceptedAnswer": { "@type": "Answer", "text": "The Super 30 combines 30+ in-house marketing experts with data-driven tools to deliver measurable results across SEO, PPC, social media, and web design. We focus on revenue attribution, not vanity metrics." } },
              { "@type": "Question", "name": "How much does a digital marketing agency in Bangalore charge?", "acceptedAnswer": { "@type": "Answer", "text": "Digital marketing services in Bangalore typically range from ₹25,000 to ₹5,00,000 per month depending on scope, channels, and business goals." } },
              { "@type": "Question", "name": "Which industries does your digital marketing agency in Bangalore serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve Real Estate, Education, Healthcare, E-commerce, SaaS, Professional Services, Hospitality, Legal, and Staffing industries." } }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        <div id="dm-hero">
          <ServiceHeroSection
            badgeIcon={Megaphone}
            badgeText="#1 Digital Marketing Agency in Bangalore"
            headline={
              <>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand leading-[1.25] pb-1">
                  10x Your Business Growth
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.25]">
                  With Bangalore's Top Digital Marketing Agency
                </span>
              </>
            }
            description={
              <>
                We're not just another digital marketing agency in Bangalore. With 30+ in-house experts, we deliver{" "}
                <span className="text-foreground font-semibold">measurable growth across SEO, PPC, social media & web design</span> — all under one roof. 300+ brands trust us.
              </>
            }
            trustSignals={[
              { icon: Shield, text: "Google & Meta Certified Partner" },
              { icon: BarChart3, text: "Data-Driven ROI Focused Campaigns" },
              { icon: Users, text: "30+ In-House Marketing Experts" },
              { icon: Zap, text: "No Long-Term Contracts Required" },
            ]}
            credentials={["300+ Brands Served", "4.9/5 Client Rating", "30+ Experts"]}
            onSubmit={handleFormSubmit}
            loading={loading}
            formTitle="Get Your Free Digital Marketing Audit"
            formDescription="Tell us about your business and our digital marketing experts in Bangalore will create a custom growth plan."
            formButtonText="Get Free Audit Now"
            formId="lead_capture_digital_marketing"
            formName="Digital Marketing Agency Bangalore — Free Audit"
          />
        </div>

        <Suspense fallback={null}>
          <LazySection minHeight="100px"><ClientLogosSection /></LazySection>
          <LazySection minHeight="80px"><DMSocialProofSection /></LazySection>
          <LazySection minHeight="300px"><DMProblemSection /></LazySection>
          <LazySection minHeight="300px"><DMComparisonSection /></LazySection>
          <LazySection minHeight="300px"><ServicesBentoGrid /></LazySection>
          <LazySection minHeight="300px"><DMBenefitsSection /></LazySection>
          <LazySection minHeight="300px"><ServicesDetailSection /></LazySection>
          <LazySection minHeight="200px"><WhoIsThisForSection /></LazySection>
          <LazySection minHeight="300px"><DMProcessSection /></LazySection>
          <LazySection minHeight="150px"><DMFinalCTASection /></LazySection>
          <LazySection minHeight="300px"><DMAISections /></LazySection>
          <LazySection minHeight="300px"><DMRelevanceSection /></LazySection>
          <LazySection minHeight="300px"><TestimonialSection /></LazySection>
          <LazySection minHeight="300px"><DMWhyBangaloreSection /></LazySection>
          <LazySection minHeight="300px"><DMContentSection /></LazySection>
          <LazySection minHeight="150px"><DMFinalCTASection /></LazySection>
          <LazySection minHeight="300px"><DMFAQSection /></LazySection>
        </Suspense>

        <Footer />
      </main>

      <StickyCTA onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
};

export default DigitalMarketing;
