import { useState, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import webDesign1 from "@/assets/portfolio/web-design-1.jpg";
import webDesign2 from "@/assets/portfolio/web-design-2.jpg";
import webDesign3 from "@/assets/portfolio/web-design-3.jpg";

const projects = [
  {
    category: "CORPORATE WEBSITE",
    title: "Professional Business Website",
    description:
      "Designed and developed a high-converting corporate website with modern UI, clear CTAs, and SEO-optimized structure to drive leads and build brand trust.",
    tags: ["Corporate Site", "Responsive", "SEO Ready", "CMS Ready"],
    image: webDesign1,
    cta: "View Case Study",
  },
  {
    category: "E-COMMERCE STORE",
    title: "Full-Featured Online Store",
    description:
      "Built a complete e-commerce platform with product catalogs, payment gateway integration, cart management, and a streamlined checkout experience.",
    tags: ["E-Commerce", "Payment Gateway", "Product Catalog", "Mobile First"],
    image: webDesign2,
    cta: "View Case Study",
  },
  {
    category: "SAAS LANDING PAGE",
    title: "High-Converting SaaS Landing",
    description:
      "Crafted a conversion-focused landing page with pricing sections, feature highlights, testimonials, and optimized CTAs for maximum sign-ups.",
    tags: ["Landing Page", "SaaS", "Conversion Focused", "A/B Tested"],
    image: webDesign3,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center min-h-[500px]">
          {/* Left — Text content */}
          <div className="space-y-6" key={activeIndex}>
            <p className="text-brand text-xs md:text-sm font-semibold tracking-[0.2em] uppercase animate-fade-in">
              {project.category}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in" style={{ animationDelay: "50ms" }}>
              {project.title}
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg animate-fade-in" style={{ animationDelay: "100ms" }}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 animate-fade-in" style={{ animationDelay: "150ms" }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/15 text-white/70 text-xs md:text-sm px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Link to="/seo-agency-near-me">
                <Button className="bg-brand hover:bg-brand/90 text-white rounded-full px-6 py-3 h-auto text-sm font-semibold group">
                  {project.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right — Browser mockup */}
          <div className="relative animate-fade-in" style={{ animationDelay: "100ms" }} key={`img-${activeIndex}`}>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[hsl(222,30%,12%)] shadow-2xl">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[hsl(222,30%,14%)] border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/5 rounded-md h-6 max-w-xs" />
                </div>
              </div>
              {/* Screenshot */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
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
