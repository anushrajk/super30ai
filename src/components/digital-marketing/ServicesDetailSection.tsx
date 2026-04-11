import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Search Engine Optimisation (SEO)",
    description: "Rank higher, stay longer. Our SEO team combines technical audits, content authority building, and high-quality link acquisition to move your business to Page 1 — and keep it there. We handle on-page SEO, Core Web Vitals, structured data markup, and local SEO for Google Business Profile.",
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
    title: "Pay-Per-Click (PPC) & Google Ads",
    description: "Generate qualified leads from day one. Our Google-certified PPC team manages Search, Display, Shopping, and Performance Max campaigns with rigorous bid strategy, ad copy testing, and conversion tracking. Average client ROAS: 3.8x.",
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
    title: "Social Media Marketing",
    description: "Build brand equity and generate leads across Meta (Facebook & Instagram), LinkedIn, and YouTube. We manage content calendars, paid social campaigns, community engagement, and influencer collaborations — with a full-funnel strategy from awareness to conversion.",
    features: [
      "Meta Ads (Facebook & Instagram): retargeting, lookalike audiences, lead generation",
      "LinkedIn Ads: B2B decision-maker targeting for SaaS and enterprise brands",
      "Organic social: content strategy, creative production, community management",
      "YouTube pre-roll and bumper ads for brand awareness campaigns",
    ],
    href: "/social-media-design-agency-bangalore",
    linkText: "Social media marketing",
  },
  {
    title: "Content Marketing & SEO Content",
    description: "Content is the foundation of long-term organic growth. Our content team produces SEO-optimised blogs, pillar pages, case studies, whitepapers, and landing pages that rank, educate, and convert. We also incorporate Generative Engine Optimisation (GEO) — structuring content to be cited by AI answer engines like Google AI Overviews, ChatGPT, and Perplexity.",
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
    title: "Web Design & Development",
    description: "A website that doesn't convert is a liability, not an asset. Our development team builds fast, mobile-first, SEO-ready websites on WordPress, Webflow, and custom stacks — with CRO (conversion rate optimisation) baked in from the first wireframe.",
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
    title: "Online Reputation Management (ORM)",
    description: "Your search results are your first impression. We monitor, manage, and build your brand's online reputation — suppressing negative results, amplifying positive coverage, and building review profiles across Google, Clutch, and industry platforms.",
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
  <section className="py-8 md:py-16 lg:py-24 bg-muted/20">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-6 md:mb-14">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
          Our Digital Marketing Services in Bangalore
        </span>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.3] mb-3">
          End-to-End <span className="text-brand">Digital Marketing Services</span> Built for Growth
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm md:text-lg">
          Every service is delivered in-house by certified specialists — no freelancer outsourcing, no black-box reporting.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-3 md:space-y-5">
        {services.map((service, i) => (
          <div key={i} className="bg-white border border-border/50 rounded-xl p-4 sm:p-6 md:p-8">
            <h3 className="text-base sm:text-xl md:text-2xl font-bold text-foreground mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed mb-4">{service.description}</p>
            <ul className="space-y-1.5 sm:space-y-2 mb-4">
              {service.features.map((feature, fi) => (
                <li key={fi} className="flex items-start gap-2 text-[11px] sm:text-sm text-foreground">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-brand flex-shrink-0 mt-1.5" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to={service.href} className="inline-flex items-center gap-1.5 text-brand font-semibold text-xs sm:text-sm">
              {service.linkText} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);
