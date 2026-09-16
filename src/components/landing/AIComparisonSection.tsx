import { Target, Bot, ShieldCheck, LineChart, MapPin } from "lucide-react";

const outcomeStats = [
  {
    value: "300",
    suffix: "%+",
    label: "Average organic traffic growth across our SEO retainers.",
    theme: "brand",
  },
  {
    value: "60",
    suffix: "+",
    label: "AI SEO audits delivered for founders and marketing teams.",
    theme: "dark",
  },
  {
    value: "2",
    suffix: "M+",
    label: "Revenue influenced in USD through search-led pipeline.",
    theme: "light",
  },
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
    <section className="py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-brand/20 bg-brand/5 text-brand text-xs font-semibold uppercase mb-4">
            The Difference
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] text-foreground mb-4">
            Make your site AI ready with our{" "}
            <span className="text-brand">AI SEO agency in Bangalore</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Technical errors on your website limit visibility before it even starts ranking. As a leading{" "}
            <span className="text-foreground font-semibold">AI SEO company in Bangalore</span>, we fix your website
            structure, optimize search performance, and improve entity signals so Google and AI search platforms can
            better understand, trust, and rank your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {outcomeStats.map((s) => {
            const theme =
              s.theme === "brand"
                ? "bg-brand text-primary-foreground"
                : s.theme === "dark"
                ? "bg-foreground text-background"
                : "bg-muted text-foreground";
            const sub = s.theme === "light" ? "text-muted-foreground" : "opacity-70";
            return (
              <div key={s.label} className={`rounded-xl p-6 md:p-8 flex flex-col justify-between min-h-[180px] ${theme}`}>
                <div className="flex items-start">
                  <span className="text-5xl md:text-6xl font-bold leading-none tracking-tight">{s.value}</span>
                  <span className="text-xl md:text-2xl font-semibold ml-1 mt-1">{s.suffix}</span>
                </div>
                <p className={`mt-8 text-sm leading-relaxed ${sub}`}>{s.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {usps.map((u, i) => (
            <div
              key={u.title}
              className={`group rounded-xl border border-border bg-card p-5 md:p-6 hover:border-brand/30 hover:shadow-lg transition-all ${u.wide ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <u.icon className="w-4 h-4 text-brand" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-brand">{String(i + 1).padStart(2, "0")} · {u.metric}</span>
                  <h3 className="text-base md:text-lg font-bold text-foreground">{u.title}</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{u.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
