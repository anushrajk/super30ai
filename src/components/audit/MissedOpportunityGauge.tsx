import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, AlertTriangle } from "lucide-react";

interface MissedOpportunityGaugeProps {
  score: number;
  breakdown: {
    ai_visibility_gap: number;
    content_gap: number;
    technical_gap: number;
    authority_gap: number;
  };
}

const MissedOpportunityGauge = ({ score, breakdown }: MissedOpportunityGaugeProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [animatedBreakdown, setAnimatedBreakdown] = useState({
    ai_visibility_gap: 0,
    content_gap: 0,
    technical_gap: 0,
    authority_gap: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
      setAnimatedBreakdown(breakdown);
    }, 300);
    return () => clearTimeout(timer);
  }, [score, breakdown]);

  const circumference = 2 * Math.PI * 56;
  const offset = circumference - (circumference * animatedScore) / 100;

  const getScoreLevel = () => {
    if (score >= 70) return { text: "Critical", color: "text-red-600", bg: "bg-red-100" };
    if (score >= 40) return { text: "Moderate", color: "text-orange-600", bg: "bg-orange-100" };
    return { text: "Low", color: "text-green-600", bg: "bg-green-100" };
  };

  const level = getScoreLevel();

  const gapItems = [
    { label: "AI Visibility Gap", value: animatedBreakdown.ai_visibility_gap, color: "bg-purple-500" },
    { label: "Content Gap", value: animatedBreakdown.content_gap, color: "bg-blue-500" },
    { label: "Technical Gap", value: animatedBreakdown.technical_gap, color: "bg-orange-500" },
    { label: "Authority Gap", value: animatedBreakdown.authority_gap, color: "bg-red-500" }
  ];

  return (
    <Card className="border-red-200 bg-gradient-to-br from-red-50 to-orange-50 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <div className="p-2 bg-red-100 rounded-lg">
            <TrendingDown className="w-5 h-5 text-red-600" />
          </div>
          <span className="text-red-900">Missed Opportunity Score</span>
          <span className={`ml-auto px-3 py-1 rounded-full text-xs font-medium ${level.bg} ${level.color}`}>
            {level.text}
          </span>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col md:flex-row items-center gap-8 py-4">
          {/* Main Gauge */}
          <div className="relative w-36 h-36 flex-shrink-0">
            <svg className="w-36 h-36 transform -rotate-90">
              <circle
                cx="72"
                cy="72"
                r="56"
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                className="text-red-100"
              />
              <circle
                cx="72"
                cy="72"
                r="56"
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                className="text-red-500"
                style={{ transition: 'stroke-dashoffset 1s ease-out' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-red-600">{animatedScore}</span>
              <span className="text-xs text-red-500">/ 100</span>
            </div>
          </div>

          {/* Breakdown Bars */}
          <div className="flex-1 w-full space-y-4">
            <p className="text-sm text-red-700 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              You're missing <strong>{score}%</strong> of potential visibility compared to competitors
            </p>
            
            <div className="space-y-3">
              {gapItems.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-foreground">{item.label}</span>
                    <span className="text-sm font-semibold text-foreground">{item.value}%</span>
                  </div>
                  <div className="h-2.5 bg-white/80 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${item.color}`}
                      style={{ 
                        width: `${item.value}%`,
                        transition: 'width 1s ease-out'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MissedOpportunityGauge;
