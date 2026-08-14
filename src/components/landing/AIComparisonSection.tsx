import { TrendingUp, Target, Bot, ShieldCheck, LineChart, MapPin } from "lucide-react";

const outcomeStats = [
  { value: "60+", label: "AI audits delivered" },
  { value: "$2M+", label: "Revenue influenced" },
  { value: "4.8/5", label: "Client rating" },
];

const usps = [
  {
    icon: Target,
    metric: "Lead quality",
    title: "Intent-first keyword mapping",
    description: "We chase buyers, not impressions, so every ranking gain shows up in your enquiry inbox.",
  },
  {
    icon: Bot,
    metric: "AI visibility",
    title: "Cited by AI answers",
    description: "Entity, schema and content signals tuned so ChatGPT, Gemini and AI Overviews reference your brand.",
  },
  {
    icon: ShieldCheck,
    metric: "Zero risk",
    title: "Clean, white-hat execution",
    description: "Technical fixes and earned links only. No penalties, no shortcuts, no rented authority.",
  },
  {
    icon: LineChart,
    metric: "Full clarity",
    title: "Revenue-linked reporting",
    description: "Live dashboards tie rankings to leads, calls and closed revenue every single month.",
  },
  {
    icon: MapPin,
    metric: "Local edge",
    title: "Bangalore search dominance",
    description: "Maps, local packs and city-intent pages built to win high-value searches near you.",
    wide: true,
  },
];

export const AIComparisonSection = () => {
  return (
    <section className="py-8 md:py-14 lg:py-20 bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-5 md:mb-10">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            The Difference
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Make Your Site AI Ready With Our <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">AI SEO Agency In Bangalore</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Technical errors on your website limit visibility before it even starts ranking. As a leading <span className="text-foreground font-semibold">AI SEO company in Bangalore</span>, we fix your website structure, optimize search performance, and improve entity signals so Google and AI search platforms can better understand, trust, and rank your business.
          </p>
        </div>

        {/* Outcome-based USP bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto auto-rows-[minmax(150px,auto)]">
          {/* Big highlight */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl border border-orange-200/60 bg-gradient-to-br from-orange-50 to-background p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-background border border-border/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                <TrendingUp className="w-3.5 h-3.5 text-orange-600" /> Revenue outcome
              </div>
              <h3 className="mt-4 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                300%+ average organic <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">traffic growth</span>
              </h3>
              <p className="mt-3 text-muted-foreground max-w-lg">
                Every sprint is measured against pipeline, not vanity rankings. We optimise for the keywords that convert into qualified enquiries.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {outcomeStats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-background border border-border/60 p-4">
                  <div className="text-2xl font-bold text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {usps.map((u) => (
            <div
              key={u.title}
              className={`rounded-3xl border border-border/60 bg-card p-6 flex flex-col justify-between hover:border-orange-300 transition-colors duration-300 ${u.wide ? "md:col-span-2" : ""}`}
            >
              <div className="w-11 h-11 rounded-2xl bg-orange-100 flex items-center justify-center">
                <u.icon className="w-5 h-5 text-orange-600" />
              </div>
              <div className="mt-5">
                <div className="text-sm font-semibold uppercase tracking-wide text-orange-600">{u.metric}</div>
                <h4 className="mt-1 text-lg font-bold text-foreground">{u.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{u.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
