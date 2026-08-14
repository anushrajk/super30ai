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
    <section className="py-10 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Eyebrow rule */}
        <div className="border-t border-border pt-4 mb-6 md:mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            The Difference
          </span>
        </div>

        {/* Editorial split heading */}
        <div className="grid lg:grid-cols-12 gap-4 md:gap-10 items-start mb-8 md:mb-12">
          <h2 className="lg:col-span-7 text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight leading-[1.05] text-foreground">
            Make your site AI ready with our{" "}
            <span className="text-brand">AI SEO agency in Bangalore</span>
          </h2>
          <p className="lg:col-span-5 text-base md:text-lg text-muted-foreground lg:pt-2">
            Technical errors on your website limit visibility before it even starts ranking. As a leading{" "}
            <span className="text-foreground font-semibold">AI SEO company in Bangalore</span>, we fix your website
            structure, optimize search performance, and improve entity signals so Google and AI search platforms can
            better understand, trust, and rank your business.
          </p>
        </div>

        {/* Big flat stat blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
          {outcomeStats.map((s) => {
            const theme =
              s.theme === "brand"
                ? "bg-brand text-white"
                : s.theme === "dark"
                ? "bg-foreground text-background"
                : "bg-muted text-foreground";
            const sub = s.theme === "light" ? "text-muted-foreground" : "opacity-70";
            return (
              <div key={s.label} className={`rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[190px] ${theme}`}>
                <div className="flex items-start">
                  <span className="text-5xl md:text-6xl font-bold leading-none tracking-tight">{s.value}</span>
                  <span className="text-xl md:text-2xl font-semibold ml-1 mt-1">{s.suffix}</span>
                </div>
                <p className={`mt-8 text-sm leading-relaxed ${sub}`}>{s.label}</p>
              </div>
            );
          })}
        </div>

        {/* Numbered USP rows */}
        <div className="rounded-2xl border border-border overflow-hidden">
          {usps.map((u, i) => (
            <div
              key={u.title}
              className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-center px-5 md:px-8 py-5 md:py-6 border-b border-border last:border-b-0 bg-card hover:bg-muted/60 transition-colors"
            >
              <div className="md:col-span-1 text-sm font-semibold text-muted-foreground tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <u.icon className="w-4 h-4 text-brand" />
                </div>
                <h3 className="text-base md:text-lg font-bold uppercase tracking-tight text-foreground">{u.title}</h3>
              </div>
              <p className="md:col-span-6 text-sm text-muted-foreground">{u.description}</p>
              <div className="md:col-span-1 hidden md:flex justify-end">
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand">{u.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
