import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { Wrench, Shield, Gauge, RefreshCw, Clock, BarChart3, Zap, Globe, Users, Bug, Lock, Eye, Award, Target, Settings, Bell } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "AMC & Website Maintenance Company in Bangalore",
    description: "Keep your website secure, fast and always online with 99.9% uptime. Website maintenance in Bangalore handles updates, bug fixes, performance and security",
    keywords: "website maintenance company in bangalore, website maintenance services bangalore, website maintenance in bangalore, website support services in bangalore, website annual maintenance contract, website maintenance packages",
    canonical: "https://www.thesuper30.ai/website-maintenance-company-bangalore",
    serviceType: "Website Maintenance Services",
    ogTitle: "A Website That Goes Down Is a Business That Loses Money.",
    ogDescription: "Updates, bug fixes and checks that keep your website secure and performing at its best. Let's talk!",
    twitterTitle: "A Website That Goes Down Is a Business That Loses Money.",
    twitterDescription: "Updates, bug fixes and checks that keep your website secure and performing at its best. Let's talk!",
  },
  hero: {
    badgeIcon: Wrench,
    badgeText: "AMC & Website Maintenance Company in Bangalore",
    headlineLine1: "Website Maintenance",
    headlineLine2: "Company in Bangalore",
    description: <>Bangalore's trusted <span className="text-foreground font-semibold">website maintenance services</span> and AMC packages — we keep your site <span className="text-foreground font-semibold">99.9% online, secure, fast, and always up-to-date</span> so you can focus on growing your business.</>,
    trustSignals: [
      { icon: Shield, text: "Security Monitoring & Patching" },
      { icon: Gauge, text: "Speed & Performance Optimization" },
      { icon: RefreshCw, text: "Regular Content & Software Updates" },
      { icon: Clock, text: "24/7 Uptime Monitoring" },
    ],
    credentials: ["200+ Sites Maintained", "99.9% Uptime SLA", "Priority Support"],
    formTitle: "Free Website Maintenance Health Check",
    formDescription: "Share your website and we'll identify security risks, speed issues, and maintenance needs.",
    formButtonText: "Get Free Health Check",
  },
  source: "website_maintenance",
  problems: [
    { icon: Shield, title: "Your Site Got Hacked", description: "Outdated software and no security monitoring left your site vulnerable to attacks." },
    { icon: Gauge, title: "Getting Slower Every Month", description: "Without regular optimization, your website's speed degrades over time." },
    { icon: Bug, title: "Broken Features & Links", description: "Pages break, forms stop working, and nobody notices until a customer complains." },
    { icon: RefreshCw, title: "Software Updates Pile Up", description: "WordPress, plugins, and themes need regular updates — ignoring them creates risks." },
  ],
  services: [
    { icon: Shield, title: "Security Updates", description: "Regular security patches, malware scanning, and firewall management." },
    { icon: Gauge, title: "Speed Optimization", description: "Monthly performance audits and optimization for fast load times." },
    { icon: RefreshCw, title: "Software Updates", description: "WordPress core, theme, and plugin updates with compatibility testing." },
    { icon: Lock, title: "Daily Backups", description: "Automated daily backups with one-click restore capability." },
    { icon: Bell, title: "Uptime Monitoring", description: "24/7 monitoring with instant alerts if your site goes down." },
    { icon: Settings, title: "Content Updates", description: "Text, image, and page updates as part of your maintenance plan." },
    { icon: Bug, title: "Bug Fixes", description: "Quick resolution of broken features, layout issues, and errors." },
    { icon: BarChart3, title: "Monthly Reports", description: "Detailed reports on uptime, speed, security, and updates performed." },
  ],
  comparison: {
    traditional: [
      "No regular updates — software falls months behind",
      "Reactive security — fix after getting hacked",
      "No performance monitoring — speed degrades silently",
      "No backups — one crash and everything is lost",
      "Content changes take days — developer is busy",
      "No reports — you don't know what you're paying for",
    ],
    super30: [
      "Weekly updates with compatibility testing before deployment",
      "Proactive security — firewall, scanning, and patching",
      "Monthly speed audits with optimization for Core Web Vitals",
      "Daily automated backups with instant restore",
      "Content updates within 24-48 hours",
      "Monthly maintenance reports with clear accountability",
    ],
  },
  benefits: [
    { icon: Shield, title: "Bulletproof Security", description: "Proactive monitoring and patching prevents hacks before they happen." },
    { icon: Gauge, title: "Consistent Speed", description: "Monthly optimization ensures your site stays fast as content grows." },
    { icon: Clock, title: "99.9% Uptime", description: "24/7 monitoring and instant response keeps your site always online." },
    { icon: Lock, title: "Peace of Mind", description: "Daily backups mean you can recover from any disaster in minutes." },
    { icon: RefreshCw, title: "Always Current", description: "Software stays updated and compatible — no outdated vulnerabilities." },
    { icon: Zap, title: "Fast Support", description: "Priority support with response times under 4 hours." },
    { icon: BarChart3, title: "Transparent Reports", description: "Monthly reports so you know exactly what we did and why." },
    { icon: Target, title: "Focus on Business", description: "We handle the technical upkeep so you can focus on growth." },
    { icon: Award, title: "Expert Care", description: "Senior developers maintaining your site — not junior interns." },
  ],
  process: [
    { icon: Eye, title: "Initial Audit", description: "Comprehensive security, speed, and health audit of your website." },
    { icon: Wrench, title: "Fix & Optimize", description: "Resolve all existing issues — security, speed, broken features." },
    { icon: Shield, title: "Setup Monitoring", description: "Deploy uptime monitoring, backups, firewall, and scanning." },
    { icon: RefreshCw, title: "Ongoing Maintenance", description: "Regular updates, optimizations, and content changes on schedule." },
  ],
  whoIsThisFor: {
    forYou: [
      "You have a business website that needs to stay fast and secure",
      "You don't have an in-house developer to manage your site",
      "You've been hacked before or are worried about security",
      "You need regular content updates without the hassle",
      "You want peace of mind knowing experts are watching your site",
    ],
    notForYou: [
      "You have a static landing page that never changes",
      "You have an in-house team already handling maintenance",
      "You're not willing to pay monthly for professional site care",
      "Your site is on a platform that handles everything (like Wix)",
    ],
  },
  faq: [
    { question: "What does website maintenance include?", answer: "Our plans include security updates, software updates, speed optimization, daily backups, uptime monitoring, content updates, bug fixes, and monthly reports." },
    { question: "How much does website maintenance cost?", answer: "Plans start from ₹5,000/month for basic maintenance. Comprehensive plans with priority support and unlimited content updates range from ₹10,000-25,000/month." },
    { question: "Do you maintain non-WordPress sites?", answer: "Yes. While WordPress is our specialty, we maintain sites built on React, Next.js, Shopify, WooCommerce, and custom platforms." },
    { question: "How quickly can you fix issues?", answer: "Critical issues (downtime, security breaches) are addressed within 2 hours. Standard issues within 24-48 hours. Content updates within 48 hours." },
    { question: "Do you offer emergency support?", answer: "Yes. All maintenance plans include emergency support for critical issues like hacking, downtime, or data loss." },
    { question: "Will maintenance affect my site visitors?", answer: "No. Updates and maintenance are performed during low-traffic hours. We test everything in staging before deploying to your live site." },
    { question: "Can I cancel anytime?", answer: "Yes. Our maintenance plans are month-to-month with no long-term contracts. Cancel with 30 days notice." },
    { question: "What happens to my site if I stop maintenance?", answer: "Your site continues working, but without updates, security monitoring, and optimization, risks increase over time. We provide a complete handoff if you decide to leave." },
  ],
  finalCTA: {
    headline: "Hire Bangalore's Trusted Website Maintenance Company",
    description: "Get a free website maintenance health check — discover security, speed, and AMC opportunities to keep your site fast and online.",
    buttonText: "Get Free Health Check",
  },
};

const WebsiteMaintenance = () => <ServicePageTemplate config={config} />;
export default WebsiteMaintenance;
