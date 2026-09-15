import { Link } from "react-router-dom";
import { ArrowRight, Play, Search, Sparkles, TrendingUp, Users, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import aadhyaWork from "@/assets/portfolio/aadhya-animatics.png";
import academyWork from "@/assets/portfolio/digital-academy-360.png";
import interiorsWork from "@/assets/portfolio/interiors-and-more.png";
import suranaProof from "@/assets/seo-reports/surana-report.png";
import seoImage from "@/assets/services/seo-services.jpg";
import leadImage from "@/assets/services/lead-generation.jpg";
import socialImage from "@/assets/services/social-media.jpg";
import webImage from "@/assets/services/web-design.jpg";

const heroImages = [
  { src: aadhyaWork, alt: "Aadhya Animatics brand and website project by Super 30" },
  { src: academyWork, alt: "Digital Academy 360 education growth campaign" },
  { src: interiorsWork, alt: "Interiors & More premium web presence" },
  { src: suranaProof, alt: "Surana Educational Institutions SEO performance report" },
  { src: seoImage, alt: "AI SEO service results" },
  { src: leadImage, alt: "Lead generation campaigns" },
  { src: socialImage, alt: "Social media marketing creative" },
  { src: webImage, alt: "Web design and development work" },
];

const servicePills = [
  { label: "AI SEO", href: "/seo-company-bangalore", icon: Target },
  { label: "Lead Generation", href: "/lead-generation-agency-bangalore", icon: Users },
  { label: "Social & Creative", href: "/social-media-marketing-agency-bangalore", icon: Award },
  { label: "Web Design", href: "/web-design-company-bangalore", icon: TrendingUp },
];

const metrics = [
  { value: "300%+", label: "Average traffic growth" },
  { value: "60+", label: "AI audits delivered" },
  { value: "$2M+", label: "Revenue generated" },
  { value: "4.8/5", label: "Client rating" },
];

export const HomeHero = () => (
  <section id="home-hero" className="home-hero-v2">
    <div className="container mx-auto px-4">
      <div className="home-hero-v2__copy">
        <div className="home-hero-v2__badge">
          <Sparkles aria-hidden="true" /> AI strategy. Human creativity. Real growth.
        </div>
        <h1>
          The AI Digital Marketing Agency{" "}
          <span>built for revenue growth.</span>
        </h1>
        <p>
          One growth partner connecting AI SEO, performance marketing, creative and conversion-led web experiences for businesses ready to scale.
        </p>
        <div className="home-hero-v2__actions">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contact-us">
              <Search /> Get a Free Strategy Call <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/our-work">
              <Play /> See our work
            </Link>
          </Button>
        </div>
      </div>

      <div className="home-hero-v2__gallery" aria-label="Selected client work and results">
        <div className="home-hero-v2__gallery-track">
          {heroImages.map((img, i) => (
            <div className="home-hero-v2__gallery-item" key={i}>
              <img src={img.src} alt={img.alt} loading={i > 2 ? "lazy" : "eager"} />
            </div>
          ))}
        </div>
      </div>

      <nav className="home-hero-v2__services" aria-label="Core services">
        {servicePills.map((service) => (
          <Link to={service.href} key={service.label} className="home-hero-v2__service-card">
            <service.icon aria-hidden="true" />
            <span>{service.label}</span>
            <ArrowRight aria-hidden="true" />
          </Link>
        ))}
      </nav>

      <div className="home-hero-v2__metrics" aria-label="Performance highlights">
        {metrics.map((m) => (
          <div key={m.label}>
            <strong>{m.value}</strong>
            <span>{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
