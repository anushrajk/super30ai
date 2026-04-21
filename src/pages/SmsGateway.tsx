import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { Send, MessageSquare, Shield, Zap, Target, BarChart3, Clock, Globe, Users, Bell, Layers, Award, TrendingUp, Lock, Phone, Settings } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "SMS Gateway Service Provider in Bangalore | OTP & API SMS",
    description: "Send OTP and transactional messages instantly with our SMS gateway provider in Bangalore. Reliable SMS API integration for all businesses. Let's Connect!",
    keywords: "sms gateway service provider bangalore, otp sms api in bangalore, sms api provider bangalore, sms gateway services in bangalore, transactional sms gateway bangalore",
    canonical: "https://www.thesuper30.ai/sms-gateway-service-bangalore",
    serviceType: "SMS Gateway Services",
    ogTitle: "Instant OTP and SMS Delivery Your Business Can Rely On.",
    ogDescription: "Reliable SMS gateway and OTP API for fast, secure business messaging. Let's connect!",
    twitterTitle: "Instant OTP and SMS Delivery Your Business Can Rely On.",
    twitterDescription: "Reliable SMS gateway and OTP API for fast, secure business messaging. Let's connect!",
  },
  hero: {
    badgeIcon: Send,
    badgeText: "SMS Gateway Service Provider in Bangalore",
    headlineLine1: "SMS Gateway Service",
    headlineLine2: "Provider in Bangalore",
    description: <>Bangalore's leading <span className="text-foreground font-semibold">SMS gateway service provider</span> — enterprise-grade transactional SMS gateway and OTP SMS API with <span className="text-foreground font-semibold">99.9% delivery, DLT compliance, and instant API integration</span>.</>,
    trustSignals: [
      { icon: Shield, text: "99.9% Delivery Rate" },
      { icon: Lock, text: "DLT Compliant & TRAI Approved" },
      { icon: Zap, text: "Instant API Integration" },
      { icon: Globe, text: "Multi-Language Support" },
    ],
    credentials: ["10M+ SMS Delivered Monthly", "99.9% Delivery", "DLT Compliant"],
    formTitle: "Get SMS Gateway & OTP API Access",
    formDescription: "Tell us your volume requirements and we'll set up your gateway with priority routing.",
    formButtonText: "Get SMS Gateway Access",
  },
  source: "sms_gateway",
  problems: [
    { icon: Send, title: "Low Delivery Rates", description: "Your current provider has poor delivery rates — messages don't reach customers." },
    { icon: Shield, title: "DLT Compliance Issues", description: "Navigating TRAI regulations and DLT registration is complex and time-consuming." },
    { icon: Clock, title: "Slow Delivery", description: "OTPs and transactional messages arrive late, causing customer frustration." },
    { icon: Settings, title: "Complex Integration", description: "Your current SMS API is difficult to integrate with your applications." },
  ],
  services: [
    { icon: Send, title: "Bulk Promotional SMS", description: "Mass promotional campaigns to opted-in customers with high delivery." },
    { icon: Bell, title: "Transactional SMS", description: "Order confirmations, booking alerts, and payment notifications." },
    { icon: Lock, title: "OTP Services", description: "Instant OTP delivery for authentication and verification." },
    { icon: Layers, title: "SMS API", description: "RESTful API for easy integration with your applications." },
    { icon: Globe, title: "Multi-Language SMS", description: "Send messages in Hindi, Kannada, Tamil, and other regional languages." },
    { icon: Target, title: "Smart Routing", description: "Intelligent routing across operators for maximum delivery." },
    { icon: Shield, title: "DLT Registration", description: "Complete DLT compliance setup — entity, header, and template registration." },
    { icon: BarChart3, title: "Delivery Reports", description: "Real-time delivery tracking and detailed campaign analytics." },
  ],
  comparison: {
    traditional: [
      "Low delivery rates — messages lost in transit",
      "No DLT compliance support — risk of blocked messages",
      "Slow OTP delivery — 15-30 second delays",
      "Basic API with poor documentation",
      "No smart routing — single operator dependency",
      "Hidden charges and unclear pricing",
    ],
    super30: [
      "99.9% delivery rate with priority routing",
      "Complete DLT compliance — registration to template approval",
      "OTP delivery in under 5 seconds",
      "Clean, well-documented RESTful API",
      "Multi-operator smart routing for maximum reach",
      "Transparent per-SMS pricing with volume discounts",
    ],
  },
  benefits: [
    { icon: Shield, title: "99.9% Delivery", description: "Priority routing across multiple operators ensures maximum message delivery." },
    { icon: Zap, title: "Lightning Fast OTP", description: "OTP messages delivered in under 5 seconds for seamless authentication." },
    { icon: Lock, title: "Fully Compliant", description: "DLT registered with TRAI compliance for all message types." },
    { icon: Layers, title: "Easy Integration", description: "Simple RESTful API with SDKs for popular languages and frameworks." },
    { icon: Globe, title: "Pan-India Coverage", description: "Reliable delivery across all telecom operators and circles." },
    { icon: BarChart3, title: "Real-Time Analytics", description: "Track delivery, open rates, and campaign performance in real-time." },
    { icon: Target, title: "Smart Routing", description: "Automatic failover routing ensures messages reach even on congested networks." },
    { icon: Clock, title: "24/7 Uptime", description: "Enterprise-grade infrastructure with 99.99% uptime SLA." },
    { icon: Award, title: "Dedicated Support", description: "Priority support with dedicated account manager and technical assistance." },
  ],
  process: [
    { icon: Shield, title: "DLT Setup", description: "Register your entity, headers, and templates for TRAI compliance." },
    { icon: Layers, title: "API Integration", description: "Integrate our SMS API with your application using our simple SDK." },
    { icon: Settings, title: "Configure & Test", description: "Set up routing, templates, and test delivery across all operators." },
    { icon: Zap, title: "Go Live", description: "Launch with production traffic, monitor delivery, and optimize." },
  ],
  whoIsThisFor: {
    forYou: [
      "You need reliable OTP delivery for user authentication",
      "You send 10,000+ SMS monthly for marketing or transactional purposes",
      "You need DLT compliance and TRAI registration support",
      "You want a simple API to integrate SMS into your applications",
      "You're unhappy with your current SMS provider's delivery rates",
    ],
    notForYou: [
      "You send fewer than 100 SMS per month",
      "You want to send unsolicited spam messages",
      "You don't have DLT registration and aren't willing to get it",
      "You're looking for the cheapest option regardless of delivery quality",
    ],
  },
  faq: [
    { question: "What is DLT and is it mandatory?", answer: "DLT (Distributed Ledger Technology) registration is mandatory per TRAI regulations for all commercial SMS in India. We handle the entire registration process for you." },
    { question: "What's the delivery rate?", answer: "We maintain a 99.9% delivery rate across all operators through priority routing and multi-operator redundancy." },
    { question: "How fast are OTP deliveries?", answer: "OTPs are delivered in under 5 seconds on average. We use dedicated OTP routes for maximum speed." },
    { question: "How much does SMS cost?", answer: "Pricing is per SMS with volume-based discounts. Promotional SMS start from 10-15 paisa per SMS. Transactional and OTP pricing varies. Contact us for a custom quote." },
    { question: "Do you support Unicode/regional language SMS?", answer: "Yes. We support Unicode SMS for Hindi, Kannada, Tamil, Telugu, and all other Indian languages." },
    { question: "What programming languages does your API support?", answer: "Our RESTful API works with any language. We provide SDKs for PHP, Python, Node.js, Java, .NET, and Ruby." },
    { question: "Is there a minimum commitment?", answer: "No minimum contract. You can start with a prepaid balance and scale as needed." },
    { question: "Do you provide delivery reports?", answer: "Yes. Real-time delivery reports via API callbacks and a web dashboard with detailed analytics." },
  ],
  finalCTA: {
    headline: "Ready for SMS Delivery You Can Rely On?",
    description: "Get started with our enterprise-grade SMS gateway. No setup fees, no long-term contracts.",
    buttonText: "Get Started Now",
  },
};

const SmsGateway = () => <ServicePageTemplate config={config} />;
export default SmsGateway;
