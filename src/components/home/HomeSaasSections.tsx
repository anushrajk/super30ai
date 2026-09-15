import { Link } from "react-router-dom";
import { ArrowRight, Check, Search, Target, Palette, MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import seoImage from "@/assets/services/seo-services.jpg";
import leadImage from "@/assets/services/lead-generation.jpg";
import socialImage from "@/assets/services/social-media.jpg";
import webImage from "@/assets/services/web-design.jpg";
import strategyImage from "@/assets/process/step-strategy.jpg";
import auditImage from "@/assets/process/step-audit.jpg";
import optimizeImage from "@/assets/process/step-optimize.jpg";
import launchImage from "@/assets/process/step-launch.jpg";
import aadhyaWork from "@/assets/portfolio/aadhya-animatics.png";
import academyWork from "@/assets/portfolio/digital-academy-360.png";
import interiorsWork from "@/assets/portfolio/interiors-and-more.png";
import suranaProof from "@/assets/seo-reports/surana-report.png";

const serviceStories = [
  { title: "Be found where your customers search", label: "AI SEO", description: "Build visibility across Google and AI search with technical SEO, content strategy, entity optimisation and local growth.", image: seoImage, href: "/seo-company-bangalore", icon: Search, features: ["AI search visibility", "Technical SEO", "Content and authority"] },
  { title: "Turn attention into qualified demand", label: "Lead Generation", description: "Create a measurable pipeline through Google, Meta, LinkedIn and conversion-focused landing experiences.", image: leadImage, href: "/lead-generation-agency-bangalore", icon: Target, features: ["Paid acquisition", "Landing page CRO", "Full-funnel reporting"] },
  { title: "Build a brand people remember", label: "Social & Creative", description: "Shape a consistent visual voice with social strategy, campaigns, design systems and short-form creative.", image: socialImage, href: "/social-media-marketing-agency-bangalore", icon: Palette, features: ["Social strategy", "Creative production", "Community growth"] },
  { title: "Create digital experiences that convert", label: "Web Design", description: "Bring strategy, content, UX and development together in fast websites built around meaningful business actions.", image: webImage, href: "/web-design-company-bangalore", icon: MonitorSmartphone, features: ["Conversion-led UX", "Responsive development", "Core Web Vitals"] },
];

const process = [
  { number: "01", title: "Audit the full journey", description: "We study your market, funnel, channels and conversion gaps before recommending a direction.", image: auditImage },
  { number: "02", title: "Build the growth system", description: "Strategy, messaging, creative and measurement are connected into one practical operating plan.", image: strategyImage },
  { number: "03", title: "Launch with precision", description: "Campaigns and experiences go live with clear ownership, clean tracking and focused priorities.", image: launchImage },
  { number: "04", title: "Optimise what matters", description: "We turn real performance signals into sharper creative, better conversion and sustainable growth.", image: optimizeImage },
];

const work = [
  { name: "Aadhya Animatics", discipline: "Brand, website and digital experience", image: aadhyaWork },
  { name: "Digital Academy 360", discipline: "Education growth and conversion design", image: academyWork },
  { name: "Interiors & More", discipline: "Premium brand and web presence", image: interiorsWork },
];

export const HomeSaasSections = () => (
  <>
    <section className="home-story-band home-band-white"><div className="container mx-auto px-4"><div className="home-story-grid">
      <div className="home-story-copy"><span className="home-kicker">One connected growth partner</span><h2>Marketing feels fragmented when every channel tells a different story.</h2><p>Super 30 brings strategy, AI SEO, paid acquisition, content, design and web experiences into one focused growth system. Your teams see one plan, one narrative and clearer business outcomes.</p><div className="home-story-points"><div><strong>Discover</strong><span>Understand demand and opportunity.</span></div><div><strong>Convert</strong><span>Turn the right attention into action.</span></div><div><strong>Scale</strong><span>Improve what drives profitable growth.</span></div></div></div>
      <div className="home-story-visual"><img src={strategyImage} alt="Digital marketing strategy dashboard with campaign data" loading="lazy" /><div className="home-story-proof"><span>Connected strategy</span><strong>Search + Paid + Creative + Web</strong></div></div>
    </div></div></section>

    <section id="home-services" className="home-services-band home-band-black"><div className="container mx-auto px-4">
      <div className="home-section-heading"><div><span className="home-kicker">Capabilities</span><h2>Every service has a role in the growth story.</h2></div><p>Choose a focused engagement or connect the complete customer journey with one multidisciplinary team.</p></div>
      <nav className="home-service-jump" aria-label="Explore our core services">{serviceStories.map((service, index) => <a href={`#home-service-${index + 1}`} key={service.label}><img src={service.image} alt="" /><span><small>{String(index + 1).padStart(2, "0")}</small>{service.label}</span><ArrowRight aria-hidden="true" /></a>)}</nav>
      <div className="home-service-list">{serviceStories.map((service, index) => <article className={`home-service-story ${index % 2 === 1 ? "home-service-story-reverse" : ""}`} key={service.title}>
        <Link to={service.href} id={`home-service-${index + 1}`} className="home-service-image"><img src={service.image} alt={`${service.label} service visual`} loading="lazy" /><span>{String(index + 1).padStart(2, "0")}</span><strong>{service.label}</strong></Link>
        <div className="home-service-copy"><div className="home-service-label"><service.icon aria-hidden="true" /> {service.label}</div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.features.map((feature) => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}</ul><Button asChild variant="outline" className="rounded-full"><Link to={service.href}>Explore {service.label}<ArrowRight /></Link></Button></div>
      </article>)}</div>
    </div></section>

    <section className="home-proof-band home-band-white"><div className="container mx-auto px-4">
      <div className="home-proof-heading"><span className="home-kicker home-kicker-dark">Selected work</span><h2>Strategy becomes credible when you can see the work.</h2><p>Explore digital experiences created across education, consumer brands and growing businesses.</p></div>
      <div className="home-work-grid">{work.map((project, index) => <Link to="/our-work" className={`home-work-card home-work-card-${index + 1}`} key={project.name}><img src={project.image} alt={`${project.name} project by Super 30`} loading="lazy" /><div><span>{project.discipline}</span><h3>{project.name}</h3></div></Link>)}</div>
      <div className="home-report-strip"><div><span>Documented SEO performance</span><h3>Real reports. Clear movement. No vague promises.</h3><Button asChild className="rounded-full"><Link to="/our-work">View client work<ArrowRight /></Link></Button></div><img src={suranaProof} alt="SEO performance report for Surana Educational Institutions" loading="lazy" /></div>
    </div></section>

    <section className="home-process-band home-band-black"><div className="container mx-auto px-4"><div className="home-section-heading"><div><span className="home-kicker">How we work</span><h2>A clear path from ambition to momentum.</h2></div><p>No disconnected tasks. Every stage builds the evidence and foundation needed for the next.</p></div><div className="home-process-grid">{process.map((step) => <article className="home-process-card" key={step.number}><img src={step.image} alt="" loading="lazy" /><div><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></div></article>)}</div></div></section>
  </>
);
