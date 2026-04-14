import { ShieldCheck, Unlock, Users, UserCheck, Brain, TrendingUp, ArrowRight } from "lucide-react";

const benefits = [
  {
    title: "Real-time Transparent Dashboard",
    description: "24/7 access to your campaign performance data. We hide nothing — tracking every rupee spent and every lead generated.",
    icon: ShieldCheck,
    metric: "100%",
    metricLabel: "Transparency",
    colSpan: "sm:col-span-2",
    dark: true,
  },
  {
    title: "0 Lock-in Period",
    description: "We believe in results, not contracts. If we don't perform, you don't stay.",
    icon: Unlock,
    metric: "0",
    metricLabel: "Contracts",
    colSpan: "",
    dark: false,
  },
  {
    title: "100% In-house Team",
    description: "No outsourcing. Your account is managed by our full-time experts based right here in Bangalore.",
    icon: Users,
    metric: "30+",
    metricLabel: "Experts",
    colSpan: "",
    dark: false,
  },
  {
    title: "Dedicated Strategist",
    description: "Direct access to your project lead. No account managers acting as middlemen.",
    icon: UserCheck,
    metric: "1:1",
    metricLabel: "Access",
    colSpan: "",
    dark: false,
  },
  {
    title: "AI + Human Strategy",
    description: "We combine AI-powered insights with experienced human strategists for campaigns that outperform pure automation.",
    icon: Brain,
    metric: "2x",
    metricLabel: "Efficiency",
    colSpan: "",
    dark: false,
  },
  {
    title: "3.8x Average ROAS",
    description: "Our campaigns deliver 3.8x return on ad spend on average — backed by data, not promises.",
    icon: TrendingUp,
    metric: "3.8x",
    metricLabel: "ROAS",
    colSpan: "sm:col-span-2",
    dark: true,
  },
];

export const DMBenefitsSection = () => (
  <section className="py-24 md:py-32 lg:py-40 bg-background relative overflow-hidden">
    {/* Subtle grid background */}
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
      backgroundSize: '60px 60px'
    }} />

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-brand text-xs font-bold uppercase tracking-[0.25em] mb-5 px-4 py-1.5 rounded-full border border-brand/20 bg-brand/5">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] mb-5">
            Why 200+ brands choose
            <span className="text-brand"> us</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Every advantage we offer is built to make your marketing accountable, transparent, and profitable.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            const isDark = b.dark;

            return (
              <div
                key={i}
                className={`group relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between min-h-[240px] transition-all duration-500 cursor-default ${b.colSpan} ${
                  isDark
                    ? "bg-foreground text-background"
                    : "bg-card border border-border/60 hover:border-brand/30"
                }`}
              >
                {/* Top: Icon + Metric */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    isDark ? "bg-background/10" : "bg-brand/8"
                  }`}>
                    <Icon className={`w-5 h-5 ${isDark ? "text-background/80" : "text-brand"}`} />
                  </div>
                  <span className={`text-3xl sm:text-4xl font-black tracking-tight ${
                    isDark ? "text-background/20" : "text-foreground/[0.06]"
                  }`}>
                    {b.metric}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-end">
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 leading-tight ${
                    isDark ? "text-background" : "text-foreground"
                  }`}>
                    {b.title}
                  </h3>
                  <p className={`text-[13px] leading-relaxed ${
                    isDark ? "text-background/50" : "text-muted-foreground"
                  }`}>
                    {b.description}
                  </p>
                </div>

                {/* Bottom arrow */}
                <div className={`mt-5 flex items-center gap-2 text-xs font-semibold transition-all duration-300 ${
                  isDark
                    ? "text-background/40 group-hover:text-background/70"
                    : "text-muted-foreground/50 group-hover:text-brand"
                }`}>
                  <span className="uppercase tracking-wider">{b.metricLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
