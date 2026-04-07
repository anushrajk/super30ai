import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { Bot, MessageSquare, Zap, Users, Shield, Target, BarChart3, Clock, Globe, Brain, Layers, Eye, Award, HeadphonesIcon, TrendingUp, Settings, ShoppingCart } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Smart AI Bot & Chatbot Development Company in Bangalore",
    description: "Never miss a customer query. AI chatbot company in Bangalore builds RAG chatbots that handle conversations and drive lead generation 24/7. Build yours now!",
    keywords: "chatbot companies in bangalore, chatbot development company in bangalore, chatbot development services in bangalore, chatbot development agency in bangalore, ai chatbot development company in bangalore",
    canonical: "https://www.thesuper30.ai/chatbot-development-company-bangalore",
    serviceType: "Chatbot Development",
    ogTitle: "What If Your Business Could Respond to Customers 24/7?",
    ogDescription: "Smart chatbots that qualify leads and engage customers even when your team is away. Let's build!",
    twitterTitle: "What If Your Business Could Respond to Customers 24/7?",
    twitterDescription: "Smart chatbots that qualify leads and engage customers even when your team is away. Let's build!",
  },
  hero: {
    badgeIcon: Bot,
    badgeText: "AI Chatbot Development",
    headlineLine1: "AI Chatbots That Sell,",
    headlineLine2: "Support & Never Sleep",
    description: <>Custom AI chatbots that <span className="text-foreground font-semibold">qualify leads, answer questions, and close sales</span> — 24/7, across WhatsApp, your website, and social media.</>,
    trustSignals: [
      { icon: Brain, text: "AI-Powered Natural Conversations" },
      { icon: Clock, text: "24/7 Instant Responses" },
      { icon: Globe, text: "WhatsApp, Website & Social" },
      { icon: TrendingUp, text: "Avg. 60% Support Cost Reduction" },
    ],
    credentials: ["200+ Chatbots Deployed", "AI-Powered NLP", "Multi-Platform"],
    formTitle: "Get a Free Chatbot Demo",
    formDescription: "Tell us your use case and we'll show you how a chatbot can transform your business.",
    formButtonText: "Get Free Demo",
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
  faq: [
    { question: "What platforms can the chatbot work on?", answer: "We deploy chatbots on your website, WhatsApp Business API, Facebook Messenger, Instagram DMs, and custom mobile apps." },
    { question: "How 'smart' is the AI chatbot?", answer: "Our chatbots use advanced NLP (Natural Language Processing) to understand intent, handle typos and slang, maintain context across conversations, and provide relevant responses." },
    { question: "Can the chatbot hand off to a human agent?", answer: "Yes. When a query is too complex or a customer requests human support, the chatbot seamlessly transfers the conversation with full context." },
    { question: "How long does it take to build a chatbot?", answer: "A basic FAQ chatbot can be deployed in 1-2 weeks. AI-powered chatbots with complex flows and integrations typically take 3-6 weeks." },
    { question: "Can it integrate with my CRM?", answer: "Yes. We integrate with Salesforce, HubSpot, Zoho, Freshworks, and most popular CRMs and helpdesk tools." },
    { question: "What happens if the chatbot can't answer a question?", answer: "It gracefully acknowledges the limitation, collects the user's details, and either escalates to a human agent or creates a support ticket." },
    { question: "How do you train the chatbot?", answer: "We train it using your FAQ documents, past support transcripts, product information, and custom scenarios. The bot continuously learns from real conversations." },
    { question: "How much does a chatbot cost?", answer: "Pricing depends on complexity and platform. Basic bots start from ₹25,000 for setup. AI-powered bots with integrations are quoted custom based on requirements." },
  ],
  finalCTA: {
    headline: "Ready to Put Your Customer Support on Autopilot?",
    description: "Get a free chatbot demo and see how AI can transform your customer experience.",
    buttonText: "Get Free Demo",
  },
};


const Chatbot = () => <ServicePageTemplate config={config} />;
export default Chatbot;
