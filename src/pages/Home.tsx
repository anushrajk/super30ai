import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { LazySection } from "@/components/common/LazySection";

import { ArrowRight, Bot, Target, Users, Zap, BarChart3, Search, MousePointerClick, CheckCircle2, Sparkles, Award, Megaphone, Palette, Globe } from "lucide-react";

// Lazy load all below-fold sections
const UnifiedCTASection = lazy(() => import("@/components/landing/UnifiedCTASection").then(m => ({ default: m.UnifiedCTASection })));
const ClientLogosSection = lazy(() => import("@/components/landing/ClientLogosSection").then(m => ({ default: m.ClientLogosSection })));
const TestimonialSection = lazy(() => import("@/components/landing/TestimonialSection").then(m => ({ default: m.TestimonialSection })));
const BlogSection = lazy(() => import("@/components/landing/BlogSection").then(m => ({ default: m.BlogSection })));
const WhoIsThisForSection = lazy(() => import("@/components/landing/WhoIsThisForSection").then(m => ({ default: m.WhoIsThisForSection })));
const HeroDashboardPreview = lazy(() => import("@/components/home/HeroDashboardPreview").then(m => ({ default: m.HeroDashboardPreview })));
const ServicesCarousel = lazy(() => import("@/components/home/ServicesCarousel").then(m => ({ default: m.ServicesCarousel })));

const services = [{
  icon: Bot,
  title: "AI-Powered SEO",
  features: ["AI Search Optimization", "LLM Visibility & Citations", "Technical SEO Audits", "Content Strategy & Creation", "Entity & Semantic SEO", "Local & International SEO"],
  href: "/seo-company-bangalore",
  color: "from-[hsl(var(--brand-orange))] to-[hsl(var(--brand-orange)/0.8)]",
}, {
  icon: Target,
  title: "Lead Generation",
  features: ["Google Ads Management", "Meta & Instagram Ads", "LinkedIn B2B Campaigns", "YouTube Advertising", "Remarketing & Retargeting", "AI-Driven Bid Optimization"],
  href: "/lead-generation-agency-bangalore",
  color: "from-[hsl(var(--brand-orange))] to-[hsl(var(--brand-orange)/0.8)]",
}, {
  icon: Megaphone,
  title: "Digital Strategy & Growth",
  features: ["Content Marketing", "Email & Drip Campaigns", "Marketing Automation", "Conversion Rate Optimization", "Analytics & Reporting", "Full-Funnel Growth Strategy"],
  href: "/digital-marketing-agency-bangalore",
  color: "from-[hsl(var(--brand-orange))] to-[hsl(var(--brand-orange)/0.8)]",
}, {
  icon: Palette,
  title: "Social Media",
  features: ["Social Media Strategy", "Content Calendar & Posting", "Community Management", "Influencer Collaborations", "Ad Creative Design", "Reels & Short-Form Video"],
  href: "/social-media-design-agency-bangalore",
  color: "from-[hsl(var(--brand-orange))] to-[hsl(var(--brand-orange)/0.8)]",
}, {
  icon: Sparkles,
  title: "Design",
  features: ["Brand Identity Design", "Marketing Collaterals", "Presentation Design", "Packaging Design", "Logo & Visual Identity", "Print & Digital Assets"],
  href: "/graphic-design-agency-bangalore",
  color: "from-[hsl(var(--brand-orange))] to-[hsl(var(--brand-orange)/0.8)]",
}, {
  icon: Globe,
  title: "Web Design",
  features: ["High-Converting Landing Pages", "Corporate & Brand Websites", "E-commerce Development", "UI/UX Design", "CRO Optimization", "Speed & Core Web Vitals"],
  href: "/web-design-company-bangalore",
  color: "from-[hsl(var(--brand-orange))] to-[hsl(var(--brand-orange)/0.8)]",
}];

const whyChooseUs = [{
  icon: Users,
  title: "30+ Expert Marketers",
  description: "A dedicated team of digital marketing specialists with 10+ years of combined experience"
}, {
  icon: Bot,
  title: "AI-Powered Strategies",
  description: "We use AI tools and automation to deliver smarter, faster marketing results"
}, {
  icon: BarChart3,
  title: "Data-Driven Growth",
  description: "Every campaign is backed by analytics, A/B testing, and measurable ROI"
}, {
  icon: Zap,
  title: "Fast & Flexible",
  description: "Rapid execution with transparent reporting and no long-term lock-ins"
}];

