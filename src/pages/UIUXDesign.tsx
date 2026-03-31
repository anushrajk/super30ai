import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { MousePointerClick, Layout, Smartphone, Users, Zap, Eye, Layers, Figma, Target, BarChart3, Shield, Bot, Palette, Heart, RefreshCw, Clock } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "UI/UX Design Agency in Bangalore | The Super 30",
    description: "Expert UI/UX design services in Bangalore. User-centered design that increases conversions, reduces bounce rates & delights users. From wireframes to pixel-perfect interfaces.",
    keywords: "ui ux design agency bangalore, user experience design, user interface design, ux research, wireframing, prototyping, figma design",
    canonical: "https://www.thesuper30.ai/ui-ux-design",
    serviceType: "UI/UX Design Services",
  },
  hero: {
    badgeIcon: MousePointerClick,
    badgeText: "UI/UX Design Agency",
    headlineLine1: "Design Experiences",
    headlineLine2: "That Users Love & Convert",
    description: <>We design intuitive, beautiful interfaces that <span className="text-foreground font-semibold">reduce friction and increase conversions</span> — backed by user research and data, not guesswork.</>,
    trustSignals: [
      { icon: Users, text: "User-Centered Design Process" },
      { icon: BarChart3, text: "Avg. 40% Conversion Lift" },
      { icon: Figma, text: "Pixel-Perfect Figma Deliverables" },
      { icon: Smartphone, text: "Mobile-First Responsive" },
    ],
    credentials: ["100+ Interfaces Designed", "Figma & Prototyping", "User Research Driven"],
    formTitle: "Get a Free UX Consultation",
    formDescription: "Tell us about your product and we'll identify quick UX wins to boost conversions.",
    formButtonText: "Get Free Consultation",
  },
  source: "ui_ux_design",
  problems: [
    { icon: Eye, title: "High Bounce Rates", description: "Users land on your site and leave within seconds because the experience is confusing or slow." },
    { icon: MousePointerClick, title: "Low Conversion Rates", description: "People visit but don't sign up, buy, or enquire. Your design isn't guiding them to action." },
    { icon: Smartphone, title: "Terrible Mobile Experience", description: "Over 70% of traffic is mobile, but your interface looks broken on smaller screens." },
    { icon: RefreshCw, title: "Constant Redesigns", description: "You keep redesigning because nothing 'feels right' — there's no user research guiding decisions." },
  ],
  services: [
    { icon: Users, title: "UX Research", description: "User interviews, surveys, and analytics to understand behavior and pain points." },
    { icon: Layout, title: "Wireframing", description: "Low-fidelity wireframes to map out user flows and information architecture." },
    { icon: Figma, title: "UI Design", description: "Pixel-perfect visual designs in Figma with design systems and component libraries." },
    { icon: Layers, title: "Prototyping", description: "Interactive prototypes for user testing before a single line of code is written." },
    { icon: Smartphone, title: "Responsive Design", description: "Interfaces that look and work beautifully on every device and screen size." },
    { icon: Palette, title: "Design Systems", description: "Scalable component libraries and style guides for consistent design at scale." },
    { icon: Target, title: "Conversion Optimization", description: "CTA placement, visual hierarchy, and micro-interactions that drive action." },
    { icon: Bot, title: "AI Product Design", description: "Designing intuitive interfaces for AI-powered products and chatbots." },
  ],
  comparison: {
    traditional: [
      "Design based on personal taste, not user data",
      "Static mockups with no interactive prototyping",
      "No user testing before development",
      "One-size-fits-all templates",
      "Handoff is a mess — developers interpret designs differently",
      "Design is an afterthought, not a priority",
    ],
    super30: [
      "Every design decision backed by user research and data",
      "Interactive Figma prototypes for realistic testing",
      "User testing at every stage to validate decisions",
      "Custom designs tailored to your users and brand",
      "Developer-ready handoff with specs, assets, and documentation",
      "Design is the foundation — we start with UX, build from there",
    ],
  },
  benefits: [
    { icon: BarChart3, title: "Higher Conversions", description: "Strategic UX design increases signups, purchases, and enquiries by 40% on average." },
    { icon: Heart, title: "Users Love It", description: "Intuitive navigation and delightful micro-interactions create memorable experiences." },
    { icon: Clock, title: "Faster Development", description: "Clear wireframes and design systems mean developers build faster with fewer revisions." },
    { icon: Shield, title: "Reduced Support Costs", description: "When users can find what they need easily, support tickets drop significantly." },
    { icon: Zap, title: "Faster Time to Market", description: "Our proven process gets you from concept to pixel-perfect designs in weeks, not months." },
    { icon: Layers, title: "Scalable Design System", description: "Component libraries that grow with your product — no more inconsistent designs." },
    { icon: Users, title: "Research-Backed", description: "Every decision is validated with real user data, not opinions." },
    { icon: Eye, title: "Lower Bounce Rates", description: "Clear visual hierarchy and intuitive layouts keep users engaged longer." },
    { icon: Target, title: "Business Impact", description: "Design that directly contributes to revenue, retention, and growth metrics." },
  ],
  process: [
    { icon: Users, title: "Discover & Research", description: "Understand your users, business goals, and competitive landscape through research." },
    { icon: Layout, title: "Wireframe & Prototype", description: "Map user flows, create wireframes, and build interactive prototypes." },
    { icon: Palette, title: "Visual Design", description: "Pixel-perfect UI design with brand-aligned aesthetics and design systems." },
    { icon: Zap, title: "Test & Handoff", description: "User testing, iteration, and developer-ready handoff with complete documentation." },
  ],
  whoIsThisFor: {
    forYou: [
      "You're building a new product and want to get the UX right from day one",
      "Your current website or app has high bounce rates and low conversions",
      "You want design decisions backed by user research, not guesswork",
      "You need a scalable design system for your growing product",
      "You're ready to invest in design that drives business results",
    ],
    notForYou: [
      "You just need a quick template-based website",
      "You want designs done in 2 days with no research",
      "You're not open to user feedback changing the design direction",
      "You think design is just 'making things pretty'",
    ],
  },
  faq: [
    { question: "What tools do you use for UI/UX design?", answer: "We primarily use Figma for design, prototyping, and handoff. For research, we use tools like Hotjar, Google Analytics, and user interview platforms." },
    { question: "Do you do user research or just design?", answer: "Both. We always start with understanding your users — through interviews, surveys, analytics, and competitive analysis. Design without research is just guessing." },
    { question: "How long does a typical UI/UX project take?", answer: "A complete redesign typically takes 4-8 weeks depending on scope. Smaller projects like single-page designs or audits can be completed in 1-2 weeks." },
    { question: "Do you also develop the designs?", answer: "We focus on design. For development, we work closely with your dev team or our in-house developers to ensure pixel-perfect implementation." },
    { question: "What deliverables do I get?", answer: "You receive Figma files with design systems, interactive prototypes, user flow maps, developer handoff documentation, and all source assets." },
    { question: "Can you redesign an existing product?", answer: "Absolutely. We start with a UX audit of your current product, identify pain points, and then redesign with data-driven improvements." },
    { question: "How do you handle feedback and revisions?", answer: "We build in revision rounds at each stage. You'll review wireframes, prototypes, and final designs — with unlimited minor revisions to get it perfect." },
    { question: "Do you design for both web and mobile?", answer: "Yes. We design responsive interfaces that work seamlessly across desktop, tablet, and mobile — with mobile-first prioritization." },
  ],
  finalCTA: {
    headline: "Ready to Design Experiences Users Love?",
    description: "Get a free UX consultation and discover how better design can transform your business results.",
    buttonText: "Get Free Consultation",
  },
};

const UIUXDesign = () => <ServicePageTemplate config={config} />;
export default UIUXDesign;
