import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { Button } from "@/components/ui/button";
import { BentoBadge, BentoGrid, BentoCard, BentoIcon } from "@/components/ui/bento-grid";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { AuditChoicePopup } from "@/components/popups/AuditChoicePopup";
import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { openThankYouPage } from "@/lib/thankYouRedirect";
import { toast } from "sonner";
import {
  Palette, ArrowRight, MessageCircle, Award, Instagram, Facebook, Linkedin,
  Image, Layers, Sparkles, CheckCircle2, Zap, Eye, Heart
} from "lucide-react";

import socialPost1 from "@/assets/portfolio/social-post-1.jpg";
import socialPost2 from "@/assets/portfolio/social-post-2.jpg";
import socialPost3 from "@/assets/portfolio/social-post-3.jpg";
import socialPost4 from "@/assets/portfolio/social-post-4.jpg";
import socialPost5 from "@/assets/portfolio/social-post-5.jpg";
import socialPost6 from "@/assets/portfolio/social-post-6.jpg";

const portfolioItems = [
  { image: socialPost1, title: "Brand Campaign", category: "Instagram" },
  { image: socialPost2, title: "Product Showcase", category: "Facebook" },
  { image: socialPost3, title: "Sale Promotion", category: "Instagram Story" },
  { image: socialPost4, title: "Corporate Post", category: "LinkedIn" },
  { image: socialPost5, title: "Food Brand", category: "Instagram" },
  { image: socialPost6, title: "Fitness Brand", category: "Instagram" },
];

const designTypes = [
  { icon: Instagram, title: "Instagram Posts & Reels", description: "Feed posts, carousels, stories & reel covers that stop the scroll" },
  { icon: Facebook, title: "Facebook Ads & Posts", description: "Engaging creatives for organic reach & paid campaigns" },
  { icon: Linkedin, title: "LinkedIn Content", description: "Professional designs for thought leadership & B2B engagement" },
  { icon: Image, title: "Carousel Designs", description: "Multi-slide educational & promotional carousels" },
  { icon: Layers, title: "Brand Templates", description: "Consistent branded templates for daily posting" },
  { icon: Sparkles, title: "Festival & Event Posts", description: "Trendy designs for occasions, festivals & launches" },
];

const process = [
  { step: "01", title: "Brand Brief", description: "Share your brand guidelines, tone, target audience & content goals." },
  { step: "02", title: "Content Calendar", description: "We plan a monthly calendar with post topics, captions & hashtags." },
  { step: "03", title: "Design & Review", description: "Our designers create scroll-stopping visuals. You review & approve." },
  { step: "04", title: "Deliver & Post", description: "Get print-ready files in all formats. Optional posting & scheduling included." },
];

const packages = [
  { name: "Starter", posts: "15 Posts/Month", features: ["Instagram & Facebook", "2 Revisions per post", "Brand template creation", "Monthly content calendar"], popular: false },
  { name: "Growth", posts: "30 Posts/Month", features: ["All platforms", "Unlimited revisions", "Carousel & Story designs", "Hashtag research", "Caption writing"], popular: true },
  { name: "Premium", posts: "45+ Posts/Month", features: ["Everything in Growth", "Reel cover designs", "Festival special posts", "Dedicated designer", "Priority delivery"], popular: false },
];

const faqs = [
  { question: "What formats do you deliver the designs in?", answer: "We deliver in all standard formats — PNG, JPG, PDF, and platform-specific dimensions (1080x1080 for feed, 1080x1920 for stories, etc.)." },
  { question: "Can you match our existing brand guidelines?", answer: "Absolutely! We start every project by studying your brand colors, fonts, tone & existing content to ensure consistency." },
  { question: "How many revisions are included?", answer: "Our Starter plan includes 2 revisions per post. Growth and Premium plans include unlimited revisions until you're 100% satisfied." },
  { question: "Do you also write captions and hashtags?", answer: "Yes! Our Growth and Premium plans include SEO-optimized captions and researched hashtag sets for maximum reach." },
  { question: "What's the turnaround time?", answer: "Standard turnaround is 3-5 business days for a batch. Premium clients get priority delivery within 24-48 hours." },
];

const SocialMediaDesign = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [showAuditPopup, setShowAuditPopup] = useState(false);
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
        {/* Hero Section with Lead Form */}
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
        />

        <ClientLogosSection />

        {/* Portfolio Showcase */}
        <section className="py-6 md:py-10 lg:py-16 bg-background">
          <div className="container mx-auto px-3 md:px-4">
            <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
              <BentoBadge className="mb-4"><Eye className="w-4 h-4" />Our Work</BentoBadge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">Recent Social Media Designs</h2>
              <p className="text-base md:text-lg text-muted-foreground">A glimpse of our creative work across platforms</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              {portfolioItems.map((item, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-white/70 text-xs">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Types */}
        <section className="py-6 md:py-10 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-3 md:px-4">
            <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
              <BentoBadge className="mb-4">What We Design</BentoBadge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">Designs for Every Platform</h2>
              <p className="text-base md:text-lg text-muted-foreground">We create content that fits perfectly across all social channels</p>
            </div>
            <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {designTypes.map((item, i) => (
                <BentoCard key={i} className="group">
                  <BentoIcon size="md">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-brand group-hover:text-white transition-colors duration-300" />
                  </BentoIcon>
                  <h3 className="text-base md:text-lg font-bold text-foreground mt-3 mb-2 group-hover:text-brand transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </BentoCard>
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Process */}
        <section className="py-6 md:py-10 lg:py-16 bg-background">
          <div className="container mx-auto px-3 md:px-4">
            <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
              <BentoBadge className="mb-4">Our Process</BentoBadge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">From Brief to Beautiful</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {process.map((item, i) => (
                <div key={i} className="relative bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
                  <span className="text-4xl font-bold text-brand/20">{item.step}</span>
                  <h3 className="text-lg font-bold text-foreground mt-2 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-6 md:py-10 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-3 md:px-4">
            <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
              <BentoBadge className="mb-4">Pricing</BentoBadge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">Simple, Transparent Pricing</h2>
              <p className="text-base md:text-lg text-muted-foreground">Choose a plan that fits your social media needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {packages.map((pkg, i) => (
                <div key={i} className={`relative bg-card border rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 ${pkg.popular ? "border-brand ring-2 ring-brand/20" : "border-border"}`}>
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                  )}
                  <h3 className="text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
                  <p className="text-brand font-semibold text-lg mb-4">{pkg.posts}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Button onClick={() => setShowEnquiryPopup(true)} className={`w-full ${pkg.popular ? "bg-brand hover:bg-brand/90 text-white" : ""}`} variant={pkg.popular ? "default" : "outline"}>
                    Get Started<ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-16 bg-brand">
          <div className="container mx-auto px-3 md:px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Level Up Your Social Media?</h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-6">Get a free consultation and see sample designs for your brand.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" onClick={() => setShowAuditPopup(true)} className="bg-white text-brand hover:bg-white/90 font-semibold">
                Get Free Consultation<ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => setShowEnquiryPopup(true)} className="border-white text-white hover:bg-white/10">
                <MessageCircle className="w-4 h-4 mr-2" />Enquire Now
              </Button>
            </div>
          </div>
        </section>

        <TestimonialSection />

        {/* FAQ */}
        <section className="py-6 md:py-10 lg:py-16 bg-background">
          <div className="container mx-auto px-3 md:px-4">
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
      <AuditChoicePopup open={showAuditPopup} onOpenChange={setShowAuditPopup} />
    </>
  );
};

export default SocialMediaDesign;
