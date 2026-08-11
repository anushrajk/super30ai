import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import {
  FileText, BookOpen, PenTool, Megaphone, Search, TrendingUp, Award, Target,
  Users, Zap, Shield, Calendar, Layers, Eye, Bot, Clock, BarChart3,
} from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Copywriting & Content Writing Agency in Bangalore",
    description: "Copywriting done by experienced writers, customized for your business. Content writing services in Bangalore that build authority and trust for brands.",
    keywords: "content writing services in bangalore, content writing agency in bangalore, content marketing services in bangalore, content writing company in bangalore",
    canonical: "https://www.thesuper30.ai/content-writing-agency-bangalore",
    serviceType: "Content Marketing",
    ogTitle: "Great Content Brings the Right Audience to Your Business.",
    ogDescription: "SEO-ready content and marketing copy that attract the right audience and drive growth. Let's write!",
    twitterTitle: "Great Content Brings the Right Audience to Your Business.",
    twitterDescription: "SEO-ready content and marketing copy that attract the right audience and drive growth. Let's write!",
  },
  hero: {
    badgeIcon: FileText,
    badgeText: "Content Writing Company in Bangalore",
    headlineLine1: "Copywriting And Content Writing",
    headlineLine2: "Agency in Bangalore",
    description: (
      <>
        Strategic content helps businesses attract the right audience and improve brand visibility. Our <span className="text-foreground font-semibold">content writing services in Bangalore</span> are created by experienced writers for{" "}
        <span className="text-foreground font-semibold">SEO blogs, website copy, scripts, and guest content</span> to build authority and trust.
      </>
    ),
    trustSignals: [
      { icon: Search, text: "SEO Driven Content Strategy" },
      { icon: TrendingUp, text: "Average 3x Organic Traffic Growth" },
      { icon: Award, text: "2,000+ Articles Delivered" },
      { icon: Shield, text: "100% Original Human Written Content" },
    ],
    credentials: ["300+ Brands Served", "4.9/5 Client Rating", "30+ Industries Covered"],
    formTitle: "Get a Free Content Audit",
    formDescription: "Bangalore's leading content writing agency will review your existing copy and outline a strategy to grow traffic and conversions.",
    formButtonText: "Get Free Content Audit",
  },
  source: "content_marketing",
  sections: {
    problems: {
      title: "The Content Challenges Businesses Commonly Face",
      description: "Many businesses invest in content creation but struggle with visibility, consistency, and sustainable organic growth they look for.",
    },
    services: {
      title: <>End-to-End Content Writing Services in Bangalore</>,
      description: "Strategic content solutions are created to improve visibility, build brand authority, and support long-term business growth.",
    },
    comparison: {
      title: "Traditional Agency vs TheSuper30",
      description: "Consistency, search intent, and conversion driven writing strategies for long-term organic growth is a must for modern content marketing.",
    },
    benefits: {
      eyebrow: "Why Brands Choose Us?",
      title: "Content Writing Company in Bangalore for High Ranking Content",
      description: "Strategic content creation focused on visibility, authority, audience engagement, and long-term business growth.",
    },
    industries: {
      eyebrow: "Industry Specialization",
      title: "Content Marketing Strategy For Every Industry",
      description: "Industry focused content marketing strategies created across 18+ business sectors. We understand your audience, market behavior, and customer expectations.",
    },
    whoIsThisFor: {
      title: "Is Content Marketing The Right Fit For Your Business?",
      description: "Designed for brands focused on long-term visibility, consistent organic growth, and stronger search presence.",
    },
  },
  problems: [
    { icon: Search, title: "Content That Doesn’t Rank", description: "You're publishing articles regularly, but they fail to reach strong visibility on Google search results." },
    { icon: Calendar, title: "Inconsistent Content Publishing", description: "Short periods of activity followed by long gaps reduce consistency and weaken overall search performance." },
    { icon: Target, title: "No Clear Content Strategy", description: "Content is created without keyword research, audience intent, or a structured SEO strategy." },
    { icon: Clock, title: "Limited Internal Resources", description: "Your team understands the value of content but lacks the time and capacity to produce it consistently." },
  ],
  services: [
    { icon: FileText, title: "Website Content", description: "Conversion focused homepage, service, and landing page content designed for visibility, engagement, and lead generation." },
    { icon: BookOpen, title: "SEO Blog Writing", description: "Long-form SEO articles are created with a keyword strategy to improve rankings and drive consistent organic traffic." },
    { icon: PenTool, title: "Script Writing", description: "Video scripts for reels, YouTube, advertisements, and explainers are designed to capture audience attention quickly." },
    { icon: Megaphone, title: "Guest Posting", description: "Authority driven backlink placements from trusted publishing platforms that strengthen rankings and domain credibility." },
    { icon: Layers, title: "Content Strategy", description: "Topic clusters, pillar content, and editorial planning aligned with audience intent and business objectives." },
    { icon: Bot, title: "AI Powered Research", description: "Advanced research and structured outlines, combined with expert human content writing, for higher quality output." },
    { icon: Search, title: "Keyword Research", description: "Search intent driven keyword analysis focused on identifying valuable and realistic ranking opportunities." },
    { icon: BarChart3, title: "Content Audits", description: "Detailed content reviews that identify weak pages, improve structure, and strengthen organic performance." },
  ],
  comparison: {
    traditional: [
      "Generic 500-word articles with a limited SEO strategy",
      "Random blog topics selected without keyword planning",
      "Irregular publishing schedules with long inactive gaps",
      "AI generated content with limited expertise or originality",
      "Missing internal linking and technical page optimization",
      "Generic copywriting with weak engagement and readability",
    ],
    super30: [
      "In depth long-form articles created for better search visibility",
      "Every topic planned using keyword research and audience intent",
      "Consistent monthly publishing calendars built for organic growth",
      "AI supported research combined with expert human writing",
      "Complete on-page SEO, including structure, links, schema, and metadata",
      "Conversational content writing focused on engagement and conversions",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Sustained Traffic Growth", description: "Every content asset is designed to generate consistent traffic and long-term search visibility." },
    { icon: Search, title: "Search Page Rankings", description: "Strategic keyword targeting helps your content appear where customers actively search online." },
    { icon: Award, title: "Established Brand Authority", description: "Consistent high quality content positions your business as a trusted industry expert." },
    { icon: Target, title: "Content Driven Lead Generation", description: "Strategic CTA and content pathways help convert readers into qualified leads." },
    { icon: Shield, title: "AI Detection & Plag Free Content", description: "Expert written content created with originality, clarity, and genuine industry understanding." },
    { icon: Calendar, title: "Consistent Content Publishing", description: "Structured editorial planning ensures reliable publishing schedules without content gaps or delays." },
    { icon: Users, title: "Audience Focused Growth", description: "Valuable content helps attract, engage, and retain your ideal customer audience." },
    { icon: Zap, title: "Reliable Delivery Timelines", description: "Fast content execution within 3-5 business days, efficient workflows, and consistent turnaround timelines." },
    { icon: Eye, title: "Professional Content Formatting", description: "Clear structure, readable layouts, optimized headings, and strong content presentation improve engagement." },
  ],
  process: [
    { icon: Search, title: "Audit & Research", description: "Audit existing content, research keywords and map search intent." },
    { icon: Layers, title: "Strategy & Calendar", description: "Topic clusters, pillar pages and a 90-day editorial calendar." },
    { icon: PenTool, title: "Write & Optimise", description: "Expert writers + on-page SEO + internal linking + schema." },
    { icon: BarChart3, title: "Publish & Measure", description: "CMS-ready delivery with monthly performance reporting." },
  ],
  whoIsThisFor: {
    forYou: [
      "You want sustainable organic traffic growth that improves consistently over months",
      "You understand content marketing value but need external content production support",
      "You need SEO optimized content that supports rankings, visibility, and conversions",
      "You're prepared to invest in consistent publishing for steady business growth",
    ],
    notForYou: [
      "You expect instant traffic results from publishing a single blog article",
      "You're searching only for low cost AI generated content without a strategy",
      "You expect overnight rankings without a proper SEO content foundation",
      "You prefer excessive revision cycles and constant content level micromanagement",
    ],
  },
  faq: getFaqs("content-marketing"),
  finalCTA: {
    headline: "Partner With a Content Writing Agency in Bangalore That Builds Organic Growth",
    description: "Get a free content audit and a strategic editorial roadmap from our experienced content marketing services in Bangalore, designed to improve visibility and sustainable growth.",
    buttonText: "Get Free Content Audit",
  },
};

const ContentMarketing = () => <ServicePageTemplate config={config} />;
export default ContentMarketing;
