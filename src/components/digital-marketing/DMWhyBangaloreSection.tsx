import { useState } from "react";
import { ChevronDown } from "lucide-react";

const cards = [
  {
    title: "Why Bangalore Businesses Need Specialist Digital Marketing",
    text: "Bangalore is home to over 10,000 startups, hundreds of global enterprises, and one of the most digitally literate consumer bases in India. For businesses operating in this market, choosing the right digital marketing agency in Bangalore is not optional — it is a growth prerequisite.",
  },
  {
    title: "Full-Service Digital Marketing Company in Bangalore",
    text: "A results-driven digital marketing company in Bangalore combines deep expertise in SEO, Google Ads, social media marketing, and content strategy with local market intelligence. Whether you are a D2C brand in Koramangala, a SaaS company in Whitefield, or a healthcare provider in Jayanagar, your digital strategy must be built around how Bangalore consumers search, compare, and convert.",
  },
  {
    title: "Data-Driven Online Marketing Agency",
    text: "At Super 30, we operate as a full-service online marketing agency in Bangalore — covering everything from technical SEO audits and Google Ads management to LinkedIn lead generation and Instagram content strategy. Our campaigns are built on real data, not assumptions: we analyse your competitors, map your buyer journey, and deploy channel-specific strategies that deliver measurable ROI.",
  },
  {
    title: "Transparency & Accountability That Sets Us Apart",
    text: "What separates us as an effective internet marketing company in Bangalore from the rest is transparency, vertical expertise, and accountability. We provide live dashboards, monthly performance reports, and quarterly business reviews — so you always know exactly where your marketing spend is going and what it is producing.",
  },
  {
    title: "Built for the Bangalore Ecosystem",
    text: "If you are looking for a digital marketing agency near you that understands the Bangalore ecosystem — from startup funding cycles to enterprise procurement timelines — Super 30 is built for this market. Every strategy we deliver is calibrated for Bangalore's unique competitive landscape, not recycled from a national template.",
  },
];

const ContentCard = ({ card, index }: { card: typeof cards[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group rounded-2xl overflow-hidden transition-all duration-500 ease-out bg-foreground ${
        open
          ? "shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]"
          : "shadow-[0_4px_20px_-8px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.3)]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 sm:p-7 text-left cursor-pointer"
      >
        <div className="flex items-center gap-5">
          <span className="text-sm font-mono font-bold text-brand min-w-[28px]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-sm sm:text-base font-semibold text-background leading-snug tracking-tight">
            {card.title}
          </h3>
        </div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ease-out ${
            open
              ? "bg-brand text-white rotate-180 scale-110"
              : "bg-background/10 text-background/60 group-hover:bg-brand/20 group-hover:text-brand"
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 sm:px-7 pb-6 sm:pb-7 pl-[72px] sm:pl-[80px]">
            <div className="w-10 h-[2px] bg-brand rounded-full mb-4" />
            <p className="text-background/60 text-sm leading-relaxed">{card.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DMWhyBangaloreSection = () => (
  <section className="py-14 md:py-24 lg:py-32 bg-background relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-brand/20 rounded-full" />

    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-5 border border-brand/20">
          Digital Marketing Agency in Bangalore
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">
          What Makes Us a Great{" "}
          <span className="text-brand">Digital Marketing Company in Bangalore</span>?
        </h2>

        <div className="space-y-3">
          {cards.map((card, i) => (
            <ContentCard key={i} card={card} index={i} />
          ))}
        </div>

        <p className="text-xs text-muted-foreground/60 mt-10 pt-6 border-t border-border/30">
          Serving businesses across Koramangala, Indiranagar, HSR Layout, Whitefield, Electronic City, Jayanagar, and all of Bangalore.
        </p>
      </div>
    </div>
  </section>
);
