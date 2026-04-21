import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { Code2, Rocket, Gauge, Shield, Server, Database, Cloud, GitBranch, Workflow, Boxes, Layers, Globe, Zap, Lock, Activity, CheckCircle, Cpu, Terminal } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Web Development Company in Bangalore | Custom Web Solutions",
    description: "Build a website that performs. Our web development agency in Bangalore creates fast, scalable websites built for your business goals. Let's Build!",
    keywords: "web development company bangalore, website development services in bangalore, web development agency in bangalore, custom website development in bangalore",
    canonical: "https://www.thesuper30.ai/web-development-company-bangalore",
    serviceType: "Web Development",
    ogTitle: "A Website That Performs Is Your Best Sales Tool. Period.",
    ogDescription: "Fast, scalable and custom web development solutions built around your business goals. Let's build!",
    twitterTitle: "A Website That Performs Is Your Best Sales Tool. Period.",
    twitterDescription: "Fast, scalable and custom web development solutions built around your business goals. Let's build!",
  },
  hero: {
    badgeIcon: Code2,
    badgeText: "Web Development Company in Bangalore",
    headlineLine1: "Web Development Company",
    headlineLine2: "in Bangalore",
    description: <>Bangalore's trusted <span className="text-foreground font-semibold">web development agency</span> — custom website development with React, Next.js and modern cloud stacks, <span className="text-foreground font-semibold">engineered to be fast, scalable, and built around your business goals</span>.</>,
    trustSignals: [
      { icon: Gauge, text: "100/100 PageSpeed Targets" },
      { icon: Shield, text: "OWASP-Hardened Security" },
      { icon: Activity, text: "99.9% Uptime SLA" },
      { icon: GitBranch, text: "Clean Code, Full Handover" },
    ],
    credentials: ["200+ Sites Shipped", "Modern Tech Stack", "SLA-Backed Support"],
    formTitle: "Free Web Development Scope in Bangalore",
    formDescription: "Share your project brief — Bangalore's trusted web development agency will send back a scope, timeline and budget within 3 business days.",
    formButtonText: "Get Free Project Scope",
  },
  source: "web_development",
  problems: [
    { icon: Gauge, title: "Slow, Bloated Website", description: "6-second load times are killing conversions and tanking your Google rankings." },
    { icon: Shield, title: "Security & Uptime Issues", description: "Constant downtime, plugin conflicts and security holes are hurting trust and SEO." },
    { icon: Boxes, title: "Can't Scale With Growth", description: "Your current site breaks when traffic spikes — and adding features takes weeks." },
    { icon: Lock, title: "Vendor Lock-In", description: "You don't own your code, can't switch providers and every small change costs a fortune." },
  ],
  services: [
    { icon: Code2, title: "Custom Web Applications", description: "Bespoke React + Next.js apps with bulletproof TypeScript, built to your exact spec." },
    { icon: Rocket, title: "SaaS MVPs", description: "Idea to live MVP in 8-12 weeks. Auth, billing, dashboards, multi-tenancy — production ready." },
    { icon: Workflow, title: "API Engineering", description: "REST + GraphQL APIs with auth, rate limiting, caching and clean OpenAPI docs." },
    { icon: Boxes, title: "E-commerce Platforms", description: "Headless commerce with Shopify, Medusa, or fully custom carts that scale to millions." },
    { icon: GitBranch, title: "DevOps & CI/CD", description: "GitHub Actions, automated testing, preview environments, zero-downtime deployments." },
    { icon: Gauge, title: "Performance Engineering", description: "From 6s loads to sub-2s. Edge caching, image pipelines, code splitting, CWV tuning." },
    { icon: Database, title: "Database & Backend", description: "Postgres, Supabase, MongoDB schemas designed for scale, integrity and speed." },
    { icon: Cloud, title: "Cloud Infrastructure", description: "Vercel, AWS and GCP setups with monitoring, autoscaling and cost optimization." },
  ],
  comparison: {
    traditional: [
      "Template-based, generic builds",
      "No code ownership — locked into the agency",
      "Slow PageSpeed scores below 50",
      "No automated testing or CI/CD",
      "Months of delays and missed deadlines",
      "No documentation, no handover",
    ],
    super30: [
      "Custom-coded, built for your business logic",
      "100% code ownership and full GitHub handover",
      "PageSpeed 90+ targets out of the box",
      "Automated tests, CI/CD and preview URLs every PR",
      "2-week sprints with weekly demos and clear timelines",
      "Full documentation, repo and runbooks delivered",
    ],
  },
  benefits: [
    { icon: Zap, title: "Lightning Fast", description: "Sub-2s Time to Interactive with edge caching, image optimization and code splitting." },
    { icon: Shield, title: "Secure by Default", description: "OWASP Top 10 hardened, SSL, security headers, dependency scanning and audits." },
    { icon: Activity, title: "99.9% Uptime", description: "Production monitoring, error tracking and SLA-backed support so you never go dark." },
    { icon: Layers, title: "Modern Tech Stack", description: "React, Next.js, TypeScript, Node, Postgres — the same stack powering Stripe and Linear." },
    { icon: Cpu, title: "Built to Scale", description: "Architecture designed for 10x growth without rewrites or painful migrations." },
    { icon: GitBranch, title: "Full Code Ownership", description: "You own the code, the repo and all IP. Zero vendor lock-in or hidden contracts." },
    { icon: Globe, title: "SEO-Ready Foundation", description: "Server-side rendering, structured data and Core Web Vitals tuned for search engines." },
    { icon: Workflow, title: "Clean DevOps", description: "GitHub Actions, automated tests and zero-downtime deployments from day one." },
    { icon: CheckCircle, title: "Maintainable Long-Term", description: "Clean, documented code that any engineering team can take over and extend." },
  ],
  process: [
    { icon: Terminal, title: "Discovery & Architecture", description: "Workshops, technical RFC, signed-off architecture doc and Figma wireframes." },
    { icon: Code2, title: "Sprint Build", description: "2-week sprints with Friday demos, code reviews and preview URLs every PR." },
    { icon: Shield, title: "QA & Hardening", description: "Lighthouse, OWASP scan, load testing, accessibility audit and security review." },
    { icon: Rocket, title: "Launch & Handover", description: "Production deploy, monitoring setup, full docs and complete repo handover." },
  ],
  whoIsThisFor: {
    forYou: [
      "You need a custom-coded site or web app, not a template",
      "You care about speed, security and long-term maintainability",
      "You want a real engineering partner with sprints and demos",
      "You want to own your code and avoid vendor lock-in",
      "You're scaling and need infrastructure that grows with you",
    ],
    notForYou: [
      "You only need a basic 5-page brochure site on Wix",
      "You want the cheapest possible build with no QA",
      "You're not willing to invest in proper architecture",
      "You expect a production app delivered in 2 weeks",
    ],
  },
  faq: [
    { question: "What tech stack do you build with?", answer: "Frontend: React, Next.js, TypeScript, Tailwind. Backend: Node.js, Express, NestJS. Database: Postgres, MongoDB, Supabase. Infra: Vercel, AWS, GCP. We pick the stack by problem, not trend." },
    { question: "How much does custom web development cost in Bangalore?", answer: "Marketing sites: ₹2L-5L. SaaS MVPs: ₹6L-15L. Enterprise platforms: ₹15L-25L+. Fixed-scope quote shared after a free discovery call." },
    { question: "How long does a typical project take?", answer: "Marketing sites: 4-6 weeks. SaaS MVPs: 8-12 weeks. Enterprise platforms: 4-6 months. Always 2-week sprints with weekly demos." },
    { question: "Do you offer ongoing maintenance?", answer: "Yes. SLA-backed monthly retainers cover security patches, bug fixes, performance monitoring and small feature releases." },
    { question: "Will I own the source code?", answer: "100%. You own the code, the GitHub repo and all IP. Full handover docs included. Zero vendor lock-in." },
    { question: "Can you work with our existing dev team?", answer: "Absolutely. We collaborate via shared GitHub, Slack and sprint planning — augmenting capacity without stepping on toes." },
    { question: "Do you handle hosting and DevOps?", answer: "Yes. We set up Vercel, AWS or GCP infrastructure with CI/CD, monitoring and autoscaling — and document everything." },
    { question: "Is the website SEO-ready?", answer: "Every build ships with server-side rendering, structured data, Core Web Vitals tuning and clean semantic HTML — the foundation SEO needs." },
  ],
  finalCTA: {
    headline: "Ready to build a website that performs?",
    description: "Share your project brief — we'll send back a scope, timeline and budget in 3 business days. No commitment.",
    buttonText: "Get Free Project Scope",
  },
};

const WebDevelopment = () => <ServicePageTemplate config={config} />;
export default WebDevelopment;
