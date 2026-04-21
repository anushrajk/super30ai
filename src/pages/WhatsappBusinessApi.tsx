import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { MessageSquare, Bot, Users, Zap, Shield, Target, BarChart3, Clock, Send, Bell, ShoppingCart, Globe, Eye, Award, Phone, Layers } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "WhatsApp Marketing in Bangalore | Bulk WhatsApp Services",
    description: "Connect with customers on the app they use most. Our WhatsApp marketing company in Bangalore delivers bulk campaigns that drive results. Let's Connect!",
    keywords: "whatsapp marketing bangalore, bulk whatsapp marketing in bangalore, whatsapp marketing company in bangalore, whatsapp marketing service in bangalore",
    canonical: "https://www.thesuper30.ai/whatsapp-marketing-company-bangalore",
    serviceType: "WhatsApp Business API",
    ogTitle: "Your Customers Are on WhatsApp. Are You Reaching Them?",
    ogDescription: "Bulk WhatsApp campaigns that drive real engagement and boost conversions for your business. Let's go!",
    twitterTitle: "Your Customers Are on WhatsApp. Are You Reaching Them?",
    twitterDescription: "Bulk WhatsApp campaigns that drive real engagement and boost conversions for your business. Let's go!",
  },
  hero: {
    badgeIcon: MessageSquare,
    badgeText: "WhatsApp Marketing Company in Bangalore",
    headlineLine1: "WhatsApp Marketing",
    headlineLine2: "Company in Bangalore",
    description: <>Bangalore's leading <span className="text-foreground font-semibold">WhatsApp marketing company</span> — official WhatsApp Business API setup with <span className="text-foreground font-semibold">bulk WhatsApp campaigns, chatbots, and automated messaging</span> that drive engagement and sales at scale.</>,
    trustSignals: [
      { icon: Shield, text: "Official Meta Business Partner" },
      { icon: Bot, text: "AI-Powered Chatbot Integration" },
      { icon: Send, text: "Bulk Broadcast Campaigns" },
      { icon: BarChart3, text: "98% Open Rate on WhatsApp" },
    ],
    credentials: ["Official API Partner", "500+ Businesses Enabled", "98% Open Rates"],
    formTitle: "Free WhatsApp Marketing Setup",
    formDescription: "Tell us about your business and we'll set up your WhatsApp Business API with automation.",
    formButtonText: "Start WhatsApp Marketing",
  },
  source: "whatsapp_business_api",
  problems: [
    { icon: Phone, title: "Manually Replying to Every Message", description: "Your team spends hours answering the same questions over and over on WhatsApp." },
    { icon: Send, title: "Can't Send Bulk Messages", description: "WhatsApp personal accounts limit broadcasts and risk getting banned." },
    { icon: ShoppingCart, title: "Losing Sales to Slow Responses", description: "Customers message you but by the time you reply, they've already bought from competitors." },
    { icon: Clock, title: "No After-Hours Support", description: "Enquiries come at midnight but nobody's there to respond until morning." },
  ],
  services: [
    { icon: MessageSquare, title: "API Setup & Integration", description: "Complete WhatsApp Business API setup with green tick verification." },
    { icon: Bot, title: "AI Chatbot", description: "Intelligent chatbot that handles FAQs, qualifies leads, and books appointments 24/7." },
    { icon: Send, title: "Bulk Broadcasting", description: "Send promotional messages, updates, and offers to thousands of contacts." },
    { icon: Bell, title: "Automated Notifications", description: "Order confirmations, shipping updates, payment reminders, and alerts." },
    { icon: ShoppingCart, title: "WhatsApp Commerce", description: "Product catalogs, cart recovery, and in-chat purchases." },
    { icon: Users, title: "Multi-Agent Inbox", description: "Multiple team members managing conversations from one dashboard." },
    { icon: Layers, title: "CRM Integration", description: "Connect WhatsApp with your CRM, e-commerce, and business tools." },
    { icon: BarChart3, title: "Analytics Dashboard", description: "Track message delivery, open rates, response times, and conversions." },
  ],
  comparison: {
    traditional: [
      "Personal WhatsApp with broadcast limits",
      "Manual replies — hours of team time wasted",
      "Risk of account ban for bulk messaging",
      "No automation or chatbot capabilities",
      "Can't integrate with CRM or business tools",
      "No analytics or performance tracking",
    ],
    super30: [
      "Official API — unlimited messaging with Meta's approval",
      "AI chatbot handles 80% of conversations automatically",
      "Compliant bulk messaging with no ban risk",
      "Full automation — replies, notifications, follow-ups",
      "Integrates with CRM, e-commerce, and payment systems",
      "Real-time analytics on delivery, opens, and conversions",
    ],
  },
  benefits: [
    { icon: BarChart3, title: "98% Open Rate", description: "WhatsApp messages have 5x higher open rates than email marketing." },
    { icon: Zap, title: "Instant Responses", description: "AI chatbot responds to customers within seconds, 24 hours a day." },
    { icon: ShoppingCart, title: "Higher Conversions", description: "In-chat product browsing and purchasing increases conversion rates." },
    { icon: Clock, title: "24/7 Availability", description: "Never miss a lead or customer query — chatbot handles it all." },
    { icon: Users, title: "Team Collaboration", description: "Multiple agents manage conversations from a unified inbox." },
    { icon: Shield, title: "Green Tick Verified", description: "Build trust with the official WhatsApp Business green tick badge." },
    { icon: Target, title: "Targeted Campaigns", description: "Segment contacts and send personalized messages for higher engagement." },
    { icon: Globe, title: "Multi-Language", description: "Chatbot supports multiple languages for diverse customer bases." },
    { icon: Award, title: "Customer Satisfaction", description: "Faster responses and personalized service improve customer experience." },
  ],
  process: [
    { icon: MessageSquare, title: "API Setup", description: "Register your business, get approved, and set up WhatsApp Business API." },
    { icon: Bot, title: "Chatbot Design", description: "Design conversation flows for FAQs, lead qualification, and support." },
    { icon: Layers, title: "Integration", description: "Connect with your CRM, e-commerce platform, and business tools." },
    { icon: Zap, title: "Launch & Optimize", description: "Go live, monitor performance, and continuously improve automation." },
  ],
  whoIsThisFor: {
    forYou: [
      "You receive 50+ WhatsApp enquiries daily and can't keep up",
      "You want to automate customer support without losing the personal touch",
      "You want to send promotional campaigns to thousands of contacts",
      "You need 24/7 customer response capability",
      "You want to integrate WhatsApp with your existing business tools",
    ],
    notForYou: [
      "You get fewer than 10 messages a day on WhatsApp",
      "You want to send spam messages to random numbers",
      "You're not willing to invest in proper API setup",
      "You don't have a registered business entity",
    ],
  },
  faq: [
    { question: "What is WhatsApp Business API?", answer: "It's the official enterprise version of WhatsApp that allows businesses to send bulk messages, automate responses, integrate chatbots, and manage conversations at scale — with Meta's approval." },
    { question: "How is this different from WhatsApp Business app?", answer: "The app is for small businesses with limited features. The API supports unlimited agents, automation, chatbots, bulk messaging, CRM integration, and advanced analytics." },
    { question: "How much does it cost?", answer: "API setup costs vary. Meta charges per-conversation pricing. Our setup and management fees start from ₹15,000/month. We'll provide a custom quote based on your message volume." },
    { question: "Can I get the green tick verification?", answer: "Yes. We handle the entire green tick verification process. It requires a registered business, Facebook Business Manager, and compliance with Meta's policies." },
    { question: "How long does setup take?", answer: "Basic API setup takes 2-3 business days. Full chatbot and automation setup typically takes 1-2 weeks depending on complexity." },
    { question: "Will my number get banned?", answer: "No. The official API is Meta-approved. Unlike unofficial tools, there's zero risk of getting banned when following Meta's messaging policies." },
    { question: "Can the chatbot handle complex queries?", answer: "Yes. Our AI-powered chatbots can handle multi-step conversations, product recommendations, appointment booking, and even process payments." },
    { question: "Can I integrate this with my existing CRM?", answer: "Yes. We integrate with Salesforce, HubSpot, Zoho, Freshworks, and most popular CRMs. Custom integrations are also available." },
  ],
  finalCTA: {
    headline: "Ready to Transform Your WhatsApp Into a Sales Machine?",
    description: "Get a free consultation and see how WhatsApp Business API can automate your customer communication.",
    buttonText: "Get Free Consultation",
  },
};

const WhatsappBusinessApi = () => <ServicePageTemplate config={config} />;
export default WhatsappBusinessApi;
