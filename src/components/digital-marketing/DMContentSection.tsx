import { Card, CardContent } from "@/components/ui/card";
import { FileText, MapPin, BadgeCheck, Layers3, TrendingUp, Sparkles } from "lucide-react";

const topics = [
  { heading: "What Does a Digital Marketing Agency in Bangalore Actually Deliver?", text: "A digital marketing agency can significantly aid your investigation agency based in Bangalore. They focus on promoting your services and increasing your brand in a competitive market. A digital marketing agency utilizes innovative tools and strategies to promote." },
  { heading: "Why Bangalore Businesses Need a Local Marketing Partner?", text: "Bengaluru has 10,000+ startups and 400+ MNCs contributing to 13 million digital consumers. The digital channels have grown into a crowded platform. A digital marketing company in Bangalore corporate understands the marketing and online behavior of local markets, like the B2B corridors of Whitefield, D2C brands of Indiranagar, and Tech parks." },
  { heading: "How to Evaluate the Right AI Digital Marketing company in Bangalore?", text: "With 500+ AI agencies in Bangalore, picking the right one matters. Look for an in-house team with revenue attribution, real time dashboards, no lock-in contracts, and relevant industry experience. A good agency should prove ROI within the first 90 days." },
  { heading: "Services Every Business Should Expect from a Digital Marketing Agency", text: "Social media that builds a community. Content that stimulates conversions. Leads that nurture email automation. A fast loading and high ranking web design. Search engine optimization for organic traffic, Google, and Meta Ads to boost ROAS." },
  { heading: "Digital Marketing Trends Businesses Should Consider", text: "The digital marketing strategies of Bangalore are changing due to voice search optimization, short-form video content, first party data strategies, and hyperlocal SEO. More than 60% of searches occur on mobile devices. Reels and Shorts create more engagement than posts." },
  { heading: "Why Do Businesses Choose TheSuper 30?", text: "We're a 30+ member in-house team. We've served multiple brands. We track every rupee from click to close. With long-term lock-in contracts, our results earn your business through real-time dashboards, not monthly PDFs." },
];

const icons = [FileText, MapPin, BadgeCheck, Layers3, TrendingUp, Sparkles];

export const DMContentSection = () => (
  <section className="py-8 md:py-14 lg:py-20 bg-muted/30 relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20" />
    <div className="container mx-auto px-4">
      <div className="relative text-center max-w-3xl mx-auto mb-6 md:mb-12">
        <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-4 border border-brand/20">Everything You Need to Know</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          The Complete Guide to Choosing a <span className="text-brand">Digital Marketing Agency in Bangalore</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">
          Learn about the operations of modern digital marketing agencies and the services they provide that make the most impact, and how businesses can select a digital marketing partner that can help them achieve measurable results and sustainable success.
        </p>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
        {topics.map((topic, i) => (
          <Card key={i} className="border-border/50 bg-background shadow-none">
            <CardContent className="p-4 md:p-6">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                {(() => {
                  const Icon = icons[i % icons.length];
                  return <Icon className="w-5 h-5" />;
                })()}
              </div>
              <div className="flex items-start gap-3 mb-3">
                <span className="text-sm font-semibold text-brand">0{i + 1}</span>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground leading-snug">{topic.heading}</h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{topic.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
