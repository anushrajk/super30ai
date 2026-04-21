import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { ShoppingCart, Globe, CreditCard, Package, Smartphone, Gauge, Shield, Target, BarChart3, Search, Layers, Zap, Users, Award, TrendingUp, Clock } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Ecommerce Website Development company in Bangalore",
    description: "Launch or grow your online store with our ecommerce website development company in Bangalore. We build fast, secure and conversion-ready stores. Let's Build!",
    keywords: "ecommerce website development company in bangalore, ecommerce web design company in bangalore, ecommerce website development services, ecommerce website development solutions, ecommerce account management services",
    canonical: "https://www.thesuper30.ai/ecommerce-website-development-company-bangalore",
    serviceType: "Ecommerce Website Development",
    ogTitle: "Your Online Store Should Sell While You Sleep. Does It?",
    ogDescription: "Fast, secure and conversion-focused ecommerce sites built to help your store sell more. Let's build!",
    twitterTitle: "Your Online Store Should Sell While You Sleep. Does It?",
    twitterDescription: "Fast, secure and conversion-focused ecommerce sites built to help your store sell more. Let's build!",
  },
  hero: {
    badgeIcon: ShoppingCart,
    badgeText: "Ecommerce Website Development Company in Bangalore",
    headlineLine1: "Ecommerce Website Development",
    headlineLine2: "Company in Bangalore",
    description: <>Bangalore's leading <span className="text-foreground font-semibold">ecommerce website development company</span> — fast, secure, conversion-ready online stores with <span className="text-foreground font-semibold">seamless checkout, payment integration, and ecommerce SEO</span> on Shopify, WooCommerce or custom platforms.</>,
    trustSignals: [
      { icon: CreditCard, text: "Payment Gateway Integration" },
      { icon: Smartphone, text: "Mobile-First Shopping Experience" },
      { icon: Gauge, text: "Lightning-Fast Load Times" },
      { icon: Shield, text: "Secure & PCI Compliant" },
    ],
    credentials: ["100+ Stores Built", "Shopify & WooCommerce", "Payment Ready"],
    formTitle: "Free Ecommerce Website Consultation in Bangalore",
    formDescription: "Tell us about your products — our ecommerce website development company in Bangalore will plan a store built to maximize online sales.",
    formButtonText: "Get Free Ecommerce Quote",
  },
  source: "ecommerce_website",
  problems: [
    { icon: ShoppingCart, title: "Cart Abandonment is Killing Sales", description: "70% of shoppers abandon carts because of poor checkout UX, hidden costs, or slow loading." },
    { icon: Smartphone, title: "Store Looks Terrible on Mobile", description: "Most of your traffic is mobile but your store isn't optimized for small screens." },
    { icon: Search, title: "Products Don't Show on Google", description: "Your products aren't indexed or optimized for search — missing free organic traffic." },
    { icon: Gauge, title: "Slow Loading = Lost Sales", description: "Every second of load time costs you 7% in conversions. Your store is too slow." },
  ],
  services: [
    { icon: ShoppingCart, title: "Shopify Development", description: "Custom Shopify stores with themes, apps, and checkout optimization." },
    { icon: Globe, title: "WooCommerce Stores", description: "WordPress-based online stores with full customization capabilities." },
    { icon: CreditCard, title: "Payment Integration", description: "Razorpay, PayU, Stripe, PayPal, and UPI payment gateway setup." },
    { icon: Package, title: "Inventory Management", description: "Product management, stock tracking, and order fulfillment systems." },
    { icon: Smartphone, title: "Mobile Commerce", description: "Mobile-optimized shopping experiences with touch-friendly interfaces." },
    { icon: Search, title: "Ecommerce SEO", description: "Product page SEO, schema markup, and Google Shopping integration." },
    { icon: Target, title: "Conversion Optimization", description: "A/B testing, checkout optimization, and cart recovery strategies." },
    { icon: BarChart3, title: "Analytics & Tracking", description: "Revenue tracking, GA4 ecommerce events, and performance dashboards." },
  ],
  comparison: {
    traditional: [
      "Template stores with no customization",
      "Complicated checkout that kills conversions",
      "No SEO optimization for product pages",
      "Slow loading due to unoptimized images and code",
      "No analytics — can't track what's working",
      "Launch and forget — no ongoing optimization",
    ],
    super30: [
      "Custom-designed stores aligned with your brand",
      "Streamlined 1-2 step checkout for maximum conversions",
      "Full ecommerce SEO with schema and Google Shopping",
      "Speed-optimized with Core Web Vitals compliance",
      "Complete analytics — revenue, conversions, customer behavior",
      "Ongoing support, optimization, and growth strategies",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher Conversion Rate", description: "Optimized checkout flows increase conversions by 25-40%." },
    { icon: Smartphone, title: "Mobile-First Design", description: "Beautiful shopping experience on every device and screen size." },
    { icon: Gauge, title: "Fast Loading", description: "Sub-2-second load times that keep shoppers engaged and buying." },
    { icon: Search, title: "SEO-Optimized", description: "Products rank on Google with proper SEO, schema, and structured data." },
    { icon: CreditCard, title: "Multiple Payment Options", description: "Support every payment method your customers prefer." },
    { icon: Shield, title: "Secure & Trusted", description: "SSL, PCI compliance, and fraud protection build customer trust." },
    { icon: Package, title: "Easy Management", description: "Intuitive admin panel for products, orders, and customer management." },
    { icon: BarChart3, title: "Data-Driven Growth", description: "Analytics and insights to continuously improve store performance." },
    { icon: Clock, title: "Quick Launch", description: "Get your store live and selling in 3-6 weeks." },
  ],
  process: [
    { icon: Users, title: "Discovery & Planning", description: "Understand your products, audience, and business goals for the online store." },
    { icon: Layers, title: "Design & Build", description: "Custom design, development, payment integration, and product setup." },
    { icon: Shield, title: "Test & Launch", description: "Thorough testing — checkout, payments, mobile, speed — then go live." },
    { icon: TrendingUp, title: "Grow & Optimize", description: "Ongoing optimization, marketing integration, and conversion improvements." },
  ],
  whoIsThisFor: {
    forYou: [
      "You want to sell products online and need a professional store",
      "Your current online store has low conversions and high cart abandonment",
      "You need payment gateway integration and inventory management",
      "You want an SEO-optimized store that attracts organic traffic",
      "You're ready to invest in a store that drives real revenue",
    ],
    notForYou: [
      "You want to sell 3 products on a free website builder",
      "You expect to build a store for ₹5,000",
      "You don't have products ready or a business registered",
      "You want a marketplace like Amazon — not a standalone store",
    ],
  },
  faq: [
    { question: "Shopify or WooCommerce — which is better?", answer: "Shopify is ideal for businesses wanting a hosted, easy-to-manage solution. WooCommerce is better for businesses wanting full customization and control. We'll recommend based on your needs." },
    { question: "How much does an ecommerce website cost?", answer: "Basic stores start from ₹50,000. Feature-rich stores with custom design, integrations, and advanced functionality range from ₹1-3 lakhs. We provide detailed quotes after understanding requirements." },
    { question: "How long does it take to build?", answer: "A standard ecommerce store takes 4-8 weeks. Complex stores with custom features may take 8-12 weeks." },
    { question: "Which payment gateways do you integrate?", answer: "We integrate Razorpay, PayU, Stripe, PayPal, Cashfree, and UPI. We can work with any payment provider available in India." },
    { question: "Will the store be mobile-friendly?", answer: "Absolutely. All our stores are mobile-first — designed and tested to work perfectly on smartphones, tablets, and desktops." },
    { question: "Do you help with product photography and content?", answer: "Yes. Our design and content teams can help with product photography, descriptions, and category pages." },
    { question: "Can you migrate from an existing platform?", answer: "Yes. We handle migrations from Shopify to WooCommerce, WooCommerce to Shopify, or from any other platform — with all data preserved." },
    { question: "Do you offer ongoing maintenance?", answer: "Yes. We offer maintenance packages for updates, security patches, new features, and performance optimization." },
  ],
  finalCTA: {
    headline: "Ready to Launch Your Online Store?",
    description: "Get a free ecommerce consultation and start selling online within weeks.",
    buttonText: "Get Free Ecommerce Quote",
  },
};

const EcommerceWebsite = () => <ServicePageTemplate config={config} />;
export default EcommerceWebsite;
