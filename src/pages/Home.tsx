import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { UnifiedCTASection } from "@/components/landing/UnifiedCTASection";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { BlogSection } from "@/components/landing/BlogSection";
import { WhoIsThisForSection } from "@/components/landing/WhoIsThisForSection";
import { StatsSection, defaultStats } from "@/components/common/StatsSection";
import { HeroDashboardPreview } from "@/components/home/HeroDashboardPreview";
import { OurWorkCarousel } from "@/components/home/OurWorkCarousel";
import { ArrowRight, Bot, Target, Users, Zap, BarChart3, Search, MousePointerClick, CheckCircle2, Sparkles, Award } from "lucide-react";

const services = [{
  icon: Bot,
  title: "AI SEO Services",
  description: "Dominate Google Search, AI Overviews, and LLM answers with AI-first SEO strategies for scalable growth.",
  features: ["AI Search Optimization", "LLM Visibility", "Intent Mapping", "Technical AI SEO","Entity & Semantic SEO","Generative Search Optimization"],
  href: "/ai-seo",
  color: "from-orange-500 to-orange-600",
  glowColor: "orange"
}, {
  icon: Target,
  title: "Performance Marketing",
  description: "ROI-driven paid ads and performance marketing that turn ad spend into predictable revenue.",
  features: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Programmatic Advertising","YouTube Ads","Remarketing & Retargeting"],
  href: "/performance-marketing",
  color: "from-blue-500 to-blue-600",
  glowColor: "blue"
}];

const whyChooseUs = [{
  icon: Users,
  title: "Team 30",
  description: "Ex-Google strategists with 10+ years of experience"
}, {
  icon: Bot,
  title: "AI-First Approach",
  description: "We leverage AI for optimization, not just talk about it"
}, {
  icon: BarChart3,
  title: "Data-Driven Results",
  description: "Every decision backed by analytics and measurable outcomes"
}, {
  icon: Zap,
  title: "Fast Execution",
  description: "Rapid implementation with no long-term lock-ins"
}];

const Home = () => {
  return <>
    <Helmet>
      <title>The Super 30 | AI-Powered Digital Marketing Agency Bangalore</title>
      <meta name="description" content="The Super 30 is Bangalore's leading AI-powered digital marketing agency. Specializing in AI SEO and Performance Marketing to grow your business." />
      <meta name="keywords" content="digital marketing agency, AI SEO, performance marketing, Bangalore, The Super 30" />
      <link rel="canonical" href="https://aiseoserviceagencybangalore.lovable.app" />
    </Helmet>

    <Navbar />

    <main className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section - Modern & Engaging */}
      <section id="home-hero" className="relative overflow-hidden min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex items-center bg-background">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        </div>

        <div className="container relative mx-auto px-3 md:px-4 py-6 md:py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-4 md:space-y-6">
              {/* Trust Badge - with icon glow */}
              <div className="inline-flex items-center gap-2 bg-background/95 border border-brand/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full animate-fade-in">
                <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 icon-bg-glow rounded-full">
                  <Award className="w-3 h-3 md:w-3.5 md:h-3.5 text-brand" />
                </div>
                <span className="text-xs md:text-sm font-medium text-foreground">#1 AI Marketing Agency in India</span>
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-brand" />
              </div>

              {/* Main Headline */}
              <h1 className="font-bold text-foreground leading-[1.05]">
  <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
    Grow Your Business With
  </span>

  <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent">
    AI-Powered SEO Optimization Services
  </span>
</h1>





              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                We combine AI-driven SEO and performance marketing to deliver predictable business growth — not vanity metrics. Trusted by 300+ brands across India.
              </p>

              {/* Platform Logos */}
              <div className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start flex-wrap">
                <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">30+ Experienced Marketers:</span>
                <div className="flex items-center gap-2 md:gap-3">
                  {/* Google */}
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-border/50" title="Google">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  {/* Meta */}
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-border/50" title="Meta">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5">
                      <path fill="#0081FB" d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
                    </svg>
                  </div>
                  {/* WhatsApp */}
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-border/50" title="WhatsApp">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5">
                      <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  {/* LinkedIn */}
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-border/50" title="LinkedIn">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5">
                      <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  {/* 100+ Tools */}
                  <div className="h-7 md:h-8 px-2 md:px-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-sm" title="100+ Tools">
                    <span className="text-[10px] md:text-xs font-bold text-white">100+ Tools</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                <Link to="/ai-seo">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-sm md:text-base px-6 md:px-8">
                    <Search className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    AI SEO Services
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

            {/* Right Side - Dashboard Preview */}
            <div className="hidden lg:block">
              <HeroDashboardPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos - Moved above services */}
      <div id="home-logos">
        <ClientLogosSection />
      </div>

      {/* Why Choose Us - Moved above services */}
      <section id="home-why-us" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent text-primary rounded-full text-sm font-medium mb-4">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose The Super 30?
            </h2>
            <p className="text-lg text-muted-foreground">
              We’re not just another agency — we’re your growth marketing partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => <Card key={index} className="bento-card group hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 icon-bg-glow rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gradient group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <item.icon className="w-7 h-7 text-brand group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>)}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced Cards */}
      <section id="home-services" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent text-primary rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Two Powerful Services, One Goal
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you need AI-driven organic visibility or ROI-focused paid advertising, we’ve got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="relative bg-background/95 border-2 border-border/50 hover:border-transparent overflow-hidden group transition-[transform,box-shadow,border-color] duration-300 hover:shadow-2xl"
                style={{ transform: "translateZ(0)" }}
              >
                {/* Simplified gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: "2px", margin: "-2px", borderRadius: "inherit" }}>
                  <div className="w-full h-full bg-background rounded-[inherit]" />
                </div>
                
                {/* Simplified glow effect - reduced blur */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-300`} />

                <CardContent className="relative p-8 z-10">
                  {/* Simplified icon */}
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-xl`}>
                    <service.icon className="w-10 h-10 text-white relative z-10" />
                    {/* Simplified icon glow - reduced blur */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300`} />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  {/* Features with staggered animation */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li 
                        key={i} 
                        className="flex items-center gap-2 text-sm text-foreground opacity-80 group-hover:opacity-100 transition-all duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        <div className={`w-5 h-5 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to={service.href}>
                    <Button className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300 text-white`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For? */}
      <div id="home-audience">
        <WhoIsThisForSection />
      </div>

      {/* Our Work Carousel */}
      <div id="home-work">
        <OurWorkCarousel />
      </div>

      {/* Stats Section - Using global component */}
      <div id="home-stats">
        <StatsSection stats={defaultStats} />
      </div>

      <div id="home-testimonials">
        <TestimonialSection />
      </div>

      <div id="home-blog">
        <BlogSection />
      </div>

      <div id="home-cta">
        <UnifiedCTASection />
      </div>

      <Footer />
    </main>
  </>;
};

export default Home;
