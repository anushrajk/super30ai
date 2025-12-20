import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";

// Generate 30+ company logos for infinite loading
const allLogos = [
  // Row 1-3 (initial visible)
  "TechFlow", "DataSync", "CloudNine", "GrowthIQ", "ScaleUp",
  "NexGen", "PropTech", "MediCare", "EduPlus", "FinServ",
  "RetailMax", "LogiTech", "HealthFirst", "CodeCraft", "MarketPro",
  // Row 4-6
  "InnovateCo", "SmartBiz", "DigitalEdge", "FutureTech", "EliteServe",
  "PrimeLogic", "VentureX", "CoreSystems", "NextLevel", "TrustPoint",
  "GlobalReach", "SwiftSolutions", "PeakPerform", "BrightIdeas", "MaxGrowth",
  // Row 7-9
  "VisionTech", "AlphaWave", "BetaSoft", "GammaCorp", "DeltaGroup",
  "EpsilonLabs", "ZetaTech", "EtaVentures", "ThetaCo", "IotaSystems",
  "KappaTech", "LambdaDigital", "MuIndustries", "NuVentures", "OmicronTech",
];

export const ClientLogosGrid = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [visibleRows, setVisibleRows] = useState(3);
  const logosPerRow = 5;
  const totalLogos = visibleRows * logosPerRow;
  const hasMore = totalLogos < allLogos.length;

  const loadMore = () => {
    setVisibleRows((prev) => Math.min(prev + 3, Math.ceil(allLogos.length / logosPerRow)));
  };

  const visibleLogos = allLogos.slice(0, totalLogos);

  // Group logos into rows
  const rows: string[][] = [];
  for (let i = 0; i < visibleLogos.length; i += logosPerRow) {
    rows.push(visibleLogos.slice(i, i + logosPerRow));
  }

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

        {/* Logo Grid */}
        <div className="space-y-4 md:space-y-6 max-w-6xl mx-auto">
          {rows.map((row, rowIndex) => (
            <div 
              key={rowIndex}
              className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${(rowIndex + 1) * 100}ms` }}
            >
              {row.map((logo, logoIndex) => (
                <div
                  key={`${rowIndex}-${logoIndex}`}
                  className="group bg-background border border-border/50 rounded-xl p-4 md:p-5 flex items-center justify-center hover:border-orange-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    {/* Placeholder logo icon */}
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 font-bold text-sm md:text-base">
                        {logo.charAt(0)}
                      </span>
                    </div>
                    {/* Company name - hidden on mobile for space */}
                    <span className="hidden sm:block text-sm md:text-base font-semibold text-muted-foreground group-hover:text-foreground transition-colors truncate">
                      {logo}
                    </span>
                    {/* Mobile: show abbreviated name */}
                    <span className="sm:hidden text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                      {logo.length > 8 ? logo.slice(0, 8) + '...' : logo}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className={`text-center mt-8 md:mt-10 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Button
              onClick={loadMore}
              variant="outline"
              size="lg"
              className="border-2 border-orange-500/50 text-orange-600 hover:bg-orange-50 hover:border-orange-500 px-8 group"
            >
              Load More Clients
              <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Showing {Math.min(totalLogos, allLogos.length)} of {allLogos.length}+ clients
            </p>
          </div>
        )}

        {/* All loaded message */}
        {!hasMore && (
          <div className="text-center mt-8 md:mt-10">
            <p className="text-muted-foreground">
              ✓ All {allLogos.length}+ clients loaded
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
