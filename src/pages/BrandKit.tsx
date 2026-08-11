import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { Palette, PenTool, Layers, FileText, Eye, Zap, Heart, Shield, Award, Target, Users, Sparkles, Globe, BookOpen, Brush, Type } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Brand Kit, Identity Design & Branding Agency in Bangalore",
    description: "Build a brand people remember. Our branding company in Bangalore creates complete brand kits covering logo, colors, fonts & visual identity. Let's Connect!",
    keywords: "branding agency in bangalore, branding company in bangalore, branding services in bangalore, brand kit design services in bangalore",
    canonical: "https://www.thesuper30.ai/branding-agency-bangalore",
    serviceType: "Brand Kit Design",
    ogTitle: "A Strong Brand Kit Makes Your Business Look Like a Leader.",
    ogDescription: "Logo, colors and visual identity. Brand kits that make your business look consistent. Let's brand!",
    twitterTitle: "A Strong Brand Kit Makes Your Business Look Like a Leader.",
    twitterDescription: "Logo, colors and visual identity. Brand kits that make your business look consistent. Let's brand!",
  },
  hero: {
    badgeIcon: Palette,
    badgeText: "Branding Company in Bangalore",
    headlineLine1: "Branding Agency in Bangalore for a",
    headlineLine2: "Complete Brand Kit & Visual Identity",
    description: <>Our <span className="text-foreground font-semibold">branding service in Bangalore</span> develops an entire system of brand identity including logo, colors, fonts and other visual assets that guarantees consistent brand recognition across every platform.</>,
    trustSignals: [
      { icon: Layers, text: "Complete Visual Identity System" },
      { icon: BookOpen, text: "Detailed Brand Usage Guidelines" },
      { icon: Palette, text: "Strategic Colours and Typography" },
      { icon: Shield, text: "Optimized for Print and Digital" },
    ],
    credentials: ["150+ Brands Built", "End-to-End Identity", "Print + Digital Ready"],
    formTitle: "Free Brand Kit Consultation",
    formDescription: "Tell us about your business and our branding services in Bangalore team will outline a custom brand identity package for you.",
    formButtonText: "Enquire Now",
  },
  source: "brand_kit",
  sections: {
    problems: {
      title: "Common Branding Challenges Businesses Face",
      description: "Many businesses struggle with inconsistent branding across platforms, leading to confusion, weakened recognition, and an unprofessional customer experience.",
    },
    services: {
      title: "Complete Branding Services In Bangalore",
      description: "Everything required to create a consistent, professional, and recognizable brand identity across digital, print, and marketing platforms.",
    },
    comparison: {
      title: "Traditional Agency vs TheSuper30",
      description: "A clear comparison between inconsistent branding strategies and professionally designed long-term brand consistency and scalable growth identity systems.",
    },
    benefits: {
      eyebrow: "Why Brands Choose Us?",
      title: "Businesses Investing in Strategic Brand Identity",
      description: "Consistent branding systems and brand kit design services in Bangalore help businesses maintain recognition, improve communication, and create a stronger market presence across every customer touchpoint.",
    },
    industries: {
      eyebrow: "Industry Specialization",
      title: "Brand Kit Marketing Strategy For Every Industry",
      description: "Industry specific marketing strategies crafted across 18+ business categories. We understand your audience, market behavior, and customer expectations.",
    },
    whoIsThisFor: {
      title: "Is Your Brand Ready For This?",
      description: "Designed for businesses that value long-term brand consistency, strategic positioning, and professional visual identity systems.",
    },
  },
  problems: [
    { icon: Palette, title: "Inconsistent Brand Visuals", description: "Your website, social media, and marketing materials all appear disconnected instead of visually unified." },
    { icon: Users, title: "Teams Struggle With Brand Consistency", description: "Without clear guidelines, every team member uses different fonts, colours, logos, and brand elements." },
    { icon: Eye, title: "Lacks Professional Credibility", description: "Customers judge your business instantly, and inconsistent branding reduces trust and perceived business value." },
    { icon: FileText, title: "No Central Brand Guidelines", description: "When new creatives are required, teams often struggle to identify the correct brand assets and styles." },
  ],
  services: [
    { icon: PenTool, title: "Logo System", description: "Primary, secondary, icon, and responsive logo variations created for every brand application and platform." },
    { icon: Palette, title: "Colour Palette", description: "Strategic primary, secondary, and accent colour systems with complete usage and format specifications." },
    { icon: Type, title: "Typography System", description: "Professional heading and body font combinations with structured sizing, spacing, and usage standards." },
    { icon: BookOpen, title: "Brand Guidelines", description: "Detailed documentation covering logo usage, typography, colours, layouts, and complete visual identity standards." },
    { icon: FileText, title: "Stationery Design", description: "Business cards, letterheads, envelopes, and email signatures are designed for professional brand consistency." },
    { icon: Globe, title: "Social Media Templates", description: "Branded templates created for Instagram, LinkedIn, Facebook, and modern digital marketing platforms." },
    { icon: Layers, title: "Presentation Templates", description: "Professionally branded presentation templates designed for PowerPoint, Google Slides, and client communications." },
    { icon: Brush, title: "Pattern and Texture Library", description: "Custom visual patterns and texture elements created for packaging, backgrounds, and branded assets." },
  ],
  comparison: {
    traditional: [
      "Basic logo delivery without a complete identity structure",
      "Random colour selections without strategic brand direction",
      "No organized brand documentation for future consistency",
      "Visual assets created inconsistently across different campaigns",
      "Every new design starts again from the beginning",
      "Print and digital branding appear visually disconnected",
    ],
    super30: [
      "Complete identity systems with logos, typography, colors, and guidelines",
      "Strategic color systems based on industry and audience psychology",
      "Professional brand documentation for consistent team usage",
      "Structured design assets created for long-term consistency",
      "Scalable brand systems designed for faster asset creation",
      "Unified branding across print, digital, packaging, and social platforms",
    ],
  },
  benefits: [
    { icon: Shield, title: "Total Brand Consistency", description: "Every customer interaction across web, social, print, and signage feels aligned and professionally managed." },
    { icon: Zap, title: "Faster Creative Execution", description: "Structured brand systems help teams create new marketing assets with greater speed and consistency." },
    { icon: Heart, title: "Premium Brand Presence", description: "Consistent visual branding helps your business appear more established, credible, and professionally positioned." },
    { icon: Users, title: "Team Empowerment", description: "Internal teams can confidently create branded communications using clear identity guidelines and assets." },
    { icon: Target, title: "Strategic Brand Direction", description: "Every visual element is intentionally designed to reflect your positioning, audience, and business goals." },
    { icon: Award, title: "Clear Competitive Edge", description: "Distinct and consistent branding helps businesses stand apart from competitors with visually inconsistent branding." },
    { icon: Globe, title: "Platform Ready Assets", description: "Brand assets are optimized for websites, social media, print materials, packaging, and outdoor branding." },
    { icon: Sparkles, title: "Scalable Brand System", description: "Flexible identity systems support long-term business growth without losing visual consistency." },
    { icon: Eye, title: "Impactful Brand Recall", description: "Cohesive visual branding improves recognition and helps audiences remember your business more easily." },
  ],
  process: [
    { icon: Users, title: "Brand Discovery", description: "Workshop to define your brand personality, values, audience, and positioning." },
    { icon: PenTool, title: "Identity Design", description: "Logo, colors, typography, and visual elements — multiple directions presented." },
    { icon: BookOpen, title: "Guidelines & Templates", description: "Comprehensive brand book plus ready-to-use templates for every channel." },
    { icon: Zap, title: "Handoff & Training", description: "Complete asset delivery with a walkthrough on how to use everything." },
  ],
  whoIsThisFor: {
    forYou: [
      "You're launching a new brand and need a complete professional identity system",
      "Your current branding feels inconsistent and requires a more refined visual direction",
      "Your internal team needs structured brand guidelines for consistent communication",
      "You want branded templates that improve speed and simplify content production",
    ],
    notForYou: [
      "You only need a quick logo without a complete brand identity system",
      "You're not prepared to define your positioning, messaging, and brand direction",
      "You frequently change your brand identity within short business cycles",
      "You believe branding is only about selecting attractive colors and fonts",
    ],
  },
  faq: getFaqs("brand-kit"),
  finalCTA: {
    headline: "Partner With a Branding Agency in Bangalore That Shapes Lasting Brand Identity",
    description: "Book a free consultation with our branding company in Bangalore and learn how a complete identity system can transform your business presence and sustainable brand recognition.",
    buttonText: "Get Free Brand Consultation",
  },
};

const BrandKit = () => <ServicePageTemplate config={config} />;
export default BrandKit;
