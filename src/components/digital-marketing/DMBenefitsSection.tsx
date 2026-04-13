import { ShieldCheck, Unlock, Users, UserCheck, Brain, TrendingUp, Headphones } from "lucide-react";

const benefits = [
  {
    title: "Real-time Transparent Dashboard",
    description: "24/7 access to your campaign performance data. We hide nothing, tracking every rupee spent and every lead generated.",
    icon: ShieldCheck,
    style: "large-light" as const,
  },
  {
    title: "0 Lock-in Period",
    description: "We believe in results, not contracts. If we don't perform, you don't stay. It's that simple.",
    icon: Unlock,
    style: "dark" as const,
  },
  {
    title: "100% In-house",
    description: "No outsourcing. Your account is managed by our full-time experts based right here in Bangalore.",
    icon: Users,
    style: "light" as const,
  },
  {
    title: "Dedicated Strategist",
    description: "Direct access to your project lead. No account managers acting as middlemen.",
    icon: UserCheck,
    style: "light" as const,
  },
  {
    title: "AI + Human Strategy",
    description: "We combine AI-powered insights with experienced human strategists for campaigns that outperform pure automation.",
    icon: Brain,
    style: "dark" as const,
  },
  {
    title: "3.8x Average ROAS",
    description: "Our campaigns deliver 3.8x return on ad spend on average — backed by data, not promises.",
    icon: TrendingUp,
    style: "large-light" as const,
  },
];

export const DMBenefitsSection = () => (
  <section className="py-12 md:py-20 lg:py-28 bg-card relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          Why 200+ Brands Choose Our Digital{" "}
          <span className="text-brand">Marketing Company in Bangalore</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {benefits.map((b, i) => {
          const isDark = b.style === "dark";
          const isLarge = b.style.includes("large");
          const Icon = b.icon;

          return (
            <div
              key={i}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 transition-all duration-300 hover:-translate-y-1 ${
                isLarge ? "sm:col-span-2 lg:col-span-2" : "col-span-1"
              } ${
                isDark
                  ? "bg-foreground text-background"
                  : "bg-muted/40 border border-border/40 text-foreground"
              }`}
            >
              {/* Top: title + description */}
              <div>
                <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isDark ? "text-background" : "text-foreground"}`}>
                  {b.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? "text-background/60" : "text-muted-foreground"}`}>
                  {b.description}
                </p>
              </div>

              {/* Bottom: icon */}
              <div className="flex justify-end">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isDark ? "bg-background/10" : "bg-brand/10"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isDark ? "text-background/70" : "text-brand"}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
