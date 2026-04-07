import { Link } from "react-router-dom";
import { ArrowRight, Search, Target, Share2, Palette, Globe, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Search,
    title: "SEO Services",
    description: "We identify ranking opportunities, fix technical issues, create keyword-rich content, and build authority through link building — all tailored for Bangalore's competitive search landscape.",
    features: ["Keyword Research & Strategy", "Technical SEO Audits", "Content Strategy & Creation", "Link Building & Authority", "Local SEO for Bangalore", "Schema Markup & Rich Snippets"],
    href: "/seo-company-bangalore",
  },
  {
    icon: Target,
    title: "Lead Generation & PPC",
    description: "We manage Google, Meta, and LinkedIn ad campaigns with optimized bidding, audience targeting, and conversion tracking to maximize every rupee you spend.",
    features: ["Google & Meta Ads Management", "Bid Optimization", "Conversion Rate Optimization", "Retargeting & Lookalike Audiences", "Landing Page A/B Testing", "Campaign Analytics & Reporting"],
    href: "/lead-generation-agency-bangalore",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "We craft scroll-stopping content, manage community engagement, and produce short-form videos that turn followers into paying customers for Bangalore brands.",
    features: ["Content Calendar Planning", "Community Management", "Short-Form Video (Reels/Shorts)", "Influencer Collaborations", "Social Listening & Analytics", "Platform Growth Strategy"],
    href: "/social-media-design-agency-bangalore",
  },
  {
    icon: Palette,
    title: "Brand & Design Services",
    description: "From brand identity systems to daily social media creatives — our in-house designers create visuals that communicate your story and stand out in Bangalore's crowded market.",
    features: ["Brand Identity & Guidelines", "Social Media Creatives", "Marketing Collaterals", "Presentation Design", "Motion Graphics & Animation", "Packaging & Print Design"],
    href: "/design",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "We design high-converting websites that load fast, rank well on Google, and guide visitors toward action — built entirely in-house by our Bangalore team.",
    features: ["Landing Page Design", "Responsive Web Development", "Speed & Core Web Vitals", "UI/UX Optimization", "CMS Integration & Setup", "E-commerce Development"],
    href: "/web-design-company-bangalore",
  },
  {
    icon: Mail,
    title: "Email & Content Marketing",
    description: "We build automated email sequences and content funnels that nurture leads and convert subscribers into loyal customers — without you lifting a finger.",
    features: ["Automated Email Sequences", "Lead Nurturing Funnels", "Newsletter Strategy", "Content Writing & Blogs", "Drip Campaign Design", "Performance Tracking"],
    href: "/contact",
  },
];

export const ServicesDetailSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.05 });

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4 border border-brand/20">
            Digital Marketing Services in Detail
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.3] mb-4">
            How Our <span className="text-brand">Digital Marketing Agency in Bangalore</span> Drives Results
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A closer look at each service and how it drives measurable growth for Bangalore businesses.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-5">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white border border-border/50 rounded-2xl p-6 md:p-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 80}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-brand/10 flex-shrink-0">
                  <service.icon className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{service.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">{service.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
                {service.features.map((feature, fi) => (
                  <div key={fi} className="flex items-center gap-2 text-sm text-foreground font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
              <Link
                to={service.href}
                className="inline-flex items-center gap-2 text-brand font-semibold text-sm"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
