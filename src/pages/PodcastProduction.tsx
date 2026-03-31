import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { Mic, Headphones, Radio, Users, TrendingUp, Zap, Shield, Eye, Clock, BarChart3, Layers, Settings, Volume2, Podcast } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Podcast Production Services in Bangalore | The Super 30",
    description: "Professional podcast production in Bangalore. Recording, editing, publishing & promotion. Launch your podcast with expert support.",
    keywords: "podcast production bangalore, podcast recording, podcast editing, podcast studio",
    canonical: "https://www.thesuper30.ai/podcast-production",
    serviceType: "Podcast Production",
  },
  hero: {
    badgeIcon: Mic,
    badgeText: "Podcast Production Experts",
    headlineLine1: "Launch a Professional",
    headlineLine2: "Podcast That Gets Heard",
    description: <>End-to-end podcast production — from <span className="text-foreground font-semibold">recording to editing to publishing</span>. We handle the tech so you focus on the content.</>,
    trustSignals: [
      { icon: Headphones, text: "100+ Podcasts Produced" },
      { icon: Radio, text: "Professional Studio" },
      { icon: TrendingUp, text: "Multi-Platform Distribution" },
      { icon: Shield, text: "Full Post-Production" },
    ],
    credentials: ["Pro-Grade Studio", "Experienced Audio Engineers", "End-to-End Service"],
    formTitle: "Start Your Podcast",
    formDescription: "Tell us about your podcast idea and we'll help bring it to life.",
    formButtonText: "Get Started",
  },
  source: "podcast_production",
  problems: [
    { icon: Settings, title: "Technical Overwhelm", description: "Microphones, audio interfaces, DAWs — the tech stack feels impossible to navigate." },
    { icon: Volume2, title: "Poor Audio Quality", description: "Your recordings sound amateur with echo, background noise, and inconsistent levels." },
    { icon: Clock, title: "Editing Takes Forever", description: "Spending hours editing each episode takes time away from creating content." },
    { icon: Eye, title: "No One's Listening", description: "You published episodes but have no strategy to grow your audience." },
  ],
  services: [
    { icon: Mic, title: "Studio Recording", description: "Record in our professional, acoustically treated studio." },
    { icon: Headphones, title: "Audio Editing", description: "Professional editing with noise removal, leveling, and mastering." },
    { icon: Layers, title: "Show Notes & Transcripts", description: "SEO-optimized show notes and full episode transcripts." },
    { icon: Radio, title: "Multi-Platform Publishing", description: "Distribute to Spotify, Apple Podcasts, Google, and 20+ platforms." },
    { icon: TrendingUp, title: "Growth Strategy", description: "Audience growth tactics including SEO, social clips, and cross-promotion." },
    { icon: Zap, title: "Video Podcasts", description: "Multi-camera video recording for YouTube and social media." },
    { icon: Users, title: "Guest Coordination", description: "We help book, schedule, and brief guests for your episodes." },
    { icon: BarChart3, title: "Analytics & Reporting", description: "Track downloads, listener demographics, and episode performance." },
  ],
  comparison: {
    traditional: ["DIY setup with poor audio quality", "Hours spent editing each episode", "No distribution strategy", "Inconsistent publishing schedule", "No audience growth plan", "Generic cover art and branding"],
    super30: ["Professional studio with top-tier equipment", "Expert editing with fast turnaround", "Multi-platform distribution automated", "Consistent weekly/biweekly schedule", "Built-in growth and promotion strategy", "Custom branding and cover art design"],
  },
  benefits: [
    { icon: Mic, title: "Studio-Quality Audio", description: "Professional recording environment with broadcast-grade equipment." },
    { icon: Clock, title: "Save 10+ Hours/Week", description: "We handle all production so you just show up and talk." },
    { icon: TrendingUp, title: "Grow Your Audience", description: "Strategic promotion and SEO to consistently grow listeners." },
    { icon: Shield, title: "Consistent Quality", description: "Every episode sounds polished and professional." },
    { icon: Radio, title: "Wide Distribution", description: "Your podcast on every major platform automatically." },
    { icon: Zap, title: "Fast Turnaround", description: "Episodes edited and published within 48 hours of recording." },
  ],
  process: [
    { icon: Users, title: "Planning", description: "Define your podcast concept, format, target audience, and content calendar." },
    { icon: Mic, title: "Recording", description: "Record in our studio or remotely with guided technical setup." },
    { icon: Headphones, title: "Post-Production", description: "Professional editing, mixing, mastering, and show notes creation." },
    { icon: Radio, title: "Publish & Promote", description: "Distribute across platforms and promote with social media clips." },
  ],
  whoIsThisFor: {
    forYou: ["You want to launch a professional podcast for your brand", "You're a founder or expert looking to build thought leadership", "You have content ideas but no time for production", "You want consistent, high-quality episodes", "You're ready to invest in audio content marketing"],
    notForYou: ["You want to record on your phone and upload directly", "You have no topic or content strategy in mind", "You're looking for free podcast hosting only", "You expect thousands of listeners from episode one"],
  },
  faq: [
    { question: "Do I need my own equipment?", answer: "No! We provide everything in our studio. For remote recording, we guide you through a simple setup." },
    { question: "How much does podcast production cost?", answer: "Packages start from ₹15,000/episode. Contact us for a custom quote based on your needs." },
    { question: "Can you help with video podcasts?", answer: "Yes, we offer multi-camera video recording for YouTube-ready podcast episodes." },
    { question: "How often should I publish?", answer: "We recommend weekly or biweekly for audience growth. We'll help you find the right cadence." },
    { question: "Do you help with podcast artwork and branding?", answer: "Yes, we design custom cover art, intro/outro music, and episode thumbnails." },
    { question: "Can you edit remotely recorded episodes?", answer: "Absolutely. We edit remote recordings and can even handle multi-guest Zoom/Riverside sessions." },
    { question: "How long until my podcast is live?", answer: "From concept to first published episode, typically 2-3 weeks." },
    { question: "Do you help with monetization?", answer: "Yes, we advise on sponsorship strategies, ad placement, and listener monetization." },
  ],
  finalCTA: {
    headline: "Ready to Launch Your Podcast?",
    description: "Get a free consultation and find out how we can bring your podcast vision to life.",
    buttonText: "Start Your Podcast",
  },
};

const PodcastProduction = () => <ServicePageTemplate config={config} />;
export default PodcastProduction;
