import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { Send, MessageSquare, Shield, Zap, Target, BarChart3, Clock, Globe, Users, Bell, Layers, Award, TrendingUp, Lock, Phone, Settings } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "SMS Gateway Service Provider in Bangalore | OTP & API SMS",
    description: "Send OTP and transactional messages instantly with our SMS gateway provider in Bangalore. Reliable SMS API integration for all businesses. Let's Connect!",
    keywords: "sms gateway service provider in bangalore, otp sms api in bangalore, sms api provider in bangalore, sms gateway services in bangalore, transactional sms gateway in bangalore",
    canonical: "https://www.thesuper30.ai/sms-gateway-service-bangalore",
    serviceType: "SMS Gateway Services",
    ogTitle: "Instant OTP and SMS Delivery Your Business Can Rely On.",
    ogDescription: "Reliable SMS gateway and OTP API for fast, secure business messaging. Let's connect!",
    twitterTitle: "Instant OTP and SMS Delivery Your Business Can Rely On.",
    twitterDescription: "Reliable SMS gateway and OTP API for fast, secure business messaging. Let's connect!",
  },
  hero: {
    badgeIcon: Send,
    badgeText: "SMS Gateway Services in Bangalore",
    headlineLine1: "SMS Gateway Service Provider",
    headlineLine2: "for Businesses in Bangalore",
    description: <>Bangalore's trusted <span className="text-foreground font-semibold">SMS gateway service provider</span> offering business SMS solutions and OTP SMS API with <span className="text-foreground font-semibold">99.9% delivery, DLT compliance, and seamless API integration</span>.</>,
    trustSignals: [
      { icon: Shield, text: "99.9% Message Delivery Rate" },
      { icon: Lock, text: "DLT Compliant & TRAI Approved" },
      { icon: Zap, text: "Seamless API Integration" },
      { icon: Globe, text: "Multilingual SMS Language Support" },
    ],
    credentials: ["10M+ SMS Delivered Monthly", "99.9% Delivery", "DLT Compliant"],
    formTitle: "SMS Gateway & OTP API Access in Bangalore",
    formDescription: "Tell us your volume requirements — Bangalore's leading SMS gateway service provider will set up your gateway with priority routing and DLT compliance.",
    formButtonText: "Enquire Now",
  },
  source: "sms_gateway",
  sections: {
    problems: {
      title: "The SMS Gateway Challenges Most Businesses Face",
      description: "Reliable message delivery, compliance requirements, and API integration challenges often affect communication performance and customer experience.",
    },
    services: {
      title: "Complete SMS Gateway Services in Bangalore for Business Communication",
      description: "High-quality SMS infrastructure to enhance the delivery of messages, communication efficiency, customer engagement, and smooth business SMS operations.",
    },
    comparison: {
      eyebrow: "What Makes Us Different?",
      title: "Traditional Agency vs. The Super 30",
      description: "Not all SMS gateway providers deliver the same performance. Compare delivery reliability, compliance support, API capabilities, and scalability before choosing an SMS API Provider in Bangalore.",
    },
    benefits: {
      eyebrow: "Why Brands Choose Us?",
      title: "Why Businesses Choose Our SMS Gateway Services in Bangalore",
      description: "We have developed our OTP SMS API in Bangalore for reliability, speed and scalability. We have designed it to help businesses deliver messages faster, improve communication performance and ensure consistent customer engagement.",
    },
    industries: {
      eyebrow: "Industry Expertise",
      title: "SMS Gateway Strategies for Every Industry",
      description: "Reliable communication at scale and trusted across banks, healthcare, ecommerce, education, logistics, and enterprise businesses, purpose-driven SMS gateway solutions.",
    },
    whoIsThisFor: {
      title: "Is our Transactional SMS Gateway in Bangalore the Right Choice for Your Business?",
      description: "Ideal for organizations that prioritize secure communication, high message volume, and reliability in delivering messages to engage customers and provide efficient operations.",
    },
  },
  problems: [
    { icon: Send, title: "Low Message Delivery Rates", description: "Weak delivery performance prevents important messages from reaching customers on time." },
    { icon: Shield, title: "DLT Compliance Issues", description: "Managing TRAI regulations and DLT approvals can delay communication processes." },
    { icon: Clock, title: "Delayed Message Delivery", description: "OTP and transactional messages arrive late, impacting customer experience and trust." },
    { icon: Settings, title: "Complicated API Integration", description: "Legacy SMS APIs often require extensive effort to connect with business systems." },
  ],
  services: [
    { icon: Send, title: "Bulk Promotional SMS", description: "Targeted promotional campaigns that reach opted-in customers with reliable message delivery." },
    { icon: Bell, title: "Transactional SMS", description: "Order confirmations, booking updates, and payment notifications delivered instantly." },
    { icon: Lock, title: "OTP SMS Services", description: "Quick OTP delivery for safe authentication and customer verification." },
    { icon: Layers, title: "SMS API Integration", description: "Developer friendly SMS API for seamless application connectivity." },
    { icon: Globe, title: "Regional Language SMS", description: "Send messages in Hindi, Kannada, Tamil, and other regional languages." },
    { icon: Target, title: "Smart Message Routing", description: "Optimized routing across operators for consistent message delivery." },
    { icon: Shield, title: "DLT Registration Support", description: "Complete DLT compliance assistance covering entity, header, and template registration." },
    { icon: BarChart3, title: "Campaign Delivery Reports", description: "Comprehensive reporting dashboards with delivery insights and analytics on campaign performance metrics." },
  ],
  comparison: {
    traditional: [
      "Inconsistent delivery rates affecting message reach",
      "Limited DLT compliance support for businesses",
      "Delayed OTP delivery during critical transactions",
      "Basic SMS API with limited developer resources",
      "Single operator routing with restricted coverage",
      "Unclear pricing and unexpected service costs",
    ],
    super30: [
      "99.9% delivery rate supported by priority routing",
      "End to end DLT compliance support and guidance",
      "Rapid OTP delivery for secure customer verification",
      "Developer friendly REST API with clear documentation",
      "Multi operator routing for broader message coverage",
      "Transparent SMS pricing with scalable business plans",
    ],
  },
  benefits: [
    { icon: Shield, title: "99.9% Message Delivery", description: "It has advanced routing infrastructure to help achieve maximum messaging efficiency throughout networks." },
    { icon: Zap, title: "Instant OTP Delivery", description: "OTP messages are delivered instantly for secure user verification." },
    { icon: Lock, title: "TRAI Compliant Platform", description: "Complete DLT compliance support for seamless business messaging." },
    { icon: Layers, title: "Seamless API Integration", description: "Developer friendly APIs connect effortlessly with business applications." },
    { icon: Globe, title: "Pan India Message Coverage", description: "Widely available delivery across telecom networks throughout India." },
    { icon: BarChart3, title: "Real-Time Analytics Dashboard", description: "Monitor delivery performance, engagement metrics, and campaign insights." },
    { icon: Target, title: "Smart Message Routing", description: "Optimized routing improves delivery efficiency across operators." },
    { icon: Clock, title: "24/7 Platform Availability", description: "Enterprise infrastructure ensures uninterrupted messaging operations." },
    { icon: Award, title: "Dedicated Technical Support", description: "Expert professional assistance and account support whenever your business needs it." },
  ],
  process: [
    { icon: Shield, title: "DLT Setup", description: "Register your entity, headers, and templates for TRAI compliance." },
    { icon: Layers, title: "API Integration", description: "Integrate our SMS API with your application using our simple SDK." },
    { icon: Settings, title: "Configure & Test", description: "Set up routing, templates, and test delivery across all operators." },
    { icon: Zap, title: "Go Live", description: "Launch with production traffic, monitor delivery, and optimize." },
  ],
  whoIsThisFor: {
    forYou: [
      "You require reliable OTP delivery for customer verification",
      "You send high volume SMS campaigns every month",
      "You need DLT compliance and TRAI support",
      "You want seamless SMS API integration for applications",
      "You need better SMS provider delivery and performance",
    ],
    notForYou: [
      "You send very few SMS messages each month",
      "You plan to send unsolicited promotional messages",
      "You are unwilling to complete DLT registration requirements",
      "You prioritize low cost over delivery reliability",
    ],
  },
  faq: getFaqs("sms-gateway"),
  finalCTA: {
    headline: "Partner with Bangalore's Trusted SMS Gateway Service Provider",
    description: "Launch transactional SMS, OTP verification, and bulk messaging through a scalable platform designed for speed, compliance, and dependable delivery.",
    buttonText: "Get SMS Gateway Access",
  },
};

const SmsGateway = () => <ServicePageTemplate config={config} />;
export default SmsGateway;
