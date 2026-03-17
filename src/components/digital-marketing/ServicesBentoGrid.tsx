import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import aiSeoImg from "@/assets/services/ai-seo-card.jpg";
import performanceImg from "@/assets/services/performance-marketing-card.jpg";
import socialMediaImg from "@/assets/services/social-media-card.jpg";
import designImg from "@/assets/services/design-card.jpg";
import webDesignImg from "@/assets/services/web-design-card.jpg";
import emailMarketingImg from "@/assets/services/email-marketing-card.jpg";

const services = [
  {
    title: "AI SEO Services",
    description: "AI-powered search optimization that drives organic traffic and dominates rankings.",
    href: "/ai-seo-agency-bangalore",
    image: aiSeoImg,
  },
  {
    title: "Performance Marketing",
    description: "Google & Meta Ads managed with AI-optimized bid strategies for maximum ROAS.",
    href: "/performance-marketing",
    image: performanceImg,
  },
  {
    title: "Social Media Marketing",
    description: "Content calendars, community management, and viral short-form video strategies.",
    href: "/social-media-post-design",
    image: socialMediaImg,
  },
  {
    title: "Design Services",
    description: "Brand identity, social media creatives, and marketing collaterals that stand out.",
    href: "/design",
    image: designImg,
  },
  {
    title: "Web Design",
    description: "High-converting landing pages and responsive websites optimized for speed.",
    href: "/web-design-development",
    image: webDesignImg,
  },
  {
    title: "Email & Content Marketing",
    description: "Automated email sequences, lead nurturing funnels, and content strategy.",
    href: "/contact",
    image: emailMarketingImg,
  },
];

const ServiceCard = ({
  service,
}: {
  service: (typeof services)[0];
}) => (
  <Link
    to={service.href}
    className="relative rounded-2xl overflow-hidden group cursor-pointer block h-full"
  >
    <img
      src={service.image}
      alt={service.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
      <h3 className="text-lg md:text-xl font-bold text-white mb-1 leading-[1.3]">
        {service.title}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  </Link>
);

export const ServicesBentoGrid = () => {
  return (
    <section className="py-10 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between max-w-6xl mx-auto mb-10 md:mb-14 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.3]">
              <span className="text-brand">What</span>
              <br />
              <span className="text-foreground">We Excel At</span>
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-border rounded-full px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors w-fit"
          >
            VIEW ALL SERVICES
            <span className="w-6 h-6 rounded-full bg-brand flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </span>
          </Link>
        </div>

        {/* Bento Grid - exact 4-col layout: tall, 2 short stacked, tall, 2 short stacked */}
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
