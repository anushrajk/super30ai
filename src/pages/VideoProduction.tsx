import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { Video, Film, Users, Target, TrendingUp, Zap, Shield, Eye, Clock, BarChart3, Layers, Camera, Clapperboard, Megaphone } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Agency for Brand & Corporate Video Production in Bangalore",
    description: "Affordable video production agency in Bangalore creating corporate explainer & marketing videos that connect with your audience through the right storytelling",
    keywords: "video production agency in bangalore, video production company bangalore, video production services bangalore, video editing company in bangalore, media production companies in bangalore",
    canonical: "https://www.thesuper30.ai/video-production-agency-bangalore",
    serviceType: "Video Production",
  },
  hero: {
    badgeIcon: Video,
    badgeText: "Video Production Experts",
    headlineLine1: "Professional Video",
    headlineLine2: "Production That Delivers",
    description: <>We produce high-quality videos that <span className="text-foreground font-semibold">tell your brand story, build credibility, and convert viewers into clients</span>. From corporate films to social media reels.</>,
    trustSignals: [
      { icon: Film, text: "500+ Videos Produced" },
      { icon: Users, text: "200+ Corporate Clients" },
      { icon: TrendingUp, text: "4K Ultra HD Quality" },
      { icon: Shield, text: "End-to-End Production" },
    ],
    credentials: ["Award-Winning Team", "Fortune 500 Clients", "Quick Turnaround"],
    formTitle: "Get a Free Quote",
    formDescription: "Tell us about your video project and get a custom production proposal.",
    formButtonText: "Get Free Quote",
  },
  source: "video_production",
  problems: [
    { icon: Eye, title: "Your Brand Looks Outdated", description: "Text-heavy websites and brochures don't engage modern audiences who expect video content." },
    { icon: Users, title: "Hard to Build Trust Online", description: "Without video, potential clients can't see your team, culture, or real capabilities." },
    { icon: Target, title: "Low Engagement Content", description: "Static content gets scrolled past. Video captures attention and holds it 5x longer." },
    { icon: Clock, title: "DIY Videos Look Unprofessional", description: "Amateur videos damage your brand credibility more than having no video at all." },
  ],
  services: [
    { icon: Video, title: "Corporate Videos", description: "Company profiles, brand films, and leadership interviews that showcase your business." },
    { icon: Clapperboard, title: "Explainer Videos", description: "Animated and live-action explainers that simplify complex products and services." },
    { icon: Camera, title: "Podcast Production", description: "Full podcast setup — recording, editing, publishing, and multi-platform distribution." },
    { icon: Users, title: "Testimonial Videos", description: "Customer success stories that build trust and drive conversions." },
    { icon: Megaphone, title: "Marketing Videos", description: "Ad films, product demos, and promotional content for digital campaigns." },
    { icon: Layers, title: "Motion Graphics", description: "Animated infographics, logo reveals, and visual effects for any platform." },
    { icon: Film, title: "Training Videos", description: "E-learning, onboarding, compliance, and skill development video content." },
    { icon: Zap, title: "Social Media Videos", description: "Short-form reels, stories, and clips optimized for Instagram, YouTube & LinkedIn." },
  ],
  comparison: {
    traditional: ["Generic template-based videos", "No pre-production planning or scripting", "Limited revisions and long timelines", "Hidden costs for every small edit", "One-size-fits-all creative approach", "No strategy or distribution support"],
    super30: ["Custom scripted & storyboarded productions", "Detailed pre-production with mood boards", "Multiple revision rounds included in price", "Transparent all-inclusive pricing upfront", "Tailored creative for your brand & audience", "Full distribution & optimization strategy"],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher Engagement", description: "Video content gets 1200% more shares than text and images combined." },
    { icon: Shield, title: "Professional Quality", description: "Cinema-grade cameras, lighting, and audio equipment for every shoot." },
    { icon: Target, title: "Brand Consistency", description: "Every video aligns perfectly with your brand guidelines and messaging." },
    { icon: Zap, title: "Fast Turnaround", description: "From concept to final delivery in as little as 2 weeks." },
    { icon: Users, title: "Experienced Crew", description: "Directors, cinematographers, and editors with 10+ years of experience." },
    { icon: BarChart3, title: "ROI-Focused", description: "Videos designed to achieve specific business objectives and measurable KPIs." },
    { icon: Camera, title: "Versatile Formats", description: "From 15-second reels to 30-minute documentaries — we do it all." },
    { icon: Clock, title: "End-to-End Service", description: "Concept, scripting, shooting, editing, and delivery — all under one roof." },
    { icon: Layers, title: "Multi-Platform Ready", description: "Optimized exports for YouTube, Instagram, LinkedIn, websites, and ads." },
  ],
  process: [
    { icon: Target, title: "Discovery & Brief", description: "Understand your goals, audience, brand tone, and project requirements." },
    { icon: Layers, title: "Script & Storyboard", description: "Craft a compelling script and visual storyboard for your approval." },
    { icon: Camera, title: "Production", description: "Professional filming with top-tier equipment and experienced crew." },
    { icon: Film, title: "Post-Production", description: "Expert editing, color grading, sound design, and motion graphics." },
  ],
  whoIsThisFor: {
    forYou: ["You need professional videos to elevate your brand image", "You want to build trust and credibility with potential clients", "You're launching a new product, service, or campaign", "You need training, onboarding, or educational content", "You want to stand out from competitors on social media"],
    notForYou: ["You just need a quick phone recording, not professional production", "You have zero budget allocated for video content", "You're not ready to invest in your brand's visual presence", "You need final delivery in less than 3 days"],
  },
  faq: [
    { question: "How much does video production cost?", answer: "Pricing depends on complexity, duration, and requirements. A standard corporate video starts from ₹50,000. Explainer animations start from ₹30,000. Contact us for a custom quote." },
    { question: "How long does production take?", answer: "Typically 2-4 weeks from brief to final delivery, depending on project scope and revision rounds needed." },
    { question: "Do you provide scriptwriting?", answer: "Yes, our team includes professional scriptwriters who craft compelling narratives tailored to your brand and audience." },
    { question: "What equipment do you use?", answer: "We use cinema-grade cameras (RED, Sony FX), professional lighting rigs, and broadcast audio equipment for every shoot." },
    { question: "Can you shoot at our location?", answer: "Absolutely. We do on-location shoots at offices, factories, events, or any location across Bangalore and India." },
    { question: "How many revisions are included?", answer: "We include 2-3 rounds of revisions in our standard packages. Additional rounds can be arranged if needed." },
    { question: "Do you handle drone shots and aerial footage?", answer: "Yes, we have licensed drone operators for stunning aerial cinematography when your project requires it." },
    { question: "Can you create videos in multiple languages?", answer: "Yes, we produce videos in English, Hindi, Kannada, Tamil, Telugu, and other regional languages." },
  ],
  finalCTA: {
    headline: "Ready to Elevate Your Brand with Video?",
    description: "Get a free consultation and custom quote for your video production project.",
    buttonText: "Get Free Quote",
  },
};

const VideoProduction = () => <ServicePageTemplate config={config} />;
export default VideoProduction;
