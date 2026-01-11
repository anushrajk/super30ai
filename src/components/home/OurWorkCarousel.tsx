import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import magicbricksLogo from "@/assets/case-studies/magicbricks.png";
import mamaEarthLogo from "@/assets/case-studies/mamaearth.png";
import upgradLogo from "@/assets/case-studies/upgrad.png";
import tata1mgLogo from "@/assets/case-studies/tata1mg.png";
import shriramLogo from "@/assets/case-studies/shriram-properties.png";
import lancesoftLogo from "@/assets/case-studies/lancesoft.png";
import jainUniversityLogo from "@/assets/case-studies/jain-university.png";
import harvestInternationalLogo from "@/assets/case-studies/harvest-international.png";
import atriaInstituteLogo from "@/assets/case-studies/atria-institute.png";
import bhrighuAcademyLogo from "@/assets/case-studies/bhrighu-academy.png";
import { CaseStudyPopup } from "./CaseStudyPopup";

const caseStudies = [
  {
    id: 1,
    title: "Magicbricks",
    industry: "Real Estate",
    image: "bg-gradient-to-br from-rose-600 to-rose-700",
    logo: magicbricksLogo,
  },
  {
    id: 2,
    title: "Jain University",
    industry: "Education",
    image: "bg-gradient-to-br from-blue-600 to-blue-700",
    logo: jainUniversityLogo,
  },
  {
    id: 3,
    title: "Mamaearth",
    industry: "D2C Beauty & Skincare",
    image: "bg-gradient-to-br from-green-400 to-blue-500",
    logo: mamaEarthLogo,
  },
  {
    id: 4,
    title: "Harvest International School",
    industry: "Education",
    image: "bg-gradient-to-br from-green-600 to-green-700",
    logo: harvestInternationalLogo,
  },
  {
    id: 5,
    title: "upGrad",
    industry: "Education",
    image: "bg-gradient-to-br from-red-500 to-red-600",
    logo: upgradLogo,
  },
  {
    id: 6,
    title: "Atria Institute",
    industry: "Education",
    image: "bg-gradient-to-br from-purple-600 to-purple-700",
    logo: atriaInstituteLogo,
  },
  {
    id: 7,
    title: "Tata 1mg",
    industry: "HealthTech",
    image: "bg-gradient-to-br from-orange-400 to-red-400",
    logo: tata1mgLogo,
  },
  {
    id: 8,
    title: "Bhrighu Academy",
    industry: "Education",
    image: "bg-gradient-to-br from-orange-500 to-orange-600",
    logo: bhrighuAcademyLogo,
  },
  {
    id: 9,
    title: "Shriram Properties",
    industry: "Real Estate",
    image: "bg-gradient-to-br from-blue-500 to-blue-600",
    logo: shriramLogo,
  },
  {
    id: 10,
    title: "Lancesoft Healthcare",
    industry: "Healthcare Staffing",
    image: "bg-gradient-to-br from-slate-700 to-slate-800",
    logo: lancesoftLogo,
  },
];

export const OurWorkCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null);

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
              <Card
                key={study.id}
                onClick={() => study.logo && setSelectedStudy(study)}
                className={`flex-shrink-0 w-[280px] md:w-[300px] bg-background border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group snap-start overflow-hidden ${study.logo ? 'cursor-pointer' : ''}`}
              >
                <div className={`h-36 ${study.image} flex items-center justify-center relative overflow-hidden`}>
                  {study.logo ? (
                    <img src={study.logo} alt={study.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-white/80 text-5xl font-bold opacity-30">
                      {study.title[0]}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-1">{study.title}</h3>
                  <p className="text-sm text-muted-foreground">{study.industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <Link to="/work">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Case Study Popup */}
      <CaseStudyPopup
        open={!!selectedStudy}
        onOpenChange={(open) => !open && setSelectedStudy(null)}
        brandName={selectedStudy?.title || ""}
        industry={selectedStudy?.industry || ""}
        logo={selectedStudy?.logo}
      />
    </section>
  );
};
