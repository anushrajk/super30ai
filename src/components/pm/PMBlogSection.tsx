import { ArrowRight, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Google Ads Smart Bidding: Complete 2025 Guide",
    excerpt: "Learn how AI-powered bidding strategies can maximize your ROAS with minimal manual effort.",
    category: "Google Ads",
    readTime: "8 min read",
    author: "Marketing Team",
    image: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
  {
    title: "Meta Advantage+ Shopping: Best Practices",
    excerpt: "Discover how to leverage Meta's AI-driven shopping campaigns for e-commerce success.",
    category: "Meta Ads",
    readTime: "6 min read",
    author: "Marketing Team",
    image: "bg-gradient-to-br from-pink-500 to-purple-600",
  },
  {
    title: "Reducing CAC: The AI Approach",
    excerpt: "How AI optimization reduced customer acquisition costs by 45% for our SaaS clients.",
    category: "Case Study",
    readTime: "5 min read",
    author: "Marketing Team",
    image: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
];

export const PMBlogSection = () => {
  return (
    <section className="py-8 md:py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl lg:max-w-4xl mx-auto mb-5 md:mb-10">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Insights
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Performance Marketing Insights
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay ahead with the latest strategies and trends
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card 
              key={index}
              className="bg-background border-border/50 hover:border-blue-500/50 hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            >
              <div className={`h-48 ${article.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                    {article.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-6 md:mt-10">
          <Button variant="outline" className="border-blue-200 hover:bg-blue-50 hover:border-blue-400">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
