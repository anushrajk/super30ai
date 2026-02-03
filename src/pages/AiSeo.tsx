import { useNavigate } from "react-router-dom";
import { useFunnelData } from "@/hooks/useFunnelData";
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
  const navigate = useNavigate();
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

      toast.success("Analyzing your website...");
      
      // Navigate with form data - Google Sheets submission happens in the form component
      navigate("/audit", { 
        state: { 
          formData: {
            website_url: data.website_url,
            email: data.email,
            phone: data.phone,
            role: data.role,
            monthly_revenue: data.monthly_revenue,
          }
        } 
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
        <title>AI SEO Services | The Super 30 - Dominate AI Search in 2025</title>
        <meta name="description" content="Future-proof your digital presence with AI-first SEO strategies. Get found in ChatGPT, Google AI Overviews, and next-gen search engines. Free AI SEO Audit." />
        <meta name="keywords" content="AI SEO, SEO Agency Bangalore, AI Search Optimization, ChatGPT SEO, Google AI Overview, GEO, AEO, The Super 30" />
        <link rel="canonical" href="https://thesuper30.ai/ai-seo" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI SEO Services | Dominate AI Search in 2025" />
        <meta property="og:description" content="Future-proof your digital presence with AI-first SEO. Get found in ChatGPT, Google AI Overviews & next-gen search." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thesuper30.ai/ai-seo" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI SEO Services | The Super 30" />
        <meta name="twitter:description" content="Get found in ChatGPT, Google AI Overviews & next-gen search engines. Free AI SEO Audit." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI SEO Services",
            "provider": {
              "@type": "Organization",
              "name": "The Super 30"
            },
            "areaServed": "India",
            "description": "AI-first SEO strategies to dominate Google Search, AI Overviews, and LLM answers",
            "offers": {
              "@type": "Offer",
              "name": "Free AI SEO Audit",
              "price": "0",
              "priceCurrency": "INR"
            }
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
