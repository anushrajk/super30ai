import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Target, 
  BarChart3, 
  FileText, 
  Shield, 
  Zap,
  ArrowRight,
  Quote,
  Users,
  Globe,
  MessageSquare,
  TrendingUp,
  Code,
  Database,
  Lock,
  Gauge,
  Bug,
  FileCheck,
  Sparkles,
  Bot,
  BrainCircuit,
  LineChart
} from "lucide-react";
import { BentoGrid, BentoCard, BentoIcon } from "@/components/ui/bento-grid";

const coreServices = [
  { icon: Search, title: "AI Search Optimization", description: "Optimize for AI-powered search results" },
  { icon: Target, title: "Intent Mapping", description: "Map user intent to AI understanding" },
  { icon: BarChart3, title: "Predictive Analytics", description: "Data-driven SEO forecasting" },
  { icon: FileText, title: "AI Content Strategy", description: "Content that AI systems cite" },
  { icon: Shield, title: "Authority Building", description: "Establish AI trust signals" },
  { icon: Zap, title: "Technical AI SEO", description: "Technical foundation for AI" },
  { icon: Globe, title: "LLM Visibility Optimization", description: "Get cited in ChatGPT & Perplexity" },
  { icon: MessageSquare, title: "AI Brand Mentions", description: "Build brand presence in AI responses" },
  { icon: TrendingUp, title: "Revenue Attribution", description: "Track SEO-to-revenue pipeline" },
];

const intentMappingIcons = [
  { Icon: Search, label: "Query Analysis" },
  { Icon: Target, label: "Intent Mapping" },
  { Icon: Users, label: "Lead Conversion" },
];

const aiPromptFeatures = [
  { icon: Sparkles, title: "Optimize for AI", description: "Structure content for LLM consumption" },
  { icon: Bot, title: "LLM Training Signals", description: "Build authority AI systems recognize" },
  { icon: BrainCircuit, title: "Citation Building", description: "Get cited as trusted source" },
  { icon: LineChart, title: "Monitor & Track", description: "Real-time AI visibility metrics" },
];

const technicalTabs = [
  { 
    id: "schema", 
    label: "Schema Markup", 
    icon: Code,
    title: "Structured Data & Schema",
    description: "Implement rich schema markup that helps AI systems understand your content structure, entities, and relationships.",
    benefits: ["JSON-LD implementation", "Entity relationships", "Rich snippets optimization", "Knowledge graph inclusion"]
  },
  { 
    id: "data", 
    label: "Structured Data", 
    icon: Database,
    title: "Data Architecture",
    description: "Build a semantic data layer that AI crawlers can easily parse and understand for better content comprehension.",
    benefits: ["Semantic HTML structure", "Content hierarchies", "Internal linking optimization", "Topic clustering"]
  },
  { 
    id: "audits", 
    label: "Technical Audits", 
    icon: Bug,
    title: "Comprehensive Technical Audits",
    description: "Deep-dive technical analysis to identify and fix issues preventing AI systems from properly indexing your content.",
    benefits: ["Crawl budget optimization", "Index coverage analysis", "Canonicalization review", "Mobile-first audit"]
  },
  { 
    id: "vitals", 
    label: "Core Web Vitals", 
    icon: Gauge,
    title: "Performance Optimization",
    description: "Optimize Core Web Vitals to meet Google's performance standards that influence AI-powered rankings.",
    benefits: ["LCP optimization", "FID/INP improvement", "CLS reduction", "Page speed enhancement"]
  },
  { 
    id: "crawl", 
    label: "Crawl Optimization", 
    icon: FileCheck,
    title: "Crawl Efficiency",
    description: "Ensure AI bots can efficiently discover and process your most important content.",
    benefits: ["XML sitemap optimization", "Robots.txt configuration", "Log file analysis", "Crawl prioritization"]
  },
  { 
    id: "security", 
    label: "Security & Trust", 
    icon: Lock,
    title: "Security & Trust Signals",
    description: "Build the security foundation that establishes trust with both users and AI systems.",
    benefits: ["HTTPS implementation", "Security headers", "Trust badge integration", "Privacy compliance"]
  },
];

