import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { Palette, PenTool, Layers, Eye, Zap, Heart, Shield, Award, Target, Users, Sparkles, FileText, RefreshCw, Globe, Clock } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Logo Design Company in Bangalore | Build Your Brand Identity",
    description: "We design logos that go beyond visuals. Our Bangalore logo design agency uses strategy, frameworks and brand insights to create meaningful identities.",
    keywords: "logo design company bangalore, logo design agency in bangalore, logo design services bangalore, professional logo design company in bangalore, custom logo design company in bangalore",
    canonical: "https://super30ai.lovable.app/logo-design-company-bangalore",
    serviceType: "Logo Design Services",
    ogTitle: "Your Logo Says Everything About Your Brand. Make It Count.",
    ogDescription: "Unique logos that capture your brand identity and make a strong first impression. Let's create!",
    twitterTitle: "Your Logo Says Everything About Your Brand. Make It Count.",
    twitterDescription: "Unique logos that capture your brand identity and make a strong first impression. Let's create!",
  },
  hero: {
    badgeIcon: PenTool,
    badgeText: "Logo Design Agency in Bangalore",
    headlineLine1: "Logo Design Company in Bangalore",
    headlineLine2: "Build Your Brand Identity",
    description: <>Our <span className="text-foreground font-semibold">professional logo design company in Bangalore</span> crafts custom, hand-drawn logos using strategy, frameworks and brand insights — built to last decades. Not templates. Not AI-generated.</>,
    trustSignals: [
      { icon: Award, text: "200+ Logos Designed" },
      { icon: PenTool, text: "Hand-Crafted, Not Templates" },
      { icon: Layers, text: "Complete Brand File Package" },
      { icon: RefreshCw, text: "Unlimited Revisions" },
    ],
    credentials: ["200+ Logos Designed", "Hand-Crafted Originals", "Full File Package"],
    formTitle: "Free Logo Design Consultation",
    formDescription: "Tell us about your brand and our custom logo design company in Bangalore will share initial concepts and direction ideas.",
    formButtonText: "Get Free Logo Consultation",
  },
  source: "logo_design",
  problems: [
    { icon: Eye, title: "Your Logo Looks Dated", description: "Your logo was designed years ago and no longer reflects who you are or what you offer." },
    { icon: Globe, title: "Looks Bad on Digital Platforms", description: "Your logo was designed for print and looks terrible on social media, websites, and apps." },
    { icon: Heart, title: "Not Memorable", description: "People interact with your brand but can't recall your logo. It doesn't stand out." },
    { icon: Palette, title: "DIY or Template Logo", description: "You used Canva or a logo maker and now your brand looks like a hundred other businesses." },
  ],
  services: [
    { icon: PenTool, title: "Custom Logo Design", description: "Unique, hand-crafted logos designed from scratch based on your brand strategy." },
    { icon: Layers, title: "Logo Variations", description: "Primary, secondary, icon-only, and stacked versions for every use case." },
    { icon: Palette, title: "Color Palette", description: "Strategic color selection with HEX, RGB, CMYK, and Pantone codes." },
    { icon: FileText, title: "Brand Guidelines", description: "Usage rules for spacing, sizing, color, and background applications." },
    { icon: RefreshCw, title: "Logo Redesign", description: "Modernize your existing logo while preserving brand recognition." },
    { icon: Globe, title: "Digital-Ready Files", description: "All file formats — SVG, PNG, JPG, PDF, AI, EPS — for web, print, and merch." },
    { icon: Eye, title: "Mockup Presentations", description: "See your logo on business cards, websites, signage, and products." },
    { icon: Sparkles, title: "Animated Logo", description: "Motion logo for websites, social media intros, and video content." },
  ],
  comparison: {
    traditional: [
      "Generic templates with your company name slapped on",
      "One concept, take it or leave it",
      "No brand strategy behind the design",
      "Limited file formats — often just a PNG",
      "No usage guidelines or brand documentation",
      "Revisions cost extra every time",
    ],
    super30: [
      "100% custom designs — no templates, ever",
      "3+ unique concepts to choose from",
      "Deep brand discovery before any design begins",
      "Complete file package in every format",
      "Professional brand guidelines included",
      "Unlimited revisions until you're thrilled",
    ],
  },
  benefits: [
    { icon: Heart, title: "Instant Recognition", description: "A distinctive logo that people remember after just one interaction." },
    { icon: Shield, title: "Built to Last", description: "Timeless design that won't need a refresh every 2 years." },
    { icon: Layers, title: "Works Everywhere", description: "From business cards to billboards, favicons to social media — one logo, every size." },
    { icon: Palette, title: "Strategic Colors", description: "Colors chosen for psychological impact and industry relevance." },
    { icon: Target, title: "Brand Alignment", description: "Your logo tells your brand story at a glance." },
    { icon: Zap, title: "Fast Turnaround", description: "First concepts delivered within 5-7 business days." },
    { icon: Users, title: "Collaborative Process", description: "You're involved at every step — no surprises at the end." },
    { icon: Award, title: "Premium Quality", description: "Designed by senior designers with 8+ years of brand experience." },
    { icon: FileText, title: "Complete Package", description: "Logo files + brand guidelines + mockups — everything you need." },
  ],
  process: [
    { icon: Users, title: "Brand Discovery", description: "Deep-dive into your brand values, audience, competitors, and personality." },
    { icon: PenTool, title: "Concept Development", description: "3+ unique concepts with rationale — you pick the direction." },
    { icon: RefreshCw, title: "Refine & Perfect", description: "Unlimited revisions on your chosen concept until it's perfect." },
    { icon: Layers, title: "Deliver & Launch", description: "Complete file package, brand guidelines, and mockups delivered." },
  ],
  whoIsThisFor: {
    forYou: [
      "You're launching a new brand and need a professional identity",
      "Your current logo looks outdated or unprofessional",
      "You want a logo that works across digital and print",
      "You value quality design and are willing to invest in it",
      "You want a complete brand identity, not just a logo file",
    ],
    notForYou: [
      "You need a logo in 24 hours for ₹500",
      "You want to pick from pre-made templates",
      "You're not sure what your brand stands for yet",
      "You think all logos look the same anyway",
    ],
  },
  faq: getFaqs("logo-design"),
  finalCTA: {
    headline: "Hire the Best Logo Design Agency in Bangalore",
    description: "Get a free consultation from our logo design services Bangalore team and see how we bring your brand vision to life.",
    buttonText: "Get Free Logo Consultation",
  },
};

const LogoDesign = () => <ServicePageTemplate config={config} />;
export default LogoDesign;
