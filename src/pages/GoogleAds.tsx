import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { Target, TrendingUp, BarChart3, DollarSign, Eye, Zap, Users, Shield, Search, MousePointerClick, LineChart, Megaphone, Bot, Layers, RefreshCw, Clock } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Google Ads Agency in Bangalore | PPC Service | Upto 10X ROAS",
    description: "High intent leads with optimized budget. PPC company in Bangalore running targeted PPC campaigns with quality traffic, high conversions & better ROAS",
    keywords: "AI google ads agency in bangalore, AI ppc services in bangalore, AI ppc company in bangalore, AI ppc agency in bangalore, google ads agency in bangalore, ppc services in bangalore, ppc company in bangalore, ppc agency in bangalore, google adwords management agency in bangalore",
    canonical: "https://www.thesuper30.ai/google-ads-agency-bangalore",
    serviceType: "Google Ads Management",
    ogTitle: "Every Rupee You Spend on Google Ads Should Work Harder.",
    ogDescription: "Targeted Google Ads & PPC that lower your cost per click and bring leads that convert. Let's talk!",
    twitterTitle: "Every Rupee You Spend on Google Ads Should Work Harder.",
    twitterDescription: "Targeted Google Ads & PPC that lower your cost per click and bring leads that convert. Let's talk!",
  },
  hero: {
    badgeIcon: Target,
    badgeText: "PPC Agency in Bangalore",
    headlineLine1: "Google Ads Agency in Bangalore",
    headlineLine2: "Achieving 10X ROAS",
    description: <>As a trusted <span className="text-foreground font-semibold">PPC company in Bangalore</span>, we manage targeted Google Ads and PPC campaigns that reduce cost per click and generate leads that convert. Every budget monitored, every campaign refined.</>,
    trustSignals: [
      { icon: TrendingUp, text: "Avg. 4.2x ROAS Across Campaigns" },
      { icon: BarChart3, text: "Live Campaign Dashboard Access" },
      { icon: DollarSign, text: "Transparent Budget Reporting" },
      { icon: Shield, text: "No Long-Term Lock-ins" },
    ],
    credentials: ["Google Partner Agency", "₹2Cr+ Ad Spend Managed", "300+ Campaigns Optimized"],
    formTitle: "Free Google Ads & PPC Audit",
    formDescription: "Share your website and our PPC agency in Bangalore will identify wasted spend and high-ROI opportunities.",
    formButtonText: "Get Free PPC Audit",
  },
  source: "google_ads",
  problems: [
    { icon: DollarSign, title: "Wasted Budget on Low-Intent Clicks", description: "Your ads attract visitors, not buyers. Budget drains without conversions." },
    { icon: Search, title: "Wrong Keywords, Wrong Targeting", description: "Targeting broad or irrelevant keywords results in your ads reaching users who never buy." },
    { icon: Eye, title: "No Clarity Into Campaign Results", description: "You are spending thousands, but cannot identify which campaigns actually generate revenue." },
    { icon: RefreshCw, title: "Inactive Campaign Management", description: "Your agency launched ad campaigns months ago and hasn't optimized them since. Performance declines daily." },
  ],
  services: [
    { icon: Search, title: "Search Ads", description: "Appear at the top of Google when customers actively search for your services." },
    { icon: Eye, title: "Display Ads", description: "Visual banner ad campaigns across leading websites to strengthen brand awareness." },
    { icon: MousePointerClick, title: "Shopping Campaigns", description: "Product listing ad campaigns with images, pricing and reviews for e-commerce stores." },
    { icon: Target, title: "Remarketing Campaigns", description: "Reconnect with visitors who left your website without completing a conversion." },
    { icon: Megaphone, title: "YouTube Ads", description: "Video ad campaigns on YouTube designed to engage audiences through compelling visual content." },
    { icon: LineChart, title: "Performance Max", description: "AI powered campaigns across Google channels focused on maximizing conversions efficiently." },
    { icon: Bot, title: "Automated Bidding", description: "Machine learning bidding strategies designed to maximize conversions at target CPA." },
    { icon: Layers, title: "Landing Page Optimization", description: "Conversion focused landing pages that transform ad clicks into qualified customers." },
  ],
  comparison: {
    traditional: [
      "Inactive ad campaigns that waste budget",
      "Generic keyword targeting without detailed research",
      "Monthly reporting with vanity metrics",
      "No landing page conversion optimization",
      "Hidden pricing and extended agreements",
      "Same strategy for every client",
    ],
    super30: [
      "Daily optimization with strategic bid adjustments",
      "Advanced keyword research with negative keyword filtering",
      "Live dashboard focused on revenue driven metrics",
      "Custom landing pages for every campaign",
      "Transparent pricing with flexible agreements",
      "Custom strategy aligned with your industry goals",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher ROAS", description: "Our average client's feedback has been 4.2x returns on advertising investment within 90 days." },
    { icon: DollarSign, title: "Lower CPC", description: "Strategic bidding and quality score optimization reduce your overall cost per click." },
    { icon: Target, title: "Precision Targeting", description: "Reach high intent audiences prepared to buy, and not just browse your website." },
    { icon: BarChart3, title: "Complete Transparency", description: "Monitor every advertising expense through our live performance reporting dashboard." },
    { icon: Zap, title: "Faster Lead Generation", description: "Begin receiving qualified inquiries within the initial week of campaign activation." },
    { icon: Shield, title: "Controlled Ad Spend", description: "Ongoing negative keyword filtering and placement exclusions safeguard your advertising budget." },
    { icon: Bot, title: "AI Driven Optimization", description: "Machine learning algorithms continuously enhance campaign efficiency and advertising performance." },
    { icon: Users, title: "Dedicated Account Support", description: "A dedicated point of contact who understands your business objectives thoroughly." },
    { icon: Clock, title: "Weekly Performance Reviews", description: "Scheduled strategy discussions review campaign performance and identify growth opportunities." },
  ],
  process: [
    { icon: Search, title: "Deep Audit", description: "We analyze your current campaigns, competitors, and market to find opportunities." },
    { icon: Target, title: "Strategy & Setup", description: "Custom campaign architecture with precise keyword targeting and ad copy." },
    { icon: Zap, title: "Launch & Optimize", description: "Go live and begin daily optimizations — bids, keywords, placements, and copy." },
    { icon: TrendingUp, title: "Scale & Grow", description: "Double down on winners, cut losers, and scale profitable campaigns." },
  ],
  whoIsThisFor: {
    forYouTitle: "Ideal for Businesses That",
    notForYouTitle: "Not Recommended for Businesses That",
    forYou: [
      "Want predictable lead generation and a stable monthly sales performance",
      "Maintain a monthly advertising budget starting from ₹30,000+",
      "Tired of agencies lacking campaign transparency and accountability",
      "Want live campaign insights and measurable ad campaign performance",
      "Need a strategic partner that manages your budget responsibly",
    ],
    notForYou: [
      "Want results from a ₹5,000 monthly budget and expect miracles",
      "Are not willing to test and improve ad creatives regularly",
      "Expect overnight growth without allowing time for campaign optimization",
      "Focus only on low pricing instead of long-term business outcomes",
    ],
  },
  faq: getFaqs("google-ads"),
  sections: {
    problems: {
      eyebrow: "The Challenge Most Businesses Face",
      title: <>The Challenge Most Businesses Face In <span className="text-brand">Google Ads</span></>,
      description: "Does this sound familiar? You are not alone.",
    },
    services: {
      eyebrow: "What We Offer",
      title: <>Google Ads Services <span className="text-brand">That We Offer</span></>,
      description: "Strategic campaigns managed by an AI PPC agency in Bangalore are designed to increase qualified traffic, improve conversion rates, and maximize return on every ad budget that is spent.",
      ctaText: "Enquire Now",
    },
    comparison: {
      eyebrow: "The Difference",
      title: <>Traditional Agency <span className="text-brand">vs. TheSuper 30</span></>,
    },
    benefits: {
      eyebrow: "Why Brands Choose Us?",
      title: <>Why Do Businesses Prefer Our <span className="text-brand">PPC Company in Bangalore?</span></>,
      description: "Google Ads management agency in Bangalore designed to increase qualified leads, improve campaign efficiency, and maximize measurable business growth.",
    },
    industries: {
      eyebrow: "INDUSTRY EXPERTISE",
      title: <>Google Ads Marketing Strategy For <span className="text-brand">Every Industry</span></>,
      description: "Industry specific marketing strategies delivering measurable growth across 18+ industry sectors. We understand your audience, competition and market behaviour.",
    },
    whoIsThisFor: {
      eyebrow: "Is This Right For You?",
      title: <>Is Your Business Ready for <span className="text-brand">Scalable Growth?</span></>,
    },
  },
  finalCTA: {
    headline: "Hire from Bangalore's Leading PPC agency in Bangalore",
    description: "Get a complimentary PPC audit from our AI Google Ads agency in Bangalore and uncover untapped revenue opportunities across your advertising campaigns.",
    buttonText: "Get Free PPC Audit Now",
  },
};

const GoogleAds = () => <ServicePageTemplate config={config} />;
export default GoogleAds;
