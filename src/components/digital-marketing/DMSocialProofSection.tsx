import { Award, TrendingUp, Users, Zap, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "200+", label: "Brands Served Since 2017" },
  { icon: Zap, value: "520+", label: "Campaigns Delivered" },
  { icon: TrendingUp, value: "3.8x", label: "Avg. ROAS Across Campaigns" },
  { icon: Award, value: "34", label: "Industry Awards" },
  { icon: Star, value: "4.9/5", label: "Across 180+ Verified Reviews" },
];

export const DMSocialProofSection = () => (
  <section className="py-8 md:py-12 bg-card border-b border-border/30">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        {stats.map((stat, i) => (
          <div key={i} className="text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-2">
              <stat.icon className="w-5 h-5 text-brand" />
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand mb-0.5">{stat.value}</div>
            <p className="text-[11px] sm:text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
