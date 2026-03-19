import { useState } from "react";
import { ProjectShowcaseSection } from "@/components/work/ProjectShowcaseSection";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";

import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { Button } from "@/components/ui/button";
import { BentoBadge, BentoGrid, BentoCard, BentoIcon } from "@/components/ui/bento-grid";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { AuditChoicePopup } from "@/components/popups/AuditChoicePopup";
import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { openThankYouPage } from "@/lib/thankYouRedirect";
import { toast } from "sonner";
import {
  Globe, ArrowRight, MessageCircle, Award, CheckCircle2,
  Layout, ShoppingCart, Smartphone, Zap, Code, Paintbrush,
  Monitor, Gauge, Shield, Search
} from "lucide-react";

import webDesign1 from "@/assets/portfolio/web-design-1.jpg";
import webDesign2 from "@/assets/portfolio/web-design-2.jpg";
import webDesign3 from "@/assets/portfolio/web-design-3.jpg";

const portfolioItems = [
  { image: webDesign1, title: "Corporate Website", category: "Business", description: "Professional corporate website with modern design and clear CTAs" },
  { image: webDesign2, title: "E-Commerce Store", category: "E-Commerce", description: "Full-featured online store with product catalog and checkout" },
  { image: webDesign3, title: "SaaS Landing Page", category: "SaaS", description: "High-converting landing page with pricing and feature sections" },
];

const services = [
  { icon: Layout, title: "Landing Pages", description: "High-converting landing pages designed to maximize lead generation & sales" },
  { icon: Monitor, title: "Corporate Websites", description: "Professional brand websites that build trust and showcase your business" },
  { icon: ShoppingCart, title: "E-Commerce Development", description: "Online stores with product catalogs, payment gateways & order management" },
  { icon: Smartphone, title: "Responsive Design", description: "Pixel-perfect designs that look stunning on desktop, tablet & mobile" },
  { icon: Paintbrush, title: "UI/UX Design", description: "User-centric design with intuitive navigation and beautiful interfaces" },
  { icon: Gauge, title: "Speed Optimization", description: "Core Web Vitals optimization for fast loading & better SEO rankings" },
  { icon: Code, title: "Custom Development", description: "Custom features, integrations, CMS setup & API connections" },
  { icon: Shield, title: "Maintenance & Support", description: "Ongoing updates, security patches & performance monitoring" },
];

const techStack = [
  "React", "Next.js", "WordPress", "Shopify", "WooCommerce", "Webflow",
  "Tailwind CSS", "TypeScript", "Node.js", "Figma",
];

const process = [
  { step: "01", title: "Discovery & Wireframing", description: "Understand your goals, audience & competitors. Create wireframes & sitemaps." },
  { step: "02", title: "UI/UX Design", description: "Create stunning mockups in Figma with your brand colors, fonts & imagery." },
  { step: "03", title: "Development & Testing", description: "Build responsive, fast-loading pages with clean code & thorough QA testing." },
  { step: "04", title: "Launch & Optimize", description: "Deploy, configure analytics, and continuously optimize for conversions." },
];

const faqs = [
  { question: "How long does it take to build a website?", answer: "A landing page takes 1-2 weeks. A full corporate website takes 3-4 weeks. E-commerce stores typically take 4-6 weeks depending on complexity." },
  { question: "Do you build on WordPress or custom code?", answer: "We work with both! We use WordPress, Shopify, Webflow for CMS-based sites, and React/Next.js for custom high-performance websites." },
  { question: "Will my website be mobile-friendly?", answer: "Absolutely! Every website we build is fully responsive and tested across all device sizes — mobile, tablet, and desktop." },
  { question: "Do you provide hosting and domain setup?", answer: "Yes, we help with domain registration, hosting setup, SSL certificates, and email configuration as part of our service." },
  { question: "Do you offer website maintenance?", answer: "Yes! We offer monthly maintenance plans that include updates, security patches, backups, and performance monitoring." },
  { question: "Can you redesign my existing website?", answer: "Definitely! We specialize in website redesigns that modernize your look, improve UX, and boost conversions while preserving your SEO rankings." },
];

