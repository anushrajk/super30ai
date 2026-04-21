import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { Palette, Instagram, Layers, Sparkles, Zap } from "lucide-react";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";

import { lazy, Suspense } from "react";

const SMProblemSection = lazy(() => import("@/components/social-media/SMProblemSection").then(m => ({ default: m.SMProblemSection })));
const SMComparisonSection = lazy(() => import("@/components/social-media/SMComparisonSection").then(m => ({ default: m.SMComparisonSection })));
const SMClientProfilesSection = lazy(() => import("@/components/social-media/SMClientProfilesSection").then(m => ({ default: m.SMClientProfilesSection })));
const SMBenefitsSection = lazy(() => import("@/components/social-media/SMBenefitsSection").then(m => ({ default: m.SMBenefitsSection })));
const SMMoodboardSection = lazy(() => import("@/components/social-media/SMMoodboardSection").then(m => ({ default: m.SMMoodboardSection })));
const SMReelsContentSection = lazy(() => import("@/components/social-media/SMReelsContentSection").then(m => ({ default: m.SMReelsContentSection })));
const SMWhoIsThisForSection = lazy(() => import("@/components/social-media/SMWhoIsThisForSection").then(m => ({ default: m.SMWhoIsThisForSection })));
const SMProcessSection = lazy(() => import("@/components/social-media/SMProcessSection").then(m => ({ default: m.SMProcessSection })));
const SMFinalCTASection = lazy(() => import("@/components/social-media/SMFinalCTASection").then(m => ({ default: m.SMFinalCTASection })));
const SMPricingSection = lazy(() => import("@/components/social-media/SMPricingSection").then(m => ({ default: m.SMPricingSection })));
const SMRelevanceSection = lazy(() => import("@/components/social-media/SMRelevanceSection").then(m => ({ default: m.SMRelevanceSection })));
const TestimonialSection = lazy(() => import("@/components/landing/TestimonialSection").then(m => ({ default: m.TestimonialSection })));
const BlogSection = lazy(() => import("@/components/landing/BlogSection").then(m => ({ default: m.BlogSection })));
const SMFAQSection = lazy(() => import("@/components/social-media/SMFAQSection").then(m => ({ default: m.SMFAQSection })));

const SocialMediaDesign = () => {
  const { loading, handleFormSubmit } = useLeadSubmit({
    source: 'social_media_design',
    formId: 'social-media-form',
    formName: 'Social Media Design Consultation',
  });

  return (
    <>
      <Helmet>
        <title>Social Media Post Design Agency in Bangalore | Creative Posts</title>
        <meta name="description" content="Make every post count. Our social media design company in Bangalore creates scroll stopping creatives & post designs that boost engagement" />
        <meta name="keywords" content="social media design agency in bangalore, social media design company in bangalore, social media design services in bangalore, social media creative designing agency in bangalore, social media graphic design company in bangalore" />
        <link rel="canonical" href="https://www.thesuper30.ai/social-media-design-agency-bangalore" />
        <meta property="og:title" content="Your Social Media Posts Should Stop the Scroll. Do They?" />
        <meta property="og:description" content="Scroll-stopping social creatives and post designs that make your brand impossible to ignore. Let's create!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/social-media-design-agency-bangalore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Social Media Posts Should Stop the Scroll. Do They?" />
        <meta name="twitter:description" content="Scroll-stopping social creatives and post designs that make your brand impossible to ignore. Let's create!" />
        <meta name="twitter:url" content="https://www.thesuper30.ai/social-media-design-agency-bangalore" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Social Media Design",
            "name": "Creative Social Media Post Design Agency in Bangalore",
            "url": "https://www.thesuper30.ai/social-media-design-agency-bangalore",
            "provider": { "@type": "Organization", "name": "The Super 30", "url": "https://www.thesuper30.ai/" },
            "areaServed": { "@type": "City", "name": "Bangalore" }
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        <div id="sm-hero">
          <ServiceHeroSection
            badgeIcon={Palette}
            badgeText="Social Media Design Agency"
            headline={
              <>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand leading-[1.25] pb-1">
                  Social Media Design Agency
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.25]">
                  in Bangalore
                </span>
              </>
            }
            description={
              <>
                Bangalore's leading <span className="text-foreground font-semibold">social media design company</span> creating scroll-stopping creatives, post designs and reels for Instagram, Facebook, LinkedIn & more — designed to engage and convert.
              </>
            }
            trustSignals={[
              { icon: Instagram, text: "Instagram, Facebook & LinkedIn" },
              { icon: Layers, text: "Carousels, Stories & Reels" },
              { icon: Sparkles, text: "On-Brand Creative Design" },
              { icon: Zap, text: "Quick Turnaround" },
            ]}
            credentials={["500+ Brands Designed", "All Platforms Covered", "Quick Turnaround"]}
            onSubmit={handleFormSubmit}
            loading={loading}
            formTitle="Get Your Free Social Media Design Consultation"
            formDescription="Share your brand details and we'll show you how scroll-stopping creatives can boost your social engagement."
            formButtonText="Get Free Design Consultation"
            formId="lead_capture_social_media"
            formName="Social Media Design Consultation"
          />
        </div>

        <ClientLogosSection />

        <Suspense fallback={null}>
          <SMProblemSection />
          <SMComparisonSection />
          <SMClientProfilesSection />
          <SMBenefitsSection />
          <SMMoodboardSection />
          <SMReelsContentSection />
          <SMWhoIsThisForSection />
          <SMProcessSection />
          <SMPricingSection />
          <SMRelevanceSection />
          <TestimonialSection />
          <BlogSection />
          <SMFinalCTASection />
          <SMFAQSection />
        </Suspense>

        <Footer />
      </main>

      <StickyCTA onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
};

export default SocialMediaDesign;
