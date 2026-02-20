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

import magicbricksLogo from "@/assets/case-studies/magicbricks.png";
import mamaEarthLogo from "@/assets/case-studies/mamaearth.png";
import upgradLogo from "@/assets/case-studies/upgrad.png";
import tata1mgLogo from "@/assets/case-studies/tata1mg.png";
import shriramLogo from "@/assets/case-studies/shriram-properties.png";
import lancesoftLogo from "@/assets/case-studies/lancesoft.png";
import jainUniversityLogo from "@/assets/case-studies/jain-university.png";
import harvestInternationalLogo from "@/assets/case-studies/harvest-international.png";
import atriaInstituteLogo from "@/assets/case-studies/atria-institute.png";
import bhrighuAcademyLogo from "@/assets/case-studies/bhrighu-academy.png";
import { CaseStudyPopup } from "@/components/home/CaseStudyPopup";

const filters = ["All", "Real Estate", "D2C", "Education", "Healthcare", "Staffing"];

const caseStudies = [
  {
    id: 1,
    title: "Magicbricks",
    industry: "Real Estate",
    category: ["Real Estate"],
    logo: magicbricksLogo,
    results: [
      { metric: "Organic Traffic", value: "+7.3%" },
      { metric: "Keywords", value: "+2.7%" },
      { metric: "Backlinks", value: "+7.3%" },
    ],
    description: "Transformed India's leading real estate portal with comprehensive AI SEO strategy.",
  },
  {
    id: 2,
    title: "Jain University",
    industry: "Education",
    category: ["Education"],
    logo: jainUniversityLogo,
    results: [
      { metric: "Organic Traffic", value: "+81%" },
      { metric: "Keywords", value: "+95%" },
      { metric: "Traffic Share", value: "+20%" },
    ],
    description: "Boosted organic visibility for one of India's leading private universities.",
  },
  {
    id: 3,
    title: "Mamaearth",
    industry: "D2C",
    category: ["D2C"],
    logo: mamaEarthLogo,
    results: [
      { metric: "Organic Traffic", value: "+121%" },
      { metric: "Keywords", value: "+88%" },
      { metric: "Backlinks", value: "0%" },
    ],
    description: "Scaled organic visibility for India's fastest-growing personal care brand.",
  },
  {
    id: 4,
    title: "Harvest International School",
    industry: "Education",
    category: ["Education"],
    logo: harvestInternationalLogo,
    results: [
      { metric: "Organic Traffic", value: "+30%" },
      { metric: "Keywords", value: "+15%" },
      { metric: "Backlinks", value: "0%" },
    ],
    description: "Enhanced digital presence for premier international school in India.",
  },
  {
    id: 5,
    title: "upGrad",
    industry: "Education",
    category: ["Education"],
    logo: upgradLogo,
    results: [
      { metric: "Organic Traffic", value: "+28%" },
      { metric: "Keywords", value: "+25%" },
      { metric: "Traffic Share", value: "+14%" },
    ],
    description: "Built authority in competitive EdTech space through strategic content optimization.",
  },
  {
    id: 6,
    title: "Atria Institute",
    industry: "Education",
    category: ["Education"],
    logo: atriaInstituteLogo,
    results: [
      { metric: "Organic Traffic", value: "+196%" },
      { metric: "Keywords", value: "+51%" },
      { metric: "Backlinks", value: "0%" },
    ],
    description: "Tripled organic traffic for leading technology institute in Bangalore.",
  },
  {
    id: 7,
    title: "Tata 1mg",
    industry: "Healthcare",
    category: ["Healthcare"],
    logo: tata1mgLogo,
    results: [
      { metric: "Organic Traffic", value: "+10%" },
      { metric: "Keywords", value: "+18%" },
      { metric: "Backlinks", value: "0%" },
    ],
    description: "Dominated healthcare search with targeted SEO for India's leading health platform.",
  },
  {
    id: 8,
    title: "Bhrighu Academy",
    industry: "Education",
    category: ["Education"],
    logo: bhrighuAcademyLogo,
    results: [
      { metric: "Organic Traffic", value: "+39,233%" },
      { metric: "Keywords", value: "+2,255%" },
      { metric: "Traffic Share", value: "+70%" },
    ],
    description: "Transformed online presence for astrology education platform from scratch.",
  },
  {
    id: 9,
    title: "Shriram Properties",
    industry: "Real Estate",
    category: ["Real Estate"],
    logo: shriramLogo,
    results: [
      { metric: "Traffic Share", value: "+11%" },
      { metric: "Keywords", value: "+16%" },
      { metric: "Ref. Domains", value: "0%" },
    ],
    description: "Enhanced digital presence for one of South India's premier real estate developers.",
  },
  {
    id: 10,
    title: "Lancesoft",
    industry: "Staffing",
    category: ["Staffing"],
    logo: lancesoftLogo,
    results: [
      { metric: "Organic Traffic", value: "+10%" },
      { metric: "Traffic Share", value: "-35%" },
      { metric: "Keywords", value: "-93%" },
    ],
    description: "Boosted organic reach for global IT staffing and workforce solutions provider.",
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [showAuditPopup, setShowAuditPopup] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null);

  const filteredStudies = caseStudies.filter((study) => {
    if (activeFilter === "All") return true;
    return study.category.includes(activeFilter);
  });

  return (
    <>
      <Helmet>
        <title>Our Work | The Super 30 - Case Studies & Portfolio</title>
        <meta name="description" content="Explore our portfolio of successful AI SEO and Performance Marketing campaigns. Real results from real clients including Magicbricks, Mamaearth & more." />
        <meta name="keywords" content="SEO case studies, digital marketing portfolio, AI SEO results, performance marketing success, client testimonials" />
        <link rel="canonical" href="https://www.thesuper30.ai/seo-results-bangalore" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Case Studies & Portfolio | The Super 30" />
        <meta property="og:description" content="300+ successful campaigns. See real results from clients like Magicbricks, Mamaearth, upGrad & more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/seo-results-bangalore" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies & Portfolio | The Super 30" />
        <meta name="twitter:description" content="300+ successful campaigns. Real results from real clients." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "The Super 30 Case Studies",
            "description": "Portfolio of successful AI SEO and Performance Marketing campaigns",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": 10,
              "itemListElement": caseStudies.slice(0, 5).map((study, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": study.title,
                "description": study.description
              }))
            }
          })}
        </script>
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

      {/* Popups */}
      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
      <AuditChoicePopup open={showAuditPopup} onOpenChange={setShowAuditPopup} />
      {selectedStudy && (
        <CaseStudyPopup
          open={!!selectedStudy}
          onOpenChange={(open) => !open && setSelectedStudy(null)}
          brandName={selectedStudy.title}
          industry={selectedStudy.industry}
          logo={selectedStudy.logo}
        />
      )}
    </>
  );
};

export default Work;
