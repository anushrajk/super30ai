import {
  Rocket, ShoppingCart, Building, GraduationCap, Stethoscope, Briefcase,
  Plane, UtensilsCrossed, Car, Dumbbell, Landmark, Flower2,
  ShieldCheck, Factory, Wifi, Baby, PawPrint, Gem
} from "lucide-react";

const industries = [
  { icon: Rocket, name: "SaaS & Tech" },
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: Building, name: "Real Estate" },
  { icon: GraduationCap, name: "EdTech" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Briefcase, name: "B2B Enterprise" },
  { icon: Plane, name: "Travel" },
  { icon: UtensilsCrossed, name: "F&B" },
  { icon: Car, name: "Automotive" },
  { icon: Dumbbell, name: "Fitness" },
  { icon: Landmark, name: "Finance" },
  { icon: Flower2, name: "Fashion" },
  { icon: ShieldCheck, name: "Legal" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Wifi, name: "IT Services" },
  { icon: Baby, name: "Parenting" },
  { icon: PawPrint, name: "Pet Care" },
  { icon: Gem, name: "Luxury" },
];

export const DMIndustriesSection = () => (
  <section className="py-20 md:py-28 lg:py-36 bg-background relative">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <span className="text-brand text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            Industry Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-4">
            Industry-specific <span className="text-brand">digital marketing</span>
          </h2>
          <p className="text-muted-foreground text-base">
            We serve 18+ industries with tailored strategies built by vertical specialists.
          </p>
        </div>

        {/* Grid of industries */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 py-6 px-3 bg-muted/30 border border-border/40 rounded-2xl hover:border-brand/20 hover:bg-brand/[0.03] transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-background border border-border/50 flex items-center justify-center group-hover:border-brand/20 transition-colors">
                <ind.icon className="w-5 h-5 text-muted-foreground group-hover:text-brand transition-colors" />
              </div>
              <span className="text-xs font-medium text-foreground text-center">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
