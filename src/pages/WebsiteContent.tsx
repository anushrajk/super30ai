import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { FileText, PenTool, Target, Search, BarChart3, Users, Zap, Eye, Shield, Globe, Bot, Layers, MessageSquare, Award, TrendingUp, Clock, Heart } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "SEO Content Writing company in Bangalore | Copy That Ranks",
    description: "SEO Optimize semantic website content that ranks & converts. Structured SEO copywriting services in Bangalore deliver website content for search engine",
    keywords: "seo copywriting services in bangalore, website content writing services in bangalore, seo content writing services in bangalore, seo content writing company in bangalore, seo content writing agency in bangalore",
    canonical: "https://www.thesuper30.ai/seo-content-writing-company-bangalore",
    serviceType: "Website Content Writing",
    ogTitle: "Your Website Content Should Rank on Google. Does It?",
    ogDescription: "SEO copywriting built to rank on Google and convert visitors into customers. Let's get writing!",
    twitterTitle: "Your Website Content Should Rank on Google. Does It?",
    twitterDescription: "SEO copywriting built to rank on Google and convert visitors into customers. Let's get writing!",
  },
  hero: {
    badgeIcon: FileText,
    badgeText: "SEO Content Writing Agency in Bangalore",
    headlineLine1: "SEO Content Writing Company in Bangalore",
    headlineLine2: "for Organic Website Ranking",
    description: <>Your website content should perform on Google and drive real business growth. Our <span className="text-foreground font-semibold">website content writing services in Bangalore</span> create strategic, search optimized content that improves visibility and turns visitors into customers.</>,
    trustSignals: [
      { icon: Search, text: "SEO Optimized Content Strategy" },
      { icon: Target, text: "Conversion Driven Copy" },
      { icon: Bot, text: "AI Powered Research" },
      { icon: Shield, text: "100% Original Content" },
    ],
    credentials: ["SEO Copywriting Services", "500+ Pages Written", "Conversion-Focused"],
    formTitle: "Get a Free SEO Content Audit",
    formDescription: "Share your website and Bangalore's top SEO content writing company will identify content gaps hurting your rankings and conversions.",
    formButtonText: "Enquire Now",
  },
  source: "website_content",
  sections: {
    problems: {
      title: "The Problem Most Businesses Face With Their Website Rankings",
      description: "Your website content may look complete, but low search volume, weak messaging, and outdated copy often stop businesses from generating consistent enquiries and organic growth.",
    },
    services: {
      title: "SEO Copywriting Services in Bangalore That Improve Rankings and Conversions",
      description: "High performing website content is more than words on a page. Our website content writing services in Bangalore combine strategic messaging, search visibility, and conversion specific copy to help businesses attract qualified traffic and turn visitors into paying customers.",
    },
    comparison: {
      title: "Traditional Agency vs. The Super 30",
      description: "Most businesses publish website content, but only strategic copy improves rankings, builds trust, and drives conversions consistently.",
    },
    benefits: {
      eyebrow: "Why Brands Choose Us?",
      title: "SEO Content Writing Agency in Bangalore for High-Impact Website Content",
      description: "Strategic website content improves search visibility, strengthens brand credibility, and helps businesses convert more visitors into qualified customers.",
    },
    industries: {
      eyebrow: "Industry Expertise",
      title: "Website Content Strategy for Every Industry",
      description: "Industry specific website content strategies built for businesses across multiple sectors. We create messaging that matches your audience, market, and business goals.",
    },
    whoIsThisFor: {
      title: "Is This the Right Website Content Strategy for Your Business?",
      description: "Professional website content works best for businesses focused on long-term visibility, better conversions, and consistent brand communication.",
    },
  },
  problems: [
    { icon: Search, title: "Content That Doesn’t Rank", description: "Your website pages exist online but fail to appear on Google because the content lacks search intent optimization." },
    { icon: Target, title: "Visitors Don’t Convert", description: "People visit your website content but leave without enquiries, purchases, or meaningful customer engagement." },
    { icon: Eye, title: "Weak Generic Messaging", description: "Your website sounds similar to competitors and fails to create authority, trust, or brand differentiation." },
    { icon: Clock, title: "Outdated Website Content", description: "Your website information feels outdated and no longer reflects your expertise, services, or business positioning." },
  ],
  services: [
    { icon: Globe, title: "Homepage Copy", description: "Strategic homepage content that captures attention quickly and guides visitors toward meaningful business call to action." },
    { icon: Layers, title: "Service Page Content", description: "Detailed service page content that explains expertise, builds credibility, and increases customer enquiries." },
    { icon: Users, title: "About Page", description: "A professionally written brand story that creates emotional connection, trust, and stronger customer confidence." },
    { icon: FileText, title: "Landing Page Copy", description: "Conversion focused landing pages with persuasive messaging, customer trust signals, and clear calls to action." },
    { icon: Search, title: "SEO Content", description: "Search optimized website content that improves Google visibility and attracts long-term organic website traffic." },
    { icon: MessageSquare, title: "FAQ Content", description: "Structured FAQ content that answers customer concerns clearly while improving website search optimization performance." },
    { icon: PenTool, title: "Product Descriptions", description: "Persuasive product descriptions that communicate value clearly and encourage stronger customer purchase decisions." },
    { icon: Bot, title: "AI Powered Writing", description: "AI assisted research and optimization supported by professional editorial quality and human content refinement." },
  ],
  comparison: {
    traditional: [
      "Generic website copy that sounds similar to your competitors",
      "No keyword strategy or structured SEO optimization",
      "Focuses on services instead of customer value",
      "Limited understanding of the target audience and intent",
      "Content delivered without implementation ready formatting",
      "Single draft process with restricted content revisions",
    ],
    super30: [
      "Brand focused website copy developed to position your brand",
      "Advanced keyword research with structured SEO integration",
      "Benefit driven messaging designed for higher conversions",
      "Audience research supported by customer based communication",
      "Website ready content with meta tags and content structure",
      "Flexible revision process focused on content quality and accuracy",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher Google Rankings", description: "Search optimized website content designed to improve visibility for your business to rank on pages through targeted keywords." },
    { icon: Target, title: "More Conversions", description: "Persuasive website messaging with a strategic call to action that drives stronger customer retention." },
    { icon: Heart, title: "Brand Voice", description: "Consistent tone and messaging that make your business feel credible, professional, and trustworthy." },
    { icon: Users, title: "Audience Connection", description: "Website content created around customer intent, business pain points, and real buying behavior insights." },
    { icon: Shield, title: "100% Original Content", description: "Professionally written website content without plagiarism, generic wording, or AI generated content." },
    { icon: Zap, title: "Fast Delivery Turnaround", description: "Professional website copy delivered within 7-10 business days while maintaining quality, structure, and consistency." },
    { icon: BarChart3, title: "Data Driven Strategy", description: "Content strategy supported by keyword research, audience analysis, and competitive market understanding." },
    { icon: Award, title: "Experienced Content Writers", description: "Industry experienced writers who understand customer psychology, brand communication, and digital marketing strategy." },
    { icon: Eye, title: "Readable Website Structure", description: "Clean website formatting with clear hierarchy, readable sections, and user friendly content flow." },
  ],
  process: [
    { icon: Search, title: "Research & Audit", description: "Analyze your current content, competitors, keywords, and audience." },
    { icon: PenTool, title: "Strategy & Outline", description: "Content strategy with page outlines, keyword mapping, and messaging." },
    { icon: FileText, title: "Write & Optimize", description: "Draft, edit, and SEO-optimize every page with your brand voice." },
    { icon: Zap, title: "Review & Deliver", description: "Your review, our revisions, and CMS-ready delivery." },
  ],
  whoIsThisFor: {
    forYou: [
      "You are launching a new website and need professionally written business content",
      "Your current website content is not generating traffic or customer conversions",
      "You want SEO focused website copy that improves long-term organic visibility",
      "You need consistent brand messaging across every important website page",
      "You are redesigning your website and require updated strategic content",
    ],
    notForYou: [
      "You want fully AI generated content without professional human refinement",
      "You expect complete website content to be written with a 2k Budget",
      "You are unwilling to share business insights or audience information",
      "You want rewritten competitor content instead of original brand messaging",
    ],
  },
  faq: getFaqs("website-content"),
  finalCTA: {
    headline: "Work with Bangalore’s No. 1 SEO Content Writing Company",
    description: "Get a professional content audit and discover how our SEO copywriting services in Bangalore help improve rankings, attract qualified traffic, and increase conversions.",
    buttonText: "Get Free SEO Content Audit",
  },
};

const WebsiteContent = () => <ServicePageTemplate config={config} />;
export default WebsiteContent;
