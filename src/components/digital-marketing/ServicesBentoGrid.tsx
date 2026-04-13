import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import seoImg from "@/assets/services/seo-services.jpg";
import leadGenImg from "@/assets/services/lead-generation.jpg";
import socialImg from "@/assets/services/social-media.jpg";
import brandImg from "@/assets/services/brand-design.jpg";
import webImg from "@/assets/services/web-design.jpg";
import emailImg from "@/assets/services/email-content.jpg";

const services = [
  { title: "SEO Services", description: "Dominate Google rankings with data-driven SEO. We deliver 300% average traffic growth for Bangalore businesses.", href: "/seo-company-bangalore", image: seoImg },
  { title: "Lead Generation & PPC", description: "Google & Meta Ads with optimized bidding for maximum ROAS. We manage ₹50L+ in monthly ad spend.", href: "/lead-generation-agency-bangalore", image: leadGenImg },
  { title: "Social Media Marketing", description: "Content calendars, community management, and viral short-form video strategies for Bangalore's audience.", href: "/social-media-design-agency-bangalore", image: socialImg },
  { title: "Brand & Design Services", description: "Brand identity, social creatives, and marketing collaterals that make your business stand out.", href: "/design", image: brandImg },
  { title: "Web Design & Development", description: "High-converting, responsive websites optimized for speed and SEO — built in-house in Bangalore.", href: "/web-design-company-bangalore", image: webImg },
  { title: "Email & Content Marketing", description: "Automated email sequences, lead nurturing funnels, and content that turns visitors into customers.", href: "/contact", image: emailImg },
];

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <Link key={i} to={service.href} className="group rounded-xl border border-white/10 overflow-hidden block hover:border-brand/30 transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">{service.description}</p>
              <span className="flex items-center gap-1.5 text-brand font-semibold text-xs sm:text-sm group-hover:gap-2.5 transition-all">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
