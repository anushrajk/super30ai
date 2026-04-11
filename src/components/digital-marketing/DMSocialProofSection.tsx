const stats = [
  { value: "200+", label: "Brands Served Since 2017" },
  { value: "520+", label: "Campaigns Delivered" },
  { value: "3.8x", label: "Avg. ROAS Across Campaigns" },
  { value: "34", label: "Industry Awards" },
  { value: "4.9/5", label: "Across 180+ Verified Reviews" },
];

export const DMSocialProofSection = () => (
  <section className="py-6 md:py-10 bg-white border-b border-border/30">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand mb-0.5">{stat.value}</div>
            <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
