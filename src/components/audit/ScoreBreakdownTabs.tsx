import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Search, 
  Accessibility, 
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  XCircle,
  TrendingUp,
  Clock,
  Image,
  Code,
  FileText,
  Gauge
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
  const [animatedScores, setAnimatedScores] = useState({
    performance: 0,
    seo: 0,
    accessibility: 0,
    bestPractices: 0
  });
  const [activeTab, setActiveTab] = useState("performance");

  // Animate scores on mount
  useEffect(() => {
    const duration = 1000;
    const steps = 30;
    const delays = { performance: 0, seo: 100, accessibility: 200, bestPractices: 300 };
    
    const targets = { performance, seo, accessibility, bestPractices };
    
    Object.entries(targets).forEach(([key, target]) => {
      setTimeout(() => {
        let current = 0;
        const increment = target / steps;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setAnimatedScores(prev => ({ ...prev, [key]: target }));
            clearInterval(timer);
          } else {
            setAnimatedScores(prev => ({ ...prev, [key]: Math.round(current) }));
          }
        }, duration / steps);
      }, delays[key as keyof typeof delays]);
    });
  }, [performance, seo, accessibility, bestPractices]);

  const getScoreStatus = (score: number) => {
    if (score >= 90) return { label: "Excellent", color: "text-green-500", bg: "bg-green-500" };
    if (score >= 80) return { label: "Good", color: "text-green-500", bg: "bg-green-500" };
    if (score >= 50) return { label: "Needs Work", color: "text-amber-500", bg: "bg-amber-500" };
    return { label: "Poor", color: "text-red-500", bg: "bg-red-500" };
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 50) return "bg-amber-500";
    return "bg-red-500";
  };

  const tabs = [
    { 
      id: "performance", 
      label: "Performance", 
      icon: Zap, 
      score: performance,
      animatedScore: animatedScores.performance,
      gradient: "from-blue-500 to-cyan-500",
      lightGradient: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      description: "How fast your page loads and becomes interactive",
      metrics: [
        { name: "First Contentful Paint", icon: Clock, value: "Loading speed" },
        { name: "Largest Contentful Paint", icon: Image, value: "Main content" },
        { name: "Cumulative Layout Shift", icon: Code, value: "Visual stability" }
      ]
    },
    { 
      id: "seo", 
      label: "SEO", 
      icon: Search, 
      score: seo,
      animatedScore: animatedScores.seo,
      gradient: "from-green-500 to-emerald-500",
      lightGradient: "from-green-50 to-emerald-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      description: "How well optimized for search engines",
      metrics: [
        { name: "Meta Tags", icon: FileText, value: "Title & description" },
        { name: "Crawlability", icon: Search, value: "Search engine access" },
        { name: "Content Quality", icon: Code, value: "Semantic HTML" }
      ]
    },
    { 
      id: "accessibility", 
      label: "Accessibility", 
      icon: Accessibility, 
      score: accessibility,
      animatedScore: animatedScores.accessibility,
      gradient: "from-purple-500 to-violet-500",
      lightGradient: "from-purple-50 to-violet-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      description: "How accessible to all users including those with disabilities",
      metrics: [
        { name: "Color Contrast", icon: Gauge, value: "Visual clarity" },
        { name: "ARIA Labels", icon: Code, value: "Screen readers" },
        { name: "Keyboard Navigation", icon: TrendingUp, value: "Tab order" }
      ]
    },
    { 
      id: "best-practices", 
      label: "Best Practices", 
      icon: ShieldCheck, 
      score: bestPractices,
      animatedScore: animatedScores.bestPractices,
      gradient: "from-amber-500 to-orange-500",
      lightGradient: "from-amber-50 to-orange-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      description: "Following web best practices for security and reliability",
      metrics: [
        { name: "HTTPS", icon: ShieldCheck, value: "Secure connection" },
        { name: "Console Errors", icon: AlertTriangle, value: "JS issues" },
        { name: "Image Formats", icon: Image, value: "Modern formats" }
      ]
    }
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Gauge className="w-5 h-5 text-primary" />
          Performance Breakdown
          <Badge variant="outline" className="ml-2 text-xs font-normal">Detailed Analysis</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Modern Tab Navigation */}
          <div className="border-b bg-muted/30 px-4">
            <TabsList className="h-auto bg-transparent gap-1 p-0">
              {tabs.map((tab) => {
                const status = getScoreStatus(tab.score);
                const isActive = activeTab === tab.id;
                return (
                  <TabsTrigger 
                    key={tab.id} 
                    value={tab.id}
                    className={`
                      relative flex items-center gap-2 px-4 py-3 rounded-none border-b-2 transition-all
                      data-[state=active]:border-b-2 data-[state=active]:shadow-none
                      data-[state=inactive]:border-transparent
                      hover:bg-muted/50
                    `}
                    style={{
                      borderColor: isActive ? `var(--${tab.id === 'performance' ? 'blue' : tab.id === 'seo' ? 'green' : tab.id === 'accessibility' ? 'purple' : 'amber'}-500)` : 'transparent'
                    }}
                  >
                    <div className={`p-1.5 rounded-lg ${tab.iconBg}`}>
                      <tab.icon className={`w-4 h-4 ${tab.iconColor}`} />
                    </div>
                    <span className="hidden md:inline text-sm font-medium">{tab.label}</span>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs font-bold ${status.color} bg-transparent px-1`}
                    >
                      {tab.animatedScore}
                    </Badge>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {tabs.map((tab) => (
            <TabsContent 
              key={tab.id} 
              value={tab.id} 
              className="m-0 animate-fade-in"
            >
              <div className={`bg-gradient-to-br ${tab.lightGradient} p-6`}>
                {/* Score Overview Card */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Main Score Ring */}
                  <div className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl shadow-sm">
                    <div className="relative w-32 h-32 mb-4">
                      {/* Background ring */}
                      <svg className="w-32 h-32 transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="10"
                          fill="none"
                          className="text-muted"
                        />
                        {/* Animated progress ring */}
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="10"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={352}
                          strokeDashoffset={352 - (352 * tab.animatedScore) / 100}
                          className={getScoreStatus(tab.score).color}
                          style={{ 
                            transition: 'stroke-dashoffset 1s ease-out',
                          }}
                        />
                      </svg>
                      {/* Score number */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className={`text-4xl font-bold ${getScoreStatus(tab.score).color}`}>
                          {tab.animatedScore}
                        </span>
                        <span className="text-xs text-muted-foreground">/ 100</span>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="flex items-center gap-2">
                      {tab.score >= 80 ? (
                        <CheckCircle className={`w-5 h-5 ${getScoreStatus(tab.score).color}`} />
                      ) : tab.score >= 50 ? (
                        <AlertTriangle className={`w-5 h-5 ${getScoreStatus(tab.score).color}`} />
                      ) : (
                        <XCircle className={`w-5 h-5 ${getScoreStatus(tab.score).color}`} />
                      )}
                      <span className={`font-semibold ${getScoreStatus(tab.score).color}`}>
                        {getScoreStatus(tab.score).label}
                      </span>
                    </div>
                  </div>

                  {/* Description & Metrics */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="p-4 bg-background rounded-xl shadow-sm">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${tab.iconBg}`}>
                          <tab.icon className={`w-5 h-5 ${tab.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{tab.label} Score</h3>
                          <p className="text-sm text-muted-foreground">{tab.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      {tab.metrics.map((metric, idx) => (
                        <div 
                          key={idx} 
                          className="p-3 bg-background rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
                        >
                          <div className={`p-2 rounded-lg ${tab.iconBg} w-fit mx-auto mb-2`}>
                            <metric.icon className={`w-4 h-4 ${tab.iconColor}`} />
                          </div>
                          <p className="text-xs font-medium text-foreground">{metric.name}</p>
                          <p className="text-xs text-muted-foreground">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Core Web Vitals for Performance Tab */}
                {tab.id === "performance" && diagnostics.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Core Web Vitals
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {diagnostics.slice(0, 3).map((diagnostic, idx) => {
                        const status = getScoreStatus(diagnostic.score);
                        return (
                          <div 
                            key={idx} 
                            className="p-4 bg-background rounded-xl shadow-sm hover:shadow-md transition-all"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm font-medium text-foreground truncate">
                                {diagnostic.title}
                              </span>
                              <Badge 
                                variant="secondary" 
                                className={`text-xs font-bold ${status.color} bg-transparent`}
                              >
                                {diagnostic.score}
                              </Badge>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full transition-all duration-1000 ${getProgressColor(diagnostic.score)}`}
                                style={{ width: `${diagnostic.score}%` }}
                              />
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                              {status.label}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Opportunities Section */}
                {opportunities.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      Improvement Opportunities
                    </h4>
                    <div className="space-y-3">
                      {opportunities.slice(0, 3).map((opp, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-sm hover:shadow-md transition-all"
                        >
                          <div className="p-2 bg-amber-100 rounded-lg flex-shrink-0">
                            <AlertTriangle className="w-4 h-4 text-amber-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-foreground text-sm">{opp.title}</p>
                            {opp.displayValue && (
                              <p className="text-xs text-muted-foreground mt-1">{opp.displayValue}</p>
                            )}
                          </div>
                          <Badge variant="outline" className="text-xs flex-shrink-0">
                            {opp.score}/100
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ScoreBreakdownTabs;