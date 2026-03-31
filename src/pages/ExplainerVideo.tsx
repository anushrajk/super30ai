import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { PlayCircle, Lightbulb, Users, Target, TrendingUp, Zap, Shield, Eye, Clock, BarChart3, Layers, Palette, MessageSquare, Film } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Explainer Video Production in Bangalore | The Super 30",
    description: "Professional explainer videos that simplify complex ideas. 2D, 3D, whiteboard & motion graphics animations for startups and enterprises.",
    keywords: "explainer video production bangalore, animated explainer video, motion graphics, whiteboard animation",
    canonical: "https://www.thesuper30.ai/explainer-video",
    serviceType: "Explainer Video Production",
  },
  hero: {
    badgeIcon: PlayCircle,
    badgeText: "Explainer Video Specialists",
    headlineLine1: "Explain Anything in",
    headlineLine2: "60 Seconds or Less",
    description: <>We create engaging animated explainer videos that <span className="text-foreground font-semibold">simplify complex ideas and boost conversions by up to 80%</span>.</>,
    trustSignals: [
      { icon: Film, text: "300+ Explainers Created" },
      { icon: TrendingUp, text: "80% Avg. Conversion Lift" },
      { icon: Users, text: "Startup to Enterprise" },
      { icon: Shield, text: "Unlimited Revisions" },
    ],
    credentials: ["Award-Winning Animations", "SaaS & Fintech Specialists", "Global Clients"],
    formTitle: "Get Your Explainer Video",
    formDescription: "Share your concept and get a free storyboard and quote.",
    formButtonText: "Get Free Quote",
  },
  source: "explainer_video",
  problems: [
    { icon: MessageSquare, title: "Complex Product, Confused Customers", description: "Your product is brilliant but customers don't understand it in text." },
    { icon: Eye, title: "Low Landing Page Conversions", description: "Visitors leave because they can't quickly grasp your value proposition." },
    { icon: Clock, title: "Long Sales Cycles", description: "Sales reps spend hours explaining what a 60-second video could do." },
    { icon: Target, title: "Boring Presentations", description: "Static slides don't engage audiences at demos, pitches, or conferences." },
  ],
  services: [
    { icon: PlayCircle, title: "2D Animation", description: "Character-based animations that tell your story with personality." },
    { icon: Layers, title: "Motion Graphics", description: "Sleek, modern animations perfect for SaaS and tech products." },
    { icon: Lightbulb, title: "Whiteboard Animation", description: "Hand-drawn style videos that explain step-by-step concepts." },
    { icon: Palette, title: "3D Animation", description: "Immersive 3D product visualizations and architectural walkthroughs." },
    { icon: Film, title: "Product Demos", description: "Screen-recorded demos with animated overlays and callouts." },
    { icon: MessageSquare, title: "Onboarding Videos", description: "Guided walkthroughs to help new users adopt your product faster." },
    { icon: TrendingUp, title: "Investor Pitch Videos", description: "Compelling animated pitches that help you raise funding." },
    { icon: Zap, title: "Social Media Clips", description: "Short animated clips optimized for social media platforms." },
  ],
  comparison: {
    traditional: ["Template-based cookie-cutter animations", "No strategy or scripting support", "Slow turnaround times", "Limited revision rounds", "Generic voiceover talent", "No conversion optimization"],
    super30: ["Custom animations tailored to your brand", "Professional scriptwriting included", "2-3 week delivery timeline", "Unlimited revisions until you're happy", "Professional voiceover in 20+ languages", "Conversion-focused storytelling approach"],
  },
  benefits: [
    { icon: TrendingUp, title: "80% More Conversions", description: "Landing pages with explainer videos convert significantly better." },
    { icon: Clock, title: "Save Sales Time", description: "Let the video explain so your team can focus on closing." },
    { icon: Lightbulb, title: "Simplify Complexity", description: "Make any concept easy to understand in under 2 minutes." },
    { icon: Shield, title: "Premium Quality", description: "Cinema-quality animation that reflects your brand's excellence." },
    { icon: Users, title: "Global Reach", description: "Voiceover available in 20+ languages for international audiences." },
    { icon: Zap, title: "Versatile Usage", description: "Use on website, social media, ads, presentations, and sales calls." },
  ],
  process: [
    { icon: Lightbulb, title: "Concept & Script", description: "Understand your product and craft a compelling narrative script." },
    { icon: Palette, title: "Storyboard & Design", description: "Create visual storyboards and design the animation style." },
    { icon: PlayCircle, title: "Animation", description: "Bring the storyboard to life with professional animation." },
    { icon: Film, title: "Voiceover & Delivery", description: "Add professional voiceover, music, and deliver the final video." },
  ],
  whoIsThisFor: {
    forYou: ["You have a complex product that's hard to explain", "You want to boost landing page conversions", "You need a video for investor pitches or demos", "You want to reduce customer support queries", "You're launching a new product or feature"],
    notForYou: ["You need live-action filming, not animation", "You want a video for free or under ₹10,000", "You need it delivered in less than a week", "You don't have clarity on what your product does"],
  },
  faq: [
    { question: "How much does an explainer video cost?", answer: "Pricing starts from ₹30,000 for a 60-second 2D animation. 3D and premium animations are priced higher. Contact us for a custom quote." },
    { question: "How long does it take?", answer: "A standard 60-90 second explainer video takes 2-3 weeks from script to delivery." },
    { question: "Do you write the script?", answer: "Yes! Our copywriters craft conversion-focused scripts based on your product and audience." },
    { question: "Can I choose the voiceover artist?", answer: "Absolutely. We provide voiceover samples in multiple languages for you to choose from." },
    { question: "What animation styles do you offer?", answer: "2D character animation, motion graphics, whiteboard, 3D, and mixed-media styles." },
    { question: "Can I use the video on social media?", answer: "Yes, we provide optimized versions for YouTube, Instagram, LinkedIn, and more." },
    { question: "Do you offer revisions?", answer: "Yes, we include unlimited revisions at the storyboard stage and 2-3 rounds post-animation." },
    { question: "Can you create videos in regional languages?", answer: "Yes, we produce explainer videos in Hindi, Kannada, Tamil, Telugu, and 20+ languages." },
  ],
  finalCTA: {
    headline: "Ready to Simplify Your Story?",
    description: "Get a free storyboard concept and see how an explainer video can transform your conversions.",
    buttonText: "Get Free Storyboard",
  },
};

const ExplainerVideo = () => <ServicePageTemplate config={config} />;
export default ExplainerVideo;
