import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, TrendingDown, FileX, HelpCircle, ArrowRight } from "lucide-react";

const problems = [
  {
    icon: Bot,
    title: "AI Assistants Don't Recommend You",
    description: "ChatGPT and Perplexity recommend your competitors. Not you."
  },
  {
    icon: TrendingDown,
    title: "Your Rankings Are Declining",
    description: "Google's AI Overviews are pushing organic results down."
  },
  {
    icon: FileX,
    title: "Content Gets Ignored",
    description: "You publish quality content, but AI systems don't cite you."
  },
  {
    icon: HelpCircle,
    title: "Future-Proofing Anxiety",
    description: "The search landscape is changing fast. Are you ready?"
  }
];

export const ProblemSection = () => {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Problem No One's Talking About
          </h2>
          <p className="text-lg text-muted-foreground">
            While you focus on traditional SEO, AI is rewriting the rules of discovery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors">
                  <problem.icon className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToForm}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            See how your site looks to AI
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
