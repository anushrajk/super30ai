import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience", duration: 2000 },
  { value: 300, suffix: "+", label: "Projects Delivered", duration: 2500 },
  { value: 50, prefix: "₹", suffix: "Cr+", label: "Revenue Generated", duration: 2000 },
  { value: 95, suffix: "%", label: "Client Retention", duration: 1500 },
];

const useCountUp = (end: number, duration: number, shouldStart: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
};

const StatItem = ({ 
  value, 
  prefix = "", 
  suffix = "", 
  label, 
  duration, 
  shouldAnimate 
}: { 
  value: number; 
  prefix?: string; 
  suffix: string; 
  label: string; 
  duration: number; 
  shouldAnimate: boolean;
}) => {
  const count = useCountUp(value, duration, shouldAnimate);

  return (
    <div className="text-center group">
      <div className="relative">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2 transition-transform group-hover:scale-110 duration-300">
          {prefix}{count}{suffix}
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-orange-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

export const AnimatedStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              duration={stat.duration}
              shouldAnimate={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
