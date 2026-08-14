import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { BookOpen, PenTool, Search, TrendingUp, BarChart3, Users, Zap, Target, Shield, Calendar, Bot, Layers, Eye, Award, Clock, FileText } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Blog Writing Services in Bangalore | SEO Blogs That Work",
    description: "Attract more visitors with blogs that rank. Our blog writing agency in Bangalore craft SEO articles that build authority and grow traffic. Let's Write!",
    keywords: "blog writing services in bangalore, seo blog writing services in bangalore, blog writing agency in bangalore, article writing agency in bangalore, blog writing company in bangalore",
    canonical: "https://www.thesuper30.ai/blog-writing-services-bangalore",
    serviceType: "Blog Writing Services",
    ogTitle: "Blogs That Rank on Google Bring Free Traffic Every Day.",
    ogDescription: "SEO-optimised blogs that grow your traffic and bring consistent visitors every day. Let's write!",
    twitterTitle: "Blogs That Rank on Google Bring Free Traffic Every Day.",
    twitterDescription: "SEO-optimised blogs that grow your traffic and bring consistent visitors every day. Let's write!",
  },
  hero: {
    badgeIcon: BookOpen,
    badgeText: "Blog Writing Company in Bangalore",
    headlineLine1: "Blog Writing Services",
    headlineLine2: "in Bangalore for Search Visibility and Authority",
    description: <>As a trusted <span className="text-foreground font-semibold">blog writing agency in Bangalore</span>, we create strategic SEO blog content that improves Google visibility, develops brand authority, and attracts qualified business traffic consistently.</>,
    trustSignals: [
      { icon: Search, text: "Keyword Targeted Blog Strategy" },
      { icon: TrendingUp, text: "Average 3x Organic Traffic Growth" },
      { icon: Calendar, text: "Consistent Content Publishing" },
      { icon: Shield, text: "100% Original Human Written Content" },
    ],
    credentials: ["2,000+ Blogs Published", "SEO-First Approach", "Multiple Industries"],
    formTitle: "Free SEO Blog Writing Strategy in Bangalore",
    formDescription: "Tell us about your niche — Bangalore's trusted blog writing agency will outline an SEO content plan that drives organic traffic.",
    formButtonText: "Enquire Now",
  },
  source: "blog_writing",
  sections: {
    problems: {
      eyebrow: "The Challenge",
      title: "Content Challenges That Most Businesses Face",
      description: "Publishing content regularly is no longer enough. Without strategy, search visibility, and consistency, most business blogs fail to generate meaningful traffic or qualified leads.",
    },
    services: {
      title: "Blog Writing Services in Bangalore That Improve Visibility",
      description: "Strategic blog content crafted to improve rankings, strengthen authority, and keep your brand visible across search engines and AI driven discovery platforms.",
    },
    comparison: {
      eyebrow: "What Makes Us Different?",
      title: "Traditional Agency vs TheSuper 30",
      description: "Unlike a typical article writing agency in Bangalore focused on content volume, we create search optimized blog content designed to improve rankings, authority, and long-term organic growth.",
    },
    benefits: {
      eyebrow: "Why Brands Choose Us?",
      title: "Content Strategies That Drive Long-Term Growth",
      description: "Every blog created by our blog writing company in Bangalore follows a clear search strategy, audience intent, and business objective to improve visibility, authority, and sustainable organic growth.",
    },
    industries: {
      eyebrow: "Industry Expertise",
      title: "Blog Content Strategy for Every Industry",
      description: "SEO optimized blog strategies created for diverse industries, helping brands improve visibility, authority, and discoverability across search engines and AI platforms.",
    },
    whoIsThisFor: {
      title: "Developed for Brands Focused on Long-Term Growth",
      description: "Our SEO blog writing services in Bangalore are designed for businesses that want consistent visibility, stronger search rankings, and content that supports real business growth over time.",
    },
  },
  problems: [
    { icon: Calendar, title: "Inconsistent Publishing", description: "You posted a few blogs earlier, then paused. Search engines reward consistency, not irregular publishing." },
    { icon: Search, title: "Blogs That Are Not Ranking", description: "Your content is live, but it never reaches the first page of search results or AI discovery platforms." },
    { icon: Target, title: "No Traffic From Content", description: "Your blog is active but attracts minimal visitors because there is no structured keyword targeting strategy." },
    { icon: Clock, title: "No Time to Write", description: "You understand content matters, but daily business priorities leave little time for consistent publishing." },
  ],
  services: [
    { icon: Search, title: "SEO Blog Posts", description: "Long form, keyword targeted articles are created to improve rankings across competitive search results." },
    { icon: TrendingUp, title: "Thought Leadership", description: "Insight driven articles that establish your brand as a trusted voice within your industry." },
    { icon: BookOpen, title: "How To Guides", description: "Clear educational guides that answer audience questions and build long-term trust." },
    { icon: Layers, title: "Listicles & Roundups", description: "Engaging list based content designed for readability, discoverability, and higher audience engagement." },
    { icon: BarChart3, title: "Case Studies", description: "Performance focused success stories that highlight business outcomes, credibility, and measurable growth." },
    { icon: Bot, title: "AI Enhanced Research", description: "Research backed by AI insights and refined by experienced writers for quality and accuracy." },
    { icon: Calendar, title: "Content Calendar", description: "Structured publishing plans aligned with search intent, industry trends, and business priorities." },
    { icon: FileText, title: "Content Repurposing", description: "Transform blog articles into social content, newsletters, and branded marketing assets." },
  ],
  comparison: {
    traditional: [
      "Generic 500 word articles with limited SEO visibility",
      "Random topics created without a keyword strategy",
      "One blog monthly, followed by long publishing gaps",
      "AI generated content with minimal industry understanding",
      "No internal linking or structured on-page optimization",
      "Content that feels generic and difficult to engage with",
    ],
    super30: [
      "1500 to 3000 words articles optimized for SEO rankings",
      "Every topic supported by keyword research and search intent",
      "Consistent publishing plans with 4 to 8 blogs monthly",
      "AI assisted research refined by experienced human writers",
      "Complete on-page SEO with schema, links, and metadata",
      "Engaging reader specific content that audiences genuinely consume",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Compound Traffic Growth", description: "Every published article becomes a long-term asset that continues attracting traffic and visibility." },
    { icon: Search, title: "First Page Rankings", description: "Strategic keyword targeting helps your content appear where potential customers actively search." },
    { icon: Award, title: "Brand Authority", description: "Consistent high quality content positions your business as a trusted industry resource." },
    { icon: Target, title: "Lead Generation", description: "Strategic calls to action and valuable content help convert readers into qualified enquiries." },
    { icon: Shield, title: "Original & Authentic", description: "Industry standards, insights, and original writing create content that audiences genuinely trust and engage with." },
    { icon: Calendar, title: "Consistent Publishing", description: "Structured publishing schedules keep your brand active, visible, and relevant across search platforms." },
    { icon: Users, title: "Audience Growth", description: "Relevant content attracts the right audience and strengthens long-term reader engagement." },
    { icon: Zap, title: "Fast Turnaround", description: "Professionally written blog articles delivered within efficient timelines without compromising quality." },
    { icon: Eye, title: "Strategically Formatted", description: "Clear structure, readable formatting, and organised layouts improve content engagement and readability." },
  ],
  process: [
    { icon: Search, title: "Keyword Research", description: "Identify high-value topics your audience is searching for." },
    { icon: PenTool, title: "Outline & Write", description: "Structured outlines reviewed with you, then expertly written." },
    { icon: Eye, title: "Edit & Optimize", description: "Professional editing, SEO optimization, and quality check." },
    { icon: Calendar, title: "Publish & Promote", description: "CMS-ready delivery with social media snippets for promotion." },
  ],
  whoIsThisFor: {
    forYou: [
      "You need search optimized content that delivers more than basic information",
      "Want to establish industry credibility, brand authority as a long-term priority",
      "You are ready to maintain a consistent and strategic publishing schedule",
      "You want to build organic traffic that increases consistently every month",
      "Content marketing matters to you, but internal bandwidth is limited",
    ],
    notForYou: [
      "You expect one article to generate thousands of traffic instantly",
      "The lowest priced AI generated content is your primary requirement",
      "You are unwilling to invest in content consistency for 3-6 months",
      "You prefer controlling every sentence instead of trusting strategic expertise",
    ],
  },
  faq: getFaqs("blog-writing"),
  finalCTA: {
    headline: "Partner With Bangalore’s Strategic Blog Writing Agency Today",
    description: "Get personalised blog writing services in Bangalore which are built around search intent, audience behaviour, and topics that improve long-term visibility across search engines and AI platforms.",
    buttonText: "Get Your Free Blog Strategy",
  },
};

const BlogWriting = () => <ServicePageTemplate config={config} />;
export default BlogWriting;
