import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { ShoppingBag, TrendingUp, Target, DollarSign, BarChart3, Zap, Eye, Sparkles, Rocket, Package, Truck, Globe, Clock, Heart, Search, ShoppingCart, Megaphone, Layers, RefreshCw, Users } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "D2C & Ecommerce Marketing Agency in Bangalore",
    description: "Ecommerce marketing agency in Bangalore offering D2C marketing services, performance strategies, and scalable solutions for online brands. Book a free call",
    keywords: "ecommerce marketing services in bangalore, ecommerce marketing agency in bangalore, d2c marketing services in bangalore, d2c ecommerce agency in bangalore, d2c growth partner in bangalore",
    canonical: "https://www.thesuper30.ai/ecommerce-marketing-agency-bangalore",
    serviceType: "Ecommerce & D2C Marketing",
    ogTitle: "Ecommerce Marketing Agency in Bangalore for D2C Brands",
    ogDescription: "D2C ecommerce agency in Bangalore offering marketing strategies for online brands.",
    twitterTitle: "Ecommerce Marketing Agency in Bangalore for D2C Brands",
    twitterDescription: "D2C ecommerce agency in Bangalore offering marketing strategies for online brands.",
  },
  hero: {
    badgeIcon: ShoppingBag,
    badgeText: "D2C Growth Partner in Bangalore",
    headlineLine1: "D2C & Ecommerce Marketing",
    headlineLine2: "Agency in Bangalore",
    description: <>Full-stack <span className="text-foreground font-semibold">ecommerce marketing services in Bangalore</span> for D2C brands — performance ads, SEO, CRO and retention built to scale revenue, not just traffic.</>,
    trustSignals: [
      { icon: TrendingUp, text: "Avg. 3x ROAS in 90 Days" },
      { icon: ShoppingCart, text: "Shopify, WooCommerce & Magento" },
      { icon: Target, text: "Performance + Retention Mix" },
      { icon: BarChart3, text: "GA4, Meta & Shopify Reporting" },
    ],
    credentials: ["50+ D2C Brands Scaled", "₹10Cr+ Ad Spend Managed", "Full-Funnel D2C Strategy"],
    formTitle: "Get Your Free Ecommerce Growth Audit",
    formDescription: "Share your store URL — we'll send back a teardown with quick wins to lift ROAS and AOV.",
    formButtonText: "Get Free D2C Audit",
  },
  source: "ecommerce_marketing",
  problems: [
    { icon: DollarSign, title: "Rising CAC, Falling ROAS", description: "Meta and Google costs keep climbing while your return on ad spend keeps shrinking month over month." },
    { icon: ShoppingCart, title: "Traffic Comes, Carts Get Abandoned", description: "You're driving visitors but checkout drop-offs and one-time buyers are killing your unit economics." },
    { icon: RefreshCw, title: "No Repeat Customers", description: "Every sale feels like starting from zero — no email, SMS or WhatsApp flows bringing buyers back." },
    { icon: Eye, title: "Brand Lost in the Noise", description: "Your D2C brand is invisible on Google, Instagram and marketplaces compared to competitors." },
  ],
  services: [
    { icon: Target, title: "D2C Performance Marketing", description: "Meta, Google, YouTube and Pinterest ads engineered for ROAS, AOV and profitable scale." },
    { icon: Search, title: "Ecommerce SEO", description: "Category, product and collection page SEO that drives high-intent organic traffic and sales." },
    { icon: Layers, title: "Conversion Rate Optimization", description: "Product page, cart and checkout CRO to lift conversion rates and reduce cart abandonment." },
    { icon: Megaphone, title: "Creative & UGC Production", description: "Static, video and UGC creatives built specifically for D2C ad performance and stop-the-scroll." },
    { icon: RefreshCw, title: "Email, SMS & WhatsApp Retention", description: "Klaviyo, WebEngage and WhatsApp flows that turn one-time buyers into repeat, loyal customers." },
    { icon: Users, title: "Influencer & Affiliate Programs", description: "Vetted creator partnerships and affiliate programs built to drive scalable D2C revenue." },
    { icon: Package, title: "Marketplace Management", description: "Amazon, Flipkart and Myntra listings, ads and account management to grow marketplace sales." },
    { icon: BarChart3, title: "Analytics & Attribution", description: "GA4, Shopify, Meta and Triple Whale dashboards giving you true blended ROAS and LTV." },
  ],
  comparison: {
    traditional: [
      "Generic agency with no D2C ecommerce experience",
      "Reports full of impressions and clicks only",
      "No CRO or conversion experiments",
      "No retention, email or SMS flows",
      "Single-channel focus (just Meta or just Google)",
      "No focus on AOV, LTV or repeat purchase rate",
    ],
    super30: [
      "D2C ecommerce specialists with 50+ brand experience",
      "Reports tied to ROAS, AOV, LTV and contribution margin",
      "Continuous CRO testing on PDPs, cart and checkout",
      "Klaviyo, SMS and WhatsApp retention programs",
      "Full-funnel mix: Meta, Google, SEO, marketplaces, retention",
      "Unit economics-first: profitable scale, not vanity revenue",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher Blended ROAS", description: "Properly structured campaigns and creative testing typically lift blended ROAS 2-3x in 90 days." },
    { icon: ShoppingCart, title: "Lower Cart Abandonment", description: "CRO + cart recovery flows recover 15-25% of abandoned carts and lift checkout conversion." },
    { icon: RefreshCw, title: "More Repeat Buyers", description: "Email, SMS and WhatsApp retention flows lift repeat purchase rate and customer LTV significantly." },
    { icon: DollarSign, title: "Better Unit Economics", description: "We optimize for AOV, contribution margin and LTV — not just revenue at any cost." },
    { icon: Sparkles, title: "Performance-Ready Creatives", description: "In-house team produces UGC, statics and videos engineered specifically for D2C ad performance." },
    { icon: Search, title: "Profitable Organic Growth", description: "Ecommerce SEO drives free, high-intent traffic that compounds month over month." },
    { icon: Globe, title: "Marketplace + DTC Growth", description: "Coordinated growth across your own store and Amazon, Flipkart and Myntra marketplaces." },
    { icon: Clock, title: "You Focus on Product", description: "We own marketing, ads, content and retention — you focus on product, ops and supply chain." },
    { icon: BarChart3, title: "Real Revenue Reporting", description: "Weekly dashboards show blended ROAS, AOV, LTV and contribution margin — no fluff." },
  ],
  process: [
    { icon: Eye, title: "Audit & Diagnostics", description: "Deep audit of your store, ads, funnel, retention and competitor D2C brands." },
    { icon: Target, title: "D2C Growth Strategy", description: "Custom 90-day roadmap covering acquisition, conversion and retention KPIs." },
    { icon: Zap, title: "Launch & Scale", description: "Campaigns, creatives, CRO experiments and retention flows launched and scaled weekly." },
    { icon: TrendingUp, title: "Optimize & Compound", description: "Weekly optimization, monthly business reviews and quarterly D2C growth planning." },
  ],
  whoIsThisFor: {
    forYou: [
      "You run a D2C or ecommerce brand doing ₹10L+/month",
      "You're ready to invest in ads, CRO and retention",
      "You want a true growth partner, not just a media buyer",
      "You care about ROAS, AOV and LTV — not vanity revenue",
      "You want full-funnel ownership, not channel silos",
    ],
    notForYou: [
      "You expect 10x ROAS in week one",
      "You aren't ready to test creatives or landing pages",
      "You only want the cheapest ad-management option",
      "You don't have a real product-market fit yet",
    ],
  },
  faq: [
    { question: "What ecommerce platforms do you work with?", answer: "Shopify, WooCommerce, Magento, BigCommerce and custom stacks. Most of our D2C clients are on Shopify or Shopify Plus." },
    { question: "Do you only do ads or full ecommerce marketing?", answer: "We're a full-stack D2C ecommerce agency in Bangalore — performance ads, SEO, CRO, email/SMS retention, UGC creative and marketplaces all under one roof." },
    { question: "What kind of brands do you work with?", answer: "Direct-to-consumer brands across beauty, F&B, apparel, wellness, home and lifestyle — typically doing ₹10L–₹5Cr/month in revenue and looking to scale profitably." },
    { question: "What does it cost?", answer: "D2C ecommerce retainers typically start at ₹75,000+/month plus ad spend, depending on channels and scope. We share a clear, fixed-scope quote after a discovery call." },
    { question: "How fast will I see ROAS improve?", answer: "Most D2C brands see meaningful ROAS lift within 60-90 days as we scale winning creatives, optimize CRO and turn on retention flows." },
    { question: "Do you handle creative production too?", answer: "Yes. Our in-house team produces UGC, static and video ad creatives specifically built for Meta, Google and YouTube D2C performance." },
    { question: "Will I own my ad accounts and data?", answer: "100%. You own your Meta, Google, Shopify, Klaviyo and analytics accounts. Zero lock-in." },
    { question: "Can you also manage Amazon and Flipkart?", answer: "Absolutely. We run coordinated DTC + marketplace growth so your brand grows on Amazon, Flipkart, Myntra and your own store together." },
  ],
  finalCTA: {
    headline: "Ready to scale your D2C brand profitably?",
    description: "Get a free ecommerce growth audit and a custom 90-day D2C roadmap built for your store.",
    buttonText: "Get Free Ecommerce Audit",
  },
};

const EcommerceMarketing = () => <ServicePageTemplate config={config} />;
export default EcommerceMarketing;
