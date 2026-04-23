import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Palette, FileText, MessageSquare, Video, Monitor, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

import digitalMarketingImg from "@/assets/services/digital-marketing.jpg";
import designServicesImg from "@/assets/services/design-services.jpg";
import contentMarketingImg from "@/assets/services/content-marketing.jpg";
import smsMessagingImg from "@/assets/services/sms-messaging.jpg";
import productionStudioImg from "@/assets/services/production-studio.jpg";
import websiteDesignImg from "@/assets/services/website-design.jpg";

const services = [
  {
    icon: TrendingUp,
    number: "01",
    title: "Digital Marketing",
    description: "End-to-end digital marketing — from AI-powered SEO and Google Ads to social media strategy. We drive qualified traffic, generate leads, and scale your ROI across every channel.",
    image: digitalMarketingImg,
    eyebrow: "Growth Engine",
    metrics: ["300%+ Growth", "Multi-channel attribution", "30+ in-house experts"],
    subServices: [
      { label: "AI SEO", href: "/seo-company-bangalore" },
      { label: "Lead Generation", href: "/lead-generation-agency-bangalore" },
      { label: "Social Media Marketing", href: "/social-media-design-agency-bangalore" },
      { label: "Google Ads", href: "/google-ads-agency-bangalore" },
      { label: "Social Media Optimisation", href: "/social-media-optimization-services-bangalore" },
    ],
    href: "/digital-marketing-agency-bangalore",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design Services",
    description: "From brand identities to scroll-stopping social media creatives and intuitive UI/UX — our design team builds visual systems that make your brand impossible to ignore.",
    image: designServicesImg,
    eyebrow: "Visual Identity",
    metrics: ["Brand systems", "Creative production", "UI/UX direction"],
    subServices: [
      { label: "UI / UX Design", href: "/ui-ux-design-agency-bangalore" },
      { label: "Social Media Posts", href: "/social-media-design-agency-bangalore" },
      { label: "Logo Design", href: "/logo-design-company-bangalore" },
      { label: "Brand Kit", href: "/branding-agency-bangalore" },
    ],
    href: "/graphic-design-agency-bangalore",
  },
  {
    icon: FileText,
    number: "03",
    title: "Content Marketing",
    description: "SEO-optimised blogs, persuasive website copy, video scripts, and guest posts — content that ranks, educates, and converts at every stage of the funnel.",
    image: contentMarketingImg,
    eyebrow: "Content That Converts",
    metrics: ["Search-led content", "Authority building", "Funnel messaging"],
    subServices: [
      { label: "Website Content", href: "/seo-content-writing-services-bangalore" },
      { label: "Blog Writing", href: "/blog-writing-services-bangalore" },
      { label: "Script Writing", href: "/script-writing-agency-bangalore" },
      { label: "Guest Posting", href: "/guest-posting-agency-bangalore" },
    ],
    href: "/contact",
  },
  {
    icon: MessageSquare,
    number: "04",
    title: "SMS & Messaging",
    description: "Reach customers where they are — WhatsApp Business API, AI chatbots, SMS campaigns, and RCS messaging for real-time engagement and higher open rates.",
    image: smsMessagingImg,
    eyebrow: "Direct Response",
    metrics: ["Instant delivery", "Automated journeys", "High open rates"],
    subServices: [
      { label: "WhatsApp Business API", href: "/whatsapp-marketing-company-bangalore" },
      { label: "Chatbot", href: "/chatbot-development-company-bangalore" },
      { label: "Customer Engagement", href: "/customer-engagement-agency-bangalore" },
      { label: "SMS Gateway", href: "/sms-gateway-service-bangalore" },
      { label: "RCS Messaging", href: "/rcs-messaging-provider-bangalore" },
    ],
    href: "/contact",
  },
  {
    icon: Video,
    number: "05",
    title: "Production Studio",
    description: "Professional video production and photography for ads, social media, and brand storytelling — from concept and scripting to shoot and post-production.",
    image: productionStudioImg,
    eyebrow: "Content Studio",
    metrics: ["Ad-ready shoots", "Photo + video", "Post-production"],
    subServices: [
      { label: "Video Production", href: "/video-production-agency-bangalore" },
      { label: "Photography", href: "/photography-services-bangalore" },
    ],
    href: "/contact",
  },
  {
    icon: Monitor,
    number: "06",
    title: "Website Design",
    description: "Fast, mobile-first, SEO-ready websites that convert. Custom builds, WordPress, e-commerce, and ongoing maintenance — all with CRO baked in from the first wireframe.",
    image: websiteDesignImg,
    eyebrow: "Conversion Systems",
    metrics: ["Fast builds", "SEO-ready", "CRO-first UX"],
    subServices: [
      { label: "Website Development", href: "/web-design-company-bangalore" },
      { label: "E-commerce Website", href: "/ecommerce-website-development-bangalore" },
      { label: "WordPress Website", href: "/wordpress-development-company-bangalore" },
      { label: "Website Maintenance", href: "/website-maintenance-services-bangalore" },
    ],
    href: "/web-design-company-bangalore",
  },
] as const;

