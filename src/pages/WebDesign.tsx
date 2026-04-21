import { useLeadSubmit } from "@/hooks/useLeadSubmit";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { BentoBadge, BentoGrid, BentoCard, BentoIcon } from "@/components/ui/bento-grid";

import { lazy, Suspense } from "react";
import {
  Globe, Layout, ShoppingCart, Smartphone, Gauge, Shield, Code, Paintbrush, Monitor
} from "lucide-react";

const WDProblemSection = lazy(() => import("@/components/web-design/WDProblemSection").then(m => ({ default: m.WDProblemSection })));
const WDComparisonSection = lazy(() => import("@/components/web-design/WDComparisonSection").then(m => ({ default: m.WDComparisonSection })));
const ProjectShowcaseSection = lazy(() => import("@/components/work/ProjectShowcaseSection").then(m => ({ default: m.ProjectShowcaseSection })));
const WDBenefitsSection = lazy(() => import("@/components/web-design/WDBenefitsSection").then(m => ({ default: m.WDBenefitsSection })));
const WDAISections = lazy(() => import("@/components/web-design/WDAISections").then(m => ({ default: m.WDAISections })));
const WDWhoIsThisForSection = lazy(() => import("@/components/web-design/WDWhoIsThisForSection").then(m => ({ default: m.WDWhoIsThisForSection })));
const WDProcessSection = lazy(() => import("@/components/web-design/WDProcessSection").then(m => ({ default: m.WDProcessSection })));
const WDFinalCTASection = lazy(() => import("@/components/web-design/WDFinalCTASection").then(m => ({ default: m.WDFinalCTASection })));
const WDRelevanceSection = lazy(() => import("@/components/web-design/WDRelevanceSection").then(m => ({ default: m.WDRelevanceSection })));
const WDFAQSection = lazy(() => import("@/components/web-design/WDFAQSection").then(m => ({ default: m.WDFAQSection })));
const TestimonialSection = lazy(() => import("@/components/landing/TestimonialSection").then(m => ({ default: m.TestimonialSection })));
const BlogSection = lazy(() => import("@/components/landing/BlogSection").then(m => ({ default: m.BlogSection })));

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
  const { loading, handleFormSubmit } = useLeadSubmit({
    source: 'web_design',
    formId: 'web-design-form',
    formName: 'Web Design Consultation',
  });

  return (
    <>
      <Helmet>
        <title>Web Design Company in Bangalore | Custom Website Design</title>
        <meta name="description" content="Looking for a website designing agency in Bangalore? We build custom, E-Commerce and responsive sites. 50+ delivered, 98% satisfaction. Let's Build!" />
        <meta name="keywords" content="web design company in bangalore, website design services bangalore, website designing agency in bangalore, Custom website designing in bangalore" />
        <link rel="canonical" href="https://www.thesuper30.ai/web-design-company-bangalore" />
        <meta property="og:title" content="Your Website Should Work for You. Not Against You." />
        <meta property="og:description" content="Custom and responsive websites built to convert. 50+ projects, 98% satisfaction. Let's build yours!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/web-design-company-bangalore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Website Should Work for You. Not Against You." />
        <meta name="twitter:description" content="Custom and responsive websites built to convert. 50+ projects, 98% satisfaction. Let's build yours!" />
        <meta name="twitter:url" content="https://www.thesuper30.ai/web-design-company-bangalore" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Design & Development",
            "name": "Web Design Company in Bangalore | Custom Website Design",
            "url": "https://www.thesuper30.ai/web-design-company-bangalore",
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
            badgeText="Web Design Company in Bangalore"
            headline={
              <>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand leading-[1.25] pb-1">
                  Web Design Company
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.25]">
                  in Bangalore
                </span>
              </>
            }
            description={
              <>
                Bangalore's most trusted <span className="text-foreground font-semibold">website designing agency</span> — custom, responsive, and SEO-optimized <span className="text-foreground font-semibold">website design services</span> built to convert visitors into customers.
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

        <ClientLogosSection />

        <Suspense fallback={null}>
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
        </Suspense>

        <Footer />
      </main>

      <StickyCTA onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
};

export default WebDesign;
