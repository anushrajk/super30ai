import { Navbar } from "@/components/Navbar";
import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { 
  Search, Globe, Bot, BarChart3, TrendingUp,
  Building2, ShoppingCart, Briefcase, GraduationCap, 
  Stethoscope, Rocket, Home as HomeIcon, Scale, Utensils
} from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { Helmet } from "react-helmet-async";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";

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
        <meta name="keywords" content="AI seo services in bangalore, AI seo agency in bangalore, AI seo company in bangalore, seo services in bangalore, seo agency in bangalore, seo company in bangalore, search engine optimization services in bangalore, search engine optimization company in bangalore" />
        <link rel="canonical" href="https://super30ai.lovable.app/seo-company-bangalore" />
        <meta property="og:title" content="Your Competitors Are Ranking on Google. Why Aren't You?" />
        <meta property="og:description" content="3x visibility boost. 300% traffic growth. AI-powered SEO that dominates Google & AI search results!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://super30ai.lovable.app/seo-company-bangalore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Competitors Are Ranking on Google. Why Aren't You?" />
        <meta name="twitter:description" content="3x visibility boost. 300% traffic growth. AI-powered SEO that dominates Google & AI search results!" />
        <meta name="twitter:url" content="https://super30ai.lovable.app/seo-company-bangalore" />
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
                  The SEO Company in Bangalore
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.25]">
                  Driving the AI Search Revolution
                </span>
              </>
            }
            description={
              <>
                Most businesses struggle to stay visible because outdated search strategies no longer perform. Our <span className="text-foreground font-semibold">AI SEO services in Bangalore</span> help brands grow through intelligent search strategies that improve Google rankings, strengthen AI visibility, and drive 300% traffic growth.
              </>
            }
            trustSignals={[
              { icon: Search, text: "Technical & On-Page SEO Audits" },
              { icon: Globe, text: "Local & Global SEO Services" },
              { icon: Bot, text: "AI-Powered Keyword Research" },
              { icon: BarChart3, text: "Transparent SEO Performance Reports" },
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

        <ClientLogosSection />

        <Suspense fallback={null}>
          <ProblemSection />
          <RelevanceFilterSection />
          <AIComparisonSection />
          <SEOBenefitsSection />
          <ServicesSection />
          <WhoIsThisForSection />
          <ProcessSection />
          <FinalCTASection onSubmit={handleFormSubmit} loading={loading} />
          <DashboardPreview />
          <TestimonialSection />
          <BlogSection />
          <SEOFinalCTASection />
          <FAQSection slug="ai-seo" />
        </Suspense>

        <Footer />
      </main>

      <StickyCTA onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
};

export default AiSeo;
