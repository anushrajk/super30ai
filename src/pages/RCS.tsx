import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { Sparkles, MessageSquare, Image, ShoppingCart, Target, BarChart3, Zap, Shield, Users, Globe, Bot, Eye, Award, TrendingUp, Layers, Send } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "RCS Messaging Provider in Bangalore | Business Messaging",
    description: "Go beyond plain SMS. Our RCS messaging services in Bangalore deliver rich business messages with images and buttons that boost engagement. Let's Connect!",
    keywords: "RCS Messaging Provider In Bangalore, RCS messaging services in bangalore, RCS messaging solutions in bangalore, RCS messaging platform provider in bangalore, RCS messaging agency in bangalore",
    canonical: "https://www.thesuper30.ai/rcs-messaging-provider-bangalore",
    serviceType: "RCS Messaging Services",
    ogTitle: "Plain SMS Is Old News. RCS Messaging Is What Works Now.",
    ogDescription: "Rich messages with images and buttons that drive far better engagement than plain SMS. Let's connect!",
    twitterTitle: "Plain SMS Is Old News. RCS Messaging Is What Works Now.",
    twitterDescription: "Rich messages with images and buttons that drive far better engagement than plain SMS. Let's connect!",
  },
  hero: {
    badgeIcon: Sparkles,
    badgeText: "RCS Messaging Provider in Bangalore",
    headlineLine1: "RCS Messaging Platform and Communication",
    headlineLine2: "Solutions Provider in Bangalore",
    description: <>A trusted <span className="text-foreground font-semibold">RCS messaging platform provider in Bangalore</span> that provides interactive business messaging features with <span className="text-foreground font-semibold">rich media, action buttons, and verified business profiles</span> in the native messaging experience.</>,
    trustSignals: [
      { icon: Image, text: "Rich Media with Images, Videos, and Carousels" },
      { icon: Shield, text: "Verified Business Profile Branding" },
      { icon: Target, text: "Interactive Action Buttons and CTAs" },
      { icon: TrendingUp, text: "Higher Engagement Compared to SMS" },
    ],
    credentials: ["Early RCS Adopter Partner", "Verified Business Profiles", "Rich Interactive Messages"],
    formTitle: "Free RCS Messaging Demo in Bangalore",
    formDescription: "See how Bangalore's early-mover RCS messaging services provider can transform customer communication with rich, branded interactive messages.",
    formButtonText: "Enquire Now",
  },
  source: "rcs",
  sections: {
    problems: {
      title: "The RCS Messaging Challenges Most Businesses Face",
      description: "SMS communication is limited in engagement, brand visibility, and customer interaction, with the traditional challenge of creating richer messaging experiences.",
    },
    services: {
      title: "Enterprise RCS Messaging Services in Bangalore",
      description: "Grow customer engagement, boost conversions, and build brand visibility with interactive RCS messaging solutions in Bangalore.",
    },
    comparison: {
      title: "Traditional Agency vs. The Super 30",
      description: "Traditional SMS offers limited engagement opportunities, while RCS messaging opens up new opportunities for interactive brand experiences, leading to more compelling customer interaction and measurable business outcomes.",
    },
    benefits: {
      eyebrow: "Why Brands Choose Us?",
      title: "Why Businesses Prefer RCS Messaging Services in Bangalore With The Super 30",
      description: "We deliver enhanced customer interactions, build engagement, and achieve measurable business outcomes through advanced RCS messaging experiences designed for modern customer communication.",
    },
    industries: {
      eyebrow: "Industry Expertise",
      title: "RCS Messaging Strategies for Every Industry",
      description: "Industry specific RCS messaging agency in Bangalore designed for 18+ industries to create interactive customer experiences that align with your audience, business objectives, and communication needs.",
    },
    whoIsThisFor: {
      title: "Is RCS Messaging Right For Your Business?",
      description: "RCS messaging is perfect for businesses aiming to provide more interactive communication and engage their customers beyond SMS messaging, making their interactions more engaging.",
    },
  },
  problems: [
    { icon: Send, title: "Traditional SMS Feels Outdated", description: "Standard SMS lacks visual content, brand identity, and interactive customer experiences." },
    { icon: Eye, title: "Low Customer Engagement", description: "Text only messages often generate lower interaction and response rates." },
    { icon: Shield, title: "Limited Brand Recognition", description: "Customers may struggle to identify authentic business communications instantly." },
    { icon: ShoppingCart, title: "Restricted Product Visibility", description: "Traditional SMS cannot effectively showcase products through rich interactive experiences." },
  ],
  services: [
    { icon: Image, title: "Rich Media Messaging", description: "Share images, videos, GIFs, and audio content directly within the native messaging experience." },
    { icon: ShoppingCart, title: "Product Carousels", description: "Showcase products through interactive cards featuring images, pricing, and purchase actions." },
    { icon: Target, title: "Interactive Actions", description: "Enable quick responses, website visits, and customer actions through interactive messaging elements." },
    { icon: Shield, title: "Verified Brand Identity", description: "Display your business name, logo, and verified profile across every customer interaction." },
    { icon: Bot, title: "AI Chatbot Automation", description: "Deploy responsive AI chatbot experiences within RCS for automated customer interactions." },
    { icon: BarChart3, title: "Message Insights", description: "Monitor customer engagement with detailed message visibility and performance reporting." },
    { icon: Globe, title: "Location Sharing", description: "Share maps, directions, and store information directly within customer conversations." },
    { icon: Layers, title: "Campaign Management", description: "Create, schedule, and monitor RCS campaigns through a centralized management platform." },
  ],
  comparison: {
    traditional: [
      "Text only communication with limited visual appeal",
      "Zero Branding messages that reduce customer trust",
      "One way communication with minimal Interaction",
      "Limited visibility into customer message engagement",
      "Character restrictions limit message effectiveness",
      "Lower engagement and click-through rates performance",
    ],
    super30: [
      "Rich content including images, videos, and product showcases",
      "Branded business profiles with logos and brand identity",
      "Interactive experiences with action driven customer journeys",
      "Advanced engagement insights and customer interaction tracking",
      "Flexible messaging formats with enhanced content capabilities",
      "Higher engagement and click-through rates compared to SMS",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "3x Higher Engagement", description: "Interactive content and rich messaging formats generate significantly higher engagement than traditional SMS." },
    { icon: Shield, title: "Verified Brand Presence", description: "Display your business identity, logo, and verification badge to strengthen customer confidence." },
    { icon: Image, title: "Immersive Visual Experiences", description: "Present product visuals, promotional creatives, and video content directly within customer conversations." },
    { icon: Target, title: "Interactive CTA’s", description: "Enable customers to browse, connect, respond, or take action through interactive message experiences." },
    { icon: Eye, title: "Advanced Message Insights", description: "Track customer interactions and engagement behavior to improve campaign effectiveness." },
    { icon: Globe, title: "No App Required", description: "Deliver enhanced messaging experiences through the native messaging environment without extra installations." },
    { icon: BarChart3, title: "Performance Analytics", description: "Measure engagement, interactions, customer actions, and campaign outcomes through detailed reporting." },
    { icon: ShoppingCart, title: "Conversational Commerce", description: "Allow customers to explore products and complete actions directly within the messaging experience." },
    { icon: Zap, title: "Reliable Message Delivery", description: "Ensure continuous customer communication through intelligent delivery fallback and compatibility support." },
  ],
  process: [
    { icon: Shield, title: "Business Verification", description: "Register and verify your business for RCS with verified branding." },
    { icon: Sparkles, title: "Message Design", description: "Design rich, interactive message templates with media and buttons." },
    { icon: Layers, title: "Integration", description: "Connect RCS with your CRM, e-commerce, and marketing platforms." },
    { icon: Zap, title: "Launch Campaigns", description: "Go live with RCS campaigns and monitor engagement in real-time." },
  ],
  whoIsThisFor: {
    forYou: [
      "You use bulk SMS and want higher customer engagement",
      "You want to showcase products through rich visual messaging",
      "You need verified brand identity to build customer trust",
      "You want interactive customer experiences without developing an app",
      "You aim to stay ahead through modern communication innovation",
    ],
    notForYou: [
      "You only send occasional messages to a small customer base",
      "You are satisfied with the performance of traditional SMS campaigns",
      "You are not prepared to invest in rich media content creation",
      "You require 100% device coverage regardless of messaging capabilities",
    ],
  },
  faq: getFaqs("rcs"),
  finalCTA: {
    headline: "Ready to Elevate Customer Engagement With RCS Messaging Provider in Bangalore?",
    description: "Connect with customers, build trust, and foster real conversations through next generation mobile communication by launching interactive, branded messaging experiences.",
    buttonText: "Get Free RCS Demo",
  },
};

const RCS = () => <ServicePageTemplate config={config} />;
export default RCS;
