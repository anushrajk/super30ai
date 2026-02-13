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
import { PMAISections } from "@/components/pm/PMAISections";
import { PMWhoIsThisForSection } from "@/components/pm/PMWhoIsThisForSection";
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
      // Update the lead via secure edge function with session validation
      const { data: updateResult, error: updateError } = await supabase.functions.invoke('create-lead', {
        body: {
          lead_id: leadId,
          email: initialFormData.email,
          website_url: initialFormData.website_url,
          business_type: questionnaireData.business_type,
          preferred_platforms: questionnaireData.preferred_platforms
        },
        headers: session?.id ? { 'x-session-id': session.id } : undefined
      });

      if (updateError || updateResult?.error) {
        console.error("Failed to update lead:", updateError || updateResult?.error);
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
        <title>AI Powered Ads & Performance Marketing Services | The Super 30</title>
        <meta name="description" content="Boost conversions with AI powered ads and performance marketing services, including PPC services in Bangalore and data driven ad strategies." />
        <meta name="keywords" content="AI Powered Ads, Performance Marketing Services, ppc services in bangalore, performance marketing agency bangalore, ai powered ads, ppc marketing" />
        <link rel="canonical" href="https://www.thesuper30.ai/performance-marketing" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Powered Ads & Performance Marketing Services | The Super 30" />
        <meta property="og:description" content="Boost conversions with AI powered ads and performance marketing services, including PPC services in Bangalore and data driven ad strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/performance-marketing" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Powered Ads & Performance Marketing Services | The Super 30" />
        <meta name="twitter:description" content="Boost conversions with AI powered ads and performance marketing services, including PPC services in Bangalore and data driven ad strategies." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Performance Marketing",
            "name": "AI Powered Ads & Performance Marketing Services",
            "url": "https://www.thesuper30.ai/performance-marketing",
            "provider": {
              "@type": "Organization",
              "name": "The Super 30",
              "url": "https://www.thesuper30.ai/"
            },
            "areaServed": {
              "@type": "City",
              "name": "Bangalore"
            },
            "description": "AI-powered performance marketing and PPC services in Bangalore delivering measurable ROI through data-driven ad strategies."
          })}
        </script>
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
        <div id="pm-ai-sections">
          <PMAISections />
        </div>
        <div id="pm-who-is-this-for">
          <PMWhoIsThisForSection />
        </div>
        <div id="pm-process">
          <PMProcessSection />
        </div>
        <div id="pm-final-cta-mid">
          <PMFinalCTASection />
        </div>
        <div id="pm-dashboard">
          <PMDashboardPreview />
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