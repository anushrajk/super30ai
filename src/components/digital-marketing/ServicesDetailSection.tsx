import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Palette, FileText, MessageSquare, Video, Monitor, ArrowUpRight } from "lucide-react";

import digitalMarketingImg from "@/assets/services/digital-marketing.jpg";
import designServicesImg from "@/assets/services/design-services.jpg";
import contentMarketingImg from "@/assets/services/content-marketing.jpg";
import smsMessagingImg from "@/assets/services/sms-messaging.jpg";
import productionStudioImg from "@/assets/services/production-studio.jpg";
import websiteDesignImg from "@/assets/services/website-design.jpg";

const services = [
  {
    icon: TrendingUp,
    number: "01.",
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
    number: "02.",
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
    number: "03.",
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
    number: "04.",
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
    number: "05.",
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
    number: "06.",
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

const ServiceRow = ({ service, index, isOpen, onToggle }: {
  service: typeof services[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className={`border-b border-border/30 last:border-b-0 transition-colors duration-300 ${isOpen ? "" : "hover:bg-muted/30"}`}>
      {/* Row header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-7 sm:py-8 md:py-10 px-2 md:px-4 text-left group"
      >
        <div className="flex items-center gap-6 md:gap-10">
          <span className="text-muted-foreground/40 text-xs md:text-sm font-medium tracking-widest tabular-nums">
            {service.number}
          </span>
          <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide transition-colors duration-300 ${
            isOpen ? "text-brand" : "text-foreground group-hover:text-brand"
          }`}>
            {service.title}
          </h3>
        </div>
        <div
          className={`w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen
              ? "bg-brand border-brand text-white scale-110"
              : "border border-border/60 text-muted-foreground group-hover:border-brand group-hover:text-brand"
          }`}
        >
          <ArrowUpRight className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
        </div>
      </button>

      {/* Expandable content with smooth grid animation */}
      <div
        className={`grid transition-all duration-500 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-2 md:px-4 pb-8 md:pb-12">
            <div className="bg-foreground rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                {/* Left: Text content */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  {/* Sub-service chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.subServices.map((sub, j) => (
                      <Link
                        key={j}
                        to={sub.href}
                        className="px-4 py-2 bg-white/[0.06] border border-white/10 rounded-full text-xs sm:text-sm text-gray-300 hover:bg-brand/20 hover:text-brand hover:border-brand/40 transition-all duration-200"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed mb-6 max-w-lg">
                    {service.description}
                  </p>

                  {/* Learn more */}
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 text-brand font-semibold text-sm uppercase tracking-wider group/link hover:gap-3 transition-all duration-300"
                  >
                    Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>

                {/* Right: Image */}
                <div className="lg:w-[45%] flex-shrink-0 rounded-xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="w-full h-[200px] sm:h-[260px] md:h-[300px] object-cover transition-transform duration-700 hover:scale-105"
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
    <section className="py-12 md:py-20 lg:py-28 bg-card relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-brand/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14 max-w-5xl mx-auto">
          <div>
            <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-4 border border-brand/20">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground">
              Services <span className="text-brand">We Provide</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md">
            Every service is delivered in-house by certified specialists — no freelancer outsourcing, no black-box reporting.
          </p>
        </div>

        {/* Accordion list */}
        <div className="max-w-5xl mx-auto border-t border-border/30">
          {services.map((service, i) => (
            <ServiceRow
              key={i}
              service={service}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
