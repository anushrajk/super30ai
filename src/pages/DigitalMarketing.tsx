import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";

import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { BlogSection } from "@/components/landing/BlogSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BentoBadge } from "@/components/ui/bento-grid";
import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { openThankYouPage } from "@/lib/thankYouRedirect";
import { toast } from "sonner";
import { ServicesBentoGrid } from "@/components/digital-marketing/ServicesBentoGrid";
import { ServicesDetailSection } from "@/components/digital-marketing/ServicesDetailSection";
import { GrowthEcosystemSection } from "@/components/digital-marketing/GrowthEcosystemSection";
import {
  Megaphone, ArrowRight, MessageCircle, CheckCircle2,
  BarChart3, Zap, Bot, Users
} from "lucide-react";




const process = [
  { step: "01", title: "Discovery & Audit", description: "We analyze your current digital presence, competitors & growth opportunities." },
  { step: "02", title: "Strategy & Planning", description: "Custom roadmap across SEO, ads, social & web — aligned to your business goals." },
  { step: "03", title: "Execution & Launch", description: "Our 30+ experts execute campaigns, build assets & launch across channels." },
  { step: "04", title: "Optimize & Scale", description: "AI-driven optimization, A/B testing & continuous scaling for maximum ROI." },
];

const faqs = [
  { question: "What digital marketing services does The Super 30 offer?", answer: "We offer a full suite: AI SEO, Performance Marketing (Google/Meta/LinkedIn Ads), Social Media, Design, Web Design, Email Marketing, Content Marketing, and Marketing Automation." },
  { question: "How is The Super 30 different from other agencies?", answer: "We combine AI-powered tools with a team of 30+ specialists. Our data-driven approach, no long-term lock-ins, and transparent reporting set us apart." },
  { question: "Do you work with startups or only large companies?", answer: "We work with businesses of all sizes — from funded startups to enterprise brands. Our strategies are customized to your budget and growth stage." },
  { question: "How quickly can I expect results?", answer: "Paid campaigns show results within 1-2 weeks. SEO typically takes 3-6 months for significant organic growth. We provide weekly progress reports." },
  { question: "What industries do you specialize in?", answer: "We've delivered results across Real Estate, Education, Healthcare, D2C, SaaS, E-commerce, and Staffing industries." },
];

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
        {/* Hero Section with Lead Form */}
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

        <ServicesBentoGrid />
        <ServicesDetailSection />

        {/* Process Section */}
        <section className="py-6 md:py-10 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-3 md:px-4">
            <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
              <BentoBadge className="mb-4">Our Process</BentoBadge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">How We Drive Growth</h2>
              <p className="text-base md:text-lg text-muted-foreground">A proven 4-step process that delivers results</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {process.map((item, index) => (
                <div key={index} className="relative bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
                  <span className="text-4xl font-bold text-brand/20">{item.step}</span>
                  <h3 className="text-lg font-bold text-foreground mt-2 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        
        <section className="py-6 md:py-10 lg:py-16 bg-background">
          <div className="container mx-auto px-3 md:px-4">
            <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
              <BentoBadge className="mb-4">Why Choose Us</BentoBadge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">Why 300+ Brands Trust The Super 30</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: Bot, title: "AI-Powered", desc: "We use AI tools & automation to deliver smarter, faster results" },
                { icon: Users, title: "30+ Experts", desc: "Dedicated team of digital marketing specialists" },
                { icon: BarChart3, title: "Data-Driven", desc: "Every campaign backed by analytics & measurable ROI" },
                { icon: Zap, title: "Fast & Flexible", desc: "Rapid execution with no long-term lock-ins" },
              ].map((item, i) => (
                <div key={i} className="text-center bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto icon-bg-glow rounded-2xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-16 bg-brand">
          <div className="container mx-auto px-3 md:px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Grow Your Business?</h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-6">Get a free digital marketing consultation from our experts. No commitments.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/seo-agency-near-me">
                <Button size="lg" className="bg-white text-brand hover:bg-white/90 font-semibold">
                  Get Free Consultation<ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/seo-agency-near-me">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <MessageCircle className="w-4 h-4 mr-2" />Enquire Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <TestimonialSection />
        <BlogSection />

        {/* FAQ Section */}
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

      
    </>
  );
};

export default DigitalMarketing;