export const ServicesDetailSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const activeService = services[activeIndex];

  const orderedServices = useMemo(
    () => services.map((_, index) => services[(activeIndex + index) % services.length]),
    [activeIndex],
  );

  const goToPrevious = () => setActiveIndex((current) => (current - 1 + services.length) % services.length);
  const goToNext = () => setActiveIndex((current) => (current + 1) % services.length);

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--brand)/0.14),transparent_32%),radial-gradient(circle_at_bottom_right,hsl(var(--brand)/0.1),transparent_30%)]" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background via-background/80 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 text-brand border border-brand/20 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.02] text-foreground">
              Huge service experiences for brands that want <span className="text-brand">more than one-channel growth</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
              Explore our core verticals through oversized carousel cards, sub-service pills, and image-led layouts built to feel premium and immediate.
            </p>
            <div className="flex items-center gap-3">
              <button onClick={goToPrevious} aria-label="Previous service" className="w-11 h-11 rounded-full border border-border bg-background text-foreground flex items-center justify-center transition-colors hover:border-brand hover:text-brand">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={goToNext} aria-label="Next service" className="w-11 h-11 rounded-full border border-border bg-background text-foreground flex items-center justify-center transition-colors hover:border-brand hover:text-brand">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.25fr)_320px] gap-6 lg:gap-8 items-stretch">
          <article className="relative min-h-[560px] md:min-h-[620px] overflow-hidden rounded-[28px] border border-border/60 bg-foreground text-primary-foreground animate-fade-in">
            <img src={activeService.image} alt={activeService.title} loading="lazy" width={1280} height={860} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/92 to-foreground/66" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary-foreground)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-foreground)/0.08)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30" />

            <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/15 bg-background/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/80 backdrop-blur-sm">
                    <activeService.icon className="w-4 h-4 text-brand" />
                    {activeService.eyebrow}
                  </div>
                  <div className="mt-5 text-primary-foreground/30 text-sm font-medium tracking-[0.25em] uppercase">{activeService.number}</div>
                </div>

                <div className="hidden sm:grid grid-cols-1 gap-2 min-w-[180px]">
                  {activeService.metrics.map((metric) => (
                    <div key={metric} className="rounded-2xl border border-primary-foreground/10 bg-background/10 px-4 py-3 text-sm text-primary-foreground/85 backdrop-blur-sm">
                      {metric}
                    </div>
                  ))}
                </div>
              </div>

              <div className="max-w-2xl">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.02] mb-4">{activeService.title}</h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-primary-foreground/78 max-w-xl mb-6 md:mb-8">{activeService.description}</p>

                <div className="flex flex-wrap gap-2.5 mb-8 md:mb-10 max-w-2xl">
                  {activeService.subServices.map((sub) => (
                    <Link key={sub.label} to={sub.href} className="rounded-full border border-primary-foreground/12 bg-background/10 px-4 py-2.5 text-sm text-primary-foreground/88 backdrop-blur-sm transition-colors hover:border-brand/40 hover:bg-brand/15 hover:text-primary-foreground">
                      {sub.label}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to={activeService.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90">
                    Explore {activeService.title}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button onClick={goToNext} className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/14 bg-background/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:border-primary-foreground/30 hover:bg-background/15">
                    See Next Service
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </article>

          <div className="space-y-3">
            {orderedServices.slice(0, 4).map((service) => {
              const originalIndex = services.findIndex((item) => item.title === service.title);
              const isActive = originalIndex === activeIndex;

              return (
                <button
                  key={service.title}
                  onClick={() => setActiveIndex(originalIndex)}
                  className={`w-full text-left rounded-[24px] border p-4 transition-all duration-500 ${isActive ? "border-brand/30 bg-brand/10 shadow-[0_20px_60px_-35px_hsl(var(--brand)/0.65)]" : "border-border/60 bg-background/80 hover:border-brand/20"}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isActive ? "bg-brand text-primary-foreground" : "bg-muted text-foreground"}`}>
                      <service.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1">{service.number}</div>
                      <h4 className="text-lg font-medium text-foreground mb-1">{service.title}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-8 md:mt-10">
          <div className="flex items-center gap-2">
            {services.map((service, index) => (
              <button key={service.title} aria-label={`Go to ${service.title}`} onClick={() => setActiveIndex(index)} className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-10 bg-brand" : "w-2.5 bg-border"}`} />
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            Auto-looping through <span className="text-foreground font-medium">{services.length} core service clusters</span>
          </p>
        </div>
      </div>
    </section>
  );
};
