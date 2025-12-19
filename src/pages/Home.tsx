import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { UnifiedCTASection } from "@/components/landing/UnifiedCTASection";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { GradientWave } from "@/components/ui/gradient-wave";
import { HeroDashboardPreview } from "@/components/home/HeroDashboardPreview";
import { ArrowRight, Bot, Target, TrendingUp, Users, Award, Zap, BarChart3, Search, MousePointerClick, CheckCircle2, Sparkles, Globe } from "lucide-react";

const services = [{
  icon: Bot,
  title: "AI SEO Services",
  description: "Dominate Google, AI Overviews, and LLM answers with AI-first SEO strategies",
  features: ["AI Search Optimization", "LLM Visibility", "Intent Mapping", "Technical AI SEO"],
  href: "/ai-seo",
  color: "from-orange-500 to-orange-600",
  glowColor: "orange"
}, {
  icon: Target,
  title: "Performance Marketing",
  description: "ROI-driven paid advertising that turns ad spend into predictable revenue",
  features: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Programmatic"],
  href: "/performance-marketing",
  color: "from-blue-500 to-blue-600",
  glowColor: "blue"
}];

const stats = [{
  value: "300+",
  label: "Successful Projects"
}, {
  value: "₹50Cr+",
  label: "Revenue Generated"
}, {
  value: "10+",
  label: "Years Experience"
}, {
  value: "95%",
  label: "Client Retention"
}];

const whyChooseUs = [{
  icon: Bot,
  title: "AI-First Approach",
  description: "We leverage AI for optimization, not just talk about it"
}, {
  icon: BarChart3,
  title: "Data-Driven Results",
  description: "Every decision backed by analytics and measurable outcomes"
}, {
  icon: Users,
  title: "Expert Team",
  description: "Ex-Google strategists with 10+ years of experience"
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
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Gradient Background */}
        <GradientWave colors={["#fed7aa", "#ffffff", "#fdba74", "#fef3c7", "#ffffff"]} />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-orange-600/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: "1s"
        }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-300/30 to-yellow-400/20 rounded-full blur-2xl animate-pulse" style={{
          animationDelay: "2s"
        }} />

        <div className="container relative mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-orange-200 px-4 py-2 rounded-full mb-6 animate-fade-in">
                <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full">
                  <Award className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground">#1 AI Marketing Agency in India</span>
                <Sparkles className="w-4 h-4 text-orange-500" />
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
                Grow Your Business with{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                    AI-Powered
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 4 150 4 198 10" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                        <stop stopColor="#f97316" />
                        <stop offset="1" stopColor="#ea580c" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>{" "}
                Marketing
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                We combine AI SEO and Performance Marketing to deliver predictable growth — not vanity metrics. Trusted by 300+ businesses across India.
              </p>

              {/* Platform Logos */}
              <div className="flex items-center gap-6 justify-center lg:justify-start mb-8">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Certified Partners:</span>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center" title="Google Partner">
                    <Search className="w-4 h-4 text-foreground/70" />
                  </div>
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center" title="Meta Partner">
                    <Globe className="w-4 h-4 text-foreground/70" />
                  </div>
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center" title="LinkedIn Partner">
                    <Users className="w-4 h-4 text-foreground/70" />
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/ai-seo">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-base px-8">
                    <Search className="w-5 h-5 mr-2" />
                    AI SEO Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/performance-marketing">
                  <Button size="lg" variant="outline" className="border-2 bg-background/80 backdrop-blur-sm hover:bg-muted/50 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-base px-8">
                    <MousePointerClick className="w-5 h-5 mr-2" />
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

      {/* Stats Section */}
      <section className="py-16 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>)}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Two Powerful Services, One Goal
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you need organic AI visibility or paid advertising ROI, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="relative bg-background/80 backdrop-blur-xl border-2 border-border/50 hover:border-transparent overflow-hidden group transition-all duration-500 hover:shadow-2xl"
                style={{
                  transform: "perspective(1000px)",
                }}
              >
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: "2px", margin: "-2px", borderRadius: "inherit" }}>
                  <div className="w-full h-full bg-background rounded-[inherit]" />
                </div>
                
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                <CardContent className="relative p-8 z-10">
                  {/* Icon with 3D effect */}
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                    <service.icon className="w-10 h-10 text-white" />
                    {/* Icon glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
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

      <ClientLogosSection />

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose The Super 30?
            </h2>
            <p className="text-lg text-muted-foreground">
              We're not just another agency — we're your growth partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => <Card key={index} className="bg-background border-border/50 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <item.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>)}
          </div>
        </div>
      </section>

      <TestimonialSection />

      <UnifiedCTASection />

      <Footer />
    </main>
  </>;
};

export default Home;
