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

export const ServicesDetailSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground">
            Services <span className="text-brand">We Provide</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md">
            Every service is delivered in-house by certified specialists — no freelancer outsourcing, no black-box reporting.
          </p>
        </div>

        {/* Accordion list */}
        <div className="max-w-5xl mx-auto divide-y divide-border">
          {services.map((service, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`transition-all duration-300 ${isOpen ? "bg-foreground rounded-2xl my-2" : ""}`}
              >
                {/* Row header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full flex items-center justify-between gap-4 py-5 px-4 sm:px-6 text-left group transition-colors ${
                    isOpen ? "text-white" : "text-foreground hover:text-brand"
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-8">
                    <span className={`text-sm font-mono min-w-[28px] ${isOpen ? "text-brand" : "text-muted-foreground"}`}>
                      {service.number}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                      {service.title}
                    </h3>
                  </div>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-brand text-white" : "border border-border text-muted-foreground group-hover:border-brand group-hover:text-brand"
                    }`}
                  >
                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
                  </div>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-6 animate-fade-in">
                    <div className="pl-[44px] sm:pl-[60px]">
                      {/* Sub-service chips */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {service.subServices.map((sub, j) => (
                          <Link
                            key={j}
                            to={sub.href}
                            className="px-4 py-2 bg-white/10 border border-white/15 rounded-full text-xs sm:text-sm text-gray-300 hover:bg-brand/20 hover:text-brand hover:border-brand/40 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>

                      {/* Description + Learn more */}
                      <div className="mb-5">
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <Link
                          to={service.href}
                          className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm group/link"
                        >
                          Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>

                      {/* Full-width landscape image */}
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        width={800}
                        height={512}
                        className="w-full h-[200px] sm:h-[280px] md:h-[340px] object-cover rounded-xl"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
