import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { Bot, MessageSquare, Zap, Users, Shield, Target, BarChart3, Clock, Globe, Brain, Layers, Eye, Award, HeadphonesIcon, TrendingUp, Settings, ShoppingCart } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Smart AI Bot & Chatbot Development Company in Bangalore",
    description: "Never miss a customer query. AI chatbot company in Bangalore builds RAG chatbots that handle conversations and drive lead generation 24/7. Build yours now!",
    keywords: "chatbot company in bangalore, chatbot development company in bangalore, chatbot development services in bangalore, chatbot development agency in bangalore, ai chatbot development company in bangalore",
    canonical: "https://super30ai.lovable.app/chatbot-development-company-bangalore",
    serviceType: "Chatbot Development",
    ogTitle: "What If Your Business Could Respond to Customers 24/7?",
    ogDescription: "Smart chatbots that qualify leads and engage customers even when your team is away. Let's build!",
    twitterTitle: "What If Your Business Could Respond to Customers 24/7?",
    twitterDescription: "Smart chatbots that qualify leads and engage customers even when your team is away. Let's build!",
  },
  hero: {
    badgeIcon: Bot,
    badgeText: "AI Chatbot Development Company in Bangalore",
    headlineLine1: "AI Chatbot Development",
    headlineLine2: "Company in Bangalore",
    description: <>As Bangalore's top <span className="text-foreground font-semibold">chatbot development company</span>, we build custom AI chatbots and RAG bots that <span className="text-foreground font-semibold">qualify leads, answer queries, and close sales 24/7</span> — on WhatsApp, your website, and social media.</>,
    trustSignals: [
      { icon: Brain, text: "AI-Powered Natural Conversations" },
      { icon: Clock, text: "24/7 Instant Responses" },
      { icon: Globe, text: "WhatsApp, Website & Social" },
      { icon: TrendingUp, text: "Avg. 60% Support Cost Reduction" },
    ],
    credentials: ["200+ Chatbots Deployed", "AI-Powered NLP", "Multi-Platform"],
    formTitle: "Free AI Chatbot Demo in Bangalore",
    formDescription: "Tell us your use case — Bangalore's top chatbot development company will show how a custom AI or RAG chatbot can transform your business.",
    formButtonText: "Get Free Chatbot Demo",
  },
  source: "chatbot",
  problems: [
    { icon: Clock, title: "Customers Wait Hours for Replies", description: "By the time your team responds, the customer has already gone to a competitor." },
    { icon: Users, title: "Support Team is Overwhelmed", description: "Your team answers the same 20 questions hundreds of times a day." },
    { icon: Target, title: "Leads Slip Through the Cracks", description: "Website visitors leave without converting because there's no one to engage them." },
    { icon: Globe, title: "Can't Scale Support", description: "Hiring more agents is expensive. You need a solution that scales without adding headcount." },
  ],
  services: [
    { icon: MessageSquare, title: "Website Chatbot", description: "Intelligent chat widget that greets, qualifies, and converts website visitors." },
    { icon: MessageSquare, title: "WhatsApp Chatbot", description: "AI bot on WhatsApp for support, orders, and lead qualification." },
    { icon: Brain, title: "AI/NLP Chatbot", description: "Natural language understanding for human-like conversations." },
    { icon: HeadphonesIcon, title: "Support Automation", description: "Handle FAQs, ticket creation, and issue resolution automatically." },
    { icon: Target, title: "Lead Qualification Bot", description: "Ask qualifying questions and route hot leads to your sales team." },
    { icon: ShoppingCart, title: "E-Commerce Bot", description: "Product recommendations, order tracking, and cart recovery automation." },
    { icon: Layers, title: "CRM Integration", description: "Sync chatbot data with your CRM for seamless lead management." },
    { icon: BarChart3, title: "Analytics & Optimization", description: "Track conversations, identify drop-offs, and continuously improve." },
  ],
  comparison: {
    traditional: [
      "Rule-based bots with rigid, frustrating flows",
      "Can only handle exact keyword matches",
      "Generic responses that annoy users",
      "No integration with business systems",
      "Static — requires manual updates",
      "Single platform only",
    ],
    super30: [
      "AI-powered bots that understand natural language",
      "Handles typos, slang, and conversational language",
      "Personalized responses based on user context",
      "Deep integration with CRM, e-commerce, and tools",
      "Self-learning — improves with every conversation",
      "Deploy on WhatsApp, website, Instagram, and more",
    ],
  },
  benefits: [
    { icon: Clock, title: "Instant 24/7 Response", description: "Never miss a customer query — chatbot responds in seconds, around the clock." },
    { icon: TrendingUp, title: "60% Cost Reduction", description: "Reduce support costs by automating repetitive queries and FAQs." },
    { icon: Target, title: "More Qualified Leads", description: "Bot qualifies and scores leads before passing them to your sales team." },
    { icon: Users, title: "Better Customer Experience", description: "Instant, accurate answers improve satisfaction and loyalty." },
    { icon: Brain, title: "Continuous Learning", description: "AI chatbot gets smarter with every conversation and improves over time." },
    { icon: Globe, title: "Multi-Platform", description: "One chatbot across WhatsApp, website, Facebook Messenger, and Instagram." },
    { icon: Layers, title: "Seamless Handoff", description: "Complex queries are smoothly escalated to human agents with full context." },
    { icon: Shield, title: "Data Security", description: "Enterprise-grade encryption and compliance with data privacy regulations." },
    { icon: BarChart3, title: "Actionable Insights", description: "Understand what customers ask, where they drop off, and what converts." },
  ],
  process: [
    { icon: Users, title: "Discovery & Planning", description: "Understand your use cases, conversation flows, and integration needs." },
    { icon: Bot, title: "Design & Build", description: "Design conversation flows, train AI models, and build the chatbot." },
    { icon: Layers, title: "Integrate & Test", description: "Connect with your systems, test thoroughly, and refine responses." },
    { icon: Zap, title: "Launch & Optimize", description: "Deploy, monitor conversations, and continuously improve performance." },
  ],
  whoIsThisFor: {
    forYou: [
      "You receive 100+ customer queries daily and can't keep up",
      "You want to capture and qualify leads from your website 24/7",
      "You need to automate repetitive support questions",
      "You want to reduce customer support costs without sacrificing quality",
      "You want a chatbot on WhatsApp, website, or social media",
    ],
    notForYou: [
      "You get fewer than 5 queries a day",
      "You want a chatbot that lies to customers or creates fake urgency",
      "You're not willing to invest in proper conversation design",
      "You expect the chatbot to replace all human interaction",
    ],
  },
  faq: getFaqs("chatbot"),
  finalCTA: {
    headline: "Hire Bangalore's Top AI Chatbot Development Company",
    description: "Get a free AI chatbot demo and see how our chatbot development services automate support and boost lead generation 24/7.",
    buttonText: "Get Free Chatbot Demo",
  },
};


const Chatbot = () => <ServicePageTemplate config={config} />;
export default Chatbot;
