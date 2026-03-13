import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { BlogSection } from "@/components/landing/BlogSection";
import { Button } from "@/components/ui/button";
import { BentoBadge, BentoGrid, BentoCard, BentoIcon } from "@/components/ui/bento-grid";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { AuditChoicePopup } from "@/components/popups/AuditChoicePopup";
import {
  Megaphone, ArrowRight, MessageCircle, Award, CheckCircle2,
  Search, Target, Palette, Globe, BarChart3, TrendingUp, Zap, Bot,
  Mail, Users, Lightbulb, Layers
} from "lucide-react";

const services = [
  { icon: Search, title: "AI SEO Services", description: "AI-powered technical, on-page & off-page SEO to dominate search rankings" },
  { icon: Target, title: "Performance Marketing", description: "Google, Meta, LinkedIn & YouTube Ads optimized with AI for maximum ROI" },
  { icon: Palette, title: "Social Media Design", description: "Scroll-stopping creatives for Instagram, Facebook, LinkedIn & more" },
  { icon: Globe, title: "Web Design & Development", description: "High-converting websites, landing pages & e-commerce stores" },
  { icon: Mail, title: "Email Marketing", description: "Automated drip campaigns, newsletters & lead nurturing sequences" },
  { icon: BarChart3, title: "Analytics & Reporting", description: "Full-funnel tracking, attribution modeling & transparent dashboards" },
  { icon: Lightbulb, title: "Content Marketing", description: "Blog strategy, thought leadership & SEO-optimized content creation" },
  { icon: Layers, title: "Marketing Automation", description: "CRM integrations, workflow automation & conversion optimization" },
];

const process = [
  { step: "01", title: "Discovery & Audit", description: "We analyze your current digital presence, competitors & growth opportunities." },
  { step: "02", title: "Strategy & Planning", description: "Custom roadmap across SEO, ads, social & web — aligned to your business goals." },
  { step: "03", title: "Execution & Launch", description: "Our 30+ experts execute campaigns, build assets & launch across channels." },
  { step: "04", title: "Optimize & Scale", description: "AI-driven optimization, A/B testing & continuous scaling for maximum ROI." },
];

const faqs = [
  { question: "What digital marketing services does The Super 30 offer?", answer: "We offer a full suite: AI SEO, Performance Marketing (Google/Meta/LinkedIn Ads), Social Media Post Design, Web Design & Development, Email Marketing, Content Marketing, and Marketing Automation." },
  { question: "How is The Super 30 different from other agencies?", answer: "We combine AI-powered tools with a team of 30+ specialists. Our data-driven approach, no long-term lock-ins, and transparent reporting set us apart." },
  { question: "Do you work with startups or only large companies?", answer: "We work with businesses of all sizes — from funded startups to enterprise brands. Our strategies are customized to your budget and growth stage." },
  { question: "How quickly can I expect results?", answer: "Paid campaigns show results within 1-2 weeks. SEO typically takes 3-6 months for significant organic growth. We provide weekly progress reports." },
  { question: "What industries do you specialize in?", answer: "We've delivered results across Real Estate, Education, Healthcare, D2C, SaaS, E-commerce, and Staffing industries." },
];

const DigitalMarketing = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [showAuditPopup, setShowAuditPopup] = useState(false);

  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency in Bangalore | The Super 30</title>
        <meta name="description" content="The Super 30 is a full-service digital marketing agency in Bangalore offering AI SEO, performance marketing, social media design, web development & growth strategies." />
        <meta name="keywords" content="digital marketing agency bangalore, digital marketing services, online marketing agency, full service digital marketing, digital marketing company" />
        <link rel="canonical" href="https://www.thesuper30.ai/digital-marketing" />
        <meta property="og:title" content="Digital Marketing Agency in Bangalore | The Super 30" />
        <meta property="og:description" content="Full-service digital marketing agency offering AI SEO, ads, social media, web design & growth strategies. Trusted by 300+ brands." />
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
            "description": "Full-service digital marketing agency in Bangalore offering AI-powered SEO, performance marketing, social media, web design & growth strategies."
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative bg-background overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
          </div>
          <div className="container relative mx-auto px-3 md:px-4 py-8 md:py-12 lg:py-16">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <BentoBadge><Megaphone className="w-4 h-4" />Full-Service Digital Marketing</BentoBadge>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.3] mb-4">
                  Grow Your Business with{" "}
                  <span className="text-brand">AI-Powered Digital Marketing</span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  From SEO to social media, ads to web design — we bring{" "}
                  <span className="text-foreground font-semibold">everything under one roof</span> to drive measurable growth for your brand.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Button size="lg" onClick={() => setShowAuditPopup(true)} className="bg-brand hover:bg-brand/90 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
                  <Search className="w-4 h-4 mr-2" />Get Free Consultation<ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => setShowEnquiryPopup(true)} className="border-border text-foreground hover:bg-muted transition-all duration-300 w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4 mr-2" />Enquire Now<ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 justify-center pt-2">
                {["30+ Marketing Experts", "AI-Powered Strategies", "300+ Brands Served"].map((cred, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-xs font-medium">
                    <Award className="w-3 h-3 text-brand" />{cred}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <ClientLogosSection />

        {/* Services Section */}
        <section className="py-6 md:py-10 lg:py-16 bg-background">
          <div className="container mx-auto px-3 md:px-4">
            <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
              <BentoBadge className="mb-4">Our Services</BentoBadge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">Everything You Need to Grow Online</h2>
              <p className="text-base md:text-lg text-muted-foreground">Full-stack digital marketing services under one roof</p>
            </div>
            <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <BentoCard key={index} className="group">
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

        {/* Why Choose Us */}
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

      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
      <AuditChoicePopup open={showAuditPopup} onOpenChange={setShowAuditPopup} />
    </>
  );
};

export default DigitalMarketing;
