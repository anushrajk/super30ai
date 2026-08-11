import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { MousePointerClick, Layout, Smartphone, Users, Zap, Eye, Layers, Figma, Target, BarChart3, Shield, Bot, Palette, Heart, RefreshCw, Clock } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "UI UX Design Agency in Bangalore | Best UX Design Company",
    description: "UI UX design company in Bangalore focused on creating experiences users love. We design simple and user friendly apps and websites that convert. Let’s build!",
    keywords: "ui ux design agency in bangalore, ui ux design company in bangalore, ui ux design services in bangalore, ui ux company in bangalore, ui ux agency in bangalore",
    canonical: "https://www.thesuper30.ai/ui-ux-design-agency-bangalore",
    serviceType: "UI/UX Design Services",
    ogTitle: "Bad UX Is Quietly Costing You Customers Every Single Day.",
    ogDescription: "User-first UI UX design that keeps visitors engaged and turns them into loyal customers. Let's talk!",
    twitterTitle: "Bad UX Is Quietly Costing You Customers Every Single Day.",
    twitterDescription: "User-first UI UX design that keeps visitors engaged and turns them into loyal customers. Let's talk!",
  },
  hero: {
    badgeIcon: MousePointerClick,
    badgeText: "UI/UX Design Company in Bangalore",
    headlineLine1: "UI/UX Design agency in Bangalore",
    headlineLine2: "for the best User Experience Sites",
    description: <>A lack of user experience can lead to a drop in engagement and conversions. We are a trusted <span className="text-foreground font-semibold">UI/UX agency in Bangalore</span> that designs websites and applications that are user friendly, retain users, and drive business growth.</>,
    trustSignals: [
      { icon: Users, text: "Human Focused Design Strategy" },
      { icon: BarChart3, text: "Average 40% Conversion Improvement" },
      { icon: Figma, text: "Pixel Perfect Figma Deliverables" },
      { icon: Smartphone, text: "Mobile Optimized Responsive Design" },
    ],
    credentials: ["UI UX Design Services in Bangalore", "Figma & Prototyping", "User Research Driven"],
    formTitle: "Get a Free UI UX Audit",
    formDescription: "Share your product and our UI UX design agency in Bangalore will identify quick UX wins to boost engagement and conversions.",
    formButtonText: "Start Your Project",
  },
  source: "ui_ux_design",
  sections: {
    problems: {
      title: <>The UI/UX Challenges Most Businesses <span className="text-brand">Face</span></>,
      description: "Hundreds of businesses recognize the impact of bad user experience sites and it is often a silent killer that impacts engagement, conversions, and retention numbers for your business.",
    },
    services: {
      title: <>UI/UX Design Services in Bangalore <span className="text-brand">That Drive Results</span></>,
      description: "Whether it's a research led UX strategy or scalable interface systems, every design solution from our UI UX company in Bangalore is designed to enhance usability, engagement, and conversions.",
    },
    comparison: { title: <>Traditional Agency <span className="text-brand">vs. The Super 30</span></> },
    benefits: {
      eyebrow: "Why Brands Choose Us?",
      title: <>UI/UX Design Agency in Bangalore <span className="text-brand">That Improves User Experience</span></>,
      description: "Strategic solutions from a UI UX Company Bangalore to deliver value that enhances engagement, usability, and helps businesses make measurable improvements in their digital interactions.",
    },
    industries: {
      eyebrow: "Industry Expertise",
      title: <>UI/UX Design Strategies for <span className="text-brand">Every Industry</span></>,
      description: "Industry focused UI/UX strategies crafted across 18+ sectors with experiences crafted to audience behaviour and business goals.",
    },
    whoIsThisFor: { title: <>Is This the <span className="text-brand">Right Fit for Your Business?</span></> },
  },
  problems: [
    { icon: Eye, title: "High Visitor Drop Off", description: "Users leave your website quickly because the experience feels unclear, cluttered, or difficult to navigate." },
    { icon: MousePointerClick, title: "Weak Conversion Performance", description: "Visitors browse your website but fail to enquire, purchase, or take action because the interface lacks direction." },
    { icon: Smartphone, title: "Terrible Mobile User Experience", description: "Most traffic now comes from mobile devices, yet many interfaces still feel broken on smaller screens." },
    { icon: RefreshCw, title: "Design Revisions", description: "Projects keep getting redesigned without clear user insights or research driven decision making behind the process." },
  ],
  services: [
    { icon: Users, title: "UX Research", description: "Customer interviews, surveys, and behaviour insights are used to understand user expectations and friction areas across digital experiences." },
    { icon: Layout, title: "Wireframing", description: "Strategic wireframes designed to structure user journeys, content flow, and seamless information architecture for better usability." },
    { icon: Figma, title: "UI/UX Design", description: "Precision focused interface designs created in Figma using scalable systems, modern layouts, and structured visual consistency." },
    { icon: Layers, title: "Prototyping", description: "Interactive prototypes are developed for user validation, product testing, and smoother development before production level implementation begins." },
    { icon: Smartphone, title: "Responsive Design", description: "Digital interfaces are designed to perform seamlessly across desktop, tablet, and mobile devices without compromising the visual experience." },
    { icon: Palette, title: "Design Systems", description: "Scalable component systems and structured style guidelines developed to ensure long-term product consistency and operational efficiency." },
    { icon: Target, title: "Conversion Optimization", description: "Strategic CTA positioning, visual hierarchy, and interactive design elements focused on improving engagement and conversion performance." },
    { icon: Bot, title: "AI Product Design", description: "Intelligent interface experiences crafted for AI powered platforms, automation tools, and conversational product ecosystems." },
  ],
  comparison: {
    traditional: [
      "Design decisions based on assumptions, not real user insights.",
      "Static layouts without interactive testing or usability validation.",
      "No proper user testing before development begins.",
      "Generic templates used across every business and industry.",
      "Unclear handoffs create confusion during development execution.",
      "Design is treated as support work, not a business strategy.",
    ],
    super30: [
      "Every design decision is backed by user research and data.",
      "Interactive Figma prototypes built for practical product testing.",
      "User testing is included at every important project stage.",
      "Custom interfaces tailored to your audience and brand goals.",
      "Developer ready handoffs with organized assets and specifications.",
      "Design is treated as a foundation for growth and engagement.",
    ],
  },
  benefits: [
    { icon: BarChart3, title: "Higher Conversions", description: "Strategic UX interfaces improve signups, inquiries, and purchases through clearer journeys and friction free user experiences." },
    { icon: Heart, title: "Users Love It", description: "Intuitive navigation and thoughtful interactions create seamless experiences that customers genuinely enjoy using every day." },
    { icon: Clock, title: "Faster Development", description: "Structured wireframes and organized systems help development teams deliver projects faster with fewer revisions." },
    { icon: Shield, title: "Reduced Support Costs", description: "Clearer user journeys help customers find information quickly, reducing confusion and unnecessary support related queries." },
    { icon: Zap, title: "Faster Time to Market", description: "Efficient design workflows accelerate product launches without compromising usability, interface quality, or customer experience standards." },
    { icon: Layers, title: "Scalable Design System", description: "Structured component libraries maintain visual consistency while supporting long-term product scalability and operational efficiency." },
    { icon: Users, title: "Research Driven", description: "Every design direction is supported through user insights, behavioural analysis, and validated customer experience research." },
    { icon: Eye, title: "Lower Bounce Rates", description: "Clear layouts and intuitive visual hierarchy encourage users to stay engaged and explore digital experiences longer." },
    { icon: Target, title: "Business Focused Results", description: "Design strategies aligned with revenue growth, retention goals, and measurable business performance across digital platforms." },
  ],
  process: [
    { icon: Users, title: "Discover & Research", description: "Understand your users, business goals, and competitive landscape through research." },
    { icon: Layout, title: "Wireframe & Prototype", description: "Map user flows, create wireframes, and build interactive prototypes." },
    { icon: Palette, title: "Visual Design", description: "Pixel-perfect UI design with brand-aligned aesthetics and design systems." },
    { icon: Zap, title: "Test & Handoff", description: "User testing, iteration, and developer-ready handoff with complete documentation." },
  ],
  whoIsThisFor: {
    forYou: [
      "You are building a new product and want strong UX from the start.",
      "Your website or app has high bounce rates and low conversion rates.",
      "You want design decisions guided by research and user behaviour insights.",
      "You need scalable interface systems for long-term product growth.",
      "You want a design that improves usability and business performance outcomes.",
    ],
    notForYou: [
      "You only need a basic template website without strategic UI/UX thinking.",
      "You expect complete designs delivered instantly without proper research or testing.",
      "You are unwilling to improve designs based on customer feedback insights.",
      "You think design is only about visuals, not user experience.",
    ],
  },
  faq: getFaqs("uiux-design"),
  finalCTA: {
    headline: "Transform Your Designs With Bangalore’s Leading UI/UX Design Company Today",
    description: "Bad user experience affects your business conversions and engagement without making noise. Get a free UI/UX audit and learn how custom UI/UX can boost digital performance and company growth.",
    buttonText: "Get Free UI/UX Audit",
  },
};

const UIUXDesign = () => <ServicePageTemplate config={config} />;
export default UIUXDesign;
