const stats = [
  { value: "300+", label: "Brands Served" },
  { value: "5x", label: "Avg. ROI" },
  { value: "30+", label: "In-House Experts" },
  { value: "4.9/5", label: "Client Rating" },
];

export const DMSocialProofSection = () => (
  <section className="py-6 md:py-10 bg-white border-b border-border/30">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
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
