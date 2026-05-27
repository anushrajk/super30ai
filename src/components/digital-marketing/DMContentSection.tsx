import { Card, CardContent } from "@/components/ui/card";
import { FileText, MapPin, BadgeCheck, Layers3, TrendingUp, Sparkles } from "lucide-react";

const topics = [
  { heading: "What Does a Digital Marketing Agency in Bangalore Actually Deliver?", text: "A digital marketing agency in Bangalore manages SEO, paid advertising, social media, content marketing, email campaigns, and website performance through one connected strategy designed for business growth." },
  { heading: "Why Bangalore Businesses Need a Local Digital Marketing Partner", text: "Bangalore businesses operate in one of India's most competitive digital markets. A local marketing agency understands audience behaviour, business ecosystems, and region-specific customer trends that shape long-term growth." },
  { heading: "How to Evaluate a Digital Marketing Agency Properly", text: "Look for an experienced in-house team, transparent reporting systems, industry expertise, conversion-focused strategy, and measurable performance visibility across every marketing channel." },
  { heading: "Services Businesses Should Expect from a Full-Service Agency", text: "SEO focused on visibility. Paid advertising designed for conversions. Social media strategies that improve engagement. Content, automation, and websites created for scalable business growth." },
  { heading: "Digital Marketing Trends That Businesses Should Closely Watch", text: "AI search experiences, short-form video content, customer data strategy, and local SEO continue to shape how businesses attract audiences, improve engagement, and increase conversions online." },
  { heading: "Why Businesses Choose The Super 30", text: "Our in-house marketing specialists combine strategy, creative execution, automation, and performance tracking to deliver measurable growth with transparent reporting and connected campaign systems." },
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
          Understand how modern digital marketing agencies operate, what services matter most, and how businesses can choose the right marketing partner for measurable growth and long-term performance.
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
