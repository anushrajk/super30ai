import { Rocket, ShoppingCart, Building, GraduationCap, Stethoscope, Briefcase } from "lucide-react";

const industries = [
  { icon: Rocket, name: "SaaS & Tech Startups", approach: "Account-based marketing, product-led SEO, LinkedIn demand generation, free trial conversion flows" },
  { icon: ShoppingCart, name: "E-commerce & D2C", approach: "Google Shopping, Meta catalogue ads, Shopify SEO, cart abandonment email flows, ROAS-focused campaigns" },
  { icon: Building, name: "Real Estate", approach: "Hyper-local Google Ads, WhatsApp lead funnels, video content for project launches, local SEO for micromarkets" },
  { icon: GraduationCap, name: "EdTech", approach: "YouTube pre-rolls, parent/student audience segmentation, app install campaigns, content-led trust building" },
  { icon: Stethoscope, name: "Healthcare & Clinics", approach: "Local SEO for clinic discovery, Google Ads with call extensions, reputation management, HIPAA-aligned content" },
  { icon: Briefcase, name: "B2B Enterprises", approach: "LinkedIn Sales Navigator integration, long-cycle nurture sequences, thought leadership content, ABM campaigns" },
];

export const DMIndustriesSection = () => (
  <section className="py-12 md:py-20 lg:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
          Industry Expertise
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
          Industry-Specific <span className="text-brand">Digital Marketing</span> for Bangalore Businesses
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          Different industries require different strategies. Our teams are organised by vertical so your account is handled by specialists who understand your buyer, your competition, and your compliance requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {industries.map((industry, i) => (
          <div
            key={i}
            className="bg-card border border-border/50 rounded-2xl p-5 md:p-7 animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
              <industry.icon className="w-6 h-6 text-brand" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{industry.name}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{industry.approach}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
