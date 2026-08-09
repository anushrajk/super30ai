import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { Heart, Users, Target, BarChart3, Zap, Shield, Gift, Bell, Star, TrendingUp, MessageSquare, Award, Globe, Clock, Mail, Layers } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Customer Engagement Agency in Bangalore | Loyalty Programs",
    description: "Keep customers coming back. Our customer engagement company in Bangalore designs loyalty programs and customer rewards that drive repeat business. Let's Talk!",
    keywords: "customer engagement agency in bangalore, customer engagement company in bangalore, customer engagement service provider in bangalore, customer engagement consultant in bangalore, customer engagement platform in bangalore, customer insight consulting in bangalore, customer analytics consulting in bangalore, customer loyalty consulting in bangalore",
    canonical: "https://super30ai.lovable.app/customer-engagement-agency-bangalore",
    serviceType: "Customer Engagement Programs",
    ogTitle: "Happy Customers Come Back. Loyal Customers Bring Others.",
    ogDescription: "Loyalty programs and rewards that keep customers coming back and help your business grow. Let's talk!",
    twitterTitle: "Happy Customers Come Back. Loyal Customers Bring Others.",
    twitterDescription: "Loyalty programs and rewards that keep customers coming back and help your business grow. Let's talk!",
  },
  hero: {
    badgeIcon: Heart,
    badgeText: "Customer Engagement Company in Bangalore",
    headlineLine1: "Customer Engagement Agency in Bangalore",
    headlineLine2: "That Drive Long-Term Loyalty",
    description: <>A trusted <span className="text-foreground font-semibold">Service Provider in Bangalore</span> that builds high retention Customer Experience, and Loyalty Programmes for Brands to <span className="text-foreground font-semibold">drive engagement, develop relationships and enhance lifetime value</span>.</>,
    trustSignals: [
      { icon: TrendingUp, text: "35% Higher Customer Retention" },
      { icon: Gift, text: "Custom Loyalty Programmes" },
      { icon: MessageSquare, text: "Multi Channel Customer Engagement" },
      { icon: BarChart3, text: "Data Driven Growth Strategies" },
    ],
    credentials: ["200+ Programs Launched", "Multi-Channel", "Measurable Results"],
    formTitle: "Free Customer Engagement Audit in Bangalore",
    formDescription: "Tell us about your business — Bangalore's trusted customer engagement company will identify quick wins to boost retention and loyalty.",
    formButtonText: "Enquire Now",
  },
  source: "customer_engagement",
  sections: {
    problems: {
      title: <>The Customer Retention Challenges That <span className="text-brand">Brands Face</span></>,
      description: "Retaining customers, keeping them interested, and building relationships are constantly challenging for many businesses, leading to lower repeat purchases, less loyalty, and lost growth potential.",
    },
    services: {
      title: <>Customer Retention Solutions from a Leading <span className="text-brand">Customer Engagement Company in Bangalore</span></>,
      description: "Customer engagement strategies integrated with a customer engagement platform in Bangalore to enhance retention, repeat sales purchases, brand loyalty and maximise the customer lifetime value.",
    },
    comparison: {
      title: <>Traditional Agency vs. <span className="text-brand">The Super 30</span></>,
      description: "Learn how a customer engagement consultant in Bangalore helps businesses strengthen customer retention through personalization, customer intelligence, and long-term relationship building.",
    },
    benefits: {
      eyebrow: "Why Brands Choose Us?",
      title: <>Proven Customer Engagement Outcomes That <span className="text-brand">Drive Growth</span></>,
      description: "Our approach as a customer engagement service provider in Bangalore strengthens customer loyalty, boosts retention, enhances customer experience, and drives sustainable long-term business growth.",
    },
    industries: {
      eyebrow: "INDUSTRY EXPERTISE",
      title: <>Customer Engagement Strategies <span className="text-brand">Across Every Industry</span></>,
      description: "The most trusted industry-focused engagement strategies for growing brands. Our customer loyalty consulting in Bangalore helps businesses improve customer retention and build long-term loyalty.",
    },
    whoIsThisFor: {
      title: <>Is This the Right Customer Engagement Strategy for <span className="text-brand">Your Business?</span></>,
      description: "When businesses prioritize long-term customer relationships, retention, and loyalty over mere new customer acquisition, customer engagement has the biggest impact.",
    },
  },
  problems: [
    { icon: Users, title: "Low Customer Retention", description: "Customers make a purchase once but rarely return, making sustainable growth difficult." },
    { icon: Mail, title: "Weak Campaign Engagement", description: "Marketing communications receive limited attention because they lack relevance and personalization." },
    { icon: Heart, title: "Limited Loyalty Initiatives", description: "Without customer reward programmes, brands miss opportunities to encourage repeat purchases." },
    { icon: BarChart3, title: "Underutilised Customer Insights", description: "Customer data is collected but not effectively used to improve engagement and retention." },
  ],
  services: [
    { icon: Gift, title: "Loyalty Reward Programmes", description: "Rewards for repeat purchases and referrals, in the form of points, tiers, and rewards." },
    { icon: Mail, title: "Email Engagement Campaigns", description: "Personalised email journeys focused on customer nurturing, retention, and re-engagement." },
    { icon: MessageSquare, title: "SMS & WhatsApp Campaigns", description: "Targeted customer messaging campaigns designed to increase engagement and repeat interactions." },
    { icon: Bell, title: "Push Notifications", description: "Timely and Relevant customer alerts that encourage return visits and ongoing engagement." },
    { icon: Star, title: "Customer Feedback Programmes", description: "Structured systems for collecting reviews, feedback, customer insights and testimonials." },
    { icon: Target, title: "Audience Personalization", description: "Customer segmentation and tailored communication based on behaviour and preferences." },
    { icon: Users, title: "Referral Growth Programmes", description: "Referral strategies that transform satisfied customers into brand advocates." },
    { icon: BarChart3, title: "Customer Engagement Analytics", description: "Performance tracking supported by customer analytics consulting in Bangalore to measure retention, engagement, and customer value trends." },
  ],
  comparison: {
    traditional: [
      "Generic campaigns sent to the entire customer base",
      "Limited audience segmentation and personalization",
      "Discount focused retention strategies reduce profitability",
      "Customer feedback collected with little follow through",
      "Engagement begins only when issues arise",
      "Limited visibility into customer lifetime value",
    ],
    super30: [
      "Personalized communication built for customer behaviour",
      "Intelligent audience segmentation based on customer insights",
      "Loyalty programmes focused on value, recognition, and rewards",
      "Customer feedback systems that support continuous improvement",
      "Proactive engagement throughout the customer journey",
      "Customer lifetime value tracking to guide growth decisions",
    ],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher Customer Retention", description: "Encourage repeat purchases and long-term relationships through meaningful customer engagement." },
    { icon: Gift, title: "Increased LTV", description: "Loyalty initiatives and personalized experiences increase overall customer lifetime value." },
    { icon: Users, title: "Brand Advocacy", description: "Satisfied customers become advocates who recommend your brand to others." },
    { icon: Star, title: "More Positive Reviews", description: "Create exceptional experiences that encourage reviews, ratings, and testimonials." },
    { icon: Shield, title: "Lower Customer Attrition", description: "Identify disengaged customers early and improve retention through proactive engagement." },
    { icon: Target, title: "Personalized Customer Experiences", description: "Deliver relevant communication tailored to customer interests and behaviours." },
    { icon: BarChart3, title: "Data Driven Decisions", description: "Use customer data and engagement insights to improve marketing effectiveness." },
    { icon: Zap, title: "Automated Engagement Workflow", description: "Streamline customer communication with automated lifecycle and retention campaigns." },
    { icon: Award, title: "Sustainable Competitive Edge", description: "Create customer experiences that differentiate your brand and strengthen market position." },
  ],
  process: [
    { icon: BarChart3, title: "Audit & Analysis", description: "Map your customer journey, identify drop-off points, and benchmark engagement." },
    { icon: Target, title: "Strategy Design", description: "Design custom engagement programs — loyalty, email, SMS, and referrals." },
    { icon: Layers, title: "Implement & Automate", description: "Build and launch automated engagement workflows across all channels." },
    { icon: TrendingUp, title: "Measure & Optimize", description: "Track retention, CLV, and engagement — continuously improve programs." },
  ],
  whoIsThisFor: {
    forYou: [
      "You want to increase repeat purchases from existing customers",
      "You need a loyalty programme that drives measurable retention",
      "Your customers engage once but rarely return",
      "You want to improve customer lifetime value and loyalty",
      "You are focused on long-term customer relationships",
    ],
    notForYou: [
      "You only focus on acquiring new customers",
      "You rely solely on discount driven promotions",
      "You are unwilling to invest in customer experience",
      "You expect immediate results from retention programmes",
    ],
  },
  faq: getFaqs("customer-engagement"),
  finalCTA: {
    headline: "Hire Bangalore's High Performing Customer Engagement Agency",
    description: "Get a free customer engagement consultation and learn how customer insight consulting in Bangalore, loyalty programmes, retention strategies and lifecycle campaigns can drive repeat sales and increase customer retention that drives lifetime value.",
    buttonText: "Get a Free Engagement Audit",
  },
};

const CustomerEngagement = () => <ServicePageTemplate config={config} />;
export default CustomerEngagement;
