import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { GraduationCap, BookOpen, Users, Target, TrendingUp, Zap, Shield, Eye, Clock, BarChart3, Layers, Monitor, PlayCircle, CheckCircle } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "E-Learning Video Production in Bangalore | The Super 30",
    description: "Professional e-learning video production. Course videos, LMS content, educational animations & interactive training modules.",
    keywords: "e-learning video production bangalore, online course video, educational video, LMS content",
    canonical: "https://www.thesuper30.ai/e-learning-video",
    serviceType: "E-Learning Video Production",
  },
  hero: {
    badgeIcon: GraduationCap,
    badgeText: "E-Learning Video Experts",
    headlineLine1: "Create Engaging",
    headlineLine2: "E-Learning Content",
    description: <>Professional e-learning videos that <span className="text-foreground font-semibold">boost knowledge retention by 65% and keep learners engaged</span>.</>,
    trustSignals: [
      { icon: BookOpen, text: "200+ Courses Produced" },
      { icon: Users, text: "EdTech & Corporate Clients" },
      { icon: TrendingUp, text: "65% Better Retention" },
      { icon: Shield, text: "LMS Compatible" },
    ],
    credentials: ["EdTech Specialists", "SCORM Compliant", "Multi-Language Support"],
    formTitle: "Get a Free Quote",
    formDescription: "Tell us about your e-learning project and we'll provide a custom proposal.",
    formButtonText: "Get Free Quote",
  },
  source: "elearning_video",
  problems: [
    { icon: Eye, title: "Boring Course Content", description: "Text-heavy slides and monotone lectures lead to high dropout rates." },
    { icon: Clock, title: "Slow Content Production", description: "Creating quality e-learning content internally takes months." },
    { icon: Monitor, title: "Poor Production Quality", description: "DIY recordings with bad audio and visuals hurt your brand credibility." },
    { icon: Target, title: "Low Completion Rates", description: "Learners abandon courses because the content isn't engaging enough." },
  ],
  services: [
    { icon: GraduationCap, title: "Course Videos", description: "Structured lesson videos with animations, graphics, and presenter footage." },
    { icon: PlayCircle, title: "Animated Lessons", description: "2D/3D animated content that makes complex topics easy to understand." },
    { icon: Monitor, title: "Screen Recordings", description: "Software tutorials with professional voiceover and annotations." },
    { icon: BookOpen, title: "Interactive Modules", description: "Quiz-based and interactive video modules for better engagement." },
    { icon: Users, title: "Instructor-Led Videos", description: "Professional studio recording with teleprompter and green screen." },
    { icon: Layers, title: "Microlearning Videos", description: "Bite-sized 2-5 minute videos for mobile-first learning." },
    { icon: CheckCircle, title: "Assessment Videos", description: "Video-based assessments and scenario-based learning content." },
    { icon: BarChart3, title: "LMS Integration", description: "SCORM/xAPI compliant content ready for any learning management system." },
  ],
  comparison: {
    traditional: ["Static PowerPoint recordings", "No instructional design expertise", "One format fits all approach", "No interactive elements", "Poor audio and video quality", "No analytics or tracking"],
    super30: ["Dynamic multi-format video content", "Instructional design-driven approach", "Customized for your learning objectives", "Interactive quizzes and assessments", "Broadcast-quality production", "SCORM/xAPI analytics ready"],
  },
  benefits: [
    { icon: TrendingUp, title: "Higher Completion Rates", description: "Engaging video content keeps learners watching till the end." },
    { icon: GraduationCap, title: "Better Retention", description: "Visual learning improves knowledge retention by up to 65%." },
    { icon: Zap, title: "Scalable Content", description: "Create once, train thousands — scale your training effortlessly." },
    { icon: Shield, title: "LMS Ready", description: "SCORM and xAPI compliant content for seamless LMS integration." },
    { icon: Clock, title: "Fast Production", description: "From brief to delivery in 2-4 weeks per module." },
    { icon: Users, title: "Multi-Language", description: "Produce content in multiple languages for global teams." },
  ],
  process: [
    { icon: Target, title: "Needs Analysis", description: "Understand learning objectives, audience, and content requirements." },
    { icon: BookOpen, title: "Instructional Design", description: "Structure content with storyboards and learning flow design." },
    { icon: PlayCircle, title: "Production", description: "Record, animate, and produce high-quality video content." },
    { icon: CheckCircle, title: "Review & Deploy", description: "QA testing, revisions, and deployment to your LMS." },
  ],
  whoIsThisFor: {
    forYou: ["You're building an online course or training program", "You need to train employees at scale", "You want to improve learner engagement and completion", "You need LMS-compatible video content", "You're an EdTech company scaling content production"],
    notForYou: ["You just need a simple screen recording", "You have no content or curriculum planned", "You need videos in less than a week", "You're looking for free video editing only"],
  },
  faq: [
    { question: "How much does e-learning video production cost?", answer: "Pricing starts from ₹20,000 per module. Complex animated or interactive modules are priced higher." },
    { question: "Do you handle instructional design?", answer: "Yes, our instructional designers structure content for maximum learning effectiveness." },
    { question: "Can you produce content for Udemy/Coursera?", answer: "Yes, we produce platform-compliant content for all major course marketplaces." },
    { question: "What about SCORM compliance?", answer: "All our interactive modules are SCORM 1.2 and 2004 compliant for LMS integration." },
    { question: "Can you work with our existing content?", answer: "Absolutely. We can transform your existing slides, documents, or recordings into engaging video." },
    { question: "Do you provide voiceover?", answer: "Yes, professional voiceover in English, Hindi, and 15+ other languages." },
    { question: "How many revisions are included?", answer: "We include 2-3 revision rounds per module in our standard packages." },
    { question: "Can you produce a full course series?", answer: "Yes, we handle complete course production from single modules to 50+ lesson series." },
  ],
  finalCTA: {
    headline: "Ready to Transform Your Training Content?",
    description: "Get a free consultation and see how professional e-learning videos can improve your training outcomes.",
    buttonText: "Get Free Consultation",
  },
};

const ELearningVideo = () => <ServicePageTemplate config={config} />;
export default ELearningVideo;
