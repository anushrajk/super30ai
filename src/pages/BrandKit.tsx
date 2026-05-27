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
    badgeText: "Branding Agency in Bangalore",
    headlineLine1: "Branding Agency in Bangalore",
    headlineLine2: "Brand Kit & Identity Design",
    description: <>Our <span className="text-foreground font-semibold">branding company in Bangalore</span> delivers complete brand kit design services in Bangalore — logo, colors, fonts and visual identity that make your business look like a leader everywhere.</>,
    trustSignals: [
      { icon: Layers, text: "Complete Brand System" },
      { icon: BookOpen, text: "Professional Brand Guidelines" },
      { icon: Palette, text: "Strategic Color & Typography" },
      { icon: Shield, text: "Ready for Print & Digital" },
    ],
    credentials: ["150+ Brands Built", "End-to-End Identity", "Print + Digital Ready"],
    formTitle: "Free Brand Kit Consultation",
    formDescription: "Tell us about your business and our branding services in Bangalore team will outline a custom brand identity package for you.",
    formButtonText: "Get Free Brand Consultation",
  },
  source: "brand_kit",
  problems: [
    { icon: Palette, title: "Inconsistent Brand Visuals", description: "Your social media looks different from your website which looks different from your business cards." },
    { icon: Users, title: "Team Can't Stay On-Brand", description: "Without guidelines, every team member uses different fonts, colors, and logo versions." },
    { icon: Eye, title: "Looks Unprofessional", description: "Prospects judge your brand in seconds. Inconsistent visuals scream 'small-time'." },
    { icon: FileText, title: "No Brand Documentation", description: "When you need a new design asset, nobody knows which colors, fonts, or logos to use." },
  ],
  services: [
    { icon: PenTool, title: "Logo System", description: "Primary, secondary, icon, and responsive logo variations for every context." },
    { icon: Palette, title: "Color Palette", description: "Strategic primary, secondary, and accent colors with all code formats." },
    { icon: Type, title: "Typography System", description: "Heading and body font pairing with size scales and usage rules." },
    { icon: BookOpen, title: "Brand Guidelines", description: "Comprehensive document covering every aspect of your visual identity." },
    { icon: FileText, title: "Stationery Design", description: "Business cards, letterheads, envelopes, and email signatures." },
    { icon: Globe, title: "Social Media Templates", description: "Branded templates for Instagram, LinkedIn, and Facebook posts." },
    { icon: Layers, title: "Presentation Templates", description: "Professional PowerPoint/Google Slides templates in your brand style." },
    { icon: Brush, title: "Pattern & Texture Library", description: "Custom brand patterns and textures for backgrounds and packaging." },
  ],
  comparison: {
    traditional: [
      "Just a logo file with no system behind it",
      "Pick colors you 'like' without strategy",
      "No documentation — knowledge lives in one designer's head",
      "Inconsistent assets created ad-hoc over time",
      "Can't scale — every new asset requires starting from scratch",
      "Print and digital assets look completely different",
    ],
    super30: [
      "Complete identity system — logo, colors, typography, guidelines",
      "Colors chosen for psychology, industry, and accessibility",
      "Comprehensive brand guidelines document anyone can follow",
      "Templated assets that maintain consistency at scale",
      "Scalable design system — new assets take minutes, not hours",
      "Unified look across print, digital, social, and packaging",
    ],
  },
  benefits: [
    { icon: Shield, title: "Total Consistency", description: "Every touchpoint — website, social, print, signage — looks unified and professional." },
    { icon: Zap, title: "Faster Design Output", description: "Templates and guidelines mean new assets are created 5x faster." },
    { icon: Heart, title: "Premium Perception", description: "Consistent branding makes your business look bigger and more trustworthy." },
    { icon: Users, title: "Team Empowerment", description: "Anyone on your team can create on-brand content with the guidelines." },
    { icon: Target, title: "Strategic Foundation", description: "Every visual choice is intentional — aligned with your brand positioning." },
    { icon: Award, title: "Competitive Edge", description: "Stand out from competitors who use generic, inconsistent branding." },
    { icon: Globe, title: "Multi-Platform Ready", description: "Assets optimized for web, social media, print, merchandise, and signage." },
    { icon: Sparkles, title: "Future-Proof", description: "A scalable system that grows with your brand without losing identity." },
    { icon: Eye, title: "Memorable Brand", description: "Cohesive visual identity increases brand recall by up to 80%." },
  ],
  process: [
    { icon: Users, title: "Brand Discovery", description: "Workshop to define your brand personality, values, audience, and positioning." },
    { icon: PenTool, title: "Identity Design", description: "Logo, colors, typography, and visual elements — multiple directions presented." },
    { icon: BookOpen, title: "Guidelines & Templates", description: "Comprehensive brand book plus ready-to-use templates for every channel." },
    { icon: Zap, title: "Handoff & Training", description: "Complete asset delivery with a walkthrough on how to use everything." },
  ],
  whoIsThisFor: {
    forYou: [
      "You're launching a brand and want to start with a professional identity",
      "Your current branding is inconsistent and needs a complete overhaul",
      "You have a team that needs clear guidelines to stay on-brand",
      "You want templates to speed up content creation",
      "You're preparing for a rebrand or brand refresh",
    ],
    notForYou: [
      "You just need a quick logo — no full identity",
      "You're not ready to define your brand values and positioning",
      "You want to change your brand identity every few months",
      "You think branding is just picking nice colors",
    ],
  },
  faq: getFaqs("brand-kit"),
  finalCTA: {
    headline: "Hire the Top Branding Agency in Bangalore",
    description: "Get a free consultation from our branding company in Bangalore and see how a complete brand kit can transform your business.",
    buttonText: "Get Free Brand Consultation",
  },
};

const BrandKit = () => <ServicePageTemplate config={config} />;
export default BrandKit;
