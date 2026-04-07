import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "AI-Powered SEO",
    description: "Dominate Google rankings with our AI-driven SEO services. As a top digital marketing agency in Bangalore, we deliver 300% average traffic growth.",
    href: "/seo-company-bangalore",
  },
  {
    title: "Lead Generation & PPC",
    description: "Google & Meta Ads with AI-optimized bidding for maximum ROAS. Our digital marketing experts in Bangalore manage ₹50L+ in monthly ad spend.",
    href: "/lead-generation-agency-bangalore",
  },
  {
    title: "Social Media Marketing",
    description: "Content calendars, community management, and viral short-form video strategies built for Bangalore's digitally-savvy audience.",
    href: "/social-media-design-agency-bangalore",
  },
  {
    title: "Brand & Design Services",
    description: "Brand identity, social media creatives, and marketing collaterals that make your Bangalore business stand out in a crowded market.",
    href: "/design",
  },
  {
    title: "Web Design & Development",
    description: "High-converting, responsive websites optimized for speed and SEO — built by our in-house design team in Bangalore.",
    href: "/web-design-company-bangalore",
  },
  {
    title: "Email & Content Marketing",
    description: "Automated email sequences, lead nurturing funnels, and content strategy that turns visitors into customers for Bangalore brands.",
    href: "/contact",
  },
];

export const ServicesBentoGrid = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-24 bg-foreground">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between max-w-6xl mx-auto mb-10 md:mb-14 gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand/20 text-brand rounded-full text-sm font-medium mb-4 border border-brand/30">
              Our Digital Marketing Services in Bangalore
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.3]">
              <span className="text-brand">What</span>
              <br />
              <span className="text-white">We Excel At</span>
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 text-foreground font-semibold text-sm tracking-wide transition-all duration-300 group w-fit"
          >
            CONTACT US NOW
            <span className="w-8 h-8 rounded-full bg-brand flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className={`relative rounded-2xl overflow-hidden block bg-brand/10 border border-brand/20 p-6 md:p-8 transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 80}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand" />
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="flex items-center gap-2 text-brand font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
