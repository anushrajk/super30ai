import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { BlogSection } from "@/components/landing/BlogSection";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { ProjectShowcaseSection } from "@/components/work/ProjectShowcaseSection";
import { WDProblemSection } from "@/components/web-design/WDProblemSection";
import { WDComparisonSection } from "@/components/web-design/WDComparisonSection";
import { WDBenefitsSection } from "@/components/web-design/WDBenefitsSection";
import { WDAISections } from "@/components/web-design/WDAISections";
import { WDWhoIsThisForSection } from "@/components/web-design/WDWhoIsThisForSection";
import { WDProcessSection } from "@/components/web-design/WDProcessSection";
import { WDFinalCTASection } from "@/components/web-design/WDFinalCTASection";
import { WDRelevanceSection } from "@/components/web-design/WDRelevanceSection";
import { WDFAQSection } from "@/components/web-design/WDFAQSection";
import { BentoBadge, BentoGrid, BentoCard, BentoIcon } from "@/components/ui/bento-grid";
import { openThankYouPage } from "@/lib/thankYouRedirect";
import { toast } from "sonner";
import {
  Globe, Layout, ShoppingCart, Smartphone, Gauge, Shield, Code, Paintbrush, Monitor
} from "lucide-react";

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

const WebDesign = () => {
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
        <div id="wd-hero">
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
        </div>

        <WDProblemSection />
        <WDComparisonSection />
        <ProjectShowcaseSection />

        {/* Services Grid */}
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

        <WDBenefitsSection />

        {/* Tech Stack */}
        <section className="py-6 md:py-10 lg:py-16 bg-[#020617]">
          <div className="container mx-auto px-3 md:px-4">
            <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
              <BentoBadge className="mb-4 !bg-white/10 !border-white/20 !text-white"><Code className="w-4 h-4" />Tech Stack</BentoBadge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">Technologies We Work With</h2>
            </div>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
              {techStack.map((tech, i) => (
                <span key={i} className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:border-brand/50 transition-all duration-300 cursor-default">{tech}</span>
              ))}
            </div>
          </div>
        </section>

        <WDAISections />
        <WDWhoIsThisForSection />
        <WDProcessSection />
        <WDFinalCTASection />
        <WDRelevanceSection />
        <TestimonialSection />
        <BlogSection />
        <WDFinalCTASection />
        <WDFAQSection />
        <Footer />
      </main>

      <StickyCTA onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
};

export default WebDesign;
