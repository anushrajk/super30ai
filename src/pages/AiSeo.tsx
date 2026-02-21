import { useFunnelData } from "@/hooks/useFunnelData";
import { openThankYouPage } from "@/lib/thankYouRedirect";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { RelevanceFilterSection } from "@/components/landing/RelevanceFilterSection";
import { AIComparisonSection } from "@/components/landing/AIComparisonSection";
import { SEOBenefitsSection } from "@/components/landing/SEOBenefitsSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { WhoIsThisForSection } from "@/components/landing/WhoIsThisForSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { SEOFinalCTASection } from "@/components/landing/SEOFinalCTASection";
import { FAQSection } from "@/components/landing/FAQSection";
import { BlogSection } from "@/components/landing/BlogSection";
import { Footer } from "@/components/landing/Footer";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { useState } from "react";

const AiSeo = () => {
  const { setLeadData } = useFunnelData();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (data: { website_url: string; email: string; phone?: string; role?: string; monthly_revenue?: string }) => {
    setLoading(true);
    try {
      // Store in funnel data for persistence across pages
      setLeadData({
        website_url: data.website_url,
        email: data.email,
        phone: data.phone,
        role: data.role,
        monthly_revenue: data.monthly_revenue,
      });

      toast.success("Form submitted successfully!");
      
      // Open thank you page in new tab
      openThankYouPage({
        name: data.email?.split('@')[0],
        email: data.email,
        source: 'ai_seo_audit'
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
        <title>AI SEO Services | Best SEO Services in Bangalore | The Super 30</title>
        <meta name="description" content="Get the best AI SEO services in Bangalore using technical SEO, on page SEO services, and off page SEO services for better rankings and traffic." />
        <meta name="keywords" content="AI SEO Services, best SEO services in bangalore, technical seo services, on page seo services, off page seo services, seo services in bangalore, seo agency in bangalore, ai seo services" />
        <link rel="canonical" href="https://www.thesuper30.ai/ai-seo-agency-bangalore" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI SEO Services | Best SEO Services in Bangalore | The Super 30" />
        <meta property="og:description" content="Get the best AI SEO services in Bangalore using technical SEO, on page SEO services, and off page SEO services for better rankings and traffic." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/ai-seo-agency-bangalore" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI SEO Services | Best SEO Services in Bangalore | The Super 30" />
        <meta name="twitter:description" content="Get the best AI SEO services in Bangalore using technical SEO, on page SEO services, and off page SEO services for better rankings and traffic." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI SEO Services",
            "name": "AI SEO Services | The Super 30",
            "url": "https://www.thesuper30.ai/ai-seo-agency-bangalore",
            "provider": {
              "@type": "Organization",
              "name": "The Super 30",
              "url": "https://www.thesuper30.ai/"
            },
            "areaServed": {
              "@type": "City",
              "name": "Bangalore"
            },
            "description": "Best AI SEO services in Bangalore covering technical SEO, on-page SEO, and off-page SEO for improved rankings and qualified traffic."
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        <div id="ai-seo-hero">
          <HeroSection onSubmit={handleFormSubmit} loading={loading} />
        </div>
        <div id="ai-seo-logos">
          <ClientLogosSection />
        </div>
        <div id="ai-seo-problem">
          <ProblemSection />
        </div>
        <div id="ai-seo-relevance">
          <RelevanceFilterSection />
        </div>
        <div id="ai-seo-comparison">
          <AIComparisonSection />
        </div>
        <div id="ai-seo-benefits">
          <SEOBenefitsSection />
        </div>
        <div id="ai-seo-services">
          <ServicesSection />
        </div>
        <div id="ai-seo-audience">
          <WhoIsThisForSection />
        </div>
        <div id="ai-seo-process">
          <ProcessSection />
        </div>
        <div id="ai-seo-final-cta">
          <FinalCTASection onSubmit={handleFormSubmit} loading={loading} />
        </div>
        <div id="ai-seo-dashboard">
          <DashboardPreview />
        </div>
        <div id="ai-seo-testimonials">
          <TestimonialSection />
        </div>
        <div id="ai-seo-blog">
          <BlogSection />
        </div>
        <div id="ai-seo-final-cta-bottom">
          <SEOFinalCTASection />
        </div>
        <div id="ai-seo-faq">
          <FAQSection />
        </div>
        <Footer />
      </main>
      
      <StickyCTA onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
};

export default AiSeo;
