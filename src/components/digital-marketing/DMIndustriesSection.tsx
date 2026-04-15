import {
  Rocket, ShoppingCart, Building, GraduationCap, Stethoscope, Briefcase,
  Plane, UtensilsCrossed, Car, Dumbbell, Landmark, Flower2,
  ShieldCheck, Factory, Wifi, Baby, PawPrint, Gem
} from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const industriesRow1 = [
  { icon: Rocket, name: "SaaS & Tech" },
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: Building, name: "Real Estate" },
  { icon: GraduationCap, name: "EdTech" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Briefcase, name: "B2B Enterprise" },
  { icon: Plane, name: "Travel" },
  { icon: UtensilsCrossed, name: "F&B" },
  { icon: Car, name: "Automotive" },
];

const industriesRow2 = [
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

const IndustryPill = ({ icon: Icon, name }: { icon: React.ElementType; name: string }) => (
  <div className="flex items-center gap-4 px-8 py-5 bg-muted/40 border border-border/50 rounded-full hover:border-brand/30 hover:bg-brand/[0.03] transition-all duration-300 group cursor-pointer mx-3">
    <div className="w-12 h-12 rounded-full bg-background border border-border/60 flex items-center justify-center group-hover:border-brand/20 transition-colors">
      <Icon className="w-6 h-6 text-muted-foreground group-hover:text-brand transition-colors" />
    </div>
    <span className="text-lg font-semibold text-foreground whitespace-nowrap">{name}</span>
  </div>
);

export const DMIndustriesSection = () => (
  <section className="py-24 md:py-32 lg:py-40 bg-background relative overflow-hidden">
    <div className="container mx-auto px-4 mb-16 md:mb-20">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-brand text-xs font-bold uppercase tracking-[0.25em] mb-4 block">
          Industry Expertise
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-5">
          Marketing for <span className="text-brand">every industry</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Vertical-specific strategies proven across 18+ industries. We speak your market's language.
        </p>
      </div>
    </div>

    {/* Marquee Container */}
    <div className="relative space-y-6">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Row 1 - Left to Right */}
      <Marquee speed="slow" pauseOnHover className="py-2">
        {[...industriesRow1, ...industriesRow1].map((ind, i) => (
          <IndustryPill key={`row1-${i}`} icon={ind.icon} name={ind.name} />
        ))}
      </Marquee>

      {/* Row 2 - Right to Left (reverse) */}
      <Marquee speed="slow" pauseOnHover reverse className="py-2">
        {[...industriesRow2, ...industriesRow2].map((ind, i) => (
          <IndustryPill key={`row2-${i}`} icon={ind.icon} name={ind.name} />
        ))}
      </Marquee>
    </div>
  </section>
);
