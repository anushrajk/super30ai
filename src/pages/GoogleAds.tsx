import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { Target, TrendingUp, BarChart3, DollarSign, Eye, Zap, Users, Shield, Search, MousePointerClick, LineChart, Megaphone, Bot, Layers, RefreshCw, Clock } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Google Ads Agency in Bangalore | PPC Service | Upto 10X ROAS",
    description: "High intent leads with optimized budget. PPC company in Bangalore running targeted PPC campaigns with quality traffic, high conversions & better ROAS",
    keywords: "google ads agency in bangalore, ppc services in bangalore, ppc company in bangalore, ppc agency in bangalore, google adwords management agency in bangalore",
    canonical: "https://www.thesuper30.ai/google-ads-agency-bangalore",
    serviceType: "Google Ads Management",
    ogTitle: "Every Rupee You Spend on Google Ads Should Work Harder.",
    ogDescription: "Targeted Google Ads & PPC that lower your cost per click and bring leads that convert. Let's talk!",
    twitterTitle: "Every Rupee You Spend on Google Ads Should Work Harder.",
    twitterDescription: "Targeted Google Ads & PPC that lower your cost per click and bring leads that convert. Let's talk!",
  },
  hero: {
    badgeIcon: Target,
    badgeText: "Google Ads Experts",
    headlineLine1: "Stop Wasting Money on",
    headlineLine2: "Underperforming Google Ads",
    description: <>We build and manage high-ROI Google Ads campaigns that bring <span className="text-foreground font-semibold">qualified leads at the lowest possible cost</span>. Every rupee tracked, every click optimized.</>,
    trustSignals: [
      { icon: TrendingUp, text: "Avg. 4.2x ROAS Across Clients" },
      { icon: BarChart3, text: "Real-Time Dashboard Access" },
      { icon: DollarSign, text: "Transparent Spend Reports" },
      { icon: Shield, text: "No Long-Term Lock-ins" },
    ],
    credentials: ["Google Partner Agency", "₹2Cr+ Ad Spend Managed", "300+ Campaigns Optimized"],
    formTitle: "Get Your Free Google Ads Audit",
    formDescription: "Share your website and our PPC experts will identify wasted spend and high-ROI opportunities.",
    formButtonText: "Get Free Audit",
  },
  source: "google_ads",
  problems: [
    { icon: DollarSign, title: "Burning Budget on Irrelevant Clicks", description: "Your ads attract browsers, not buyers. Money drains without conversions." },
    { icon: Search, title: "Wrong Keywords, Wrong Audience", description: "Targeting broad or irrelevant keywords means your ads reach people who'll never buy." },
    { icon: Eye, title: "No Visibility Into What's Working", description: "You're spending thousands but can't tell which campaigns actually drive revenue." },
    { icon: RefreshCw, title: "Set-and-Forget Campaigns", description: "Your agency launched ads months ago and hasn't touched them since. Performance decays daily." },
  ],
  services: [
    { icon: Search, title: "Search Ads", description: "Appear at the top of Google when customers search for your services." },
    { icon: Eye, title: "Display Ads", description: "Visual banner ads across millions of websites to build brand awareness." },
    { icon: MousePointerClick, title: "Shopping Ads", description: "Product listing ads with images, prices & reviews for e-commerce stores." },
    { icon: Target, title: "Remarketing", description: "Re-engage visitors who left your site without converting." },
    { icon: Megaphone, title: "YouTube Ads", description: "Video ads on YouTube to reach audiences with engaging visual content." },
    { icon: LineChart, title: "Performance Max", description: "AI-powered campaigns across all Google channels for maximum conversions." },
    { icon: Bot, title: "Smart Bidding", description: "Machine-learning bid strategies to maximize conversions at target CPA." },
    { icon: Layers, title: "Landing Page Optimization", description: "Conversion-focused landing pages that turn ad clicks into customers." },
  ],
  comparison: {
    traditional: [
      "Set-and-forget campaigns that waste budget",
      "Generic keyword targeting with no research",
      "Monthly reports with vanity metrics",
      "No landing page optimization",
      "Hidden fees and long contracts",
      "Same strategy for every client",
    ],
    super30: [
      "Daily optimization and bid adjustments",
      "Deep keyword research with negative keyword mining",
      "Real-time dashboard with revenue-focused metrics",
      "Custom landing pages for each campaign",
      "Transparent pricing with no lock-ins",
      "Custom strategy based on your industry & goals",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher ROAS", description: "Our average client sees 4.2x return on ad spend within 90 days." },
    { icon: DollarSign, title: "Lower CPC", description: "Strategic bidding and quality score optimization reduce your cost per click." },
    { icon: Target, title: "Better Targeting", description: "Reach the exact audience that's ready to buy, not just browse." },
    { icon: BarChart3, title: "Full Transparency", description: "See exactly where every rupee goes with our real-time reporting dashboard." },
    { icon: Zap, title: "Fast Results", description: "Start seeing qualified leads within the first week of campaign launch." },
    { icon: Shield, title: "No Wasted Spend", description: "Continuous negative keyword mining and placement exclusions protect your budget." },
    { icon: Bot, title: "AI-Powered Optimization", description: "Machine learning algorithms continuously improve campaign performance." },
    { icon: Users, title: "Dedicated Account Manager", description: "A single point of contact who knows your business inside and out." },
    { icon: Clock, title: "Weekly Strategy Calls", description: "Regular check-ins to review performance and plan optimizations." },
  ],
  process: [
    { icon: Search, title: "Deep Audit", description: "We analyze your current campaigns, competitors, and market to find opportunities." },
    { icon: Target, title: "Strategy & Setup", description: "Custom campaign architecture with precise keyword targeting and ad copy." },
    { icon: Zap, title: "Launch & Optimize", description: "Go live and begin daily optimizations — bids, keywords, placements, and copy." },
    { icon: TrendingUp, title: "Scale & Grow", description: "Double down on winners, cut losers, and scale profitable campaigns." },
  ],
  whoIsThisFor: {
    forYou: [
      "You want to generate leads or sales predictably every month",
      "You have a minimum monthly ad budget of ₹30,000+",
      "You're tired of agencies that don't explain where your money goes",
      "You want real-time visibility into campaign performance",
      "You need a partner who treats your budget like their own",
    ],
    notForYou: [
      "You want to run ads for ₹5,000/month and expect miracles",
      "You're not willing to test and iterate on ad creatives",
      "You expect overnight results without patience for optimization",
      "You're looking for the cheapest agency, not the best results",
    ],
  },
  faq: [
    { question: "How much should I spend on Google Ads?", answer: "We recommend a minimum of ₹30,000/month for meaningful results. The ideal budget depends on your industry, competition, and goals. We'll help you determine the right amount during our free audit." },
    { question: "How quickly will I see results?", answer: "Most clients start seeing qualified leads within the first 1-2 weeks. However, campaigns typically reach peak performance after 60-90 days of optimization." },
    { question: "Do you charge a percentage of ad spend?", answer: "We charge a flat management fee, not a percentage. This means we have no incentive to inflate your ad spend — only to maximize your results." },
    { question: "Will I have access to my Google Ads account?", answer: "Absolutely. You own your account, your data, and your campaigns. We work in your account with full transparency." },
    { question: "What if my campaigns aren't performing?", answer: "We continuously optimize based on data. If something isn't working, we pivot quickly. Plus, there are no long-term contracts — you stay because of results." },
    { question: "Do you create the ad copy and landing pages?", answer: "Yes. Our team writes high-converting ad copy and builds custom landing pages designed to maximize your conversion rate." },
    { question: "Can you manage campaigns for e-commerce stores?", answer: "Yes. We specialize in Google Shopping Ads, Performance Max, and search campaigns for e-commerce brands of all sizes." },
    { question: "How do you report on performance?", answer: "You get a real-time dashboard plus weekly written reports with actionable insights — not just vanity metrics." },
  ],
  finalCTA: {
    headline: "Ready to Get More Leads for Less?",
    description: "Get a free Google Ads audit and discover how much revenue you're leaving on the table.",
    buttonText: "Get Free Audit",
  },
};

const GoogleAds = () => <ServicePageTemplate config={config} />;
export default GoogleAds;
