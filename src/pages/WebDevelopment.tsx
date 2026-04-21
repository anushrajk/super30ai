import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import {
  Code2, Cpu, ServerCog, ShoppingCart, Smartphone, Gauge, Shield, Zap,
  GitBranch, Database, Cloud, Layers, Wrench, Workflow, Globe, CheckCircle2,
} from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Web Development Company in Bangalore | Custom Web Solutions",
    description:
      "Build a website that performs. Our web development agency in Bangalore creates fast, scalable websites built for your business goals. Let's Build!",
    keywords:
      "web development company bangalore, website development services in bangalore, web development agency in bangalore, custom website development in bangalore",
    canonical: "https://www.thesuper30.ai/web-development-company-bangalore",
    serviceType: "Web Development",
    ogTitle: "A Website That Performs Is Your Best Sales Tool. Period.",
    ogDescription:
      "Fast, scalable and custom web development solutions built around your business goals. Let's build!",
    twitterTitle: "A Website That Performs Is Your Best Sales Tool. Period.",
    twitterDescription:
      "Fast, scalable and custom web development solutions built around your business goals. Let's build!",
  },
  hero: {
    badgeIcon: Code2,
    badgeText: "Custom Web Development Experts",
    headlineLine1: "Web Development Company",
    headlineLine2: "in Bangalore",
    description: (
      <>
        Custom-coded, blazing-fast web applications and websites — engineered with <span className="text-foreground font-semibold">React, Next.js, Node.js, and modern cloud stacks</span> — built to scale with your business.
      </>
    ),
    trustSignals: [
      { icon: Shield, text: "Enterprise-Grade Security" },
      { icon: Gauge, text: "100/100 PageSpeed Score" },
      { icon: Cpu, text: "Modern Stack: React, Next.js, Node" },
      { icon: Zap, text: "Agile Sprints, Weekly Demos" },
    ],
    credentials: ["100+ Sites Shipped", "98% On-Time Delivery", "4.9/5 Client Rating"],
    formTitle: "Get Your Free Tech Consultation",
    formDescription: "Share your project — we'll send back a scope, timeline, and budget in 3 business days.",
    formButtonText: "Get Free Consultation",
  },
  source: "web_development",
  problems: [
    { icon: Gauge, title: "Slow Website Performance", description: "Your site takes 6+ seconds to load. Users bounce, Google penalises, and conversions tank." },
    { icon: ServerCog, title: "Outdated Tech Stack", description: "Legacy WordPress themes or no-code builders that can't handle traffic spikes or custom logic." },
    { icon: Wrench, title: "Constant Bugs & Downtime", description: "Every release breaks something. Your dev team spends more time fixing than shipping." },
    { icon: Shield, title: "Security Vulnerabilities", description: "Outdated plugins, no SSL hardening, no audit trail. One breach away from disaster." },
  ],
  services: [
    { icon: Code2, title: "Custom Web Apps", description: "Bespoke web applications built with React, Next.js, and Node.js — exactly to your spec." },
    { icon: ShoppingCart, title: "E-Commerce Development", description: "Shopify, WooCommerce, and headless commerce stores that convert and scale." },
    { icon: Workflow, title: "API Development", description: "REST and GraphQL APIs with auth, rate limits, and clean documentation." },
    { icon: Database, title: "Database Architecture", description: "Postgres, MongoDB, and Supabase setups designed for performance and scale." },
    { icon: Smartphone, title: "Progressive Web Apps", description: "PWAs that feel native on mobile — installable, offline-capable, and fast." },
    { icon: Cloud, title: "Cloud Deployment", description: "Vercel, AWS, and GCP deployments with CI/CD pipelines and monitoring built in." },
    { icon: GitBranch, title: "DevOps & Automation", description: "GitHub Actions, automated testing, and zero-downtime deployments." },
    { icon: Wrench, title: "Maintenance & Support", description: "SLA-backed support, security patches, and feature releases on a monthly retainer." },
  ],
  comparison: {
    traditional: [
      "Generic templates with limited customisation",
      "Slow load times — 5-8 seconds on mobile",
      "Outdated stacks (PHP 5, jQuery, legacy WordPress)",
      "No version control, no CI/CD pipeline",
      "Surprise scope changes and missed deadlines",
      "Hand-off then radio silence — no support",
    ],
    super30: [
      "Custom-coded for your exact business requirements",
      "<2 second load times with 100/100 PageSpeed scores",
      "Modern stacks: React, Next.js, Node, TypeScript, Postgres",
      "Git-based workflow with automated CI/CD on every push",
      "Fixed sprints, weekly demos, transparent timelines",
      "Ongoing SLA-backed support and proactive monitoring",
    ],
  },
  benefits: [
    { icon: Gauge, title: "Lightning Performance", description: "Sub-2-second loads, 100/100 PageSpeed — Google rewards it, users love it." },
    { icon: Layers, title: "Truly Scalable", description: "Architectures that handle 10x traffic spikes without re-platforming." },
    { icon: Shield, title: "Bank-Grade Security", description: "OWASP-compliant, SSL/TLS hardened, vulnerability-scanned every release." },
    { icon: Cpu, title: "Modern Stack", description: "React, Next.js, Node.js, TypeScript — the same tools used by Stripe, Vercel, Notion." },
    { icon: Workflow, title: "Clean Code", description: "Documented, tested, version-controlled code your future devs will thank you for." },
    { icon: Zap, title: "Faster Time to Market", description: "Agile sprints with weekly demos — see progress every Friday, not after 6 months." },
    { icon: Globe, title: "SEO-Ready", description: "Server-side rendering, structured data, and Core Web Vitals optimisation baked in." },
    { icon: Cloud, title: "Cloud-Native", description: "Deployed on Vercel, AWS, or GCP with auto-scaling, CDN, and 99.9% uptime SLA." },
    { icon: CheckCircle2, title: "Full Ownership", description: "You own the code, the repo, and the IP. No vendor lock-in, ever." },
  ],
  process: [
    { icon: Layers, title: "Discovery & Scope", description: "Workshops to align on goals, features, tech stack, and timelines." },
    { icon: Code2, title: "Design & Architecture", description: "UX wireframes, UI designs, and a technical architecture document signed off before code." },
    { icon: GitBranch, title: "Build & Test", description: "2-week agile sprints with weekly demos, automated testing, and code reviews." },
    { icon: Cloud, title: "Launch & Support", description: "Production deployment with monitoring, then ongoing SLA-backed maintenance." },
  ],
  whoIsThisFor: {
    forYou: [
      "You need a custom web application — not a template-based site",
      "You're scaling and your current stack can't keep up",
      "You want modern tech that future devs can maintain",
      "You value performance, security, and clean code",
      "You're ready to invest ₹2L+ for a project built right",
    ],
    notForYou: [
      "You need a 1-page site for ₹10,000",
      "You want a no-code Wix/Squarespace site",
      "You expect a fully custom platform delivered in 2 weeks",
      "You don't have time for sprint reviews and feedback",
    ],
  },
  faq: [
    { question: "What tech stack do you build with?", answer: "Frontend: React, Next.js, TypeScript, Tailwind CSS. Backend: Node.js, Express, NestJS. Database: Postgres, MongoDB, Supabase. Hosting: Vercel, AWS, GCP. We pick the stack based on your project, not what's trendy." },
    { question: "How much does custom web development cost in Bangalore?", answer: "Custom web app projects typically range from ₹2L to ₹25L depending on scope, integrations, and complexity. We share a fixed-scope quote after a free discovery call." },
    { question: "How long does a typical project take?", answer: "Marketing sites: 4–6 weeks. SaaS MVPs: 8–12 weeks. Enterprise platforms: 4–6 months. We work in 2-week sprints with weekly demos so you always know progress." },
    { question: "Do you offer ongoing maintenance?", answer: "Yes. We offer SLA-backed monthly retainers covering security patches, bug fixes, performance monitoring, and small feature releases." },
    { question: "Will I own the source code?", answer: "100%. You own the code, the GitHub repo, and all IP. We provide full handover documentation and zero vendor lock-in." },
    { question: "Can you work with our existing dev team?", answer: "Absolutely. We collaborate with in-house teams via shared GitHub, Slack, and sprint planning — augmenting capacity without stepping on toes." },
    { question: "Do you build on WordPress or only custom?", answer: "Both. For content-heavy sites we recommend headless WordPress or Webflow. For complex apps and SaaS products, we build custom with React/Next.js." },
    { question: "Is the website mobile-responsive and SEO-optimised?", answer: "Yes. Every site is mobile-first, achieves 100/100 PageSpeed, has structured data, and ships with technical SEO best practices baked in." },
  ],
  finalCTA: {
    headline: "Ready to Build a Website That Actually Performs?",
    description: "Share your project brief — we'll send back a scope, timeline, and budget in 3 business days. No commitment.",
    buttonText: "Get Free Consultation",
  },
};

const WebDevelopment = () => <ServicePageTemplate config={config} />;
export default WebDevelopment;
