import {
  Rocket, ShoppingCart, Building, GraduationCap, Stethoscope, Briefcase,
  Plane, UtensilsCrossed, Car, Dumbbell, Landmark, Flower2,
  ShieldCheck, Factory, Wifi, Baby, PawPrint, Gem
} from "lucide-react";

const industries = [
  { icon: Rocket, name: "SaaS & Tech Startups" },
  { icon: ShoppingCart, name: "E-commerce & D2C" },
  { icon: Building, name: "Real Estate" },
  { icon: GraduationCap, name: "EdTech & Education" },
  { icon: Stethoscope, name: "Healthcare & Clinics" },
  { icon: Briefcase, name: "B2B & Enterprise" },
  { icon: Plane, name: "Travel & Hospitality" },
  { icon: UtensilsCrossed, name: "Food & Restaurant" },
  { icon: Car, name: "Automotive" },
  { icon: Dumbbell, name: "Fitness & Wellness" },
  { icon: Landmark, name: "Finance & Insurance" },
  { icon: Flower2, name: "Beauty & Fashion" },
  { icon: ShieldCheck, name: "Legal Services" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Wifi, name: "Telecom & IT Services" },
  { icon: Baby, name: "Parenting & Kids" },
  { icon: PawPrint, name: "Pet Care" },
  { icon: Gem, name: "Luxury & Jewellery" },
];

const row1 = industries.slice(0, 9);
const row2 = industries.slice(9);

const MarqueeRow = ({ items, direction = "left" }: { items: typeof industries; direction?: "left" | "right" }) => (
  <div className="relative overflow-hidden py-2" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
    <div
      className="flex gap-3 w-max"
      style={{ animation: `${direction === "left" ? "marquee-left" : "marquee-right"} 60s linear infinite` }}
    >
      {[...items, ...items].map((ind, i) => (
        <div key={i} className="flex items-center gap-2 px-4 py-2.5 bg-background border border-border rounded-full whitespace-nowrap shrink-0">
          <ind.icon className="w-4 h-4 text-brand shrink-0" />
          <span className="text-xs sm:text-sm font-medium text-foreground">{ind.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export const DMIndustriesSection = () => (
  <section className="py-12 md:py-20 lg:py-28 bg-card">
    <style>{`
      @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      @keyframes marquee-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
    `}</style>
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
          Industry Expertise
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
          Industry-Specific <span className="text-brand">Digital Marketing</span> for Bangalore Businesses
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          We serve 18+ industries with tailored strategies built by vertical specialists.
        </p>
      </div>
      <div className="-mx-4 sm:mx-0">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>
    </div>
  </section>
);
