import { Eye, Unlock, UserCheck, Award, Headphones, Brain } from "lucide-react";

const trustSignals = [
  { icon: Eye, stat: "24/7", label: "live dashboard access", what: "Full transparency, no black-box reporting", bg: "bg-brand" },
  { icon: Unlock, stat: "0", label: "lock-in contracts", what: "No lock-in contracts", bg: "bg-foreground" },
  { icon: UserCheck, stat: "100%", label: "in-house execution", what: "100% in-house execution", bg: "bg-brand/90" },
  { icon: Award, stat: "2x", label: "certified partner", what: "Google & Meta Partner Certified", bg: "bg-foreground" },
  { icon: Headphones, stat: "1", label: "dedicated manager", what: "Dedicated account manager", bg: "bg-brand" },
  { icon: Brain, stat: "AI+", label: "human strategy", what: "AI + Human strategy", bg: "bg-foreground" },
];

export const DMBenefitsSection = () => (
  <section className="py-12 md:py-20 lg:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
          Why Choose Us
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
          Why 200+ Brands Choose Our <span className="text-brand">Digital Marketing Company in Bangalore</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          In a city with hundreds of agencies, here is what separates a good agency from the right agency for your business.
        </p>
      </div>

      {/* Bento grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {trustSignals.map((signal, i) => {
          const Icon = signal.icon;
          const isLarge = i === 0 || i === 3;

          return (
            <div
              key={i}
              className={`relative rounded-2xl sm:rounded-3xl overflow-hidden ${
                isLarge ? "row-span-1" : ""
              } ${signal.bg} ${
                signal.bg === "bg-foreground" ? "text-background" : "text-white"
              } p-5 sm:p-7 flex flex-col justify-between min-h-[160px] sm:min-h-[200px]`}
            >
              {/* Icon top-right */}
              <div className="flex justify-between items-start">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${
                  signal.bg === "bg-foreground" ? "bg-background/15" : "bg-white/15"
                }`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>

              {/* Stat + label */}
              <div className="mt-auto">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black leading-none mb-1">
                  {signal.stat}
                </div>
                <div className={`text-sm sm:text-base font-medium ${
                  signal.bg === "bg-foreground" ? "text-background/70" : "text-white/80"
                }`}>
                  {signal.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
