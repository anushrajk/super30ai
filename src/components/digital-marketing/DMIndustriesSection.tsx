const industries = [
  { name: "SaaS & Tech Startups", approach: "Account-based marketing, product-led SEO, LinkedIn demand generation, free trial conversion flows" },
  { name: "E-commerce & D2C", approach: "Google Shopping, Meta catalogue ads, Shopify SEO, cart abandonment email flows, ROAS-focused campaigns" },
  { name: "Real Estate", approach: "Hyper-local Google Ads, WhatsApp lead funnels, video content for project launches, local SEO for micromarkets" },
  { name: "EdTech", approach: "YouTube pre-rolls, parent/student audience segmentation, app install campaigns, content-led trust building" },
  { name: "Healthcare & Clinics", approach: "Local SEO for clinic discovery, Google Ads with call extensions, reputation management, HIPAA-aligned content" },
  { name: "B2B Enterprises", approach: "LinkedIn Sales Navigator integration, long-cycle nurture sequences, thought leadership content, ABM campaigns" },
];

export const DMIndustriesSection = () => (
  <section className="py-8 md:py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-6 md:mb-14">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
          Industry Expertise
        </span>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
          Industry-Specific <span className="text-brand">Digital Marketing</span> for Bangalore Businesses
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          Different industries require different strategies. Our teams are organised by vertical so your account is handled by specialists who understand your buyer, your competition, and your compliance requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-6xl mx-auto">
        {industries.map((industry, i) => (
          <div key={i} className="bg-white border border-border/50 rounded-xl p-4 md:p-6">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-2">{industry.name}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{industry.approach}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
