import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { MessageSquare, Bot, Users, Zap, Shield, Target, BarChart3, Clock, Send, Bell, ShoppingCart, Globe, Eye, Award, Phone, Layers } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "WhatsApp Marketing in Bangalore | Bulk WhatsApp Services",
    description: "Connect with customers on the app they use most. Our WhatsApp marketing company in Bangalore delivers bulk campaigns that drive results. Let's Connect!",
    keywords: "whatsapp marketing in bangalore, bulk whatsapp marketing in bangalore, whatsapp marketing company in bangalore, whatsapp marketing service in bangalore",
    canonical: "https://www.thesuper30.ai/whatsapp-marketing-company-bangalore",
    serviceType: "WhatsApp Business API",
    ogTitle: "Your Customers Are on WhatsApp. Are You Reaching Them?",
    ogDescription: "Bulk WhatsApp campaigns that drive real engagement and boost conversions for your business. Let's go!",
    twitterTitle: "Your Customers Are on WhatsApp. Are You Reaching Them?",
    twitterDescription: "Bulk WhatsApp campaigns that drive real engagement and boost conversions for your business. Let's go!",
  },
  hero: {
    badgeIcon: MessageSquare,
    badgeText: "WhatsApp Marketing in Bangalore",
    headlineLine1: "Bulk WhatsApp Marketing in Bangalore",
    headlineLine2: "For Customer Engagement And Sales Growth",
    description: <>Trusted <span className="text-foreground font-semibold">WhatsApp marketing company in Bangalore</span> for offering official WhatsApp Business API solutions, bulk campaign management, chatbot automation, and scalable customer engagement strategies.</>,
    trustSignals: [
      { icon: Shield, text: "Official Meta Business Partner" },
      { icon: Bot, text: "AI-Powered Chatbot Solutions" },
      { icon: Send, text: "Bulk WhatsApp Campaigns" },
      { icon: BarChart3, text: "High WhatsApp Open Rates" },
    ],
    credentials: ["Official API Partner", "500+ Businesses Enabled", "98% Open Rates"],
    formTitle: "Free WhatsApp Marketing Setup in Bangalore",
    formDescription: "Tell us about your business — Bangalore's leading WhatsApp marketing company will set up your WhatsApp Business API with automation and bulk campaigns.",
    formButtonText: "Enquire Now",
  },
  source: "whatsapp_business_api",
  sections: {
    problems: {
      title: "The Challenges Most Businesses Face",
      description: "Limited automation, slow replies, and disconnected messaging workflows can negatively impact engagement, customer communication, and conversions.",
    },
    services: {
      title: "Advanced WhatsApp Marketing Services in Bangalore For Customer Growth",
      description: "An integrated WhatsApp solution that automates communication, enhances customer engagement, and boosts response efficiency throughout the entire communication cycle.",
    },
    comparison: {
      eyebrow: "What Makes Us Different?",
      title: "Traditional Agency vs. The Super 30",
      description: "Analyze traditional WhatsApp marketing strategies and find out about modern AI powered automation conversation devices that allow for faster responses, larger engagement, and measurable business growth.",
    },
    benefits: {
      eyebrow: "Why Brands Choose Us",
      title: "Designed For Faster Engagement And Better Customer Communication",
      description: "Built around performance, our WhatsApp marketing services in Bangalore help brands increase engagement, improve response rates, and streamline customer communication.",
    },
    industries: {
      eyebrow: "Industry Expertise",
      title: "WhatsApp Solutions For Every Business Industry",
      description: "Customer engagement, automation, lead generation, and communication in various industries through industry-focused WhatsApp marketing strategies.",
    },
    whoIsThisFor: {
      title: "Is This Right For Your Business?",
      description: "We build for growing businesses that need faster customer communication, scalable WhatsApp automation, and better engagement through bulk WhatsApp marketing in Bangalore without manual support limitations.",
    },
  },
  problems: [
    { icon: Phone, title: "Manually Replying to Every Message", description: "Your team spends hours replying to repeated customer queries across WhatsApp conversations." },
    { icon: Send, title: "Can’t Send Bulk Messages", description: "Personal WhatsApp accounts limit broadcasts and increase the risk of account restrictions." },
    { icon: ShoppingCart, title: "Losing Sales From Slow Replies", description: "Delayed responses cause potential customers to move towards competing businesses." },
    { icon: Clock, title: "No After Hour Support", description: "Customer enquiries continue overnight while support responses begin only the next morning." },
  ],
  services: [
    { icon: MessageSquare, title: "API Setup & Integration", description: "Complete WhatsApp Business API setup with official business verification and seamless platform integration." },
    { icon: Bot, title: "AI Chatbot Automation", description: "Smart chatbot solutions handling FAQs, lead qualification, and appointment scheduling around the clock." },
    { icon: Send, title: "Bulk Message Campaigns", description: "Send promotional updates, offers, and announcements to large customer audiences with ease." },
    { icon: Bell, title: "Automated Customer Alerts", description: "Order updates, payment reminders, confirmations, and notifications are delivered through automated workflows." },
    { icon: ShoppingCart, title: "WhatsApp Commerce Solutions", description: "Product catalogues, cart recovery, and in-chat purchasing experiences designed for higher conversions." },
    { icon: Users, title: "Shared Team Inbox", description: "Manage customer conversations across multiple team members from one unified communication dashboard." },
    { icon: Layers, title: "CRM Platform Integration", description: "Connect WhatsApp with CRM systems, ecommerce platforms, and business management tools seamlessly." },
    { icon: BarChart3, title: "Campaign Analytics Dashboard", description: "Track delivery performance, open rates, response times, and conversion insights through live reporting." },
  ],
  comparison: {
    traditional: [
      "Personal WhatsApp accounts with messaging limitations",
      "Manual customer replies consume valuable team hours",
      "Higher risk of account restrictions during bulk campaigns",
      "Limited automation and no chatbot communication support",
      "No CRM or business platform integration capabilities",
      "Missing analytics and campaign performance visibility",
    ],
    super30: [
      "Official API access with scalable approved messaging",
      "80% of customer interactions are instantly handled by AI chatbot automation",
      "Secure bulk messaging with platform compliant communication",
      "Automated workflows for replies, reminders, and follow-ups",
      "Integrated communication with CRM, e-commerce, and payment systems",
      "Live analytics tracking engagement, delivery, and conversions",
    ],
  },
  benefits: [
    { icon: BarChart3, title: "98% Open Rate", description: "WhatsApp campaigns achieve significantly higher visibility compared to traditional email communication." },
    { icon: Zap, title: "Instant Customer Responses", description: "AI-powered automation responds to customer enquiries within seconds throughout the day." },
    { icon: ShoppingCart, title: "Higher Conversion Growth", description: "In chat, product discovery and purchasing experiences improve customer conversion performance." },
    { icon: Clock, title: "24/7 Customer Availability", description: "Never miss customer enquiries with automated chatbot support available around the clock." },
    { icon: Users, title: "Unified Team Collaboration", description: "Multiple support agents manage customer conversations through one centralized communication inbox." },
    { icon: Shield, title: "Official Green Tick Verification", description: "Strengthen customer trust with verified WhatsApp Business account authentication." },
    { icon: Target, title: "Targeted Message Campaigns", description: "Segment customer audiences and deliver personalized communication for stronger engagement." },
    { icon: Globe, title: "Multi Language Support", description: "Support customer interactions across multiple languages for a wider audience communication." },
    { icon: Award, title: "Improved Customer Satisfaction", description: "Faster replies and personalized conversations create better customer experience and retention." },
  ],
  process: [
    { icon: MessageSquare, title: "API Setup", description: "Register your business, get approved, and set up WhatsApp Business API." },
    { icon: Bot, title: "Chatbot Design", description: "Design conversation flows for FAQs, lead qualification, and support." },
    { icon: Layers, title: "Integration", description: "Connect with your CRM, e-commerce platform, and business tools." },
    { icon: Zap, title: "Launch & Optimize", description: "Go live, monitor performance, and continuously improve automation." },
  ],
  whoIsThisFor: {
    forYou: [
      "You receive high volumes of WhatsApp customer enquiries daily",
      "You want automated support without losing personalized communication",
      "You run promotional campaigns for large customer audiences",
      "You need continuous customer response availability throughout the day",
      "You want WhatsApp to be connected with your existing business platforms",
    ],
    notForYou: [
      "You receive very limited customer conversations on WhatsApp",
      "You plan to send bulk spam messages without audience targeting",
      "You are unwilling to invest in a verified API setup",
      "You do not operate with a registered business identity",
    ],
  },
  faq: getFaqs("whatsapp-business-api"),
  finalCTA: {
    headline: "Hire Bangalore's Trusted WhatsApp Marketing Company For Best AI Automation",
    description: "Book a free WhatsApp marketing consultation and learn about automated messaging, chatbot workflows, and Business API solutions to enhance customer communication and engagement.",
    buttonText: "Start WhatsApp Marketing",
  },
};

const WhatsappBusinessApi = () => <ServicePageTemplate config={config} />;
export default WhatsappBusinessApi;
