import { ServicePageTemplate, ServicePageConfig } from "@/components/service/ServicePageTemplate";
import { Camera, Image, Users, Target, TrendingUp, Zap, Shield, Eye, Clock, BarChart3, Layers, Aperture, Focus, ScanLine } from "lucide-react";

const config: ServicePageConfig = {
  seo: {
    title: "Photography Services in Bangalore | Corporate & Brand Shoots",
    description: "Make a strong first impression with our photography company in Bangalore. We handle corporate photography and brand shoots that tell your story. Let's Shoot!",
    keywords: "photography services bangalore, photography company bangalore, professional photography in bangalore, corporate photography in bangalore, business photography in bangalore, business photography management in bangalore",
    canonical: "https://www.thesuper30.ai/photography-services-bangalore",
    serviceType: "Photography Services",
    ogTitle: "Your Brand Deserves Photos That Tell a Story. Let's Shoot.",
    ogDescription: "Corporate photography and brand shoots that represent your business and leave a lasting impression!",
    twitterTitle: "Your Brand Deserves Photos That Tell a Story. Let's Shoot.",
    twitterDescription: "Corporate photography and brand shoots that represent your business and leave a lasting impression!",
  },
  hero: {
    badgeIcon: Camera,
    badgeText: "Photography Services in Bangalore",
    headlineLine1: "Photography Services",
    headlineLine2: "in Bangalore",
    description: <>Bangalore's trusted <span className="text-foreground font-semibold">professional photography company</span> — corporate photography, brand shoots and product photography that <span className="text-foreground font-semibold">capture your brand's essence and convert viewers into customers</span>.</>,
    trustSignals: [
      { icon: Camera, text: "10,000+ Photos Delivered" },
      { icon: Users, text: "300+ Brands Served" },
      { icon: Image, text: "Studio & On-Location" },
      { icon: Shield, text: "Same-Week Delivery" },
    ],
    credentials: ["Professional Equipment", "Experienced Photographers", "Pan-India Coverage"],
    formTitle: "Free Photography Quote in Bangalore",
    formDescription: "Tell us about your photography needs — Bangalore's trusted professional photography company will send a custom proposal.",
    formButtonText: "Get Free Photography Quote",
  },
  source: "photography",
  problems: [
    { icon: Eye, title: "Poor Quality Images Hurt Sales", description: "Low-quality photos make your products and brand look unprofessional, costing you customers." },
    { icon: Clock, title: "DIY Photos Look Amateur", description: "Phone photos with bad lighting and angles damage your brand credibility." },
    { icon: Target, title: "Inconsistent Visual Identity", description: "Random photos from different sources create a disjointed brand experience." },
    { icon: Image, title: "No Photos for Marketing", description: "You lack professional images for your website, social media, and ad campaigns." },
  ],
  services: [
    { icon: Users, title: "Corporate Photography", description: "Team photos, headshots, office interiors, and corporate event coverage." },
    { icon: ScanLine, title: "E-commerce Photography", description: "Product photos with white backgrounds, lifestyle shots, and 360° views." },
    { icon: Aperture, title: "Food Photography", description: "Appetizing food and beverage photography for restaurants and brands." },
    { icon: Focus, title: "Fashion Photography", description: "Lookbooks, catalog shoots, and model photography for fashion brands." },
    { icon: Layers, title: "Architectural Photography", description: "Interior design, real estate, and architectural photography." },
    { icon: Camera, title: "Event Photography", description: "Conferences, launches, seminars, and corporate event coverage." },
    { icon: Image, title: "Drone Photography", description: "Aerial photography for real estate, construction, and landscape projects." },
    { icon: Zap, title: "Product Photography", description: "High-quality product shots for catalogs, websites, and advertisements." },
  ],
  comparison: {
    traditional: ["Inconsistent quality across shoots", "No creative direction or mood boarding", "Long delivery timelines (2-3 weeks)", "Basic editing with no retouching", "Limited shots and rigid packages", "No understanding of brand requirements"],
    super30: ["Consistent, professional quality every time", "Creative direction with mood boards included", "Express delivery within 3-5 business days", "Professional retouching and color grading", "Generous shot counts with flexible packages", "Deep understanding of your brand aesthetic"],
  },
  benefits: [
    { icon: TrendingUp, title: "Boost Conversions", description: "Professional product photos can increase e-commerce conversions by up to 30%." },
    { icon: Shield, title: "Premium Equipment", description: "Full-frame cameras, professional lenses, studio lighting, and grip equipment." },
    { icon: Target, title: "Brand Aligned", description: "Every photo matches your brand guidelines, colors, and visual identity." },
    { icon: Zap, title: "Quick Turnaround", description: "Edited photos delivered within 3-5 business days after the shoot." },
    { icon: Users, title: "Expert Photographers", description: "Experienced professionals specializing in commercial and corporate photography." },
    { icon: BarChart3, title: "Multi-Platform Ready", description: "Photos optimized for web, print, social media, and advertising." },
    { icon: Camera, title: "Studio & On-Location", description: "Fully equipped studio or on-location shoots anywhere in India." },
    { icon: Layers, title: "Post-Production", description: "Professional retouching, color correction, and background removal included." },
    { icon: Clock, title: "Flexible Scheduling", description: "We work around your schedule — weekends and early mornings included." },
  ],
  process: [
    { icon: Target, title: "Brief & Planning", description: "Discuss requirements, create shot lists, and plan mood boards." },
    { icon: Camera, title: "Photo Shoot", description: "Professional shooting with expert lighting and composition." },
    { icon: Aperture, title: "Post-Production", description: "Retouching, color grading, and optimization for all platforms." },
    { icon: Image, title: "Delivery", description: "High-resolution files delivered via cloud with organized folders." },
  ],
  whoIsThisFor: {
    forYou: ["You need professional photos for your website or e-commerce store", "You're launching a new product or menu and need stunning visuals", "You want consistent brand photography across all channels", "You need corporate headshots or office photography", "You're planning an event that needs professional coverage"],
    notForYou: ["You just need casual phone photos for personal use", "You have no budget for professional photography", "You need photos delivered within 24 hours of the shoot", "You're looking for stock photos, not custom photography"],
  },
  faq: [
    { question: "How much does a photo shoot cost?", answer: "Pricing starts from ₹10,000 for product photography and ₹25,000 for corporate shoots. Contact us for a custom quote based on your needs." },
    { question: "How quickly will I get the edited photos?", answer: "Standard delivery is 3-5 business days. Express delivery (24-48 hours) is available for an additional fee." },
    { question: "Do you provide a studio?", answer: "Yes, we have a fully equipped professional studio. We also do on-location shoots at your office or any location." },
    { question: "How many photos will I receive?", answer: "This depends on the package. A typical product shoot delivers 20-50 edited images. Corporate shoots deliver 50-100+ images." },
    { question: "Do you handle styling and props?", answer: "For food and product shoots, we can arrange styling and props. Discuss your requirements during the brief." },
    { question: "Can you shoot across multiple locations?", answer: "Yes, we cover shoots across Bangalore and travel pan-India for projects." },
    { question: "What format are the photos delivered in?", answer: "High-resolution JPEG and PNG files, optimized for web and print. RAW files available on request." },
    { question: "Do you offer drone photography?", answer: "Yes, we have licensed drone operators for aerial photography of properties, events, and landscapes." },
  ],
  finalCTA: {
    headline: "Hire Bangalore's Top Professional Photography Company",
    description: "Get a free consultation and custom quote from our professional photography company in Bangalore for corporate, brand or product shoots.",
    buttonText: "Get Free Photography Quote",
  },
};

const Photography = () => <ServicePageTemplate config={config} />;
export default Photography;
