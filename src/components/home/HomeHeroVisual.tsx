import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import aadhyaWork from "@/assets/portfolio/aadhya-animatics.png";
import academyWork from "@/assets/portfolio/digital-academy-360.png";
import suranaProof from "@/assets/seo-reports/surana-report.png";

export const HomeHeroVisual = () => (
  <div className="home-hero-visual" aria-label="Selected Super 30 client work">
    <Link to="/our-work" className="home-hero-featured-work">
      <img src={aadhyaWork} alt="Aadhya Animatics digital experience by Super 30" />
      <div><span>Featured digital experience</span><strong>Aadhya Animatics</strong></div>
    </Link>
    <div className="home-hero-proof-rail">
      <Link to="/our-work"><img src={suranaProof} alt="SEO performance report for Surana Educational Institutions" /><span><small>SEO performance</small>Documented client work</span></Link>
      <Link to="/our-work"><img src={academyWork} alt="Digital Academy 360 growth project by Super 30" /><span><small>Education growth</small>Digital Academy 360</span></Link>
      <Link to="/our-work" className="home-hero-work-link">View all work <ArrowUpRight aria-hidden="true" /></Link>
    </div>
  </div>
);