import { useState, useEffect } from "react";
import { TrendingUp, Users, Target, Zap, Award, Bot, BarChart3, CheckCircle2 } from "lucide-react";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(startValue + (end - startValue) * easeOutQuad));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const CircularProgress = ({ value, size = 120, strokeWidth = 8 }: { value: number; size?: number; strokeWidth?: number }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (animatedValue / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedValue(value), 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-foreground">{animatedValue}</span>
        <span className="text-xs text-muted-foreground">AI Score</span>
      </div>
    </div>
  );
};

export const HeroDashboardPreview = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const metrics = [
    { icon: TrendingUp, label: "Traffic Growth", value: 245, suffix: "%", color: "text-green-500" },
    { icon: Users, label: "New Leads", value: 180, suffix: "%", color: "text-blue-500" },
    { icon: Target, label: "ROAS", value: 4.2, suffix: "x", color: "text-purple-500" },
  ];

  const achievements = [
    { icon: Award, label: "Google Partner", color: "from-yellow-400 to-orange-500" },
    { icon: Bot, label: "AI Certified", color: "from-blue-400 to-indigo-500" },
    { icon: Zap, label: "Fast Results", color: "from-green-400 to-emerald-500" },
  ];

  return (
    <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Main Dashboard Card */}
      <div className="relative bg-background/80 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl overflow-hidden p-6">
        {/* Glow effects */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-orange-400/30 to-orange-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-3xl" />
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">AI Visibility Dashboard</h4>
              <p className="text-xs text-muted-foreground">Real-time metrics</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-green-100 px-2 py-1 rounded-full">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-green-600">Live</span>
          </div>
        </div>

        {/* Circular Progress + Metrics */}
        <div className="flex gap-6 mb-6">
          <CircularProgress value={87} />
          
          <div className="flex-1 space-y-3">
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2 hover:bg-muted/80 transition-colors"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-2">
                  <metric.icon className={`w-4 h-4 ${metric.color}`} />
                  <span className="text-sm text-muted-foreground">{metric.label}</span>
                </div>
                <span className={`font-bold ${metric.color}`}>
                  +<AnimatedCounter end={typeof metric.value === 'number' ? Math.floor(metric.value) : metric.value} suffix={metric.suffix} />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-3 gap-3">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-3 bg-muted/30 rounded-xl hover:bg-muted/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-lg`}>
                <achievement.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-medium text-foreground text-center">{achievement.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-6 pt-4 border-t border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">300+</span> sites optimized
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Avg. improvement</span>
              <span className="font-bold text-orange-500">+287%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Achievement Badges */}
      <div className="absolute -top-4 -left-4 bg-background border border-border shadow-xl rounded-xl px-3 py-2 animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
            <Award className="w-3 h-3 text-white" />
          </div>
          <span className="text-xs font-medium text-foreground">#1 Rated</span>
        </div>
      </div>

      <div className="absolute -bottom-4 -right-4 bg-background border border-border shadow-xl rounded-xl px-3 py-2 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-3 h-3 text-white" />
          </div>
          <span className="text-xs font-medium text-foreground">Top Performer</span>
        </div>
      </div>
    </div>
  );
};
