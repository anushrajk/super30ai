import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { Code2, Rocket, Gauge, Shield, Server, Database, Cloud, GitBranch, Workflow, Boxes, Layers, Globe, Zap, Lock, Activity, CheckCircle, Cpu, Terminal } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Web Development Company in Bangalore | Custom Web Solutions",
    description: "Build a website that performs. Our web development agency in Bangalore creates fast, scalable websites built for your business goals. Let's Build!",
    keywords: "web development company in bangalore, website development services in bangalore, web development agency in bangalore, custom website development in bangalore",
    canonical: "https://www.thesuper30.ai/web-development-company-bangalore",
    serviceType: "Web Development",
    ogTitle: "A Website That Performs Is Your Best Sales Tool. Period.",
    ogDescription: "Fast, scalable and custom web development solutions built around your business goals. Let's build!",
    twitterTitle: "A Website That Performs Is Your Best Sales Tool. Period.",
    twitterDescription: "Fast, scalable and custom web development solutions built around your business goals. Let's build!",
  },
  hero: {
    badgeIcon: Code2,
    badgeText: "Web Development Agency in Bangalore",
    headlineLine1: "Web Development Company in Bangalore",
    headlineLine2: "To Enhance Your Website Performance",
    description: <>Bangalore's trusted <span className="text-foreground font-semibold">web development company</span> providing custom website solutions built with React, Next.js, and modern cloud technologies, <span className="text-foreground font-semibold">engineered for performance, scalability, and long-term business growth</span>.</>,
    trustSignals: [
      { icon: Gauge, text: "100/100 Performance Standards" },
      { icon: Shield, text: "Enterprise Grade Security" },
      { icon: Activity, text: "99.9% Uptime Assurance" },
      { icon: GitBranch, text: "Clean Code, Complete Ownership" },
    ],
    credentials: ["200+ Websites Delivered", "Modern Tech Stack", "Dedicated Support"],
    formTitle: "Free Web Development Scope in Bangalore",
    formDescription: "Share your project requirements and our web development agency in Bangalore will send back a project scope, delivery timeline, and investment details within 3 business days.",
    formButtonText: "Enquire Now",
  },
  source: "web_development",
  sections: {
    problems: {
      title: "The Challenges That Limit Your Website Performance",
      description: "Many businesses are having trouble with their websites that are outdated, hindering performance, security, scalability, and future growth.",
    },
    services: {
      title: "Custom Web Development Services for Modern Businesses",
      description: "Web development services in Bangalore are designed to be scalable, helping businesses grow, operate efficiently, and thrive in the digital realm.",
      ctaText: "Get Free Website Consultation",
    },
    comparison: {
      eyebrow: "What Makes Us Different?",
      title: "Traditional Agency vs. TheSuper 30",
      description: "See how our approach as a web development company in Bangalore delivers greater performance, transparency, ownership, and long-term value compared to conventional agency models.",
    },
    benefits: {
      eyebrow: "WHY BRANDS CHOOSE US?",
      title: "We Build Custom Website Solutions for Speed, Security, and Scale",
      description: "As a web development agency in Bangalore, our team has the expertise to create high performance websites that are equipped with cutting-edge modern technology, enterprise level security, and scalable design, all working together to drive business growth, enhance user experiences, and ensure long-term digital success.",
    },
    industries: {
      eyebrow: "INDUSTRY EXPERTISE",
      title: "Web Development Solutions for Every Industry",
      description: "Industry oriented strategies and solutions delivered across 18+ sectors. We understand your audience, business goals, and market dynamics.",
    },
    whoIsThisFor: {
      title: "Is Our Website Development Services The Right Fit for You?",
      description: "Our website development services in Bangalore are designed for businesses looking for high performance, scalability, security, and sustainable digital growth.",
    },
  },
  problems: [
    { icon: Gauge, title: "Slow, Inefficient Website", description: "Slow loading websites reduce conversions, impact user experience, and affect search visibility." },
    { icon: Shield, title: "Security & Reliability Concerns", description: "Frequent downtime, plugin conflicts, and security vulnerabilities can damage credibility and performance." },
    { icon: Boxes, title: "Limited Growth Scalability", description: "Growing traffic and new functionality requirements become difficult with outdated website infrastructure." },
    { icon: Lock, title: "Restricted Platform Ownership", description: "Limited control over website assets makes future updates, migrations, and improvements more challenging." },
  ],
  services: [
    { icon: Code2, title: "Custom Web Applications", description: "Custom React and Next.js applications built with robust TypeScript architecture designed to meet business requirements." },
    { icon: Rocket, title: "SaaS Product Development", description: "Concept to launch SaaS solutions with authentication, billing, dashboards, and scalable platform architecture." },
    { icon: Workflow, title: "API Development", description: "Secure API solutions with authentication, request management, caching, and comprehensive technical documentation." },
    { icon: Boxes, title: "E-commerce Solutions", description: "Scalable e-commerce platforms powered by Shopify, Medusa, or custom architectures built for growth." },
    { icon: GitBranch, title: "DevOps Automation", description: "Automated deployment workflows, testing environments, release management, and reliable infrastructure operations." },
    { icon: Gauge, title: "Performance Optimization", description: "Advanced optimization techniques focused on loading speed, caching, code efficiency, and user experience." },
    { icon: Database, title: "Database Management", description: "Database architecture designed for scalability, data integrity, security, and long-term performance." },
    { icon: Cloud, title: "Cloud Infrastructure", description: "Cloud environment and architectures set up for monitoring and scalability, performance management, and resource optimization." },
  ],
  comparison: {
    traditional: [
      "Generic website templates with limited customization",
      "Restricted ownership and limited platform control",
      "Slow website performance and speed standards",
      "Manual processes with limited quality testing",
      "Extended project timelines and delayed delivery",
      "Limited documentation and support handover",
    ],
    super30: [
      "Custom web solutions designed to your business requirements",
      "Complete ownership with 100% source code access",
      "Optimized Page performance 90+ built for speed and scalability",
      "Structured testing, automation, and quality processes",
      "Agile delivery with transparent project milestones",
      "Comprehensive documentation and complete runbooks delivered",
    ],
  },
  benefits: [
    { icon: Zap, title: "Lightning Fast", description: "Advanced caching, image optimization, and efficient code architecture for optimal website performance, leading to a better user experience." },
    { icon: Shield, title: "Secure by Default", description: "Designed using industry best practices, SSL protection, vulnerability monitoring, and proactive risk management." },
    { icon: Activity, title: "99.9% Uptime", description: "Reliable hosting infrastructure, continuous monitoring, and dedicated support to ensure uninterrupted website availability." },
    { icon: Layers, title: "Modern Technology Stack", description: "Built using React, Next.js, TypeScript, Node, and Postgres technologies that deliver flexibility, performance, and long-term scalability." },
    { icon: Cpu, title: "Built for Scale", description: "The architecture of the website can be scaled and adapted to accommodate business growth, traffic, and future needs." },
    { icon: GitBranch, title: "Complete Code Ownership", description: "Complete ownership of website code, repositories, and digital assets with complete transparency and control." },
    { icon: Globe, title: "SEO Ready Foundation", description: "Search optimized development practices that improve visibility, performance, and long-term organic growth." },
    { icon: Workflow, title: "Streamlined DevOps", description: "Efficient deployment workflows, automated testing, and infrastructure management for reliable website operations." },
    { icon: CheckCircle, title: "Long-Term Maintainability", description: "Well structured codes and documentation that make future enhancements, code cleaning, and platform extension easier." },
  ],
  process: [
    { icon: Terminal, title: "Discovery & Architecture", description: "Workshops, technical RFC, signed-off architecture doc and Figma wireframes." },
    { icon: Code2, title: "Sprint Build", description: "2-week sprints with Friday demos, code reviews and preview URLs every PR." },
    { icon: Shield, title: "QA & Hardening", description: "Lighthouse, OWASP scan, load testing, accessibility audit and security review." },
    { icon: Rocket, title: "Launch & Handover", description: "Production deploy, monitoring setup, full docs and complete repo handover." },
  ],
  whoIsThisFor: {
    forYou: [
      "You need a custom coded website or web application, not just a template",
      "You value speed, performance, security, and long-term scalability",
      "You want a reliable development partner with structured delivery processes",
      "You prefer complete ownership and control of your digital assets",
      "Your business requires technology infrastructure that supports future growth",
    ],
    notForYou: [
      "You only need a simple brochure website with limited functionality",
      "Cost is your only consideration when selecting a development partner",
      "You are unwilling to invest in a scalable technology foundation",
      "You expect complex development projects completed within unrealistic timelines",
    ],
  },
  faq: getFaqs("web-development"),
  finalCTA: {
    headline: "Ready to Build a Custom Website For Your Business to Elevate Your Brand",
    description: "Share your project requirements with our web development agency in Bangalore and receive a design proposal with project scope, delivery timeline, and investment details within 3 business days.",
    buttonText: "Get Free Website Proposal",
  },
};

const WebDevelopment = () => <ServicePageTemplate config={config} />;
export default WebDevelopment;
