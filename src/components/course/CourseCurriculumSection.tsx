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
  Wrench,
  Zap,
  Target
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const CourseCurriculumSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [activePhase, setActivePhase] = useState("phase1");

  const phases = [
    {
      id: "phase1",
      title: "Foundation",
      subtitle: "Weeks 1-4",
      outcome: "You'll understand SEO better than 90% of marketers",
      hours: "80 hours",
      icon: BookOpen,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      modules: [
        {
          title: "SEO Fundamentals (The Right Way)",
          topics: ["Technical SEO that actually matters", "On-page optimization secrets", "Content strategy that converts", "Link building without spamming"],
          tools: ["Ahrefs", "SEMrush", "Screaming Frog"],
          outcome: "Audit any website in 30 minutes"
        },
        {
          title: "AI Basics for Marketers (No Coding)",
          topics: ["How ChatGPT actually works (simple version)", "Prompt engineering to 10x your output", "When to use AI vs when not to", "AI tool landscape—what's worth paying for"],
          tools: ["ChatGPT", "Claude", "Gemini"],
          outcome: "Use AI like a power user, not a noob"
        },
        {
          title: "Analytics That Drive Decisions",
          topics: ["GA4 setup that makes sense", "Search Console hacks nobody teaches", "Attribution without the headache", "Dashboards that impress clients"],
          tools: ["GA4", "GSC", "Looker Studio"],
          outcome: "Prove ROI to any skeptical client"
        },
      ],
    },
    {
      id: "phase2",
      title: "AI Specialization",
      subtitle: "Weeks 5-16",
      outcome: "You'll have skills that 95% of SEOs don't have yet",
      hours: "120 hours",
      icon: Brain,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      modules: [
        {
          title: "GEO (Generative Engine Optimization)",
          topics: ["Get your brand cited by ChatGPT", "Optimize for AI Overview results", "Voice search domination", "Schema that AI actually reads"],
          tools: ["Google Business", "Bing Places", "Schema.org"],
          outcome: "Clients ranked in AI search results"
        },
        {
          title: "AEO (Answer Engine Optimization)",
          topics: ["Own featured snippets at scale", "People Also Ask domination", "Knowledge graph hacking", "Conversational query targeting"],
          tools: ["AnswerThePublic", "AlsoAsked", "Clearscope"],
          outcome: "Position zero for money keywords"
        },
        {
          title: "AI Content at Scale (Quality + Speed)",
          topics: ["AI content that doesn't sound like AI", "Content clusters in half the time", "E-E-A-T for the AI era", "100 pages/month workflow"],
          tools: ["Jasper", "SurferSEO", "Frase"],
          outcome: "10x content output, same quality"
        },
        {
          title: "Technical AI SEO",
          topics: ["JavaScript SEO for modern sites", "Core Web Vitals without dev help", "Automated schema generation", "Crawl budget for 1M+ page sites"],
          tools: ["Cloudflare", "Next.js", "Schema Pro"],
          outcome: "Handle enterprise-level technical SEO"
        },
      ],
    },
    {
      id: "phase3",
      title: "Build AI Systems",
      subtitle: "Weeks 17-24",
      outcome: "You'll build AI agents that work while you sleep",
      hours: "100 hours",
      icon: Rocket,
      color: "text-[hsl(var(--brand-orange))]",
      bgColor: "bg-[hsl(var(--brand-orange))]/10",
      borderColor: "border-[hsl(var(--brand-orange))]/30",
      modules: [
        {
          title: "Building Your First AI SEO Agent",
          topics: ["Agent architecture (no coding needed)", "Automated workflows that save 10+ hours/week", "API integrations made simple", "Custom GPT for your niche"],
          tools: ["LangChain", "n8n", "Zapier", "Make"],
          outcome: "AI that does competitor research for you"
        },
        {
          title: "Agentic Commerce Systems",
          topics: ["AI-powered product recommendations", "Autonomous selling strategies", "Personalization without creepiness", "Conversion rate optimization with AI"],
          tools: ["Shopify AI", "Dynamic Yield", "Optimizely"],
          outcome: "E-commerce clients that actually convert"
        },
        {
          title: "Predictive Analytics & Forecasting",
          topics: ["Predict traffic drops before they happen", "AI-powered competitor monitoring", "Trend forecasting for content", "Automated reporting that clients love"],
          tools: ["BigQuery", "Python basics", "TensorFlow Lite"],
          outcome: "Predict and prevent SEO disasters"
        },
      ],
    },
    {
      id: "phase4",
      title: "Real Projects",
      subtitle: "Weeks 25-26",
      outcome: "You'll have a portfolio that actually impresses",
      hours: "40 hours",
      icon: Trophy,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      modules: [
        {
          title: "Capstone: Real Client Project",
          topics: ["End-to-end AI SEO strategy", "Live implementation (not dummy sites)", "Measurable results documentation", "Presentation to industry panel"],
          tools: ["Everything you've learned"],
          outcome: "Case study for your portfolio"
        },
        {
          title: "Build Your Signature AI Agent",
          topics: ["Design your unique SEO agent", "Deploy for real clients", "Monitor, optimize, iterate", "Document for selling as a service"],
          tools: ["Custom stack"],
          outcome: "Productized service you can sell"
        },
      ],
    },
    {
      id: "internship",
      title: "Paid Internship",
      subtitle: "Week 27+",
      outcome: "You'll have real work experience on your resume",
      hours: "40 hours",
      icon: Briefcase,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      modules: [
        {
          title: "Industry Immersion",
          topics: ["Work with live clients (paid)", "Agency or startup environment", "Team collaboration on real projects", "Reference letter for job applications"],
          tools: ["Industry-standard stack"],
          outcome: "Experience that separates you from freshers"
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
            Your 6-Month Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Week 1: Learn the Basics. <span className="text-gradient">Week 26: Build AI Agents.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's exactly how that transformation happens. No fluff, no filler.
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
                  <p className="text-sm text-muted-foreground">{activePhaseData.subtitle} • {activePhaseData.hours}</p>
                </div>
              </div>
              <div className="hidden md:block text-right">
                <p className="text-xs text-muted-foreground">By the end:</p>
                <p className="text-sm font-medium text-foreground">{activePhaseData.outcome}</p>
              </div>
            </div>

            {/* Modules Accordion */}
            <div className="bg-card rounded-b-2xl border border-border/50 border-t-0 overflow-hidden">
              <Accordion type="single" collapsible defaultValue={activePhaseData.modules[0]?.title}>
                {activePhaseData.modules.map((module, index) => (
                  <AccordionItem key={index} value={module.title} className="border-border/50">
                    <AccordionTrigger className="px-4 md:px-6 hover:no-underline hover:bg-muted/30">
                      <div className="flex items-center gap-3 text-left">
                        <span className="font-semibold text-foreground">{module.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 md:px-6 pb-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        {/* Topics */}
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">What You'll Learn</p>
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
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Tools You'll Master</p>
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
                        {/* Outcome */}
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">You'll Be Able To</p>
                          <div className="flex items-center gap-2 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                            <Target className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{module.outcome}</span>
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
            <span className="text-2xl font-bold text-foreground">380+</span> hours of structured learning • 
            <span className="text-foreground font-medium"> Not recorded videos—live classes with real Q&A</span>
          </p>
        </div>
      </div>
    </section>
  );
};
