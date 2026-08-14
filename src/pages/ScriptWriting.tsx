import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
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
    badgeText: "Ad Script Writing in Bangalore",
    headlineLine1: "Script Writing Agency",
    headlineLine2: "in Bangalore for High Converting Campaigns",
    description: <>Professional <span className="text-foreground font-semibold">script writing services in Bangalore</span> for short-form ads, branded videos, and explainer content crafted to capture attention instantly and convert viewers into customers.</>,
    trustSignals: [
      { icon: Play, text: "1000+ Scripts Delivered" },
      { icon: Target, text: "Conversion Driven Storytelling" },
      { icon: Film, text: "Scripts for Ads and Documentaries" },
      { icon: Shield, text: "Industry Specific Expertise" },
    ],
    credentials: ["1,000+ Scripts Written", "Multiple Formats", "Conversion-Driven"],
    formTitle: "Free Ad Script Writing Consultation in Bangalore",
    formDescription: "Tell us about your video project — our ad script writing agency in Bangalore will outline a script approach built to convert.",
    formButtonText: "Enquire Now",
  },
  source: "script_writing",
  sections: {
    problems: {
      title: "Content Challenges Brands Commonly Face",
      description: "Without strategic storytelling and structured messaging, most video content struggles to hold attention, communicate value, or generate meaningful conversions.",
    },
    services: {
      title: "Script Writing Services in Bangalore for Every Content Format",
      description: "Strategic scripts crafted for advertisements, branded storytelling, video marketing, and audience engagement across digital and media platforms.",
    },
    comparison: {
      eyebrow: "What Makes Us Different?",
      title: "Traditional Agency vs. The Super 30",
      description: "Performance focused scripts crafted to hold attention, strengthen brand messaging, and improve audience response across every platform.",
    },
    benefits: {
      eyebrow: "Why Brands Choose Us?",
      title: "Script Writing Agency in Bangalore for High Impact Brand Communication",
      description: "Strategic scriptwriting is built to improve viewer retention, strengthen brand communication, and deliver measurable business impact across digital platforms.",
    },
    industries: {
      eyebrow: "Industry Expertise",
      title: "Marketing Strategies for Every Industry",
      description: "Industry focused marketing solutions developed across 18+ sectors. We understand your audience, business goals, and market communication style.",
    },
    whoIsThisFor: {
      title: "Is This The Right Fit For Your Business?",
      description: "Professional scriptwriting services in Bangalore are designed for businesses focused on audience engagement, brand storytelling, and higher content conversions.",
    },
  },
  problems: [
    { icon: Eye, title: "Videos Nobody Watches", description: "Your videos are published, but viewers lose interest within first 5 seconds because the scripting lacks engagement." },
    { icon: MessageSquare, title: "Can’t Articulate Your Message", description: "You understand your offering, but translating it into a persuasive and structured narrative feels difficult." },
    { icon: Clock, title: "Scripts Take Too Long", description: "Creating scripts internally often becomes time consuming without a clear creative direction or framework." },
    { icon: Target, title: "No Clear Call to Action", description: "Your videos may attract attention, but they fail to generate enquiries, clicks, or customer retention." },
  ],
  services: [
    { icon: Megaphone, title: "Ad Scripts", description: "High impact 20-60 second scripts created for social campaigns and video advertisements that drive action." },
    { icon: Play, title: "Explainer Videos", description: "Clear, engaging scripts that effectively simplify complex products, services, and customer journeys." },
    { icon: Film, title: "Corporate Videos", description: "Professional brand focused scripts for company films, business presentations, brand films, and culture driven storytelling." },
    { icon: Mic, title: "Podcast Scripts", description: "Structured podcast frameworks including introductions, transitions, discussion flow, and audience engagement prompts." },
    { icon: Sparkles, title: "Social Media Reels", description: "Attention driven scripts written specifically for Instagram Reels, YouTube Shorts, and short-form video platforms." },
    { icon: Users, title: "Testimonial Scripts", description: "Guided interview structures designed to capture authentic customer experiences and persuasive brand stories." },
    { icon: FileText, title: "Presentation Scripts", description: "Professional narratives and speaking frameworks created for webinars, business pitches, and keynote sessions." },
    { icon: Award, title: "Brand Storytelling", description: "Emotion driven storytelling scripts that communicate your brand purpose, identity, and long-term vision." },
  ],
  comparison: {
    traditional: [
      "Generic scripts written without clear brand positioning",
      "Limited understanding of viewer retention and pacing",
      "Product focused messaging instead of audience value",
      "Single draft with minimal creative flexibility",
      "Writers without advertising or campaign experience",
      "Weak opening hooks that reduce viewer engagement",
    ],
    super30: [
      "Custom scripts written for your brand voice and audience",
      "Written with shot-by-shot direction and timing notes",
      "Conversion driven storytelling with strategic CTAs",
      "Collaborative revisions refined for stronger performance",
      "Creative writers with strong creative + marketing experience",
      "Attention driven opening hooks designed for higher retention",
    ],
  },
  benefits: [
    { icon: Eye, title: "Higher Watch Time", description: "Opening hook driven scripts designed to sustain viewers’ attention from beginning to end." },
    { icon: Target, title: "Better Conversions", description: "Strategic CTAs are integrated naturally to improve engagement and business response." },
    { icon: Zap, title: "Fast Turnaround", description: "Efficient delivery timelines that support campaigns, launches, and content production schedules." },
    { icon: Film, title: "Production Ready", description: "Structured scripts with scene guidance, timing flow, and visual direction for filming." },
    { icon: Users, title: "Audience Specific", description: "Every script is crafted around audience behaviour, intent, and emotional connection points." },
    { icon: Shield, title: "Brand Consistency", description: "Clear brand messaging is maintained across ads, reels, explainers, and corporate videos." },
    { icon: Sparkles, title: "Creative Excellence", description: "Fresh storytelling concepts developed to keep every campaign distinctive and memorable." },
    { icon: BarChart3, title: "Performance Driven", description: "Script frameworks refined through audience insights, campaign trends, and engagement data." },
    { icon: Award, title: "Industry Experienced Writers", description: "Professional scriptwriters with expertise in advertising, branded content, and digital storytelling." },
  ],
  process: [
    { icon: Users, title: "Creative Brief", description: "Understand your goals, audience, tone, key messages, and video format." },
    { icon: PenTool, title: "Script Draft", description: "First draft with hook, narrative arc, visuals, and CTA strategy." },
    { icon: Eye, title: "Review & Refine", description: "Your feedback incorporated with unlimited revisions on structure and copy." },
    { icon: Film, title: "Final Delivery", description: "Production-ready script with timing, shot notes, and voiceover guide." },
  ],
  whoIsThisFor: {
    forYou: [
      "Your videos are receiving low engagement and weak conversion results",
      "You need professional guidance to structure compelling video scripts",
      "You want persuasive ad scripts focused on business growth",
      "You require consistent content scripts for YouTube and social platforms",
      "You value meaningful storytelling that creates a stronger audience connection",
    ],
    notForYou: [
      "You plan to ignore the script structure during content production",
      "You want duplicated concepts copied from competitor video campaigns",
      "You do not have a defined goal or direction for your video content",
      "You expect scripts delivered within 2 hours at minimal pricing",
    ],
  },
  faq: getFaqs("script-writing"),
  finalCTA: {
    headline: "Partner With Bangalore's Leading Script Writing Company For High Conversions",
    description: "Get a strategic consultation from our script writing agency in Bangalore and plan compelling video campaigns designed for stronger audience engagement and conversions.",
    buttonText: "Get Free Script Consultation",
  },
};

const ScriptWriting = () => <ServicePageTemplate config={config} />;
export default ScriptWriting;
