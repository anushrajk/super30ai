import { useMemo } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
  Tooltip
} from "recharts";

interface CompetitorRadarChartProps {
  yourScores: {
    aiVisibility: number;
    content: number;
    technical: number;
    authority: number;
  };
  competitorAverage?: {
    aiVisibility: number;
    content: number;
    technical: number;
    authority: number;
  };
  className?: string;
}

const CompetitorRadarChart = ({ 
  yourScores, 
  competitorAverage,
  className 
}: CompetitorRadarChartProps) => {
  const data = useMemo(() => [
    {
      metric: "AI Visibility",
      you: yourScores.aiVisibility,
      competitors: competitorAverage?.aiVisibility || 75,
      fullMark: 100
    },
    {
      metric: "Content Quality",
      you: yourScores.content,
      competitors: competitorAverage?.content || 70,
      fullMark: 100
    },
    {
      metric: "Technical SEO",
      you: yourScores.technical,
      competitors: competitorAverage?.technical || 80,
      fullMark: 100
    },
    {
      metric: "Authority",
      you: yourScores.authority,
      competitors: competitorAverage?.authority || 65,
      fullMark: 100
    }
  ], [yourScores, competitorAverage]);

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis 
            dataKey="metric" 
            tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]} 
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
          />
          <Radar
            name="Your Site"
            dataKey="you"
            stroke="#f97316"
            fill="#f97316"
            fillOpacity={0.3}
            strokeWidth={2}
          />
          <Radar
            name="Competitor Avg"
            dataKey="competitors"
            stroke="#6366f1"
            fill="#6366f1"
            fillOpacity={0.2}
            strokeWidth={2}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompetitorRadarChart;
