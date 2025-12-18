import { useNavigate } from "react-router-dom";
import { useSession } from "@/hooks/useSession";
import { useLead } from "@/hooks/useLead";
import { HeroSection } from "@/components/landing/HeroSection";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { RelevanceFilterSection } from "@/components/landing/RelevanceFilterSection";
import { AIComparisonSection } from "@/components/landing/AIComparisonSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { TargetAudienceSection } from "@/components/landing/TargetAudienceSection";
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

const Index = () => {
  const navigate = useNavigate();
  const { session } = useSession();
  const { createLead, sendLeadEmail, loading } = useLead();

  const handleFormSubmit = async (data: { website_url: string; email: string; role?: string; monthly_revenue?: string }) => {
    try {
      const leadData = {
        website_url: data.website_url,
        email: data.email,
        role: data.role,
        monthly_revenue: data.monthly_revenue,
        step: 1
      };

      const newLead = await createLead(leadData, session?.id);
      
      // Send email notification
      if (newLead && session) {
        await sendLeadEmail(
          { ...leadData, step: 1 },
          session,
          "Step 1 - Initial Lead Capture"
        );
      }

      toast.success("Analyzing your website...");
      navigate("/audit", { state: { leadId: newLead?.id } });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>The Super 30 | AI SEO Agency Bangalore - Dominate AI Search in 2025</title>
        <meta name="description" content="Future-proof your digital presence with AI-first SEO strategies. Get found in ChatGPT, Google AI Overviews, and next-gen search engines. Free AI SEO Audit." />
        <meta name="keywords" content="AI SEO, SEO Agency Bangalore, AI Search Optimization, ChatGPT SEO, Google AI Overview, The Super 30" />
        <link rel="canonical" href="https://aiseoserviceagencybangalore.lovable.app" />
      </Helmet>

      <main className="min-h-screen">
        <HeroSection onSubmit={handleFormSubmit} loading={loading} />
        <ClientLogosSection />
        <ProblemSection />
        <RelevanceFilterSection />
        <AIComparisonSection />
        <ServicesSection />
        <TargetAudienceSection />
        <ProcessSection />
        <DashboardPreview />
        <TestimonialSection />
        <FinalCTASection onSubmit={handleFormSubmit} loading={loading} />
        <FAQSection />
        <BlogSection />
        <Footer />
      </main>
      
      {/* Mobile sticky CTA */}
      <StickyCTA onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
};

export default Index;
