import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  FileText,
  Globe,
  LineChart,
  MessageSquare,
  Search,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import imgAiVisibility from "@/assets/svc-ai-visibility.jpg";
import imgIntentMapping from "@/assets/svc-intent-mapping.jpg";
import imgPredictive from "@/assets/svc-predictive-analytics.jpg";
import imgContentStrategy from "@/assets/svc-content-strategy.jpg";
import imgAuthority from "@/assets/svc-authority-signals.jpg";
import imgTechnical from "@/assets/svc-technical-seo.jpg";
import imgLlm from "@/assets/svc-llm-visibility.jpg";
import imgBrand from "@/assets/svc-brand-presence.jpg";
import imgRevenue from "@/assets/svc-revenue-seo.jpg";

const coreServices = [
  { icon: Search, image: imgAiVisibility, title: "AI SEO Visibility", description: "Improve visibility across AI powered search engines and GEO discovery platforms." },
  { icon: Target, image: imgIntentMapping, title: "Intent Based SEO Mapping", description: "Align search intent with structured AI understanding and smarter organic discovery patterns." },
  { icon: BarChart3, image: imgPredictive, title: "Predictive SEO Analytics", description: "Use performance forecasting and search behavior analysis to guide strategic SEO decisions." },
  { icon: FileText, image: imgContentStrategy, title: "AI Content Strategy", description: "Develop authoritative content frameworks designed for AI indexing and search relevance." },
  { icon: Shield, image: imgAuthority, title: "Digital Authority Signals", description: "Establish brand credibility through trusted entity signals and authoritative SEO positioning." },
  { icon: Zap, image: imgTechnical, title: "Advanced Technical AI SEO", description: "Build a search optimized technical structure designed for modern AI search systems." },
  { icon: Globe, image: imgLlm, title: "LLM Search Visibility", description: "Improve discoverability across ChatGPT, Perplexity, and evolving AI driven search platforms." },
  { icon: MessageSquare, image: imgBrand, title: "AI Brand Presence", description: "Increase brand visibility within AI generated search responses and recommendation systems." },
  { icon: TrendingUp, image: imgRevenue, title: "Revenue Focused SEO", description: "Track business growth through measurable SEO attribution and qualified conversion performance." },
];

const intentMappingIcons = [
  { Icon: Search, label: "Search Analysis" },
  { Icon: Target, label: "Intent Mapping" },
  { Icon: Users, label: "Lead Conversion" },
];

const aiPromptFeatures = [
  { icon: Sparkles, title: "Optimize for AI", description: "Develop and optimize content for sophisticated AI search comprehension and LLM content processing." },
  { icon: Bot, title: "LLM Authority Signals", description: "Develop trusted authority signals that AI systems recognize and prioritize across search results." },
  { icon: BrainCircuit, title: "Authority Citation Growth", description: "Increase trusted brand mentions across AI search responses and discovery platforms." },
  { icon: LineChart, title: "Tracking & Monitoring", description: "Track AI search visibility through live performance reporting and discovery insights." },
];

export const ServicesSection = () => {
  const scrollToForm = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-brand/20 bg-brand/5 text-brand text-xs font-semibold uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-4">
            Advanced AI SEO Strategies To Drive <span className="text-brand">Scalable Business Growth</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We prioritize measurable growth in search presence that boosts AI visibility, generates high quality leads, and drives long-term growth in business performance. For 300+ brands, our <span className="text-foreground font-semibold">AI SEO services in Bangalore</span> have enabled them to enhance their organic reach, boost their AI search visibility, and drive revenue growth through advanced search optimization techniques, ranging from technical SEO to content systems and authority building.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 md:mb-14">
          {coreServices.map((service) => (
            <article key={service.title} className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg">
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <img src={service.image} alt={`${service.title} illustration`} loading="lazy" width={768} height={432} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/90 backdrop-blur-sm">
                  <service.icon className="h-5 w-5 text-brand" />
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-brand transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-2xl bg-foreground p-6 md:p-10 lg:p-12 mb-6 text-background">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-brand/15 text-brand rounded-full text-xs font-semibold uppercase mb-4 border border-brand/30">Featured Service</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">AI Search &amp; Intent Mapping</h3>
              <p className="text-background/70 mb-6 leading-relaxed">Understand how AI search systems process search queries and align your content with users&apos; intent.</p>
              <ul className="space-y-3 mb-7">
                {["AI search analysis and intent classification", "Semantic search performance optimization", "User journey mapping for AI platforms"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm md:text-base text-background/80">
                    <span className="h-2 w-2 rounded-full bg-brand" />{item}
                  </li>
                ))}
              </ul>
              <Button onClick={scrollToForm} className="rounded-full bg-brand text-primary-foreground hover:bg-brand/90">
                Improve AI Visibility <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="rounded-xl border border-background/10 bg-background/5 p-6 md:p-8">
              <div className="grid grid-cols-3 gap-3">
                {intentMappingIcons.map((item, index) => (
                  <div key={item.label} className="relative flex flex-col items-center text-center gap-3">
                    <div className={`h-14 w-14 rounded-xl flex items-center justify-center ${index === 2 ? "bg-brand" : "bg-brand/15"}`}>
                      <item.Icon className={`h-6 w-6 ${index === 2 ? "text-primary-foreground" : "text-brand"}`} />
                    </div>
                    <span className="text-xs font-medium text-background/70">{item.label}</span>
                    {index < 2 && <ArrowRight className="hidden sm:block absolute -right-3 top-5 h-4 w-4 text-brand" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full border border-brand/20 bg-brand/5 text-brand text-xs font-semibold uppercase mb-4">AI Visibility</span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">AI Prompt &amp; Generative Search Optimization</h3>
            <p className="text-muted-foreground">Optimize your content to appear in AI generated responses and become a trusted source cited by AI systems.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiPromptFeatures.map((feature, index) => (
              <div key={feature.title} className="rounded-xl border border-border bg-background p-5">
                <div className="flex items-center justify-between mb-5">
                  <div className="h-11 w-11 rounded-xl bg-brand/10 flex items-center justify-center"><feature.icon className="h-5 w-5 text-brand" /></div>
                  <span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};