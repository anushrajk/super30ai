import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { ClipboardList, Users, Target, TrendingUp, Zap, Shield, Eye, Clock, BarChart3, Layers, Monitor, PlayCircle, Video, Settings } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Training Video Production in Bangalore | The Super 30",
    description: "Professional training video production for corporates. Employee onboarding, compliance, safety & skill development videos.",
    keywords: "training video production bangalore, corporate training video, employee onboarding video, compliance training",
    canonical: "https://www.thesuper30.ai/training-video",
    serviceType: "Training Video Production",
  },
  hero: {
    badgeIcon: ClipboardList,
    badgeText: "Training Video Specialists",
    headlineLine1: "Professional Training",
    headlineLine2: "Videos That Actually Work",
    description: <>We produce training videos that <span className="text-foreground font-semibold">reduce training time by 40% and improve knowledge retention</span>.</>,
    trustSignals: [
      { icon: Users, text: "150+ Corporate Clients" },
      { icon: Video, text: "500+ Training Videos" },
      { icon: TrendingUp, text: "40% Faster Training" },
      { icon: Shield, text: "Multi-Language Support" },
    ],
    credentials: ["Corporate Training Experts", "ISO-Compliant Content", "Pan-India Coverage"],
    formTitle: "Get a Free Quote",
    formDescription: "Share your training requirements and get a custom production proposal.",
    formButtonText: "Get Free Quote",
  },
  source: "training_video",
  problems: [
    { icon: Clock, title: "Training Takes Too Long", description: "In-person training eats up weeks of productive time across teams." },
    { icon: Users, title: "Inconsistent Training Quality", description: "Different trainers deliver different quality — no standardization." },
    { icon: Eye, title: "Low Engagement", description: "Employees zone out during boring training sessions and forget everything." },
    { icon: Settings, title: "Hard to Scale", description: "Training new hires across multiple locations is logistically painful." },
  ],
  services: [
    { icon: ClipboardList, title: "Onboarding Videos", description: "Welcome and orient new employees with engaging onboarding content." },
    { icon: Shield, title: "Compliance Training", description: "Safety, legal, and regulatory compliance videos that meet standards." },
    { icon: Monitor, title: "Software Training", description: "Step-by-step software tutorials with screen recording and annotations." },
    { icon: Users, title: "Soft Skills Training", description: "Communication, leadership, and interpersonal skills development." },
    { icon: PlayCircle, title: "Process Training", description: "SOPs and workflow training with animated demonstrations." },
    { icon: Target, title: "Sales Training", description: "Product knowledge and sales technique videos for your team." },
    { icon: Layers, title: "Safety Training", description: "Workplace safety and hazard awareness training content." },
    { icon: BarChart3, title: "Assessment Videos", description: "Video-based tests and scenario assessments for evaluation." },
  ],
  comparison: {
    traditional: ["In-person training with inconsistent delivery", "PowerPoint-based boring sessions", "No way to track learning outcomes", "Expensive to scale across locations", "Training content gets outdated quickly", "No engagement or interaction"],
    super30: ["Standardized video-based training", "Engaging animated and filmed content", "Built-in assessments and tracking", "Train thousands at zero marginal cost", "Easy to update and version control", "Interactive modules with quizzes"],
  },
  benefits: [
    { icon: Clock, title: "40% Faster Training", description: "Video-based training reduces onboarding time significantly." },
    { icon: TrendingUp, title: "Better Retention", description: "Visual content improves knowledge retention vs. text-based training." },
    { icon: Zap, title: "Scalable", description: "Train 10 or 10,000 employees with the same high-quality content." },
    { icon: Shield, title: "Compliance Ready", description: "Meet industry regulations with standardized training documentation." },
    { icon: BarChart3, title: "Measurable Results", description: "Track completion rates, quiz scores, and learning outcomes." },
    { icon: Users, title: "Consistent Quality", description: "Every employee gets the same excellent training experience." },
  ],
  process: [
    { icon: Target, title: "Training Needs Analysis", description: "Identify learning objectives, audience, and content requirements." },
    { icon: Layers, title: "Content Design", description: "Script, storyboard, and design the training modules." },
    { icon: Video, title: "Production", description: "Professional filming and animation with expert crew." },
    { icon: Monitor, title: "Deploy & Track", description: "Deliver content to your LMS with tracking and assessments." },
  ],
  whoIsThisFor: {
    forYou: ["You need to standardize training across your organization", "You're scaling your team and need efficient onboarding", "You want to reduce training costs while improving quality", "You need compliance or safety training videos", "You want measurable training outcomes"],
    notForYou: ["You only need a one-time informal training session", "You have no training curriculum or objectives", "You expect professional videos for under ₹10,000", "You need training content delivered in 2 days"],
  },
  faq: [
    { question: "How much do training videos cost?", answer: "Starting from ₹25,000 per module. Pricing depends on complexity, duration, and production requirements." },
    { question: "Can you film at our workplace?", answer: "Yes, we do on-location shoots at offices, factories, and warehouses across India." },
    { question: "Do you create interactive training modules?", answer: "Yes, we build interactive video modules with quizzes, branching scenarios, and assessments." },
    { question: "Can you update existing training content?", answer: "Absolutely. We can refresh, re-edit, or completely remake your existing training materials." },
    { question: "What about multi-language support?", answer: "We produce training videos in English, Hindi, Kannada, and 15+ other languages." },
    { question: "Is the content LMS compatible?", answer: "Yes, all content is SCORM compliant and works with any major LMS platform." },
    { question: "How long does production take?", answer: "Typically 2-4 weeks per module from brief to delivery." },
    { question: "Can you handle a full training series?", answer: "Yes, we manage complete training video libraries from planning to deployment." },
  ],
  finalCTA: {
    headline: "Ready to Transform Your Training Program?",
    description: "Get a free consultation and discover how video-based training can save time and improve results.",
    buttonText: "Get Free Consultation",
  },
};

const TrainingVideo = () => <ServicePageTemplate config={config} />;
export default TrainingVideo;
