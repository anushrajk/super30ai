import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import {
  ArrowRight,
  Bot,
  Target,
  TrendingUp,
  Users,
  Award,
  Zap,
  BarChart3,
  Search,
  MousePointerClick,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI SEO Services",
    description:
      "Dominate Google, AI Overviews, and LLM answers with AI-first SEO strategies",
    features: [
      "AI Search Optimization",
      "LLM Visibility",
      "Intent Mapping",
      "Technical AI SEO",
    ],
    href: "/ai-seo",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description:
      "ROI-driven paid advertising that turns ad spend into predictable revenue",
    features: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "Programmatic",
    ],
    href: "/performance-marketing",
    color: "from-blue-500 to-blue-600",
  },
];

const stats = [
  { value: "300+", label: "Successful Projects" },
  { value: "₹50Cr+", label: "Revenue Generated" },
  { value: "10+", label: "Years Experience" },
  { value: "95%", label: "Client Retention" },
];

const whyChooseUs = [
  {
    icon: Bot,
    title: "AI-First Approach",
    description: "We leverage AI for optimization, not just talk about it",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Results",
    description: "Every decision backed by analytics and measurable outcomes",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Ex-Google strategists with 10+ years of experience",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description: "Rapid implementation with no long-term lock-ins",
  },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          The Super 30 | AI-Powered Digital Marketing Agency Bangalore
        </title>
        <meta
          name="description"
          content="The Super 30 is Bangalore's leading AI-powered digital marketing agency. Specializing in AI SEO and Performance Marketing to grow your business."
        />
        <meta
          name="keywords"
          content="digital marketing agency, AI SEO, performance marketing, Bangalore, The Super 30"
        />
        <link rel="canonical" href="https://aiseoserviceagencybangalore.lovable.app" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative bg-background overflow-hidden min-h-[85vh] flex items-center">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-background to-blue-50/50" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/30 to-orange-600/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-blue-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <div className="container relative mx-auto px-4 py-16 lg:py-24">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-4 py-1.5 rounded-full mb-6">
                <Award className="w-4 h-4 text-orange-600" />
                <span className="text-orange-700 text-sm font-medium">
                  #1 AI Marketing Agency in India
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
                Grow Your Business with{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  AI-Powered
                </span>{" "}
                Marketing
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                We combine AI SEO and Performance Marketing to deliver
                predictable growth — not vanity metrics.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/ai-seo">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    AI SEO Services
                  </Button>
                </Link>
                <Link to="/performance-marketing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 hover:bg-muted/50 w-full sm:w-auto"
                  >
                    <MousePointerClick className="w-5 h-5 mr-2" />
                    Performance Marketing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
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
                Whether you need organic AI visibility or paid advertising ROI,
                we've got you covered.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-background border-border/50 hover:border-orange-500/50 hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-orange-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link to={service.href}>
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
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
              {whyChooseUs.map((item, index) => (
                <Card
                  key={index}
                  className="bg-background border-border/50 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                      <item.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <TestimonialSection />

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

          <div className="container relative mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Choose your path to growth. Get a free audit and discover your
              untapped potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ai-seo">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 w-full sm:w-auto"
                >
                  Get Free AI SEO Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/performance-marketing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Free Ads Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Home;
