import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { Video, Film, Users, Target, TrendingUp, Zap, Shield, Eye, Clock, Megaphone, BarChart3, Layers, Camera, Clapperboard } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Corporate Video Production in Bangalore | The Super 30",
    description: "Professional corporate video production in Bangalore. Company profiles, brand films, testimonials & training videos that elevate your brand image.",
    keywords: "corporate video production bangalore, company profile video, brand film, corporate videography",
    canonical: "https://www.thesuper30.ai/corporate-video",
    serviceType: "Corporate Video Production",
  },
  hero: {
    badgeIcon: Video,
    badgeText: "Corporate Video Experts",
    headlineLine1: "Professional Corporate",
    headlineLine2: "Videos That Build Trust",
    description: <>We produce high-quality corporate videos that <span className="text-foreground font-semibold">tell your brand story, build credibility, and convert viewers into clients</span>.</>,
    trustSignals: [
      { icon: Film, text: "500+ Videos Produced" },
      { icon: Users, text: "200+ Corporate Clients" },
      { icon: TrendingUp, text: "4K Ultra HD Quality" },
      { icon: Shield, text: "End-to-End Production" },
    ],
    credentials: ["Award-Winning Team", "Fortune 500 Clients", "Quick Turnaround"],
    formTitle: "Get a Free Quote",
    formDescription: "Tell us about your project and get a custom video production proposal.",
    formButtonText: "Get Free Quote",
  },
  source: "corporate_video",
  problems: [
    { icon: Eye, title: "Your Brand Looks Outdated", description: "Text-heavy websites and brochures don't engage modern audiences who expect video." },
    { icon: Users, title: "Hard to Build Trust Online", description: "Without video, potential clients can't see your team, culture, or capabilities." },
    { icon: Target, title: "Low Engagement Content", description: "Static content gets scrolled past. Video captures attention and holds it." },
    { icon: Clock, title: "DIY Videos Look Unprofessional", description: "Amateur videos damage your brand more than no video at all." },
  ],
  services: [
    { icon: Video, title: "Company Profile Videos", description: "Showcase your company's story, mission, and capabilities." },
    { icon: Film, title: "Brand Films", description: "Cinematic brand stories that emotionally connect with your audience." },
    { icon: Users, title: "Testimonial Videos", description: "Customer success stories that build trust and drive conversions." },
    { icon: Clapperboard, title: "Training Videos", description: "Professional training content for employee onboarding and development." },
    { icon: Megaphone, title: "Product Demos", description: "Clear, engaging product demonstrations that drive sales." },
    { icon: Camera, title: "Event Coverage", description: "Professional multi-camera coverage of corporate events and conferences." },
    { icon: Layers, title: "Motion Graphics", description: "Animated explainers and infographics that simplify complex concepts." },
    { icon: Zap, title: "Social Media Videos", description: "Short-form video content optimized for LinkedIn, Instagram, and YouTube." },
  ],
  comparison: {
    traditional: ["Generic template-based videos", "No pre-production planning", "Limited revisions", "Long delivery timelines", "Hidden costs for edits", "One-size-fits-all approach"],
    super30: ["Custom scripted & storyboarded videos", "Detailed pre-production with mood boards", "Multiple revision rounds included", "Fast turnaround with milestone updates", "Transparent all-inclusive pricing", "Tailored to your brand & audience"],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher Engagement", description: "Video content gets 1200% more shares than text and images combined." },
    { icon: Shield, title: "Professional Quality", description: "Cinema-grade equipment and experienced crew for every shoot." },
    { icon: Target, title: "Brand Consistency", description: "Every video aligns with your brand guidelines and messaging." },
    { icon: Zap, title: "Fast Turnaround", description: "From concept to delivery in as little as 2 weeks." },
    { icon: Users, title: "Experienced Team", description: "Directors, cinematographers, and editors with 10+ years experience." },
    { icon: BarChart3, title: "ROI-Focused", description: "Videos designed to achieve specific business objectives and KPIs." },
  ],
  process: [
    { icon: Target, title: "Discovery & Brief", description: "Understand your goals, audience, and brand to create the perfect brief." },
    { icon: Layers, title: "Script & Storyboard", description: "Craft a compelling script and visual storyboard for your approval." },
    { icon: Camera, title: "Production", description: "Professional filming with top-tier equipment and experienced crew." },
    { icon: Film, title: "Post-Production", description: "Expert editing, color grading, sound design, and motion graphics." },
  ],
  whoIsThisFor: {
    forYou: ["You need professional videos to elevate your brand", "You want to build trust with potential clients online", "You're launching a new product or service", "You need training or onboarding content", "You want to stand out from competitors"],
    notForYou: ["You need a quick selfie video, not professional production", "You have zero budget for video content", "You're not ready to invest in your brand image", "You need videos in less than 3 days"],
  },
  faq: [
    { question: "How much does a corporate video cost?", answer: "Pricing depends on complexity, duration, and requirements. A standard corporate profile video starts from ₹50,000. Contact us for a custom quote." },
    { question: "How long does production take?", answer: "Typically 2-4 weeks from brief to delivery, depending on project scope and revision rounds." },
    { question: "Do you provide scriptwriting?", answer: "Yes, our team includes professional scriptwriters who craft compelling narratives for your brand." },
    { question: "What equipment do you use?", answer: "We use cinema-grade cameras (RED, Sony FX), professional lighting, and audio equipment for every shoot." },
    { question: "Can you shoot at our office?", answer: "Absolutely. We do on-location shoots at your office, factory, or any location across Bangalore and India." },
    { question: "How many revisions are included?", answer: "We include 2-3 rounds of revisions in our standard packages. Additional revisions can be arranged." },
    { question: "Do you handle drone shots?", answer: "Yes, we have licensed drone operators for aerial cinematography when needed." },
    { question: "Can you create videos in multiple languages?", answer: "Yes, we can produce videos in English, Hindi, Kannada, and other regional languages." },
  ],
  finalCTA: {
    headline: "Ready to Elevate Your Brand with Video?",
    description: "Get a free consultation and custom quote for your corporate video project.",
    buttonText: "Get Free Quote",
  },
};

const CorporateVideo = () => <ServicePageTemplate config={config} />;
export default CorporateVideo;
