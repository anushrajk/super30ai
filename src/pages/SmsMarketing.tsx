import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import {
  MessageSquare, Send, Bot, Users, Zap, Shield, BarChart3, Target,
  Smartphone, Megaphone, Award, Clock, TrendingUp, Eye, Layers, Globe,
} from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Bulk SMS marketing company in Bangalore | Reach More Customers Fast",
    description: "Reach thousands instantly with bulk SMS services in Bangalore. We deliver promotional and transactional messages with high open rates. Let's Connect!",
    keywords: "bulk sms services in bangalore, bulk sms marketing company in bangalore, bulk sms service provider in bangalore, bulk sms marketing services in bangalore, bulk sms provider in bangalore",
    canonical: "https://www.thesuper30.ai/bulk-sms-services-bangalore",
    serviceType: "SMS & Conversational Marketing",
    ogTitle: "Reach Thousands of Customers With One Click. That Simple.",
    ogDescription: "Promotional & transactional bulk SMS that reach thousands with high open rates. Let's connect!",
    twitterTitle: "Reach Thousands of Customers With One Click. That Simple.",
    twitterDescription: "Promotional & transactional bulk SMS that reach thousands with high open rates. Let's connect!",
  },
  hero: {
    badgeIcon: MessageSquare,
    badgeText: "Bulk SMS Services in Bangalore",
    headlineLine1: "Bulk SMS and Messaging Marketing",
    headlineLine2: "Company in Bangalore",
    description: (
      <>
        Bangalore's trusted <span className="text-foreground font-semibold">bulk SMS service provider</span> to connect your brand with high engagement and faster conversions via bulk SMS, WhatsApp Business API, RCS, and chat automation.
      </>
    ),
    trustSignals: [
      { icon: Send, text: "DLT Compliant Bulk SMS" },
      { icon: Smartphone, text: "WhatsApp Business API Solutions" },
      { icon: Bot, text: "AI Chatbot Automation" },
      { icon: Shield, text: "Approved by TRAI and Meta" },
    ],
    credentials: ["10M+ Messages Delivered", "98% Delivery Rate", "200+ Brands Served"],
    formTitle: "Free Bulk SMS Marketing Strategy in Bangalore",
    formDescription: "Bangalore's top bulk SMS marketing company will map your customer journey and recommend the right SMS, WhatsApp and chatbot stack.",
    formButtonText: "Enquire Now",
  },
  source: "sms_marketing",
  sections: {
    problems: {
      title: "The Challenges Most Brands Face",
      description: "Lack of communication, connectivity, or slow response times can lead to decreased engagement, lower conversion rates, and hindered customer communication.",
    },
    services: {
      title: "Bulk SMS Services in Bangalore for Higher Customer Retention",
      description: "Integrated messaging solutions from a bulk sms provider in Bangalore designed to improve customer engagement, automate communication, and increase conversions across every platform.",
    },
    comparison: {
      eyebrow: "What Makes Us Different?",
      title: "Traditional Agencies vs The Super 30",
      description: "Advanced messaging automation for engagement, conversions, compliance, and measurable customer communication growth.",
    },
    benefits: {
      eyebrow: "Why Brands Choose Us?",
      title: "Bulk SMS Marketing Services in Bangalore for Higher Conversions",
      description: "Performance-driven messaging solutions from a bulk SMS service provider in Bangalore that help improve customer engagement, automate communication, and drive measurable business growth.",
    },
    industries: {
      eyebrow: "Industry Expertise",
      title: "SMS and Messaging Marketing Strategies For Every Industry",
      description: "Industry focused marketing strategies built across 18+ sectors with messaging tailored to your audience and market behaviour.",
    },
    whoIsThisFor: {
      title: "Is This The Right Fit For Your Brand?",
      description: "Bulk SMS marketing services in Bangalore designed for businesses that prioritize customer engagement, faster communication, and lasting SMS messaging for business growth.",
    },
  },
  problems: [
    { icon: Eye, title: "Low Message Engagement", description: "Your campaign open rates remain low as customers ignore repetitive promotional communication." },
    { icon: Clock, title: "Delayed Customer Replies", description: "Potential customers wait too long for responses and lose interest before your team connects." },
    { icon: Target, title: "Generic Bulk Campaigns", description: "Mass messaging without targeting or personalization leads to weak engagement and lower conversions." },
    { icon: Shield, title: "Messaging Compliance Delays", description: "DLT approvals, template checks, and TRAI regulations often delay campaign execution and delivery." },
  ],
  services: [
    { icon: Send, title: "Bulk SMS Campaigns", description: "DLT approved promotional and transactional SMS campaigns with reliable delivery and customer reach." },
    { icon: Smartphone, title: "WhatsApp Business API", description: "Official Meta approved WhatsApp campaigns, automation workflows, and customer communication management." },
    { icon: Bot, title: "AI Chatbot Solutions", description: "Automated 24/7 chat support for WhatsApp, websites, and Instagram that qualifies leads and schedules conversations." },
    { icon: Globe, title: "RCS Business Messaging", description: "Interactive branded messaging with visuals, carousels, and action buttons for richer customer engagement." },
    { icon: Users, title: "Customer Retention Campaigns", description: "Lifecycle messaging sequences across SMS, WhatsApp, and email are focused on retention and repeat engagement." },
    { icon: Layers, title: "Omnichannel Automation", description: "Automated customer journeys are triggered through CRM actions, abandoned carts, forms, and website activity." },
    { icon: Megaphone, title: "Promotional Message Campaigns", description: "Targeted promotional campaigns for launches, festive offers, and audience specific communication strategies." },
    { icon: BarChart3, title: "Performance Analytics Reports", description: "Live reporting dashboards tracking delivery, engagement, clicks, conversions, and campaign performance insights." },
  ],
  comparison: {
    traditional: [
      "Generic bulk SMS sent across the entire customer database",
      "Missing DLT compliance causing blocked campaigns and delivery issues",
      "Unverified WhatsApp accounts suspended within short campaign periods",
      "Basic chatbot systems with disconnected customer conversation journeys",
      "No clear tracking between campaign engagement and generated revenue",
      "Limited audience targeting, personalization, and automation workflows",
    ],
    super30: [
      "Audience specific messaging personalized by customer behaviour and intent",
      "Complete DLT, TRAI, and Meta approved campaign compliance management",
      "Official WhatsApp Business API access with verified brand eligibility",
      "AI chatbot automation designed for lead qualification and appointment booking",
      "Complete revenue attribution tracking from message engagement to conversion",
      "Behaviour based automation across SMS, WhatsApp, and RCS communication",
    ],
  },
  benefits: [
    { icon: Eye, title: "Higher Open Rates", description: "SMS and WhatsApp campaigns reach customers faster with significantly stronger engagement than email communication." },
    { icon: Zap, title: "Faster Customer Conversions", description: "Direct response messaging encourages quicker CTA, bookings, purchases, and customer interactions." },
    { icon: Bot, title: "24/7 Active Automation", description: "AI chatbot systems qualify leads, answer queries, and support customers throughout the day." },
    { icon: Target, title: "Advanced Personalization", description: "Audience segmentation based on behaviour, location, purchase history, and customer lifecycle activity." },
    { icon: Shield, title: "Complete Compliance Management", description: "DLT, TRAI, DPDP, and Meta policy requirements are managed through structured campaign processes." },
    { icon: TrendingUp, title: "Higher Customer Retention", description: "Lifecycle communication campaigns encourage repeat purchases, stronger engagement, and long-term retention." },
    { icon: Send, title: "Reliable Message Delivery", description: "Premium SMS and WhatsApp routing systems maintain high delivery performance across campaigns." },
    { icon: BarChart3, title: "Complete Campaign Tracking", description: "Monitor customer engagement, conversions, and revenue attribution through unified reporting dashboards." },
    { icon: Award, title: "Verified Official Partnerships", description: "Official Meta Business partnerships and DLT approved messaging infrastructure for trusted communication." },
  ],
  process: [
    { icon: Target, title: "Audit & Strategy", description: "Map customer journey and identify high-impact messaging touchpoints." },
    { icon: Shield, title: "Setup & Compliance", description: "DLT registration, template approvals and WhatsApp API onboarding." },
    { icon: Send, title: "Launch Campaigns", description: "Segmented broadcasts, automation flows and chatbot deployments." },
    { icon: BarChart3, title: "Optimise & Scale", description: "A/B test copy, timings and CTAs — double down on winners." },
  ],
  whoIsThisFor: {
    forYou: [
      "Your engagement rates are dropping, and you need faster customer responses",
      "You want automated lead qualification and customer support systems 24/7",
      "Your business depends on instant enquiries and quicker conversions",
      "You need a WhatsApp API setup without compliance complications",
      "You want lifecycle messaging focused on retention and repeat revenue",
    ],
    notForYou: [
      "You plan to send untargeted promotional bulk messages",
      "You are unwilling to follow DLT, TRAI, or Meta guidelines",
      "You expect instant ROI without a communication strategy",
      "You do not have a defined audience or campaign objective",
    ],
  },
  faq: getFaqs("sms-marketing"),
  finalCTA: {
    headline: "Transform Your Business With Bangalore's Leading Bulk SMS Marketing Company",
    description: "Get a free SMS marketing strategy and customer journey plan from Bangalore's trusted SMS, WhatsApp, and chatbot specialists.",
    buttonText: "Get Free SMS Strategy",
  },
};

const SmsMarketing = () => <ServicePageTemplate config={config} />;
export default SmsMarketing;
