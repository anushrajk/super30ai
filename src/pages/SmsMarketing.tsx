import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import {
  MessageSquare, Send, Bot, Users, Zap, Shield, BarChart3, Target,
  Smartphone, Megaphone, Award, Clock, TrendingUp, Eye, Layers, Globe,
} from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "SMS & Messaging Marketing Agency in Bangalore | WhatsApp, RCS, Chatbots",
    description:
      "Bangalore's top SMS, WhatsApp & messaging marketing agency. Bulk SMS, WhatsApp Business API, chatbots, RCS & engagement programs that drive 40%+ open rates.",
    keywords:
      "bulk sms marketing agency in bangalore, sms marketing services in bangalore, whatsapp marketing agency bangalore, whatsapp business api provider bangalore, chatbot development company bangalore, rcs messaging provider bangalore",
    canonical: "https://www.thesuper30.ai/bulk-sms-marketing-agency-bangalore",
    serviceType: "SMS & Conversational Marketing",
    ogTitle: "SMS, WhatsApp & RCS Marketing Agency in Bangalore",
    ogDescription:
      "Reach customers where they actually read — SMS, WhatsApp, RCS and chatbots that drive 40%+ open rates and instant conversions.",
    twitterTitle: "SMS, WhatsApp & RCS Marketing Agency in Bangalore",
    twitterDescription:
      "Bulk SMS, WhatsApp Business API, RCS and chatbot solutions that turn messages into measurable revenue.",
  },
  hero: {
    badgeIcon: MessageSquare,
    badgeText: "#1 SMS & Messaging Agency in Bangalore",
    headlineLine1: "SMS & Messaging Marketing",
    headlineLine2: "Agency in Bangalore",
    description: (
      <>
        Reach customers where they <span className="text-foreground font-semibold">actually read</span> — bulk SMS, WhatsApp Business API, RCS and chatbots with{" "}
        <span className="text-foreground font-semibold">40%+ open rates</span> and instant conversions.
      </>
    ),
    trustSignals: [
      { icon: Send, text: "DLT-Compliant Bulk SMS" },
      { icon: Smartphone, text: "WhatsApp Business API Partner" },
      { icon: Bot, text: "AI Chatbot Automation" },
      { icon: Shield, text: "TRAI & Meta Compliant" },
    ],
    credentials: ["10M+ Messages Delivered", "98% Delivery Rate", "200+ Brands Served"],
    formTitle: "Get Your Free Messaging Strategy",
    formDescription: "We'll map your customer journey and recommend the right messaging stack.",
    formButtonText: "Get Free Strategy",
  },
  source: "sms_marketing",
  problems: [
    { icon: Eye, title: "Emails Don't Get Opened", description: "Your email open rates are stuck at 15%. Customers ignore promotional inboxes." },
    { icon: Clock, title: "Slow Customer Response", description: "Leads wait hours for replies and drop off before your team gets to them." },
    { icon: Target, title: "Generic Mass Blasts", description: "You're sending the same SMS to everyone — no segmentation, no personalisation, no ROI." },
    { icon: Shield, title: "Compliance Headaches", description: "DLT registrations, template approvals and TRAI rules slow every campaign down." },
  ],
  services: [
    { icon: Send, title: "Bulk SMS Marketing", description: "DLT-compliant promotional and transactional SMS with 98%+ delivery rates." },
    { icon: Smartphone, title: "WhatsApp Business API", description: "Official Meta-approved WhatsApp campaigns, automation and customer support." },
    { icon: Bot, title: "AI Chatbots", description: "24/7 chatbots for WhatsApp, web and Instagram that qualify leads and book meetings." },
    { icon: Globe, title: "RCS Messaging", description: "Rich, branded messages with images, carousels and CTAs — the future of SMS." },
    { icon: Users, title: "Customer Engagement Programs", description: "Lifecycle drip sequences across SMS + WhatsApp + email for retention and LTV." },
    { icon: Layers, title: "Omnichannel Automation", description: "Trigger messages from CRM events, abandoned carts, form fills and website behaviour." },
    { icon: Megaphone, title: "Promotional Campaigns", description: "Festive offers, flash sales and product launches with audience segmentation." },
    { icon: BarChart3, title: "Analytics & Reporting", description: "Live dashboards for delivery, opens, clicks, conversions and revenue per message." },
  ],
  comparison: {
    traditional: [
      "Generic mass SMS blasts to everyone in the database",
      "No DLT compliance — messages get blocked or fined",
      "Personal WhatsApp accounts that get banned in weeks",
      "Static text-only chatbots with broken flows",
      "Zero attribution between messages and revenue",
      "No segmentation, no personalisation, no automation",
    ],
    super30: [
      "Segmented, personalised messaging by audience and intent",
      "Full DLT, TRAI and Meta compliance — zero risk",
      "Official WhatsApp Business API with green-tick eligibility",
      "AI-powered chatbots that qualify leads and book meetings",
      "End-to-end revenue attribution from message to sale",
      "Behaviour-triggered automation across SMS + WhatsApp + RCS",
    ],
  },
  benefits: [
    { icon: Eye, title: "40%+ Open Rates", description: "SMS and WhatsApp are read within 3 minutes — far above email." },
    { icon: Zap, title: "Instant Conversions", description: "One-tap CTAs drive immediate calls, bookings and purchases." },
    { icon: Bot, title: "24/7 Automation", description: "Chatbots qualify leads and answer FAQs while you sleep." },
    { icon: Target, title: "Hyper-Personalisation", description: "Segment by location, behaviour, purchase history and lifecycle stage." },
    { icon: Shield, title: "Fully Compliant", description: "DLT, TRAI, DPDP and Meta policy compliance handled end-to-end." },
    { icon: TrendingUp, title: "Higher Customer LTV", description: "Lifecycle messaging drives repeat purchases and retention." },
    { icon: Send, title: "98% Delivery", description: "Premium SMS and WhatsApp routes with the highest delivery rates." },
    { icon: BarChart3, title: "Full Attribution", description: "Track every message through to revenue in one dashboard." },
    { icon: Award, title: "Official Partnerships", description: "Meta Business Partner & DLT-registered SMS aggregator." },
  ],
  process: [
    { icon: Target, title: "Audit & Strategy", description: "Map customer journey and identify high-impact messaging touchpoints." },
    { icon: Shield, title: "Setup & Compliance", description: "DLT registration, template approvals and WhatsApp API onboarding." },
    { icon: Send, title: "Launch Campaigns", description: "Segmented broadcasts, automation flows and chatbot deployments." },
    { icon: BarChart3, title: "Optimise & Scale", description: "A/B test copy, timings and CTAs — double down on winners." },
  ],
  whoIsThisFor: {
    forYou: [
      "Your email open rates have plateaued and you need a higher-converting channel",
      "You want to automate lead qualification and customer support 24/7",
      "You run e-commerce, real estate, education, healthcare or D2C and need instant lead response",
      "You want WhatsApp Business API setup without the compliance headaches",
      "You want lifecycle messaging that drives repeat revenue, not one-off blasts",
    ],
    notForYou: [
      "You want to spam unsegmented contact lists with promotional offers",
      "You're not willing to comply with DLT, TRAI or Meta policies",
      "You expect overnight ROI without a proper customer journey strategy",
      "You don't have a clear product, offer or audience yet",
    ],
  },
  faq: [
    { question: "What does an SMS and messaging marketing agency in Bangalore do?", answer: "We design and run SMS, WhatsApp, RCS and chatbot campaigns end-to-end — strategy, DLT compliance, template approvals, automation, broadcasts and performance reporting." },
    { question: "Is bulk SMS marketing still effective in 2025?", answer: "Yes — when done right. SMS averages 98% open rates and is read within 3 minutes. Combined with WhatsApp and RCS, it's the highest-engagement channel in India." },
    { question: "Are you an official WhatsApp Business API provider?", answer: "Yes. We onboard clients on the official Meta-approved WhatsApp Business API with green-tick eligibility, template approvals and full automation." },
    { question: "How much does SMS and WhatsApp marketing cost in Bangalore?", answer: "Bulk SMS starts at ₹0.15–₹0.25 per message. WhatsApp Business API conversations start at ₹0.35–₹0.85 depending on category. Strategy and automation retainers start from ₹25,000/month." },
    { question: "Do you handle DLT registration and template approvals?", answer: "Yes. We handle the full DLT registration, sender ID approval and template submission process — typically completed within 5–7 business days." },
    { question: "Can you build chatbots for WhatsApp and websites?", answer: "Yes. We build AI-powered chatbots for WhatsApp, web, Instagram and Facebook that qualify leads, answer FAQs, book meetings and integrate with your CRM." },
    { question: "What is RCS messaging and should I invest in it?", answer: "RCS (Rich Communication Services) is the next-gen SMS — supports images, carousels, buttons and verified branding. It delivers 5–10x higher engagement than plain SMS for compatible devices." },
    { question: "Can you integrate messaging with our CRM and website?", answer: "Yes. We integrate with HubSpot, Salesforce, Zoho, Shopify, WooCommerce and custom CRMs — triggering messages from form fills, cart abandonment, purchases and lifecycle events." },
  ],
  finalCTA: {
    headline: "Ready to Reach Customers Where They Actually Read?",
    description: "Get a free messaging strategy and a customer journey map from Bangalore's top SMS, WhatsApp and chatbot team.",
    buttonText: "Get Free Strategy",
  },
};

const SmsMarketing = () => <ServicePageTemplate config={config} />;
export default SmsMarketing;
