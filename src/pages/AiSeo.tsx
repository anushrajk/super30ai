import { Navbar } from "@/components/Navbar";
import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { Search, Globe, Bot, BarChart3, TrendingUp } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { Helmet } from "react-helmet-async";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";
import { LazySection } from "@/components/common/LazySection";
import { lazy, Suspense } from "react";

// Lazy load all below-fold sections
const ProblemSection = lazy(() => import("@/components/landing/ProblemSection").then(m => ({ default: m.ProblemSection })));
const RelevanceFilterSection = lazy(() => import("@/components/landing/RelevanceFilterSection").then(m => ({ default: m.RelevanceFilterSection })));
const AIComparisonSection = lazy(() => import("@/components/landing/AIComparisonSection").then(m => ({ default: m.AIComparisonSection })));
const SEOBenefitsSection = lazy(() => import("@/components/landing/SEOBenefitsSection").then(m => ({ default: m.SEOBenefitsSection })));
const ServicesSection = lazy(() => import("@/components/landing/ServicesSection").then(m => ({ default: m.ServicesSection })));
const WhoIsThisForSection = lazy(() => import("@/components/landing/WhoIsThisForSection").then(m => ({ default: m.WhoIsThisForSection })));
const ProcessSection = lazy(() => import("@/components/landing/ProcessSection").then(m => ({ default: m.ProcessSection })));
const FinalCTASection = lazy(() => import("@/components/landing/FinalCTASection").then(m => ({ default: m.FinalCTASection })));
const DashboardPreview = lazy(() => import("@/components/landing/DashboardPreview").then(m => ({ default: m.DashboardPreview })));
const TestimonialSection = lazy(() => import("@/components/landing/TestimonialSection").then(m => ({ default: m.TestimonialSection })));
const BlogSection = lazy(() => import("@/components/landing/BlogSection").then(m => ({ default: m.BlogSection })));
const SEOFinalCTASection = lazy(() => import("@/components/landing/SEOFinalCTASection").then(m => ({ default: m.SEOFinalCTASection })));
const FAQSection = lazy(() => import("@/components/landing/FAQSection").then(m => ({ default: m.FAQSection })));

const AiSeo = () => {
  const { loading, handleFormSubmit } = useLeadSubmit({
    source: 'ai_seo_audit',
    formId: 'ai-seo-hero-form',
    formName: 'Free AI SEO Consultation',
  });

  return (
    <>
      <Helmet>
        <title>SEO Company in Bangalore | #1 AI-Driven SEO Services Agency</title>
        <meta name="description" content="Struggling to get organic leads? Trusted SEO agency in Bangalore delivering AI powered SEO services with 3x visibility & 300% traffic growth. Book a free call" />
        <meta name="keywords" content="seo services in bangalore, seo agency in bangalore, seo company in bangalore, search engine optimization services in bangalore, search engine optimization company in bangalore" />
        <link rel="canonical" href="https://www.thesuper30.ai/seo-company-bangalore" />
        <meta property="og:title" content="Your Competitors Are Ranking on Google. Why Aren't You?" />
        <meta property="og:description" content="3x visibility boost. 300% traffic growth. AI-powered SEO that dominates Google & AI search results!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/seo-company-bangalore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Competitors Are Ranking on Google. Why Aren't You?" />
        <meta name="twitter:description" content="3x visibility boost. 300% traffic growth. AI-powered SEO that dominates Google & AI search results!" />
        <meta name="twitter:url" content="https://www.thesuper30.ai/seo-company-bangalore" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "SEO Services",
            "name": "SEO Company in Bangalore | #1 AI-Driven SEO Services Agency",
            "url": "https://www.thesuper30.ai/seo-company-bangalore",
            "provider": {
              "@type": "Organization",
              "name": "The Super 30",
              "url": "https://www.thesuper30.ai/"
            },
            "areaServed": { "@type": "City", "name": "Bangalore" },
            "description": "Trusted SEO agency in Bangalore delivering AI powered SEO services with 3x visibility & 300% traffic growth."
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        <div id="ai-seo-hero">
          <ServiceHeroSection
            badgeIcon={TrendingUp}
            badgeText="#1 AI SEO Agency in Bangalore"
            headline={
              <>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand leading-[1.25] pb-1">
                  AI-Powered SEO
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.25]">
                  Services in Bangalore
                </span>
              </>
            }
            description={
              <>
                We are a results-driven <span className="text-foreground font-semibold">AI SEO agency in Bangalore</span>. Our expert team combines advanced AI tools with proven SEO strategies — technical SEO, on-page optimization, and authority-building link campaigns — to boost your rankings and drive qualified organic traffic.
              </>
            }
            trustSignals={[
              { icon: Search, text: "Technical & On-Page SEO Audits" },
              { icon: Globe, text: "Local & International SEO" },
              { icon: Bot, text: "AI-Driven Keyword Research" },
              { icon: BarChart3, text: "Transparent Ranking Reports" },
            ]}
            credentials={[
              "Google Certified SEO Experts",
              "10+ Years Experience",
              "500+ Keywords Ranked #1",
            ]}
            onSubmit={handleFormSubmit}
            loading={loading}
            formTitle="Book Your Free AI SEO Consultation"
            formDescription="Get a detailed SEO audit showing exactly how to rank higher and drive more organic traffic."
            formBadgeText="100% Free"
            formButtonText="Get My Free SEO Audit"
            formId="ai-seo-hero-form"
            formName="Free AI SEO Consultation"
          />
        </div>

        <Suspense fallback={null}>
          <LazySection minHeight="400px">
            <ProblemSection />
          </LazySection>
          <LazySection minHeight="400px">
            <RelevanceFilterSection />
          </LazySection>
          <LazySection minHeight="400px">
            <AIComparisonSection />
          </LazySection>
          <LazySection minHeight="400px">
            <SEOBenefitsSection />
          </LazySection>
          <LazySection minHeight="400px">
            <ServicesSection />
          </LazySection>
          <LazySection minHeight="300px">
            <WhoIsThisForSection />
          </LazySection>
          <LazySection minHeight="400px">
            <ProcessSection />
          </LazySection>
          <LazySection minHeight="300px">
            <FinalCTASection onSubmit={handleFormSubmit} loading={loading} />
          </LazySection>
          <LazySection minHeight="400px">
            <DashboardPreview />
          </LazySection>
          <LazySection minHeight="400px">
            <TestimonialSection />
          </LazySection>
          <LazySection minHeight="300px">
            <BlogSection />
          </LazySection>
          <LazySection minHeight="200px">
            <SEOFinalCTASection />
          </LazySection>
          <LazySection minHeight="300px">
            <FAQSection />
          </LazySection>
        </Suspense>

        <Footer />
      </main>

      <StickyCTA onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
};

export default AiSeo;
