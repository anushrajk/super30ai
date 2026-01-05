import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { ClientLogosGrid } from "@/components/work/ClientLogosGrid";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { UnifiedCTASection } from "@/components/landing/UnifiedCTASection";
import { WorkFinalCTASection } from "@/components/work/WorkFinalCTASection";
import { BlogSection } from "@/components/landing/BlogSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { StatsSection, workPageStats } from "@/components/common/StatsSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Award, Users, Search, ArrowRight, MessageCircle } from "lucide-react";
import { BentoBadge } from "@/components/ui/bento-grid";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { AuditChoicePopup } from "@/components/popups/AuditChoicePopup";

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
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [showAuditPopup, setShowAuditPopup] = useState(false);

  const filteredStudies = caseStudies.filter((study) => {
    if (activeFilter === "All") return true;
    return study.category.includes(activeFilter);
  });

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
        {/* Hero Section */}
        <section id="work-hero" className="relative bg-white overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
          </div>

          <div className="container relative mx-auto px-3 md:px-4 py-8 md:py-12 lg:py-16">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              {/* Badge */}
              <BentoBadge>
                <BarChart3 className="w-4 h-4" />
                300+ Success Stories
              </BentoBadge>

              {/* H1 and Description */}
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4">
                  Numbers Don't Lie.{" "}
                  <span className="relative inline-block">
                    <span className="text-brand-gradient">Neither Do We.</span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-gradient rounded-full opacity-50" />
                  </span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Real results from real businesses. See how we've helped 300+ companies{" "}
                  <span className="text-foreground font-semibold">dominate their markets</span> with AI-powered marketing.
                </p>
              </div>

              {/* Trust Signals - Horizontal */}
              <div className="flex flex-wrap justify-center gap-4 py-4">
                {[
                  { icon: TrendingUp, text: "₹50Cr+ Revenue" },
                  { icon: Award, text: "4.2x Avg ROAS" },
                  { icon: Users, text: "300+ Clients" },
                  { icon: BarChart3, text: "92% Retention" },
                ].map((signal, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2"
                  >
                    <signal.icon className="w-4 h-4 text-brand" />
                    <span className="font-medium text-foreground text-sm">{signal.text}</span>
                  </div>
                ))}
              </div>

              {/* Dual CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Button 
                  size="lg" 
                  onClick={() => setShowAuditPopup(true)}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Get Free Audit & Strategy
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => setShowEnquiryPopup(true)}
                  className="border-border text-foreground hover:bg-muted transition-all duration-300 w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Enquire Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Expert credentials */}
              <div className="flex flex-wrap gap-2 justify-center pt-2">
                {["AI SEO Experts", "Performance Marketing", "Data-Driven Results"].map((cred, i) => (
                  <span 
                    key={i}
                    className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-xs font-medium"
                  >
                    <Award className="w-3 h-3 text-brand" />
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <div id="work-logos">
          <ClientLogosSection />
        </div>

        {/* Case Studies Section */}
        <section id="work-cases" className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-3 md:px-4">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-brand-gradient text-white shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Case Studies Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredStudies.map((study) => (
                <Card
                  key={study.id}
                  className="bento-card group overflow-hidden transition-shadow duration-300"
                >
                  {/* Image placeholder */}
                  <div className="h-40 md:h-48 bg-brand-gradient flex items-center justify-center relative overflow-hidden">
                    <span className="text-white/80 text-5xl md:text-6xl font-bold opacity-30">
                      {study.title[0]}
                    </span>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {study.category.slice(0, 2).map((cat) => (
                        <span
                          key={cat}
                          className="badge-brand text-xs"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{study.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3">{study.industry}</p>

                    <p className="text-muted-foreground text-sm mb-4">{study.description}</p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border">
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <div className="text-base md:text-lg font-bold text-brand">{result.value}</div>
                          <p className="text-[10px] md:text-xs text-muted-foreground">{result.metric}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Unified CTA Section - moved above Client Logos Grid */}
        <div id="work-cta">
          <UnifiedCTASection 
            headline="Stop Guessing. Start Dominating."
            subtext="Your competitors are already optimizing for AI search. Get your free visibility audit and discover exactly what you're missing."
            primaryCTA={{ label: "Get Free AI SEO Audit", href: "/ai-seo" }}
            secondaryCTA={{ label: "Free Ads Audit", href: "/performance-marketing" }}
            variant="dark"
          />
        </div>

        {/* Client Logos Grid */}
        <div id="work-client-logos-grid">
          <ClientLogosGrid />
        </div>

        {/* Stats Section */}
        <div id="work-stats">
          <StatsSection stats={workPageStats} className="bg-background border-y-0" />
        </div>

        {/* Testimonials Section */}
        <div id="work-testimonials">
          <TestimonialSection />
        </div>

        {/* Blog Section */}
        <div id="work-blog">
          <BlogSection />
        </div>

        {/* Work Final CTA Section - above FAQ */}
        <div id="work-final-cta">
          <WorkFinalCTASection />
        </div>

        {/* FAQ Section */}
        <div id="work-faq">
          <FAQSection />
        </div>

        <Footer />
      </main>

      {/* Enquiry Popup */}
      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
      <AuditChoicePopup open={showAuditPopup} onOpenChange={setShowAuditPopup} />
    </>
  );
};

export default Work;
