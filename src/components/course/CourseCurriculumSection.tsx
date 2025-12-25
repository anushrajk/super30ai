import { useState } from "react";
import { 
  BookOpen, 
  Brain, 
  Rocket, 
  Trophy,
  Briefcase,
  ChevronDown,
  Clock,
  CheckCircle2,
  Wrench
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const CourseCurriculumSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activePhase, setActivePhase] = useState("phase1");

  const phases = [
    {
      id: "phase1",
      title: "Foundation",
      subtitle: "Weeks 1-4",
      hours: "80 hours",
      icon: BookOpen,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      modules: [
        {
          title: "SEO Fundamentals Mastery",
          topics: ["Technical SEO deep dive", "On-page optimization", "Content strategy fundamentals", "Link building essentials"],
          tools: ["Ahrefs", "SEMrush", "Screaming Frog"],
        },
        {
          title: "Introduction to AI in Marketing",
          topics: ["AI/ML basics for marketers", "Prompt engineering fundamentals", "Understanding LLMs & transformers", "AI tool landscape overview"],
          tools: ["ChatGPT", "Claude", "Gemini"],
        },
        {
          title: "Data Analytics for SEO",
          topics: ["Google Analytics 4 mastery", "Search Console advanced usage", "Data visualization basics", "Attribution modeling"],
          tools: ["GA4", "GSC", "Looker Studio"],
        },
      ],
    },
    {
      id: "phase2",
      title: "Specialization",
      subtitle: "Weeks 5-16",
      hours: "120 hours",
      icon: Brain,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      modules: [
        {
          title: "GEO (Generative Engine Optimization)",
          topics: ["Local SEO + AI integration", "Visual search optimization", "Voice search strategy", "Schema markup for AI"],
          tools: ["Google Business", "Bing Places", "Schema.org"],
        },
        {
          title: "AEO (Answer Engine Optimization)",
          topics: ["Featured snippets domination", "People Also Ask optimization", "Knowledge graph optimization", "Conversational query targeting"],
          tools: ["AnswerThePublic", "AlsoAsked", "Clearscope"],
        },
        {
          title: "AI Content Strategy",
          topics: ["AI-assisted content creation", "Content clusters with AI", "E-E-A-T for AI era", "Content velocity strategies"],
          tools: ["Jasper", "SurferSEO", "Frase"],
        },
        {
          title: "Technical AI SEO",
          topics: ["JavaScript SEO for AI", "Core Web Vitals optimization", "Structured data automation", "Crawl budget for large sites"],
          tools: ["Cloudflare", "Next.js", "Schema Pro"],
        },
      ],
    },
    {
      id: "phase3",
      title: "AI Implementation",
      subtitle: "Weeks 17-24",
      hours: "100 hours",
      icon: Rocket,
      color: "text-[hsl(var(--brand-orange))]",
      bgColor: "bg-[hsl(var(--brand-orange))]/10",
      borderColor: "border-[hsl(var(--brand-orange))]/30",
      modules: [
        {
          title: "Building AI SEO Agents",
          topics: ["Agent architecture design", "Workflow automation", "API integrations", "Custom GPT development"],
          tools: ["LangChain", "n8n", "Zapier", "Make"],
        },
        {
          title: "Agentic Commerce Systems",
          topics: ["Autonomous selling strategies", "AI-powered product discovery", "Personalization at scale", "Conversion optimization"],
          tools: ["Shopify AI", "Dynamic Yield", "Optimizely"],
        },
        {
          title: "Advanced AI Analytics",
          topics: ["Predictive SEO modeling", "AI-powered competitor analysis", "Trend forecasting", "Automated reporting"],
          tools: ["BigQuery", "Python", "TensorFlow"],
        },
      ],
    },
    {
      id: "phase4",
      title: "Capstone & Agentic Build",
      subtitle: "Weeks 25-26",
      hours: "40 hours",
      icon: Trophy,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      modules: [
        {
          title: "Capstone Project",
          topics: ["End-to-end AI SEO strategy", "Live client implementation", "Results documentation", "Presentation & defense"],
          tools: ["All learned tools"],
        },
        {
          title: "AI Agent Development",
          topics: ["Build your own SEO agent", "Deploy autonomous systems", "Monitor and optimize", "Scale and iterate"],
          tools: ["Custom stack"],
        },
      ],
    },
    {
      id: "internship",
      title: "Industry Internship",
      subtitle: "Week 27+",
      hours: "40 hours",
      icon: Briefcase,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      modules: [
        {
          title: "Real-World Experience",
          topics: ["Work with live clients", "Agency/startup immersion", "Team collaboration", "Professional development"],
          tools: ["Industry-standard tools"],
        },
      ],
    },
  ];

  const activePhaseData = phases.find(p => p.id === activePhase);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            Comprehensive Curriculum
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Master Every Layer: <span className="text-gradient">Traditional → AI-Enhanced → Autonomous</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            380 hours of structured learning across 5 phases. From foundations to building your own AI agents.
          </p>
        </div>

        {/* Phase Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 md:gap-3 mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activePhase === phase.id
                  ? `${phase.bgColor} ${phase.color} ${phase.borderColor} border`
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted border border-transparent'
              }`}
            >
              <phase.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{phase.title}</span>
              <span className="sm:hidden">{phase.subtitle}</span>
            </button>
          ))}
        </div>

        {/* Active Phase Content */}
        {activePhaseData && (
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Phase Header */}
            <div className={`flex items-center justify-between p-4 md:p-6 rounded-t-2xl ${activePhaseData.bgColor} border ${activePhaseData.borderColor} border-b-0`}>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl ${activePhaseData.bgColor} border ${activePhaseData.borderColor} flex items-center justify-center`}>
                  <activePhaseData.icon className={`w-6 h-6 ${activePhaseData.color}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${activePhaseData.color}`}>{activePhaseData.title}</h3>
                  <p className="text-sm text-muted-foreground">{activePhaseData.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">{activePhaseData.hours}</span>
              </div>
            </div>

            {/* Modules Accordion */}
            <div className="bg-card rounded-b-2xl border border-border/50 border-t-0 overflow-hidden">
              <Accordion type="single" collapsible defaultValue={activePhaseData.modules[0]?.title}>
                {activePhaseData.modules.map((module, index) => (
                  <AccordionItem key={index} value={module.title} className="border-border/50">
                    <AccordionTrigger className="px-4 md:px-6 hover:no-underline hover:bg-muted/30">
                      <span className="text-left font-semibold text-foreground">{module.title}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 md:px-6 pb-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        {/* Topics */}
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Topics Covered</p>
                          <ul className="space-y-2">
                            {module.topics.map((topic, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Tools */}
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Tools & Platforms</p>
                          <div className="flex flex-wrap gap-2">
                            {module.tools.map((tool, i) => (
                              <span 
                                key={i}
                                className="flex items-center gap-1 px-3 py-1 bg-muted/50 rounded-full text-xs font-medium text-foreground border border-border/50"
                              >
                                <Wrench className="w-3 h-3" />
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        )}

        {/* Total Hours */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground">
            <span className="text-2xl font-bold text-foreground">380+</span> total hours of structured learning
          </p>
        </div>
      </div>
    </section>
  );
};
