import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";


import { Bot, Target, Users, Zap, BarChart3, Sparkles, Megaphone, Palette, Globe } from "lucide-react";

// Lazy load all below-fold sections
const UnifiedCTASection = lazy(() => import("@/components/landing/UnifiedCTASection").then(m => ({ default: m.UnifiedCTASection })));
const ClientLogosSection = lazy(() => import("@/components/landing/ClientLogosSection").then(m => ({ default: m.ClientLogosSection })));
const TestimonialSection = lazy(() => import("@/components/landing/TestimonialSection").then(m => ({ default: m.TestimonialSection })));
const BlogSection = lazy(() => import("@/components/landing/BlogSection").then(m => ({ default: m.BlogSection })));
const FAQSection = lazy(() => import("@/components/landing/FAQSection").then(m => ({ default: m.FAQSection })));
const WhoIsThisForSection = lazy(() => import("@/components/landing/WhoIsThisForSection").then(m => ({ default: m.WhoIsThisForSection })));
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
  const { loading, handleFormSubmit } = useLeadSubmit({
    source: "home",
    formId: "home-hero-form",
    formName: "Home Page Consultation",
  });

  return <>
    <Helmet>
      <title>Digital Marketing Agency &amp; AI Growth Company | TheSuper30</title>
      <meta name="description" content="A leading AI-driven digital marketing agency helping businesses achieve real ROI and scalable growth with proven strategies. Book a free consultation now." />
      <meta name="keywords" content="Digital Marketing Agency, Digital Marketing Company, AI digital marketing agency, AI Digital Marketing Company, AI based digital marketing agency" />
      <link rel="canonical" href="https://www.thesuper30.ai/" />
      <meta property="og:title" content="Stop Guessing. Start Growing With AI-Powered Marketing." />
      <meta property="og:description" content="From strategy to execution, Super 30 delivers proven 10x revenue growth. Book your free call now!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.thesuper30.ai/" />
      <meta property="og:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Stop Guessing. Start Growing With AI-Powered Marketing." />
      <meta name="twitter:description" content="From strategy to execution, Super 30 delivers proven 10x revenue growth. Book your free call now!" />
      <meta name="twitter:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" />
      <meta name="twitter:url" content="https://www.thesuper30.ai/" />
      <meta name="robots" content="index, follow" />
    </Helmet>

    <Navbar />

    <main className="min-h-screen pt-16 md:pt-20">
      <div id="home-hero">
        <HeroSection onSubmit={handleFormSubmit} loading={loading} />
      </div>

      <Suspense fallback={null}>
        {/* Client Logos */}
        <ClientLogosSection />

        {/* Why Choose Us - kept inline since it's light */}
        <section id="home-why-us" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-accent text-primary rounded-full text-sm font-medium mb-4">
                Why Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Why We Are the Preferred AI Digital Marketing Company for Rapid Growth
              </h2>
              <p className="text-lg text-muted-foreground">
                We combine human creativity with machine learning. This facilitates our digital marketing company in predicting market trends and optimizing your brand to get more profitable in real-time with our AI tools.
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

        <ServicesCarousel services={services} />
        <WhoIsThisForSection />
        <TestimonialSection />
        <BlogSection />
        <UnifiedCTASection
          variant="dark"
          headline="Work with a Growth-Oriented AI Digital Marketing Agency Today"
          subtext="We are a seasoned AI-Powered digital marketing company with a legacy of building advanced strategies that focus on growth that drives traffic, conversions, and revenues. We offer a free brand audit with our team of 30 experts to build a plan that helps you focus on your growth."
          primaryCTA={{ label: "Get My Free Brand Audit", href: "/seo-company-bangalore" }}
          secondaryCTA={{ label: "Explore Our Services", href: "/digital-marketing-agency-bangalore" }}
        />
        <FAQSection slug="home" />
      </Suspense>

      <Footer />
    </main>
  </>;
};

export default Home;
