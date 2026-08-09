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
    headlineLine2: "for Memorable Brand Identity",
    description: <>Our professional <span className="text-foreground font-semibold">logo design services in Bangalore</span> design custom brand logos using strategy, creative direction, and brand research for long-term brand recognition and impact.</>,
    trustSignals: [
      { icon: Award, text: "200+ Logos Created" },
      { icon: PenTool, text: "Custom Crafted Brand Logos" },
      { icon: Layers, text: "Complete Brand Asset Package" },
      { icon: RefreshCw, text: "Flexible Revision Support" },
    ],
    credentials: ["200+ Logos Created", "Custom Crafted Brand Logos", "Complete Brand Asset Package"],
    formTitle: "Free Logo Design Consultation",
    formDescription: "Tell us about your brand and our custom logo design company in Bangalore will share initial concepts and direction ideas.",
    formButtonText: "Get Free Logo Consultation",
  },
  source: "logo_design",
  problems: [
    { icon: Eye, title: "Your Logo Feels Outdated", description: "Your existing logo was created years ago and no longer represents your current business identity or positioning." },
    { icon: Globe, title: "Weak Digital Presence", description: "Your logo was created for print use and appears inconsistent across social media, websites, and other digital platforms." },
    { icon: Heart, title: "Lacks Brand Recall", description: "People recognize your business but struggle to remember your logo because the branding lacks visual distinction." },
    { icon: Palette, title: "Template Based Identity", description: "Your logo was created using generic templates, making your brand look like countless others." },
  ],
  services: [
    { icon: PenTool, title: "Custom Logo Design", description: "Unique and custom logos developed from scratch in line with your brand positioning and vision for your business." },
    { icon: Layers, title: "Logo Variations", description: "Primary, secondary, icon only, and stacked logo formats are designed for every brand application and platform." },
    { icon: Palette, title: "Colour Palette", description: "Purpose driven color systems with HEX, RGB, CMYK, and Pantone codes for complete brand consistency." },
    { icon: FileText, title: "Brand Guidelines", description: "Clear usage standards for spacing, sizing, colors, and background treatments across all brand materials." },
    { icon: RefreshCw, title: "Logo Redesign", description: "Refine your existing logo identity while maintaining brand familiarity, recognition, and visual consistency." },
    { icon: Globe, title: "Digital Ready Files", description: "Complete logo file formats, including SVG, PNG, JPG, PDF, AI, and EPS for every requirement." },
    { icon: Eye, title: "Mockup Presentations", description: "Preview your logo across business cards, websites, packaging, signage, and branded marketing materials." },
    { icon: Sparkles, title: "Animated Logo", description: "Applying dynamic motion logo designs to websites, social media intros, presentations and video campaigns." },
  ],
  comparison: {
    traditional: [
      "Generic logo templates with minimal brand relevance",
      "One design concept with limited flexibility",
      "No strategic thinking behind the identity",
      "Restricted file formats for limited usage",
      "Missing brand usage standards and guidelines",
      "Extra revision charges during every update",
    ],
    super30: [
      "100% custom logo concepts created from scratch",
      "Multiple creative directions for better selection",
      "Detailed brand research before the design process",
      "Complete file package for every business need",
      "Professional brand guidelines for consistency",
      "Unlimited revisions for complete client satisfaction",
    ],
  },
  benefits: [
    { icon: Heart, title: "Instant Recognition", description: "Distinctive logo identities that customers instantly recognize and remember after meaningful brand interactions." },
    { icon: Shield, title: "Built for Longevity", description: "Timeless logo systems designed to remain relevant and effective for years without frequent redesigns." },
    { icon: Layers, title: "Designed for Every Platform", description: "From business cards to digital platforms, one logo system optimized for every brand requirement." },
    { icon: Palette, title: "Strategic Color Systems", description: "Purpose driven color selections based on brand psychology, audience perception, and industry positioning." },
    { icon: Target, title: "Strong Brand Alignment", description: "Logo concepts designed to reflect your business values, positioning, and overall brand personality clearly." },
    { icon: Zap, title: "On-time Delivery Timeline", description: "Initial logo concepts professionally delivered within five to seven business working days." },
    { icon: Users, title: "Collaborative Design Process", description: "Stay involved throughout every stage with clear communication, structured feedback, and transparent creative discussions." },
    { icon: Award, title: "Premium Design Quality", description: "Created by experienced branding specialists with deep expertise in logo strategy and identity development." },
    { icon: FileText, title: "Complete Branding Package", description: "Comprehensive delivery package including logo files, brand guidelines, mockups, and supporting visual assets." },
  ],
  process: [
    { icon: Users, title: "Brand Discovery", description: "Deep-dive into your brand values, audience, competitors, and personality." },
    { icon: PenTool, title: "Concept Development", description: "3+ unique concepts with rationale — you pick the direction." },
    { icon: RefreshCw, title: "Refine & Perfect", description: "Unlimited revisions on your chosen concept until it's perfect." },
    { icon: Layers, title: "Deliver & Launch", description: "Complete file package, brand guidelines, and mockups delivered." },
  ],
  whoIsThisFor: {
    forYou: [
      "You are launching a new brand with a clear vision",
      "Your existing logo feels outdated or inconsistent",
      "You need a logo suited for digital and print use",
      "You value thoughtful branding and professional execution",
      "You want a complete identity beyond a basic logo",
    ],
    notForYou: [
      "You prefer selecting from ready made template designs",
      "Your brand direction is still unclear or undefined",
      "You believe every logo delivers the same impact",
    ],
  },
  faq: getFaqs("logo-design"),
  finalCTA: {
    headline: "Partner With a Logo Design Company in Bangalore That Designs Lasting Brand Identity",
    description: "Connect with our branding experts at our custom logo design company in Bangalore and find out design solutions created to shape memorable and professionally positioned brand identities.",
    buttonText: "Get Free Logo Consultation",
  },
  sections: {
    problems: {
      title: "The Branding Challenges Most Businesses Face",
      description: "If this feels familiar, many growing brands face the same identity and visibility challenges.",
    },
    services: {
      title: "Complete Logo Design Services in Bangalore",
      description: "All you need is a logo design agency in Bangalore, to make a memorable and professional brand identity, that can be remembered for years to come and in the process of the digital evolution.",
    },
    comparison: {
      title: "Traditional Agency vs TheSuper30",
      description: "A strategic comparison of the results of generic logo service versus a long-term brand recognition and business growth approach.",
    },
    benefits: {
      title: "Why Brands Trust Our Logo Design Company in Bangalore",
      description: "Effective logo design solutions created to improve brand recall, visual consistency, and long-term business credibility across every platform.",
    },
    industries: {
      eyebrow: "INDUSTRY EXPERTISE",
      title: "Logo Design Strategies for Every Brand",
      description: "Industry specific marketing strategies crafted for diverse business sectors with messaging tailored to audience behaviour and market expectations.",
    },
    whoIsThisFor: {
      title: "Built for Brands That Value Identity",
      description: "Designed by a professional logo design company in Bangalore to add to your brand recognition, credibility and long-term brand consistency for businesses looking for strategic logo design solutions.",
    },
  },
};

const LogoDesign = () => <ServicePageTemplate config={config} />;
export default LogoDesign;
