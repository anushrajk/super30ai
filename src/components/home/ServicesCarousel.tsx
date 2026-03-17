import { useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Sparkles, LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  features: string[];
  href: string;
  color: string;
}

interface ServicesCarouselProps {
  services: Service[];
}

export const ServicesCarousel = ({ services }: ServicesCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home-services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Full-Service Digital Marketing Solutions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            From AI-powered SEO and paid ads to social media management and web development — everything your brand needs under one roof.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-10 h-10 bg-background border border-border rounded-full items-center justify-center shadow-lg hover:bg-muted transition-colors hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-10 h-10 bg-background border border-border rounded-full items-center justify-center shadow-lg hover:bg-muted transition-colors hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((service, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] relative bg-background/95 border-2 border-border/50 hover:border-transparent overflow-hidden group snap-start"
                style={{ transform: "translateZ(0)" }}
              >
                {/* Gradient border on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{ padding: "2px", margin: "-2px", borderRadius: "inherit" }}
                >
                  <div className="w-full h-full bg-background rounded-[inherit]" />
                </div>


                <CardContent className="relative p-5 md:p-6 z-10">
                  {/* Icon */}
                  <div className={`relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10" />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <ul className="space-y-2.5 mb-5">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-foreground opacity-80 group-hover:opacity-100 transition-all duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        <div className={`w-5 h-5 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to={service.href}>
                    <Button className={`w-full bg-gradient-to-r ${service.color} transition-all duration-300 text-white`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile swipe hint */}
        <p className="text-center mt-3 text-sm text-muted-foreground md:hidden">
          Swipe to explore more →
        </p>
      </div>
    </section>
  );
};
