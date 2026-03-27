import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "AI SEO",
    description: "AI-powered search optimization that drives organic traffic and dominates rankings.",
    href: "/ai-seo-agency-bangalore",
    image: null,
    bg: "bg-[#7c3aed]",
  },
  {
    title: "Lead Generation",
    description: "Google & Meta Ads managed with AI-optimized bid strategies for maximum ROAS.",
    href: "/performance-marketing",
    image: null,
    bg: "bg-[#2563eb]",
  },
  {
    title: "Social Media Marketing",
    description: "Content calendars, community management, and viral short-form video strategies.",
    href: "/social-media-post-design",
    image: null,
    bg: "bg-[#d946ef]",
  },
  {
    title: "Design Services",
    description: "Brand identity, social media creatives, and marketing collaterals that stand out.",
    href: "/design",
    image: null,
    bg: "bg-[#f59e0b]",
  },
  {
    title: "Web Design",
    description: "High-converting landing pages and responsive websites optimized for speed.",
    href: "/web-design-development",
    image: null,
    bg: "bg-[#14b8a6]",
  },
  {
    title: "Email & Content Marketing",
    description: "Automated email sequences, lead nurturing funnels, and content strategy.",
    href: "/contact",
    image: null,
    bg: "bg-[#ef4444]",
  },
];

const ServiceCard = ({
  service,
}: {
  service: (typeof services)[0];
}) => (
  <Link
    to={service.href}
    className={`relative rounded-2xl overflow-hidden group cursor-pointer block h-full ${service.bg}`}
  >
    {/* Text on top */}
    <div className="relative z-10 p-5 md:p-6 pt-6 md:pt-8">
      <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 leading-[1.3]">
        {service.title}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed">
        {service.description}
      </p>
    </div>

    {/* Laptop image at bottom (only for AI SEO) */}
    {service.image && (
      <div className="absolute bottom-0 left-0 right-0 flex justify-center px-4">
        <img
          src={service.image}
          alt={service.title}
          className="w-[85%] max-w-[300px] object-contain transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1"
          loading="lazy"
        />
      </div>
    )}
  </Link>
);

export const ServicesBentoGrid = () => {
  return (
    <section className="py-10 md:py-16 lg:py-24 bg-foreground">
      <div className="container mx-auto px-3 md:px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between max-w-6xl mx-auto mb-10 md:mb-14 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.3]">
              <span className="text-brand">What</span>
              <br />
              <span className="text-white">We Excel At</span>
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 text-foreground font-semibold text-sm tracking-wide hover:shadow-lg transition-all duration-300 group w-fit"
          >
            CONTACT US NOW
            <span className="w-8 h-8 rounded-full bg-brand flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Col 1 - Tall */}
          <div className="h-[320px] sm:h-[400px] lg:h-[520px]">
            <ServiceCard service={services[0]} />
          </div>

          {/* Col 2 - Two short stacked */}
          <div className="flex flex-col gap-4">
            <div className="h-[240px] lg:h-[250px]">
              <ServiceCard service={services[1]} />
            </div>
            <div className="h-[240px] lg:h-[250px]">
              <ServiceCard service={services[2]} />
            </div>
          </div>

          {/* Col 3 - Tall */}
          <div className="h-[320px] sm:h-[400px] lg:h-[520px]">
            <ServiceCard service={services[3]} />
          </div>

          {/* Col 4 - Two short stacked */}
          <div className="flex flex-col gap-4">
            <div className="h-[240px] lg:h-[250px]">
              <ServiceCard service={services[4]} />
            </div>
            <div className="h-[240px] lg:h-[250px]">
              <ServiceCard service={services[5]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
