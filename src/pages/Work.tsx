import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { ClientLogosGrid } from "@/components/work/ClientLogosGrid";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { BlogSection } from "@/components/landing/BlogSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { StatsSection, workPageStats } from "@/components/common/StatsSection";
import { LeadCaptureForm } from "@/components/landing/LeadCaptureForm";
import { Card, CardContent } from "@/components/ui/card";
import { useLead } from "@/hooks/useLead";
import { useSession } from "@/hooks/useSession";
import { toast } from "sonner";
import { BarChart3, TrendingUp, Award, Users } from "lucide-react";
import { BentoBadge } from "@/components/ui/bento-grid";

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
  const navigate = useNavigate();
  const { createLead, sendLeadEmail, loading } = useLead();
  const { session } = useSession();

  const filteredStudies = caseStudies.filter((study) => {
    if (activeFilter === "All") return true;
    return study.category.includes(activeFilter);
  });

  const handleFormSubmit = async (data: { website_url: string; email: string; phone?: string; role?: string; monthly_revenue?: string }) => {
    try {
      const leadData = {
        website_url: data.website_url,
        email: data.email,
        role: data.role,
        monthly_revenue: data.monthly_revenue,
        step: 1
      };

      const newLead = await createLead(leadData, session?.id);
      
      if (newLead && session) {
        await sendLeadEmail(
          { ...leadData, step: 1 },
          session,
          "Work Page - Free AI SEO Audit Request"
        );
      }

      toast.success("Analyzing your website...");
      navigate("/audit", { state: { leadId: newLead?.id } });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    }
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
        <section id="work-hero" className="relative bg-background overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-background to-background" />
            
            {/* Animated orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-brand/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-brand/10 rounded-full blur-3xl" />
          </div>

          <div className="container relative mx-auto px-3 md:px-4 py-8 md:py-12 lg:py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Left Column - Content */}
              <div className="md:col-span-1 lg:col-span-7 space-y-4 md:space-y-6">
                {/* Badge */}
                <BentoBadge>
                  <BarChart3 className="w-4 h-4" />
                  300+ Success Stories
                </BentoBadge>

                {/* H1 and Description */}
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4">
                    Numbers Don't Lie.{" "}
                    <span className="relative">
                      <span className="text-brand-gradient">Neither Do We.</span>
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-gradient rounded-full opacity-50" />
                    </span>
                  </h1>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                    Real results from real businesses. See how we've helped 300+ companies{" "}
                    <span className="text-foreground font-semibold">dominate their markets</span> with AI-powered marketing.
                  </p>
                </div>

                {/* Trust Signals */}
                <div className="flex flex-col gap-3 py-2">
                  {[
                    { icon: TrendingUp, text: "₹50Cr+ Revenue Generated" },
                    { icon: Award, text: "Average 4.2x ROAS Across Clients" },
                    { icon: Users, text: "300+ Businesses Transformed" },
                    { icon: BarChart3, text: "92% Client Retention Rate" },
                  ].map((signal, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 group cursor-default"
                    >
                      <div className="w-7 h-7 icon-bg-glow rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gradient group-hover:scale-110 transition-all duration-300 shadow-md shadow-brand/20">
                        <signal.icon className="w-3.5 h-3.5 text-brand group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-medium text-foreground text-sm md:text-base">{signal.text}</span>
                    </div>
                  ))}
                </div>

                {/* Expert credentials - Mobile only */}
                <div className="lg:hidden flex flex-wrap gap-2 pt-2">
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

              {/* Right Column - Form */}
              <div className="md:col-span-1 lg:col-span-5">
                <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <LeadCaptureForm onSubmit={handleFormSubmit} loading={loading} />
                </div>
                
                {/* Expert credentials - Desktop only */}
                <div className="hidden lg:flex flex-wrap gap-2 mt-4 justify-center">
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
                      ? "bg-brand-gradient text-white shadow-lg shadow-brand/30"
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
                  className="bento-card group overflow-hidden hover:shadow-brand transition-shadow duration-300"
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

        {/* Client Logos Grid */}
        <div id="work-client-logos-grid">
          <ClientLogosGrid />
        </div>

        {/* Stats Section - moved above Testimonials with white background */}
        <div id="work-stats">
          <StatsSection stats={workPageStats} className="bg-background border-y-0" />
        </div>

        {/* Testimonials Section */}
        <div id="work-testimonials">
          <TestimonialSection />
        </div>

        {/* CTA Section with Form */}
        <div id="work-cta">
          <FinalCTASection onSubmit={handleFormSubmit} loading={loading} />
        </div>

        {/* Blog Section */}
        <div id="work-blog">
          <BlogSection />
        </div>

        {/* FAQ Section */}
        <div id="work-faq">
          <FAQSection />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Work;
