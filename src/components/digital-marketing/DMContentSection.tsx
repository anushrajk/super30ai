import { Card, CardContent } from "@/components/ui/card";
import { FileText, MapPin, BadgeCheck, Layers3, TrendingUp, Sparkles } from "lucide-react";

const topics = [
  { heading: "What Does a Digital Marketing Agency in Bangalore Actually Handle?", text: "A digital marketing agency in Bangalore takes care of the SEO, paid marketing, social media marketing, content marketing, email marketing, and website performance, all within a single coordinated strategy that is aimed at business growth." },
  { heading: "Why Bangalore Businesses Need a Local Digital Marketing Partner?", text: "Bangalore is one of the most competitive e-markets in India for businesses. A local marketing agency has the local knowledge and access to customers' habits and trends, which are unique to a geographic area's business ecosystem." },
  { heading: "How to Evaluate an Online Marketing Company in Bangalore Properly", text: "Look for an in-house team that has experience, transparency from a reporting system, industry knowledge, a focused conversion approach, and visibility of performance results across all marketing channels." },
  { heading: "Services Businesses Should Expect from a Full Service Agency", text: "SEO is all about visibility. Retargeted paid ads for conversion. Social media techniques that make engagement better. Content automation, and websites for scalability in business growth." },
  { heading: "Digital Marketing Trends That Businesses Should Closely Watch", text: "The future of AI search experiences, short-form video, customer data strategy, and local SEO remains bright, continuing to drive improved engagement and conversion rates and attract audiences online." },
  { heading: "Why Businesses Choose TheSuper 30", text: "Our built-in digital marketing team combines strategy, creative development, automation, and tracking to ensure measurable growth with clear reporting and a linked marketing system." },
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
