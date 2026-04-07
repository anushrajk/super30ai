import { Star } from "lucide-react";

import magicbricksLogo from "@/assets/clients/magicbricks.png";
import mamaearthLogo from "@/assets/clients/mamaearth.png";
import upgradLogo from "@/assets/clients/upgrad.png";
import tata1mgLogo from "@/assets/clients/tata1mg.png";
import shriramPropertiesLogo from "@/assets/clients/shriram-properties.png";
import lancesoftLogo from "@/assets/clients/lancesoft.png";
import jainUniversityLogo from "@/assets/clients/jain-university.png";
import harvestInternationalLogo from "@/assets/clients/harvest-international.png";
import bhrighuAcademyLogo from "@/assets/clients/bhrighu-academy.png";
import smrUniversityLogo from "@/assets/clients/smr-university.png";
import atriaInstituteLogo from "@/assets/clients/atria-institute.png";

const clientLogos = [
  { name: "Magicbricks", logo: magicbricksLogo, industry: "Real Estate" },
  { name: "Bhrighu Academy", logo: bhrighuAcademyLogo, industry: "Education" },
  { name: "Mamaearth", logo: mamaearthLogo, industry: "D2C / E-commerce" },
  { name: "Jain University", logo: jainUniversityLogo, industry: "Education" },
  { name: "upGrad", logo: upgradLogo, industry: "Education" },
  { name: "Harvest International School", logo: harvestInternationalLogo, industry: "Education" },
  { name: "Tata 1mg", logo: tata1mgLogo, industry: "Healthcare" },
  { name: "SMR University", logo: smrUniversityLogo, industry: "Education" },
  { name: "Shriram Properties", logo: shriramPropertiesLogo, industry: "Real Estate" },
  { name: "Atria Institute of Technology", logo: atriaInstituteLogo, industry: "Education" },
  { name: "Lancesoft", logo: lancesoftLogo, industry: "Healthcare" },
];

export const ClientLogosSection = () => {
  return (
    <section className="py-6 md:py-10 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4 md:mb-6">
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm font-medium text-white">
            Trusted by <span className="text-brand font-bold">50+ leading companies</span> across industries
          </p>
        </div>

        {/* CSS-only infinite scroll */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div 
                key={index}
                className="flex-shrink-0 flex items-center gap-3 px-5 py-3 bg-white/5 rounded-xl border border-white/10"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-12 h-12 object-cover rounded-lg"
                  loading="lazy"
                  decoding="async"
                  width="48"
                  height="48"
                />
                <div>
                  <span className="text-white font-medium whitespace-nowrap block text-sm">{client.name}</span>
                  <span className="text-gray-400 text-xs">{client.industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-4 md:mt-6 pt-3 md:pt-4 border-t border-white/10">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">300%+</p>
            <p className="text-xs text-gray-400">Avg. Traffic Growth</p>
          </div>
          <div className="w-px h-8 bg-white/20 hidden sm:block" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white">50+</p>
            <p className="text-xs text-gray-400">AI Audits Delivered</p>
          </div>
          <div className="w-px h-8 bg-white/20 hidden sm:block" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white">$2M+</p>
            <p className="text-xs text-gray-400">Revenue Generated</p>
          </div>
          <div className="w-px h-8 bg-white/20 hidden sm:block" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white">4.9/5</p>
            <p className="text-xs text-gray-400">Client Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};
