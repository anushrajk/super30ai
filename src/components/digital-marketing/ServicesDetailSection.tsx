import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Palette, FileText, MessageSquare, Video, Monitor, Plus, Minus } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    number: "01",
    title: "Digital\nMarketing",
    description: "End-to-end digital marketing — from AI-powered SEO and Google Ads to social media strategy. We drive qualified traffic, generate leads, and scale your ROI across every channel.",
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
    title: "Design\nServices",
    description: "From brand identities to scroll-stopping social media creatives and intuitive UI/UX — our design team builds visual systems that make your brand impossible to ignore.",
    subServices: [
      { label: "UI / UX", href: "/ui-ux-design-agency-bangalore" },
      { label: "Social Media Posts", href: "/social-media-design-agency-bangalore" },
      { label: "Logo Design", href: "/logo-design-company-bangalore" },
      { label: "Brand Kit", href: "/branding-agency-bangalore" },
    ],
    href: "/graphic-design-agency-bangalore",
  },
  {
    icon: FileText,
    number: "03",
    title: "Content\nMarketing",
    description: "SEO-optimised blogs, persuasive website copy, video scripts, and guest posts — content that ranks, educates, and converts at every stage of the funnel.",
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
    title: "SMS &\nMessaging",
    description: "Reach customers where they are — WhatsApp Business API, AI chatbots, SMS campaigns, and RCS messaging for real-time engagement and higher open rates.",
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
    title: "Production\nStudio",
    description: "Professional video production and photography for ads, social media, and brand storytelling — from concept and scripting to shoot and post-production.",
    subServices: [
      { label: "Video Production", href: "/video-production-agency-bangalore" },
      { label: "Photography", href: "/photography-services-bangalore" },
    ],
    href: "/contact",
  },
  {
    icon: Monitor,
    number: "06",
    title: "Website\nDesign",
    description: "Fast, mobile-first, SEO-ready websites that convert. Custom builds, WordPress, e-commerce, and ongoing maintenance — all with CRO baked in from the first wireframe.",
    subServices: [
      { label: "Website Development", href: "/web-design-company-bangalore" },
      { label: "E-commerce Website", href: "/ecommerce-website-development-bangalore" },
      { label: "WordPress Website", href: "/wordpress-development-company-bangalore" },
      { label: "Website Maintenance", href: "/website-maintenance-services-bangalore" },
    ],
    href: "/web-design-company-bangalore",
  },
];

const ServiceCard = ({ service, isOpen, onToggle }: { service: typeof services[0]; isOpen: boolean; onToggle: () => void }) => (
  <div className="bg-foreground border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] animate-fade-in">
    {/* Number */}
    <div>
      <span className="text-xs text-gray-500 font-mono mb-4 block">{service.number}</span>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight whitespace-pre-line mb-4">
        {service.title}
      </h3>

      {/* Sub-service chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        {service.subServices.map((sub, i) => (
          <Link
            key={i}
            to={sub.href}
            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] sm:text-xs text-gray-300 hover:bg-brand/10 hover:text-brand hover:border-brand/30 transition-colors"
          >
            {sub.label}
          </Link>
        ))}
      </div>
    </div>

    {/* Expand button */}
    <div>
      <button
        onClick={onToggle}
        className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white transition-transform hover:scale-105"
        aria-label={isOpen ? "Collapse" : "Expand"}
      >
        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </button>

      {/* Expanded content */}
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-white/10 animate-fade-in">
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">{service.description}</p>
          <Link
            to={service.href}
            className="inline-flex items-center gap-1.5 text-brand font-semibold text-xs sm:text-sm group"
          >
            Learn more <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  </div>
);

export const ServicesDetailSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <span className="inline-block px-3 py-1 bg-brand/20 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/30">
            Our Digital Marketing Services in Bangalore
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 text-white">
            End-to-End <span className="text-brand">Digital Marketing Services</span> Built for Growth
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            Every service is delivered in-house by certified specialists — no freelancer outsourcing, no black-box reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
