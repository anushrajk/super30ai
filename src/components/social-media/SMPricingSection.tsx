import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BentoBadge } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const packages = [
  {
    name: "Starter",
    posts: "15 Posts/Month",
    features: ["Instagram & Facebook", "2 Revisions per post", "Brand template creation", "Monthly content calendar"],
    popular: false,
  },
  {
    name: "Growth",
    posts: "30 Posts/Month",
    features: ["All platforms", "Unlimited revisions", "Carousel & Story designs", "Hashtag research", "Caption writing"],
    popular: true,
  },
  {
    name: "Premium",
    posts: "45+ Posts/Month",
    features: ["Everything in Growth", "Reel cover designs", "Festival special posts", "Dedicated designer", "Priority delivery"],
    popular: false,
  },
];

export const SMPricingSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  const scrollToForm = () => {
    const formEl = document.getElementById("lead-capture-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-8 md:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <BentoBadge className="mb-4">Pricing</BentoBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">Simple, Transparent Pricing</h2>
          <p className="text-base md:text-lg text-muted-foreground">Choose a plan that fits your social media needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative bg-card border rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 ${pkg.popular ? "border-brand ring-2 ring-brand/20" : "border-border"}
                ${isVisible ? "animate-bento-reveal" : "opacity-0"}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
              )}
              <h3 className="text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
              <p className="text-brand font-semibold text-lg mb-4">{pkg.posts}</p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Button
                onClick={scrollToForm}
                className={`w-full rounded-full ${pkg.popular ? "bg-brand hover:bg-brand/90 text-white" : ""}`}
                variant={pkg.popular ? "default" : "outline"}
              >
                Get Started<ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
