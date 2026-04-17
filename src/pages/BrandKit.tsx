import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
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
    badgeText: "Brand Identity Experts",
    headlineLine1: "Branding Agency",
    headlineLine2: "in Bangalore",
    description: <>From logo to guidelines, colors to templates — we build a <span className="text-foreground font-semibold">complete visual identity system</span> that makes your brand consistent, recognizable, and premium everywhere.</>,
    trustSignals: [
      { icon: Layers, text: "Complete Brand System" },
      { icon: BookOpen, text: "Professional Brand Guidelines" },
      { icon: Palette, text: "Strategic Color & Typography" },
      { icon: Shield, text: "Ready for Print & Digital" },
    ],
    credentials: ["150+ Brands Built", "End-to-End Identity", "Print + Digital Ready"],
    formTitle: "Get Your Free Brand Consultation",
    formDescription: "Tell us about your brand and we'll outline a custom identity package for you.",
    formButtonText: "Get Free Consultation",
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
  faq: [
    { question: "What's included in a brand kit?", answer: "A complete brand kit includes: logo system (all variations), color palette, typography system, brand guidelines document, business card design, letterhead, social media templates, and presentation templates." },
    { question: "How long does a brand kit take?", answer: "A complete brand kit typically takes 3-5 weeks from discovery to final delivery, depending on the scope and revision cycles." },
    { question: "Can you work with my existing logo?", answer: "Yes. If you love your logo, we can build the entire brand system around it — adding colors, typography, guidelines, and templates." },
    { question: "Do you provide editable templates?", answer: "Absolutely. Social media templates come in Canva or Figma. Presentation templates in PowerPoint and Google Slides. All fully editable." },
    { question: "What file formats are included?", answer: "All logo files in SVG, PNG, JPG, PDF, AI, EPS. Brand guidelines as a PDF. Templates in their native editable formats." },
    { question: "Can you do brand strategy too?", answer: "Yes. Our brand discovery workshop covers positioning, personality, voice, audience personas, and competitive analysis — the strategic foundation for your visual identity." },
    { question: "What if my brand evolves over time?", answer: "Our brand systems are designed to be flexible and scalable. We also offer brand refresh packages to update your kit as your business grows." },
    { question: "Do you offer ongoing brand support?", answer: "Yes. We offer monthly retainer packages for brands that need ongoing design support, new asset creation, and brand consistency management." },
  ],
  finalCTA: {
    headline: "Ready to Build a Brand That Stands Out?",
    description: "Get a free brand consultation and see how a complete identity kit can transform your business.",
    buttonText: "Get Free Consultation",
  },
};

const BrandKit = () => <ServicePageTemplate config={config} />;
export default BrandKit;
