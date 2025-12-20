import { useNavigate } from "react-router-dom";
import { useSession } from "@/hooks/useSession";
import { useLead } from "@/hooks/useLead";
import { useFunnelData } from "@/hooks/useFunnelData";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { RelevanceFilterSection } from "@/components/landing/RelevanceFilterSection";
import { AIComparisonSection } from "@/components/landing/AIComparisonSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { WhoIsThisForSection } from "@/components/landing/WhoIsThisForSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { FAQSection } from "@/components/landing/FAQSection";
import { BlogSection } from "@/components/landing/BlogSection";
import { Footer } from "@/components/landing/Footer";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { Helmet } from "react-helmet";
import { toast } from "sonner";

const AiSeo = () => {
  const navigate = useNavigate();
  const { session } = useSession();
  const { createLead, sendLeadEmail, loading } = useLead();
  const { setLeadData } = useFunnelData();

  const handleFormSubmit = async (data: { website_url: string; email: string; phone?: string; role?: string; monthly_revenue?: string }) => {
    try {
      const leadData = {
        website_url: data.website_url,
        email: data.email,
        phone: data.phone,
        role: data.role,
        monthly_revenue: data.monthly_revenue,
        step: 1
      };

      // Store in funnel data for persistence
      setLeadData({
        website_url: data.website_url,
        email: data.email,
        phone: data.phone,
        role: data.role,
        monthly_revenue: data.monthly_revenue,
      });

      const newLead = await createLead(leadData, session?.id);
      
      if (newLead && session) {
        await sendLeadEmail(
          { ...leadData, step: 1 },
          session,
          "Step 1 - Initial Lead Capture"
        );
      }

      toast.success("Analyzing your website...");
      
      // Navigate with complete form data for reliability
      navigate("/audit", { 
        state: { 
          leadId: newLead?.id,
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
    }
  };

  return (
    <>
      <Helmet>
        <title>AI SEO Services | The Super 30 - Dominate AI Search in 2025</title>
        <meta name="description" content="Future-proof your digital presence with AI-first SEO strategies. Get found in ChatGPT, Google AI Overviews, and next-gen search engines. Free AI SEO Audit." />
        <meta name="keywords" content="AI SEO, SEO Agency Bangalore, AI Search Optimization, ChatGPT SEO, Google AI Overview, The Super 30" />
        <link rel="canonical" href="https://aiseoserviceagencybangalore.lovable.app/ai-seo" />
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
        <div id="ai-seo-services">
          <ServicesSection />
        </div>
        <div id="ai-seo-audience">
          <WhoIsThisForSection />
        </div>
        <div id="ai-seo-process">
          <ProcessSection />
        </div>
        <div id="ai-seo-dashboard">
          <DashboardPreview />
        </div>
        <div id="ai-seo-testimonials">
          <TestimonialSection />
        </div>
        <div id="ai-seo-final-cta">
          <FinalCTASection onSubmit={handleFormSubmit} loading={loading} />
        </div>
        <div id="ai-seo-faq">
          <FAQSection />
        </div>
        <div id="ai-seo-blog">
          <BlogSection />
        </div>
        <Footer />
      </main>
      
      <StickyCTA onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
};

export default AiSeo;
