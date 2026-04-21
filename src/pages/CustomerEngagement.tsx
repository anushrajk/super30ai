import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { Heart, Users, Target, BarChart3, Zap, Shield, Gift, Bell, Star, TrendingUp, MessageSquare, Award, Globe, Clock, Mail, Layers } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Customer Engagement Agency in Bangalore | Loyalty Programs",
    description: "Keep customers coming back. Our customer engagement company in Bangalore designs loyalty programs and customer rewards that drive repeat business. Let's Talk!",
    keywords: "customer engagement agency in bangalore, customer engagement company in bangalore, customer engagement service provider in bangalore, customer engagement consultant in bangalore, customer engagement platform in bangalore, customer insight consulting in bangalore, customer analytics consulting in bangalore, customer loyalty consulting in bangalore",
    canonical: "https://www.thesuper30.ai/customer-engagement-agency-bangalore",
    serviceType: "Customer Engagement Programs",
    ogTitle: "Happy Customers Come Back. Loyal Customers Bring Others.",
    ogDescription: "Loyalty programs and rewards that keep customers coming back and help your business grow. Let's talk!",
    twitterTitle: "Happy Customers Come Back. Loyal Customers Bring Others.",
    twitterDescription: "Loyalty programs and rewards that keep customers coming back and help your business grow. Let's talk!",
  },
  hero: {
    badgeIcon: Heart,
    badgeText: "Customer Engagement Agency in Bangalore",
    headlineLine1: "Customer Engagement Agency",
    headlineLine2: "in Bangalore",
    description: <>Bangalore's trusted <span className="text-foreground font-semibold">customer engagement company</span> — we design loyalty programs, customer rewards, and lifecycle campaigns that <span className="text-foreground font-semibold">increase retention, build loyalty, and maximize customer lifetime value</span>.</>,
    trustSignals: [
      { icon: TrendingUp, text: "Avg. 35% Retention Increase" },
      { icon: Gift, text: "Custom Loyalty Programs" },
      { icon: MessageSquare, text: "Multi-Channel Engagement" },
      { icon: BarChart3, text: "Data-Driven Strategies" },
    ],
    credentials: ["200+ Programs Launched", "Multi-Channel", "Measurable Results"],
    formTitle: "Free Customer Engagement Audit in Bangalore",
    formDescription: "Tell us about your business — Bangalore's trusted customer engagement company will identify quick wins to boost retention and loyalty.",
    formButtonText: "Get Free Engagement Audit",
  },
  source: "customer_engagement",
  problems: [
    { icon: Users, title: "High Customer Churn", description: "Customers buy once and never come back. You're constantly chasing new customers." },
    { icon: Mail, title: "Emails Nobody Opens", description: "Your email campaigns have 5% open rates because they're generic and irrelevant." },
    { icon: Heart, title: "No Loyalty Program", description: "Competitors reward their customers. You don't — so customers have no reason to stay." },
    { icon: BarChart3, title: "No Customer Data Strategy", description: "You collect customer data but don't use it to personalize communication." },
  ],
  services: [
    { icon: Gift, title: "Loyalty Programs", description: "Points, tiers, and rewards that incentivize repeat purchases and referrals." },
    { icon: Mail, title: "Email Campaigns", description: "Personalized email sequences — welcome, nurture, re-engagement, and promotional." },
    { icon: MessageSquare, title: "SMS & WhatsApp Campaigns", description: "Direct messaging campaigns with 98% open rates for offers and updates." },
    { icon: Bell, title: "Push Notifications", description: "Timely, relevant notifications that bring users back to your app or website." },
    { icon: Star, title: "Review & Feedback Programs", description: "Structured programs to collect reviews, feedback, and testimonials." },
    { icon: Target, title: "Personalization Engine", description: "Segment audiences and deliver personalized content based on behavior." },
    { icon: Users, title: "Referral Programs", description: "Turn happy customers into brand ambassadors with referral incentives." },
    { icon: BarChart3, title: "Engagement Analytics", description: "Track engagement metrics, customer health scores, and retention rates." },
  ],
  comparison: {
    traditional: [
      "Blast the same email to everyone on the list",
      "No segmentation or personalization",
      "Discount-only loyalty — erodes margins",
      "No feedback collection or action on it",
      "Reactive — only engages when customers complain",
      "No measurement of customer lifetime value",
    ],
    super30: [
      "Hyper-personalized communication based on behavior",
      "Advanced segmentation by purchase history, engagement, and value",
      "Value-driven loyalty — experiences, exclusivity, and rewards",
      "Proactive feedback loops that improve products and services",
      "Proactive engagement at every stage of the customer journey",
      "CLV tracking and optimization as a core metric",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher Retention", description: "Customers stay longer and buy more frequently with structured engagement." },
    { icon: Gift, title: "Increased LTV", description: "Loyalty programs and personalization increase customer lifetime value by 30-50%." },
    { icon: Users, title: "Brand Advocates", description: "Engaged customers refer friends and family — free acquisition." },
    { icon: Star, title: "Better Reviews", description: "Happy, engaged customers leave positive reviews and testimonials." },
    { icon: Shield, title: "Reduced Churn", description: "Proactive engagement identifies at-risk customers before they leave." },
    { icon: Target, title: "Personalized Experience", description: "Every customer feels valued with communication tailored to their needs." },
    { icon: BarChart3, title: "Data-Driven Decisions", description: "Understand what drives retention and double down on what works." },
    { icon: Zap, title: "Automated Workflows", description: "Set up engagement sequences that run on autopilot." },
    { icon: Award, title: "Competitive Advantage", description: "Superior customer experience becomes your strongest differentiator." },
  ],
  process: [
    { icon: BarChart3, title: "Audit & Analysis", description: "Map your customer journey, identify drop-off points, and benchmark engagement." },
    { icon: Target, title: "Strategy Design", description: "Design custom engagement programs — loyalty, email, SMS, and referrals." },
    { icon: Layers, title: "Implement & Automate", description: "Build and launch automated engagement workflows across all channels." },
    { icon: TrendingUp, title: "Measure & Optimize", description: "Track retention, CLV, and engagement — continuously improve programs." },
  ],
  whoIsThisFor: {
    forYou: [
      "You have a customer base but struggle with repeat purchases",
      "You want to build a loyalty program that actually works",
      "You're losing customers to competitors with better engagement",
      "You want to increase customer lifetime value",
      "You're ready to invest in long-term customer relationships",
    ],
    notForYou: [
      "You only care about acquiring new customers, not retaining them",
      "You want to spam customers with daily promotional messages",
      "You're not willing to invest in customer experience improvements",
      "You expect overnight results from engagement programs",
    ],
  },
  faq: [
    { question: "How quickly can a loyalty program be set up?", answer: "A basic loyalty program can be launched in 2-3 weeks. Complex multi-tier programs with app integration take 4-8 weeks." },
    { question: "What platforms do you use for email campaigns?", answer: "We work with Mailchimp, Klaviyo, HubSpot, SendGrid, and other leading email platforms — choosing the best fit for your needs and scale." },
    { question: "How do you measure engagement success?", answer: "We track retention rate, repeat purchase rate, customer lifetime value (CLV), email open/click rates, loyalty program participation, and NPS scores." },
    { question: "Can you integrate with our existing CRM?", answer: "Yes. We integrate with Salesforce, HubSpot, Zoho, and most CRM platforms to ensure seamless data flow." },
    { question: "Do you handle the content creation for campaigns?", answer: "Yes. Our team creates email copy, SMS messages, push notification content, and loyalty program communications." },
    { question: "What industries do you work with?", answer: "We've built engagement programs for e-commerce, SaaS, hospitality, healthcare, education, and retail businesses." },
    { question: "How much does a customer engagement program cost?", answer: "Programs start from ₹25,000/month depending on channels, automation complexity, and scale. We provide custom quotes." },
    { question: "Can you help with customer feedback and reviews?", answer: "Yes. We design and implement structured feedback collection programs, review generation campaigns, and NPS surveys." },
  ],
  finalCTA: {
    headline: "Hire Bangalore's Trusted Customer Engagement Agency",
    description: "Get a free customer engagement audit and discover loyalty programs and lifecycle campaigns that boost retention and lifetime value.",
    buttonText: "Get Free Engagement Audit",
  },
};

const CustomerEngagement = () => <ServicePageTemplate config={config} />;
export default CustomerEngagement;
