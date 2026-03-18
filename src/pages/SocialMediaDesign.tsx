import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { Button } from "@/components/ui/button";
import { BentoBadge } from "@/components/ui/bento-grid";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { SMClientProfilesSection } from "@/components/social-media/SMClientProfilesSection";
import { SMMoodboardSection } from "@/components/social-media/SMMoodboardSection";
import { SMReelsContentSection } from "@/components/social-media/SMReelsContentSection";
import { SMProcessSection } from "@/components/social-media/SMProcessSection";
import { SMPricingSection } from "@/components/social-media/SMPricingSection";
import { openThankYouPage } from "@/lib/thankYouRedirect";
import { toast } from "sonner";
import {
  Palette, ArrowRight, MessageCircle, Instagram,
  Layers, Sparkles, Zap
} from "lucide-react";

const faqs = [
  { question: "What formats do you deliver the designs in?", answer: "We deliver in all standard formats — PNG, JPG, PDF, and platform-specific dimensions (1080x1080 for feed, 1080x1920 for stories, etc.)." },
  { question: "Can you match our existing brand guidelines?", answer: "Absolutely! We start every project by studying your brand colors, fonts, tone & existing content to ensure consistency." },
  { question: "How many revisions are included?", answer: "Our Starter plan includes 2 revisions per post. Growth and Premium plans include unlimited revisions until you're 100% satisfied." },
  { question: "Do you also write captions and hashtags?", answer: "Yes! Our Growth and Premium plans include SEO-optimized captions and researched hashtag sets for maximum reach." },
  { question: "What's the turnaround time?", answer: "Standard turnaround is 3-5 business days for a batch. Premium clients get priority delivery within 24-48 hours." },
];

const SocialMediaDesign = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
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
        {/* 1. Hero Section with Lead Form */}
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

        {/* 2. Client Profiles Carousel */}
        <SMClientProfilesSection />

        {/* 3. Moodboards & Brand Consistency (Instagram Grid) */}
        <SMMoodboardSection />

        {/* 4. Reels & Content Shoot Types */}
        <SMReelsContentSection />

        {/* 5. Our Process */}
        <SMProcessSection />

        {/* 6. Pricing (buttons scroll to form) */}
        <SMPricingSection />

        {/* CTA */}
        <section className="py-10 md:py-16 bg-brand">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Level Up Your Social Media?</h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-6">Get a free consultation and see sample designs for your brand.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                variant="ghost"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-white text-[hsl(var(--brand))] hover:bg-white/90 hover:text-[hsl(var(--brand))] font-semibold rounded-full px-8"
              >
                Get Free Consultation<ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline-white"
                onClick={() => setShowEnquiryPopup(true)}
                className="rounded-full px-8"
              >
                <MessageCircle className="w-4 h-4 mr-2" />Enquire Now
              </Button>
            </div>
          </div>
        </section>

        <TestimonialSection />

        {/* FAQ */}
        <section className="py-6 md:py-10 lg:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
              <BentoBadge className="mb-4">FAQs</BentoBadge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-card border border-border rounded-xl p-4 cursor-pointer">
                  <summary className="font-semibold text-foreground list-none flex items-center justify-between">
                    {faq.question}
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="text-muted-foreground text-sm mt-3">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </>
  );
};

export default SocialMediaDesign;
