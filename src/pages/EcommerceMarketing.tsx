import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { ShoppingBag, TrendingUp, Target, DollarSign, BarChart3, Zap, Eye, Sparkles, Rocket, Package, Truck, Globe, Clock, Heart, Search, ShoppingCart, Megaphone, Layers, RefreshCw, Users } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "D2C & Ecommerce Marketing Agency in Bangalore",
    description: "Ecommerce marketing agency in Bangalore offering D2C marketing services, performance strategies, and scalable solutions for online brands. Book a free call",
    keywords: "AI ecommerce marketing services in bangalore, AI ecommerce marketing agency in bangalore, Ecommerce marketing services in bangalore, Ecommerce marketing agency in bangalore, d2c ecommerce agency in bangalore, d2c marketing services in bangalore, d2c growth partner in bangalore",
    canonical: "https://www.thesuper30.ai/ecommerce-marketing-agency-bangalore",
    serviceType: "Ecommerce & D2C Marketing",
    ogTitle: "Ecommerce Marketing Agency in Bangalore for D2C Brands",
    ogDescription: "D2C ecommerce agency in Bangalore offering marketing strategies for online brands.",
    twitterTitle: "Ecommerce Marketing Agency in Bangalore for D2C Brands",
    twitterDescription: "D2C ecommerce agency in Bangalore offering marketing strategies for online brands.",
  },
  hero: {
    badgeIcon: ShoppingBag,
    badgeText: "AI E-commerce Marketing Agency in Bangalore",
    headlineLine1: "D2C & E-commerce Marketing Agency",
    headlineLine2: "in Bangalore",
    description: <>As your <span className="text-foreground font-semibold">D2C growth partner in Bangalore</span>, we provide conversion driven marketing strategies right from paid media, SEO, CRO, and retention channels to achieve sustainable revenue growth.</>,
    trustSignals: [
      { icon: TrendingUp, text: "Average 3x ROAS Within 90 Days" },
      { icon: ShoppingCart, text: "Shopify, WooCommerce, and Magento Expertise" },
      { icon: Target, text: "Performance and Retention Growth Strategy" },
      { icon: BarChart3, text: "GA4 Meta and Shopify Reporting Insights" },
    ],
    credentials: ["50+ D2C Brands Scaled", "₹10Cr+ Ad Spend Managed", "Full-Funnel D2C Strategy"],
    formTitle: "Free D2C Ecommerce Growth Audit",
    formDescription: "Share your store URL — our D2C marketing services in Bangalore team will send a teardown with quick wins to lift ROAS and AOV.",
    formButtonText: "Enquire Now",
  },
  source: "ecommerce_marketing",
  problems: [
    { icon: DollarSign, title: "Increased CAC & Reduced ROAS", description: "Meta and Google advertising costs continue to increase, while the overall return on advertising spend keeps declining." },
    { icon: ShoppingCart, title: "Traffic Increases but Carts Drop Off", description: "Your store attracts visitors, but checkout exits and low repeat purchases significantly reduce overall profitability." },
    { icon: RefreshCw, title: "Weak Customer Retention", description: "Every new order feels like starting over because retention channels aren't consistently bringing customers back." },
    { icon: Eye, title: "Brand Visibility Gets Overlooked", description: "Your D2C brand struggles to gain visibility on Google, Instagram, and marketplaces against stronger competitors." },
  ],
  services: [
    { icon: Target, title: "D2C Revenue Growth Marketing", description: "Meta, Google, YouTube, and Pinterest campaigns designed to improve ROAS, AOV, and sustainable e-commerce growth." },
    { icon: Search, title: "E-commerce Search Visibility", description: "Category, product, and collection page SEO that improves high intent organic traffic and qualified sales." },
    { icon: Layers, title: "Conversion Rate Optimization", description: "Product pages, cart flows, and checkout experiences are optimized to improve conversions and reduce abandonment rates." },
    { icon: Megaphone, title: "Creative & UGC Production", description: "Static visuals, video creatives, and UGC assets created specifically for D2C campaign performance and audience attention." },
    { icon: RefreshCw, title: "Email, SMS, and WhatsApp Retention", description: "Klaviyo, WebEngage, and WhatsApp retention flows are designed to convert first time buyers into loyal customers." },
    { icon: Users, title: "Influencer & Affiliate Partnerships", description: "Creator collaborations and affiliate partnerships are structured to generate scalable D2C customer acquisition and revenue." },
    { icon: Package, title: "Marketplace Growth Management", description: "Amazon, Flipkart, and Myntra account management, advertising, and optimization services are designed to improve marketplace sales." },
    { icon: BarChart3, title: "Analytics & Revenue Attribution", description: "GA4, Shopify, Meta, and Triple Whale reporting dashboards provide accurate blended ROAS and customer lifetime insights." },
  ],
  comparison: {
    traditionalTitle: "Traditional E-commerce Agency",
    super30Title: "The Super 30",
    traditional: [
      "General e-commerce agency with limited D2C scaling expertise",
      "Reports focused on impressions, clicks, and surface metrics",
      "Limited CRO testing and conversion optimization processes",
      "No retention marketing, email, or SMS automation strategy",
      "Single platform focus using only Meta or Google campaigns",
      "No strategy focused on AOV, LTV, or repeat customer growth",
    ],
    super30: [
      "D2C e-commerce specialists with proven multi brand growth experience",
      "Revenue tied to ROAS, AOV, LTV, and contribution margins",
      "Continuous CRO improvements across PDPs, carts, and checkout flows",
      "Klaviyo, SMS, and WhatsApp retention systems for retention purchases",
      "Full funnel growth strategy across Meta, Google, SEO, and marketplaces",
      "Profit driven scaling focused on customer value and sustainable revenue",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher Blended ROAS", description: "Structured campaign optimization and creative testing designed to improve blended ROAS consistently within 90 days." },
    { icon: ShoppingCart, title: "Reduced Cart Abandonment", description: "CRO and recovery automation flows are designed to recover abandoned carts and improve checkout conversion rates." },
    { icon: RefreshCw, title: "Higher Retention Purchases", description: "Email, SMS, and WhatsApp retention systems are built to improve repeat purchases and long-term customer value." },
    { icon: DollarSign, title: "Better Unit Economics", description: "Campaigns are optimized around AOV, contribution margins, and customer lifetime value instead of vanity revenue." },
    { icon: Sparkles, title: "Performance Focused Creatives", description: "In-house creative production for UGC, statics, and videos built specifically for D2C campaign performance." },
    { icon: Search, title: "Profitable Organic Growth", description: "E-commerce SEO strategies focused on generating qualified organic traffic and long-term search visibility that compounds every month." },
    { icon: Globe, title: "Marketplace & D2C Expansion", description: "Integrated growth strategies across websites, Amazon, Flipkart, and the Myntra marketplace ecosystems." },
    { icon: Clock, title: "You Focus on Operations", description: "We manage advertising, content, and retention systems while your team focuses on products and operations." },
    { icon: BarChart3, title: "Revenue Focused Reporting", description: "Weekly reporting dashboards built around blended ROAS, AOV, LTV, and contribution margin visibility." },
  ],
  process: [
    { icon: Eye, title: "Audit & Diagnostics", description: "Deep audit of your store, ads, funnel, retention and competitor D2C brands." },
    { icon: Target, title: "D2C Growth Strategy", description: "Custom 90-day roadmap covering acquisition, conversion and retention KPIs." },
    { icon: Zap, title: "Launch & Scale", description: "Campaigns, creatives, CRO experiments and retention flows launched and scaled weekly." },
    { icon: TrendingUp, title: "Optimize & Compound", description: "Weekly optimization, monthly business reviews and quarterly D2C growth planning." },
  ],
  whoIsThisFor: {
    forYouTitle: "Perfect For You If...",
    notForYouTitle: "Not the Right Fit If...",
    forYou: [
      "You manage a D2C or e-commerce brand with consistent monthly sales",
      "You are prepared to invest in advertising, CRO, and retention growth",
      "You want a strategic growth partner instead of only media buying support",
      "You focus on ROAS, AOV, and LTV instead of vanity revenue metrics",
      "You want complete funnel ownership instead of disconnected channel management",
    ],
    notForYou: [
      "You expect instant ROAS growth within the first few campaign weeks",
      "You are not prepared to test creatives, funnels, or landing experiences",
      "You only want the lowest cost advertising management service available",
      "Your business has not achieved a stable product market fit yet",
    ],
  },
  faq: getFaqs("ecommerce-marketing"),
  finalCTA: {
    headline: "Scale Your Store with an E-commerce Marketing Agency in Bangalore",
    description: "Get a complimentary audit from our D2C E-commerce agency in Bangalore, along with it receive a customised growth plan for profitable scaling for a period of 90 days.",
    buttonText: "Get Free E-commerce Audit",
  },
  sections: {
    problems: {
      title: "The Revenue Challenges That Scaling Businesses Face",
      description: "Many e-commerce brands struggle with rising acquisition costs, weak retention, abandoned carts, and inconsistent marketplace visibility despite increasing traffic.",
    },
    services: {
      eyebrow: "What We Offer?",
      title: "E-commerce Marketing Services in Bangalore That Scale Business Revenue",
      description: "From acquisition and retention to conversion and marketplace growth, our D2C marketing services in Bangalore are built to boost revenue, customer value, and long-term profitability.",
    },
    comparison: {
      title: <>Traditional Agency <span className="text-brand">vs. The Super 30</span></>,
    },
    benefits: {
      eyebrow: "Why Brands Choose Us?",
      title: "Why Brands Choose Our D2C E-commerce Agency in Bangalore?",
      description: "Every strategy is built around profitable growth, customer retention, higher customer value, and long-term e-commerce revenue performance through data driven AI E-commerce marketing services in Bangalore.",
    },
    industries: {
      eyebrow: "Industry Specialization",
      title: "E-Commerce Marketing Strategies for Every Industry",
      description: "Marketing strategies that are trusted by 18+ industry sectors. We understand your audience, business model and market behaviour.",
    },
    whoIsThisFor: {
      title: "Is This the Right Fit for your Business?",
    },
  },
};

const EcommerceMarketing = () => <ServicePageTemplate config={config} />;
export default EcommerceMarketing;
