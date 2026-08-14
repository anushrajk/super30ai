import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { Video, Film, Users, Target, TrendingUp, Zap, Shield, Eye, Clock, BarChart3, Layers, Camera, Clapperboard, Megaphone } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Agency for Brand & Corporate Video Production in Bangalore",
    description: "Affordable video production company in Bangalore creating corporate explainer & marketing videos that connect with your audience through the right storytelling",
    keywords: "video production agency in bangalore, video production company in bangalore, video production services in bangalore, video editing company in bangalore, media production companies in bangalore",
    canonical: "https://www.thesuper30.ai/video-production-agency-bangalore",
    serviceType: "Video Production",
    ogTitle: "Your Brand Has a Story Worth Telling. Let's Shoot It.",
    ogDescription: "Corporate videos and brand storytelling that help your business connect and stand out. Let's shoot!",
    twitterTitle: "Your Brand Has a Story Worth Telling. Let's Shoot It.",
    twitterDescription: "Corporate videos and brand storytelling that help your business connect and stand out. Let's shoot!",
  },
  hero: {
    badgeIcon: Video,
    badgeText: "Video Production Agency in Bangalore",
    headlineLine1: "Video Production Agency in Bangalore",
    headlineLine2: "for Professional Brand Videos",
    description: <>As a trusted <span className="text-foreground font-semibold">video production company in Bangalore</span>, we produce corporate videos, explainer videos & marketing videos to <span className="text-foreground font-semibold">communicate your brand story, build trust and engage your viewers into customers</span> through brand films & social media videos.</>,
    trustSignals: [
      { icon: Film, text: "500+ Video Projects Delivered" },
      { icon: Users, text: "200+ Business Clients Served" },
      { icon: TrendingUp, text: "4K Professional Video Quality" },
      { icon: Shield, text: "End-to-end Production Management" },
    ],
    credentials: ["Award-Winning Team", "Fortune 500 Clients", "Quick Turnaround"],
    formTitle: "Free Video Production Quote in Bangalore",
    formDescription: "Tell us about your video project — our video production company in Bangalore will send a custom proposal and timeline.",
    formButtonText: "Enquire Now",
  },
  source: "video_production",
  sections: {
    problems: {
      title: <>The Video Production Challenges Businesses <span className="text-brand">Face</span></>,
      description: "Many businesses struggle to communicate value, build credibility, and capture attention in a content driven digital environment.",
    },
    services: {
      title: <>Video Production Services in Bangalore for <span className="text-brand">Every Business Need</span></>,
      description: "Whether it's brand storytelling and customer engagement to training and marketing campaigns, we create professional video content crafted exactly to your business objectives.",
    },
    comparison: {
      eyebrow: "What Makes Us Different?",
      title: <>Traditional Agency vs <span className="text-brand">TheSuper30</span></>,
      description: "Discover how strategic planning, creativity and clear execution help us stand apart from other media production companies in Bangalore while delivering successful video projects.",
    },
    benefits: {
      eyebrow: "WHY BRANDS CHOOSE US?",
      title: <>Video Production Agency in Bangalore Delivering <span className="text-brand">Better Results</span></>,
      description: "From strategic planning, creative execution, post production or delivery, we support brands with creating impactful video content that creates visibility, engagement and business performance.",
    },
    industries: {
      eyebrow: "INDUSTRY EXPERTISE",
      title: <>Video Production Expertise Across <span className="text-brand">Every Industry</span></>,
      description: "Specialized video production company in Bangalore delivering production solutions across 18+ industries. We understand your audience, business goals, and market dynamics.",
    },
    whoIsThisFor: {
      title: <>Is This the Right Video Production <span className="text-brand">Partner for You?</span></>,
      description: "Our video production services in Bangalore are ideal for brands looking to build visibility, trust, and create content that supports measurable business growth across multiple channels.",
    },
  },
  problems: [
    { icon: Eye, title: "Outdated Brand Perception", description: "Traditional websites and brochures often fail to engage modern audiences seeking visual experiences." },
    { icon: Users, title: "Difficulty In Building Trust", description: "Without professional video content, prospects cannot fully understand your team, expertise, or capabilities." },
    { icon: Target, title: "Low Engagement Content", description: "Static content receives limited attention, while video encourages deeper audience interaction and retention." },
    { icon: Clock, title: "DIY Amateur Brand Content", description: "Amateur quality videos can weaken brand credibility and create a negative first impression." },
  ],
  services: [
    { icon: Video, title: "Corporate Videos", description: "Company profiles, brand stories, and leadership interviews that strengthen business credibility." },
    { icon: Clapperboard, title: "Explainer Videos", description: "Animated and live-action videos that simplify complex products, services, and concepts." },
    { icon: Camera, title: "Podcast Production", description: "Complete podcast production including recording, editing, publishing, and distribution support." },
    { icon: Users, title: "Testimonial Videos", description: "Customer success stories that strengthen trust and support purchase decisions." },
    { icon: Megaphone, title: "Marketing Videos", description: "Advertising videos, product showcases, and promotional content for digital campaigns." },
    { icon: Layers, title: "Motion Graphics", description: "Animated visuals, logo animations, and creative effects designed for modern platforms." },
    { icon: Film, title: "Training Videos", description: "E-Learning, onboarding, compliance, and professional development content for companies." },
    { icon: Zap, title: "Social Media Videos", description: "Short-form reel content, stories, and platform optimized videos for Instagram, YouTube, and LinkedIn." },
  ],
  comparison: {
    traditional: ["Low-quality video concepts with limited brand differentiation", "Zero planning and creative development before production", "Extended revision cycles and delayed project completion", "Additional charges for routine edits and modifications", "Generic creative execution across different industries", "Minimal support for content distribution and performance"],
    super30: ["Custom scripted and professionally planned video productions", "Detailed production planning with creative concepts and direction", "Multiple feedback rounds included within project scope", "Transparent pricing with clearly defined deliverables", "Brand focused creatives designed to meet audience expectations", "Strategic content distribution and optimization support"],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher Audience Engagement", description: "Professional video content attracts 1200% more shares than text and images combined, and encourages better audience interaction." },
    { icon: Shield, title: "Premium Production Quality", description: "Advanced cameras, lighting systems, and audio equipment ensure exceptional visual standards." },
    { icon: Target, title: "Consistent Brand Identity", description: "Every video aligns with your brand guidelines, positioning, and communication objectives." },
    { icon: Zap, title: "Faster Project Delivery", description: "Efficient production workflows help deliver high quality content within defined timelines." },
    { icon: Users, title: "Experienced Production Team", description: "Directors, cinematographers, editors, and producers with extensive industry expertise." },
    { icon: BarChart3, title: "ROI Driven Content", description: "Videos developed to support business goals, audience engagement, and measurable outcomes." },
    { icon: Camera, title: "Flexible Content Formats", description: "From 15s short-form content to 30-minute long-form productions, we deliver production solutions for every requirement." },
    { icon: Clock, title: "Complete Production Management", description: "Concept, Planning, scripting, filming, editing, and delivery managed through a single team." },
    { icon: Layers, title: "Platform Ready Deliverables", description: "Content optimized for YouTube, Instagram, LinkedIn, websites, and digital advertising channels." },
  ],
  process: [
    { icon: Target, title: "Discovery & Brief", description: "Understand your goals, audience, brand tone, and project requirements." },
    { icon: Layers, title: "Script & Storyboard", description: "Craft a compelling script and visual storyboard for your approval." },
    { icon: Camera, title: "Production", description: "Professional filming with top-tier equipment and experienced crew." },
    { icon: Film, title: "Post-Production", description: "Expert editing, color grading, sound design, and motion graphics." },
  ],
  whoIsThisFor: {
    forYou: ["You need professional videos to strengthen your brand presence", "You want to build credibility and trust with prospective clients", "You're launching a new product, service, or marketing campaign", "You need training, onboarding, or learning focused content", "You want to stand apart from competitors across social platforms"],
    notForYou: ["You only need a basic phone recording, not professional production", "You have no budget allocated for video marketing initiatives", "You're not prepared to invest in your brand's visual identity", "You need project delivery within the next three days"],
  },
  faq: getFaqs("video-production"),
  finalCTA: {
    headline: "Scale Your Brand with a Video Production Agency in Bangalore",
    description: "Get a free production consultation and discover video content solutions designed to increase visibility, strengthen credibility, and support long-term business growth according to your brand goals.",
    buttonText: "Get Free Video Production Quote",
  },
};

const VideoProduction = () => <ServicePageTemplate config={config} />;
export default VideoProduction;
