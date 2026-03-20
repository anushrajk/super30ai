import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { BlogSection } from "@/components/landing/BlogSection";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { SMClientProfilesSection } from "@/components/social-media/SMClientProfilesSection";
import { SMMoodboardSection } from "@/components/social-media/SMMoodboardSection";
import { SMReelsContentSection } from "@/components/social-media/SMReelsContentSection";
import { SMProcessSection } from "@/components/social-media/SMProcessSection";
import { SMPricingSection } from "@/components/social-media/SMPricingSection";
import { SMProblemSection } from "@/components/social-media/SMProblemSection";
import { SMComparisonSection } from "@/components/social-media/SMComparisonSection";
import { SMRelevanceSection } from "@/components/social-media/SMRelevanceSection";
import { SMBenefitsSection } from "@/components/social-media/SMBenefitsSection";
import { SMWhoIsThisForSection } from "@/components/social-media/SMWhoIsThisForSection";
import { SMFinalCTASection } from "@/components/social-media/SMFinalCTASection";
import { SMFAQSection } from "@/components/social-media/SMFAQSection";
import { openThankYouPage } from "@/lib/thankYouRedirect";
import { toast } from "sonner";
import { Palette, Instagram, Layers, Sparkles, Zap } from "lucide-react";

const SocialMediaDesign = () => {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (data: { website_url: string; email: string; phone?: string; role?: string; monthly_revenue?: string; full_name?: string; company_name?: string }) => {
    setLoading(true);
    try {
      toast.success("Form submitted successfully!");
      openThankYouPage({
        name: data.full_name || data.email?.split('@')[0],
        email: data.email,
        company: data.company_name,
        source: 'social_media_design'
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Social Media Design Services | The Super 30</title>
        <meta name="description" content="Professional social media design services for Instagram, Facebook, LinkedIn & more. Scroll-stopping creatives that drive engagement. Get a free consultation." />
        <meta name="keywords" content="social media design, social media creatives, instagram post design, facebook post design, social media marketing design, social media design agency bangalore" />
        <link rel="canonical" href="https://www.thesuper30.ai/social-media-post-design" />
        <meta property="og:title" content="Social Media Design Services | The Super 30" />
        <meta property="og:description" content="Professional social media design for Instagram, Facebook, LinkedIn & more. Scroll-stopping creatives that drive engagement." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/social-media-post-design" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Social Media Design",
            "name": "Social Media Design Services | The Super 30",
            "url": "https://www.thesuper30.ai/social-media-post-design",
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
                  Social Media Posts That
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.25]">
                  Stop the Scroll
                </span>
              </>
            }
            description={
              <>
                Eye-catching, on-brand social media creatives for Instagram, Facebook, LinkedIn & more —{" "}
                <span className="text-foreground font-semibold">designed to engage and convert</span>.
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

        <SMProblemSection />
        <SMComparisonSection />
        <SMClientProfilesSection />
        <SMBenefitsSection />
        <SMMoodboardSection />
        <SMReelsContentSection />
        <SMWhoIsThisForSection />
        <SMProcessSection />
        <SMFinalCTASection />
        <SMPricingSection />
        <SMRelevanceSection />
        <TestimonialSection />
        <BlogSection />
        <SMFinalCTASection />
        <SMFAQSection />
        <Footer />
      </main>

      <StickyCTA onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
};

export default SocialMediaDesign;
