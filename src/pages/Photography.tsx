import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { getFaqs } from "@/data/faqs";
import { Camera, Image, Users, Target, TrendingUp, Zap, Shield, Eye, Clock, BarChart3, Layers, Aperture, Focus, ScanLine } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Photography Services in Bangalore | Corporate & Brand Shoots",
    description: "Make a strong first impression with our photography company in Bangalore. We handle corporate photography and brand shoots that tell your story. Let's Shoot!",
    keywords: "photography services in bangalore, photography company in bangalore, professional photography in bangalore, corporate photography in bangalore, business photography in bangalore, business photography management in bangalore",
    canonical: "https://www.thesuper30.ai/photography-services-bangalore",
    serviceType: "Photography Services",
    ogTitle: "Your Brand Deserves Photos That Tell a Story. Let's Shoot.",
    ogDescription: "Corporate photography and brand shoots that represent your business and leave a lasting impression!",
    twitterTitle: "Your Brand Deserves Photos That Tell a Story. Let's Shoot.",
    twitterDescription: "Corporate photography and brand shoots that represent your business and leave a lasting impression!",
  },
  hero: {
    badgeIcon: Camera,
    badgeText: "Corporate Photography in Bangalore",
    headlineLine1: "Professional Corporate and Commercial",
    headlineLine2: "Photography Services in Bangalore",
    description: <>A trusted <span className="text-foreground font-semibold">commercial photography company in Bangalore</span> providing corporate and commercial photography, brand and product photography to a wide range of clients, <span className="text-foreground font-semibold">showcasing your brand identity that inspires customers to take action</span>.</>,
    trustSignals: [
      { icon: Camera, text: "10,000+ Photos Delivered" },
      { icon: Users, text: "300+ Brands Served" },
      { icon: Image, text: "Studio and Onsite Photography" },
      { icon: Shield, text: "Fast Turnaround Delivery" },
    ],
    credentials: ["Professional Equipment", "Experienced Photographers", "Pan-India Coverage"],
    formTitle: "Free Photography Quote in Bangalore",
    formDescription: "Tell us about your photography needs — Bangalore's trusted professional photography company will send a custom proposal.",
    formButtonText: "Enquire Now",
  },
  source: "photography",
  sections: {
    problems: {
      title: <>Professional Photography Challenges That Most Businesses <span className="text-brand">Face</span></>,
      description: "The importance of professional photography isn't always immediately noticeable until there are visual inconsistencies that impact brand perception, customer trust and marketing results in critical areas of the business.",
    },
    services: {
      title: <>Professional Photography in Bangalore for <span className="text-brand">Every Business Need</span></>,
      description: "Whether it's for corporate branding, e-commerce catalogues, events, or commercial campaigns, our photography services in Bangalore aim at delivering captivating images that leave a lasting impact and drive business growth.",
    },
    comparison: {
      eyebrow: "What Makes Us Different?",
      title: <>Traditional Photography Agencies vs <span className="text-brand">The Super 30</span></>,
      description: "Selecting the ideal photography company in Bangalore directly impacts your brand perception, content quality, and marketing outcomes. See how our approach delivers greater consistency, creative value, and business driven results.",
    },
    benefits: {
      eyebrow: "WHY BRANDS CHOOSE US?",
      title: <>How Our Professional Photography in Bangalore Creates <span className="text-brand">Brand Value</span></>,
      description: "Our professional business photography in Bangalore is not just about capturing pictures. It's about enhancing brand perception and improving marketing performance, that help the business grow throughout the customer touchpoints.",
    },
    industries: {
      eyebrow: "INDUSTRY EXPERTISE",
      title: <>Creative Photography Solutions for <span className="text-brand">Every Industry</span></>,
      description: "Industry specific photography strategies delivered across 18+ business sectors. We understand your audience, capture your brand story, and create visuals that support your business growth.",
    },
    whoIsThisFor: {
      title: <>Is Professional Photography the <span className="text-brand">Right Choice for Your Business?</span></>,
      description: "Professional photography in Bangalore delivers the greatest value for businesses that depend on strong visual presentation, brand credibility, and high quality marketing assets to attract and convert customers.",
    },
  },
  problems: [
    { icon: Eye, title: "Poor Quality Images Impact Conversions", description: "Unclear product images and inconsistent brand visuals reduce credibility and influence customer purchasing decisions that impact sales." },
    { icon: Clock, title: "Amateur Photography Damages Brand Trust", description: "Basic smartphone photography and poor composition can weaken your professional image quality and customer confidence." },
    { icon: Target, title: "Inconsistent Brand Presence", description: "Mixed visual styles across platforms create a disconnected brand experience that confuses potential customers." },
    { icon: Image, title: "Limited Marketing Content", description: "Without professional photography, businesses often lack quality assets and resources for websites, social media, and advertising campaigns." },
  ],
  services: [
    { icon: Users, title: "Corporate Photography", description: "Professional team portraits, executive headshots, workspace photography, and corporate event coverage." },
    { icon: ScanLine, title: "E-commerce Photography", description: "Product photography featuring clean backgrounds, lifestyle imagery, and 360-degree product views." },
    { icon: Aperture, title: "Food Photography", description: "Appetizing food and beverage photography created for restaurants, cafes, and consumer brands." },
    { icon: Focus, title: "Fashion Photography", description: "Lookbooks, catalogue photography, and model shoots designed for fashion and lifestyle brands." },
    { icon: Layers, title: "Architectural Photography", description: "Professional photography for interior spaces, real estate developments, and architectural projects." },
    { icon: Camera, title: "Event Photography", description: "Photography for conferences, product launches, seminars, corporate events, and more." },
    { icon: Image, title: "Drone Photography", description: "Aerial photography solutions for real estate, infrastructure, construction, and landscape projects." },
    { icon: Zap, title: "Product Photography", description: "Premium product photography created for catalogues, online stores, web based pages and advertising materials." },
  ],
  comparison: {
    traditional: ["Inconsistent output across shoots and projects", "No creative direction or mood boarding", "Extended delivery timelines for final assets", "Basic image editing with minimal enhancement", "Limited image counts and inflexible packages", "No understanding towards brand requirements"],
    super30: ["Consistent professional quality across every project", "Creative direction including mood boarding", "Fast delivery within 3-5 business working days", "Advanced retouching and professional colour correction", "Flexible photography packages with higher image volumes", "Deep understanding of brand positioning and aesthetics"],
  },
  benefits: [
    { icon: TrendingUp, title: "Increased Conversion Rates", description: "Good product photography can boost e-commerce conversion rates as much as 30% and boost customer confidence in their purchases." },
    { icon: Shield, title: "Premium Grade Equipments", description: "Advanced camera systems, premium lenses, studio lighting, and professional production equipment for every project." },
    { icon: Target, title: "Brand Consistent Visuals", description: "Every image is created to align with your brand guidelines, visual identity, and communication standards." },
    { icon: Zap, title: "Fast Project Delivery", description: "Professionally edited photography assets delivered within 3-5 working days to maintain timelines after every shoot." },
    { icon: Users, title: "Experienced Photography Team", description: "Skilled professionals with extensive expertise in commercial, corporate, and brand photography projects." },
    { icon: BarChart3, title: "Ready for Every Platform", description: "Photography assets optimized for websites, print materials, social media, and advertising campaigns." },
    { icon: Camera, title: "Studio and Onsite Shoots", description: "Professional photography services available in studio environments and business locations across India." },
    { icon: Layers, title: "Post Production Enhancement", description: "Professional retouching, colour refinement, and image optimization included with every project in the post-production process." },
    { icon: Clock, title: "Flexible Scheduling Options", description: "Photography sessions arranged to suit your business needs, such as early appointments and weekend schedules." },
  ],
  process: [
    { icon: Target, title: "Brief & Planning", description: "Discuss requirements, create shot lists, and plan mood boards." },
    { icon: Camera, title: "Photo Shoot", description: "Professional shooting with expert lighting and composition." },
    { icon: Aperture, title: "Post-Production", description: "Retouching, color grading, and optimization for all platforms." },
    { icon: Image, title: "Delivery", description: "High-resolution files delivered via cloud with organized folders." },
  ],
  whoIsThisFor: {
    forYou: ["You need professional photography for your website or e-commerce store", "You're launching a new product, menu, or brand campaign", "You want consistent brand photography across every channel", "You need executive headshots or corporate photography services", "You're planning an event that requires professional coverage"],
    notForYou: ["You only need casual mobile photography for personal use", "You have no budget allocated for professional photography services", "You require photos delivered within 24 hours of the shoot", "You're looking for stock images instead of custom photography solutions"],
  },
  faq: getFaqs("photography"),
  finalCTA: {
    headline: "Elevate Your Brand With Professional Photography That Drives Actual Results",
    description: "Book a free consultation with our photography company in Bangalore and discover custom visual solutions designed to strengthen brand credibility, improve audience engagement, and support long-term business growth.",
    buttonText: "Get Free Photography Consultation",
  },
};

const Photography = () => <ServicePageTemplate config={config} />;
export default Photography;
