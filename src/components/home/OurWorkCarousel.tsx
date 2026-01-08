import { useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Brand",
    industry: "Fashion & Apparel",
    results: [
      { metric: "Organic Traffic", value: "+340%" },
      { metric: "Revenue", value: "+₹2.1Cr" },
    ],
    image: "bg-gradient-to-br from-pink-500 to-rose-600",
  },
  {
    id: 2,
    title: "SaaS Platform",
    industry: "HR Tech",
    results: [
      { metric: "ROAS", value: "5.2x" },
      { metric: "Leads", value: "+180%" },
    ],
    image: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Healthcare Startup",
    industry: "HealthTech",
    results: [
      { metric: "Domain Authority", value: "18→52" },
      { metric: "Organic Leads", value: "+290%" },
    ],
    image: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
  {
    id: 4,
    title: "FinTech Company",
    industry: "Financial Services",
    results: [
      { metric: "Lead Quality", value: "+85%" },
      { metric: "Conv. Rate", value: "3.2x" },
    ],
    image: "bg-gradient-to-br from-violet-500 to-purple-600",
  },
  {
    id: 5,
    title: "Real Estate Portal",
    industry: "PropTech",
    results: [
      { metric: "Organic Traffic", value: "+520%" },
      { metric: "Listings Inquiries", value: "+410%" },
    ],
    image: "bg-gradient-to-br from-amber-500 to-orange-600",
  },
  {
    id: 6,
    title: "EdTech Platform",
    industry: "Education",
    results: [
      { metric: "Student Signups", value: "+350%" },
      { metric: "Meta ROAS", value: "4.8x" },
    ],
    image: "bg-gradient-to-br from-cyan-500 to-teal-600",
  },
];

export const OurWorkCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-accent border border-border px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-foreground text-sm font-medium">Our Work</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Don't Take Our Word for It.{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              See the Proof.
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Real results from real businesses. No fluff, just numbers that matter.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-muted transition-colors hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-muted transition-colors hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="flex-shrink-0 w-[280px] md:w-[300px] rounded-xl overflow-hidden snap-start group hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-36 ${study.image} flex items-center justify-center relative`}>
                  <span className="text-white/80 text-5xl font-bold opacity-30">
                    {study.title[0]}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <Link to="/work">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
