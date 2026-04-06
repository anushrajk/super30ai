import { useState, useRef, useEffect } from "react";
import { LazySection } from "@/components/common/LazySection";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { Button } from "@/components/ui/button";
import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { openThankYouPage } from "@/lib/thankYouRedirect";
import { toast } from "sonner";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import {
  Palette, Layout, Smartphone, PenTool, Layers, Monitor,
  MessageCircle, ArrowRight, TrendingUp, Bot, Award,
  Sparkles, Eye, Zap, Instagram, Globe, Figma, Image,
  MousePointerClick, Heart
} from "lucide-react";

// Portfolio imports
import aadhyaImg from "@/assets/portfolio/aadhya-animatics.png";
import madrabbitImg from "@/assets/portfolio/madrabbit.png";
import isitImg from "@/assets/portfolio/isit.png";
import interiorsImg from "@/assets/portfolio/interiors-and-more.png";
import da360Img from "@/assets/portfolio/digital-academy-360.png";

// ─── Parallax Hook ───
const useParallax = (speed: number = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      setOffset(scrolled * speed);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref, offset };
};

// ─── Hero Section (removed - now using ServiceHeroSection in main page) ───

// ─── Bento Service Cards (like reference image) ───
const serviceCards = [
  {
    title: "UI/UX Design",
    description: "Design experiences that feel effortless, premium, and built to win loyalty.",
    icon: MousePointerClick,
    gradient: "from-[hsl(270,80%,55%)] to-[hsl(290,70%,40%)]",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
    size: "lg" as const,
  },
  {
    title: "Landing Page Design",
    description: "Turn first impressions into momentum with landing pages built to convert.",
    icon: Monitor,
    gradient: "from-[hsl(240,70%,55%)] to-[hsl(260,60%,45%)]",
    colSpan: "md:col-span-2",
    rowSpan: "",
    size: "md" as const,
  },
  {
    title: "Social Media Design",
    description: "Scroll-stopping creatives for Instagram, LinkedIn, Facebook & more.",
    icon: Instagram,
    gradient: "from-[hsl(330,80%,55%)] to-[hsl(350,70%,45%)]",
    colSpan: "md:col-span-2",
    rowSpan: "",
    size: "md" as const,
  },
  {
    title: "Brand Identity",
    description: "Logos, color systems, and guidelines that make your brand unforgettable.",
    icon: Palette,
    gradient: "from-[hsl(18,100%,48%)] to-[hsl(30,90%,40%)]",
    colSpan: "md:col-span-2",
    rowSpan: "",
    size: "md" as const,
  },
  {
    title: "Design for AI Products",
    description: "Design AI experiences that go far beyond chat and feel clear in context.",
    icon: Bot,
    gradient: "from-[hsl(340,75%,55%)] to-[hsl(320,65%,45%)]",
    colSpan: "md:col-span-2",
    rowSpan: "",
    size: "md" as const,
  },
];

const BentoServicesSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="badge-brand mx-auto mb-4">
            <Layers className="w-4 h-4" />
            <span className="text-sm font-medium">Our Design Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need, <span className="text-brand">Designed Right</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From pixel-perfect interfaces to scroll-stopping social creatives — we've got your visual needs covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className={`${card.colSpan} ${card.rowSpan} rounded-3xl p-6 md:p-8 relative overflow-hidden group cursor-pointer
                bg-gradient-to-br ${card.gradient}
                transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
                ${isVisible ? "animate-bento-reveal" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative circles */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-white/5 group-hover:scale-125 transition-transform duration-500" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`font-bold text-white mb-2 ${card.size === "lg" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
                    {card.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-white/70 group-hover:text-white transition-colors text-sm">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Social Media Portfolio (Parallax Grid) ───
const SocialMediaShowcase = () => {
  const { ref: parallaxRef, offset } = useParallax(0.15);
  const [sectionRef, isVisible] = useScrollAnimation<HTMLDivElement>();
  const socialPosts = Array(6).fill(null);

  return (
    <div
      ref={(el) => {
        (sectionRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
        (parallaxRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      className="py-16 md:py-24 bg-muted/30 relative overflow-hidden"
    >
      {/* Parallax background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand/5 blur-3xl"
          style={{ transform: `translateY(${offset * 0.5}px)` }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-brand/3 blur-3xl"
          style={{ transform: `translateY(${-offset * 0.3}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="badge-brand mx-auto mb-4">
            <Instagram className="w-4 h-4" />
            <span className="text-sm font-medium">Social Media Creatives</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Scroll-Stopping <span className="text-brand">Social Designs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We design branded content for Instagram, LinkedIn, Facebook, and every platform your audience lives on.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {socialPosts.map((_, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden border border-border/50 group relative
                transition-all duration-500 hover:-translate-y-2 hover:shadow-xl
                ${isVisible ? "animate-bento-reveal" : "opacity-0"}`}
              style={{
                animationDelay: `${index * 80}ms`,
                transform: `translateY(${index % 2 === 0 ? offset * 0.1 : -offset * 0.1}px)`,
              }}
            >
              <div className="w-full aspect-square bg-muted flex items-center justify-center">
                <Instagram className="w-8 h-8 text-muted-foreground/30" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/social-media-design-agency-bangalore">
            <Button variant="outline-brand" size="lg" className="rounded-xl group">
              View All Social Media Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// ─── Portfolio Case Study Cards (Reference-style horizontal scroll) ───
const portfolioCaseStudies = [
  {
    brand: "Aadhya Animatics",
    description: "Complete web and social media design for a leading video production company. Dark-themed, cinematic visuals that match their creative identity.",
    gradient: "from-blue-600 to-indigo-900",
    textColor: "text-white",
    images: [aadhyaImg, aadhyaImg],
    stat: "+55% Leads",
  },
  {
    brand: "Mad Rabbit Racing",
    description: "Bold, high-energy social creatives and web design for India's premier motorcycle racing academy. Action-packed visuals that drive enrollments.",
    gradient: "from-amber-500 to-yellow-700",
    textColor: "text-white",
    images: [madrabbitImg, madrabbitImg],
    stat: "3x Enrollments",
  },
  {
    brand: "iSit",
    description: "Modern corporate website and social media presence for an IT solutions company. Clean, professional designs that build trust and generate B2B leads.",
    gradient: "from-teal-500 to-cyan-800",
    textColor: "text-white",
    images: [isitImg, isitImg],
    stat: "+70% Traffic",
  },
  {
    brand: "Interiors & More",
    description: "Premium e-commerce design and social creatives for India's largest artificial flowers brand. Elegant visuals that showcase product beauty and drive sales.",
    gradient: "from-amber-700 to-rose-800",
    textColor: "text-white",
    images: [interiorsImg, interiorsImg],
    stat: "2x Sales",
  },
  {
    brand: "Digital Academy 360",
    description: "End-to-end digital branding and social media campaigns for a top digital marketing school. Admission-focused creatives that convert prospective students.",
    gradient: "from-red-500 to-orange-600",
    textColor: "text-white",
    images: [da360Img, da360Img],
    stat: "+90% Admissions",
  },
];

const PortfolioCaseStudySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header row — left-aligned title + right nav */}
        <div className={`flex items-center justify-between mb-10 md:mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-brand rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-widest text-foreground">Featured Projects</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-5 py-2 rounded-full text-sm font-medium">
              Recent Projects
              <span className="w-5 h-5 bg-brand rounded-full flex items-center justify-center text-white text-[10px] font-bold">{portfolioCaseStudies.length}</span>
            </span>
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border-2 border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous"
            >
              <ArrowRight className="w-4 h-4 text-foreground rotate-180" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border-2 border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next"
            >
              <ArrowRight className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {portfolioCaseStudies.map((study, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[260px] sm:w-[320px] md:w-[380px] rounded-3xl overflow-hidden relative group cursor-pointer snap-start
                bg-gradient-to-br ${study.gradient}
                transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
                ${isVisible ? "animate-bento-reveal" : "opacity-0"}`}
              style={{ animationDelay: `${index * 120}ms`, aspectRatio: "4/5" }}
            >
              {/* Top content */}
              <div className="p-4 sm:p-6 md:p-8 pb-0 relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-tight leading-tight">{study.brand}</h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5 line-clamp-2 sm:line-clamp-3 max-w-[90%]">
                  {study.description}
                </p>
              </div>

              {/* Device mockups — bottom half */}
              <div className="absolute bottom-0 left-0 right-0 h-[50%] sm:h-[55%] flex items-end justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-end justify-center px-3 sm:px-5">
                  {/* Laptop / Tablet mockup */}
                  <div className="relative w-[90%] mb-0 transform group-hover:scale-[1.04] group-hover:-translate-y-2 transition-all duration-500 z-[1]">
                    <div className="bg-[hsl(var(--foreground))]/90 rounded-t-lg sm:rounded-t-xl p-[2px] sm:p-[3px] shadow-2xl">
                      <div className="rounded-t-md sm:rounded-t-lg overflow-hidden aspect-[4/3] bg-muted">
                        <img
                          src={study.images[0]}
                          alt={`${study.brand} design`}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="bg-[hsl(var(--foreground))]/70 h-1 sm:h-[6px] rounded-b-lg w-[108%] -ml-[4%]" />
                  </div>

                </div>
              </div>

              {/* Stat badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full z-10">
                {study.stat}
              </div>

              {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-28 sm:w-40 h-28 sm:h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Design Process Section ───
const processSteps = [
  { icon: Eye, title: "Discovery", desc: "We learn your brand, audience, and goals to build a clear creative brief." },
  { icon: PenTool, title: "Concept & Wireframes", desc: "Rough ideas become structured layouts. We iterate fast with your feedback." },
  { icon: Figma, title: "Visual Design", desc: "Pixel-perfect designs in Figma — brand-aligned, responsive, and polished." },
  { icon: Zap, title: "Deliver & Iterate", desc: "Final assets delivered in all formats. We refine until you're 100% happy." },
];

const DesignProcessSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="badge-brand mx-auto mb-4">
            <Layers className="w-4 h-4" />
            <span className="text-sm font-medium">How We Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Design <span className="text-brand">Process</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`bento-card p-6 text-center group
                ${isVisible ? "animate-bento-reveal" : "opacity-0"}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="w-14 h-14 icon-bg-glow rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-7 h-7 text-brand" />
              </div>
              <div className="text-xs font-bold text-brand mb-2 uppercase tracking-wider">Step {index + 1}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Stats Section ───
const DesignStatsSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();
  const stats = [
    { value: "100+", label: "Brands Designed" },
    { value: "500+", label: "Social Creatives" },
    { value: "50+", label: "Websites Built" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-brand-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${isVisible ? "animate-bento-reveal" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CTA Section ───
const DesignCTASection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-4 relative text-center">
        <div className="max-w-3xl mx-auto">
          <div className="badge-brand mx-auto mb-4">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Let's Create Together</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to <span className="text-brand">Elevate</span> Your Brand?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Whether it's a single social post or a complete brand overhaul — let's talk about what great design can do for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact-us">
              <Button size="lg" className="bg-brand-gradient text-white px-8 py-3 h-auto rounded-xl group hover:opacity-90">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              variant="outline-brand"
              size="lg"
              onClick={() => setShowEnquiry(true)}
              className="px-8 py-3 h-auto rounded-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
      <EnquiryPopup open={showEnquiry} onOpenChange={setShowEnquiry} />
    </section>
  );
};

// ─── Main Page ───
const Design = () => {
  const { loading, handleFormSubmit } = useLeadSubmit({
    source: 'design',
    formId: 'design-form',
    formName: 'Design Consultation',
  });

  return (
    <>
      <Helmet>
        <title>Design Agency in Bangalore | Graphic Design Services</title>
        <meta name="description" content="Give your brand a bold identity with a creative design agency in Bangalore. Expert graphic design services. 100+ brands, 98% satisfaction. Let's Connect!" />
        <meta name="keywords" content="design agency in bangalore, design company in bangalore, graphic design agency in bangalore, graphic design company in bangalore, creative design agency in bangalore" />
        <link rel="canonical" href="https://www.thesuper30.ai/graphic-design-agency-bangalore" />
        <meta property="og:title" content="100+ Brands Designed. Yours Could Be Next in Line." />
        <meta property="og:description" content="Bold visuals. Strong brand identity. Graphic design that makes your brand impossible to scroll past!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/graphic-design-agency-bangalore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="100+ Brands Designed. Yours Could Be Next in Line." />
        <meta name="twitter:description" content="Bold visuals. Strong brand identity. Graphic design that makes your brand impossible to scroll past!" />
      </Helmet>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <ServiceHeroSection
          badgeIcon={Sparkles}
          badgeText="Creative Design Agency"
          headline={
            <>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand leading-[1.25] pb-1">
                Design That Converts,
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.25]">
                Branding That Lasts
              </span>
            </>
          }
          description={
            <>
              From <span className="text-foreground font-semibold">social media creatives</span> to full UI/UX design systems — we craft visual experiences that drive engagement and build brand authority.
            </>
          }
          trustSignals={[
            { icon: Palette, text: "Brand Identity & Visual Systems" },
            { icon: Layout, text: "UI/UX & Product Design" },
            { icon: Instagram, text: "Social Media Creatives" },
            { icon: Bot, text: "AI-Enhanced Design Workflows" },
          ]}
          credentials={["100+ Brands Designed", "UI/UX Specialists", "Figma & Adobe Suite"]}
          onSubmit={handleFormSubmit}
          loading={loading}
          formTitle="Get Your Free Design Consultation"
          formDescription="Share your brand vision and our creative team will show you how great design can elevate your business."
          formButtonText="Get Free Design Quote"
          formId="lead_capture_design"
          formName="Creative Design Consultation"
        />
        <LazySection minHeight="100px"><DesignStatsSection /></LazySection>
        <LazySection minHeight="400px"><BentoServicesSection /></LazySection>
        <LazySection minHeight="400px"><SocialMediaShowcase /></LazySection>
        <LazySection minHeight="400px"><PortfolioCaseStudySection /></LazySection>
        <LazySection minHeight="400px"><DesignProcessSection /></LazySection>
        <LazySection minHeight="300px"><DesignCTASection /></LazySection>
      </main>
      <Footer />
    </>
  );
};

export default Design;
