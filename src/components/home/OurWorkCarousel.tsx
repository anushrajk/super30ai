import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import magicbricksLogo from "@/assets/case-studies/magicbricks.png";
import mamaEarthLogo from "@/assets/case-studies/mamaearth.png";
import upgradLogo from "@/assets/case-studies/upgrad.png";
import tata1mgLogo from "@/assets/case-studies/tata1mg.png";
import shriramLogo from "@/assets/case-studies/shriram-properties.png";
import jainUniversityLogo from "@/assets/case-studies/jain-university.png";
import atriaInstituteLogo from "@/assets/case-studies/atria-institute.png";
import bhrighuAcademyLogo from "@/assets/case-studies/bhrighu-academy.png";

const clients = [
  { name: "Magicbricks", industry: "Real Estate", logo: magicbricksLogo, slug: "magicbricks" },
  { name: "Jain University", industry: "Education", logo: jainUniversityLogo, slug: "jain-university" },
  { name: "Mamaearth", industry: "D2C", logo: mamaEarthLogo, slug: "mamaearth" },
  { name: "upGrad", industry: "Education", logo: upgradLogo, slug: "upgrad" },
  { name: "Tata 1mg", industry: "Healthcare", logo: tata1mgLogo, slug: "tata-1mg" },
  { name: "Atria Institute", industry: "Education", logo: atriaInstituteLogo, slug: "atria-institute" },
  { name: "Bhrighu Academy", industry: "Education", logo: bhrighuAcademyLogo, slug: "bhrighu-academy" },
  { name: "Shriram Properties", industry: "Real Estate", logo: shriramLogo, slug: "shriram-properties" },
];

export const OurWorkCarousel = () => {
  const navigate = useNavigate();

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

        {/* Client Cards Grid - Same as SEO tab layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {clients.map((client) => (
            <Card
              key={client.name}
              className="group bg-background border-border/30 overflow-hidden cursor-pointer hover:shadow-lg hover:border-border/60 transition-all duration-300 rounded-2xl"
              onClick={() => navigate(`/report/${client.slug}`)}
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-center h-44 bg-muted/30 border-b border-border/20 p-6">
                  <img src={client.logo} alt={client.name} className="max-h-20 max-w-[70%] object-contain" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base text-foreground">{client.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{client.industry}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <Link to="/seo-results-bangalore">
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
    </section>
  );
};
