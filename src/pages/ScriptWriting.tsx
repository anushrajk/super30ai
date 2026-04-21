import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { Film, PenTool, MessageSquare, Target, Users, Zap, Eye, Shield, Award, Megaphone, Clock, Sparkles, Play, Mic, FileText, BarChart3 } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Script Writing Agency in Bangalore | Ad Scripts That Convert",
    description: "The right script makes ads more powerful. Our ad script writing agency in Bangalore crafts ad and video scripts that connect with audiences. Let's Write!",
    keywords: "ad script writing in bangalore, script writing agency in bangalore, script writing services in bangalore, script writing company in bangalore, professional script writing services in bangalore",
    canonical: "https://www.thesuper30.ai/script-writing-agency-bangalore",
    serviceType: "Script Writing Services",
    ogTitle: "A Great Script Is What Makes People Stop and Watch.",
    ogDescription: "Compelling ad and video scripts that connect with audiences and make every campaign count. Write!",
    twitterTitle: "A Great Script Is What Makes People Stop and Watch.",
    twitterDescription: "Compelling ad and video scripts that connect with audiences and make every campaign count. Write!",
  },
  hero: {
    badgeIcon: Film,
    badgeText: "Ad Script Writing Agency in Bangalore",
    headlineLine1: "Script Writing Agency",
    headlineLine2: "in Bangalore",
    description: <>Professional <span className="text-foreground font-semibold">script writing services in Bangalore</span> — from 15-second ad scripts to 30-minute explainers, we craft scripts that <span className="text-foreground font-semibold">grab attention in the first 3 seconds</span> and convert viewers into customers.</>,
    trustSignals: [
      { icon: Play, text: "1,000+ Scripts Delivered" },
      { icon: Target, text: "Conversion-Focused Storytelling" },
      { icon: Film, text: "All Formats — Ads to Documentaries" },
      { icon: Shield, text: "Industry-Specific Expertise" },
    ],
    credentials: ["1,000+ Scripts Written", "Multiple Formats", "Conversion-Driven"],
    formTitle: "Free Ad Script Writing Consultation",
    formDescription: "Tell us about your video project and we'll outline the script approach.",
    formButtonText: "Get Free Script Consultation",
  },
  source: "script_writing",
  problems: [
    { icon: Eye, title: "Videos Nobody Watches", description: "You're producing videos but viewers drop off in the first 5 seconds because the script is weak." },
    { icon: MessageSquare, title: "Can't Articulate Your Message", description: "You know what you want to say but can't structure it into a compelling narrative." },
    { icon: Clock, title: "Scripts Take Too Long", description: "Writing a good script internally takes weeks of back-and-forth with no clear structure." },
    { icon: Target, title: "No Call to Action", description: "Your videos entertain but don't drive any business action — no leads, no sales, no clicks." },
  ],
  services: [
    { icon: Megaphone, title: "Ad Scripts", description: "Punchy 15-60 second scripts for social media and YouTube ads that convert." },
    { icon: Play, title: "Explainer Videos", description: "Clear, engaging scripts that explain complex products or services simply." },
    { icon: Film, title: "Corporate Videos", description: "Brand films, company profiles, and culture videos that inspire trust." },
    { icon: Mic, title: "Podcast Scripts", description: "Episode outlines, intro/outro scripts, and talking point frameworks." },
    { icon: Sparkles, title: "Social Media Reels", description: "Hook-driven scripts for Instagram Reels, YouTube Shorts, and TikTok." },
    { icon: Users, title: "Testimonial Scripts", description: "Guided question frameworks that draw authentic, compelling stories." },
    { icon: FileText, title: "Presentation Scripts", description: "Speaker notes and narratives for webinars, pitches, and keynotes." },
    { icon: Award, title: "Brand Storytelling", description: "Narrative scripts that tell your brand story with emotion and purpose." },
  ],
  comparison: {
    traditional: [
      "Generic scripts that could be for any brand",
      "No understanding of video pacing and editing",
      "Feature-focused, not benefit-focused",
      "One draft — take it or leave it",
      "Writer has no marketing background",
      "No hook strategy — loses viewers in 3 seconds",
    ],
    super30: [
      "Custom scripts written for your brand voice and audience",
      "Written with shot-by-shot direction and timing notes",
      "Benefit-driven storytelling with clear CTAs",
      "Multiple revisions until the script is perfect",
      "Writers with marketing + creative background",
      "Hook-first approach — grab attention immediately",
    ],
  },
  benefits: [
    { icon: Eye, title: "Higher Watch Time", description: "Hook-driven scripts that keep viewers engaged from start to finish." },
    { icon: Target, title: "Better Conversions", description: "Strategic CTAs woven into the narrative drive measurable business results." },
    { icon: Zap, title: "Fast Turnaround", description: "First draft delivered within 3-5 business days for most projects." },
    { icon: Film, title: "Production-Ready", description: "Scripts include shot directions, timing, and visual cues for easy filming." },
    { icon: Users, title: "Audience-First", description: "Every script is written for your specific audience's pain points and desires." },
    { icon: Shield, title: "Brand-Consistent", description: "Your brand voice maintained across every video format and platform." },
    { icon: Sparkles, title: "Creative & Fresh", description: "No cookie-cutter scripts — every project gets a unique creative approach." },
    { icon: BarChart3, title: "Data-Informed", description: "Script structures based on what works — backed by performance data." },
    { icon: Award, title: "Expert Writers", description: "Scriptwriters with film, advertising, and content marketing experience." },
  ],
  process: [
    { icon: Users, title: "Creative Brief", description: "Understand your goals, audience, tone, key messages, and video format." },
    { icon: PenTool, title: "Script Draft", description: "First draft with hook, narrative arc, visuals, and CTA strategy." },
    { icon: Eye, title: "Review & Refine", description: "Your feedback incorporated with unlimited revisions on structure and copy." },
    { icon: Film, title: "Final Delivery", description: "Production-ready script with timing, shot notes, and voiceover guide." },
  ],
  whoIsThisFor: {
    forYou: [
      "You're producing videos but they're not getting views or conversions",
      "You have a video project but don't know how to write the script",
      "You want professional ad scripts that actually sell",
      "You need consistent content scripts for YouTube or social media",
      "You value storytelling and want videos that move people",
    ],
    notForYou: [
      "You want a script written in 2 hours for ₹500",
      "You're going to completely ignore the script during filming",
      "You want to copy a competitor's viral video script",
      "You don't have a clear objective for the video",
    ],
  },
  faq: [
    { question: "How much does script writing cost?", answer: "Scripts are priced by format and length. A 60-second ad script starts from ₹5,000. Explainer videos and corporate videos are quoted based on duration and complexity." },
    { question: "Do you write scripts for all video types?", answer: "Yes — ad scripts, explainer videos, corporate videos, YouTube content, social media reels, podcasts, webinar scripts, and more." },
    { question: "How long does a script take to deliver?", answer: "First draft is typically delivered within 3-5 business days. Complex projects like documentaries may take 1-2 weeks." },
    { question: "Do you include visual/shot directions?", answer: "Yes. Our scripts include scene descriptions, visual cues, timing notes, and camera direction suggestions to make production smooth." },
    { question: "Can you match our brand voice?", answer: "Absolutely. We study your existing content, brand guidelines, and tone preferences to write in your authentic voice." },
    { question: "Do you do voiceover scripts too?", answer: "Yes. We write voiceover narration scripts with proper pacing, emphasis marks, and pronunciation guides." },
    { question: "What if the script needs major changes?", answer: "We include revision rounds in every project. If the direction needs a complete change, we'll rewrite from scratch based on updated feedback." },
    { question: "Can you help with the video production too?", answer: "Yes! Our Production team handles filming, editing, and post-production. The script is just the beginning." },
  ],
  finalCTA: {
    headline: "Ready for Scripts That Sell?",
    description: "Get a free script consultation and let's plan your next high-impact video.",
    buttonText: "Get Free Script Consultation",
  },
};

const ScriptWriting = () => <ServicePageTemplate config={config} />;
export default ScriptWriting;