export const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("schema");
  const scrollToForm = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const activeTabData = technicalTabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-6 md:py-10 lg:py-16 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto px-3 md:px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-5 md:mb-10">
          <span className="badge-brand mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Our AI SEO Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Comprehensive solutions to dominate AI search
          </p>
        </div>

        {/* Bento Grid for Core Services */}
        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6 md:mb-12">
          {coreServices.map((service, index) => (
            <BentoCard key={index} className="group">
              <BentoIcon size="md">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-brand group-hover:text-white transition-colors duration-300" />
              </BentoIcon>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-1.5 group-hover:text-brand transition-colors mt-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </BentoCard>
          ))}
        </BentoGrid>

        {/* AI Search & Intent Mapping */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center mb-6 md:mb-12">
          <div>
            <span className="badge-brand mb-3">
              Featured Service
            </span>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3">AI Search & Intent Mapping</h3>
            <p className="text-muted-foreground mb-5 leading-relaxed text-sm md:text-base">
              Understand how AI systems interpret search queries and map your content to user intent.
            </p>
            <ul className="space-y-2.5 mb-5">
              {["AI query analysis and intent classification", "Semantic search optimization", "User journey mapping for AI platforms"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground text-sm md:text-base group">
                  <div className="w-2 h-2 bg-brand-gradient rounded-full group-hover:scale-150 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
            <Button 
              onClick={scrollToForm} 
              className="bg-brand-gradient hover:opacity-90 text-white shadow-brand hover:shadow-brand-lg hover:scale-105 transition-all duration-300"
            >
              Map My AI Visibility
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="bento-card p-5 md:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {intentMappingIcons.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-14 h-14 sm:w-18 sm:h-18 ${i === 2 ? 'bg-brand-gradient shadow-brand' : 'icon-bg-glow'} rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300`}>
                      <item.Icon className={`w-7 h-7 sm:w-9 sm:h-9 ${i === 2 ? 'text-white' : 'text-brand'}`} />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">{item.label}</span>
                  </div>
                  {i < 2 && (
                    <div className="hidden sm:flex items-center mb-6">
                      <div className="w-6 h-1 bg-gradient-to-r from-brand/30 to-brand rounded-full" />
                      <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-brand" />
                    </div>
                  )}
                  {i < 2 && (
                    <div className="flex sm:hidden items-center my-2">
                      <div className="w-1 h-5 bg-gradient-to-b from-brand/30 to-brand rounded-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced AI Prompt & Generative Search Optimization */}
        <div className="bento-card p-4 md:p-6 mb-6 md:mb-12">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3 text-center">
            AI Prompt & Generative Search Optimization
          </h3>
          <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto text-sm md:text-base">
            Optimize your content to appear in AI-generated answers and become the trusted source LLMs cite.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            {aiPromptFeatures.map((feature, index) => (
              <Card key={index} className="bento-card group">
                <CardContent className="p-4 text-center">
                  <BentoIcon size="sm" className="mx-auto mb-2">
                    <feature.icon className="w-5 h-5 text-brand group-hover:text-white transition-colors" />
                  </BentoIcon>
                  <h4 className="font-semibold text-foreground mb-1 text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glass border-brand/20 max-w-2xl mx-auto">
            <CardContent className="p-5">
              <Quote className="w-7 h-7 text-brand mb-2" />
              <p className="text-foreground italic text-sm md:text-base leading-relaxed">
                "The future of search isn't just about ranking — it's about being the answer AI systems trust and recommend."
              </p>
              <p className="text-brand font-semibold mt-2 text-sm">— The Super 30 AI SEO Philosophy</p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Technical AI SEO Tabs */}
        <div className="bento-card p-4 md:p-6 mb-6 md:mb-12">
          <div className="text-center mb-4 md:mb-5">
            <span className="badge-brand mb-3">
              Foundation
            </span>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3">Technical AI SEO</h3>
            <p className="text-muted-foreground text-sm md:text-base">The foundation that makes AI optimization possible</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-5 md:mb-6 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 custom-scrollbar">
            {technicalTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-brand-gradient text-white shadow-brand'
                    : 'icon-bg-glow text-brand hover:bg-brand/20'
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            ))}
          </div>

          {activeTabData && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-center animate-fade-in">
              <div>
                <h4 className="text-lg md:text-xl font-bold text-foreground mb-2">{activeTabData.title}</h4>
                <p className="text-muted-foreground mb-4 text-sm md:text-base">{activeTabData.description}</p>
                <ul className="space-y-2.5">
                  {activeTabData.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-foreground text-sm md:text-base">
                      <div className="w-5 h-5 bg-brand-gradient rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-2.5 h-2.5 text-white" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass rounded-2xl p-6 md:p-8 flex items-center justify-center min-h-[200px] border-brand/20">
                <div className="text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-gradient rounded-3xl flex items-center justify-center mx-auto mb-3 shadow-brand">
                    <activeTabData.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  <p className="text-brand font-semibold text-sm">{activeTabData.label}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* AI Link & Brand Signal */}
        <div className="bento-card p-4 md:p-6">
          <div className="text-center mb-6">
            <span className="badge-brand mb-3">
              Authority
            </span>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3">AI Link & Brand Signal Optimization</h3>
            <p className="text-muted-foreground text-sm md:text-base">Build the authority signals that matter to AI systems</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5">
            {[
              { v: "30+/100", l: "Domain Authority" }, 
              { v: "78/100", l: "AI Trust Score" }, 
              { v: "92/100", l: "Citation Index", badge: "+23% this quarter" }
            ].map((m, i) => (
              <Card 
                key={i} 
                className="bento-card text-center group"
              >
                <CardContent className="p-5">
                  <div className="text-3xl md:text-4xl font-bold text-brand mb-1.5 group-hover:scale-110 transition-transform duration-300">
                    {m.v}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{m.l}</p>
                  {m.badge && (
                    <span className="inline-block mt-2.5 px-2.5 py-0.5 bg-green-500/10 text-green-600 text-xs rounded-full font-medium">
                      {m.badge}
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
