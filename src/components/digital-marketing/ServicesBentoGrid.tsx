import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import seoImg from "@/assets/services/seo-services.jpg";
import leadGenImg from "@/assets/services/lead-generation.jpg";
import socialImg from "@/assets/services/social-media.jpg";
import brandImg from "@/assets/services/brand-design.jpg";
import webImg from "@/assets/services/web-design.jpg";
import emailImg from "@/assets/services/email-content.jpg";

const services = [
  { title: "Digital Marketing", description: "Dominate Google rankings with data-driven SEO. We deliver 300% average traffic growth for Bangalore businesses.", href: "/seo-company-bangalore", image: seoImg },
  { title: "Design Services", description: "Brand identity, social creatives, and marketing collaterals that make your business stand out from competition.", href: "/design", image: brandImg },
  { title: "Content Marketing", description: "Automated email sequences, lead nurturing funnels, and content that turns visitors into loyal customers.", href: "/contact", image: emailImg },
  { title: "SMS & Messaging", description: "WhatsApp Business API, SMS Gateway, and RCS campaigns that reach your audience instantly with 98% open rates.", href: "/whatsapp-business-api-bangalore", image: leadGenImg },
  { title: "Production Studio", description: "Content calendars, community management, and viral short-form video strategies for Bangalore's audience.", href: "/video-production-agency-bangalore", image: socialImg },
  { title: "Website Design", description: "High-converting, responsive websites optimized for speed and SEO — built in-house in Bangalore.", href: "/web-design-company-bangalore", image: webImg },
];

const ServiceRow = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={service.href}
      className="group block border-b border-white/10 last:border-b-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Main row */}
      <div className="flex items-center justify-between py-6 md:py-8 lg:py-10 px-2 md:px-4">
        <div className="flex items-center gap-6 md:gap-10">
          <span className="text-white/30 text-xs md:text-sm font-medium tracking-widest tabular-nums">
            {String(index + 1).padStart(2, "0")}.
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase tracking-wide group-hover:text-brand transition-colors duration-300">
            {service.title}
          </h3>
        </div>
        <div
          className={`w-9 h-9 md:w-11 md:h-11 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            hovered ? "bg-brand border-brand scale-110" : "group-hover:border-white/40"
          }`}
        >
          <ArrowUpRight className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ${hovered ? "text-white rotate-45" : "text-white/60"}`} />
        </div>
      </div>

      {/* Expandable content */}
      <div
        className={`grid transition-all duration-500 ease-out ${
          hovered ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col md:flex-row gap-5 md:gap-8 px-2 md:px-4 pb-8 md:pb-10">
            {/* Image */}
            <div className="w-full md:w-80 lg:w-96 flex-shrink-0 rounded-xl overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-44 md:h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            {/* Text + CTA */}
            <div className="flex flex-col justify-center">
              <p className="text-white/50 text-sm md:text-base leading-relaxed mb-4 max-w-md">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-brand font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                Explore Service <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ServicesBentoGrid = () => (
  <section className="py-8 md:py-16 lg:py-24 bg-foreground">
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between max-w-6xl mx-auto mb-6 md:mb-14 gap-3">
        <div>
          <span className="inline-block px-3 py-1 bg-brand/20 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/30">Our Digital Marketing Services in Bangalore</span>
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.3]">
            <span className="text-brand">What</span> <span className="text-white">We Excel At</span>
          </h2>
        </div>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-white rounded-full px-4 sm:px-6 py-2.5 text-foreground font-semibold text-xs sm:text-sm w-fit">
          CONTACT US NOW
          <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brand flex items-center justify-center">
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </span>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10">
        {services.map((service, i) => (
          <ServiceRow key={i} service={service} index={i} />
        ))}
      </div>
    </div>
  </section>
);
