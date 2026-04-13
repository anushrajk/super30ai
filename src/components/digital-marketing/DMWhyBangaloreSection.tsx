import { useState } from "react";
import { ChevronDown } from "lucide-react";

const cards = [
  {
    title: "Deep Industry Knowledge & Market Insight",
    text: "Bangalore is home to over 10,000 startups, hundreds of global enterprises, and one of the most digitally literate consumer bases in India. For businesses operating in this market, choosing the right digital marketing agency in Bangalore is not optional — it is a growth prerequisite.",
  },
  {
    title: "A Multi-channel Strategic Approach",
    text: "A results-driven digital marketing company in Bangalore combines deep expertise in SEO, Google Ads, social media marketing, and content strategy with local market intelligence. Whether you are a D2C brand in Koramangala, a SaaS company in Whitefield, or a healthcare provider in Jayanagar, your digital strategy must be built around how Bangalore consumers search, compare, and convert.",
  },
  {
    title: "Transparent Data-Driven Decisions",
    text: "At Super 30, we operate as a full-service online marketing agency in Bangalore — covering everything from technical SEO audits and Google Ads management to LinkedIn lead generation and Instagram content strategy. Our campaigns are built on real data, not assumptions: we analyse your competitors, map your buyer journey, and deploy channel-specific strategies that deliver measurable ROI.",
  },
  {
    title: "A Results-First Engagement",
    text: "What separates us as an effective internet marketing company in Bangalore from the rest is transparency, vertical expertise, and accountability. We provide live dashboards, monthly performance reports, and quarterly business reviews — so you always know exactly where your marketing spend is going and what it is producing.",
  },
  {
    title: "Agile Campaign Optimisation",
    text: "If you are looking for a digital marketing agency near you that understands the Bangalore ecosystem — from startup funding cycles to enterprise procurement timelines — Super 30 is built for this market. Every strategy we deliver is calibrated for Bangalore's unique competitive landscape, not recycled from a national template.",
  },
];

const AccordionItem = ({ card, index, isOpen, onToggle }: { card: typeof cards[0]; index: number; isOpen: boolean; onToggle: () => void }) => (
  <div className="border-b border-border/40">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left cursor-pointer group transition-colors duration-200"
    >
      <div className="flex items-center gap-4 sm:gap-5 min-w-0">
        <span className="text-sm sm:text-base font-medium text-muted-foreground/50 shrink-0 w-5">
          {index + 1}.
        </span>
        <h3 className="text-sm sm:text-base md:text-lg font-medium text-foreground leading-snug">
          {card.title}
        </h3>
      </div>
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
          isOpen
            ? "bg-foreground text-background rotate-180"
            : "bg-muted text-muted-foreground group-hover:bg-foreground group-hover:text-background"
        }`}
      >
        <ChevronDown className="w-4 h-4" />
      </div>
    </button>

    <div
      className={`grid transition-all duration-400 ease-out ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <div className="pb-5 sm:pb-6 pl-9 sm:pl-10 pr-12">
          <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed max-w-2xl">
            {card.text}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const DMWhyBangaloreSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
            What Makes Us a Great Digital Marketing Company in{" "}
            <span className="text-brand">Bangalore</span>?
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="border-t border-border/40">
            {cards.map((card, i) => (
              <AccordionItem
                key={i}
                card={card}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
