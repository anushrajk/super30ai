import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, FileX, Clock } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "AI Is Recommending Your Competitors",
    description: "ChatGPT and AI assistants are sending customers to your competition because they don't know you exist."
  },
  {
    icon: TrendingDown,
    title: "Your Rankings Are Declining",
    description: "Traditional SEO tactics are becoming obsolete. AI Overviews are stealing your clicks and traffic."
  },
  {
    icon: FileX,
    title: "Your Content Is Being Ignored",
    description: "Search engines can't understand your expertise. Your valuable content isn't reaching the right audience."
  },
  {
    icon: Clock,
    title: "You're Not Future-Proofed",
    description: "While you're optimizing for yesterday's algorithms, your competitors are preparing for tomorrow's AI search."
  }
];

export const ProblemSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            The Problem No One's Talking About
          </h2>
          <p className="text-lg text-slate-600">
            AI is fundamentally changing how people find businesses online. Is your website ready?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-white border-slate-200 hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors">
                  <problem.icon className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
