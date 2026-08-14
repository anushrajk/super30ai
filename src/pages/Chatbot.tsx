import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { Bot, MessageSquare, Zap, Users, Shield, Target, BarChart3, Clock, Globe, Brain, Layers, Eye, Award, HeadphonesIcon, TrendingUp, Settings, ShoppingCart } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Smart AI Bot & Chatbot Development Company in Bangalore",
    description: "Never miss a customer query. AI chatbot company in Bangalore builds RAG chatbots that handle conversations and drive lead generation 24/7. Build yours now!",
    keywords: "chatbot company in bangalore, chatbot development company in bangalore, chatbot development services in bangalore, chatbot development agency in bangalore, ai chatbot development company in bangalore",
    canonical: "https://www.thesuper30.ai/chatbot-development-company-bangalore",
    serviceType: "Chatbot Development",
    ogTitle: "What If Your Business Could Respond to Customers 24/7?",
    ogDescription: "Smart chatbots that qualify leads and engage customers even when your team is away. Let's build!",
    twitterTitle: "What If Your Business Could Respond to Customers 24/7?",
    twitterDescription: "Smart chatbots that qualify leads and engage customers even when your team is away. Let's build!",
  },
  hero: {
    badgeIcon: Bot,
    badgeText: "AI Chatbot Development Company in Bangalore",
    headlineLine1: "Chatbot Company in Bangalore",
    headlineLine2: "For Automated Customer Support",
    description: <>As Bangalore's leading <span className="text-foreground font-semibold">chatbot development company</span>, we create intelligent AI chatbots and RAG solutions that <span className="text-foreground font-semibold">qualify leads, resolve queries, and support customer interactions</span> around the clock across digital platforms.</>,
    trustSignals: [
      { icon: Brain, text: "Intelligent Conversational Experiences" },
      { icon: Clock, text: "24/7 Automated Customer Support" },
      { icon: Globe, text: "WhatsApp, Website & Social Platforms" },
      { icon: TrendingUp, text: "Cost Savings Up To 60% On Chatbots" },
    ],
    credentials: ["200+ Chatbots Deployed", "AI-Powered NLP", "Multi-Platform"],
    formTitle: "Free AI Chatbot Demo in Bangalore",
    formDescription: "Tell us your use case — Bangalore's top chatbot development company will show how a custom AI or RAG chatbot can transform your business.",
    formButtonText: "Enquire Now",
  },
  source: "chatbot",
  sections: {
    problems: {
      title: "The Challenges Most Businesses Face With Customer Interaction",
      description: "Slow customer responses, rising support workloads, and missed engagement opportunities often limit growth, reduce conversions, and affect customer experience.",
    },
    services: {
      title: "Chatbot Development Services in Bangalore For Customer Engagement And Automation",
      description: "Custom AI chatbot solutions designed to automate conversations, improve customer support, qualify leads, and enhance user experiences across digital platforms.",
    },
    comparison: {
      eyebrow: "What Makes Us Different?",
      title: "Traditional Agency vs. The Super 30",
      description: "See how modern AI chatbot solutions compare with conventional chatbot systems in terms of intelligence, automation, scalability, and customer experience.",
    },
    benefits: {
      eyebrow: "Why Brands Choose Us",
      title: "Chatbot Development Company in Bangalore Driving Measurable Business Impact",
      description: "Our AI chatbot solutions are designed to improve response speed, reduce operational costs, increase lead quality, and deliver a seamless customer experience across every touchpoint.",
    },
    industries: {
      eyebrow: "Industry Expertise",
      title: "Advanced AI Chatbot Solutions for Every Business",
      description: "Industry focused AI solutions trusted across 18+ niche industries. Our AI chatbot development company in Bangalore understands your business objectives and works towards it.",
    },
    whoIsThisFor: {
      title: "Is AI Chatbot Automation Right for Your Business?",
      description: "AI chatbot solutions from a chatbot development agency in Bangalore help businesses automate customer conversations, improve response times, qualify leads, and deliver support at scale without increasing operational workload.",
    },
  },
  problems: [
    { icon: Clock, title: "Customers Wait Too Long For Replies", description: "Delayed responses often result in potential customers choosing competing businesses instead." },
    { icon: Users, title: "Support Teams Handle Repetitive Queries", description: "Customer support teams spend valuable time answering the same questions repeatedly." },
    { icon: Target, title: "Potential Leads Go Unengaged", description: "Website visitors leave without converting when immediate assistance is unavailable." },
    { icon: Globe, title: "Can’t Scale Customer Support Efficiently", description: "Expanding support operations increases costs, while maintaining service quality becomes challenging." },
  ],
  services: [
    { icon: MessageSquare, title: "Website Chatbot", description: "Intelligent chat assistants that engage visitors, qualify enquiries, and support conversion opportunities." },
    { icon: MessageSquare, title: "WhatsApp Chatbot", description: "Automated AI Bot on WhatsApp for customer support, order management, and lead engagement." },
    { icon: Brain, title: "AI Conversational Chatbot", description: "Advanced language processing capabilities that deliver natural and context aware customer interactions." },
    { icon: HeadphonesIcon, title: "Customer Support Automation", description: "Automate FAQs, support requests, and issue management with intelligent response workflows." },
    { icon: Target, title: "Lead Qualification Bot", description: "Identify high intent prospects and route qualified enquiries directly to sales teams." },
    { icon: ShoppingCart, title: "E-Commerce Chatbot", description: "Product recommendations, order updates, and cart recovery workflows for online businesses." },
    { icon: Layers, title: "CRM Platform Integration", description: "Connect chatbot interactions with CRM systems for streamlined customer and lead management." },
    { icon: BarChart3, title: "Performance Analytics & Insights", description: "Monitor conversations, identify opportunities, and improve chatbot performance through data driven reporting." },
  ],
  comparison: {
    traditional: [
      "Rule driven bots with limited conversation paths",
      "Responds only to predefined keyword inputs",
      "Generic responses with minimal personalization",
      "Limited integration with business platforms",
      "Requires frequent manual content updates",
      "Restricted to a single communication channel",
    ],
    super30: [
      "AI-powered chatbots with advanced language understanding",
      "Interprets and handles typos, slang, and conversational language",
      "Context aware responses tailored to user interactions",
      "Seamless integration with CRM, commerce, and business platforms",
      "Continuously improves through intelligent learning models",
      "Deploys across WhatsApp, websites, Instagram, and more",
    ],
  },
  benefits: [
    { icon: Clock, title: "Instant 24/7 Responses", description: "Respond to customer enquiries within seconds through intelligent automated conversations available around the clock." },
    { icon: TrendingUp, title: "Lower Support Costs", description: "Reduce operational expenses by automating routine customer interactions, enquiries, and support requests." },
    { icon: Target, title: "Higher Quality Leads", description: "Identify, qualify, and prioritise potential customers before routing them to your sales team." },
    { icon: Users, title: "Enhanced Customer Experience", description: "Deliver accurate, consistent, and personalised interactions that improve customer satisfaction and loyalty." },
    { icon: Brain, title: "Smarter With Every Interaction", description: "AI powered chatbots continuously learn from conversations to improve accuracy and performance over time." },
    { icon: Globe, title: "Multi Channel Presence", description: "Manage customer conversations across WhatsApp, websites, Instagram, and messaging platforms from one solution." },
    { icon: Layers, title: "Seamless Escalation", description: "Transfer complex enquiries to support teams with complete conversation history and customer context." },
    { icon: Shield, title: "Enterprise Data Security", description: "Protect customer information through advanced security standards and compliance driven data management." },
    { icon: BarChart3, title: "Actionable Performance Insights", description: "Track customer behaviour, engagement patterns, and conversion opportunities through detailed analytics." },
  ],
  process: [
    { icon: Users, title: "Discovery & Planning", description: "Understand your use cases, conversation flows, and integration needs." },
    { icon: Bot, title: "Design & Build", description: "Design conversation flows, train AI models, and build the chatbot." },
    { icon: Layers, title: "Integrate & Test", description: "Connect with your systems, test thoroughly, and refine responses." },
    { icon: Zap, title: "Launch & Optimize", description: "Deploy, monitor conversations, and continuously improve performance." },
  ],
  whoIsThisFor: {
    forYou: [
      "You handle high volumes of customer enquiries daily",
      "You want to capture and qualify leads around the clock",
      "You need to automate routine customer interactions",
      "You want to reduce support costs while maintaining quality",
      "You need chatbot support across multiple digital channels",
    ],
    notForYou: [
      "You receive very few customer enquiries each day",
      "You expect chatbots to replace human expertise entirely",
      "You are unwilling to invest in a conversation strategy",
      "You want misleading automation or poor customer experiences",
    ],
  },
  faq: getFaqs("chatbot"),
  finalCTA: {
    headline: "Ready to Transform Customer Conversations Into Business Growth?",
    description: "See how a chatbot company in Bangalore can help automate customer support, qualify leads, improve response times, and create seamless customer experiences across every digital channel with AI-powered chatbot solutions.",
    buttonText: "Get a Free Chatbot Demo",
  },
};


const Chatbot = () => <ServicePageTemplate config={config} />;
export default Chatbot;
