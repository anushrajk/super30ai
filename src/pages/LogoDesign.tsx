import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { Palette, PenTool, Layers, Eye, Zap, Heart, Shield, Award, Target, Users, Sparkles, FileText, RefreshCw, Globe, Clock } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Logo Design Company in Bangalore | Build Your Brand Identity",
    description: "We design logos that go beyond visuals. Our Bangalore logo design agency uses strategy, frameworks and brand insights to create meaningful identities.",
    keywords: "logo design company bangalore, logo design agency in bangalore, logo design services bangalore, professional logo design company in bangalore, custom logo design company in bangalore",
    canonical: "https://www.thesuper30.ai/logo-design-company-bangalore",
    serviceType: "Logo Design Services",
  },
  hero: {
    badgeIcon: PenTool,
    badgeText: "Logo Design Experts",
    headlineLine1: "A Logo That Makes",
    headlineLine2: "Your Brand Unforgettable",
    description: <>We craft custom logos that capture your brand's essence — <span className="text-foreground font-semibold">memorable, versatile, and built to last decades</span>. Not templates. Not AI-generated. Hand-crafted.</>,
    trustSignals: [
      { icon: Award, text: "200+ Logos Designed" },
      { icon: PenTool, text: "Hand-Crafted, Not Templates" },
      { icon: Layers, text: "Complete Brand File Package" },
      { icon: RefreshCw, text: "Unlimited Revisions" },
    ],
    credentials: ["200+ Logos Designed", "Hand-Crafted Originals", "Full File Package"],
    formTitle: "Get Your Free Logo Consultation",
    formDescription: "Tell us about your brand and we'll share initial concepts and direction ideas.",
    formButtonText: "Get Free Consultation",
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
  faq: [
    { question: "How much does a logo design cost?", answer: "Our logo design packages start from ₹15,000 for startups and go up based on complexity. Every package includes multiple concepts, revisions, and complete file delivery." },
    { question: "How many concepts will I see?", answer: "You'll receive 3-5 unique concepts in the first round. You pick your favorite direction, and we refine it until it's perfect." },
    { question: "How long does the process take?", answer: "Typically 2-3 weeks from discovery to final delivery. Rush delivery is available for an additional fee." },
    { question: "What file formats do I get?", answer: "You receive SVG, PNG (transparent), JPG, PDF, AI, and EPS files — suitable for web, print, merchandise, and signage." },
    { question: "Do you provide brand guidelines?", answer: "Yes. Every logo package includes a brand guidelines document covering logo usage, spacing, colors, and do's/don'ts." },
    { question: "Can you redesign my existing logo?", answer: "Absolutely. We can modernize your current logo while preserving brand recognition that you've already built." },
    { question: "Do I own the logo after the project?", answer: "Yes. Full copyright and ownership transfer to you upon final payment. We never reuse or resell your design." },
    { question: "Can you also design business cards and stationery?", answer: "Yes! We offer complete brand identity packages including business cards, letterheads, envelopes, and more. Ask about our Brand Kit service." },
  ],
  finalCTA: {
    headline: "Ready for a Logo Your Brand Deserves?",
    description: "Get a free logo consultation and see how we can bring your brand vision to life.",
    buttonText: "Get Free Consultation",
  },
};

const LogoDesign = () => <ServicePageTemplate config={config} />;
export default LogoDesign;
