import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Palette, FileText, MessageSquare, Video, Monitor, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";

import digitalMarketingImg from "@/assets/services/performance-marketing-card.jpg";
import designServicesImg from "@/assets/services/design-card.jpg";
import contentMarketingImg from "@/assets/services/content-marketing.jpg";
import smsMessagingImg from "@/assets/services/email-marketing-card.jpg";
import productionStudioImg from "@/assets/services/production-studio.jpg";
import websiteDesignImg from "@/assets/services/web-design-card.jpg";

const services = [
  {
    icon: TrendingUp,
    number: "01",
    title: "Digital Marketing Solutions",
    description: "All-in-one digital marketing solutions, including AI-Powered SEO, Google Ads, and social media strategy. We enhance ROI, leads, and qualified traffic for businesses on all digital channels.",
    image: digitalMarketingImg,
    eyebrow: "GROWTH ENGINE",
    metrics: ["300%+ Growth", "Multi-channel attribution", "30+ in-house experts"],
    highlights: [
      "SEO, ads, and social media managed through one unified strategy",
      "Budget allocation guided by live campaign performance data",
      "Campaign reporting connected directly to lead quality and revenue",
    ],
    subServices: [
      { label: "AI SEO", href: "/seo-company-bangalore" },
      { label: "Lead Generation", href: "/lead-generation-agency-bangalore" },
      { label: "Social Media Marketing", href: "/social-media-design-agency-bangalore" },
      { label: "Google Ads", href: "/google-ads-agency-bangalore" },
      { label: "Social Media Optimization", href: "/social-media-optimization-services-bangalore" },
      { label: "Ecommerce Marketing", href: "/ecommerce-marketing-agency-bangalore" },
    ],
    href: "/digital-marketing-agency-bangalore",
  },
  {
    icon: Palette,
    number: "02",
    title: "Creative Design Services",
    description: "Whether it's a brand identity system, social media creatives, or a user friendly UI UX experience, our design team brings everything together to boost recognition, engagement, and conversions.",
    image: designServicesImg,
    eyebrow: "VISUAL IDENTITY",
    metrics: ["Brand systems", "Creative production", "UI/UX direction"],
    highlights: [
      "Consistent branding across every customer touchpoint",
      "Creative assets designed for paid and organic distribution",
      "Interfaces created to improve usability and conversion rates",
    ],
    subServices: [
      { label: "UI UX Design", href: "/ui-ux-design-agency-bangalore" },
      { label: "Social Media Posts", href: "/social-media-design-agency-bangalore" },
      { label: "Logo Design", href: "/logo-design-company-bangalore" },
      { label: "Brand Kit", href: "/branding-agency-bangalore" },
    ],
    href: "/graphic-design-agency-bangalore",
  },
  {
    icon: FileText,
    number: "03",
    title: "Content Marketing Services",
    description: "SEO-optimized blogs, persuasive website copy, video scripts, and guest posts designed to improve rankings, strengthen authority, and increase conversions across every stage of the customer journey.",
    image: contentMarketingImg,
    eyebrow: "CONTENT THAT CONVERTS",
    metrics: ["Search-led content", "Authority building", "Funnel messaging"],
    highlights: [
      "Long-form content aligned with customer search intent",
      "Landing page copy designed to improve conversion inquiries",
      "Editorial systems created for consistent content publishing",
    ],
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
    title: "SMS & Messaging Solutions",
    description: "Connect with customers through WhatsApp Business API, AI chatbots, SMS campaigns, and RCS messaging designed to improve engagement, response rates, and customer communication performance.",
    image: smsMessagingImg,
    eyebrow: "DIRECT RESPONSE",
    metrics: ["Instant delivery", "Automated journeys", "High open rates"],
    highlights: [
      "Conversational journeys across chat and messaging platforms",
      "Retention campaigns activated through customer behaviour insights",
      "Rapid response systems for customer support and sales teams",
    ],
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
    title: "Creative Production Studio",
    description: "Professional video production and photography services for advertising, social media, and brand storytelling from creative planning and scripting to filming and final content delivery.",
    image: productionStudioImg,
    eyebrow: "CONTENT STUDIO",
    metrics: ["Ad-ready shoots", "Photo + video", "Post-production"],
    highlights: [
      "Creative shoot planning, scripting, and visual direction",
      "Performance-focused visuals for paid and social campaigns",
      "Quick-turnaround editing for continuous content production",
    ],
    subServices: [
      { label: "Video Production", href: "/video-production-agency-bangalore" },
      { label: "Photography", href: "/photography-services-bangalore" },
    ],
    href: "/contact",
  },
  {
    icon: Monitor,
    number: "06",
    title: "Website Design Services",
    description: "Fast, mobile-first, SEO-ready websites designed for conversions. Custom website development, WordPress solutions, e-commerce platforms, and ongoing maintenance created with CRO-focused user experiences from the first wireframe.",
    image: websiteDesignImg,
    eyebrow: "CONVERSION SYSTEMS",
    metrics: ["Fast builds", "SEO-ready", "CRO-first UX"],
    highlights: [
      "Landing pages created around lead generation goals",
      "E-commerce and CMS websites designed with cleaner user experience",
      "SEO structure and conversion strategy integrated from launch",
    ],
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

  // Auto-cycling paused; user can still navigate via tabs, arrows, and dots.
  // useEffect(() => {
  //   const interval = window.setInterval(() => {
  //     setActiveIndex((current) => (current + 1) % services.length);
  //   }, 4800);
  //
  //   return () => window.clearInterval(interval);
  // }, []);

  const activeService = services[activeIndex];

  const goToPrevious = () => setActiveIndex((current) => (current - 1 + services.length) % services.length);
  const goToNext = () => setActiveIndex((current) => (current + 1) % services.length);

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--brand)/0.12),transparent_30%),radial-gradient(circle_at_bottom_right,hsl(var(--brand)/0.08),transparent_28%)]" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 text-brand border border-brand/20 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.02] text-foreground">
              Full-Funnel <span className="text-brand">Marketing Services</span> for Modern Business Growth
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
              Integrated digital marketing services focused on customer acquisition, conversion growth, and scalable brand performance across every channel.
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

        <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
          {services.map((service, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={service.title}
                onClick={() => setActiveIndex(index)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all duration-300 ${isActive ? "border-brand/30 bg-brand/10 text-brand shadow-[0_16px_40px_-28px_hsl(var(--brand)/0.75)]" : "border-border/70 bg-background text-muted-foreground hover:border-brand/20 hover:text-foreground"}`}
              >
                <service.icon className="w-4 h-4" />
                <span className="font-medium">{service.title}</span>
              </button>
            );
          })}
        </div>

        <article className="grid gap-6 lg:gap-8 rounded-[28px] border border-border/60 bg-background/95 p-5 sm:p-6 md:p-8 shadow-[0_30px_90px_-50px_hsl(var(--foreground)/0.18)] animate-fade-in">
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:gap-8">
            <div className="min-w-0 order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  <activeService.icon className="w-4 h-4" />
                  {activeService.eyebrow}
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">{activeService.number}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.04] text-foreground mb-4">
                {activeService.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl mb-6">
                {activeService.description}
              </p>

              <div className="grid gap-3 mb-6 md:mb-8 max-w-xl">
                {activeService.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-muted/40 px-4 py-3">
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2.5 mb-8">
                {activeService.subServices.map((sub) => (
                  <Link key={sub.label} to={sub.href} className="rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground transition-colors hover:border-brand/30 hover:bg-brand/5 hover:text-brand">
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-[24px] border border-border bg-muted/30 aspect-[4/3] lg:aspect-[1.08/1]">
                <img src={activeService.image} alt={activeService.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6 flex flex-col gap-3">
                  <div className="w-fit rounded-2xl border border-white/15 bg-foreground/75 px-4 py-3 backdrop-blur-sm">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand mb-1">Featured Service</div>
                    <div className="text-white text-base sm:text-lg font-medium">{activeService.title}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeService.subServices.slice(0, 3).map((sub) => (
                      <div key={sub.label} className="rounded-full border border-white/15 bg-background/85 px-3 py-2 text-xs font-medium text-foreground backdrop-blur-sm">
                        {sub.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 rounded-[24px] border border-border/70 bg-muted/30 p-4 sm:p-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="min-w-0">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                What you get
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
                {activeService.metrics.map((metric) => (
                  <div key={metric} className="rounded-2xl border border-brand/15 bg-background px-4 py-3 text-sm font-medium text-foreground shadow-[0_10px_30px_-24px_hsl(var(--foreground)/0.28)]">
                    {metric}
                  </div>
                ))}
              </div>
            </div>

            <Link to={activeService.href} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90 lg:min-w-[220px]">
              Explore {activeService.title}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-8 md:mt-10">
          <div className="flex items-center gap-2">
            {services.map((service, index) => (
              <button key={service.title} aria-label={`Go to ${service.title}`} onClick={() => setActiveIndex(index)} className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-10 bg-brand" : "w-2.5 bg-border"}`} />
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            Explore <span className="text-foreground font-medium">{services.length} core service clusters</span>
          </p>
        </div>
      </div>
    </section>
  );
};
