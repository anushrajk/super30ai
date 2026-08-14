import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { Globe, Layout, Shield, Gauge, Search, Zap, Users, Layers, Code, Smartphone, PenTool, BarChart3, Award, Target, Clock, Settings } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "WordPress Website Development Company in Bangalore",
    description: "Build a powerful WordPress site with our WordPress development company in Bangalore. We create fast, flexible and easy to manage websites for businesses. Let's Build!",
    keywords: "wordpress website development company in bangalore, wordpress development company in bangalore, wordpress web design company in bangalore, wordpress website development services in bangalore, custom wordpress website design in bangalore",
    canonical: "https://www.thesuper30.ai/wordpress-website-development-company-bangalore",
    serviceType: "WordPress Website Development",
    ogTitle: "WordPress Done Right Makes Your Business Look Professional.",
    ogDescription: "Fast, flexible and easy-to-manage WordPress websites that give your business full control. Let's go!",
    twitterTitle: "WordPress Done Right Makes Your Business Look Professional.",
    twitterDescription: "Fast, flexible and easy-to-manage WordPress websites that give your business full control. Let's go!",
  },
  hero: {
    badgeIcon: Globe,
    badgeText: "WordPress Development Company in Bangalore",
    headlineLine1: "WordPress Website Development Company",
    headlineLine2: "in Bangalore For Custom Web Solutions",
    description: <>Bangalore's trusted <span className="text-foreground font-semibold">WordPress web design company</span> offers you secure, search optimized and manageable custom WordPress websites. Whether it's a business website or an enterprise platform.</>,
    trustSignals: [
      { icon: Gauge, text: "Performance Optimized Loading Speed" },
      { icon: Shield, text: "Advanced Website Security" },
      { icon: Search, text: "Search Ready from Launch" },
      { icon: Settings, text: "Simple Content Management" },
    ],
    credentials: ["150+ WordPress Sites Built", "Speed-Optimized", "Security-First"],
    formTitle: "Free WordPress Development Consultation in Bangalore",
    formDescription: "Tell us about your project — our WordPress development company in Bangalore will plan a fast, secure, easy-to-manage WordPress solution.",
    formButtonText: "Enquire Now",
  },
  source: "wordpress_website",
  sections: {
    problems: {
      title: "Common WordPress Challenges That Most Businesses Face",
      description: "Many WordPress websites struggle with performance, security, flexibility, and content management challenges that hinder and create unnecessary business operational issues.",
    },
    services: {
      title: "WordPress Website Development Services in Bangalore for Every Business",
      description: "From custom development and performance optimization to e-commerce functionality and website security, we build WordPress solutions designed for growth and long-term success.",
    },
    comparison: {
      eyebrow: "What Makes Us Different?",
      title: "Traditional Agencies vs. TheSuper30",
      description: "See how our WordPress development company in Bangalore delivers stronger performance, better flexibility, and long-term value compared to conventional website development models.",
    },
    benefits: {
      eyebrow: "WHY BRANDS CHOOSE US",
      title: "Custom WordPress Website Design in Bangalore for Long-Term Growth",
      description: "Every WordPress site we develop is engineered for speed, security, scalability, and business growth, helping brands achieve stronger digital performance with complete ownership and flexibility.",
    },
    industries: {
      eyebrow: "INDUSTRY EXPERTISE",
      title: "WordPress Solutions for Every Industry",
      description: "Custom WordPress website strategies built for diverse industries, designed to support business goals, user engagement, and long-term growth.",
    },
    whoIsThisFor: {
      title: "Is WordPress Development the Right Choice for Your Business?",
      description: "WordPress is perfect for businesses that want to grow their website without getting too complex, easily manage content, and have flexibility with their site.",
    },
  },
  problems: [
    { icon: Gauge, title: "Slow Website Performance", description: "Too many themes and excessive plugins often impact website speed and overall user experience." },
    { icon: Shield, title: "Website Security Risks", description: "Frequently used outdated WordPress installations, themes, and plugins can expose your website to security risks." },
    { icon: Code, title: "Limited Design Flexibility", description: "Prebuilt templates often restrict customization and fail to reflect a unique brand identity." },
    { icon: Settings, title: "Difficulty in Updating Content", description: "Updating website content becomes time consuming when every change depends on technical support." },
  ],
  services: [
    { icon: PenTool, title: "Custom Theme Development", description: "Unique Custom WordPress themes strategically designed and developed to reflect your unique brand identity." },
    { icon: Code, title: "Plugin Development", description: "Specific plugin solutions that are developed for functionality outside of WordPress capabilities and requirements." },
    { icon: Layout, title: "Page Builder Sites", description: "Flexible Elementor and Gutenberg based WordPress sites built with intuitive editors for effortless content management." },
    { icon: Globe, title: "WooCommerce Development", description: "Covering product management, payment processing and order fulfillment, complete e-commerce solutions." },
    { icon: Gauge, title: "Website Performance Optimization", description: "Performance enhancements through caching, asset optimization, content delivery networks, and code refinement." },
    { icon: Shield, title: "Advanced Website Security", description: "Comprehensive security solutions including threat monitoring, access protection, and industry best practices." },
    { icon: Search, title: "WordPress Search Optimization", description: "Complete On-page SEO implementation including metadata, schema integration, and technical optimization." },
    { icon: Layers, title: "Website Migration Services", description: "Seamless migration from existing platforms to WordPress while preserving content and functionality." },
  ],
  comparison: {
    traditional: [
      "Generic theme with minor branding that lacks templates",
      "20+ plugins that reduce website speed and performance",
      "No security measures with increased risk exposure",
      "Content management that confuses and affects design layouts",
      "Limited SEO setup with reduced search visibility",
      "Project delivery and timeline delays that affect performance",
    ],
    super30: [
      "Custom WordPress design according to your brand identity",
      "Optimized code and minimal plugins for improved speed",
      "Advanced security protection with monitoring and backups",
      "User friendly content management without technical complexity",
      "Complete SEO setup with schema, meta tags, and sitemap",
      "Dedicated maintenance and support for continued growth",
    ],
  },
  benefits: [
    { icon: Gauge, title: "Lightning Fast", description: "Optimized for high speed performance with advanced caching and CDN integration." },
    { icon: Shield, title: "Secure & Protected", description: "Advanced WordPress security with firewall protection, threat monitoring, and daily backups." },
    { icon: Search, title: "SEO Optimized", description: "Structured with clean code, technical SEO, and search friendly configuration." },
    { icon: Settings, title: "Easy to Manage", description: "Manage content, create pages, and update media without technical expertise." },
    { icon: Smartphone, title: "Fully Responsive", description: "Optimized for desktop, tablet, and mobile with seamless user experiences." },
    { icon: Code, title: "Clean Code", description: "No Bloat, no unnecessary development approach, with efficient code and optimized performance standards." },
    { icon: Layers, title: "Scalable", description: "Flexible website architecture designed to support future business expansion." },
    { icon: Clock, title: "Quick Delivery", description: "Efficiently delivered professional WordPress websites within defined project timelines." },
    { icon: Award, title: "Expert Team", description: "Experienced WordPress specialists delivering reliable solutions backed by industry expertise." },
  ],
  process: [
    { icon: Users, title: "Discover & Plan", description: "Understand your goals, content, and functionality requirements." },
    { icon: PenTool, title: "Design & Build", description: "Custom design in Figma, then WordPress development with clean code." },
    { icon: Shield, title: "Optimize & Secure", description: "Speed optimization, SEO setup, security hardening, and testing." },
    { icon: Zap, title: "Launch & Support", description: "Go live with confidence. Ongoing maintenance available." },
  ],
  whoIsThisFor: {
    forYou: [
      "You want a website that is easy to update and manage independently",
      "You need a professional website with blog and content management capabilities",
      "Your current WordPress website feels outdated, slow, or difficult to maintain",
      "You want WooCommerce functionality for selling products and services online",
      "You need a scalable website platform that grows alongside your business",
    ],
    notForYou: [
      "You require a highly complex custom software application beyond a CMS",
      "You are looking for a basic WordPress.com website with zero customization",
      "You are unwilling to invest in reliable hosting, security, and maintenance",
      "You expect a WordPress website to deliver native mobile app functionality",
    ],
  },
  faq: getFaqs("wordpress-website"),
  finalCTA: {
    headline: "Your Next High Performing WordPress Website Starts Here",
    description: "Partner with our WordPress website development company in Bangalore to build a website that delivers speed, security, and measurable results.",
    buttonText: "Get Free WordPress Quote",
  },
};

const WordpressWebsite = () => <ServicePageTemplate config={config} />;
export default WordpressWebsite;
