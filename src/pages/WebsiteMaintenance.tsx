import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { Wrench, Shield, Gauge, RefreshCw, Clock, BarChart3, Zap, Globe, Users, Bug, Lock, Eye, Award, Target, Settings, Bell } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "AMC & Website Maintenance Company in Bangalore",
    description: "Keep your website secure, fast and always online with 99.9% uptime. Website maintenance in Bangalore handles updates, bug fixes, performance and security",
    keywords: "website maintenance company in bangalore, website maintenance services in bangalore, website maintenance in bangalore, website support services in bangalore, website maintenance packages in bangalore",
    canonical: "https://www.thesuper30.ai/website-maintenance-company-bangalore",
    serviceType: "Website Maintenance Services",
    ogTitle: "A Website That Goes Down Is a Business That Loses Money.",
    ogDescription: "Updates, bug fixes and checks that keep your website secure and performing at its best. Let's talk!",
    twitterTitle: "A Website That Goes Down Is a Business That Loses Money.",
    twitterDescription: "Updates, bug fixes and checks that keep your website secure and performing at its best. Let's talk!",
  },
  hero: {
    badgeIcon: Wrench,
    badgeText: "Website Maintenance in Bangalore",
    headlineLine1: "Reliable Website Maintenance Company",
    headlineLine2: "in Bangalore for Growing Businesses",
    description: <>Bangalore's trusted <span className="text-foreground font-semibold">website maintenance company</span> with proactive web support, performance optimization, security management, and AMC solutions to help you focus on business growth while your website runs smoothly, efficiently, and securely.</>,
    trustSignals: [
      { icon: Shield, text: "Security Monitoring & Updates" },
      { icon: Gauge, text: "Speed & Performance Optimization" },
      { icon: RefreshCw, text: "Regular Content & Software Updates" },
      { icon: Clock, text: "24/7 Website Monitoring" },
    ],
    credentials: ["200+ Sites Maintained", "99.9% Uptime SLA", "Priority Support"],
    formTitle: "Free Website Maintenance Health Check in Bangalore",
    formDescription: "Share your website — Bangalore's trusted website maintenance services team will identify security risks, speed issues and AMC opportunities.",
    formButtonText: "Enquire Now",
  },
  source: "website_maintenance",
  sections: {
    problems: {
      title: "Ongoing Website Maintenance Challenges That Most Businesses Face",
      description: "A neglected website can lead to security risks, slower performance, broken functionality, and missed business opportunities that impact customer experience and growth.",
    },
    services: {
      title: "Complete Website Maintenance Services in Bangalore Under One Roof",
      description: "Complete Web Support Services in Bangalore to ensure the security, optimization, and successful support of your website with proactive monitoring, regular updates, improved security, and continuous performance enhancement.",
    },
    comparison: {
      eyebrow: "What Makes Us Different?",
      title: "Traditional Agencies vs. TheSuper 30",
      description: "Compare the difference between reactive website support and a proactive maintenance approach focused on performance, security, reliability, and long-term website health.",
    },
    benefits: {
      eyebrow: "WHY BRANDS CHOOSE US",
      title: "Proactive Website Maintenance That Protects Your Business",
      description: "Our Website Maintenance Services in Bangalore go beyond routine updates. We ensure your website is secure, optimized, monitored, and supported to deliver consistent performance, reliability, and business continuity.",
    },
    industries: {
      eyebrow: "INDUSTRY EXPERTISE",
      title: "Website Maintenance Solutions for Every Industry",
      description: "To provide businesses across all sectors with proactive website maintenance, security management, performance optimization, and reliable technical support, specifically designed to meet the needs of businesses.",
    },
    whoIsThisFor: {
      title: "Is Website Maintenance the Right Choice for Your Business?",
      description: "Website maintenance is essential for businesses that rely on their website for credibility, lead generation, customer engagement, and uninterrupted online operations.",
    },
  },
  problems: [
    { icon: Shield, title: "Security Risks and Vulnerabilities", description: "Outdated software and missing security measures increase the risk of cyber threats and unauthorized access." },
    { icon: Gauge, title: "Website Performance Declines", description: "Without routine optimization, website speed and overall performance gradually deteriorate over time." },
    { icon: Bug, title: "Broken Features & Functionality", description: "Forms, links, and necessary website functions may malfunction, impacting consumer experience and lead generation." },
    { icon: RefreshCw, title: "Delayed Software Updates", description: "It is essential that WordPress core files, plugins, and themes be updated in a timely manner to ensure WordPress stability and security." },
  ],
  services: [
    { icon: Shield, title: "Security Management", description: "Security monitoring, protection from malware, and firewall management for website safety." },
    { icon: Gauge, title: "Performance Optimization", description: "Regular performance reviews and enhancements to maintain optimal website speed." },
    { icon: RefreshCw, title: "System Updates", description: "WordPress core, themes, and plugins updated with compatibility verification." },
    { icon: Lock, title: "Automated Backups", description: "Scheduled website backups with reliable restoration and recovery support." },
    { icon: Bell, title: "Website Monitoring", description: "Continuous website monitoring with instant alerts and issue detection." },
    { icon: Settings, title: "Content Management", description: "Website content, images, and page updates included within maintenance support." },
    { icon: Bug, title: "Technical Support", description: "Prompt resolution of website errors, functionality issues, and technical concerns." },
    { icon: BarChart3, title: "Performance Reporting", description: "Detailed monthly reports covering website health, security, updates, and performance metrics." },
  ],
  comparison: {
    traditional: [
      "Irregular updates that leave software versions outdated",
      "Security issues addressed only after problems occur",
      "Limited performance monitoring and optimization efforts",
      "Infrequent backups with increased risk of data loss",
      "Delayed content updates due to resource constraints",
      "Minimal reporting with limited visibility into website health",
    ],
    super30: [
      "Scheduled updates with compatibility checks before implementation",
      "Proactive security management with monitoring and protection measures",
      "Monthly performance reviews focused on speed and user experience",
      "Automated daily backups with reliable recovery support",
      "Fast turnaround for website content within 24-48 hrs of update requests",
      "Detailed maintenance reports with complete transparency",
    ],
  },
  benefits: [
    { icon: Shield, title: "Advanced Security Protection", description: "Continuous monitoring and preventive maintenance help reduce security risks before they impact your website." },
    { icon: Gauge, title: "Consistent Performance", description: "Regular optimization ensures your website remains fast, responsive, and efficient over time." },
    { icon: Clock, title: "99.9% Website Availability", description: "24/7 monitoring and rapid response help maintain uninterrupted website accessibility." },
    { icon: Lock, title: "Business Continuity", description: "Automated backups provide dependable recovery options and minimize operational disruptions." },
    { icon: RefreshCw, title: "Always Up to Date", description: "Timely software updates ensure compatibility, stability, and long-term website reliability." },
    { icon: Zap, title: "Priority Technical Support", description: "Dedicated support assistance ensures faster issue resolution and ongoing website stability." },
    { icon: BarChart3, title: "Transparent Reporting", description: "Detailed maintenance reports provide complete visibility into website performance and activities." },
    { icon: Target, title: "Focus on Growth", description: "We manage the technical maintenance while you concentrate on growing your business." },
    { icon: Award, title: "Experienced Specialists", description: "Website maintenance managed by skilled professionals with proven technical expertise." },
  ],
  process: [
    { icon: Eye, title: "Initial Audit", description: "Comprehensive security, speed, and health audit of your website." },
    { icon: Wrench, title: "Fix & Optimize", description: "Resolve all existing issues — security, speed, broken features." },
    { icon: Shield, title: "Setup Monitoring", description: "Deploy uptime monitoring, backups, firewall, and scanning." },
    { icon: RefreshCw, title: "Ongoing Maintenance", description: "Regular updates, optimizations, and content changes on schedule." },
  ],
  whoIsThisFor: {
    forYou: [
      "You rely on your website to remain secure, fast, and consistently available",
      "You do not have a dedicated developer managing ongoing website maintenance",
      "You want to minimize security risks and protect your website from threats",
      "You require regular website updates without disrupting daily operations",
      "You prefer experienced professionals monitoring your website performance",
    ],
    notForYou: [
      "Your website has static landing pages & requires minimal ongoing management",
      "You already have an internal team handling maintenance and support",
      "You are not looking for proactive website monitoring and optimization",
      "Your website platform manages updates, security, and hosting automatically",
    ],
  },
  faq: getFaqs("website-maintenance"),
  finalCTA: {
    headline: "Protect Your Website with a Trusted Website Maintenance Company in Bangalore",
    description: "Get a free website maintenance health check by staying ahead of security risks, performance issues, and unexpected downtime with professional website maintenance services.",
    buttonText: "Get Free Website Assessment",
  },
};

const WebsiteMaintenance = () => <ServicePageTemplate config={config} />;
export default WebsiteMaintenance;
