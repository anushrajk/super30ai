import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Search, BarChart3 } from "lucide-react";
import bookMyScansReport from "@/assets/seo-reports/bookmyscans-report.png";
import suranaReport from "@/assets/seo-reports/surana-report.png";
import harvestReport from "@/assets/seo-reports/harvest-report.png";
import bookMyScansLogo from "@/assets/case-studies/book-my-scans.png";
import suranaLogo from "@/assets/case-studies/surana-educational.png";
import harvestLogo from "@/assets/case-studies/harvest-international.png";
import magicbricksLogo from "@/assets/case-studies/magicbricks.png";
import mamaEarthLogo from "@/assets/case-studies/mamaearth.png";
import upgradLogo from "@/assets/case-studies/upgrad.png";
import tata1mgLogo from "@/assets/case-studies/tata1mg.png";
import jainUniversityLogo from "@/assets/case-studies/jain-university.png";
import atriaInstituteLogo from "@/assets/case-studies/atria-institute.png";
import bhrighuAcademyLogo from "@/assets/case-studies/bhrighu-academy.png";

const reports = [
  {
    name: "Book My Scans",
    industry: "Healthcare",
    logo: bookMyScansLogo,
    image: bookMyScansReport,
    slug: "book-my-scans",
    metrics: [
      { label: "Organic Traffic", value: "+320%" },
      { label: "Keywords", value: "1,200+" },
      { label: "Domain Authority", value: "+18" },
    ],
  },
  {
    name: "Surana Educational Institutions",
    industry: "Education",
    logo: suranaLogo,
    image: suranaReport,
    slug: "surana-educational",
    metrics: [
      { label: "Organic Traffic", value: "+195%" },
      { label: "Keywords", value: "850+" },
      { label: "Lead Growth", value: "+140%" },
    ],
  },
  {
    name: "Harvest International School",
    industry: "Education",
    logo: harvestLogo,
    image: harvestReport,
    slug: "harvest-international",
    metrics: [
      { label: "Organic Traffic", value: "+30%" },
      { label: "Keywords", value: "420+" },
      { label: "Visibility", value: "+65%" },
    ],
  },
];

const wins = [
  { name: "Magicbricks", logo: magicbricksLogo, industry: "Real Estate", value: "+180%", label: "Organic Traffic", slug: "magicbricks" },
  { name: "Mamaearth", logo: mamaEarthLogo, industry: "D2C", value: "+210%", label: "Organic Traffic", slug: "mamaearth" },
  { name: "upGrad", logo: upgradLogo, industry: "EdTech", value: "3,200+", label: "Keywords Ranked", slug: "upgrad" },
  { name: "Tata 1mg", logo: tata1mgLogo, industry: "Healthcare", value: "+275%", label: "Organic Traffic", slug: "tata-1mg" },
  { name: "Jain University", logo: jainUniversityLogo, industry: "Education", value: "+125%", label: "Lead Growth", slug: "jain-university" },
  { name: "Atria Institute", logo: atriaInstituteLogo, industry: "Education", value: "+95%", label: "Search Visibility", slug: "atria-institute" },
  { name: "Bhrighu Academy", logo: bhrighuAcademyLogo, industry: "Education", value: "+230%", label: "Organic Traffic", slug: "bhrighu-academy" },
];

const highlights = [
  { icon: TrendingUp, value: "300%+", label: "Avg. Traffic Growth" },
  { icon: Search, value: "500+", label: "Keywords Ranked #1" },
  { icon: BarChart3, value: "60+", label: "Audits Delivered" },
];

export const SEOProofSection = () => (
  <section className="py-16 md:py-24 bg-muted/30 border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand mb-3">Proof Of SEO Work</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Real Rankings. Real Traffic. Real Revenue.
        </h2>
        <p className="text-lg text-muted-foreground">
          Live search performance reports from brands we have scaled with AI-led SEO in Bangalore and beyond.
        </p>
      </div>

      {/* Highlight strip */}
      <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto mb-12">
        {highlights.map((h) => (
          <div key={h.label} className="rounded-2xl border border-border/60 bg-background p-4 md:p-6 text-center">
            <h.icon className="w-5 h-5 text-brand mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-foreground">{h.value}</div>
            <p className="text-[11px] md:text-xs text-muted-foreground mt-1">{h.label}</p>
          </div>
        ))}
      </div>

      {/* Report cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {reports.map((r) => (
          <Link
            key={r.slug}
            to={`/report/${r.slug}`}
            className="group rounded-2xl border border-border/50 bg-background overflow-hidden hover:border-brand/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="relative bg-muted/40 border-b border-border/40 overflow-hidden">
              <img
                src={r.image}
                alt={`${r.name} SEO performance report`}
                loading="lazy"
                className="w-full h-48 object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-background/90 border border-border/60 text-foreground">
                {r.industry}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <img src={r.logo} alt={r.name} className="w-9 h-9 rounded-lg object-contain bg-muted p-1" loading="lazy" />
                <h3 className="font-bold text-sm text-foreground leading-tight">{r.name}</h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {r.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl bg-muted/50 py-2.5 px-1 text-center">
                    <div className="text-base font-bold text-brand">{m.value}</div>
                    <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                View full report
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Compact wins grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {wins.map((w) => (
          <Link
            key={w.slug}
            to={`/report/${w.slug}`}
            className="group rounded-2xl border border-border/50 bg-background p-4 flex items-center gap-3 hover:border-brand/50 hover:shadow-md transition-all"
          >
            <img src={w.logo} alt={w.name} className="w-10 h-10 rounded-lg object-contain bg-muted p-1 shrink-0" loading="lazy" />
            <div className="min-w-0">
              <div className="text-lg font-bold text-brand leading-none">{w.value}</div>
              <p className="text-[11px] text-muted-foreground truncate">{w.label}</p>
              <p className="text-xs font-semibold text-foreground truncate mt-0.5">{w.name}</p>
            </div>
          </Link>
        ))}
        <Link
          to="/our-work"
          className="rounded-2xl border border-dashed border-brand/40 bg-brand/5 p-4 flex flex-col items-center justify-center text-center hover:bg-brand/10 transition-colors"
        >
          <span className="text-sm font-semibold text-brand">See all case studies</span>
          <ArrowRight className="w-4 h-4 text-brand mt-1" />
        </Link>
      </div>
    </div>
  </section>
);
