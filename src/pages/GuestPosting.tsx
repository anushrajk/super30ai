import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { ExternalLink, Globe, Search, TrendingUp, BarChart3, Shield, Zap, Target, Users, Award, Link2, FileText, Eye, PenTool, Clock, Layers } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Guest Posting Agency in Bangalore | Build Domain Authority",
    description: "Boost your authority with our guest posting agency in Bangalore. Quality articles on relevant sites that build backlinks & drive organic traffic",
    keywords: "guest posting agency in bangalore, guest posting company in bangalore, guest posting services in bangalore, guest blog posting services in bangalore, guest post writing in bangalore",
    canonical: "https://www.thesuper30.ai/guest-posting-agency-bangalore",
    serviceType: "Guest Posting Services",
    ogTitle: "More Backlinks. More Authority. More Organic Traffic.",
    ogDescription: "Quality guest posts on relevant sites that build backlinks and grow your organic traffic. Let's go!",
    twitterTitle: "More Backlinks. More Authority. More Organic Traffic.",
    twitterDescription: "Quality guest posts on relevant sites that build backlinks and grow your organic traffic. Let's go!",
  },
  hero: {
    badgeIcon: ExternalLink,
    badgeText: "Guest Posting & Link Building",
    headlineLine1: "High-Authority Backlinks",
    headlineLine2: "That Actually Move Rankings",
    description: <>We secure placements on <span className="text-foreground font-semibold">niche-relevant, high-DA websites</span> with quality content — building your domain authority the right way.</>,
    trustSignals: [
      { icon: Globe, text: "DA 40-90+ Placements" },
      { icon: Shield, text: "White-Hat Link Building Only" },
      { icon: Search, text: "Niche-Relevant Websites" },
      { icon: TrendingUp, text: "Measurable Ranking Improvements" },
    ],
    credentials: ["5,000+ Links Built", "DA 40-90+ Sites", "White-Hat Only"],
    formTitle: "Get Your Free Link Audit",
    formDescription: "Share your website and we'll analyze your backlink profile and identify opportunities.",
    formButtonText: "Get Free Link Audit",
  },
  source: "guest_posting",
  problems: [
    { icon: Search, title: "Stuck on Page 2-3", description: "Your content is good but without backlinks, Google won't rank you above competitors." },
    { icon: Shield, title: "Burned by Spammy Links", description: "A previous agency built low-quality links that hurt your rankings instead of helping." },
    { icon: Globe, title: "Low Domain Authority", description: "Your domain authority is too low to compete for competitive keywords." },
    { icon: Clock, title: "No Time for Outreach", description: "Building relationships with publishers takes months of consistent effort you don't have." },
  ],
  services: [
    { icon: Globe, title: "High-DA Guest Posts", description: "Placements on DA 40-90+ websites in your niche with editorial links." },
    { icon: PenTool, title: "Content Creation", description: "Expert-written articles that publishers actually want to feature." },
    { icon: Link2, title: "Niche Edits", description: "Contextual backlinks inserted into existing high-ranking articles." },
    { icon: FileText, title: "Digital PR", description: "Press mentions and features in industry publications and news sites." },
    { icon: Target, title: "Competitor Analysis", description: "Reverse-engineer your competitors' backlink profiles to find opportunities." },
    { icon: Shield, title: "Link Audit & Cleanup", description: "Identify and disavow toxic backlinks that may be hurting your rankings." },
    { icon: BarChart3, title: "Authority Building", description: "Strategic link acquisition to boost domain authority over time." },
    { icon: Eye, title: "Monthly Reporting", description: "Transparent reports showing every placement, DA, traffic, and link status." },
  ],
  comparison: {
    traditional: [
      "Bulk links from PBNs and link farms",
      "Irrelevant websites with no real traffic",
      "Spun, low-quality guest post content",
      "No transparency on where links are placed",
      "Risk of Google penalty from black-hat tactics",
      "Quantity over quality approach",
    ],
    super30: [
      "Hand-picked, niche-relevant, high-DA placements",
      "Real websites with real traffic and engaged audiences",
      "Expert-written content that adds genuine value",
      "Full transparency — every link reported with live URL",
      "100% white-hat — no risk of Google penalties",
      "Quality over quantity — fewer links, bigger impact",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher Rankings", description: "Quality backlinks are the #1 ranking factor. Watch your positions climb." },
    { icon: Globe, title: "Domain Authority Growth", description: "Strategic link building from high-DA sites steadily increases your authority." },
    { icon: Users, title: "Referral Traffic", description: "Guest posts on relevant sites drive targeted visitors to your website." },
    { icon: Award, title: "Brand Credibility", description: "Being featured on authority sites builds trust and industry recognition." },
    { icon: Shield, title: "Google-Safe", description: "100% white-hat methods that build lasting authority without penalty risk." },
    { icon: Target, title: "Niche Relevance", description: "Links from websites in your industry carry more SEO weight." },
    { icon: Eye, title: "Full Transparency", description: "You see every placement, every link, every metric — nothing hidden." },
    { icon: Zap, title: "Scalable Results", description: "Start with a few links and scale up as you see ranking improvements." },
    { icon: BarChart3, title: "Measurable ROI", description: "Track ranking improvements directly correlated to link building efforts." },
  ],
  process: [
    { icon: Search, title: "Audit & Strategy", description: "Analyze your backlink profile, competitors, and identify target opportunities." },
    { icon: Globe, title: "Prospecting & Outreach", description: "Find and connect with relevant, high-authority publishers in your niche." },
    { icon: PenTool, title: "Content & Placement", description: "Write quality guest posts and secure placements with editorial links." },
    { icon: BarChart3, title: "Report & Scale", description: "Monthly reports on placements, DA gains, and ranking improvements." },
  ],
  whoIsThisFor: {
    forYou: [
      "You have great content but low domain authority is holding back rankings",
      "You want white-hat link building that's sustainable long-term",
      "You're ready to invest in SEO authority building over 3-6 months",
      "You want placements on real, niche-relevant websites",
      "You need transparency in where your backlinks come from",
    ],
    notForYou: [
      "You want 100 backlinks for ₹5,000",
      "You're okay with PBN links and black-hat tactics",
      "You expect page 1 rankings from 5 links in one month",
      "You don't care about link quality, just quantity",
    ],
  },
  faq: [
    { question: "What DA websites do you get placements on?", answer: "We primarily target DA 40-70 for standard packages and DA 70-90+ for premium placements. All websites have real organic traffic and editorial standards." },
    { question: "How many links do I need per month?", answer: "Quality matters more than quantity. Most clients see significant results with 5-15 high-quality links per month. We'll recommend based on your competitive landscape." },
    { question: "Are the links permanent?", answer: "Yes. We negotiate permanent placements. If any link is removed within 12 months, we replace it free of charge." },
    { question: "Is this white-hat?", answer: "100%. We use manual outreach, quality content, and real editorial placements. No PBNs, no link farms, no automated tools." },
    { question: "How long until I see ranking improvements?", answer: "Typically 2-3 months to see measurable ranking improvements from link building. Domain authority growth is gradual and compounds over time." },
    { question: "Can you do a backlink audit first?", answer: "Yes. We offer standalone backlink audits where we analyze your current profile, identify toxic links, and create a link building strategy." },
    { question: "Do you write the guest post content?", answer: "Yes. Our writers create original, high-quality articles tailored to each publisher's audience and editorial guidelines." },
    { question: "What metrics do you report on?", answer: "Monthly reports include: live URLs, DA of each site, anchor text used, domain authority growth, and keyword ranking changes." },
  ],
  finalCTA: {
    headline: "Ready to Build Authority That Lasts?",
    description: "Get a free backlink audit and discover how strategic link building can boost your rankings.",
    buttonText: "Get Free Link Audit",
  },
};

const GuestPosting = () => <ServicePageTemplate config={config} />;
export default GuestPosting;