const WebDesign = () => {
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
        source: 'web_design'
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
        <title>Web Design & Development Services in Bangalore | The Super 30</title>
        <meta name="description" content="Professional web design & development services in Bangalore. High-converting websites, landing pages, e-commerce stores & custom web applications. Get a free consultation." />
        <meta name="keywords" content="web design bangalore, website development, landing page design, ecommerce development, web design agency, website design company bangalore" />
        <link rel="canonical" href="https://www.thesuper30.ai/web-design-development" />
        <meta property="og:title" content="Web Design & Development Services | The Super 30" />
        <meta property="og:description" content="Professional web design & development. High-converting websites, landing pages & e-commerce stores." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/web-design-development" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Design & Development",
            "name": "Web Design & Development Services | The Super 30",
            "url": "https://www.thesuper30.ai/web-design-development",
            "provider": { "@type": "Organization", "name": "The Super 30", "url": "https://www.thesuper30.ai/" },
            "areaServed": { "@type": "City", "name": "Bangalore" }
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section with Lead Form */}
        <ServiceHeroSection
          badgeIcon={Globe}
          badgeText="Web Design Agency"
          headline={
            <>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand leading-[1.25] pb-1">
                Websites That Convert
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.25]">
                Visitors Into Customers
              </span>
            </>
          }
          description={
            <>
              Fast, responsive, SEO-optimized websites — from landing pages to full e-commerce stores.{" "}
              <span className="text-foreground font-semibold">Built to grow your business</span>.
            </>
          }
          trustSignals={[
            { icon: Layout, text: "High-Converting Landing Pages" },
            { icon: Smartphone, text: "Mobile-First Responsive Design" },
            { icon: Gauge, text: "Core Web Vitals Optimized" },
            { icon: Shield, text: "Ongoing Maintenance & Support" },
          ]}
          credentials={["200+ Websites Built", "Core Web Vitals Optimized", "SEO-Ready"]}
          onSubmit={handleFormSubmit}
          loading={loading}
          formTitle="Get Your Free Website Consultation"
          formDescription="Tell us about your project and we'll create a plan for a high-converting website that grows your business."
          formButtonText="Get Free Website Quote"
          formId="lead_capture_web_design"
          formName="Web Design Consultation"
        />

        

        {/* Project Showcase - Dark Scrollable */}
        <ProjectShowcaseSection />

        {/* Services */}
        <section className="py-6 md:py-10 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-3 md:px-4">
            <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
              <BentoBadge className="mb-4">Our Services</BentoBadge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">Web Design & Development Services</h2>
              <p className="text-base md:text-lg text-muted-foreground">End-to-end web solutions for businesses of all sizes</p>
            </div>
            <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {services.map((service, i) => (
                <BentoCard key={i} className="group">
                  <BentoIcon size="md">
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 text-brand group-hover:text-white transition-colors duration-300" />
                  </BentoIcon>
                  <h3 className="text-base md:text-lg font-bold text-foreground mt-3 mb-2 group-hover:text-brand transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </BentoCard>
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-6 md:py-10 lg:py-16 bg-background">
          <div className="container mx-auto px-3 md:px-4">
            <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
              <BentoBadge className="mb-4"><Code className="w-4 h-4" />Tech Stack</BentoBadge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">Technologies We Work With</h2>
            </div>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
              {techStack.map((tech, i) => (
                <span key={i} className="bg-card border border-border rounded-xl px-5 py-3 text-sm font-semibold text-foreground hover:-translate-y-0.5 hover:border-brand/50 transition-all duration-300 cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-6 md:py-10 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-3 md:px-4">
            <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
              <BentoBadge className="mb-4">Our Process</BentoBadge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">From Concept to Launch</h2>
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

        {/* CTA */}
        <section className="py-10 md:py-16 bg-brand">
          <div className="container mx-auto px-3 md:px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Dream Website?</h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-6">Get a free consultation and website audit from our design experts.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" onClick={() => setShowAuditPopup(true)} className="bg-white text-brand hover:bg-white/90 font-semibold">
                Get Free Consultation<ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline-white" onClick={() => setShowEnquiryPopup(true)}>
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

export default WebDesign;
