import { useState } from "react";
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
import { PMSurveyPopup, SurveyData } from "@/components/performance/PMSurveyPopup";

const PerformanceMarketing = () => {
  const navigate = useNavigate();
  const { session } = useSession();
  const { createLead, sendLeadEmail, loading } = useLead();
  const [surveyOpen, setSurveyOpen] = useState(false);

  // Initial form data captured from hero form
  const [initialFormData, setInitialFormData] = useState<{
    website_url: string;
    email: string;
    phone?: string;
    role?: string;
    monthly_revenue?: string;
  } | null>(null);

  const handleHeroFormSubmit = (data: { website_url: string; email: string; phone?: string; role?: string; monthly_revenue?: string }) => {
    setInitialFormData(data);
    setSurveyOpen(true);
  };

  const handleSurveyComplete = async (data: SurveyData) => {
    try {
      const leadData = {
        website_url: data.website_url,
        email: data.email,
        phone: data.phone,
        role: data.role,
        monthly_revenue: data.monthly_revenue,
        business_type: data.business_type,
        preferred_platforms: data.preferred_platforms,
        service_type: "pm",
        step: 1
      };

      const newLead = await createLead(leadData, session?.id);
      
      if (newLead && session) {
        await sendLeadEmail(
          { ...leadData, step: 1 },
          session,
          "Performance Marketing - Ads Audit Request"
        );
      }

      setSurveyOpen(false);
      toast.success("Analyzing your ad opportunity...");
      
      // Navigate to performance planner with all data
      navigate("/performance-planner", { 
        state: { 
          leadId: newLead?.id, 
          formData: data,
          service: "pm" 
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
        <title>Performance Marketing Services | The Super 30 - ROI-Driven Ads</title>
        <meta name="description" content="Turn ad spend into predictable revenue with AI-powered performance marketing. Google Ads, Meta Ads, LinkedIn Ads, and more. Free Ads Audit." />
        <meta name="keywords" content="Performance Marketing, Google Ads, Meta Ads, PPC Agency Bangalore, ROI Marketing, The Super 30" />
        <link rel="canonical" href="https://aiseoserviceagencybangalore.lovable.app/performance-marketing" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        <div id="pm-hero">
          <PMHeroSection onSubmit={handleHeroFormSubmit} loading={loading} />
        </div>
        <div id="pm-logos">
          <ClientLogosSection />
        </div>
        <div id="pm-problem">
          <PMProblemSection />
        </div>
        <div id="pm-comparison">
          <PMComparisonSection />
        </div>
        <div id="pm-audience">
          <PMTargetAudienceSection />
        </div>
        <div id="pm-relevance">
          <PMRelevanceSection />
        </div>
        <div id="pm-services">
          <PMServicesSection />
        </div>
        <div id="pm-dashboard">
          <PMDashboardPreview />
        </div>
        <div id="pm-process">
          <PMProcessSection />
        </div>
        <div id="pm-testimonials">
          <TestimonialSection />
        </div>
        <div id="pm-blog">
          <PMBlogSection />
        </div>
        <div id="pm-final-cta">
          <PMFinalCTASection onOpenSurvey={() => setSurveyOpen(true)} />
        </div>
        <div id="pm-faq">
          <PMFAQSection />
        </div>
        <Footer />
      </main>
      
      <StickyCTA onClick={() => setSurveyOpen(true)} />
      
      <PMSurveyPopup 
        open={surveyOpen} 
        onOpenChange={setSurveyOpen}
        onComplete={handleSurveyComplete}
        loading={loading}
        initialData={initialFormData || undefined}
      />
    </>
  );
};

export default PerformanceMarketing;
