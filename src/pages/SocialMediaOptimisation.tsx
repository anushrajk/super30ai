import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { Share2, TrendingUp, BarChart3, Users, Zap, Hash, Heart, MessageSquare, Eye, Target, Calendar, Bot, Shield, Globe, Clock, Sparkles } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Social Media Optimization Services in Bangalore | SMO",
    description: "Build a stronger social presence with our SMO company in Bangalore. From reels and UGC to influencer marketing, we grow your brand organically. Let's Talk!",
    keywords: "AI social media optimization services in bangalore, AI smo company in bangalore, AI social media optimization company in bangalore, social media optimization services in bangalore, smo company in bangalore, social media optimization company in bangalore, influencer marketing services in bangalore, social content creation in bangalore",
    canonical: "https://www.thesuper30.ai/social-media-optimization-services-bangalore",
    serviceType: "Social Media Optimisation",
    ogTitle: "Your Social Media Presence Speaks Before You Do. Own It.",
    ogDescription: "Reels, UGC & influencer marketing that grow your brand organically. Let's build a social presence!",
    twitterTitle: "Your Social Media Presence Speaks Before You Do. Own It.",
    twitterDescription: "Reels, UGC & influencer marketing that grow your brand organically. Let's build a social presence!",
  },
  hero: {
    badgeIcon: Share2,
    badgeText: "AI SMO Company in Bangalore",
    headlineLine1: "Social Media Optimization Services",
    headlineLine2: "in Bangalore for Brand Visibility",
    description: <>Our <span className="text-foreground font-semibold">Social Media company in Bangalore</span> builds your brand organically through reels, UGC, creator partnerships, and social content strategies without depending solely on paid ads or promotions.</>,
    trustSignals: [
      { icon: TrendingUp, text: "Avg. 3x Audience Engagement" },
      { icon: Users, text: "Organic Follower Growth Strategies" },
      { icon: BarChart3, text: "Data Driven Content Planning" },
      { icon: Shield, text: "Platform Focused Optimization" },
    ],
    credentials: ["300+ Brands Optimized", "Multi-Platform Expertise", "Content-First Approach"],
    formTitle: "Free SMO Audit in Bangalore",
    formDescription: "Share your social profiles and our social media optimization company in Bangalore will identify quick wins to boost organic reach.",
    formButtonText: "Enquire Now",
  },
  source: "social_media_optimisation",
  problems: [
    { icon: Eye, title: "Limited Reach Despite Daily Posting", description: "Your content goes live regularly, but platform algorithms significantly reduce overall audience visibility." },
    { icon: Heart, title: "Low Engagement Despite Quality Content", description: "Your creatives look great, but reactions, shares, and engagement remain consistently low." },
    { icon: Hash, title: "No Social Search Optimization Strategy", description: "Without optimized keywords, captions, and hashtags, your content misses valuable organic discovery opportunities." },
    { icon: Users, title: "Followers Aren't Converting", description: "Your audience exists, but they are not converting into inquiries, purchases, or business growth." },
  ],
  services: [
    { icon: Globe, title: "Profile Optimization", description: "Complete refinement of bios, links, CTAs, and branding consistency across all major platforms." },
    { icon: Hash, title: "Hashtag Strategy", description: "Research driven hashtag frameworks designed to improve visibility and audience discovery within your category." },
    { icon: Calendar, title: "Content Calendar", description: "Strategic scheduling and posting calendars aligned with audience behavior and platform engagement activity patterns." },
    { icon: Eye, title: "Algorithm Optimization", description: "Content structure and publishing strategies for a stronger reach across social media platform algorithms." },
    { icon: MessageSquare, title: "Engagement Strategy", description: "Community interaction systems designed to consistently improve comments, shares, saves, and audience participation." },
    { icon: BarChart3, title: "Performance Analytics & Reports", description: "Monthly performance tracking reports with actionable recommendations focused on measurable content improvement opportunities." },
    { icon: Target, title: "Audience Targeting", description: "Identify and refine audience segments for stronger engagement, relevance, and better conversion potential." },
    { icon: Bot, title: "AI Content Insights", description: "AI powered analysis of content trends, audience behavior, and engagement performance opportunities." },
  ],
  comparison: {
    traditional: [
      "Random posting with limited content strategy",
      "Same approach across all platforms",
      "Follower metrics prioritized over business growth",
      "No hashtag or keyword research for search optimization",
      "Irregular posting and no proper scheduling",
      "Minimal audience interaction and engagement",
    ],
    super30: [
      "Data driven content strategy with measurable objectives",
      "Platform specific optimization for every social media channel",
      "Strong focus on reach, engagement rate, and conversions",
      "Research driven hashtag and keyword strategy",
      "Strategic content calendar backed by audience insights",
      "Active audience engagement and community management",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Improved Organic Visibility", description: "Optimized profiles and content structure designed to increase 3-5x audience reach across social media platforms." },
    { icon: Heart, title: "Better Audience Engagement", description: "Strategic CTAs and community engagement are designed to consistently improve likes, comments, and audience participation." },
    { icon: Users, title: "Quality Followers", description: "Attract genuine followers who are naturally actively interested in your products, services, and brand positioning." },
    { icon: Globe, title: "Consistent Brand Identity", description: "Unified brand messaging and visual consistency were maintained across all major social media platforms." },
    { icon: Zap, title: "Algorithm Optimized Content", description: "Content formats and publishing timing are crafted specifically for stronger visibility within social platform algorithms." },
    { icon: Target, title: "Targeted Audience Growth", description: "Reach highly relevant demographics and interest groups aligned closely with your ideal customer profile." },
    { icon: Clock, title: "More Time for Operations", description: "We manage optimization, publishing, and strategy execution while you focus on business growth priorities." },
    { icon: Sparkles, title: "Market Trend Insights", description: "Stay updated on social media trends with proactive recommendations and audience specific content strategies." },
    { icon: BarChart3, title: "Performance Driven Reporting", description: "Clear KPI tracking and monthly reports focused on measurable engagement, visibility, and business impact metrics." },
  ],
  process: [
    { icon: Eye, title: "Audit & Analysis", description: "Deep dive into your current profiles, content, audience, and competitors." },
    { icon: Target, title: "Strategy Blueprint", description: "Custom SMO strategy with platform-specific tactics and content pillars." },
    { icon: Zap, title: "Optimize & Execute", description: "Implement optimizations, launch content calendar, and begin engagement." },
    { icon: TrendingUp, title: "Monitor & Iterate", description: "Track performance, analyze data, and continuously refine the strategy." },
  ],
  whoIsThisFor: {
    forYouTitle: "Perfect for Your Business If...",
    notForYouTitle: "Not the Right Fit If...",
    forYou: [
      "Your social media presence lacks consistent audience growth",
      "You want stronger organic visibility without depending on paid promotions",
      "Your brand needs structured content and a hashtag strategy",
      "You want consistent visibility across multiple social platforms",
      "You are ready to invest in sustainable organic brand growth",
    ],
    notForYou: [
      "You believe in going viral overnight without consistency",
      "You're not willing to create or approve content regularly",
      "You expect rapid follower growth within the first week",
      "You only value vanity metrics instead of business outcomes",
    ],
  },
  faq: getFaqs("social-media-optimisation"),
  sections: {
    problems: {
      eyebrow: "The Problem",
      title: <>The Challenges Most <span className="text-brand">Growing Businesses Face</span></>,
      description: "Scaling consistently on social platforms is harder than it looks without the right strategy, visibility, and audience engagement.",
    },
    services: {
      eyebrow: "What We Offer",
      title: <>Smart Social Media Growth Solutions <span className="text-brand">That We Offer</span></>,
      description: "Platform focused optimization strategies designed to improve visibility, engagement, audience growth, and brand consistency across social media channels.",
      ctaText: "Enquire Now",
    },
    comparison: {
      eyebrow: "Why Businesses Switch?",
      title: <>Traditional Agency <span className="text-brand">vs TheSuper 30</span></>,
      description: "See how strategic social media optimization and social content creation in Bangalore deliver stronger engagement, audience quality, and measurable business visibility compared to outdated agency execution.",
    },
    benefits: {
      eyebrow: "Why Brands Choose Us?",
      title: <>Why Brands Choose Our <span className="text-brand">AI Social Media Optimization Company in Bangalore?</span></>,
      description: "Social media optimization strategies are designed to improve visibility, engagement, audience quality, and long-term brand growth across all digital platforms.",
    },
    industries: {
      eyebrow: "Industry Expertise",
      title: <>SMO Marketing Strategy for <span className="text-brand">Every Industry</span></>,
      description: "Industry specific marketing strategies tailored for diverse business categories, audience behavior, and platform specific growth opportunities across sectors.",
    },
    whoIsThisFor: {
      eyebrow: "Audience Fit",
      title: <>Is This the <span className="text-brand">Right Fit For Your Business?</span></>,
    },
  },
  finalCTA: {
    eyebrow: "Ready to Grow Organically",
    headline: "Work with the trusted SMO Company in Bangalore To Scale Your Business",
    description: "Get a free audit from our AI social media optimization services in Bangalore and uncover AI-powered strategic opportunities to improve reach, engagement, audience visibility, and brand influence.",
    buttonText: "Get Your Free SMO Audit",
  },
};

const SocialMediaOptimisation = () => <ServicePageTemplate config={config} />;
export default SocialMediaOptimisation;
