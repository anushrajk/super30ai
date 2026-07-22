import { useState } from "react";
import { ChevronRight } from "lucide-react";

const cards = [
  {
    number: "01",
    title: "In-depth Industry Expertise",
    text: "Bangalore has more than 10,000 startups, hundreds of global companies, and one of the most digitally active consumer bases in India. In this context, selecting the right AI digital marketing company in Bangalore isn't just an option; it's a necessity for long-term business success.",
  },
  {
    number: "02",
    title: "Multi Channel Strategy",
    text: "The digital marketing company in Bangalore is a performance driven company that understands the local market and has the expertise necessary in the fields of SEO, Google Ads, social media marketing, and content strategy. If you are a brand, a SaaS company, or a healthcare provider in any locality in Bangalore, there is a digital path that people use to discover, evaluate, and convert online.",
  },
  {
    number: "03",
    title: "Data Driven Decisions",
    text: "As a full service Online Marketing Agency in Bangalore, we provide end-to-end solutions, from Technical SEO audit to Google Ads management, LinkedIn Lead generation to Instagram Content strategy, and beyond. We use performance data, customer behaviour, and measurable business insights to drive our campaigns.",
  },
  {
    number: "04",
    title: "Performance Focused Partnership",
    text: "Our transparency, industry understanding, and accountability are what set us apart as a top performing internet marketing company in Bangalore. We offer real time dashboards, comprehensive monthly reporting, and quarterly business reviews on measurable growth, campaign clarity, and long-term marketing success.",
  },
  {
    number: "05",
    title: "Market Focused Execution",
    text: "TheSuper 30 is for businesses that want an AI digital marketing agency in Bangalore that knows how to navigate and work with the local business ecosystem, from startup funding cycles to enterprise procurement processes. All strategies are designed to suit the competitive landscape, customer behaviour, and the changing digital environment of Bangalore.",
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
              Is Your Marketing Partner Actually Driving Growth in{" "}
              <span className="text-brand">Bangalore?</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-md">
              Many agencies promise results, but few agencies can provide a clear strategy. We're here to help maximize your ROI by optimizing your ad spend and improving your funnel in our <span className="text-foreground font-semibold">AI digital marketing service in Bangalore</span>.
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