const Home = () => {
  return <>
    <Helmet>
      <title>AI Digital Marketing Agency in Bangalore | The Super 30</title>
      <meta name="description" content="The Super 30 is an AI-powered digital marketing agency in Bangalore. We offer SEO, performance marketing, social media, web design & full-funnel growth strategies." />
      <meta name="keywords" content="digital marketing agency, digital marketing agency bangalore, AI digital marketing, performance marketing, SEO agency bangalore, social media marketing, web design bangalore" />
      <link rel="canonical" href="https://www.thesuper30.ai/" />
      <meta property="og:title" content="AI Digital Marketing Agency in Bangalore | The Super 30" />
      <meta property="og:description" content="The Super 30 is an AI-powered digital marketing agency offering SEO, ads, social media, web design & growth strategies. Trusted by 300+ brands." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.thesuper30.ai/" />
      <meta property="og:image" content="https://www.thesuper30.ai/og-image.jpg" />
      <meta property="og:site_name" content="The Super 30" />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AI Digital Marketing Agency in Bangalore | The Super 30" />
      <meta name="twitter:description" content="AI-powered digital marketing agency offering SEO, performance marketing, social media & web design. Trusted by 300+ brands across India." />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="The Super 30" />
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bangalore" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "The Super 30",
          "url": "https://www.thesuper30.ai/",
          "logo": "https://www.thesuper30.ai/logo.png",
          "description": "AI-powered digital marketing agency in Bangalore offering SEO, performance marketing, social media, web design and growth strategies.",
          "address": { "@type": "PostalAddress", "addressLocality": "Bangalore", "addressCountry": "IN" },
          "sameAs": []
        })}
      </script>
    </Helmet>

    <Navbar />

    <main className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section id="home-hero" className="relative overflow-hidden min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex items-center bg-background">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear_gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        </div>

        <div className="container relative mx-auto px-3 md:px-4 py-6 md:py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 bg-background/95 border border-brand/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 icon-bg-glow rounded-full">
                  <Award className="w-3 h-3 md:w-3.5 md:h-3.5 text-brand" />
                </div>
                <span className="text-xs md:text-sm font-medium text-foreground">#1 AI Digital Marketing Agency in India</span>
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-brand" />
              </div>

              <h1 className="font-bold text-foreground">
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand leading-[1.3] pb-1">
                  AI-Powered Digital
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.3]">
                  Marketing Agency
                </span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                From SEO to performance ads, social media to web design — we combine AI and human expertise to drive measurable growth. Trusted by 300+ brands across India.
              </p>

              {/* Platform Logos - simplified inline SVGs kept */}
              <div className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start flex-wrap">
                <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Platforms We Master:</span>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-border/50" title="Google">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  </div>
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-border/50" title="Meta">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5"><path fill="#0081FB" d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/></svg>
                  </div>
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-border/50" title="WhatsApp">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5"><path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-border/50" title="LinkedIn">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5"><path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </div>
                  <div className="h-7 md:h-8 px-2 md:px-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-sm" title="100+ Tools">
                    <span className="text-[10px] md:text-xs font-bold text-white">100+ Tools</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                <Link to="/ai-seo-agency-bangalore">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-sm md:text-base px-6 md:px-8">
                    <Search className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Get a Free Strategy Call
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/performance-marketing">
                  <Button size="lg" variant="outline" className="border-2 bg-background/95 hover:bg-muted/50 hover:-translate-y-0.5 transition-[transform,background-color] duration-200 w-full sm:w-auto text-sm md:text-base px-6 md:px-8">
                    <MousePointerClick className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Performance Marketing
                  </Button>
                </Link>
              </div>
            </div>

            {/* Dashboard Preview - lazy loaded */}
            <div className="hidden lg:block">
              <Suspense fallback={<div className="w-full aspect-[4/3] bg-muted/30 rounded-2xl animate-pulse" />}>
                <HeroDashboardPreview />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        {/* Client Logos */}
        <LazySection minHeight="200px">
          <ClientLogosSection />
        </LazySection>

        {/* Why Choose Us - kept inline since it's light */}
        <section id="home-why-us" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-accent text-primary rounded-full text-sm font-medium mb-4">
                Why Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Why Brands Choose The Super 30
              </h2>
              <p className="text-lg text-muted-foreground">
                We're a full-service AI digital marketing agency in Bangalore that combines technology, creativity, and data to deliver real business growth.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => <Card key={index} className="bento-card group hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 icon-bg-glow rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-brand transition-all duration-300">
                    <item.icon className="w-7 h-7 text-brand group-hover:text-white transition-colors duration-200" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>)}
            </div>
          </div>
        </section>

        <LazySection minHeight="400px">
          <ServicesCarousel services={services} />
        </LazySection>

        <LazySection minHeight="300px">
          <WhoIsThisForSection />
        </LazySection>

        <LazySection minHeight="400px">
          <TestimonialSection />
        </LazySection>

        <LazySection minHeight="300px">
          <BlogSection />
        </LazySection>

        <LazySection minHeight="200px">
          <UnifiedCTASection />
        </LazySection>
      </Suspense>

      <Footer />
    </main>
  </>;
};

export default Home;
