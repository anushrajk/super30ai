import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface ScoreGaugeProps {
  score: number;
  label: string;
  sublabel?: string;
  size?: "sm" | "md" | "lg";
  showTooltip?: boolean;
  tooltipContent?: string;
  className?: string;
}

const ScoreGauge = ({ 
  score, 
  label, 
  sublabel, 
  size = "md", 
  showTooltip = false,
  tooltipContent,
  className 
}: ScoreGaugeProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 100);
    return () => clearTimeout(timer);
  }, [score]);

  const getScoreColor = (value: number) => {
    if (value >= 80) return "text-green-500";
    if (value >= 50) return "text-yellow-500";
    return "text-red-500";
  };

  const getStrokeColor = (value: number) => {
    if (value >= 80) return "#22c55e";
    if (value >= 50) return "#eab308";
    return "#ef4444";
  };

  const sizes = {
    sm: { container: "w-16 h-16", text: "text-lg", radius: 24, stroke: 6 },
    md: { container: "w-24 h-24", text: "text-2xl", radius: 40, stroke: 8 },
    lg: { container: "w-32 h-32", text: "text-3xl", radius: 56, stroke: 10 },
  };

  const { container, text, radius, stroke } = sizes[size];
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * animatedScore) / 100;

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className={cn("relative", container)}>
        <svg className="w-full h-full transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="currentColor"
            strokeWidth={stroke}
            fill="none"
            className="text-muted"
          />
          {/* Animated progress circle */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke={getStrokeColor(score)}
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ 
              transition: 'stroke-dashoffset 1s ease-out',
            }}
          />
        </svg>
        <span className={cn(
          "absolute inset-0 flex items-center justify-center font-bold",
          text,
          getScoreColor(score)
        )}>
          {animatedScore}
        </span>
      </div>
      
      <div className="flex items-center gap-1 mt-2">
        <h3 className="font-semibold text-foreground text-sm">{label}</h3>
        {showTooltip && tooltipContent && (
          <Tooltip>
            <TooltipTrigger>
              <Info className="w-3 h-3 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p>{tooltipContent}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      
      {sublabel && (
        <p className="text-xs text-muted-foreground">{sublabel}</p>
      )}
    </div>
  );
};

export default ScoreGauge;
