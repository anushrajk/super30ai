import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { BlogSection } from "@/components/landing/BlogSection";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { ServicesBentoGrid } from "@/components/digital-marketing/ServicesBentoGrid";
import { ServicesDetailSection } from "@/components/digital-marketing/ServicesDetailSection";
import { DMProblemSection } from "@/components/digital-marketing/DMProblemSection";
import { DMComparisonSection } from "@/components/digital-marketing/DMComparisonSection";
import { DMRelevanceSection } from "@/components/digital-marketing/DMRelevanceSection";
import { DMBenefitsSection } from "@/components/digital-marketing/DMBenefitsSection";
import { DMAISections } from "@/components/digital-marketing/DMAISections";
import { DMProcessSection } from "@/components/digital-marketing/DMProcessSection";
import { DMFinalCTASection } from "@/components/digital-marketing/DMFinalCTASection";
import { DMFAQSection } from "@/components/digital-marketing/DMFAQSection";
import { WhoIsThisForSection } from "@/components/landing/WhoIsThisForSection";
import { openThankYouPage } from "@/lib/thankYouRedirect";
import { toast } from "sonner";
import { Megaphone, Bot, BarChart3, Users, Zap } from "lucide-react";

const DigitalMarketing = () => {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (data: { website_url: string; email: string; phone?: string; role?: string; monthly_revenue?: string; full_name?: string; company_name?: string }) => {
    setLoading(true);
    try {
      toast.success("Form submitted successfully!");
      openThankYouPage({
        name: data.full_name || data.email?.split('@')[0],
        email: data.email,
        company: data.company_name,
        source: 'digital_marketing'
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
        <title>Digital Marketing Agency in Bangalore | The Super 30</title>
        <meta name="description" content="The Super 30 is a full-service digital marketing agency in Bangalore offering AI SEO, performance marketing, social media, design, web design & growth strategies." />
        <meta name="keywords" content="digital marketing agency bangalore, digital marketing services, online marketing agency, full service digital marketing, digital marketing company" />
        <link rel="canonical" href="https://www.thesuper30.ai/digital-marketing" />
        <meta property="og:title" content="Digital Marketing Agency in Bangalore | The Super 30" />
        <meta property="og:description" content="Full-service digital marketing agency offering AI SEO, ads, social media, design, web design & growth strategies. Trusted by 300+ brands." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/digital-marketing" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Digital Marketing Services",
            "name": "Digital Marketing Agency | The Super 30",
            "url": "https://www.thesuper30.ai/digital-marketing",
            "provider": { "@type": "Organization", "name": "The Super 30", "url": "https://www.thesuper30.ai/" },
            "areaServed": { "@type": "City", "name": "Bangalore" },
            "description": "Full-service digital marketing agency in Bangalore offering AI-powered SEO, performance marketing, social media, design, web design & growth strategies."
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        <div id="dm-hero">
          <ServiceHeroSection
            badgeIcon={Megaphone}
            badgeText="Full-Service Digital Marketing Agency"
            headline={
              <>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand leading-[1.25] pb-1">
                  Grow Your Business with
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.25]">
                  AI-Powered Digital Marketing
                </span>
              </>
            }
            description={
              <>
                From SEO to social media, ads to web design — we bring{" "}
                <span className="text-foreground font-semibold">everything under one roof</span> to drive measurable growth for your brand.
              </>
            }
            trustSignals={[
              { icon: Bot, text: "AI + Human Expert Model" },
              { icon: BarChart3, text: "Data-Driven Growth Strategies" },
              { icon: Users, text: "30+ Marketing Experts" },
              { icon: Zap, text: "No Long-Term Lock-ins" },
            ]}
            credentials={["30+ Marketing Experts", "AI-Powered Strategies", "300+ Brands Served"]}
            onSubmit={handleFormSubmit}
            loading={loading}
            formTitle="Get Your Free Digital Marketing Strategy"
            formDescription="Tell us about your business and our experts will create a custom growth plan to boost your online presence."
            formButtonText="Get Free Strategy"
            formId="lead_capture_digital_marketing"
            formName="Digital Marketing Strategy Consultation"
          />
        </div>

        <DMProblemSection />
        <DMComparisonSection />
        <ServicesBentoGrid />
        <DMBenefitsSection />
        <ServicesDetailSection />
        <DMAISections />
        <WhoIsThisForSection />
        <DMProcessSection />
        <DMFinalCTASection />
        <DMRelevanceSection />
        <TestimonialSection />
        <BlogSection />
        <DMFinalCTASection />
        <DMFAQSection />
        <Footer />
      </main>

      <StickyCTA onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
};

export default DigitalMarketing;
