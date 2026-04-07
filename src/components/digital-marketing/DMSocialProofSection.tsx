import { useEffect, useRef, useState } from "react";
import { Star, Award, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  { name: "Magicbricks", logo: magicbricksLogo },
  { name: "Bhrighu Academy", logo: bhrighuAcademyLogo },
  { name: "Mamaearth", logo: mamaearthLogo },
  { name: "Jain University", logo: jainUniversityLogo },
  { name: "upGrad", logo: upgradLogo },
  { name: "Harvest International", logo: harvestInternationalLogo },
  { name: "Tata 1mg", logo: tata1mgLogo },
  { name: "SMR University", logo: smrUniversityLogo },
  { name: "Shriram Properties", logo: shriramPropertiesLogo },
  { name: "Atria Institute", logo: atriaInstituteLogo },
  { name: "Lancesoft", logo: lancesoftLogo },
];

const stats = [
  { value: "300+", label: "Brands Trust Our Digital Marketing Agency in Bangalore", icon: Award },
  { value: "5x", label: "Average Marketing ROI Delivered", icon: TrendingUp },
  { value: "30+", label: "In-House Digital Marketing Experts", icon: Users },
  { value: "4.9/5", label: "Client Satisfaction Rating", icon: Star },
];

export const DMSocialProofSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const scrollPositionRef = useRef(0);
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => setScrollVisible(entries[0]?.isIntersecting ?? false),
      { threshold: 0.1 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !scrollVisible) return;
    let lastTime = 0;
    const FRAME_INTERVAL = 1000 / 30;
    const animate = (timestamp: number) => {
      const elapsed = timestamp - lastTime;
      if (elapsed >= FRAME_INTERVAL) {
        lastTime = timestamp - (elapsed % FRAME_INTERVAL);
        scrollPositionRef.current += 0.4;
        if (scrollPositionRef.current >= container.scrollWidth / 2) {
          scrollPositionRef.current = 0;
        }
        container.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [scrollVisible]);

  return (
    <section ref={sectionRef} className="py-10 md:py-16 bg-white border-b border-border/30">
      <div className="container mx-auto px-4">
        {/* Stats Row */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand/10 rounded-xl mb-3">
                <stat.icon className="w-6 h-6 text-brand" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-brand mb-1">{stat.value}</div>
              <p className="text-sm text-muted-foreground leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Header */}
        <div className={`text-center mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-brand text-brand" />
            ))}
          </div>
          <p className="text-sm font-medium text-foreground">
            Trusted by <span className="text-brand font-bold">300+ businesses in Bangalore</span> as their preferred digital marketing agency
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-8 will-change-transform items-center"
            style={{ width: "fit-content" }}
          >
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center px-4 py-3 bg-muted/50 rounded-xl border border-border/30">
                <img src={client.logo} alt={`${client.name} — client of digital marketing agency in Bangalore`} className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className={`flex flex-wrap items-center justify-center gap-4 mt-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {["Google Partner Agency", "Meta Business Partner", "100% In-House Team", "No Long-Term Contracts"].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-brand/5 rounded-full border border-brand/10">
              <CheckCircle2 className="w-4 h-4 text-brand" />
              <span className="text-sm font-medium text-foreground">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
