import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BentoBadge } from "@/components/ui/bento-grid";

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
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Performance Marketing",
    description: "Google & Meta Ads managed with AI-optimized bid strategies for maximum ROAS.",
    href: "/performance-marketing",
    image: performanceImg,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Social Media Marketing",
    description: "Content calendars, community management, and viral short-form video strategies.",
    href: "/social-media-post-design",
    image: socialMediaImg,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Design Services",
    description: "Brand identity, social media creatives, and marketing collaterals that stand out.",
    href: "/design",
    image: designImg,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Web Design",
    description: "High-converting landing pages and responsive websites optimized for speed.",
    href: "/web-design-development",
    image: webDesignImg,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Email & Content Marketing",
    description: "Automated email sequences, lead nurturing funnels, and content strategy.",
    href: "/contact",
    image: emailMarketingImg,
    className: "md:col-span-1 md:row-span-1",
  },
];

export const ServicesBentoGrid = () => {
  return (
    <section className="py-10 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between max-w-6xl mx-auto mb-10 md:mb-14 gap-4">
          <div>
            <BentoBadge className="mb-4">Our Services</BentoBadge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.3]">
              <span className="text-brand">What</span>
              <br />
              We Excel At
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] gap-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className={`${service.className} relative rounded-2xl overflow-hidden group cursor-pointer`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
