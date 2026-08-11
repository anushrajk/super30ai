import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import {
  Video, Camera, Film, Aperture, Mic, Lightbulb, Palette, Zap,
  Users, Award, Shield, Target, Clock, Eye, Layers, TrendingUp,
} from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Corporate Video maker in Bangalore | Visual Storytellers",
    description: "Professional video maker in Bangalore offering corporate video making services, storytelling & high quality production for brands. Let’s create your video",
    keywords: "corporate video maker in bangalore, professional video maker in bangalore, corporate storytelling in bangalore, corporate video making services in bangalore",
    canonical: "https://www.thesuper30.ai/corporate-video-maker-bangalore",
    serviceType: "Video & Photography Production",
    ogTitle: "Corporate Video Maker in Bangalore | Professional Services",
    ogDescription: "Corporate video maker in Bangalore delivering storytelling and production services.",
    twitterTitle: "Corporate Video Maker in Bangalore | Professional Services",
    twitterDescription: "Corporate video maker in Bangalore delivering storytelling and production services.",
  },
  hero: {
    badgeIcon: Video,
    badgeText: "Corporate Video maker in Bangalore",
    headlineLine1: "Corporate Video Maker in Bangalore",
    headlineLine2: "for Brand Storytelling",
    description: (
      <>
        Bangalore's trusted <span className="text-foreground font-semibold">corporate video maker</span> and visual content partner offering <span className="text-foreground font-semibold">corporate video making services in Bangalore</span> including brand films, ad films, reels and product photography that enhance brand perception, convey your story and convert your audiences to customers.
      </>
    ),
    trustSignals: [
      { icon: Film, text: "End-to-end In-House Production Services" },
      { icon: Camera, text: "Professional Cinematic Equipments" },
      { icon: Aperture, text: "Advanced Production Studios" },
      { icon: Award, text: "500+ Projects Successfully Delivered" },
    ],
    credentials: ["300+ Brands Served", "500+ Films & Shoots", "4.9/5 Client Rating"],
    formTitle: "Free Corporate Video Production Quote in Bangalore",
    formDescription: "Tell us about your shoot — Bangalore's top in-house video production team will send a tailored production plan in 24 hours.",
    formButtonText: "Enquire Now",
  },
  source: "production",
  sections: {
    problems: {
      title: "The Production Problems Most Businesses Face",
      description: "Many businesses invest in video and photography expecting excellent brand impact, but inconsistent execution, poor planning, and fragmented production processes often limit results.",
    },
    services: {
      title: "Professional Video Maker in Bangalore – Video Production & Photography Services",
      description: "From corporate storytelling in Bangalore storytelling to commercial content creation, we provide end-to-end video production and photography solutions designed to establish brand presence, increase engagement, and support business growth.",
    },
    comparison: {
      title: "Traditional Agency vs. The Super 30",
      description: "The difference between average content and high performing visual assets often comes down to planning, execution, and accountability. Compare the traditional production approach with a dedicated creative team built for consistent business outcomes.",
    },
    benefits: {
      eyebrow: "Why Brands Choose Us?",
      title: "Professional Video Maker in Bangalore Delivering Business Results",
      description: "From professional creative execution to the streamlined workflows our production specialists help brands to craft impactful visuals that boost credibility, enhance engagement, and drive measurable marketing results.",
    },
    industries: {
      eyebrow: "Industry Expertise",
      title: "Video & Photography Production Services For Every Industry",
      description: "Specialized production expertise across 18+ industries through corporate video making services in Bangalore, we understand your audience, competition, and business objectives and provide end-to-end production solutions.",
    },
    whoIsThisFor: {
      title: "Is This the Right Production Solution for You?",
      description: "For brands looking for a professional video maker in Bangalore who prioritise strategic production, professional execution, and content that supports sustainable business growth.",
    },
  },
  problems: [
    { icon: Camera, title: "Amateur DIY Visual Content", description: "Basic video footage and generic photography can weaken brand perception and reduce audience confidence." },
    { icon: Clock, title: "Unreliable Project Execution", description: "Production delays and inconsistent communication often create challenges throughout the project lifecycle." },
    { icon: Target, title: "Lack of Creative Direction", description: "Excellent visuals alone are not enough without a clear narrative, audience focus, and business objective." },
    { icon: Layers, title: "Fragmented Production Teams", description: "Managing multiple vendors across production stages can lead to inconsistencies in quality and delivery." },
  ],
  services: [
    { icon: Film, title: "Brand & Corporate Films", description: "2-5 minute compelling brand stories, founder narratives, and corporate storytelling in Bangalore that develop credibility and trust." },
    { icon: Video, title: "Commercial Ad Films & TVCs", description: "Performance driven 30s-60s advertising content created for YouTube, Meta, OTT platforms, and television campaigns." },
    { icon: Aperture, title: "Reels & Short-Form Video Content", description: "Engaging vertical video content designed for Instagram, YouTube Shorts, and short video platforms." },
    { icon: Camera, title: "Product Photography", description: "Professional studio, lifestyle, and 360* degree product photography for e-commerce brands and catalogues." },
    { icon: Users, title: "Corporate Photography", description: "Team portraits, workplace photography, corporate events, and conference coverage with professional refinement." },
    { icon: Lightbulb, title: "Creative Strategy & Direction", description: "Concept development, script creation, production planning, and creative supervision managed internally." },
    { icon: Palette, title: "Post-Production & Editing Services", description: "Advanced editing, colour grading, motion graphics, visual effects, and audio enhancement services." },
    { icon: Mic, title: "Voiceover & Sound Production", description: "Professional voiceovers across 12+ languages with custom music composition and sound engineering." },
  ],
  comparison: {
    traditional: [
      "Multiple projects managed with limited ownership and accountability",
      "Generic visual content with no brand specific storytelling",
      "Unexpected project expenses introduced during production",
      "No planning, scripting, and creative preparation",
      "Extended delivery timelines that affect campaign schedules",
      "Random vendors and providers managing different production stages",
    ],
    super30: [
      "Dedicated in-house production team managing projects from concept to delivery",
      "Strategic creative development aligned with brand goals and audience needs",
      "Transparent project pricing with complete cost clarity",
      "Comprehensive planning including scripts, storyboards, and production frameworks",
      "On-time project execution supported by structured review processes",
      "Production, editing, audio, and creative services managed under one team",
    ],
  },
  benefits: [
    { icon: Award, title: "Premium Brand Presence", description: "Professional visuals position brand perception and boost credibility instantly." },
    { icon: Target, title: "Conversion Driven Storytelling", description: "Every shot supports audience engagement, brand messaging, and business objectives." },
    { icon: Zap, title: "Faster Project Delivery", description: "Reels in 5 to 7 days. Brand films in 3 to 4 weeks. Delivered on schedule." },
    { icon: Shield, title: "Complete Production Ownership", description: "One team, one timeline, one contact ensuring seamless project execution." },
    { icon: Eye, title: "Platform Ready Content", description: "Every asset optimized for 16:9, 9:16, 1:1, and 4:5 formats." },
    { icon: TrendingUp, title: "Performance Driven Creative", description: "Visual narratives, hooks, and CTAs designed to improve audience engagement." },
    { icon: Aperture, title: "Professional Production Equipment", description: "Advanced cameras, drones, lighting systems, and audio equipment managed in-house." },
    { icon: Palette, title: "End-to-end Post Production", description: "Editing, colour grading, motion graphics, visual effects, and audio enhancement all under one roof." },
    { icon: Users, title: "Experienced Creative Team", description: "Directors, cinematographers, editors, and producers with extensive industry experience." },
  ],
  process: [
    { icon: Lightbulb, title: "Concept & Script", description: "Brief, creative direction, scripts and storyboards approved before shoot." },
    { icon: Film, title: "Pre-Production", description: "Casting, location scouting, shot lists, schedules and equipment plans." },
    { icon: Camera, title: "Shoot Days", description: "Professional crew, cinema-grade gear, on-set monitoring and direction." },
    { icon: Palette, title: "Post & Delivery", description: "Editing, colour, sound, motion graphics and multi-platform deliverables." },
  ],
  whoIsThisFor: {
    forYou: [
      "You need premium brand films, ad films, or product shoots with professional execution",
      "You require consistent reels and short-form content to support ongoing marketing",
      "You want strategic production aligned with business objectives and growth goals",
      "You prefer a dedicated team managing concept, production, editing, and delivery",
      "You are investing in brand visibility and professional visual communication",
    ],
    notForYou: [
      "You are searching only for the cheapest freelance production option",
      "You expect immediate shoots without planning, creative direction, or preparation",
      "You are unwilling to invest in professional scripting, lighting, or production expertise",
      "You prioritize content volume over quality, consistency, and brand impact",
    ],
  },
  faq: getFaqs("production"),
  finalCTA: {
    headline: "Transform and Elevate Your Brand With Professional Visual Content",
    description: "Get a free consultation with our corporate video maker in Bangalore and discuss creative solutions designed to increase visibility, engagement, and business growth.",
    buttonText: "Get Free Production Consultation",
  },
};

const Production = () => <ServicePageTemplate config={config} />;
export default Production;
