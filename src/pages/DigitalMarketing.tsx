import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { Megaphone, Bot, BarChart3, Users, Zap } from "lucide-react";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";
import { LazySection } from "@/components/common/LazySection";
import { lazy, Suspense } from "react";

const DMProblemSection = lazy(() => import("@/components/digital-marketing/DMProblemSection").then(m => ({ default: m.DMProblemSection })));
const DMComparisonSection = lazy(() => import("@/components/digital-marketing/DMComparisonSection").then(m => ({ default: m.DMComparisonSection })));
const ServicesBentoGrid = lazy(() => import("@/components/digital-marketing/ServicesBentoGrid").then(m => ({ default: m.ServicesBentoGrid })));
const DMBenefitsSection = lazy(() => import("@/components/digital-marketing/DMBenefitsSection").then(m => ({ default: m.DMBenefitsSection })));
const ServicesDetailSection = lazy(() => import("@/components/digital-marketing/ServicesDetailSection").then(m => ({ default: m.ServicesDetailSection })));
const DMAISections = lazy(() => import("@/components/digital-marketing/DMAISections").then(m => ({ default: m.DMAISections })));
const WhoIsThisForSection = lazy(() => import("@/components/landing/WhoIsThisForSection").then(m => ({ default: m.WhoIsThisForSection })));
const DMProcessSection = lazy(() => import("@/components/digital-marketing/DMProcessSection").then(m => ({ default: m.DMProcessSection })));
const DMFinalCTASection = lazy(() => import("@/components/digital-marketing/DMFinalCTASection").then(m => ({ default: m.DMFinalCTASection })));
const DMRelevanceSection = lazy(() => import("@/components/digital-marketing/DMRelevanceSection").then(m => ({ default: m.DMRelevanceSection })));
const TestimonialSection = lazy(() => import("@/components/landing/TestimonialSection").then(m => ({ default: m.TestimonialSection })));
const BlogSection = lazy(() => import("@/components/landing/BlogSection").then(m => ({ default: m.BlogSection })));
const DMFAQSection = lazy(() => import("@/components/digital-marketing/DMFAQSection").then(m => ({ default: m.DMFAQSection })));

const DigitalMarketing = () => {
  const { loading, handleFormSubmit } = useLeadSubmit({
    source: 'digital_marketing',
    formId: 'digital-marketing-form',
    formName: 'Digital Marketing Consultation',
  });

  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency in Bangalore | The Super 30</title>
        <meta name="description" content="The Super 30 is a full-service digital marketing agency in Bangalore offering AI SEO, performance marketing, social media, design, web design & growth strategies." />
        <meta name="keywords" content="digital marketing agency bangalore, digital marketing services, online marketing agency, full service digital marketing, digital marketing company" />
        <link rel="canonical" href="https://www.thesuper30.ai/digital-marketing" />
        <meta property="og:title" content="Digital Marketing Agency in Bangalore | The Super 30" />
        <meta property="og:description" content="Full-service digital marketing agency offering AI SEO, ads, social media, design, web design & growth strategies. Trusted by 300+ brands." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/digital-marketing" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Digital Marketing Services",
            "name": "Digital Marketing Agency | The Super 30",
            "url": "https://www.thesuper30.ai/digital-marketing",
            "provider": { "@type": "Organization", "name": "The Super 30", "url": "https://www.thesuper30.ai/" },
            "areaServed": { "@type": "City", "name": "Bangalore" },
            "description": "Full-service digital marketing agency in Bangalore offering AI-powered SEO, performance marketing, social media, design, web design & growth strategies."
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        <div id="dm-hero">
          <ServiceHeroSection
            badgeIcon={Megaphone}
            badgeText="Full-Service Digital Marketing Agency"
            headline={
              <>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand leading-[1.25] pb-1">
                  Grow Your Business with
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.25]">
                  AI-Powered Digital Marketing
                </span>
              </>
            }
            description={
              <>
                From SEO to social media, ads to web design — we bring{" "}
                <span className="text-foreground font-semibold">everything under one roof</span> to drive measurable growth for your brand.
              </>
            }
            trustSignals={[
              { icon: Bot, text: "AI + Human Expert Model" },
              { icon: BarChart3, text: "Data-Driven Growth Strategies" },
              { icon: Users, text: "30+ Marketing Experts" },
              { icon: Zap, text: "No Long-Term Lock-ins" },
            ]}
            credentials={["30+ Marketing Experts", "AI-Powered Strategies", "300+ Brands Served"]}
            onSubmit={handleFormSubmit}
            loading={loading}
            formTitle="Get Your Free Digital Marketing Strategy"
            formDescription="Tell us about your business and our experts will create a custom growth plan to boost your online presence."
            formButtonText="Get Free Strategy"
            formId="lead_capture_digital_marketing"
            formName="Digital Marketing Strategy Consultation"
          />
        </div>

        <Suspense fallback={null}>
          <LazySection minHeight="400px"><DMProblemSection /></LazySection>
          <LazySection minHeight="400px"><DMComparisonSection /></LazySection>
          <LazySection minHeight="400px"><ServicesBentoGrid /></LazySection>
          <LazySection minHeight="400px"><DMBenefitsSection /></LazySection>
          <LazySection minHeight="400px"><ServicesDetailSection /></LazySection>
          <LazySection minHeight="400px"><DMAISections /></LazySection>
          <LazySection minHeight="300px"><WhoIsThisForSection /></LazySection>
          <LazySection minHeight="400px"><DMProcessSection /></LazySection>
          <LazySection minHeight="200px"><DMFinalCTASection /></LazySection>
          <LazySection minHeight="300px"><DMRelevanceSection /></LazySection>
          <LazySection minHeight="400px"><TestimonialSection /></LazySection>
          <LazySection minHeight="300px"><BlogSection /></LazySection>
          <LazySection minHeight="200px"><DMFinalCTASection /></LazySection>
          <LazySection minHeight="300px"><DMFAQSection /></LazySection>
        </Suspense>

        <Footer />
      </main>

      <StickyCTA onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
};

export default DigitalMarketing;
