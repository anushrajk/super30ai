import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Zap, 
  Search, 
  Accessibility, 
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  XCircle
} from "lucide-react";

interface ScoreBreakdownTabsProps {
  performance: number;
  seo: number;
  accessibility: number;
  bestPractices: number;
  opportunities: any[];
  diagnostics: any[];
}

const ScoreBreakdownTabs = ({
  performance,
  seo,
  accessibility,
  bestPractices,
  opportunities,
  diagnostics
}: ScoreBreakdownTabsProps) => {
  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-4 h-4 text-green-500" />;
    if (score >= 50) return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
    return <XCircle className="w-4 h-4 text-red-500" />;
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    return "text-red-500";
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  const tabs = [
    { 
      id: "performance", 
      label: "Performance", 
      icon: Zap, 
      score: performance,
      description: "How fast your page loads and becomes interactive"
    },
    { 
      id: "seo", 
      label: "SEO", 
      icon: Search, 
      score: seo,
      description: "How well optimized for search engines"
    },
    { 
      id: "accessibility", 
      label: "Accessibility", 
      icon: Accessibility, 
      score: accessibility,
      description: "How accessible to all users including those with disabilities"
    },
    { 
      id: "best-practices", 
      label: "Best Practices", 
      icon: ShieldCheck, 
      score: bestPractices,
      description: "Following web best practices for security and reliability"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detailed Score Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="performance" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            {tabs.map((tab) => (
              <TabsTrigger 
                key={tab.id} 
                value={tab.id}
                className="flex items-center gap-1.5 text-xs sm:text-sm"
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className={`font-bold ${getScoreColor(tab.score)}`}>
                  {tab.score}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="space-y-6">
              {/* Score Overview */}
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-muted"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={201}
                      strokeDashoffset={201 - (201 * tab.score) / 100}
                      className={getScoreColor(tab.score)}
                    />
                  </svg>
                  <span className={`absolute inset-0 flex items-center justify-center text-xl font-bold ${getScoreColor(tab.score)}`}>
                    {tab.score}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {getScoreIcon(tab.score)}
                    <h3 className="font-semibold text-foreground">{tab.label} Score</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{tab.description}</p>
                </div>
              </div>

              {/* Key Metrics */}
              {tab.id === "performance" && (
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Core Web Vitals</h4>
                  <div className="grid gap-3">
                    {diagnostics.slice(0, 3).map((diagnostic, idx) => (
                      <div key={idx} className="p-3 bg-muted/30 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{diagnostic.title}</span>
                          <span className={`text-sm font-bold ${getScoreColor(diagnostic.score)}`}>
                            {diagnostic.score}/100
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${getProgressColor(diagnostic.score)}`}
                            style={{ width: `${diagnostic.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Opportunities */}
              {opportunities.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Improvement Opportunities</h4>
                  {opportunities.slice(0, 3).map((opp, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{opp.title}</p>
                        {opp.displayValue && (
                          <p className="text-xs text-muted-foreground mt-1">{opp.displayValue}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ScoreBreakdownTabs;
