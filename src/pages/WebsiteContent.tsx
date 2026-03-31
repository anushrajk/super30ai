import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { FileText, PenTool, Target, Search, BarChart3, Users, Zap, Eye, Shield, Globe, Bot, Layers, MessageSquare, Award, TrendingUp, Clock, Heart } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Website Content Writing Services in Bangalore | The Super 30",
    description: "Professional website content writing services in Bangalore. SEO-optimized, conversion-focused copy for landing pages, service pages, about pages & more.",
    keywords: "website content writing, web copywriting, SEO content writing, landing page copy, website copywriter bangalore",
    canonical: "https://www.thesuper30.ai/website-content",
    serviceType: "Website Content Writing",
  },
  hero: {
    badgeIcon: FileText,
    badgeText: "Website Content Experts",
    headlineLine1: "Words That Rank,",
    headlineLine2: "Copy That Converts",
    description: <>SEO-optimized, persuasive website content that <span className="text-foreground font-semibold">ranks on Google and turns visitors into customers</span>. Every word earns its place.</>,
    trustSignals: [
      { icon: Search, text: "SEO-Optimized for Rankings" },
      { icon: Target, text: "Conversion-Focused Copy" },
      { icon: Bot, text: "AI-Enhanced Research" },
      { icon: Shield, text: "100% Original Content" },
    ],
    credentials: ["500+ Pages Written", "SEO-Optimized", "Conversion-Focused"],
    formTitle: "Get Your Free Content Audit",
    formDescription: "Share your website and we'll identify content gaps hurting your rankings and conversions.",
    formButtonText: "Get Free Audit",
  },
  source: "website_content",
  problems: [
    { icon: Search, title: "Content That Doesn't Rank", description: "Your pages exist but Google doesn't show them because the content isn't optimized for search." },
    { icon: Target, title: "Visitors Don't Convert", description: "People read your content but don't take action — no calls, no forms, no sales." },
    { icon: Eye, title: "Boring, Generic Copy", description: "Your website reads like every other competitor. Nothing makes you stand out or feel trustworthy." },
    { icon: Clock, title: "Outdated Information", description: "Your content hasn't been updated in years and no longer reflects your services or expertise." },
  ],
  services: [
    { icon: Globe, title: "Homepage Copy", description: "Compelling homepage content that hooks visitors in 3 seconds and guides them to action." },
    { icon: Layers, title: "Service Page Content", description: "Detailed service pages that explain value, build trust, and drive enquiries." },
    { icon: Users, title: "About Page", description: "Your brand story told in a way that builds emotional connection and credibility." },
    { icon: FileText, title: "Landing Page Copy", description: "High-converting landing pages with persuasive headlines, CTAs, and social proof." },
    { icon: Search, title: "SEO Content", description: "Keyword-optimized content that ranks on Google and drives organic traffic." },
    { icon: MessageSquare, title: "FAQ Content", description: "Structured FAQ pages that answer customer questions and boost SEO." },
    { icon: PenTool, title: "Product Descriptions", description: "Compelling product copy that highlights benefits and drives purchases." },
    { icon: Bot, title: "AI-Enhanced Writing", description: "AI-assisted research and optimization with human editorial quality." },
  ],
  comparison: {
    traditional: [
      "Generic copy that sounds like everyone else",
      "No keyword research — written without SEO",
      "Focuses on features, not benefits",
      "No understanding of your target audience",
      "Delivered as a Word doc — figure out the rest",
      "One draft, limited revisions",
    ],
    super30: [
      "Custom copy that sounds uniquely like your brand",
      "Deep keyword research and on-page SEO built in",
      "Benefit-driven, conversion-focused writing",
      "Audience research and persona-based messaging",
      "CMS-ready content with meta tags and headings",
      "Unlimited revisions until you're satisfied",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher Google Rankings", description: "SEO-optimized content that helps your pages rank for target keywords." },
    { icon: Target, title: "More Conversions", description: "Persuasive copy with strategic CTAs that turn readers into customers." },
    { icon: Heart, title: "Brand Voice", description: "Consistent tone and messaging that makes your brand feel authentic." },
    { icon: Users, title: "Audience Connection", description: "Content that speaks directly to your ideal customer's pain points." },
    { icon: Shield, title: "100% Original", description: "Every word is original — no AI-generated fluff, no plagiarism." },
    { icon: Zap, title: "Fast Turnaround", description: "Professional website content delivered within 7-10 business days." },
    { icon: BarChart3, title: "Data-Driven", description: "Content strategy backed by keyword research and competitive analysis." },
    { icon: Award, title: "Expert Writers", description: "Writers with industry experience who understand your market." },
    { icon: Eye, title: "Engaging & Readable", description: "Scannable formatting with headers, bullets, and clear hierarchy." },
  ],
  process: [
    { icon: Search, title: "Research & Audit", description: "Analyze your current content, competitors, keywords, and audience." },
    { icon: PenTool, title: "Strategy & Outline", description: "Content strategy with page outlines, keyword mapping, and messaging." },
    { icon: FileText, title: "Write & Optimize", description: "Draft, edit, and SEO-optimize every page with your brand voice." },
    { icon: Zap, title: "Review & Deliver", description: "Your review, our revisions, and CMS-ready delivery." },
  ],
  whoIsThisFor: {
    forYou: [
      "You're building a new website and need professional content",
      "Your current website content isn't ranking or converting",
      "You want SEO-optimized copy that drives organic traffic",
      "You need a consistent brand voice across all pages",
      "You're doing a website redesign and need fresh content",
    ],
    notForYou: [
      "You want AI-generated content without human editing",
      "You need a 10-page website written for ₹2,000",
      "You're not willing to provide input about your business",
      "You want to copy competitor content with minor changes",
    ],
  },
  faq: [
    { question: "How much does website content writing cost?", answer: "Pricing depends on the number of pages and complexity. A typical 8-10 page website starts from ₹25,000. We provide a custom quote after understanding your needs." },
    { question: "Do you do keyword research?", answer: "Yes. Every content project starts with comprehensive keyword research to ensure your content ranks for the right search terms." },
    { question: "How long does it take?", answer: "A typical website content project takes 7-14 business days depending on the number of pages and revision cycles." },
    { question: "Will the content be SEO-optimized?", answer: "Absolutely. We include meta titles, descriptions, header tag optimization, keyword placement, internal linking, and schema markup recommendations." },
    { question: "Do you write in different tones?", answer: "Yes. We adapt our writing style to match your brand — whether that's professional, conversational, technical, playful, or authoritative." },
    { question: "Can you write content for specific industries?", answer: "Yes. We have experience writing for healthcare, finance, technology, education, real estate, e-commerce, and many other industries." },
    { question: "Do you offer content updates and maintenance?", answer: "Yes. We offer monthly content retainer packages for ongoing updates, new pages, blog posts, and content optimization." },
    { question: "What if I'm not happy with the content?", answer: "We offer unlimited revisions until you're satisfied. If the direction isn't right, we'll rewrite from scratch at no extra cost." },
  ],
  finalCTA: {
    headline: "Ready for Content That Ranks & Converts?",
    description: "Get a free content audit and discover how better copy can transform your website's performance.",
    buttonText: "Get Free Content Audit",
  },
};

const WebsiteContent = () => <ServicePageTemplate config={config} />;
export default WebsiteContent;
