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
    <section className="py-8 md:py-14 lg:py-20 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our AI SEO Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions to dominate AI search
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-14">
          {coreServices.map((service, index) => (
            <Card 
              key={index} 
              className="bg-background/80 backdrop-blur-sm border-border/50 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group hover:-translate-y-2"
            >
              <CardContent className="p-4 md:p-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-3 md:mb-4 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Search & Intent Mapping */}
        <div className="grid lg:grid-cols-2 gap-5 md:gap-10 items-center mb-8 md:mb-14">
          <div>
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium mb-3">
              Featured Service
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">AI Search & Intent Mapping</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Understand how AI systems interpret search queries and map your content to user intent.
            </p>
            <ul className="space-y-3 mb-6">
              {["AI query analysis and intent classification", "Semantic search optimization", "User journey mapping for AI platforms"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground group">
                  <div className="w-2 h-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full group-hover:scale-150 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
            <Button 
              onClick={scrollToForm} 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
            >
              Map My AI Visibility
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4">
              {intentMappingIcons.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 ${i === 2 ? 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30' : 'bg-gradient-to-br from-orange-100 to-orange-200'} rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300`}>
                      <item.Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${i === 2 ? 'text-white' : 'text-orange-500'}`} />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">{item.label}</span>
                  </div>
                  {i < 2 && (
                    <div className="hidden sm:flex items-center mb-6">
                      <div className="w-8 h-1 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full" />
                      <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-orange-500" />
                    </div>
                  )}
                  {i < 2 && (
                    <div className="flex sm:hidden items-center my-2">
                      <div className="w-1 h-6 bg-gradient-to-b from-orange-300 to-orange-500 rounded-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced AI Prompt & Generative Search Optimization */}
        <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 md:p-8 mb-8 md:mb-14 shadow-xl">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 text-center">
            AI Prompt & Generative Search Optimization
          </h3>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Optimize your content to appear in AI-generated answers and become the trusted source LLMs cite.
          </p>
          
          {/* Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
            {aiPromptFeatures.map((feature, index) => (
              <Card key={index} className="bg-muted/30 border-border/50 hover:border-orange-500/50 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quote Callout */}
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200/50 max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <Quote className="w-8 h-8 text-orange-500 mb-3" />
              <p className="text-foreground italic text-base leading-relaxed">
                "The future of search isn't just about ranking — it's about being the answer AI systems trust and recommend."
              </p>
              <p className="text-orange-600 font-semibold mt-3 text-sm">— The Super 30 AI SEO Philosophy</p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Technical AI SEO Tabs */}
        <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 md:p-8 mb-8 md:mb-14 shadow-xl">
          <div className="text-center mb-5 md:mb-6">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium mb-3">
              Foundation
            </span>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">Technical AI SEO</h3>
            <p className="text-muted-foreground">The foundation that makes AI optimization possible</p>
          </div>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 custom-scrollbar">
            {technicalTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700 hover:from-orange-200 hover:to-orange-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTabData && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center animate-fade-in">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-3">{activeTabData.title}</h4>
                <p className="text-muted-foreground mb-6">{activeTabData.description}</p>
                <ul className="space-y-3">
                  {activeTabData.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground">
                      <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-8 flex items-center justify-center min-h-[250px] border border-orange-200/50">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-orange-500/30">
                    <activeTabData.icon className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-orange-600 font-semibold">{activeTabData.label}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* AI Link & Brand Signal */}
        <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 md:p-8 shadow-xl">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium mb-3">
              Authority
            </span>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">AI Link & Brand Signal Optimization</h3>
            <p className="text-muted-foreground">Build the authority signals that matter to AI systems</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[
              { v: "30+/100", l: "Domain Authority" }, 
              { v: "78/100", l: "AI Trust Score" }, 
              { v: "92/100", l: "Citation Index", badge: "+23% this quarter" }
            ].map((m, i) => (
              <Card 
                key={i} 
                className="bg-muted/30 border-border/50 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {m.v}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{m.l}</p>
                  {m.badge && (
                    <span className="inline-block mt-3 px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
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
