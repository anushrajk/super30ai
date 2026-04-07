import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Award, TrendingUp, Users } from "lucide-react";

const stats = [
  { value: "300+", label: "Brands Trust Our Digital Marketing Agency in Bangalore", icon: Award },
  { value: "5x", label: "Average Marketing ROI Delivered", icon: TrendingUp },
  { value: "30+", label: "In-House Digital Marketing Experts", icon: Users },
  { value: "4.9/5", label: "Client Satisfaction Rating", icon: Star },
];

export const DMSocialProofSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-10 md:py-14 bg-white border-b border-border/30">
      <div className="container mx-auto px-4">
        {/* Stats Row */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand/10 rounded-xl mb-3">
                <stat.icon className="w-6 h-6 text-brand" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-brand mb-1">{stat.value}</div>
              <p className="text-sm text-muted-foreground leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
