import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  Compass,
  GraduationCap,
  Hotel,
  Layers3,
  Search,
  ShoppingBag,
  Sparkles,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import aiSeoImage from "@/assets/services/ai-seo-laptop.webp";
import performanceImage from "@/assets/services/performance-laptop.png";
import socialImage from "@/assets/services/social-media-laptop.png";
import webImage from "@/assets/services/web-design-laptop.png";
import academyWork from "@/assets/portfolio/digital-academy-360.png";
import interiorsWork from "@/assets/portfolio/interiors-and-more.png";
import bookMyScansReport from "@/assets/seo-reports/bookmyscans-report.png";
import harvestReport from "@/assets/seo-reports/harvest-report.png";
import suranaReport from "@/assets/seo-reports/surana-report.png";
import reportingImage from "@/assets/process/step-reporting.jpg";

const journey = [
  { number: "01", title: "Get discovered", text: "Build relevance across Google and AI-led search.", icon: Search },
  { number: "02", title: "Earn attention", text: "Create campaigns and ideas people choose to notice.", icon: Sparkles },
  { number: "03", title: "Convert demand", text: "Guide qualified visitors towards meaningful action.", icon: Layers3 },
  { number: "04", title: "Improve with evidence", text: "Use real signals to sharpen every growth decision.", icon: BarChart3 },
];

const aiCapabilities = [
  { title: "Opportunity research", text: "Find search demand, audience intent and competitive gaps sooner." },
  { title: "Creative intelligence", text: "Turn performance signals into clearer briefs and stronger iterations." },
  { title: "Growth optimisation", text: "Connect channel data to the actions most likely to improve conversion." },
];

const industries = [
  { title: "Education", detail: "Schools, colleges, EdTech and learning brands", href: "/industries/education", image: academyWork, icon: GraduationCap },
  { title: "E-commerce", detail: "D2C, marketplaces and retail growth", href: "/industries/ecommerce", image: performanceImage, icon: ShoppingBag },
  { title: "Lifestyle", detail: "Beauty, wellness, fashion and premium brands", href: "/industries/lifestyle", image: interiorsWork, icon: Store },
  { title: "Hospitality", detail: "Hotels, restaurants, travel and venues", href: "/industries/hospitality", image: socialImage, icon: Hotel },
];

const reports = [
  { name: "Surana Educational Institutions", image: suranaReport },
  { name: "Harvest International School", image: harvestReport },
  { name: "BookMyScans", image: bookMyScansReport },
];

const principles = [
  { title: "One clear direction", text: "Strategy, media, content and design move around the same commercial priority." },
  { title: "Work you can inspect", text: "Plans, creative and reporting stay visible instead of disappearing behind vague activity." },
  { title: "Decisions grounded in evidence", text: "We use channel and conversion signals to decide what should change next." },
  { title: "A system built to improve", text: "Every launch creates learning that strengthens the next campaign, page or message." },
];

