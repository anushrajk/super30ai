import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Palette, FileText, MessageSquare, Video, Monitor, Plus, Minus } from "lucide-react";

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
    subServices: [
      { label: "Website Development", href: "/web-design-company-bangalore" },
      { label: "E-commerce Website", href: "/ecommerce-website-development-bangalore" },
      { label: "WordPress Website", href: "/wordpress-development-company-bangalore" },
      { label: "Website Maintenance", href: "/website-maintenance-services-bangalore" },
    ],
    href: "/web-design-company-bangalore",
  },
];

const ServiceRow = ({ service, isOpen, onToggle }: {
  service: typeof services[0];
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-border/30 last:border-b-0">
      {/* Row header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 sm:py-7 md:py-8 text-left group"
      >
        <div className="flex items-center gap-5 md:gap-8">
          <span className="text-muted-foreground/30 text-xs font-mono tracking-widest">
            {service.number}
          </span>
          <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wide transition-colors duration-200 ${
            isOpen ? "text-brand" : "text-foreground group-hover:text-brand"
          }`}>
            {service.title}
          </h3>
        </div>
        <div className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
          isOpen ? "bg-brand text-white" : "border border-border/50 text-muted-foreground group-hover:border-brand group-hover:text-brand"
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      {/* Expandable content */}
      <div className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="pb-8 md:pb-10">
            <div className="bg-foreground rounded-2xl p-6 md:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                {/* Left: Text content */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.subServices.map((sub, j) => (
                      <Link
                        key={j}
                        to={sub.href}
                        className="px-3.5 py-1.5 bg-background/[0.06] border border-background/10 rounded-full text-xs text-background/60 hover:bg-brand/20 hover:text-brand hover:border-brand/30 transition-all duration-200"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                  <p className="text-background/40 text-sm leading-relaxed mb-6 max-w-lg">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 text-brand font-semibold text-sm uppercase tracking-wider group/link"
                  >
                    Learn more <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Right: Image */}
                <div className="lg:w-[42%] flex-shrink-0 rounded-xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="w-full h-[200px] sm:h-[240px] md:h-[280px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServicesDetailSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-card relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
            <div>
              <span className="text-brand text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] text-foreground">
                Full-Stack <span className="text-brand">digital marketing services in Bangalore</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              Every service from our <span className="text-foreground font-semibold">digital marketing company in Bangalore</span> is delivered in-house by certified specialists — no freelancer outsourcing, no black-box reporting.
            </p>
          </div>

          {/* Accordion list */}
          <div className="border-t border-border/30">
            {services.map((service, i) => (
              <ServiceRow
                key={i}
                service={service}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
