import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { Share2, TrendingUp, BarChart3, Users, Zap, Hash, Heart, MessageSquare, Eye, Target, Calendar, Bot, Shield, Globe, Clock, Sparkles } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Social Media Optimization Services in Bangalore | SMO",
    description: "Build a stronger social presence with our SMO company in Bangalore. From reels and UGC to influencer marketing, we grow your brand organically. Let's Talk!",
    keywords: "AI social media optimization services in bangalore, AI smo company in bangalore, AI social media optimization company in bangalore, social media optimization services in bangalore, smo company in bangalore, social media optimization company in bangalore, influencer marketing services in bangalore, social content creation in bangalore",
    canonical: "https://super30ai.lovable.app/social-media-optimization-services-bangalore",
    serviceType: "Social Media Optimisation",
    ogTitle: "Your Social Media Presence Speaks Before You Do. Own It.",
    ogDescription: "Reels, UGC & influencer marketing that grow your brand organically. Let's build a social presence!",
    twitterTitle: "Your Social Media Presence Speaks Before You Do. Own It.",
    twitterDescription: "Reels, UGC & influencer marketing that grow your brand organically. Let's build a social presence!",
  },
  hero: {
    badgeIcon: Share2,
    badgeText: "SMO Company in Bangalore",
    headlineLine1: "Social Media Optimization Services",
    headlineLine2: "in Bangalore — Own Your Presence",
    description: <>Our <span className="text-foreground font-semibold">SMO company in Bangalore</span> grows your brand organically with reels, UGC, influencer marketing and social content creation — without relying on paid ads.</>,
    trustSignals: [
      { icon: TrendingUp, text: "Avg. 3x Engagement Increase" },
      { icon: Users, text: "Organic Follower Growth Strategies" },
      { icon: BarChart3, text: "Data-Driven Content Planning" },
      { icon: Shield, text: "Platform-Specific Optimization" },
    ],
    credentials: ["300+ Brands Optimized", "Multi-Platform Expertise", "Content-First Approach"],
    formTitle: "Free SMO Audit in Bangalore",
    formDescription: "Share your social profiles and our social media optimization company in Bangalore will identify quick wins to boost organic reach.",
    formButtonText: "Get Free SMO Audit",
  },
  source: "social_media_optimisation",
  problems: [
    { icon: Eye, title: "Posting Consistently but No Reach", description: "You're creating content daily but the algorithm buries your posts. Barely anyone sees them." },
    { icon: Heart, title: "Low Engagement Despite Good Content", description: "Your content looks great but likes, comments, and shares are disappointingly low." },
    { icon: Hash, title: "No Hashtag or SEO Strategy", description: "Without optimized hashtags, keywords, and descriptions, your content is invisible to new audiences." },
    { icon: Users, title: "Followers Aren't Converting", description: "You have followers but they're not visiting your website, calling, or buying." },
  ],
  services: [
    { icon: Globe, title: "Profile Optimization", description: "Complete overhaul of bios, links, CTAs, and branding across all platforms." },
    { icon: Hash, title: "Hashtag Strategy", description: "Research-backed hashtag sets that maximize discoverability for your niche." },
    { icon: Calendar, title: "Content Calendar", description: "Strategic posting schedule aligned with peak audience activity times." },
    { icon: Eye, title: "Algorithm Optimization", description: "Content formatting and timing strategies that work with platform algorithms." },
    { icon: MessageSquare, title: "Engagement Strategy", description: "Community management playbooks to boost comments, shares, and saves." },
    { icon: BarChart3, title: "Analytics & Reporting", description: "Monthly performance reports with actionable insights for improvement." },
    { icon: Target, title: "Audience Targeting", description: "Define and refine your ideal audience personas for maximum relevance." },
    { icon: Bot, title: "AI Content Insights", description: "AI-powered analysis of trending topics and content performance patterns." },
  ],
  comparison: {
    traditional: [
      "Post and pray — no strategy behind content",
      "Same approach across all platforms",
      "Vanity metrics like follower count",
      "No hashtag research or SEO optimization",
      "Inconsistent posting schedule",
      "Ignore comments and community building",
    ],
    super30: [
      "Data-driven content strategy with clear goals",
      "Platform-specific optimization (IG, LinkedIn, FB, X)",
      "Focus on reach, engagement rate & conversions",
      "Research-backed hashtag and keyword strategy",
      "Strategic posting calendar based on audience data",
      "Active community management and engagement",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher Organic Reach", description: "Optimized profiles and content format get you seen by 3-5x more people." },
    { icon: Heart, title: "Better Engagement", description: "Strategic CTAs and community management boost likes, comments, and shares." },
    { icon: Users, title: "Quality Followers", description: "Attract followers who are genuinely interested in your products or services." },
    { icon: Globe, title: "Brand Consistency", description: "Unified brand voice and visual identity across every platform." },
    { icon: Zap, title: "Algorithm-Friendly Content", description: "Content formats and timing optimized for each platform's algorithm." },
    { icon: Target, title: "Targeted Growth", description: "Reach the exact demographics and interests that match your ideal customer." },
    { icon: Clock, title: "Save Time", description: "We handle strategy and optimization so you can focus on running your business." },
    { icon: Sparkles, title: "Trend Awareness", description: "Stay ahead of social media trends with proactive content recommendations." },
    { icon: BarChart3, title: "Measurable Results", description: "Clear KPIs and monthly reports showing real business impact." },
  ],
  process: [
    { icon: Eye, title: "Audit & Analysis", description: "Deep dive into your current profiles, content, audience, and competitors." },
    { icon: Target, title: "Strategy Blueprint", description: "Custom SMO strategy with platform-specific tactics and content pillars." },
    { icon: Zap, title: "Optimize & Execute", description: "Implement optimizations, launch content calendar, and begin engagement." },
    { icon: TrendingUp, title: "Monitor & Iterate", description: "Track performance, analyze data, and continuously refine the strategy." },
  ],
  whoIsThisFor: {
    forYou: [
      "You're posting on social media but not seeing growth",
      "You want to build organic reach without relying on paid ads",
      "You need a proper content and hashtag strategy",
      "You want consistent brand presence across platforms",
      "You're ready to invest in long-term organic growth",
    ],
    notForYou: [
      "You want overnight viral results",
      "You're not willing to create or approve content regularly",
      "You expect thousands of followers in the first week",
      "You only care about vanity metrics, not business results",
    ],
  },
  faq: getFaqs("social-media-optimisation"),
  finalCTA: {
    headline: "Partner with the Best SMO Company in Bangalore",
    description: "Get a free audit from our social media optimization services in Bangalore and discover untapped opportunities to grow reach, engagement and influence.",
    buttonText: "Get Free SMO Audit",
  },
};

const SocialMediaOptimisation = () => <ServicePageTemplate config={config} />;
export default SocialMediaOptimisation;
