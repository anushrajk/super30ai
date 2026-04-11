import { useState } from "react";
import {
  Rocket, ShoppingCart, Building, GraduationCap, Stethoscope, Briefcase,
  Plane, UtensilsCrossed, Car, Dumbbell, Landmark, Flower2,
  ShieldCheck, Factory, Wifi, Baby, PawPrint, Gem, ChevronDown
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const categories = [
  {
    tab: "Technology",
    industries: [
      { icon: Rocket, name: "SaaS & Tech Startups", approach: "Account-based marketing, product-led SEO, LinkedIn demand generation, free trial conversion flows, developer content strategy, and SaaS-specific PPC." },
      { icon: Wifi, name: "Telecom & IT Services", approach: "Enterprise lead funnels, comparison content, Google Ads for managed services, case study marketing, and partner channel enablement." },
    ],
  },
  {
    tab: "Retail & Commerce",
    industries: [
      { icon: ShoppingCart, name: "E-commerce & D2C", approach: "Google Shopping, Meta catalogue ads, Shopify SEO, cart abandonment email flows, ROAS-focused campaigns, and influencer partnerships." },
      { icon: Flower2, name: "Beauty & Fashion", approach: "Instagram and Pinterest marketing, influencer partnerships, lookbook content, seasonal campaign management, and user-generated content." },
      { icon: Gem, name: "Luxury & Jewellery", approach: "High-end visual content, Google Ads for premium queries, aspirational social media, influencer partnerships, and occasion-based campaigns." },
    ],
  },
  {
    tab: "Professional",
    industries: [
      { icon: Building, name: "Real Estate", approach: "Hyper-local Google Ads, WhatsApp lead funnels, video content for project launches, local SEO for micromarkets, and virtual tour marketing." },
      { icon: Briefcase, name: "B2B & Enterprise", approach: "LinkedIn Sales Navigator integration, long-cycle nurture sequences, thought leadership content, ABM campaigns, and whitepaper funnels." },
      { icon: Landmark, name: "Finance & Insurance", approach: "Compliance-friendly ad copy, high-intent keyword targeting, trust-building content, lead qualification funnels, and remarketing." },
      { icon: ShieldCheck, name: "Legal Services", approach: "Google Ads for high-intent queries, attorney content marketing, local SEO for law firms, reputation management, and case study content." },
    ],
  },
  {
    tab: "Health & Lifestyle",
    industries: [
      { icon: Stethoscope, name: "Healthcare & Clinics", approach: "Local SEO for clinic discovery, Google Ads with call extensions, reputation management, HIPAA-aligned content, and patient engagement." },
      { icon: Dumbbell, name: "Fitness & Wellness", approach: "Instagram Reels strategy, membership lead funnels, local SEO for gyms/studios, trainer personal branding, and community building." },
      { icon: PawPrint, name: "Pet Care", approach: "Local SEO for pet services, Instagram content strategy, community engagement, subscription box marketing, and review generation." },
    ],
  },
  {
    tab: "Education",
    industries: [
      { icon: GraduationCap, name: "EdTech & Education", approach: "YouTube pre-rolls, parent/student audience segmentation, app install campaigns, content-led trust building, and enrollment funnels." },
      { icon: Baby, name: "Parenting & Kids", approach: "Facebook community building, mommy blogger partnerships, product safety content, seasonal campaigns, and WhatsApp engagement." },
    ],
  },
  {
    tab: "Hospitality",
    industries: [
      { icon: Plane, name: "Travel & Hospitality", approach: "Seasonal campaign planning, Google Hotel Ads, destination content marketing, review management, and OTA competition strategy." },
      { icon: UtensilsCrossed, name: "Food & Restaurant", approach: "Local SEO, Zomato/Swiggy optimisation, food photography content, influencer collaborations, and delivery app marketing." },
    ],
  },
  {
    tab: "Industrial",
    industries: [
      { icon: Factory, name: "Manufacturing", approach: "B2B lead generation, LinkedIn advertising, trade show digital support, product catalogue SEO, and industrial content marketing." },
      { icon: Car, name: "Automotive", approach: "Dealer-level local SEO, test drive lead generation, YouTube video ads, showroom walk-in campaigns, and inventory-based PPC." },
    ],
  },
];

const IndustryCard = ({ industry }: { industry: typeof categories[0]["industries"][0] }) => {
  const [open, setOpen] = useState(false);
  const Icon = industry.icon;

  return (
    <div
      className={`bg-card border rounded-2xl transition-all duration-200 ${open ? "border-brand/40 shadow-md" : "border-border/50 hover:border-brand/20"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-4 text-left"
      >
        <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-brand" />
        </div>
        <span className="flex-1 text-sm sm:text-base font-semibold text-foreground">{industry.name}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 pl-[68px]">
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{industry.approach}</p>
        </div>
      )}
    </div>
  );
};

export const DMIndustriesSection = () => (
  <section className="py-12 md:py-20 lg:py-28 bg-card">
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

      <div className="max-w-5xl mx-auto">
        <Tabs defaultValue="Technology" className="w-full">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1.5 rounded-xl mb-8 justify-center">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.tab}
                value={cat.tab}
                className="px-4 py-2 text-xs sm:text-sm rounded-lg data-[state=active]:bg-brand data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                {cat.tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.tab} value={cat.tab}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.industries.map((industry, i) => (
                  <IndustryCard key={i} industry={industry} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  </section>
);
