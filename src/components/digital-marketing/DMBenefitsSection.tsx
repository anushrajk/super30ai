import { ShieldCheck, Unlock, Users, UserCheck, Brain, TrendingUp } from "lucide-react";

const benefits = [
  {
    title: "Real-time Transparent Dashboard",
    description: "24/7 access to your campaign performance data. We hide nothing — tracking every rupee spent and every lead generated.",
    icon: ShieldCheck,
    span: "lg:col-span-2",
    dark: false,
  },
  {
    title: "0 Lock-in Period",
    description: "We believe in results, not contracts. If we don't perform, you don't stay.",
    icon: Unlock,
    span: "",
    dark: true,
  },
  {
    title: "100% In-house Team",
    description: "No outsourcing. Your account is managed by our full-time experts based right here in Bangalore.",
    icon: Users,
    span: "",
    dark: false,
  },
  {
    title: "Dedicated Strategist",
    description: "Direct access to your project lead. No account managers acting as middlemen.",
    icon: UserCheck,
    span: "",
    dark: false,
  },
  {
    title: "AI + Human Strategy",
    description: "We combine AI-powered insights with experienced human strategists for campaigns that outperform pure automation.",
    icon: Brain,
    span: "",
    dark: true,
  },
  {
    title: "3.8x Average ROAS",
    description: "Our campaigns deliver 3.8x return on ad spend on average — backed by data, not promises.",
    icon: TrendingUp,
    span: "lg:col-span-2",
    dark: false,
  },
];

export const DMBenefitsSection = () => (
  <section className="py-20 md:py-28 lg:py-36 bg-card relative">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-20">
          <div>
            <span className="text-brand text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
              Why 200+ brands choose our<br className="hidden md:block" />
              <span className="text-brand"> digital marketing</span> company
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm">
            Every advantage we offer is built to make your marketing accountable, transparent, and profitable.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className={`group rounded-2xl p-7 sm:p-8 flex flex-col justify-between min-h-[200px] transition-all duration-300 hover:-translate-y-0.5 ${b.span} ${
                  b.dark
                    ? "bg-foreground text-background"
                    : "bg-muted/50 border border-border/50"
                }`}
              >
                <div>
                  <h3 className={`text-base sm:text-lg font-bold mb-2.5 ${b.dark ? "text-background" : "text-foreground"}`}>
                    {b.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${b.dark ? "text-background/50" : "text-muted-foreground"}`}>
                    {b.description}
                  </p>
                </div>
                <div className="flex justify-end mt-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    b.dark
                      ? "bg-background/10 group-hover:bg-background/15"
                      : "bg-brand/8 group-hover:bg-brand/15"
                  }`}>
                    <Icon className={`w-5 h-5 ${b.dark ? "text-background/60" : "text-brand"}`} />
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
