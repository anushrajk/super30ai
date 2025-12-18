import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Eye, MessageSquare, Target } from "lucide-react";

export const DashboardPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Track Your AI Visibility
          </h2>
          <p className="text-lg text-slate-400">
            Real-time dashboard to monitor your presence across AI search platforms
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-6 shadow-2xl">
            {/* Mock Dashboard Header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-slate-500 text-sm ml-4">AI Visibility Dashboard</span>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">AI Visibility Score</span>
                    <Eye className="w-4 h-4 text-orange-500" />
                  </div>
                  <div className="text-3xl font-bold text-white">87%</div>
                  <div className="text-green-400 text-xs flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +12% this month
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">AI Mentions</span>
                    <MessageSquare className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="text-3xl font-bold text-white">234</div>
                  <div className="text-green-400 text-xs flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +45 this week
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Intent Match</span>
                    <Target className="w-4 h-4 text-purple-500" />
                  </div>
                  <div className="text-3xl font-bold text-white">92%</div>
                  <div className="text-green-400 text-xs flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +8% vs last month
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Revenue Impact</span>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="text-3xl font-bold text-white">$45K</div>
                  <div className="text-green-400 text-xs flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +180% ROI
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mock Charts */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-sm">AI Platform Coverage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">ChatGPT</span>
                      <span className="text-white">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Google AI Overview</span>
                      <span className="text-white">72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Perplexity</span>
                      <span className="text-white">68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Claude</span>
                      <span className="text-white">54%</span>
                    </div>
                    <Progress value={54} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-sm">Monthly AI Traffic Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-32 flex items-end gap-2">
                    {[30, 45, 52, 48, 65, 72, 85, 78, 92, 88, 95, 100].map((height, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-orange-500 to-orange-400 rounded-t"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-slate-500">
                    <span>Jan</span>
                    <span>Dec</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
