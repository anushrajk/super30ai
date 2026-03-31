import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { Sparkles, MessageSquare, Image, ShoppingCart, Target, BarChart3, Zap, Shield, Users, Globe, Bot, Eye, Award, TrendingUp, Layers, Send } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "RCS Messaging Services in Bangalore | Rich Communication | The Super 30",
    description: "Rich Communication Services (RCS) in Bangalore. Send rich, interactive messages with images, carousels, buttons & verified branding. The future of business messaging.",
    keywords: "RCS messaging, rich communication services, RCS business messaging, interactive SMS, rich messaging india, RCS services bangalore",
    canonical: "https://www.thesuper30.ai/rcs",
    serviceType: "Rich Communication Services (RCS)",
  },
  hero: {
    badgeIcon: Sparkles,
    badgeText: "RCS Messaging Partner",
    headlineLine1: "The Future of Business",
    headlineLine2: "Messaging is Here",
    description: <>Send rich, interactive messages with <span className="text-foreground font-semibold">images, carousels, buttons, and verified branding</span> — directly in your customer's native messaging app. No app download needed.</>,
    trustSignals: [
      { icon: Image, text: "Rich Media — Images, Videos, Carousels" },
      { icon: Shield, text: "Verified Business Branding" },
      { icon: Target, text: "Interactive Buttons & CTAs" },
      { icon: TrendingUp, text: "3x Higher Engagement Than SMS" },
    ],
    credentials: ["Early RCS Adopter Partner", "Verified Business Profiles", "Rich Interactive Messages"],
    formTitle: "Get Your Free RCS Demo",
    formDescription: "See how RCS can transform your customer communication with rich, interactive messages.",
    formButtonText: "Get Free Demo",
  },
  source: "rcs",
  problems: [
    { icon: Send, title: "Plain Text SMS Feels Outdated", description: "Your SMS campaigns look like 2010. No images, no branding, no interactivity." },
    { icon: Eye, title: "Low SMS Engagement", description: "Customers ignore plain text messages. There's nothing to click, browse, or interact with." },
    { icon: Shield, title: "No Brand Verification", description: "Customers can't tell if your SMS is legitimate or spam. Trust is low." },
    { icon: ShoppingCart, title: "Can't Showcase Products", description: "You can't send product images, carousels, or interactive content via regular SMS." },
  ],
  services: [
    { icon: Image, title: "Rich Media Messages", description: "Send images, videos, GIFs, and audio directly in the native messaging app." },
    { icon: ShoppingCart, title: "Product Carousels", description: "Swipeable product cards with images, prices, and buy buttons." },
    { icon: Target, title: "Interactive Buttons", description: "Quick reply buttons, URL buttons, and call-to-action buttons." },
    { icon: Shield, title: "Verified Branding", description: "Your business name, logo, and verified badge on every message." },
    { icon: Bot, title: "Chatbot Integration", description: "AI chatbots within RCS for automated, interactive conversations." },
    { icon: BarChart3, title: "Read Receipts", description: "Know exactly when customers read your messages with delivery analytics." },
    { icon: Globe, title: "Location Sharing", description: "Send maps, directions, and store locator within messages." },
    { icon: Layers, title: "Campaign Management", description: "Design, schedule, and analyze RCS campaigns from one dashboard." },
  ],
  comparison: {
    traditional: [
      "Plain text only — no images or media",
      "No branding — messages look like spam",
      "No interactivity — just read and forget",
      "No read receipts — you don't know if it was seen",
      "Character limits restrict your message",
      "Low engagement and click-through rates",
    ],
    super30: [
      "Rich media — images, videos, carousels in every message",
      "Verified business profile with logo and brand colors",
      "Interactive buttons — shop, call, visit, reply in one tap",
      "Read receipts and detailed engagement analytics",
      "No character limits — rich content with full context",
      "3x higher engagement and click-through vs SMS",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "3x Higher Engagement", description: "Rich media and interactive elements drive 3x more engagement than plain SMS." },
    { icon: Shield, title: "Verified & Trusted", description: "Your business name, logo, and verified badge build instant trust." },
    { icon: Image, title: "Visual Storytelling", description: "Send product images, promo graphics, and videos directly in messages." },
    { icon: Target, title: "Interactive CTAs", description: "Buttons let customers shop, call, visit, or reply in a single tap." },
    { icon: Eye, title: "Read Receipts", description: "Know exactly who opened your message and when — optimize accordingly." },
    { icon: Globe, title: "No App Required", description: "Works in the native messaging app — no downloads or installations needed." },
    { icon: BarChart3, title: "Rich Analytics", description: "Track opens, clicks, button taps, and conversions in real-time." },
    { icon: ShoppingCart, title: "In-Message Commerce", description: "Customers can browse products and shop without leaving the conversation." },
    { icon: Zap, title: "Seamless Upgrade", description: "Falls back to SMS automatically if the recipient doesn't support RCS." },
  ],
  process: [
    { icon: Shield, title: "Business Verification", description: "Register and verify your business for RCS with verified branding." },
    { icon: Sparkles, title: "Message Design", description: "Design rich, interactive message templates with media and buttons." },
    { icon: Layers, title: "Integration", description: "Connect RCS with your CRM, e-commerce, and marketing platforms." },
    { icon: Zap, title: "Launch Campaigns", description: "Go live with RCS campaigns and monitor engagement in real-time." },
  ],
  whoIsThisFor: {
    forYou: [
      "You send bulk SMS and want higher engagement rates",
      "You want to showcase products visually in messages",
      "You need verified branding to build trust with customers",
      "You want interactive messaging without building an app",
      "You're an early adopter who wants to lead in messaging innovation",
    ],
    notForYou: [
      "You only send a few messages per month",
      "You're satisfied with plain text SMS engagement rates",
      "You're not ready to invest in rich media content creation",
      "You need 100% reach — RCS is still growing in coverage",
    ],
  },
  faq: [
    { question: "What is RCS messaging?", answer: "RCS (Rich Communication Services) is the next evolution of SMS. It lets businesses send messages with images, videos, carousels, interactive buttons, and verified branding — all within the native messaging app." },
    { question: "Do customers need to download an app?", answer: "No. RCS works in the native messaging app on Android devices. No app download or registration required." },
    { question: "What happens if a phone doesn't support RCS?", answer: "Our platform automatically falls back to SMS for devices that don't support RCS, ensuring your message always reaches the customer." },
    { question: "Is RCS available in India?", answer: "Yes. RCS is supported on most Android devices in India through Google Messages. Coverage is growing rapidly with telecom operator adoption." },
    { question: "How much does RCS cost compared to SMS?", answer: "RCS typically costs 2-3x per message compared to SMS, but delivers 3-5x higher engagement rates — making the ROI significantly better." },
    { question: "Can I send RCS to iPhone users?", answer: "Apple has started rolling out RCS support. In the interim, our platform automatically falls back to SMS for non-supported devices." },
    { question: "What kind of content can I send?", answer: "Images, videos, GIFs, product carousels, location maps, interactive buttons, suggested replies, and rich text — all within the message." },
    { question: "How do I get verified branding?", answer: "We handle the business verification process with Google/carriers to get your business name, logo, and verified badge on every RCS message." },
  ],
  finalCTA: {
    headline: "Ready to Upgrade From SMS to Rich Messaging?",
    description: "Get a free RCS demo and see how interactive messaging can transform your customer engagement.",
    buttonText: "Get Free RCS Demo",
  },
};

const RCS = () => <ServicePageTemplate config={config} />;
export default RCS;
