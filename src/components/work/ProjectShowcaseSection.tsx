import { useState, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import aadhyaImg from "@/assets/portfolio/aadhya-animatics.png";
import isitImg from "@/assets/portfolio/isit.png";
import interiorsImg from "@/assets/portfolio/interiors-and-more.png";
import madrabbitImg from "@/assets/portfolio/madrabbit.png";

const projects = [
  {
    category: "VIDEO PRODUCTION WEBSITE",
    title: "Aadhya Animatics",
    description:
      "Designed and developed a cinematic, dark-themed website for a leading video production company — with bold CTAs, portfolio showcases, and SEO-optimized structure.",
    tags: ["Corporate Site", "Dark Theme", "SEO Ready", "Portfolio"],
    image: aadhyaImg,
    cta: "View Case Study",
  },
  {
    category: "E-COMMERCE STORE",
    title: "iSit Office Space Solutions",
    description:
      "Built a complete e-commerce platform for office furniture with product catalogs, payment gateway integration, and a streamlined checkout experience.",
    tags: ["E-Commerce", "Payment Gateway", "Product Catalog", "Mobile First"],
    image: isitImg,
    cta: "View Case Study",
  },
  {
    category: "INTERIOR DESIGN WEBSITE",
    title: "Interiors & More",
    description:
      "Crafted a visually stunning website for an interior design studio — featuring project galleries, service pages, and lead capture forms for consultations.",
    tags: ["Corporate Site", "Gallery", "Lead Generation", "Responsive"],
    image: interiorsImg,
    cta: "View Case Study",
  },
  {
    category: "RACING ACADEMY WEBSITE",
    title: "Mad Rabbit Racing",
    description:
      "Designed a bold, high-energy website for India's premier motorcycle racing academy — with dynamic visuals, course listings, and enrollment-driven CTAs.",
    tags: ["Landing Page", "Enrollment Focused", "Responsive", "Action Sports"],
    image: madrabbitImg,
    cta: "View Case Study",
  },
];

export const ProjectShowcaseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (index >= 0 && index < projects.length) setActiveIndex(index);
    },
    []
  );

  const project = projects[activeIndex];

  return (
    <section className="bg-[hsl(222,47%,8%)] py-16 md:py-24 relative overflow-hidden">
      {/* Large background number */}
      <div className="absolute top-4 left-4 md:top-8 md:left-12 pointer-events-none select-none">
        <span className="text-[8rem] md:text-[12rem] font-bold leading-none text-white/[0.03]">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-6 text-center md:text-left" key={activeIndex}>
            <p className="text-brand text-xs md:text-sm font-semibold tracking-[0.2em] uppercase animate-fade-in">
              {project.category}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in" style={{ animationDelay: "50ms" }}>
              {project.title}
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg animate-fade-in" style={{ animationDelay: "100ms" }}>
              {project.description}
            </p>
            <div className="animate-fade-in flex justify-center md:justify-start" style={{ animationDelay: "150ms" }}>
              <Link to="/contact-us">
                <Button className="bg-brand hover:bg-brand/90 text-white rounded-full px-6 py-3 h-auto text-sm font-semibold group">
                  {project.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Laptop mockup */}
          <div className="animate-fade-in" key={`img-${activeIndex}`} style={{ animationDelay: "100ms" }}>
            <div className="relative mx-auto max-w-md md:max-w-lg">
              {/* Laptop frame */}
              <div className="bg-[#1a1a2e] rounded-t-xl p-1 pt-3 border border-white/10">
                {/* Browser dots */}
                <div className="flex items-center gap-1.5 px-3 pb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                {/* Screenshot */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full aspect-[16/10] object-cover object-top rounded-sm"
                />
              </div>
              {/* Laptop base */}
              <div className="bg-[#1a1a2e] h-3 rounded-b-lg mx-8 border-x border-b border-white/10" />
              <div className="bg-[#1a1a2e]/60 h-1.5 rounded-b-xl mx-16 border-x border-b border-white/5" />
            </div>
          </div>
        </div>

        {/* Bottom nav: counter + arrows + dots */}
        <div className="flex items-center justify-between mt-12 md:mt-16">
          <div className="flex items-center gap-1 text-sm">
            <span className="text-brand font-bold text-lg">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-white/30 mx-1">/</span>
            <span className="text-white/30 text-lg">
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-brand w-6"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === projects.length - 1}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
