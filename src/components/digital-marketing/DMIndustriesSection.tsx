import {
  Rocket, ShoppingCart, Building, GraduationCap, Stethoscope, Briefcase,
  Plane, UtensilsCrossed, Car, Dumbbell, Landmark, Flower2,
  ShieldCheck, Factory, Wifi, Baby, PawPrint, Gem
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const industries = [
  { icon: Rocket, name: "SaaS & Tech Startups", approach: "Account-based marketing, product-led SEO, LinkedIn demand generation, free trial conversion flows, developer content strategy, and SaaS-specific PPC." },
  { icon: ShoppingCart, name: "E-commerce & D2C", approach: "Google Shopping, Meta catalogue ads, Shopify SEO, cart abandonment email flows, ROAS-focused campaigns, and influencer partnerships." },
  { icon: Building, name: "Real Estate", approach: "Hyper-local Google Ads, WhatsApp lead funnels, video content for project launches, local SEO for micromarkets, and virtual tour marketing." },
  { icon: GraduationCap, name: "EdTech & Education", approach: "YouTube pre-rolls, parent/student audience segmentation, app install campaigns, content-led trust building, and enrollment funnels." },
  { icon: Stethoscope, name: "Healthcare & Clinics", approach: "Local SEO for clinic discovery, Google Ads with call extensions, reputation management, HIPAA-aligned content, and patient engagement." },
  { icon: Briefcase, name: "B2B & Enterprise", approach: "LinkedIn Sales Navigator integration, long-cycle nurture sequences, thought leadership content, ABM campaigns, and whitepaper funnels." },
  { icon: Plane, name: "Travel & Hospitality", approach: "Seasonal campaign planning, Google Hotel Ads, destination content marketing, review management, and OTA competition strategy." },
  { icon: UtensilsCrossed, name: "Food & Restaurant", approach: "Local SEO, Zomato/Swiggy optimisation, food photography content, influencer collaborations, and delivery app marketing." },
  { icon: Car, name: "Automotive", approach: "Dealer-level local SEO, test drive lead generation, YouTube video ads, showroom walk-in campaigns, and inventory-based PPC." },
  { icon: Dumbbell, name: "Fitness & Wellness", approach: "Instagram Reels strategy, membership lead funnels, local SEO for gyms/studios, trainer personal branding, and community building." },
  { icon: Landmark, name: "Finance & Insurance", approach: "Compliance-friendly ad copy, high-intent keyword targeting, trust-building content, lead qualification funnels, and remarketing." },
  { icon: Flower2, name: "Beauty & Fashion", approach: "Instagram and Pinterest marketing, influencer partnerships, lookbook content, seasonal campaign management, and user-generated content." },
  { icon: ShieldCheck, name: "Legal Services", approach: "Google Ads for high-intent queries, attorney content marketing, local SEO for law firms, reputation management, and case study content." },
  { icon: Factory, name: "Manufacturing", approach: "B2B lead generation, LinkedIn advertising, trade show digital support, product catalogue SEO, and industrial content marketing." },
  { icon: Wifi, name: "Telecom & IT Services", approach: "Enterprise lead funnels, comparison content, Google Ads for managed services, case study marketing, and partner channel enablement." },
  { icon: Baby, name: "Parenting & Kids", approach: "Facebook community building, mommy blogger partnerships, product safety content, seasonal campaigns, and WhatsApp engagement." },
  { icon: PawPrint, name: "Pet Care", approach: "Local SEO for pet services, Instagram content strategy, community engagement, subscription box marketing, and review generation." },
  { icon: Gem, name: "Luxury & Jewellery", approach: "High-end visual content, Google Ads for premium queries, aspirational social media, influencer partnerships, and occasion-based campaigns." },
];

// Split into rows for marquee
const row1 = industries.slice(0, 9);
const row2 = industries.slice(9);

const MarqueeRow = ({ items, direction = "left" }: { items: typeof industries; direction?: "left" | "right" }) => (
  <div className="relative overflow-hidden py-2" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
    <div
      className="flex gap-3 w-max"
      style={{
        animation: `${direction === "left" ? "marquee-left" : "marquee-right"} 60s linear infinite`,
      }}
    >
      {[...items, ...items].map((ind, i) => (
        <div
          key={i}
          className="flex items-center gap-2 px-4 py-2.5 bg-background border border-border rounded-full whitespace-nowrap shrink-0"
        >
          <ind.icon className="w-4 h-4 text-brand shrink-0" />
          <span className="text-xs sm:text-sm font-medium text-foreground">{ind.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export const DMIndustriesSection = () => (
  <section className="py-12 md:py-20 lg:py-28 bg-card">
    <style>{`
      @keyframes marquee-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
    `}</style>

    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
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

      {/* Infinite marquee rows */}
      <div className="mb-10 md:mb-14 -mx-4 sm:mx-0">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>

      {/* Accordion details */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-5 text-center">
          Our Approach by Industry
        </h3>
        <Accordion type="single" collapsible defaultValue="industry-0" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {industries.map((industry, i) => (
            <AccordionItem
              key={i}
              value={`industry-${i}`}
              className="bg-card border border-border/50 rounded-2xl px-4 md:px-5 overflow-hidden data-[state=open]:border-brand/30 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline gap-2 py-4">
                <span className="flex items-center gap-2.5 text-left">
                  <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-4 h-4 text-brand" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-foreground leading-tight">{industry.name}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs leading-relaxed pb-4 pl-[46px]">
                {industry.approach}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);
