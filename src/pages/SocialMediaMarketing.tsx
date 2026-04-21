import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { Megaphone, TrendingUp, Users, Target, DollarSign, Instagram, Facebook, Linkedin, Youtube, BarChart3, Zap, Eye, Sparkles, Rocket, MessageCircle, Calendar, Shield, Globe, Clock, Heart } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Social Media Marketing Agency in Bangalore | SMM Services",
    description: "Grow your brand with a social media marketing company in Bangalore. We run Meta Ads, Instagram & LinkedIn campaigns that drive real engagement & ROI.",
    keywords: "social media marketing company bangalore, social media marketing agency bangalore, social media marketing services bangalore, facebook marketing agency bangalore, social media agency bangalore, social media advertising company in bangalore, linkedin marketing in bangalore",
    canonical: "https://www.thesuper30.ai/social-media-marketing-agency-bangalore",
    serviceType: "Social Media Marketing",
    ogTitle: "Likes Don't Pay Bills. But Our Social Media Strategy Does.",
    ogDescription: "Meta Ads to LinkedIn. We turn followers into real customers. Let's make social media work for you!",
    twitterTitle: "Likes Don't Pay Bills. But Our Social Media Strategy Does.",
    twitterDescription: "Meta Ads to LinkedIn. We turn followers into real customers. Let's make social media work for you!",
  },
  hero: {
    badgeIcon: Megaphone,
    badgeText: "Social Media Marketing Company in Bangalore",
    headlineLine1: "Social Media Marketing",
    headlineLine2: "Agency in Bangalore",
    description: <>End-to-end <span className="text-foreground font-semibold">social media marketing services in Bangalore</span> across Instagram, Facebook, LinkedIn & YouTube — Meta Ads and LinkedIn campaigns that drive real engagement, leads and revenue, not vanity metrics.</>,
    trustSignals: [
      { icon: TrendingUp, text: "Avg. 4x Engagement Lift" },
      { icon: Users, text: "Organic + Paid Strategies" },
      { icon: Target, text: "ROI-Focused Campaigns" },
      { icon: BarChart3, text: "Transparent Monthly Reporting" },
    ],
    credentials: ["300+ Brands Managed", "Multi-Platform Expertise", "ROI-Focused Strategy"],
    formTitle: "Get Your Free Social Media Audit",
    formDescription: "Share your handles and we'll send back a strategy with quick wins to grow your brand.",
    formButtonText: "Get Free Audit",
  },
  source: "social_media_marketing",
  problems: [
    { icon: Eye, title: "Posting Daily, No Real Reach", description: "You're showing up consistently but the algorithm is burying your content. Engagement is flat." },
    { icon: Heart, title: "Followers Aren't Buying", description: "Your follower count looks good but it's not translating into website visits, leads or sales." },
    { icon: DollarSign, title: "Paid Ads Burning Budget", description: "You're running boosted posts and ads but ROI is unclear — and probably negative." },
    { icon: MessageCircle, title: "No Strategy, Just Random Posts", description: "Without a content pillar, calendar or funnel, every post is a guess instead of a plan." },
  ],
  services: [
    { icon: Calendar, title: "Content Strategy & Calendar", description: "Monthly content pillars, themes and posting calendar built around your audience and goals." },
    { icon: Sparkles, title: "Creative & Reel Production", description: "Static posts, carousels, reels and short-form video that actually stop the scroll." },
    { icon: Target, title: "Paid Social Ads", description: "Meta, LinkedIn, YouTube ad campaigns with targeting, A/B testing and conversion tracking." },
    { icon: MessageCircle, title: "Community Management", description: "Daily replies, DMs and engagement to build a loyal, vocal community around your brand." },
    { icon: Users, title: "Influencer & UGC Campaigns", description: "Vetted creator collaborations and UGC pipelines that deliver authentic, high-trust content." },
    { icon: Rocket, title: "Launch & Growth Campaigns", description: "Product launches, contests and seasonal campaigns engineered for reach and conversions." },
    { icon: BarChart3, title: "Analytics & Reporting", description: "Monthly dashboards tracking reach, engagement, leads and revenue — no vanity metrics." },
    { icon: Zap, title: "Platform Optimization", description: "Profile, bio and link-in-bio optimization to convert visits into followers and leads." },
  ],
  comparison: {
    traditional: [
      "Random posting with no strategy or pillars",
      "Same content recycled across every platform",
      "Reports full of likes and follower counts",
      "No paid ads or unmanaged boosted posts",
      "Slow replies, ignored DMs, dead community",
      "No connection between social and revenue",
    ],
    super30: [
      "Documented strategy with content pillars and KPIs",
      "Platform-native creative for IG, FB, LinkedIn, YT",
      "Reports tied to leads, sales and pipeline",
      "Managed paid campaigns with weekly optimization",
      "Active community management within 2 hours",
      "Social funnel mapped to your business outcomes",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher Engagement", description: "Strategic content and active community management lift engagement 3-5x within 90 days." },
    { icon: Users, title: "Quality Audience Growth", description: "Attract real, targeted followers who match your ICP — not bots or freebie-seekers." },
    { icon: DollarSign, title: "Better Ad ROI", description: "Properly structured paid campaigns with creative testing typically deliver 2-4x better ROAS." },
    { icon: Globe, title: "Consistent Brand Voice", description: "Unified visual identity and tone across every platform builds instant brand recognition." },
    { icon: Sparkles, title: "Scroll-Stopping Creative", description: "Reels, carousels and shorts produced by our in-house creative team and editors." },
    { icon: Target, title: "Funnel-Aligned Content", description: "Awareness, consideration and conversion content mapped to where your audience is." },
    { icon: Clock, title: "You Get Your Time Back", description: "We handle strategy, creation and posting — you focus on running your business." },
    { icon: Shield, title: "Reputation Protection", description: "Proactive review and mention monitoring to protect and build brand sentiment." },
    { icon: BarChart3, title: "Real Business Reporting", description: "Monthly reports show leads generated, ad spend ROI and pipeline contribution." },
  ],
  process: [
    { icon: Eye, title: "Audit & Discovery", description: "Deep audit of your current social, competitors, audience and brand voice." },
    { icon: Target, title: "Strategy & Calendar", description: "Custom strategy, content pillars and 30-day calendar approved by you." },
    { icon: Zap, title: "Create & Publish", description: "Daily content production, scheduling and publishing across chosen platforms." },
    { icon: TrendingUp, title: "Optimize & Report", description: "Weekly performance review, creative testing and monthly reporting calls." },
  ],
  whoIsThisFor: {
    forYou: [
      "You want a real social strategy, not just posts",
      "You're ready to invest in consistent monthly content",
      "You want both organic growth and paid ad scale",
      "You need engagement and conversions, not vanity metrics",
      "You want a long-term marketing partner, not a freelancer",
    ],
    notForYou: [
      "You expect viral results in week one",
      "You're not willing to share product or brand assets",
      "You only care about follower count",
      "You want the cheapest option in the market",
    ],
  },
  faq: [
    { question: "Which platforms do you manage?", answer: "We manage Instagram, Facebook, LinkedIn, YouTube, Twitter/X and Pinterest — with platform-specific strategies for each. Most clients focus on 2-3 platforms where their audience actually is." },
    { question: "How is this different from SMO?", answer: "SMO focuses on organic optimization. Social Media Marketing covers the full funnel — strategy, content, paid ads, influencers and community management end-to-end." },
    { question: "What does it cost?", answer: "Packages typically start from ₹50,000+/month depending on platforms, content volume and ad spend management. We share a clear, fixed-scope quote after a discovery call." },
    { question: "Do you create the content too?", answer: "Yes. Our in-house team produces graphics, carousels, reels, shorts and ad creatives. You approve everything before it goes live." },
    { question: "How soon will I see results?", answer: "Engagement lift in the first 30-45 days. Meaningful follower growth and lead flow typically within 60-90 days as the algorithm rewards consistency." },
    { question: "Do you handle paid ads as well?", answer: "Absolutely. We run Meta, LinkedIn and YouTube ads with full targeting, creative testing, conversion tracking and weekly optimization." },
    { question: "Will I own the content and accounts?", answer: "100%. You own the accounts, the content library, and all creative assets. Zero lock-in." },
    { question: "Can you work with our internal team?", answer: "Yes. We collaborate with in-house marketing, design and product teams via Slack, Notion or your tool of choice." },
  ],
  finalCTA: {
    headline: "Ready to turn social into a revenue channel?",
    description: "Get a free social media audit and a custom 90-day growth roadmap for your brand.",
    buttonText: "Get Free Social Audit",
  },
};

const SocialMediaMarketing = () => <ServicePageTemplate config={config} />;
export default SocialMediaMarketing;
