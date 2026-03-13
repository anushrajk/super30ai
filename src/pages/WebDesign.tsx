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
        {/* Hero */}
        <section className="relative bg-background overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
          </div>
          <div className="container relative mx-auto px-4 py-8 md:py-12 lg:py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="md:col-span-1 lg:col-span-7 space-y-4 md:space-y-6">
                <div className="badge-brand">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">Web Design Agency</span>
                </div>

                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4 md:mb-5">
                    Websites That{" "}
                    <span className="text-brand">Convert Visitors Into Customers</span>
                  </h1>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                    Fast, responsive, SEO-optimized websites — from landing pages to full e-commerce stores.{" "}
                    <span className="text-foreground font-semibold">Built to grow your business</span>.
                  </p>
                </div>

                {/* Trust Signals */}
                <div className="flex flex-col gap-3 py-2">
                  {[
                    { icon: Layout, text: "High-Converting Landing Pages" },
                    { icon: Smartphone, text: "Mobile-First Responsive Design" },
                    { icon: Gauge, text: "Core Web Vitals Optimized" },
                    { icon: Shield, text: "Ongoing Maintenance & Support" },
                  ].map((signal, index) => (
                    <div key={index} className="flex items-center gap-3 group cursor-default">
                      <div className="w-7 h-7 icon-bg-glow rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-md">
                        <signal.icon className="w-3.5 h-3.5 text-brand group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-medium text-foreground text-sm md:text-base">{signal.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link to="/seo-agency-near-me">
                    <Button size="lg" className="bg-brand hover:bg-brand/90 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto px-6 py-3 h-auto rounded-xl">
                      <Globe className="w-5 h-5 mr-2" />
                      Reach Us
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline-brand"
                    size="lg"
                    onClick={() => setShowEnquiryPopup(true)}
                    className="px-6 py-3 h-auto rounded-xl group"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enquire Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Expert credentials - Mobile only */}
                <div className="lg:hidden flex flex-wrap gap-2 pt-2">
                  {["200+ Websites Built", "Core Web Vitals Optimized", "SEO-Ready"].map((cred, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-xs font-medium">
                      <Award className="w-3 h-3 text-brand" />{cred}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column - Portfolio Preview */}
              <div className="md:col-span-1 lg:col-span-5">
                <div className="animate-fade-in space-y-4" style={{ animationDelay: '200ms' }}>
                  {portfolioItems.map((item, i) => (
                    <div key={i} className="group bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      </div>
                      <div className="p-4">
                        <span className="text-xs font-medium text-brand bg-brand/10 px-2 py-1 rounded-full">{item.category}</span>
                        <h3 className="text-sm font-bold text-foreground mt-2">{item.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Expert credentials - Desktop only */}
                <div className="hidden lg:flex flex-wrap gap-2 mt-4 justify-center">
                  {["200+ Websites Built", "Core Web Vitals Optimized", "SEO-Ready"].map((cred, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-xs font-medium">
                      <Award className="w-3 h-3 text-brand" />{cred}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSection />

        {/* Portfolio Showcase */}
        <section className="py-6 md:py-10 lg:py-16 bg-background">
          <div className="container mx-auto px-3 md:px-4">
            <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
              <BentoBadge className="mb-4"><Monitor className="w-4 h-4" />Our Work</BentoBadge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">Websites We've Built</h2>
              <p className="text-base md:text-lg text-muted-foreground">A selection of recent web design & development projects</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {portfolioItems.map((item, i) => (
                <div key={i} className="group bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-brand bg-brand/10 px-2 py-1 rounded-full">{item.category}</span>
                    <h3 className="text-lg font-bold text-foreground mt-2 mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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

export default WebDesign;
