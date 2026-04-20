import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import {
  FileText, BookOpen, PenTool, Megaphone, Search, TrendingUp, Award, Target,
  Users, Zap, Shield, Calendar, Layers, Eye, Bot, Clock, BarChart3,
} from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Content Marketing Agency in Bangalore | SEO Content That Converts",
    description:
      "Top content marketing agency in Bangalore. Website content, SEO blogs, scripts & guest posts that rank on Google and convert visitors. Get a free content audit.",
    keywords:
      "content marketing agency in bangalore, content writing services in bangalore, content writing agency in bangalore, seo content writing company bangalore, blog writing company bangalore, copywriting agency bangalore",
    canonical: "https://www.thesuper30.ai/content-marketing-agency-bangalore",
    serviceType: "Content Marketing",
    ogTitle: "Content Marketing Agency in Bangalore — Words That Rank & Convert",
    ogDescription:
      "Website content, SEO blogs, scripts and guest posts crafted by Bangalore's top content marketing team. Build authority and drive qualified traffic.",
    twitterTitle: "Content Marketing Agency in Bangalore — Words That Rank & Convert",
    twitterDescription:
      "Website content, SEO blogs, scripts and guest posts crafted to rank on Google and turn visitors into customers.",
  },
  hero: {
    badgeIcon: FileText,
    badgeText: "#1 Content Marketing Agency in Bangalore",
    headlineLine1: "Content Marketing Agency",
    headlineLine2: "in Bangalore",
    description: (
      <>
        From <span className="text-foreground font-semibold">website content and SEO blogs</span> to{" "}
        <span className="text-foreground font-semibold">scripts and guest posts</span> — content engineered to rank on Google, build authority, and convert readers into customers.
      </>
    ),
    trustSignals: [
      { icon: Search, text: "SEO-First Content Strategy" },
      { icon: TrendingUp, text: "Avg. 3x Organic Traffic Growth" },
      { icon: Award, text: "2,000+ Articles Published" },
      { icon: Shield, text: "100% Original, Human-Written" },
    ],
    credentials: ["300+ Brands Served", "4.9/5 Client Rating", "30+ Industries Covered"],
    formTitle: "Get Your Free Content Audit",
    formDescription: "We'll review your existing content and outline a strategy to grow traffic.",
    formButtonText: "Get Free Content Audit",
  },
  source: "content_marketing",
  problems: [
    { icon: Search, title: "Content That Doesn't Rank", description: "You're publishing articles, but they never make it to Google's first page." },
    { icon: Calendar, title: "Inconsistent Publishing", description: "A burst of activity, then weeks of silence. Google rewards consistency." },
    { icon: Target, title: "No Strategy Behind It", description: "You write what feels right instead of what your audience is searching for." },
    { icon: Clock, title: "No Bandwidth In-House", description: "You know content matters but your team has no time to create it." },
  ],
  services: [
    { icon: FileText, title: "Website Content", description: "Conversion-focused homepage, service and landing page copy that ranks and converts." },
    { icon: BookOpen, title: "SEO Blog Writing", description: "Long-form, keyword-targeted articles built to dominate page one of Google." },
    { icon: PenTool, title: "Script Writing", description: "Reels, YouTube, ads and explainer scripts that hook viewers in 3 seconds." },
    { icon: Megaphone, title: "Guest Posting", description: "High-DA backlinks from real publications that boost rankings and authority." },
    { icon: Layers, title: "Content Strategy", description: "Topic clusters, pillar pages and editorial calendars aligned to business goals." },
    { icon: Bot, title: "AI-Assisted Research", description: "AI-powered research and outlines, paired with expert human writing." },
    { icon: Search, title: "Keyword Research", description: "Search intent mapping that uncovers high-opportunity, low-competition topics." },
    { icon: BarChart3, title: "Content Audits", description: "Audit existing content to fix what's underperforming and amplify what works." },
  ],
  comparison: {
    traditional: [
      "Generic 500-word articles with no SEO depth",
      "Random topics chosen without keyword research",
      "One blog a month — then radio silence",
      "AI-spun fluff with no real expertise or insight",
      "No internal linking or on-page optimisation",
      "Copy that reads like a college essay",
    ],
    super30: [
      "1,500–3,000 word deep-dive articles built to rank",
      "Every topic backed by keyword data and search intent",
      "Consistent calendars — 8–20 pieces per month",
      "AI-assisted research, human-written quality",
      "Full on-page SEO — headers, links, schema, meta tags",
      "Conversational, conversion-focused copy",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Compound Traffic Growth", description: "Every piece is an asset that drives traffic for months and years." },
    { icon: Search, title: "First-Page Rankings", description: "Strategic keyword targeting puts your content where buyers search." },
    { icon: Award, title: "Brand Authority", description: "Consistent quality content makes you the go-to expert in your niche." },
    { icon: Target, title: "Lead Generation", description: "Smart CTAs and content upgrades turn readers into qualified leads." },
    { icon: Shield, title: "Original & Authentic", description: "Real expertise — never recycled, generic, AI-spun fluff." },
    { icon: Calendar, title: "Always-On Publishing", description: "Never miss a publish date with our managed editorial calendar." },
    { icon: Users, title: "Audience Growth", description: "Valuable content attracts and retains your ideal-fit audience." },
    { icon: Zap, title: "Fast Turnaround", description: "Articles delivered in 3–5 business days. Scripts in 48 hours." },
    { icon: Eye, title: "Beautifully Formatted", description: "Scannable structure, headers, bullets, images and clear CTAs." },
  ],
  process: [
    { icon: Search, title: "Audit & Research", description: "Audit existing content, research keywords and map search intent." },
    { icon: Layers, title: "Strategy & Calendar", description: "Topic clusters, pillar pages and a 90-day editorial calendar." },
    { icon: PenTool, title: "Write & Optimise", description: "Expert writers + on-page SEO + internal linking + schema." },
    { icon: BarChart3, title: "Publish & Measure", description: "CMS-ready delivery with monthly performance reporting." },
  ],
  whoIsThisFor: {
    forYou: [
      "You want compounding organic traffic that grows month over month",
      "You know content marketing works but lack the in-house bandwidth",
      "You need SEO-optimised content, not just 'nice articles'",
      "You want to build long-term brand authority in your niche",
      "You're ready to commit to consistent publishing for 3–6 months",
    ],
    notForYou: [
      "You want one blog post and expect thousands of visitors",
      "You're chasing the cheapest possible AI-generated content",
      "You want overnight rankings without an SEO foundation",
      "You want to micromanage every sentence and revision round",
    ],
  },
  faq: [
    { question: "What does a content marketing agency in Bangalore actually do?", answer: "We plan, create and distribute content across formats — website copy, SEO blogs, scripts, guest posts and email — built around a keyword and audience strategy that drives qualified traffic and conversions." },
    { question: "How is content marketing different from blog writing?", answer: "Blog writing is one tactic. Content marketing is the full strategy — topic research, content calendars, multiple formats (blogs, scripts, guest posts, emails), distribution and performance measurement." },
    { question: "How long does content marketing take to show results?", answer: "Most clients see meaningful organic traffic growth in 3–6 months. Brand authority and lead-quality improvements compound from month 4 onwards." },
    { question: "How much does content marketing cost in Bangalore?", answer: "Our content marketing retainers start from ₹35,000/month for a focused engagement and scale to ₹1,50,000+/month for full-stack content programs across formats." },
    { question: "Do you write for technical or niche industries?", answer: "Yes. We have specialist writers across SaaS, fintech, healthcare, manufacturing, real estate, D2C and B2B industries." },
    { question: "Do you handle content distribution too?", answer: "Yes — we publish to your CMS, distribute via email, repurpose into social posts and run guest posting outreach for backlinks and authority." },
    { question: "Will the content be 100% original?", answer: "Yes. Every piece is human-written, plagiarism-checked and AI-detection clean. We use AI only for research and outlining." },
    { question: "Can you take over content from our existing team or agency?", answer: "Absolutely. We start with a content audit, identify gaps and underperformers, then build a transition plan that preserves your existing equity." },
  ],
  finalCTA: {
    headline: "Ready to Build a Content Engine That Drives Revenue?",
    description: "Get a free content audit and a 90-day editorial roadmap from Bangalore's top content marketing team.",
    buttonText: "Get Free Content Audit",
  },
};

const ContentMarketing = () => <ServicePageTemplate config={config} />;
export default ContentMarketing;
