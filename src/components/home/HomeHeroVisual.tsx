import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import aadhyaWork from "@/assets/portfolio/aadhya-animatics.png";
import academyWork from "@/assets/portfolio/digital-academy-360.png";
import suranaProof from "@/assets/seo-reports/surana-report.png";

export const HomeHeroVisual = () => (
  <div className="home-hero-visual" aria-label="Selected Super 30 client work">
    <Link to="/our-work" className="home-hero-frame home-hero-frame-main">
      <img src={aadhyaWork} alt="Aadhya Animatics digital experience by Super 30" />
      <span><small>Brand experience</small>Aadhya Animatics</span>
    </Link>
    <Link to="/our-work" className="home-hero-frame home-hero-frame-report">
      <img src={suranaProof} alt="SEO performance report for Surana Educational Institutions" />
      <span><small>Search performance</small>Documented SEO work</span>
    </Link>
    <Link to="/our-work" className="home-hero-frame home-hero-frame-academy">
      <img src={academyWork} alt="Digital Academy 360 growth project by Super 30" />
      <span><small>Education growth</small>Digital Academy 360</span>
    </Link>
    <Link to="/our-work" className="home-hero-work-link">Explore selected work <ArrowUpRight aria-hidden="true" /></Link>
  </div>
);