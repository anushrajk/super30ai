import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import {
  Video, Camera, Film, Aperture, Mic, Lightbulb, Palette, Zap,
  Users, Award, Shield, Target, Clock, Eye, Layers, TrendingUp,
} from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Video & Photography Production Agency in Bangalore | Films, Reels, Shoots",
    description:
      "Bangalore's top video production & photography agency. Brand films, ads, reels, product shoots & corporate photography that look premium and convert viewers.",
    keywords:
      "video production agency in bangalore, video production company in bangalore, photography services in bangalore, product photography bangalore, corporate video production bangalore, ad film production bangalore",
    canonical: "https://www.thesuper30.ai/video-photography-production-bangalore",
    serviceType: "Video & Photography Production",
    ogTitle: "Video & Photography Production Agency in Bangalore",
    ogDescription:
      "Brand films, ad films, reels, product shoots and corporate photography produced by Bangalore's top in-house production team.",
    twitterTitle: "Video & Photography Production Agency in Bangalore",
    twitterDescription:
      "Premium video production and photography that builds brands and drives conversions — shot, edited and delivered in-house.",
  },
  hero: {
    badgeIcon: Video,
    badgeText: "Corporate Video Maker in Bangalore",
    headlineLine1: "Video & Photography",
    headlineLine2: "Production in Bangalore",
    description: (
      <>
        Bangalore's trusted <span className="text-foreground font-semibold">corporate video maker</span> and <span className="text-foreground font-semibold">video production company</span> — brand films, ad films, reels and product photography that look premium, tell your story and convert viewers into customers.
      </>
    ),
    trustSignals: [
      { icon: Film, text: "End-to-End In-House Production" },
      { icon: Camera, text: "Cinema-Grade Equipment" },
      { icon: Aperture, text: "Professional Studios" },
      { icon: Award, text: "500+ Films Delivered" },
    ],
    credentials: ["300+ Brands Served", "500+ Films & Shoots", "4.9/5 Client Rating"],
    formTitle: "Free Corporate Video Production Quote in Bangalore",
    formDescription: "Tell us about your shoot — Bangalore's top in-house video production team will send a tailored production plan in 24 hours.",
    formButtonText: "Get Free Production Quote",
  },
  source: "production",
  problems: [
    { icon: Camera, title: "DIY Footage Looks Amateur", description: "Phone-shot videos and stock photos make your brand look small and untrustworthy." },
    { icon: Clock, title: "Freelancers Disappear Mid-Project", description: "You hire a freelancer, get half a deliverable, then chase them for weeks." },
    { icon: Target, title: "No Strategy Behind the Shoot", description: "You get pretty footage but no story, no hook, and no conversion thinking." },
    { icon: Layers, title: "Disjointed Vendors", description: "One person shoots, another edits, a third does sound — quality slips between handoffs." },
  ],
  services: [
    { icon: Film, title: "Brand & Corporate Films", description: "2–5 minute brand stories, founder films and culture videos that build trust." },
    { icon: Video, title: "Ad Films & TVCs", description: "30s–60s performance ads built for YouTube, Meta, OTT and TV." },
    { icon: Aperture, title: "Reels & Short-Form Video", description: "Hook-first 15s–60s vertical content for Instagram, YouTube Shorts and TikTok." },
    { icon: Camera, title: "Product Photography", description: "Studio, lifestyle and 360° product shots for e-commerce, D2C and catalogues." },
    { icon: Users, title: "Corporate Photography", description: "Team portraits, office shoots, events and conferences with editorial polish." },
    { icon: Lightbulb, title: "Concept & Direction", description: "Storyboarding, scripting, shot listing and creative direction in-house." },
    { icon: Palette, title: "Post-Production & Editing", description: "Editing, colour grading, motion graphics, VFX and sound design under one roof." },
    { icon: Mic, title: "Voiceover & Sound Design", description: "Professional voiceovers in 12+ languages, custom music and sound mixing." },
  ],
  comparison: {
    traditional: [
      "Freelancers juggling 5 projects with no accountability",
      "Stock-style shots with no brand storytelling",
      "Hidden costs added after the shoot ends",
      "No script, storyboard or pre-production planning",
      "Slow turnarounds with delivery delays",
      "Random vendors stitched together for each phase",
    ],
    super30: [
      "Dedicated in-house production team — script to delivery",
      "Strategy-first creative built around your brand & buyer",
      "Transparent fixed-quote pricing — zero surprises",
      "Full pre-production: scripts, storyboards, shot lists",
      "On-time delivery with milestone-based reviews",
      "Direction, shoot, edit, sound and colour — all under one roof",
    ],
  },
  benefits: [
    { icon: Award, title: "Premium Brand Perception", description: "Cinema-grade visuals position you above your competitors instantly." },
    { icon: Target, title: "Conversion-Focused Storytelling", description: "Every shot serves a hook, story beat or CTA — not just aesthetics." },
    { icon: Zap, title: "Fast Turnarounds", description: "Reels in 5–7 days. Brand films in 3–4 weeks. Always on time." },
    { icon: Shield, title: "End-to-End Accountability", description: "One team, one timeline, one point of contact — no finger-pointing." },
    { icon: Eye, title: "Multi-Platform Ready", description: "Every asset delivered in 16:9, 9:16, 1:1 and 4:5 cuts." },
    { icon: TrendingUp, title: "Performance-Driven", description: "Hooks, pacing and CTAs designed for scroll-stopping retention." },
    { icon: Aperture, title: "Cinema-Grade Equipment", description: "RED, Sony FX, gimbals, drones, lighting and live sound — all in-house." },
    { icon: Palette, title: "Full Post-Production", description: "Editing, colour, motion graphics, VFX and sound mixed under one roof." },
    { icon: Users, title: "Experienced Crew", description: "Directors, DOPs, editors and producers with 10+ years of brand experience." },
  ],
  process: [
    { icon: Lightbulb, title: "Concept & Script", description: "Brief, creative direction, scripts and storyboards approved before shoot." },
    { icon: Film, title: "Pre-Production", description: "Casting, location scouting, shot lists, schedules and equipment plans." },
    { icon: Camera, title: "Shoot Days", description: "Professional crew, cinema-grade gear, on-set monitoring and direction." },
    { icon: Palette, title: "Post & Delivery", description: "Editing, colour, sound, motion graphics and multi-platform deliverables." },
  ],
  whoIsThisFor: {
    forYou: [
      "You want premium brand films, ad films or product shoots — not DIY footage",
      "You need consistent reels and short-form content monthly",
      "You want strategy-first production tied to marketing goals",
      "You want one accountable team for script, shoot, edit and delivery",
      "You're investing in brand-building and need cinema-grade output",
    ],
    notForYou: [
      "You're looking for the cheapest freelancer on a marketplace",
      "You want a one-day shoot with zero pre-production planning",
      "You're not willing to invest in proper script, lighting and crew",
      "You want hundreds of low-quality videos instead of a few great ones",
    ],
  },
  faq: [
    { question: "What does a video production agency in Bangalore do?", answer: "We handle end-to-end video production — concept, scripting, storyboarding, casting, shoot, editing, colour grading, sound and multi-platform deliverables — all in-house." },
    { question: "How much does video production cost in Bangalore?", answer: "Reels start from ₹15,000–₹40,000 per video. Brand films range ₹1.5L–₹8L+. Ad films range ₹3L–₹25L+ depending on cast, locations and production scale." },
    { question: "How long does it take to produce a brand film?", answer: "A typical 2–3 minute brand film takes 3–4 weeks end-to-end — 1 week pre-production, shoot in 1–3 days, 2 weeks post-production." },
    { question: "Do you handle product photography for e-commerce?", answer: "Yes. We shoot studio, lifestyle and 360° product photography optimised for Amazon, Flipkart, Shopify and your own D2C site." },
    { question: "Can you produce reels and short-form video monthly?", answer: "Yes. Our monthly reels packages cover 8–30 reels per month including concept, shoot, editing and platform-specific delivery." },
    { question: "Do you have your own studio and equipment?", answer: "Yes. We own studios, cinema-grade cameras (RED, Sony FX), lighting, gimbals, drones and full post-production setups in Bangalore." },
    { question: "Do you provide voiceovers and music?", answer: "Yes. We offer professional voiceovers in 12+ Indian and international languages, custom music composition and licensed track libraries." },
    { question: "Can you shoot outside Bangalore?", answer: "Yes. We shoot pan-India and internationally. Travel and logistics are quoted transparently in the production estimate." },
  ],
  finalCTA: {
    headline: "Ready to Make Films That Build Your Brand?",
    description: "Get a free production quote and creative direction from Bangalore's top in-house video and photography team.",
    buttonText: "Get Free Production Quote",
  },
};

const Production = () => <ServicePageTemplate config={config} />;
export default Production;
