import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "How AI is Changing SEO: What Founders Need to Know in 2025",
    excerpt: "The search landscape is evolving rapidly with AI. Learn how to adapt your SEO strategy for ChatGPT, Google AI Overviews, and beyond.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    category: "AI SEO Strategy",
    readTime: "8 min read",
    date: "Dec 15, 2024"
  },
  {
    id: 2,
    title: "Getting Cited by ChatGPT: A Complete Guide for B2B Brands",
    excerpt: "Discover the tactics top brands use to get recommended and cited by large language models like ChatGPT and Claude.",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&h=400&fit=crop",
    category: "LLM Optimization",
    readTime: "12 min read",
    date: "Dec 10, 2024"
  },
  {
    id: 3,
    title: "The ROI of AI SEO: Case Studies from Our Top Clients",
    excerpt: "Real numbers from real businesses. See how AI SEO transformed organic revenue for SaaS and E-commerce brands.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "Case Studies",
    readTime: "10 min read",
    date: "Dec 5, 2024"
  }
];

export const BlogSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl lg:max-w-4xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Blog
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert perspectives on AI SEO and the future of search
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          {blogs.map((blog) => (
            <Card 
              key={blog.id}
              className="bg-background/80 backdrop-blur-sm border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blog.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center text-orange-600 font-medium text-sm group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-orange-500 text-orange-600 hover:bg-orange-50 hover:border-orange-600"
          >
            Explore All Blogs
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
