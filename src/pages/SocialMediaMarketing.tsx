import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import {
  Megaphone, Target, BarChart3, Users, Zap, Shield, TrendingUp, Calendar,
  Instagram, Facebook, Linkedin, Award, Eye, MousePointerClick, MessageCircle, DollarSign,
} from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Social Media Marketing Agency in Bangalore | SMM Services",
    description:
      "Grow your brand with a social media marketing company in Bangalore. We run Meta Ads, Instagram & LinkedIn campaigns that drive real engagement & ROI.",
    keywords:
      "social media marketing company bangalore, social media marketing agency bangalore, social media marketing services bangalore, facebook marketing agency bangalore, social media agency bangalore, social media advertising company in bangalore, linkedin marketing in bangalore",
    canonical: "https://www.thesuper30.ai/social-media-marketing-agency-bangalore",
    serviceType: "Social Media Marketing",
    ogTitle: "Likes Don't Pay Bills. But Our Social Media Strategy Does.",
    ogDescription:
      "Meta Ads to LinkedIn. We turn followers into real customers. Let's make social media work for you!",
    twitterTitle: "Likes Don't Pay Bills. But Our Social Media Strategy Does.",
    twitterDescription:
      "Meta Ads to LinkedIn. We turn followers into real customers. Let's make social media work for you!",
  },
  hero: {
    badgeIcon: Megaphone,
    badgeText: "Social Media Marketing Experts",
    headlineLine1: "Social Media Marketing Agency",
    headlineLine2: "in Bangalore",
    description: (
      <>
        Full-funnel social media marketing across <span className="text-foreground font-semibold">Meta, Instagram, and LinkedIn</span> — engineered to grow followers, drive engagement, and convert audiences into paying customers.
      </>
    ),
    trustSignals: [
      { icon: Shield, text: "Meta Business Partner" },
      { icon: BarChart3, text: "Avg. 4.2x ROAS on Paid Social" },
      { icon: Users, text: "150+ Brands Scaled" },
      { icon: Zap, text: "No Lock-In Contracts" },
    ],
    credentials: ["Meta + LinkedIn Certified", "100M+ Impressions Delivered", "4.9/5 Client Rating"],
    formTitle: "Get Your Free Social Media Audit",
    formDescription: "We'll review your channels and share a 90-day growth plan in 5 business days.",
    formButtonText: "Start My Free Audit",
  },
  source: "social_media_marketing",
  problems: [
    { icon: Eye, title: "Low Reach & Engagement", description: "Your posts barely reach 5% of your followers. Algorithms changed — your strategy didn't." },
    { icon: DollarSign, title: "Wasted Ad Budget", description: "You're spending on Meta Ads but the leads are unqualified and CAC keeps climbing." },
    { icon: Target, title: "Wrong Audience", description: "You attract followers but not buyers. The targeting is off and the funnel is broken." },
    { icon: TrendingUp, title: "No Real ROI", description: "Vanity metrics look fine, but social media isn't actually moving the revenue needle." },
  ],
  services: [
    { icon: Facebook, title: "Meta Ads Management", description: "Full-funnel Facebook & Instagram ad campaigns built to scale conversions profitably." },
    { icon: Instagram, title: "Instagram Marketing", description: "Organic content, reels, and influencer collabs that grow followers and engagement." },
    { icon: Linkedin, title: "LinkedIn Marketing", description: "B2B campaigns and thought leadership that put your brand in front of decision-makers." },
    { icon: Target, title: "Audience Strategy", description: "Custom audiences, lookalikes, and retargeting layered for maximum efficiency." },
    { icon: MessageCircle, title: "Community Management", description: "Daily engagement, DMs, and comment moderation that keeps your audience hot." },
    { icon: BarChart3, title: "Analytics & Reporting", description: "Live dashboards covering reach, CTR, CPL, ROAS, and revenue attribution." },
    { icon: Calendar, title: "Content Calendars", description: "Strategic 30-day calendars mapped to campaigns, launches, and seasonality." },
    { icon: MousePointerClick, title: "Conversion Optimization", description: "Landing page and pixel optimization to lower CPA and lift conversion rates." },
  ],
  comparison: {
    traditional: [
      "Boost-post strategy with no campaign structure",
      "Generic creatives that look like every other brand",
      "Reports filled with likes, shares, and impressions",
      "One-size-fits-all targeting wasting ad budget",
      "Long lock-in contracts with rigid retainers",
      "No revenue attribution beyond platform metrics",
    ],
    super30: [
      "Full-funnel ad architecture (TOFU, MOFU, BOFU) built for ROAS",
      "Custom-designed creatives, reels, and carousels per campaign",
      "Reports tied to leads, sales, and revenue — not vanity metrics",
      "Tight audience layering with weekly optimisation",
      "Month-to-month contracts with full transparency",
      "End-to-end attribution from ad click to closed revenue",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Predictable Pipeline", description: "Paid social campaigns engineered to fill your pipeline with qualified leads every week." },
    { icon: DollarSign, title: "Lower CAC", description: "Smarter targeting and creative testing drives down cost per acquisition month over month." },
    { icon: Users, title: "Audience Growth", description: "Build a loyal community of followers who actually buy, not just scroll past." },
    { icon: Award, title: "Brand Authority", description: "Consistent presence across channels positions you as the category leader." },
    { icon: Eye, title: "Maximum Reach", description: "A blend of organic + paid that compounds reach without burning budget." },
    { icon: Zap, title: "Faster Launches", description: "Campaigns go live in 7 days — not 7 weeks. We move at the speed of your business." },
    { icon: Shield, title: "Brand-Safe Execution", description: "Strict guidelines, approval flows, and crisis playbooks protect your reputation." },
    { icon: BarChart3, title: "Real Reporting", description: "Live dashboards and weekly insights — no PDF decks lost in inboxes." },
    { icon: Target, title: "ROI-Focused", description: "Every rupee tied to a measurable business outcome. No fluff, no guessing." },
  ],
  process: [
    { icon: Eye, title: "Audit & Discovery", description: "Deep dive into your channels, competitors, audiences, and current performance." },
    { icon: Target, title: "Strategy & Planning", description: "Build a 90-day roadmap covering content pillars, ad funnels, and KPIs." },
    { icon: Zap, title: "Launch & Test", description: "Creative production, campaign setup, and rapid A/B testing across audiences." },
    { icon: TrendingUp, title: "Scale & Optimise", description: "Double down on winners, kill losers, and compound results month over month." },
  ],
  whoIsThisFor: {
    forYou: [
      "You want social media to drive real revenue, not just vanity likes",
      "You're ready to invest ₹50,000+/month in paid social ads",
      "You need a partner who handles strategy, creative, and execution",
      "You want transparent reporting tied to leads and sales",
      "You're scaling a D2C, SaaS, or B2B brand and need pipeline",
    ],
    notForYou: [
      "You expect overnight viral growth without consistent investment",
      "You want the cheapest agency without considering quality",
      "You're not willing to share business metrics for attribution",
      "You want to micromanage every post, ad, and reply",
    ],
  },
  faq: [
    { question: "How much do your social media marketing services in Bangalore cost?", answer: "Our social media marketing retainers start at ₹50,000/month for one platform and scale based on the number of channels, ad spend management, and creative volume required." },
    { question: "Which platforms do you manage?", answer: "We specialise in Meta (Facebook + Instagram), LinkedIn, YouTube, and Twitter/X. We choose channels based on where your audience actually is — not where it's trendy." },
    { question: "Do you handle ad spend or only management fees?", answer: "Ad spend is paid directly by you to Meta/LinkedIn. We charge a separate management fee for strategy, creative, and optimisation — full transparency, no markups." },
    { question: "How long before I see results?", answer: "Paid social campaigns typically generate qualified leads within 14–30 days. Organic growth and community building compound over 3–6 months." },
    { question: "Do you create the ad creatives too?", answer: "Yes. Our in-house creative team produces static designs, motion graphics, reels, and UGC-style videos — all built around campaign objectives." },
    { question: "Can you work with our existing brand guidelines?", answer: "Absolutely. We onboard your brand kit, tone, and visual style, and our team produces all creatives aligned to your guidelines." },
    { question: "Is there a lock-in contract?", answer: "No. We work on monthly retainers with a 30-day notice period. We earn the renewal every month through results, not contracts." },
    { question: "How do you measure ROI?", answer: "We track CPL, CPA, ROAS, and revenue attribution end-to-end. Live dashboards give you visibility into every rupee spent and earned." },
  ],
  finalCTA: {
    headline: "Ready to Make Social Media Drive Real Revenue?",
    description: "Get a free 30-minute audit of your channels and a 90-day growth plan tailored to your business.",
    buttonText: "Book My Free Audit",
  },
};

const SocialMediaMarketing = () => <ServicePageTemplate config={config} />;
export default SocialMediaMarketing;
