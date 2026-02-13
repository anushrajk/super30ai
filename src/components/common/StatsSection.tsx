import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: StatItem[];
  className?: string;
}

export const StatsSection = ({ stats, className = "" }: StatsSectionProps) => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className={`py-16 bg-muted/30 border-y border-border/50 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Default stats data that can be reused across pages
export const defaultStats = [
  { value: "300+", label: "Brands Grown with AI Powered SEO" },
  { value: "₹50Cr+", label: "Revenue Generated" },
  { value: "10+", label: "Years Experience" },
  { value: "95%", label: "Client Retention" },
];

export const workPageStats = [
  { value: "₹50Cr+", label: "Revenue Generated for Clients" },
  { value: "300+", label: "Successful Projects" },
  { value: "4.2x", label: "Average ROAS" },
  { value: "280%", label: "Avg. Traffic Growth" },
];
