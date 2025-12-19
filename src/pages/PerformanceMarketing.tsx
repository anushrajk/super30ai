import { useNavigate } from "react-router-dom";
import { useSession } from "@/hooks/useSession";
import { useLead } from "@/hooks/useLead";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { Helmet } from "react-helmet";
import { toast } from "sonner";
import { PMHeroSection } from "@/components/pm/PMHeroSection";
import { PMProblemSection } from "@/components/pm/PMProblemSection";
import { PMRelevanceSection } from "@/components/pm/PMRelevanceSection";
import { PMServicesSection } from "@/components/pm/PMServicesSection";
import { PMProcessSection } from "@/components/pm/PMProcessSection";
import { PMFAQSection } from "@/components/pm/PMFAQSection";
import { PMFinalCTASection } from "@/components/pm/PMFinalCTASection";
import { PMComparisonSection } from "@/components/pm/PMComparisonSection";
import { PMTargetAudienceSection } from "@/components/pm/PMTargetAudienceSection";
import { PMDashboardPreview } from "@/components/pm/PMDashboardPreview";
import { PMBlogSection } from "@/components/pm/PMBlogSection";

const PerformanceMarketing = () => {
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
      
      if (newLead && session) {
        await sendLeadEmail(
          { ...leadData, step: 1 },
          session,
          "Performance Marketing - Ads Consultation Request"
        );
      }

      toast.success("Redirecting to book your ads consultation...");
      // Skip audit for PM - go directly to booking
      navigate("/booking", { state: { leadId: newLead?.id, service: "pm" } });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Performance Marketing Services | The Super 30 - ROI-Driven Ads</title>
        <meta name="description" content="Turn ad spend into predictable revenue with AI-powered performance marketing. Google Ads, Meta Ads, LinkedIn Ads, and more. Free Ads Audit." />
        <meta name="keywords" content="Performance Marketing, Google Ads, Meta Ads, PPC Agency Bangalore, ROI Marketing, The Super 30" />
        <link rel="canonical" href="https://aiseoserviceagencybangalore.lovable.app/performance-marketing" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        <PMHeroSection onSubmit={handleFormSubmit} loading={loading} />
        <ClientLogosSection />
        <PMProblemSection />
        <PMComparisonSection />
        <PMTargetAudienceSection />
        <PMRelevanceSection />
        <PMServicesSection />
        <PMDashboardPreview />
        <PMProcessSection />
        <TestimonialSection />
        <PMBlogSection />
        <PMFinalCTASection onSubmit={handleFormSubmit} loading={loading} />
        <PMFAQSection />
        <Footer />
      </main>
      
      <StickyCTA onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
};

export default PerformanceMarketing;
