import { useState, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "@/hooks/useSession";
import { useLead } from "@/hooks/useLead";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { PMHeroSectionSkeleton } from "@/components/pm/PMHeroSectionSkeleton";
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
import { PMPreAuditQuestionnaire } from "@/components/pm/PMPreAuditQuestionnaire";
import { supabase } from "@/integrations/supabase/client";

// Lazy load hero section for better initial load
const PMHeroSection = lazy(() => import("@/components/pm/PMHeroSection").then(m => ({ default: m.PMHeroSection })));

interface InitialFormData {
  website_url: string;
  email: string;
  phone?: string;
  role?: string;
  monthly_revenue?: string;
}

const PerformanceMarketing = () => {
  const navigate = useNavigate();
  const { session } = useSession();
  const { createLead, sendLeadEmail, loading } = useLead();
  
  // State for the questionnaire flow
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [initialFormData, setInitialFormData] = useState<InitialFormData | null>(null);
  const [leadId, setLeadId] = useState<string | null>(null);
  const [processingComplete, setProcessingComplete] = useState(false);

  const scrollToForm = () => {
    const heroSection = document.getElementById("pm-hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Step 1: Handle initial form submission
  const handleHeroFormSubmit = async (data: InitialFormData) => {
    try {
      // Create lead with initial data (without business_type and platforms yet)
      const leadData = {
        website_url: data.website_url,
        email: data.email,
        phone: data.phone,
        role: data.role,
        monthly_revenue: data.monthly_revenue,
        service_type: "pm",
        step: 1
      };

      const newLead = await createLead(leadData, session?.id);
      
      if (newLead) {
        setLeadId(newLead.id);
        setInitialFormData(data);
        // Show the questionnaire for business type and platforms
        setShowQuestionnaire(true);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  // Step 2: Handle questionnaire completion
  const handleQuestionnaireComplete = async (questionnaireData: {
    business_type: "b2b" | "b2c" | "both";
    preferred_platforms: string[];
  }) => {
    if (!leadId || !initialFormData) return;

    setProcessingComplete(true);

    try {
      // Update the lead with business_type and preferred_platforms
      const { error: updateError } = await supabase
        .from('leads')
        .update({
          business_type: questionnaireData.business_type,
          preferred_platforms: questionnaireData.preferred_platforms
        })
        .eq('id', leadId);

      if (updateError) {
        console.error("Failed to update lead:", updateError);
      }

      // Combine all data for email and navigation
      const fullFormData = {
        ...initialFormData,
        business_type: questionnaireData.business_type,
        preferred_platforms: questionnaireData.preferred_platforms
      };

      // Send lead email
      if (session) {
        await sendLeadEmail(
          { ...fullFormData, step: 1 },
          session,
          "Performance Marketing - Ads Audit Request"
        );
      }

      toast.success("Starting your personalized ads audit...");
      
      // Navigate to performance planner with all data
      navigate("/performance-planner", { 
        state: { 
          leadId, 
          formData: fullFormData,
          service: "pm" 
        } 
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
      setProcessingComplete(false);
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
          <Suspense fallback={<PMHeroSectionSkeleton />}>
            <PMHeroSection onSubmit={handleHeroFormSubmit} loading={loading} />
          </Suspense>
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
          <PMFinalCTASection />
        </div>
        <div id="pm-faq">
          <PMFAQSection />
        </div>
        <Footer />
      </main>
      
      <StickyCTA onClick={scrollToForm} />

      {/* Pre-Audit Questionnaire Overlay */}
      {showQuestionnaire && (
        <PMPreAuditQuestionnaire
          onComplete={handleQuestionnaireComplete}
          loading={processingComplete}
          websiteUrl={initialFormData?.website_url}
        />
      )}
    </>
  );
};

export default PerformanceMarketing;