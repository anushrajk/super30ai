import { Link } from "react-router-dom";
import { ArrowRight, Search, Target, Share2, Palette, Globe, Mail } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "AI SEO",
    description: "Our AI-powered SEO strategies go beyond traditional optimization. We use machine learning to analyze search patterns, predict algorithm changes, and create content that ranks. From technical audits to content strategy, we ensure your brand dominates organic search results.",
    features: ["AI-Powered Keyword Research", "Technical SEO Audits", "Content Strategy & Creation", "Link Building & Authority", "Local SEO & Google Business", "Schema Markup & Rich Snippets"],
    href: "/ai-seo-agency-bangalore",
    accent: "18 100% 48%",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Maximize your ROAS with data-driven ad campaigns across Google, Meta, and LinkedIn. Our AI bid optimization ensures every rupee works harder, with real-time adjustments based on conversion data and audience behavior.",
    features: ["Google & Meta Ads Management", "AI Bid Optimization", "Conversion Rate Optimization", "Retargeting & Lookalike Audiences", "Landing Page A/B Testing", "Campaign Analytics & Reporting"],
    href: "/performance-marketing",
    accent: "217 91% 60%",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build a community, not just a following. We craft scroll-stopping content calendars, manage engagement, and create viral short-form videos that turn viewers into customers across Instagram, LinkedIn, and YouTube.",
    features: ["Content Calendar Planning", "Community Management", "Short-Form Video (Reels/Shorts)", "Influencer Collaborations", "Social Listening & Analytics", "Platform Growth Strategy"],
    href: "/social-media-post-design",
    accent: "292 84% 61%",
  },
  {
    icon: Palette,
    title: "Design Services",
    description: "Stand out in a crowded market with design that demands attention. From brand identity systems to daily social media creatives and marketing collaterals — our designers create visuals that communicate your brand story.",
    features: ["Brand Identity & Guidelines", "Social Media Creatives", "Marketing Collaterals", "Presentation Design", "Motion Graphics & Animation", "Packaging & Print Design"],
    href: "/design",
    accent: "38 92% 50%",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Your website is your 24/7 salesperson. We design high-converting landing pages and responsive websites that load fast, rank well, and guide visitors toward action — built with modern frameworks for performance.",
    features: ["Landing Page Design", "Responsive Web Development", "Speed & Core Web Vitals", "UI/UX Optimization", "CMS Integration & Setup", "E-commerce Development"],
    href: "/web-design-development",
    accent: "168 76% 42%",
  },
  {
    icon: Mail,
    title: "Email & Content Marketing",
    description: "Nurture leads on autopilot with intelligent email sequences and content funnels. From welcome series to re-engagement campaigns, we create personalized journeys that convert subscribers into loyal customers.",
    features: ["Automated Email Sequences", "Lead Nurturing Funnels", "Newsletter Strategy", "Content Writing & Blogs", "Drip Campaign Design", "Performance Tracking & Optimization"],
    href: "/contact",
    accent: "0 84% 60%",
  },
];

export const ServicesDetailSection = () => {
  return (
    <section className="py-10 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.3] mb-4">
            <span className="text-brand">Our Services</span>{" "}
            <span className="text-foreground">In Detail</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A closer look at how each service drives measurable results for your business.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-10 items-center bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300`}
              >
                {/* Icon + Title side */}
                <div className="flex-1 w-full">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: `hsl(${service.accent} / 0.12)` }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: `hsl(${service.accent})` }} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 text-brand font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Features side */}
                <div className="flex-1 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, fi) => (
                      <div
                        key={fi}
                        className="flex items-center gap-3 rounded-xl px-4 py-3 border border-border bg-muted/30"
                      >
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: `hsl(${service.accent})` }}
                        />
                        <span className="text-foreground text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
