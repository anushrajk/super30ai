import { useState } from "react";
import { ChevronDown, ChevronUp, AlertTriangle, AlertCircle, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface OpportunityCardProps {
  title: string;
  description: string;
  score: number;
  displayValue?: string;
  priority?: "high" | "medium" | "low";
}

const OpportunityCard = ({ 
  title, 
  description, 
  score, 
  displayValue,
  priority 
}: OpportunityCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getPriority = () => {
    if (priority) return priority;
    if (score < 30) return "high";
    if (score < 60) return "medium";
    return "low";
  };

  const calculatedPriority = getPriority();

  const priorityConfig = {
    high: {
      icon: AlertCircle,
      bg: "bg-red-50 border-red-200",
      badge: "bg-red-100 text-red-700 border-red-300",
      text: "High Priority"
    },
    medium: {
      icon: AlertTriangle,
      bg: "bg-yellow-50 border-yellow-200",
      badge: "bg-yellow-100 text-yellow-700 border-yellow-300",
      text: "Medium Priority"
    },
    low: {
      icon: Info,
      bg: "bg-blue-50 border-blue-200",
      badge: "bg-blue-100 text-blue-700 border-blue-300",
      text: "Low Priority"
    }
  };

  const config = priorityConfig[calculatedPriority];
  const Icon = config.icon;

  return (
    <Card className={cn("transition-all duration-200 cursor-pointer hover:shadow-md", config.bg)}>
      <CardContent className="p-4">
        <div 
          className="flex items-start justify-between gap-3"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start gap-3 flex-1">
            <Icon className="w-5 h-5 mt-0.5 flex-shrink-0 text-current opacity-70" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-medium text-foreground">{title}</h4>
                <Badge variant="outline" className={cn("text-xs", config.badge)}>
                  {config.text}
                </Badge>
              </div>
              {displayValue && (
                <p className="text-sm text-muted-foreground mt-1">{displayValue}</p>
              )}
            </div>
          </div>
          <button className="p-1 hover:bg-background/50 rounded">
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground">{description}</p>
            <div className="mt-3 flex items-center gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Current Score</p>
                <p className="font-semibold text-foreground">{score}/100</p>
              </div>
              <div className="flex-1 h-2 bg-background rounded-full overflow-hidden">
                <div 
                  className={cn(
                    "h-full rounded-full transition-all duration-500",
                    score >= 60 ? "bg-green-500" : score >= 30 ? "bg-yellow-500" : "bg-red-500"
                  )}
                  style={{ width: `${score}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OpportunityCard;
