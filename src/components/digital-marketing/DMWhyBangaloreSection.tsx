import { useState } from "react";
import { ChevronRight } from "lucide-react";

const cards = [
  {
    number: "01",
    title: "Deep Industry Knowledge",
    text: "Bangalore is home to over 10,000 startups, hundreds of global enterprises, and one of the most digitally literate consumer bases in India. For businesses operating in this market, choosing the right digital marketing agency in Bangalore is not optional — it is a growth prerequisite.",
  },
  {
    number: "02",
    title: "Multi-Channel Strategy",
    text: "A results-driven digital marketing company in Bangalore combines deep expertise in SEO, Google Ads, social media marketing, and content strategy with local market intelligence. Whether you are a D2C brand in Koramangala, a SaaS company in Whitefield, or a healthcare provider in Jayanagar, your digital strategy must be built around how Bangalore consumers search, compare, and convert.",
  },
  {
    number: "03",
    title: "Data-Driven Decisions",
    text: "At Super 30, we operate as a full-service online marketing agency in Bangalore — covering everything from technical SEO audits and Google Ads management to LinkedIn lead generation and Instagram content strategy. Our campaigns are built on real data, not assumptions.",
  },
  {
    number: "04",
    title: "Results-First Engagement",
    text: "What separates us as an effective internet marketing company in Bangalore from the rest is transparency, vertical expertise, and accountability. We provide live dashboards, monthly performance reports, and quarterly business reviews.",
  },
  {
    number: "05",
    title: "Agile Optimisation",
    text: "If you are looking for a digital marketing agency near you that understands the Bangalore ecosystem — from startup funding cycles to enterprise procurement timelines — Super 30 is built for this market. Every strategy is calibrated for Bangalore's unique competitive landscape.",
  },
];

export const DMWhyBangaloreSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
          {/* Left: Sticky heading */}
          <div className="lg:sticky lg:top-32">
            <span className="text-brand text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Why Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
              What makes us a great digital marketing company in{" "}
              <span className="text-brand">Bangalore</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-md">
              We combine deep local market knowledge with world-class digital marketing execution to deliver measurable results for Bangalore businesses.
            </p>

            {/* Metric highlights */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border/50">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">200+</div>
                <div className="text-xs text-muted-foreground mt-1">Brands Served</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">3.8x</div>
                <div className="text-xs text-muted-foreground mt-1">Avg. ROAS</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">30+</div>
                <div className="text-xs text-muted-foreground mt-1">In-house Experts</div>
              </div>
            </div>
          </div>

          {/* Right: Accordion list */}
          <div className="space-y-0">
            {cards.map((card, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="border-b border-border/40">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center gap-5 py-6 text-left group"
                  >
                    <span className={`text-xs font-mono tracking-wider transition-colors duration-200 ${isOpen ? "text-brand" : "text-muted-foreground/40"}`}>
                      {card.number}
                    </span>
                    <span className={`flex-1 text-base md:text-lg font-semibold transition-colors duration-200 ${isOpen ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                      {card.title}
                    </span>
                    <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-90 text-brand" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-400 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground text-sm leading-relaxed pb-6 pl-10 pr-4 max-w-lg">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