export const HomeExpansionSections = () => (
  <>
    <section className="home-journey-band">
      <div className="container mx-auto px-4">
        <div className="home-section-heading">
          <div><span className="home-kicker">The connected growth journey</span><h2>From first search to final decision, every moment has a job.</h2></div>
          <p>We connect the stages customers move through, so awareness is not separated from conversion and reporting is not separated from action.</p>
        </div>
        <div className="home-journey-grid">
          {journey.map((item) => <article key={item.number}>
            <div><span>{item.number}</span><item.icon aria-hidden="true" /></div>
            <h3>{item.title}</h3><p>{item.text}</p>
          </article>)}
        </div>
        <div className="home-journey-visuals">
          <figure><img src={aiSeoImage} alt="AI SEO search visibility workspace" loading="lazy" /><figcaption>Search visibility</figcaption></figure>
          <figure><img src={performanceImage} alt="Performance marketing campaign workspace" loading="lazy" /><figcaption>Demand generation</figcaption></figure>
          <figure><img src={webImage} alt="Conversion-focused website experience" loading="lazy" /><figcaption>Conversion experience</figcaption></figure>
        </div>
      </div>
    </section>

    <section className="home-ai-band">
      <div className="container mx-auto px-4"><div className="home-ai-shell">
        <div className="home-ai-visual">
          <img src={reportingImage} alt="Marketing reporting and optimisation workspace" loading="lazy" />
          <div><BrainCircuit aria-hidden="true" /><span>AI-assisted intelligence</span><strong>Human-led growth decisions</strong></div>
        </div>
        <div className="home-ai-copy">
          <span className="home-kicker home-kicker-dark">Smarter inputs. Better decisions.</span>
          <h2>AI helps us see more. Experience decides what matters.</h2>
          <p>We use AI to accelerate research, pattern-finding and optimisation—not to replace judgement, originality or accountability.</p>
          <div className="home-ai-capabilities">{aiCapabilities.map((item) => <div key={item.title}><Check aria-hidden="true" /><span><strong>{item.title}</strong>{item.text}</span></div>)}</div>
          <Button asChild className="rounded-full"><Link to="/digital-marketing-agency-bangalore">Explore our approach<ArrowRight /></Link></Button>
        </div>
      </div></div>
    </section>

    <section className="home-industries-band">
      <div className="container mx-auto px-4">
        <div className="home-section-heading">
          <div><span className="home-kicker">Built around your market</span><h2>Growth systems shaped for how your customers actually choose.</h2></div>
          <p>Different sectors have different buying cycles, trust signals and conversion barriers. Our approach starts with that reality.</p>
        </div>
        <div className="home-industries-grid">{industries.map((industry) => <Link to={industry.href} key={industry.title}>
          <div className="home-industry-image"><img src={industry.image} alt={`${industry.title} digital marketing work`} loading="lazy" /></div>
          <div className="home-industry-copy"><industry.icon aria-hidden="true" /><span><strong>{industry.title}</strong><small>{industry.detail}</small></span><ArrowRight aria-hidden="true" /></div>
        </Link>)}</div>
        <div className="home-industries-action"><Button asChild variant="outline" className="rounded-full"><Link to="/digital-marketing-for-coaching-institutes">Explore coaching institute marketing<ArrowRight /></Link></Button></div>
      </div>
    </section>

    <section className="home-evidence-band">
      <div className="container mx-auto px-4">
        <div className="home-evidence-heading"><span className="home-kicker home-kicker-dark">Evidence, not theatre</span><h2>Real search work, presented clearly.</h2><p>See a selection of existing client reports that make progress visible and keep the conversation focused on what changed.</p></div>
        <div className="home-evidence-grid">{reports.map((report, index) => <figure className={index === 0 ? "home-evidence-featured" : ""} key={report.name}>
          <div><img src={report.image} alt={`${report.name} SEO performance report`} loading="lazy" /></div>
          <figcaption><span>{String(index + 1).padStart(2, "0")}</span><strong>{report.name}</strong></figcaption>
        </figure>)}</div>
        <Button asChild className="rounded-full"><Link to="/our-work">Explore documented work<ArrowRight /></Link></Button>
      </div>
    </section>

    <section className="home-partnership-band">
      <div className="container mx-auto px-4"><div className="home-partnership-shell">
        <div className="home-partnership-intro"><Compass aria-hidden="true" /><span className="home-kicker">A better working relationship</span><h2>Clarity at every stage. Momentum without the noise.</h2><p>A strong agency partnership should make growth easier to understand, easier to act on and easier to improve.</p><Button asChild className="rounded-full"><Link to="/contact-us">Start a conversation<ArrowRight /></Link></Button></div>
        <div className="home-principles-grid">{principles.map((principle, index) => <article key={principle.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{principle.title}</h3><p>{principle.text}</p></article>)}</div>
      </div></div>
    </section>
  </>
);