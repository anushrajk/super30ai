import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, MousePointerClick, Share2, FileText, Monitor, ShieldCheck, Plus, Minus } from "lucide-react";

const services = [
  {
    icon: Search,
    number: "01",
    title: "Search Engine\nOptimisation",
    description: "Rank higher, stay longer. Our SEO team combines technical audits, content authority building, and high-quality link acquisition to move your business to Page 1 — and keep it there.",
    subServices: [
      { label: "On-Page SEO", href: "/seo-company-bangalore" },
      { label: "Technical SEO", href: "/seo-company-bangalore" },
      { label: "Link Building", href: "/seo-company-bangalore" },
      { label: "Local SEO", href: "/seo-company-bangalore" },
    ],
    href: "/seo-company-bangalore",
  },
  {
    icon: MousePointerClick,
    number: "02",
    title: "Pay-Per-Click\n& Google Ads",
    description: "Generate qualified leads from day one. Our Google-certified PPC team manages Search, Display, Shopping, and Performance Max campaigns with rigorous bid strategy. Average client ROAS: 3.8x.",
    subServices: [
      { label: "Google Search Ads", href: "/google-ads-agency-bangalore" },
      { label: "Performance Max", href: "/lead-generation-agency-bangalore" },
      { label: "Display Ads", href: "/lead-generation-agency-bangalore" },
      { label: "Shopping Ads", href: "/lead-generation-agency-bangalore" },
    ],
    href: "/lead-generation-agency-bangalore",
  },
  {
    icon: Share2,
    number: "03",
    title: "Social Media\nMarketing",
    description: "Build brand equity and generate leads across Meta (Facebook & Instagram), LinkedIn, and YouTube with full-funnel strategy from awareness to conversion.",
    subServices: [
      { label: "Meta Ads", href: "/social-media-design-agency-bangalore" },
      { label: "LinkedIn Ads", href: "/social-media-design-agency-bangalore" },
      { label: "Community Management", href: "/social-media-optimisation-bangalore" },
      { label: "YouTube Ads", href: "/social-media-design-agency-bangalore" },
    ],
    href: "/social-media-design-agency-bangalore",
  },
  {
    icon: FileText,
    number: "04",
    title: "Content\nMarketing",
    description: "Content is the foundation of long-term organic growth. We produce SEO-optimised blogs, pillar pages, case studies, and landing pages that rank, educate, and convert.",
    subServices: [
      { label: "SEO Blogs", href: "/blog-writing-agency-bangalore" },
      { label: "Website Content", href: "/website-content-writing-bangalore" },
      { label: "Script Writing", href: "/script-writing-agency-bangalore" },
      { label: "Email Marketing", href: "/contact" },
    ],
    href: "/contact",
  },
  {
    icon: Monitor,
    number: "05",
    title: "Web Design\n& Development",
    description: "A website that doesn't convert is a liability. We build fast, mobile-first, SEO-ready websites with CRO baked in from the first wireframe.",
    subServices: [
      { label: "Custom Websites", href: "/web-design-company-bangalore" },
      { label: "WordPress", href: "/wordpress-website-design-bangalore" },
      { label: "E-commerce", href: "/ecommerce-website-development-bangalore" },
      { label: "UI/UX Design", href: "/ui-ux-design-agency-bangalore" },
    ],
    href: "/web-design-company-bangalore",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Reputation\nManagement",
    description: "Your search results are your first impression. We monitor, manage, and build your brand's online reputation across Google, Clutch, and industry platforms.",
    subServices: [
      { label: "Review Management", href: "/contact" },
      { label: "Crisis Management", href: "/contact" },
      { label: "Brand Monitoring", href: "/contact" },
      { label: "GBP Optimisation", href: "/contact" },
    ],
    href: "/contact",
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
