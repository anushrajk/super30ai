import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { UnifiedCTASection } from "@/components/landing/UnifiedCTASection";
import { LeadCaptureForm } from "@/components/landing/LeadCaptureForm";
import { TrustBanner } from "@/components/work/TrustBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLead } from "@/hooks/useLead";
import { useSession } from "@/hooks/useSession";
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  Users,
  ExternalLink,
  Filter,
} from "lucide-react";

const filters = ["All", "AI SEO", "Performance Marketing", "E-commerce", "B2B", "SaaS"];

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Brand",
    industry: "Fashion & Apparel",
    category: ["AI SEO", "E-commerce"],
    results: [
      { metric: "Organic Traffic", value: "+340%" },
      { metric: "Revenue", value: "+₹2.1Cr" },
      { metric: "AI Citations", value: "45+" },
    ],
    description: "Transformed a struggling D2C brand into an AI search leader with comprehensive SEO strategy.",
    image: "bg-gradient-to-br from-pink-500 to-rose-600",
  },
  {
    id: 2,
    title: "SaaS Platform",
    industry: "HR Tech",
    category: ["Performance Marketing", "SaaS", "B2B"],
    results: [
      { metric: "ROAS", value: "5.2x" },
      { metric: "Leads", value: "+180%" },
      { metric: "CAC Reduction", value: "-45%" },
    ],
    description: "Scaled paid acquisition while reducing cost per qualified lead through AI-powered optimization.",
    image: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Healthcare Startup",
    industry: "HealthTech",
    category: ["AI SEO", "B2B"],
    results: [
      { metric: "Domain Authority", value: "18→52" },
      { metric: "Organic Leads", value: "+290%" },
      { metric: "LLM Mentions", value: "120+" },
    ],
    description: "Built authority in a competitive space through strategic AI SEO and content optimization.",
    image: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
  {
    id: 4,
    title: "FinTech Company",
    industry: "Financial Services",
    category: ["Performance Marketing", "B2B"],
    results: [
      { metric: "Lead Quality", value: "+85%" },
      { metric: "Conv. Rate", value: "3.2x" },
      { metric: "Cost/Lead", value: "-60%" },
    ],
    description: "Optimized LinkedIn and Google Ads campaigns for B2B lead generation in finance sector.",
    image: "bg-gradient-to-br from-violet-500 to-purple-600",
  },
  {
    id: 5,
    title: "Real Estate Portal",
    industry: "PropTech",
    category: ["AI SEO", "Performance Marketing"],
    results: [
      { metric: "Organic Traffic", value: "+520%" },
      { metric: "Listings Inquiries", value: "+410%" },
      { metric: "Brand Searches", value: "+180%" },
    ],
    description: "Full-funnel marketing combining AI SEO with retargeting for maximum lead capture.",
    image: "bg-gradient-to-br from-amber-500 to-orange-600",
  },
  {
    id: 6,
    title: "EdTech Platform",
    industry: "Education",
    category: ["Performance Marketing", "SaaS"],
    results: [
      { metric: "Student Signups", value: "+350%" },
      { metric: "Meta ROAS", value: "4.8x" },
      { metric: "Brand Awareness", value: "+200%" },
    ],
    description: "Scaled student acquisition through strategic Meta and YouTube advertising campaigns.",
    image: "bg-gradient-to-br from-cyan-500 to-teal-600",
  },
];

const aggregateStats = [
  { value: "₹50Cr+", label: "Revenue Generated for Clients" },
  { value: "300+", label: "Successful Projects" },
  { value: "4.2x", label: "Average ROAS" },
  { value: "280%", label: "Avg. Traffic Growth" },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { createLead, loading } = useLead();
  const { session } = useSession();

  const filteredStudies = caseStudies.filter((study) => {
    if (activeFilter === "All") return true;
    return study.category.includes(activeFilter);
  });

  const handleFormSubmit = async (data: { website_url: string; email: string; phone?: string; role?: string; monthly_revenue?: string }) => {
    await createLead(data, session?.id);
  };

  return (
    <>
      <Helmet>
        <title>Our Work | The Super 30 - Case Studies & Portfolio</title>
        <meta
          name="description"
          content="Explore our portfolio of successful AI SEO and Performance Marketing campaigns. Real results from real clients."
        />
        <link rel="canonical" href="https://aiseoserviceagencybangalore.lovable.app/work" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section with Form */}
        <section className="relative bg-background overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-background to-background" />
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-orange-600/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          <div className="container relative mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-4 py-1.5 rounded-full mb-6">
                  <BarChart3 className="w-4 h-4 text-orange-600" />
                  <span className="text-orange-700 text-sm font-medium">Our Work</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                  Results That{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Speak
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8">
                  Real results from real clients. See how we've helped 300+ businesses grow with AI-powered marketing strategies.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                  {aggregateStats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="p-4 bg-muted/30 rounded-xl border border-border/50">
                      <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Form */}
              <div className="lg:pl-8">
                <LeadCaptureForm onSubmit={handleFormSubmit} loading={loading} />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <TrustBanner />

        {/* Stats Section */}
        <section className="py-16 bg-muted/30 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {aggregateStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Case Studies Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study) => (
                <Card
                  key={study.id}
                  className="bg-background border-border/50 hover:border-orange-500/50 hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                >
                  {/* Image placeholder */}
                  <div className={`h-48 ${study.image} flex items-center justify-center relative overflow-hidden`}>
                    <span className="text-white/80 text-6xl font-bold opacity-30">
                      {study.title[0]}
                    </span>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {study.category.slice(0, 2).map((cat) => (
                        <span
                          key={cat}
                          className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full font-medium"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-1">{study.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{study.industry}</p>

                    <p className="text-muted-foreground text-sm mb-4">{study.description}</p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg font-bold text-orange-500">{result.value}</div>
                          <p className="text-xs text-muted-foreground">{result.metric}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <UnifiedCTASection
          headline="Want Results Like These?"
          subtext="Let's discuss how we can achieve similar results for your business."
          primaryCTA={{ label: "Get Free Audit", href: "/ai-seo" }}
          secondaryCTA={{ label: "Contact Us", href: "/contact" }}
        />

        <Footer />
      </main>
    </>
  );
};

export default Work;
