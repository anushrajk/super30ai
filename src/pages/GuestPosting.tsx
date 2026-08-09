import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { ExternalLink, Globe, Search, TrendingUp, BarChart3, Shield, Zap, Target, Users, Award, Link2, FileText, Eye, PenTool, Clock, Layers } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Guest Posting Agency in Bangalore | Build Domain Authority",
    description: "Boost your authority with our guest posting services in Bangalore. Quality articles on relevant sites that build backlinks & drive organic traffic",
    keywords: "guest posting agency in bangalore, guest posting company in bangalore, guest posting services in bangalore, guest blog posting services in bangalore, guest post writing in bangalore",
    canonical: "https://super30ai.lovable.app/guest-posting-agency-bangalore",
    serviceType: "Guest Posting Services",
    ogTitle: "More Backlinks. More Authority. More Organic Traffic.",
    ogDescription: "Quality guest posts on relevant sites that build backlinks and grow your organic traffic. Let's go!",
    twitterTitle: "More Backlinks. More Authority. More Organic Traffic.",
    twitterDescription: "Quality guest posts on relevant sites that build backlinks and grow your organic traffic. Let's go!",
  },
  hero: {
    badgeIcon: ExternalLink,
    badgeText: "Guest Posting Services in Bangalore",
    headlineLine1: "Guest Posting Agency",
    headlineLine2: "in Bangalore for Authority Growth",
    description: <>As a trusted <span className="text-foreground font-semibold">guest posting company in Bangalore</span>, we get white hat guest posts on niche relevant high Domain authority websites, that enhance search visibility and boost organic ranking performance.</>,
    trustSignals: [
      { icon: Globe, text: "DA 40 to 90+ Publisher Placements" },
      { icon: Shield, text: "Ethical White Hat Outreach Strategies Only" },
      { icon: Search, text: "Industry Relevant Website Partnerships" },
      { icon: TrendingUp, text: "Measurable Ranking Growth Campaigns" },
    ],
    credentials: ["5,000+ Links Built", "DA 40-90+ Sites", "White-Hat Only"],
    formTitle: "Free Guest Posting & Backlink Audit in Bangalore",
    formDescription: "Share your website — our guest posting services in Bangalore team will analyze your backlink profile and surface high-DA opportunities.",
    formButtonText: "Enquire Now",
  },
  source: "guest_posting",
  sections: {
    problems: {
      title: "Common SEO Challenges Most Businesses Face",
      description: "Despite creating high quality content, many businesses fail to improve visibility due to low domain authority, outreach issues and a weak backlink strategy.",
    },
    services: {
      title: "Guest Posting Services in Bangalore for SEO Growth",
      description: "High quality outreach and guest post writing in Bangalore for authority websites that aims to boost rankings, build trust for the domain, and drive sustained visibility in search results.",
    },
    comparison: {
      title: "Traditional Agency vs. The Super 30",
      description: "A clear comparison between outdated backlink practices and strategic authority driven guest posting built for sustainable ranking growth.",
    },
    benefits: {
      eyebrow: "Why Brands Choose Us?",
      title: "Guest Posting Company in Bangalore Built for Sustainable SEO Growth",
      description: "Our Domain Authority's priority is to offer outreach campaigns and guest posting services in Bangalore, aiming to enhance rankings, website trust, and long-term search visibility.",
    },
    industries: {
      eyebrow: "Industry Expertise",
      title: "Marketing Strategies for Every Industry",
      description: "Industry specific marketing strategies developed across 18+ sectors. We understand audience behaviour, market trends, and brand communication requirements.",
    },
    whoIsThisFor: {
      title: "Is This Partnership Right For You?",
      description: "For brands that prioritize sustainable authority building, ethical outreach strategies, and long-term search visibility, Guest Posting Services in Bangalore prove to be the ideal solution, generated for a trusted outreach backlink.",
    },
  },
  problems: [
    { icon: Search, title: "Stuck on First Page", description: "Excellent website content alone is not enough without authoritative backlinks that improve search visibility." },
    { icon: Shield, title: "Damaged by Spam Links", description: "Low quality backlink practices from previous agencies can reduce trust and affect rankings negatively." },
    { icon: Globe, title: "Weak Domain Authority", description: "Limited authority signals make it difficult to compete against established brands in competitive search results." },
    { icon: Clock, title: "No Time for Manual Outreach", description: "Developing publisher relationships and securing quality placements requires ongoing outreach and strategic consistency." },
  ],
  services: [
    { icon: Globe, title: "High Authority Guest Posts", description: "Editorial placements secured on trusted industry websites with strong domain authority relevance." },
    { icon: PenTool, title: "SEO Content Development", description: "Professionally written articles created to match publisher standards and audience quality expectations." },
    { icon: Link2, title: "Contextual Link Placements", description: "Relevant backlinks are integrated naturally within established articles that already perform in search." },
    { icon: FileText, title: "Digital PR Outreach", description: "Brand mentions and media coverage secured through respected publications and online platforms." },
    { icon: Target, title: "Competitor Backlink Research", description: "Detailed competitor analysis is used to identify valuable backlinks and outreach opportunities." },
    { icon: Shield, title: "Backlink Audit & Cleanup", description: "Strategic review and removal guidance for harmful backlinks affecting search performance." },
    { icon: BarChart3, title: "Domain Authority Growth", description: "Consistent authority building campaigns focused on sustainable long-term ranking improvement." },
    { icon: Eye, title: "Transparent Monthly Reports", description: "Clear monthly reporting covering placements, authority metrics, traffic insights, and outreach progress." },
  ],
  comparison: {
    traditional: [
      "Mass backlink packages from low quality private networks",
      "Irrelevant placements on websites with weak audience engagement",
      "Generic guest articles written without editorial value",
      "Limited visibility into backlink placement and reporting",
      "Unsafe SEO tactics that increase penalty risks",
      "Volume driven campaigns with minimal ranking impact",
    ],
    super30: [
      "Carefully selected authority placements within relevant industry websites",
      "Real publishers with active audiences and organic website traffic",
      "Professionally written content designed to provide genuine value",
      "Complete reporting transparency with verified live placements",
      "Ethical white hat outreach strategies aligned with Google guidelines",
      "Quality campaigns built for high ranking performance",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher Search Visibility", description: "Authority backlinks help improve keyword rankings and consistently strengthen organic search performance." },
    { icon: Globe, title: "Domain Authority Growth", description: "Strategic placements from trusted websites increase overall domain credibility and SEO strength." },
    { icon: Users, title: "Qualified Referral Traffic", description: "Relevant publisher placements attract targeted audiences genuinely interested in your services." },
    { icon: Award, title: "Brand Credibility", description: "Features on recognised industry websites improve credibility and reinforce market positioning." },
    { icon: Shield, title: "Search Engine Safe", description: "Ethical outreach practices aligned with Google guidelines protect long-term ranking stability." },
    { icon: Target, title: "Niche Relevant Placements", description: "Backlinks secured from niche related websites deliver stronger contextual SEO value." },
    { icon: Eye, title: "Complete Campaign Transparency", description: "Detailed reporting provides full visibility into placements, metrics, and outreach performance." },
    { icon: Zap, title: "Scalable SEO Growth", description: "Flexible campaigns designed to expand alongside increasing ranking and authority goals." },
    { icon: BarChart3, title: "Performance Focused ROI", description: "Clear tracking and reporting connect backlink campaigns directly with measurable SEO improvements." },
  ],
  process: [
    { icon: Search, title: "Audit & Strategy", description: "Analyze your backlink profile, competitors, and identify target opportunities." },
    { icon: Globe, title: "Prospecting & Outreach", description: "Find and connect with relevant, high-authority publishers in your niche." },
    { icon: PenTool, title: "Content & Placement", description: "Write quality guest posts and secure placements with editorial links." },
    { icon: BarChart3, title: "Report & Scale", description: "Monthly reports on placements, DA gains, and ranking improvements." },
  ],
  whoIsThisFor: {
    forYou: [
      "Your website has quality content, but its low authority is affecting rankings",
      "You want white hat link building focused on sustainable SEO growth",
      "You're prepared to invest in long-term authority building strategies",
      "You want placements on trusted and niche relevant websites",
      "You value transparency in every backlink and publisher placement",
    ],
    notForYou: [
      "You expect 100s of backlinks at unrealistic pricing",
      "You're comfortable using PBN links and risky SEO practices",
      "You expect instant page 1 rankings within a few weeks",
      "You prioritise backlink quantity over relevance and quality",
    ],
  },
  faq: getFaqs("guest-posting"),
  finalCTA: {
    headline: "Get a Higher SEO Ranking Through Bangalore's Leading Guest Posting Agency",
    description: "Get a free guest posting and backlink review to learn how strategic authority links improve rankings and search visibility.",
    buttonText: "Get Free Backlink Audit",
  },
};

const GuestPosting = () => <ServicePageTemplate config={config} />;
export default GuestPosting;
