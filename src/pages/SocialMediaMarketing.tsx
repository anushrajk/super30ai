import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { Megaphone, TrendingUp, Users, Target, DollarSign, Instagram, Facebook, Linkedin, Youtube, BarChart3, Zap, Eye, Sparkles, Rocket, MessageCircle, Calendar, Shield, Globe, Clock, Heart } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Social Media Marketing Agency in Bangalore | SMM Services",
    description: "Grow your brand with a social media marketing company in Bangalore. We run Meta Ads, Instagram & LinkedIn campaigns that drive real engagement & ROI.",
    keywords: "AI social media marketing company in bangalore, AI social media marketing agency in bangalore, AI social media marketing services in bangalore, social media marketing company in bangalore, social media marketing agency in bangalore, social media marketing services in bangalore, social media agency in bangalore, social media advertising company in bangalore, facebook marketing agency in bangalore, linkedin marketing in bangalore",
    canonical: "https://www.thesuper30.ai/social-media-marketing-agency-bangalore",
    serviceType: "Social Media Marketing",
    ogTitle: "Likes Don't Pay Bills. But Our Social Media Strategy Does.",
    ogDescription: "Meta Ads to LinkedIn. We turn followers into real customers. Let's make social media work for you!",
    twitterTitle: "Likes Don't Pay Bills. But Our Social Media Strategy Does.",
    twitterDescription: "Meta Ads to LinkedIn. We turn followers into real customers. Let's make social media work for you!",
  },
  hero: {
    badgeIcon: Megaphone,
    badgeText: "AI Social Media Marketing Company in Bangalore",
    headlineLine1: "Social Media Marketing Agency in Bangalore",
    headlineLine2: "To Scale Your Digital Presence",
    description: <>End-to-end <span className="text-foreground font-semibold">social media marketing services in Bangalore</span> across Instagram, Facebook, LinkedIn, and YouTube. Meta Ads and LinkedIn campaigns targeted on real engagement, qualified leads, and measurable revenue growth.</>,
    trustSignals: [
      { icon: TrendingUp, text: "Average 4x Engagement Growth" },
      { icon: Users, text: "Organic and Paid Campaigns" },
      { icon: Target, text: "ROI Driven Campaign Strategy" },
      { icon: BarChart3, text: "Transparent Campaign Reporting" },
    ],
    credentials: ["300+ Brands Managed", "Multi-Platform Expertise", "ROI-Focused Strategy"],
    formTitle: "Get Your Free Social Media Audit",
    formDescription: "Share your handles and we'll send back a strategy with quick wins to grow your brand.",
    formButtonText: "Enquire Now",
  },
  source: "social_media_marketing",
  problems: [
    { icon: Eye, title: "Posting daily, But No Reach", description: "You are posting consistently, but platform algorithms are limiting your visibility. Engagement levels remain low." },
    { icon: Heart, title: "Followers Are Not Buying", description: "Your follower count appears strong, but they are not generating website visits, qualified leads, or sales." },
    { icon: DollarSign, title: "Paid Ads Draining Budget", description: "You are running boosted campaigns and ads, but ROI remains unclear, and performance remains inconsistent." },
    { icon: MessageCircle, title: "No Strategy, Only Random Content", description: "Without a content framework, posting schedule, or conversion funnel, every post feels disconnected from business goals." },
  ],
  services: [
    { icon: Calendar, title: "Content Calendar Planning & Scheduling", description: "Monthly content themes, campaign ideas, and publishing schedules designed around your audience and business objectives." },
    { icon: Sparkles, title: "Creative & Reel Production", description: "Static creatives, carousel designs, reels, and scroll stopping content that are created to capture audience attention instantly." },
    { icon: Target, title: "Paid Social Ads", description: "Meta, LinkedIn, and YouTube ad campaigns with audience targeting, A/B testing, and conversion tracking." },
    { icon: MessageCircle, title: "Community Management", description: "Daily responses, direct messages, and audience engagement that are designed to build a loyal and active brand community." },
    { icon: Users, title: "Influencer & UGC Campaigns", description: "Verified creator partnerships and UGC collaborations that deliver authentic and trusted brand visibility." },
    { icon: Rocket, title: "Launch & Growth Campaigns", description: "Product launches, promotional campaigns, and seasonal activations were created to achieve greater reach and higher conversions." },
    { icon: BarChart3, title: "Analytics & Performance Reporting", description: "Monthly reporting dashboards measuring reach, engagement, leads, and revenue with meaningful business insights." },
    { icon: Zap, title: "Platform Performance Optimization", description: "Profile, bio, and link optimization designed to convert profile visits into followers, inquiries, and leads." },
  ],
  comparison: {
    traditional: [
      "Random posting without strategy or content pillars",
      "Reused content distributed across every platform",
      "Reports focused only on likes and follower counts",
      "No paid campaigns or unmanaged boosted ads",
      "Delayed responses, ignored DMs, inactive communities",
      "No alignment between social media and revenue goals",
    ],
    super30: [
      "Documented strategy with content pillars and measurable KPIs",
      "Platform specific creatives for IG, FB, LinkedIn, and YT",
      "Reports connected to leads, sales, and pipeline growth",
      "Managed paid ad campaigns with weekly optimization",
      "Active community engagement with faster response management",
      "Social funnels aligned with measurable business outcomes",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher Audience Engagement", description: "Strategic content and active community management improve engagement levels within the first 90 days." },
    { icon: Users, title: "Qualified Audience Growth", description: "Attract relevant and targeted followers aligned with your ideal customer profile and business goals." },
    { icon: DollarSign, title: "Improved Ad ROI", description: "Well structured paid campaigns with creative testing consistently deliver 2-4x better ROAS returns." },
    { icon: Globe, title: "Consistent Brand Identity", description: "Unified visuals and messaging across every platform create stronger brand recognition and recall." },
    { icon: Sparkles, title: "Scroll Stopping Creatives", description: "Reels, carousel creatives, and short videos developed by our in-house creative design specialists and editors." },
    { icon: Target, title: "Conversion Focused Content", description: "Awareness, consideration, and conversion content aligned with every stage of the customer journey." },
    { icon: Clock, title: "More Time for Your Business Growth", description: "We manage strategy, creative production, and publishing while you focus on business operations." },
    { icon: Shield, title: "Brand Reputation Management", description: "Proactive review management and brand monitoring are designed to strengthen audience trust and perception towards your brand." },
    { icon: BarChart3, title: "Full Funnel Business Reporting", description: "Monthly performance reports tracking leads, advertising ROI, and pipeline contribution with clear business insights." },
  ],
  process: [
    { icon: Eye, title: "Audit & Discovery", description: "Deep audit of your current social, competitors, audience and brand voice." },
    { icon: Target, title: "Strategy & Calendar", description: "Custom strategy, content pillars and 30-day calendar approved by you." },
    { icon: Zap, title: "Create & Publish", description: "Daily content production, scheduling and publishing across chosen platforms." },
    { icon: TrendingUp, title: "Optimize & Report", description: "Weekly performance review, creative testing and monthly reporting calls." },
  ],
  whoIsThisFor: {
    forYou: [
      "You want a structured social media strategy, not random content",
      "You are prepared to invest in consistent monthly content creation",
      "You want both organic visibility and paid advertising growth",
      "You need engagement and conversions instead of vanity metrics",
      "You want a long-term marketing partner instead of a freelancer",
    ],
    notForYou: [
      "You expect instant viral results within the first week",
      "You are not willing to provide product or brand resources",
      "You only focus on follower counts without business outcomes",
      "You want the cheapest cost option available in the market",
    ],
  },
  faq: getFaqs("social-media-marketing"),
  sections: {
    problems: {
      eyebrow: "The Problem",
      title: <>The Challenges Most Businesses Face In <span className="text-brand">Social Media Marketing</span></>,
      description: "Does this sound familiar? You are not alone.",
    },
    services: {
      eyebrow: "What We Offer",
      title: <>Social Media Growth Services <span className="text-brand">That We Offer</span></>,
      description: "SMO strategies from a specialised AI social media marketing agency in Bangalore, designed for overall growth in audience engagement, content visibility, brand authority, and conversion growth across digital platforms.",
      ctaText: "Enquire Now",
    },
    comparison: {
      eyebrow: "The Difference",
      title: <>Traditional Agency <span className="text-brand">vs. TheSuper 30</span></>,
    },
    benefits: {
      eyebrow: "Why Brands Choose Us?",
      title: <>Why Growing Brands Prefer <span className="text-brand">To Work With Us?</span></>,
      description: "Performance focused strategies from an AI social media marketing agency in Bangalore, designed to improve engagement, audience quality, brand visibility, and measurable business growth consistently.",
    },
    industries: {
      eyebrow: "Industry Expertise",
      title: <>Social Media Marketing Strategy for <span className="text-brand">Every Industry</span></>,
      description: "Industry focused strategies that are making a difference in 18+ sectors. We know your audience, market and business environment.",
    },
    process: {
      title: <>Our Proven <span className="text-brand">Process</span></>,
    },
    whoIsThisFor: {
      eyebrow: "Is This Right For You?",
      title: <>Is Our AI Social Media Marketing Services in Bangalore the <span className="text-brand">Right Fit for You?</span></>,
    },
  },
  finalCTA: {
    headline: "Ready to turn your social media into a revenue channel?",
    description: "Get a free social media review and a custom 90-day growth strategy roadmap from an experienced social media marketing agency in Bangalore, designed specifically for your brand.",
    buttonText: "Get Your Free Social Media Audit",
  },
};

const SocialMediaMarketing = () => <ServicePageTemplate config={config} />;
export default SocialMediaMarketing;
