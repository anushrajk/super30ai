import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { Globe, Layout, Shield, Gauge, Search, Zap, Users, Layers, Code, Smartphone, PenTool, BarChart3, Award, Target, Clock, Settings } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "WordPress Website Development Company in Bangalore",
    description: "Build a powerful WordPress site with our WordPress development company in Bangalore. We create fast, flexible and easy to manage websites for businesses",
    keywords: "wordpress website development company in bangalore, wordpress development company bangalore, wordpress web design company in bangalore, wordpress website development services in bangalore, custom wordpress website design in bangalore",
    canonical: "https://www.thesuper30.ai/wordpress-website-development-company-bangalore",
    serviceType: "WordPress Website Development",
    ogTitle: "WordPress Done Right Makes Your Business Look Professional.",
    ogDescription: "Fast, flexible and easy-to-manage WordPress websites that give your business full control. Let's go!",
    twitterTitle: "WordPress Done Right Makes Your Business Look Professional.",
    twitterDescription: "Fast, flexible and easy-to-manage WordPress websites that give your business full control. Let's go!",
  },
  hero: {
    badgeIcon: Globe,
    badgeText: "WordPress Development Company in Bangalore",
    headlineLine1: "WordPress Website Development",
    headlineLine2: "Company in Bangalore",
    description: <>Bangalore's trusted <span className="text-foreground font-semibold">WordPress development company</span> — custom WordPress website design and development that's <span className="text-foreground font-semibold">fast, secure, SEO-optimized, and easy to manage</span>. From blogs to enterprise sites.</>,
    trustSignals: [
      { icon: Gauge, text: "Speed-Optimized — Sub 2s Load" },
      { icon: Shield, text: "Security-Hardened" },
      { icon: Search, text: "SEO-Ready from Day One" },
      { icon: Settings, text: "Easy Self-Management" },
    ],
    credentials: ["150+ WordPress Sites Built", "Speed-Optimized", "Security-First"],
    formTitle: "Free WordPress Development Consultation in Bangalore",
    formDescription: "Tell us about your project — our WordPress development company in Bangalore will plan a fast, secure, easy-to-manage WordPress solution.",
    formButtonText: "Get Free WordPress Quote",
  },
  source: "wordpress_website",
  problems: [
    { icon: Gauge, title: "Your WordPress Site is Slow", description: "Bloated themes and too many plugins have made your site painfully slow." },
    { icon: Shield, title: "Security Vulnerabilities", description: "Outdated WordPress, themes, and plugins leave your site open to hackers." },
    { icon: Code, title: "Stuck with a Generic Theme", description: "Your site looks like a template because it was built with a page builder and no design." },
    { icon: Settings, title: "Can't Update Content Easily", description: "Making simple content changes requires calling your developer every time." },
  ],
  services: [
    { icon: PenTool, title: "Custom Theme Development", description: "Unique WordPress themes designed and coded specifically for your brand." },
    { icon: Code, title: "Plugin Development", description: "Custom plugins for features not available in existing solutions." },
    { icon: Layout, title: "Page Builder Sites", description: "Elementor and Gutenberg-based sites that you can edit yourself." },
    { icon: Globe, title: "WooCommerce", description: "Full e-commerce functionality with WordPress — products, payments, shipping." },
    { icon: Gauge, title: "Speed Optimization", description: "Caching, image optimization, CDN setup, and code cleanup for fast loading." },
    { icon: Shield, title: "Security Hardening", description: "Firewall, malware scanning, login protection, and security best practices." },
    { icon: Search, title: "WordPress SEO", description: "On-page SEO setup with Yoast/RankMath, schema, and technical SEO." },
    { icon: Layers, title: "Migration Services", description: "Migrate from any platform to WordPress with zero data loss." },
  ],
  comparison: {
    traditional: [
      "Generic theme with logo swap — looks like a template",
      "20+ plugins that bloat and slow down the site",
      "No security setup — vulnerable to hacking",
      "Content editing is confusing and breaks the layout",
      "No SEO configuration — invisible to Google",
      "One-time delivery — no ongoing support",
    ],
    super30: [
      "Custom-designed theme that looks uniquely yours",
      "Minimal plugins — custom code for clean performance",
      "Security-hardened with firewall, scanning, and backups",
      "Intuitive editing — update content without breaking anything",
      "Full SEO setup — schema, meta tags, sitemap, speed",
      "Ongoing maintenance and support packages available",
    ],
  },
  benefits: [
    { icon: Gauge, title: "Lightning Fast", description: "Optimized for sub-2-second load times with caching and CDN." },
    { icon: Shield, title: "Secure & Protected", description: "Hardened WordPress with firewall, malware scanning, and daily backups." },
    { icon: Search, title: "SEO-Optimized", description: "Built with clean code, proper structure, and full SEO configuration." },
    { icon: Settings, title: "Easy to Manage", description: "Update content, add pages, and manage media without any coding." },
    { icon: Smartphone, title: "Fully Responsive", description: "Perfect on desktop, tablet, and mobile — tested across devices." },
    { icon: Code, title: "Clean Code", description: "No bloat, no unnecessary plugins — just clean, efficient code." },
    { icon: Layers, title: "Scalable", description: "Architecture that grows with your business — add features as you need." },
    { icon: Clock, title: "Quick Delivery", description: "WordPress sites delivered in 2-4 weeks depending on scope." },
    { icon: Award, title: "Expert Team", description: "Senior WordPress developers with 5+ years of experience." },
  ],
  process: [
    { icon: Users, title: "Discover & Plan", description: "Understand your goals, content, and functionality requirements." },
    { icon: PenTool, title: "Design & Build", description: "Custom design in Figma, then WordPress development with clean code." },
    { icon: Shield, title: "Optimize & Secure", description: "Speed optimization, SEO setup, security hardening, and testing." },
    { icon: Zap, title: "Launch & Support", description: "Go live with confidence. Ongoing maintenance available." },
  ],
  whoIsThisFor: {
    forYou: [
      "You want a website you can update and manage yourself",
      "You need a professional site with blog and content management",
      "Your current WordPress site is slow, outdated, or insecure",
      "You want WooCommerce for selling products online",
      "You need a reliable, scalable platform for your growing business",
    ],
    notForYou: [
      "You need a complex web application (not a CMS site)",
      "You want a free WordPress.com site with no customization",
      "You're not willing to invest in proper hosting and maintenance",
      "You expect a WordPress site to work like a mobile app",
    ],
  },
  faq: [
    { question: "How much does a WordPress website cost?", answer: "Basic WordPress sites start from ₹30,000. Custom theme development and WooCommerce stores range from ₹50,000-2 lakhs depending on features and complexity." },
    { question: "How long does it take to build?", answer: "A standard WordPress site takes 2-4 weeks. Complex sites with custom functionality may take 4-8 weeks." },
    { question: "Will I be able to update content myself?", answer: "Absolutely. We build with intuitive admin panels and provide a training session so you can update text, images, pages, and blog posts on your own." },
    { question: "Do you use page builders like Elementor?", answer: "We use Elementor for sites where easy client editing is a priority. For performance-critical sites, we use custom-coded themes with Gutenberg." },
    { question: "Is WordPress secure?", answer: "WordPress core is secure. Vulnerabilities come from poor setup, outdated software, and low-quality plugins. We implement security best practices and monitoring." },
    { question: "Do you provide hosting?", answer: "We recommend and can set up managed WordPress hosting on platforms like Cloudways, SiteGround, or AWS — optimized for speed and security." },
    { question: "Can you migrate my existing site to WordPress?", answer: "Yes. We handle migrations from Wix, Squarespace, Joomla, Drupal, or any other platform to WordPress with content and SEO preserved." },
    { question: "Do you offer ongoing maintenance?", answer: "Yes. Our maintenance packages include updates, security monitoring, backups, speed checks, and priority support starting from ₹5,000/month." },
  ],
  finalCTA: {
    headline: "Ready for a WordPress Site That Performs?",
    description: "Get a free consultation and let's build a fast, secure, beautiful WordPress website.",
    buttonText: "Get Free WordPress Quote",
  },
};

const WordpressWebsite = () => <ServicePageTemplate config={config} />;
export default WordpressWebsite;
