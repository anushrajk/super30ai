import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { Button } from "@/components/ui/button";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import {
  Palette, Layout, Smartphone, PenTool, Layers, Monitor,
  MessageCircle, ArrowRight, TrendingUp, Bot, Award,
  Sparkles, Eye, Zap, Instagram, Globe, Figma, Image,
  MousePointerClick, Heart
} from "lucide-react";

// Portfolio imports
import socialPost1 from "@/assets/portfolio/social-post-1.jpg";
import socialPost2 from "@/assets/portfolio/social-post-2.jpg";
import socialPost3 from "@/assets/portfolio/social-post-3.jpg";
import socialPost4 from "@/assets/portfolio/social-post-4.jpg";
import socialPost5 from "@/assets/portfolio/social-post-5.jpg";
import socialPost6 from "@/assets/portfolio/social-post-6.jpg";
import webDesign1 from "@/assets/portfolio/web-design-1.jpg";
import webDesign2 from "@/assets/portfolio/web-design-2.jpg";
import webDesign3 from "@/assets/portfolio/web-design-3.jpg";

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

// ─── Hero Section ───
const DesignHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  const trustSignals = [
    { icon: Palette, text: "Brand Identity & Visual Systems" },
    { icon: Layout, text: "UI/UX & Product Design" },
    { icon: Instagram, text: "Social Media Creatives" },
    { icon: Bot, text: "AI-Enhanced Design Workflows" },
  ];

  const credentials = [
    "100+ Brands Designed",
    "UI/UX Specialists",
    "Figma & Adobe Suite",
  ];

  return (
    <section className="relative bg-background overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </div>

      <div className="container relative mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-center">
          {/* Left */}
          <div className="md:col-span-1 lg:col-span-7 space-y-4 md:space-y-6">
            <div className="badge-brand">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Creative Design Agency</span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4 md:mb-5">
                <span className="text-brand">Design</span> That Converts,{" "}
                <span className="text-foreground">Branding That Lasts</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                From <span className="text-foreground font-semibold">social media creatives</span> to full UI/UX design systems — we craft visual experiences that drive engagement and build brand authority.
              </p>
            </div>

            <div className="flex flex-col gap-3 py-2">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center gap-3 group cursor-default">
                  <div className="w-7 h-7 icon-bg-glow rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-md">
                    <signal.icon className="w-3.5 h-3.5 text-brand group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-medium text-foreground text-sm md:text-base">{signal.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/seo-agency-near-me">
                <Button size="lg" className="bg-brand-gradient text-white px-6 py-3 h-auto rounded-xl group hover:opacity-90">
                  <PenTool className="w-5 h-5 mr-2" />
                  Get a Design Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline-brand"
                size="lg"
                onClick={() => setShowEnquiry(true)}
                className="px-6 py-3 h-auto rounded-xl group"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enquire Now
              </Button>
            </div>

            <div className="lg:hidden flex flex-wrap gap-2 pt-2">
              {credentials.map((cred, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-xs font-medium">
                  <Award className="w-3 h-3 text-brand" />
                  {cred}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Portfolio Preview */}
          <div className="md:col-span-1 lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 animate-fade-in" style={{ animationDelay: "200ms" }}>
              {[socialPost1, webDesign1, socialPost2, webDesign2].map((img, i) => (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden border border-border/50 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg ${i === 0 ? "row-span-2" : ""}`}
                >
                  <img
                    src={img}
                    alt={`Design portfolio ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>

            <div className="hidden lg:flex flex-wrap gap-2 mt-4 justify-center">
              {credentials.map((cred, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-xs font-medium">
                  <Award className="w-3 h-3 text-brand" />
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <EnquiryPopup open={showEnquiry} onOpenChange={setShowEnquiry} />
    </section>
  );
};

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
  {
    title: "Web Design & Development",
    description: "Responsive, modern websites built with performance and aesthetics in mind.",
    icon: Globe,
    gradient: "from-[hsl(180,60%,45%)] to-[hsl(200,70%,35%)]",
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
  const socialPosts = [socialPost1, socialPost2, socialPost3, socialPost4, socialPost5, socialPost6];

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
          {socialPosts.map((post, index) => (
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
              <img
                src={post}
                alt={`Social media design ${index + 1}`}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/social-media-post-design">
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

// ─── Web Design / Banner Showcase (Parallax) ───
const WebDesignShowcase = () => {
  const { ref: parallaxRef, offset } = useParallax(0.12);
  const [sectionRef, isVisible] = useScrollAnimation<HTMLDivElement>();
  const webDesigns = [webDesign1, webDesign2, webDesign3];

  return (
    <div
      ref={(el) => {
        (sectionRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
        (parallaxRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="badge-brand mx-auto mb-4">
            <Monitor className="w-4 h-4" />
            <span className="text-sm font-medium">Web & Banner Design</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Websites & Banners That <span className="text-brand">Perform</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            High-converting landing pages, responsive websites, and digital banners crafted with precision.
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {webDesigns.map((design, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden border border-border/50 group relative
                transition-all duration-500 hover:shadow-2xl
                ${isVisible ? "animate-bento-reveal" : "opacity-0"}`}
              style={{
                animationDelay: `${index * 150}ms`,
                transform: `translateY(${offset * 0.05 * (index + 1)}px)`,
              }}
            >
              <img
                src={design}
                alt={`Web design ${index + 1}`}
                className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/web-design-development">
            <Button variant="outline-brand" size="lg" className="rounded-xl group">
              View All Web Design Work
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
    brand: "Magicbricks",
    description: "A complete digital redesign with +40% lead generation uplift. We rebuilt their brand presence across web and social.",
    gradient: "from-emerald-500 to-teal-700",
    textColor: "text-white",
    images: [socialPost1, webDesign1],
    stat: "+40% Leads",
  },
  {
    brand: "Jain University",
    description: "End-to-end brand identity and social media design for one of India's leading universities. Admissions campaigns that convert.",
    gradient: "from-blue-600 to-indigo-800",
    textColor: "text-white",
    images: [socialPost2, webDesign2],
    stat: "2x Engagement",
  },
  {
    brand: "Mamaearth",
    description: "Vibrant D2C creatives across Instagram and Facebook. We designed scroll-stopping visuals that drove massive engagement.",
    gradient: "from-amber-400 to-orange-600",
    textColor: "text-white",
    images: [socialPost3, webDesign3],
    stat: "+65% CTR",
  },
  {
    brand: "Tata 1mg",
    description: "Healthcare UI/UX and marketing creatives. Clean, trustworthy designs that simplified complex health information.",
    gradient: "from-rose-500 to-pink-700",
    textColor: "text-white",
    images: [socialPost4, socialPost5],
    stat: "3x Conversions",
  },
  {
    brand: "+100",
    description: "Design Projects delivered across branding, UI/UX, social media, and web design for startups and enterprises.",
    gradient: "from-violet-600 to-purple-900",
    textColor: "text-white",
    images: [socialPost6, webDesign1],
    isCounter: true,
    stat: "View More Work",
  },
];

const PortfolioCaseStudySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -380 : 380,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-[hsl(var(--background))] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="badge-brand mx-auto mb-4">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Featured Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Work That <span className="text-brand">Speaks</span> for Itself
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real brands. Real results. Explore our portfolio of design work that drove measurable impact.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Nav buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 bg-background border border-border rounded-full items-center justify-center shadow-lg hover:bg-muted transition-colors hidden md:flex"
            aria-label="Scroll left"
          >
            <ArrowRight className="w-5 h-5 text-foreground rotate-180" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 bg-background border border-border rounded-full items-center justify-center shadow-lg hover:bg-muted transition-colors hidden md:flex"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-5 h-5 text-foreground" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {portfolioCaseStudies.map((study, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[300px] md:w-[340px] rounded-3xl overflow-hidden relative group cursor-pointer snap-start
                  bg-gradient-to-br ${study.gradient}
                  transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
                  ${isVisible ? "animate-bento-reveal" : "opacity-0"}`}
                style={{ animationDelay: `${index * 120}ms`, minHeight: "460px" }}
              >
                {/* Top content */}
                <div className="p-6 pb-0 relative z-10">
                  {study.isCounter ? (
                    <div className="mb-2">
                      <span className="text-5xl md:text-6xl font-black text-white/90">{study.brand}</span>
                      <div className="text-lg font-semibold text-white/80 mt-1">Design Projects</div>
                    </div>
                  ) : (
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">{study.brand}</h3>
                  )}
                  <p className="text-white/75 text-sm leading-relaxed mb-4 line-clamp-3">
                    {study.description}
                  </p>
                  {study.isCounter && (
                    <Link to="/seo-results-bangalore">
                      <Button variant="outline-white" size="sm" className="rounded-full text-xs mt-2 group/btn">
                        VIEW MORE WORK
                        <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </div>

                {/* Device mockup area */}
                <div className="absolute bottom-0 left-0 right-0 h-[55%] flex items-end justify-center px-4 pb-0 overflow-hidden">
                  {/* Laptop/tablet mockup */}
                  <div className="relative w-full flex items-end justify-center gap-2">
                    {/* Main device - laptop style */}
                    <div className="relative w-[75%] transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500">
                      <div className="bg-foreground/90 rounded-t-lg p-1 shadow-2xl">
                        <div className="bg-muted rounded-sm overflow-hidden aspect-[4/3]">
                          <img
                            src={study.images[0]}
                            alt={`${study.brand} design`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="bg-foreground/80 h-2 rounded-b-lg mx-auto w-[110%] -ml-[5%]" />
                    </div>

                    {/* Phone mockup */}
                    <div className="absolute -right-2 bottom-2 w-[30%] transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-700 delay-100 z-10">
                      <div className="bg-foreground/90 rounded-xl p-1 shadow-2xl">
                        <div className="bg-muted rounded-lg overflow-hidden aspect-[9/16]">
                          <img
                            src={study.images[1]}
                            alt={`${study.brand} mobile`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stat badge */}
                {!study.isCounter && (
                  <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
                    {study.stat}
                  </div>
                )}

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              </div>
            ))}
          </div>
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
            <Link to="/seo-agency-near-me">
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
  return (
    <>
      <Helmet>
        <title>Design Services | UI/UX, Social Media & Brand Design Agency | Super 30</title>
        <meta name="description" content="Creative design agency offering UI/UX design, social media creatives, brand identity, landing page design, and web design services in Bangalore." />
        <link rel="canonical" href="https://super30ai.lovable.app/design" />
      </Helmet>
      <Navbar />
      <main>
        <DesignHeroSection />
        <DesignStatsSection />
        <BentoServicesSection />
        <SocialMediaShowcase />
        <WebDesignShowcase />
        <DesignProcessSection />
        <DesignCTASection />
      </main>
      <Footer />
    </>
  );
};

export default Design;
