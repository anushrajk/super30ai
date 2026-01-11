import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CaseStudyPopup } from "@/components/home/CaseStudyPopup";

import magicbricksLogo from "@/assets/case-studies/magicbricks.png";
import mamaEarthLogo from "@/assets/case-studies/mamaearth.png";
import upgradLogo from "@/assets/case-studies/upgrad.png";
import tata1mgLogo from "@/assets/case-studies/tata1mg.png";
import shriramLogo from "@/assets/case-studies/shriram-properties.png";
import lancesoftLogo from "@/assets/case-studies/lancesoft.png";

// New EdTech logos
import jainUniversityLogo from "@/assets/clients/jain-university.png";
import harvestInternationalLogo from "@/assets/clients/harvest-international.png";
import soundaryaLogo from "@/assets/clients/soundarya.png";
import bhrighuAcademyLogo from "@/assets/clients/bhrighu-academy.png";
import smrUniversityLogo from "@/assets/clients/smr-university.png";
import atriaInstituteLogo from "@/assets/clients/atria-institute.png";

// Alternating order: existing, new EdTech, existing, new EdTech...
const clientCompanies = [
  { name: "Magicbricks", logo: magicbricksLogo, industry: "Real Estate" },
  { name: "Bhrighu Academy", logo: bhrighuAcademyLogo, industry: "EdTech" },
  { name: "Mamaearth", logo: mamaEarthLogo, industry: "D2C" },
  { name: "Jain University", logo: jainUniversityLogo, industry: "EdTech" },
  { name: "upGrad", logo: upgradLogo, industry: "EdTech" },
  { name: "Harvest International School", logo: harvestInternationalLogo, industry: "EdTech" },
  { name: "Tata 1mg", logo: tata1mgLogo, industry: "Healthcare" },
  { name: "Soundarya", logo: soundaryaLogo, industry: "EdTech" },
  { name: "Shriram Properties", logo: shriramLogo, industry: "Real Estate" },
  { name: "SMR University", logo: smrUniversityLogo, industry: "EdTech" },
  { name: "Lancesoft", logo: lancesoftLogo, industry: "Staffing" },
  { name: "Atria Institute of Technology", logo: atriaInstituteLogo, industry: "EdTech" },
];

export const ClientLogosGrid = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [selectedCompany, setSelectedCompany] = useState<{ name: string; industry: string; logo: string } | null>(null);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-20 bg-muted/30 border-y border-border/50"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-10 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Our Clients
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Trusted by 50+ Leading Companies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From startups to enterprises, we've helped businesses across industries achieve remarkable growth
          </p>
        </div>

        {/* Logo Grid - 3 per row */}
        <div className="max-w-5xl mx-auto">
          <div 
            className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {clientCompanies.map((company, index) => (
              <button
                key={company.name}
                onClick={() => setSelectedCompany(company)}
                className="group bg-background border border-border/50 rounded-xl p-6 md:p-8 flex flex-col items-center justify-center hover:border-orange-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-12 md:h-16 w-auto object-contain mb-3"
                />
                <span className="text-sm font-semibold text-foreground">{company.name}</span>
                <span className="text-xs text-muted-foreground mt-1">{company.industry}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Additional companies message */}
        <div className={`text-center mt-8 md:mt-10 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-muted-foreground">
            + 44 more companies across various industries
          </p>
        </div>
      </div>

      {/* Case Study Popup */}
      {selectedCompany && (
        <CaseStudyPopup
          open={!!selectedCompany}
          onOpenChange={(open) => !open && setSelectedCompany(null)}
          brandName={selectedCompany.name}
          industry={selectedCompany.industry}
          logo={selectedCompany.logo}
        />
      )}
    </section>
  );
};
