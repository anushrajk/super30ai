import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { ShoppingCart, Globe, CreditCard, Package, Smartphone, Gauge, Shield, Target, BarChart3, Search, Layers, Zap, Users, Award, TrendingUp, Clock } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "E-commerce Website Development company in Bangalore",
    description: "Launch or grow your online store with our E-commerce website development company in Bangalore. We build fast, secure and conversion-ready stores. Let's Build!",
    keywords: "ecommerce website development company in bangalore, ecommerce web design company in bangalore, ecommerce website development services in bangalore, ecommerce website development solutions in bangalore, ecommerce account management services in bangalore",
    canonical: "https://www.thesuper30.ai/ecommerce-website-development-company-bangalore",
    serviceType: "Ecommerce Website Development",
    ogTitle: "Your Online Store Should Sell While You Sleep. Does It?",
    ogDescription: "Fast, secure and conversion-focused ecommerce sites built to help your store sell more. Let's build!",
    twitterTitle: "Your Online Store Should Sell While You Sleep. Does It?",
    twitterDescription: "Fast, secure and conversion-focused ecommerce sites built to help your store sell more. Let's build!",
  },
  hero: {
    badgeIcon: ShoppingCart,
    badgeText: "E-commerce Website Development",
    headlineLine1: "E-commerce Website Development Company",
    headlineLine2: "in Bangalore for High Conversions",
    description: <>Our <span className="text-foreground font-semibold">E-commerce website development services in Bangalore</span> build high-performance online stores seamlessly with secure payment gateways, a smooth shopping experience and <span className="text-foreground font-semibold">search optimized E-commerce solutions</span> on Shopify, WooCommerce or custom platforms.</>,
    trustSignals: [
      { icon: CreditCard, text: "Payment Gateway Integration" },
      { icon: Smartphone, text: "Mobile Optimized Shopping Experience" },
      { icon: Gauge, text: "Fast Website Performance" },
      { icon: Shield, text: "Secure and PCI Compliant" },
    ],
    credentials: ["100+ Stores Built", "Shopify & WooCommerce", "Payment Ready"],
    formTitle: "Free Ecommerce Website Consultation in Bangalore",
    formDescription: "Tell us about your products — our ecommerce website development company in Bangalore will plan a store built to maximize online sales.",
    formButtonText: "Enquire Now",
  },
  source: "ecommerce_website",
  sections: {
    problems: {
      title: "The Challenges That Growing E-commerce Brands Face",
      description: "Conversion issues, poor user experience, and lower visibility are some common problems faced by many online stores. These problems limit the possibilities of sales, customer retention and long term growth in E-commerce.",
    },
    services: {
      title: "Complete E-commerce Website Development solutions in Bangalore for Growth Focused Brands",
      description: "From storefront development to conversion optimization, we build E-commerce ecosystems designed to improve customer experiences, streamline operations, and maximize online revenue.",
    },
    comparison: {
      eyebrow: "What Makes Us Different?",
      title: "Traditional Agency vs. The Super 30",
      description: "Compare how a performance focused E-commerce website development company in Bangalore delivers stronger user experiences, higher conversions, and sustainable business growth compared to conventional E-commerce agencies.",
    },
    benefits: {
      eyebrow: "WHY BRANDS CHOOSE US",
      title: "We Build for Optimized E-Commerce Websites For High Engagement and Conversions",
      description: "Our E-commerce web design company in Bangalore creates E-commerce websites that combine performance, user experience, and conversion based functionality to help brands attract customers, increase sales, and scale with confidence.",
    },
    industries: {
      title: "E-Commerce Web Development for Every Industry",
      description: "Custom E-commerce websites designed across all industries, customer journeys, and business models that drive high revenue and conversions.",
    },
    whoIsThisFor: {
      title: "Is E-Commerce Web Development the Right Investment for Your Business?",
      description: "Built for business owners who want a commercially aligned online store — one that drives revenue, retains customers, and scales with your brand.",
    },
  },
  problems: [
    { icon: ShoppingCart, title: "Cart Abandonment Reduces Revenue", description: "Many shoppers leave carts because of complicated checkout experiences, unexpected charges, or slower purchasing journeys." },
    { icon: Smartphone, title: "Weak Store Optimization For Mobiles", description: "A large share of customers browse on mobile, but many stores remain difficult to navigate through mobile screens." },
    { icon: Search, title: "Products Struggle to Rank on Search Engines", description: "Product pages lack proper optimization for search visibility, reducing valuable organic traffic and discovery opportunities." },
    { icon: Gauge, title: "Slow Performance Impacts Revenue", description: "Longer loading times affect customer engagement and conversions. Store performance directly influences purchasing decisions." },
  ],
  services: [
    { icon: ShoppingCart, title: "Shopify Store Development", description: "Custom Shopify stores with design themes, applications, and checkout experiences built for higher conversions." },
    { icon: Globe, title: "WooCommerce Development", description: "Custom WordPress E-commerce solutions with advanced functionality, flexibility, and seamless business integration capabilities." },
    { icon: CreditCard, title: "Payment Gateway Integration", description: "Razorpay, PayU, Stripe, PayPal, and UPI payment gateway integration configured for secure transactions." },
    { icon: Package, title: "Inventory Management Systems", description: "Inventory control, stock monitoring, and order management solutions built for operational efficiency." },
    { icon: Smartphone, title: "Mobile Commerce Experience", description: "Mobile optimized shopping experiences with intuitive navigation and seamless purchasing journeys." },
    { icon: Search, title: "E-Commerce Search Optimization", description: "Product page optimization, schema implementation, and Google Shopping integration for better visibility." },
    { icon: Target, title: "Conversion Rate Optimization", description: "A/B testing, checkout refinement, and cart recovery strategies focused on improving sales performance." },
    { icon: BarChart3, title: "Analytics and Performance Tracking", description: "Revenue reporting, GA4 E-commerce tracking, and performance dashboards for data driven decisions." },
  ],
  comparison: {
    traditional: [
      "Generic store templates with limited customization",
      "Complex checkout journeys that reduce conversions",
      "No SEO optimization for product visibility",
      "Slower performance from unoptimized assets and code",
      "Minimal reporting on business performance insights",
      "Store launch completed without growth support",
    ],
    super30: [
      "Custom E-commerce stores perfectly aligned for your brand",
      "Simplified 1-2 step checkout experience for maximum conversions",
      "Advanced E-commerce SEO with schema and shopping integration",
      "Optimized performance with Core Web Vitals compliance",
      "Detailed analytics covering revenue and customer insights",
      "Continuous support, optimization, and growth strategies",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher Conversion Rates", description: "Conversion focused checkout experiences designed to increase sales and improve customer purchasing decisions upto 25-40%." },
    { icon: Smartphone, title: "Mobile Commerce Excellence", description: "Seamless shopping experiences optimized for mobile devices, screen size, and customer journey." },
    { icon: Gauge, title: "Fast Loading & Performance", description: "Fast loading E-commerce stores built to improve engagement, retention, and completed purchases." },
    { icon: Search, title: "Search Optimized Stores", description: "Websites that rank with E-commerce SEO best practices, structured data, and enhanced search visibility." },
    { icon: CreditCard, title: "Flexible Payment Integration", description: "Support for multiple payment solutions to deliver a convenient checkout experience." },
    { icon: Shield, title: "Secure Shopping Experience", description: "Advanced security standards and compliance measures that strengthen customer confidence." },
    { icon: Package, title: "Easy Store Management", description: "User friendly administration tools for products, orders, inventory, and customer operations." },
    { icon: BarChart3, title: "Insights Driven Growth", description: "Performance reporting and customer insights that support informed business decisions." },
    { icon: Clock, title: "Faster Time to Market", description: "Efficient development processes that help launch your E-commerce store without delays." },
  ],
  process: [
    { icon: Users, title: "Discovery & Planning", description: "Understand your products, audience, and business goals for the online store." },
    { icon: Layers, title: "Design & Build", description: "Custom design, development, payment integration, and product setup." },
    { icon: Shield, title: "Test & Launch", description: "Thorough testing — checkout, payments, mobile, speed — then go live." },
    { icon: TrendingUp, title: "Grow & Optimize", description: "Ongoing optimization, marketing integration, and conversion improvements." },
  ],
  whoIsThisFor: {
    forYou: [
      "You want to build a professional online store that drives sales",
      "Your current E-commerce website struggles with conversions and customer retention",
      "You need secure payment integration and streamlined order management",
      "You want a search optimized store that attracts qualified buyers",
      "You are investing in long-term E-commerce growth and scalability",
    ],
    notForYou: [
      "You only need a basic website for a few products",
      "You are looking for the lowest cost solution for low prices",
      "Your products, operations, or business model are not yet registered",
      "You prefer selling exclusively through third party marketplaces",
    ],
  },
  faq: getFaqs("ecommerce-website"),
  finalCTA: {
    headline: "Ready to Build an E-Commerce Store That Sells?",
    description: "Get a free consultation from our E-commerce website development company in Bangalore and discover the right strategy to launch, scale, and grow your online business.",
    buttonText: "Get Free E-commerce Quote",
  },
};

const EcommerceWebsite = () => <ServicePageTemplate config={config} />;
export default EcommerceWebsite;
