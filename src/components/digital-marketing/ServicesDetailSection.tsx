import { Link } from "react-router-dom";
import { ArrowRight, Search, MousePointerClick, Share2, FileText, Monitor, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Search,
    color: "bg-blue-500/10 text-blue-500",
    title: "Search Engine Optimisation (SEO)",
    description: "Rank higher, stay longer. Our SEO team combines technical audits, content authority building, and high-quality link acquisition to move your business to Page 1 — and keep it there.",
    features: [
      "On-page SEO: keyword mapping, content optimisation, internal linking",
      "Technical SEO: site speed, crawlability, schema markup, mobile optimisation",
      "Off-page SEO: digital PR, authority link building, brand mentions",
      "Local SEO: Google Business Profile, local citations, Bangalore geo-targeting",
      "Timeline to results: 3–6 months for measurable ranking improvements",
    ],
    href: "/seo-company-bangalore",
    linkText: "SEO services in Bangalore",
  },
  {
    icon: MousePointerClick,
    color: "bg-green-500/10 text-green-500",
    title: "Pay-Per-Click (PPC) & Google Ads",
    description: "Generate qualified leads from day one. Our Google-certified PPC team manages Search, Display, Shopping, and Performance Max campaigns with rigorous bid strategy. Average client ROAS: 3.8x.",
    features: [
      "Google Search & Display Ads for high-intent Bangalore audiences",
      "Performance Max campaigns with AI-powered bidding",
      "Landing page optimisation aligned to each campaign",
      "Weekly reporting with spend, clicks, CPC, conversions, and ROAS",
    ],
    href: "/lead-generation-agency-bangalore",
    linkText: "PPC management in Bangalore",
  },
  {
    icon: Share2,
    color: "bg-pink-500/10 text-pink-500",
    title: "Social Media Marketing",
    description: "Build brand equity and generate leads across Meta (Facebook & Instagram), LinkedIn, and YouTube with full-funnel strategy from awareness to conversion.",
    features: [
      "Meta Ads: retargeting, lookalike audiences, lead generation",
      "LinkedIn Ads: B2B decision-maker targeting for SaaS and enterprise brands",
      "Organic social: content strategy, creative production, community management",
      "YouTube pre-roll and bumper ads for brand awareness campaigns",
    ],
    href: "/social-media-design-agency-bangalore",
    linkText: "Social media marketing",
  },
  {
    icon: FileText,
    color: "bg-amber-500/10 text-amber-500",
    title: "Content Marketing & SEO Content",
    description: "Content is the foundation of long-term organic growth. We produce SEO-optimised blogs, pillar pages, case studies, and landing pages that rank, educate, and convert.",
    features: [
      "Keyword-mapped content strategy with topical authority planning",
      "Long-form SEO blogs, pillar pages, and service landing pages",
      "GEO (Generative Engine Optimisation) for AI search visibility",
      "Email marketing sequences for lead nurturing and re-engagement",
    ],
    href: "/contact",
    linkText: "Content marketing services",
  },
  {
    icon: Monitor,
    color: "bg-purple-500/10 text-purple-500",
    title: "Web Design & Development",
    description: "A website that doesn't convert is a liability. We build fast, mobile-first, SEO-ready websites with CRO baked in from the first wireframe.",
    features: [
      "Core Web Vitals-optimised builds: LCP, FID, CLS all in green",
      "Landing pages with A/B tested layouts for PPC and SEO campaigns",
      "E-commerce development on Shopify and WooCommerce",
      "Monthly maintenance, speed audits, and security monitoring",
    ],
    href: "/web-design-company-bangalore",
    linkText: "Web design in Bangalore",
  },
  {
    icon: ShieldCheck,
    color: "bg-teal-500/10 text-teal-500",
    title: "Online Reputation Management (ORM)",
    description: "Your search results are your first impression. We monitor, manage, and build your brand's online reputation across Google, Clutch, and industry platforms.",
    features: [
      "Review generation and monitoring across platforms",
      "Negative result suppression and crisis management",
      "Brand mention tracking and sentiment analysis",
      "Google Business Profile reputation building",
    ],
    href: "/contact",
    linkText: "Get a free audit",
  },
];

export const ServicesDetailSection = () => (
  <section className="py-12 md:py-20 lg:py-28 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
          Our Digital Marketing Services in Bangalore
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3">
          End-to-End <span className="text-brand">Digital Marketing Services</span> Built for Growth
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          Every service is delivered in-house by certified specialists — no freelancer outsourcing, no black-box reporting.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-card border border-border/50 rounded-2xl p-5 sm:p-7 animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${service.color}`}>
                <service.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">{service.title}</h3>
              </div>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed mb-4">{service.description}</p>
            <ul className="space-y-2 mb-5">
              {service.features.map((feature, fi) => (
                <li key={fi} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-1.5" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to={service.href} className="inline-flex items-center gap-1.5 text-brand font-semibold text-xs sm:text-sm group">
              {service.linkText} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);
