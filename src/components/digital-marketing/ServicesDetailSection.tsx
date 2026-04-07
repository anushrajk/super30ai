import { Link } from "react-router-dom";
import { ArrowRight, Search, Target, Share2, Palette, Globe, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Search,
    title: "SEO Services",
    description: "Our digital marketing agency in Bangalore uses advanced data analytics to identify ranking opportunities, predict search trends, and create content that dominates organic search results across Bangalore and India.",
    features: ["Keyword Research & Strategy", "Technical SEO Audits", "Content Strategy & Creation", "Link Building & Authority", "Local SEO for Bangalore", "Schema Markup & Rich Snippets"],
    href: "/seo-company-bangalore",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&h=300&fit=crop",
  },
  {
    icon: Target,
    title: "Lead Generation & PPC Management",
    description: "Maximize your ROAS with data-driven ad campaigns across Google, Meta, and LinkedIn. Our digital marketing experts in Bangalore manage real-time bid optimization to ensure every rupee works harder.",
    features: ["Google & Meta Ads Management", "Bid Optimization", "Conversion Rate Optimization", "Retargeting & Lookalike Audiences", "Landing Page A/B Testing", "Campaign Analytics & Reporting"],
    href: "/lead-generation-agency-bangalore",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build a community, not just a following. Our digital marketing agency in Bangalore crafts scroll-stopping content, manages engagement, and creates viral short-form videos that turn viewers into customers.",
    features: ["Content Calendar Planning", "Community Management", "Short-Form Video (Reels/Shorts)", "Influencer Collaborations", "Social Listening & Analytics", "Platform Growth Strategy"],
    href: "/social-media-design-agency-bangalore",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=300&fit=crop",
  },
  {
    icon: Palette,
    title: "Brand & Design Services",
    description: "Stand out in Bangalore's crowded market with design that demands attention. From brand identity systems to daily social media creatives — our designers create visuals that communicate your story.",
    features: ["Brand Identity & Guidelines", "Social Media Creatives", "Marketing Collaterals", "Presentation Design", "Motion Graphics & Animation", "Packaging & Print Design"],
    href: "/design",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Your website is your 24/7 salesperson. Our digital marketing agency in Bangalore designs high-converting landing pages and responsive websites that load fast, rank well, and guide visitors toward action.",
    features: ["Landing Page Design", "Responsive Web Development", "Speed & Core Web Vitals", "UI/UX Optimization", "CMS Integration & Setup", "E-commerce Development"],
    href: "/web-design-company-bangalore",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
  },
  {
    icon: Mail,
    title: "Email & Content Marketing",
    description: "Nurture leads on autopilot with intelligent email sequences and content funnels. Our digital marketing team in Bangalore creates personalized journeys that convert subscribers into loyal customers.",
    features: ["Automated Email Sequences", "Lead Nurturing Funnels", "Newsletter Strategy", "Content Writing & Blogs", "Drip Campaign Design", "Performance Tracking"],
    href: "/contact",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=500&h=300&fit=crop",
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
            A closer look at how each digital marketing service drives measurable results for Bangalore businesses.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-8 items-center bg-white border border-border/50 rounded-2xl overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Image */}
                <div className="w-full md:w-2/5 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={`${service.title} — digital marketing agency in Bangalore`}
                    className="w-full h-48 md:h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-brand/10">
                    <service.icon className="w-5 h-5 text-brand" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {service.features.map((feature, fi) => (
                      <div key={fi} className="flex items-center gap-2 text-sm text-foreground font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 text-brand font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
