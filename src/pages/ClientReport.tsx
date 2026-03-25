import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState, useEffect, useRef } from "react";

import magicbricksLogo from "@/assets/case-studies/magicbricks.png";
import mamaEarthLogo from "@/assets/case-studies/mamaearth.png";
import upgradLogo from "@/assets/case-studies/upgrad.png";
import tata1mgLogo from "@/assets/case-studies/tata1mg.png";
import shriramLogo from "@/assets/case-studies/shriram-properties.png";
import jainUniversityLogo from "@/assets/case-studies/jain-university.png";
import atriaInstituteLogo from "@/assets/case-studies/atria-institute.png";
import bhrighuAcademyLogo from "@/assets/case-studies/bhrighu-academy.png";
import { Navbar } from "@/components/Navbar";

const clientData: Record<string, { name: string; industry: string; logo: string; domain: string }> = {
  magicbricks: { name: "Magicbricks", industry: "Real Estate", logo: magicbricksLogo, domain: "magicbricks.com" },
  "jain-university": { name: "Jain University", industry: "Education", logo: jainUniversityLogo, domain: "jainuniversity.ac.in" },
  mamaearth: { name: "Mamaearth", industry: "D2C", logo: mamaEarthLogo, domain: "mamaearth.in" },
  upgrad: { name: "upGrad", industry: "Education", logo: upgradLogo, domain: "upgrad.com" },
  "tata-1mg": { name: "Tata 1mg", industry: "Healthcare", logo: tata1mgLogo, domain: "1mg.com" },
  "atria-institute": { name: "Atria Institute", industry: "Education", logo: atriaInstituteLogo, domain: "atria.edu" },
  "bhrighu-academy": { name: "Bhrighu Academy", industry: "Education", logo: bhrighuAcademyLogo, domain: "bhrighuacademy.com" },
  "shriram-properties": { name: "Shriram Properties", industry: "Real Estate", logo: shriramLogo, domain: "shriramproperties.com" },
};

const navSections = [
  { id: "summary", label: "Executive Summary" },
  { id: "traffic", label: "Traffic & Performance" },
  { id: "keywords", label: "Keyword Rankings" },
  { id: "onpage", label: "On-Page SEO Audit" },
  { id: "technical", label: "Technical SEO" },
  { id: "backlinks", label: "Backlink Analysis" },
];

/* ── Reusable components ─────────────────────── */

const MetricCard = ({ label, value, delta, direction }: { label: string; value: string; delta: string; direction: "up" | "down" | "neutral" }) => (
  <div className="report-card p-5">
    <div className="text-[11px] font-mono text-report-muted tracking-[0.06em] uppercase mb-1.5">{label}</div>
    <div className="text-[32px] font-serif text-report-text leading-none">{value}</div>
    <div className={`inline-flex items-center gap-1 text-xs mt-2 px-2 py-0.5 rounded-full font-mono ${
      direction === "up" ? "bg-emerald-500/12 text-emerald-400" :
      direction === "down" ? "bg-red-500/12 text-red-400" :
      "bg-white/8 text-report-muted"
    }`}>{delta}</div>
  </div>
);

const ProgressRow = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="mb-3.5">
    <div className="flex justify-between text-[13px] mb-1">
      <span className="text-report-text">{label}</span>
      <span className="text-report-muted font-mono text-xs">{value}%</span>
    </div>
    <div className="h-1.5 bg-report-surface2 rounded-full overflow-hidden">
      <div className={`h-full rounded-full transition-all duration-1000 ${color}`} style={{ width: `${value}%` }} />
    </div>
  </div>
);

const AuditItem = ({ status, title, desc, badge }: { status: "pass" | "warn" | "fail"; title: string; desc: string; badge: string }) => (
  <div className="flex items-start gap-3.5 py-3.5 border-b border-report-border last:border-0">
    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 text-sm ${
      status === "pass" ? "bg-emerald-500/12 text-emerald-400" :
      status === "warn" ? "bg-yellow-500/12 text-yellow-400" :
      "bg-red-500/12 text-red-400"
    }`}>
      {status === "pass" ? "✓" : status === "warn" ? "!" : "✕"}
    </div>
    <div className="flex-1">
      <div className="text-sm font-medium text-report-text">{title}</div>
      <div className="text-xs text-report-muted mt-0.5">{desc}</div>
    </div>
    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full ${
      status === "pass" ? "bg-emerald-500/12 text-emerald-400" :
      status === "warn" ? "bg-yellow-500/12 text-yellow-400" :
      "bg-red-500/12 text-red-400"
    }`}>{badge}</span>
  </div>
);

const SectionHeader = ({ tag, title, sub }: { tag: string; title: string; sub: string }) => (
  <div className="mb-7">
    <div className="text-[11px] font-mono text-brand tracking-[0.12em] uppercase mb-1.5" style={{ color: "hsl(18,100%,48%)" }}>{tag}</div>
    <h2 className="text-[30px] font-serif text-report-text leading-tight">{title}</h2>
    <p className="text-sm text-report-muted mt-1.5">{sub}</p>
  </div>
);

const Divider = () => <hr className="border-0 border-t border-report-border my-14" />;

/* ── Main Page ───────────────────────────────── */

const ClientReport = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const client = slug ? clientData[slug] : null;
  const [activeSection, setActiveSection] = useState("summary");
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      const sections = document.querySelectorAll("[data-section]");
      let current = "summary";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 200) {
          current = (s as HTMLElement).dataset.section || current;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0d0f0e", color: "#e8ede9" }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Report Not Found</h1>
          <p className="text-report-muted mb-4">The requested report does not exist.</p>
          <button onClick={() => navigate("/seo-results-bangalore")} className="px-4 py-2 rounded-lg bg-brand text-white text-sm" style={{ background: "hsl(18,100%,48%)" }}>Back to Work</button>
        </div>
      </div>
    );
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Helmet>
        <title>{client.name} SEO Report | The Super 30</title>
        <meta name="description" content={`Detailed SEO performance report for ${client.name} by The Super 30.`} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen" style={{ background: "#0d0f0e", color: "#e8ede9", fontFamily: "'Instrument Sans', 'Inter', sans-serif" }}>

        {/* ── SIDEBAR ── */}
        <nav className="fixed left-0 top-0 w-[220px] h-screen border-r border-report-border flex-col gap-1.5 py-8 px-5 z-50 overflow-y-auto hidden md:flex" style={{ background: "#161918" }}>
          <div className="mb-5">
            <img src={s30Logo} alt="The Super 30" className="h-6 brightness-0 invert cursor-pointer" onClick={() => navigate("/")} />
            <div className="text-[11px] font-mono text-report-muted mt-2 tracking-[0.06em]">Q1 · 2026 · {client.name}</div>
          </div>

          {navSections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] text-left w-full transition-colors ${
                activeSection === s.id
                  ? "text-report-text" 
                  : "text-report-muted hover:text-report-text hover:bg-white/5"
              }`}
              style={activeSection === s.id ? { background: "#1e2220", color: "hsl(18,100%,48%)" } : {}}
            >
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${activeSection === s.id ? "opacity-100" : "opacity-40"}`} style={{ background: "currentColor" }} />
              {s.label}
            </button>
          ))}

          <div className="mt-auto text-[11px] font-mono text-report-muted pt-5 border-t border-report-border">
            Generated Mar 2026<br />Confidential
          </div>
        </nav>

        {/* ── Mobile Header ── */}
        <div className="md:hidden sticky top-0 z-50 border-b border-report-border px-4 py-3 flex items-center justify-between" style={{ background: "#161918" }}>
          <img src={s30Logo} alt="The Super 30" className="h-5 brightness-0 invert cursor-pointer" onClick={() => navigate("/")} />
          <button onClick={() => navigate("/seo-results-bangalore")} className="text-xs text-report-muted">← Back</button>
        </div>

        {/* ── MAIN CONTENT ── */}
        <main ref={mainRef} className="md:ml-[220px] px-5 md:px-12 py-10 md:py-12 max-w-[1100px]">

          {/* ── HERO ── */}
          <div className="report-card p-8 md:p-10 mb-14 relative overflow-hidden rounded-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsla(18,100%,48%,0.07) 0%, transparent 70%)" }} />
            <div className="text-[11px] font-mono text-report-muted tracking-[0.08em] mb-2.5">REPORT PERIOD — JAN 1 TO MAR 25, 2026</div>
            <div className="flex items-start gap-5 mb-2">
              <img src={client.logo} alt={client.name} className="h-12 w-auto object-contain flex-shrink-0 mt-1 brightness-0 invert opacity-80" />
            </div>
            <h1 className="text-4xl md:text-[38px] font-serif text-report-text leading-tight mb-2">
              SEO Work<br /><em style={{ color: "hsl(18,100%,48%)" }}>Conducted</em>
            </h1>
            <p className="text-sm text-report-muted max-w-xl mb-6">
              A full breakdown of search engine optimisation activity, performance metrics, and strategic recommendations for {client.name}.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { label: "Client", value: client.name },
                { label: "Domain", value: client.domain },
                { label: "Period", value: "Q1 2026" },
                { label: "Prepared by", value: "The Super 30" },
              ].map((item) => (
                <div key={item.label} className="text-xs font-mono text-report-muted">
                  <strong className="block text-base text-report-text font-sans font-semibold">{item.value}</strong>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* ── 01 EXECUTIVE SUMMARY ── */}
          <section data-section="summary" id="summary">
            <SectionHeader tag="01 — Executive Summary" title="Overview" sub="High-level results from this quarter's SEO campaign." />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-5">
              <MetricCard label="Organic Traffic" value="38.4K" delta="↑ 24% vs last quarter" direction="up" />
              <MetricCard label="Keywords Ranking" value="1,240" delta="↑ 310 new" direction="up" />
              <MetricCard label="Avg. Position" value="14.2" delta="↑ from 19.8" direction="up" />
              <MetricCard label="Domain Authority" value="47" delta="↑ from 42" direction="up" />
            </div>
            <div className="report-card p-5 md:p-6">
              <p className="text-sm text-report-muted leading-relaxed">
                This quarter delivered strong momentum across all key SEO indicators. Organic traffic grew by <strong className="text-report-text">24%</strong>, driven primarily by improved rankings for high-intent commercial keywords and a series of optimised blog posts targeting informational queries. Domain Authority climbed from 42 to 47, reflecting the success of our link-building outreach. The site now ranks in the <strong className="text-report-text">top 10</strong> for 186 keywords, up from 112 last quarter.
              </p>
            </div>
          </section>

          <Divider />

          {/* ── 02 TRAFFIC ── */}
          <section data-section="traffic" id="traffic">
            <SectionHeader tag="02 — Traffic & Performance" title="Traffic Overview" sub="Monthly organic sessions and click-through performance." />
            <div className="report-card p-5 md:p-6 mb-3.5">
              <div className="text-xs font-mono text-report-muted tracking-[0.06em] uppercase mb-3">Monthly Organic Sessions</div>
              <div className="flex items-end gap-1.5 h-[120px]">
                {[
                  { h: 55, label: "Oct", current: false },
                  { h: 60, label: "Nov", current: false },
                  { h: 58, label: "Dec", current: false },
                  { h: 70, label: "Jan", current: true },
                  { h: 82, label: "Feb", current: true },
                  { h: 100, label: "Mar", current: true },
                ].map((bar) => (
                  <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t"
                      style={{ height: `${bar.h}%`, background: bar.current ? "hsl(18,100%,48%)" : "hsl(205,60%,70%,0.3)" }}
                    />
                    <span className="text-[10px] font-mono text-report-muted">{bar.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-3">
                <div className="flex items-center gap-1.5 text-xs text-report-muted"><span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: "hsl(205,60%,70%,0.3)" }} />Previous quarter</div>
                <div className="flex items-center gap-1.5 text-xs text-report-muted"><span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: "hsl(18,100%,48%)" }} />This quarter</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3.5">
              <MetricCard label="Click-Through Rate" value="4.8%" delta="↑ from 3.2%" direction="up" />
              <MetricCard label="Impressions" value="412K" delta="↑ 18%" direction="up" />
              <MetricCard label="Bounce Rate" value="42%" delta="↓ from 58%" direction="up" />
            </div>
          </section>

          <Divider />

          {/* ── 03 KEYWORDS ── */}
          <section data-section="keywords" id="keywords">
            <SectionHeader tag="03 — Keyword Rankings" title="Keyword Performance" sub="Top tracked keywords and their current positions." />
            <div className="report-card p-0 overflow-hidden mb-3.5">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-report-border">
                    {["Keyword", "Volume/mo", "Position", "Change", "Status"].map((h) => (
                      <th key={h} className="text-left font-mono text-[11px] text-report-muted tracking-[0.06em] p-3.5 font-normal">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { kw: "digital marketing agency", vol: "18,100", pos: "4", change: "↑ 11", changeBadge: "green", status: "Top 10", statusBadge: "green" },
                    { kw: "seo services bangalore", vol: "9,900", pos: "7", change: "↑ 8", changeBadge: "green", status: "Top 10", statusBadge: "green" },
                    { kw: "content marketing strategy", vol: "6,600", pos: "12", change: "↑ 5", changeBadge: "green", status: "Top 20", statusBadge: "yellow" },
                    { kw: "local seo services", vol: "5,400", pos: "9", change: "↑ 14", changeBadge: "green", status: "Top 10", statusBadge: "green" },
                    { kw: "ppc management agency", vol: "3,600", pos: "18", change: "↑ 3", changeBadge: "green", status: "Top 20", statusBadge: "yellow" },
                    { kw: "social media marketing", vol: "22,200", pos: "24", change: "↓ 2", changeBadge: "yellow", status: "Top 30", statusBadge: "yellow" },
                    { kw: "web design company bangalore", vol: "2,900", pos: "6", change: "↑ 19", changeBadge: "green", status: "Top 10", statusBadge: "green" },
                    { kw: "email marketing tools", vol: "12,100", pos: "31", change: "↓ 4", changeBadge: "red", status: "Below 30", statusBadge: "red" },
                  ].map((row) => (
                    <tr key={row.kw} className="border-b border-report-border last:border-0 hover:bg-white/[0.02]">
                      <td className="p-3.5 text-report-text">{row.kw}</td>
                      <td className="p-3.5 font-mono text-xs text-report-muted">{row.vol}</td>
                      <td className="p-3.5 font-mono">{row.pos}</td>
                      <td className="p-3.5"><span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${badgeColor(row.changeBadge)}`}>{row.change}</span></td>
                      <td className="p-3.5"><span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${badgeColor(row.statusBadge)}`}>{row.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-3 gap-3.5">
              <MetricCard label="Top 3 Positions" value="42" delta="↑ 18 new" direction="up" />
              <MetricCard label="Top 10 Positions" value="186" delta="↑ 74 new" direction="up" />
              <MetricCard label="Top 30 Positions" value="640" delta="↑ 218 new" direction="up" />
            </div>
          </section>

          <Divider />

          {/* ── 04 ON-PAGE ── */}
          <section data-section="onpage" id="onpage">
            <SectionHeader tag="04 — On-Page SEO Audit" title="On-Page Health" sub="Audit of key on-page factors across the site's top-traffic pages." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
              <div className="report-card p-5 md:p-6">
                <div className="text-xs font-mono text-report-muted tracking-[0.06em] uppercase mb-3.5">Overall On-Page Score</div>
                <div className="flex items-center gap-7">
                  <svg viewBox="0 0 100 100" className="w-24 h-24 flex-shrink-0">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#1e2220" strokeWidth="8" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(18,100%,48%)" strokeWidth="8" strokeLinecap="round"
                      strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 78 / 100)} transform="rotate(-90 50 50)" />
                    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill="#e8ede9" style={{ fontSize: 28, fontFamily: "serif" }}>78</text>
                    <text x="50" y="68" textAnchor="middle" fill="#7a8a7e" style={{ fontSize: 10, fontFamily: "monospace" }}>/100</text>
                  </svg>
                  <div>
                    <div className="text-sm font-medium text-report-text">Good standing</div>
                    <div className="text-xs text-report-muted mt-1">12 issues flagged across 84 pages audited. 6 critical, 6 warnings.</div>
                  </div>
                </div>
              </div>
              <div className="report-card p-5 md:p-6">
                <div className="text-xs font-mono text-report-muted tracking-[0.06em] uppercase mb-3.5">Issue Breakdown</div>
                <ProgressRow label="Title tags optimised" value={91} color="bg-emerald-500" />
                <ProgressRow label="Meta descriptions present" value={84} color="bg-emerald-500" />
                <ProgressRow label="H1 tags correct" value={96} color="bg-emerald-500" />
                <ProgressRow label="Image alt attributes" value={67} color="bg-yellow-500" />
                <ProgressRow label="Internal links optimised" value={72} color="bg-yellow-500" />
              </div>
            </div>
            <div className="report-card p-5 md:p-6">
              <div className="text-xs font-mono text-report-muted tracking-[0.06em] uppercase mb-1">Audit Items</div>
              <AuditItem status="pass" title="Title tags — all under 60 characters" desc="91% of pages have correctly sized, keyword-rich title tags." badge="Pass" />
              <AuditItem status="pass" title="Canonical tags implemented sitewide" desc="No duplicate content issues detected across indexed pages." badge="Pass" />
              <AuditItem status="warn" title="Missing alt text on 33% of images" desc="214 images across blog and product pages lack descriptive alt attributes." badge="Warning" />
              <AuditItem status="warn" title="Thin content on 8 service pages" desc="Pages averaging under 400 words — below recommended threshold." badge="Warning" />
              <AuditItem status="fail" title="Duplicate meta descriptions on 6 pages" desc="Service category pages sharing identical meta descriptions — needs immediate fix." badge="Critical" />
              <AuditItem status="fail" title="Missing structured data on blog posts" desc="Article schema absent on 38 blog posts — missing rich snippet eligibility." badge="Critical" />
            </div>
          </section>

          <Divider />

          {/* ── 05 TECHNICAL ── */}
          <section data-section="technical" id="technical">
            <SectionHeader tag="05 — Technical SEO" title="Technical Health" sub="Core Web Vitals, crawlability, and infrastructure health." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
              <div className="report-card p-5 md:p-6">
                <div className="text-xs font-mono text-report-muted tracking-[0.06em] uppercase mb-3.5">Core Web Vitals</div>
                <AuditItem status="pass" title="LCP — Largest Contentful Paint" desc="1.8s (target: <2.5s)" badge="Good" />
                <AuditItem status="pass" title="FID — First Input Delay" desc="14ms (target: <100ms)" badge="Good" />
                <AuditItem status="warn" title="CLS — Cumulative Layout Shift" desc="0.18 (target: <0.1) — needs attention" badge="Improve" />
              </div>
              <div className="report-card p-5 md:p-6">
                <div className="text-xs font-mono text-report-muted tracking-[0.06em] uppercase mb-3.5">Site Speed</div>
                <ProgressRow label="Mobile PageSpeed score" value={74} color="bg-yellow-500" />
                <ProgressRow label="Desktop PageSpeed score" value={91} color="bg-emerald-500" />
                <ProgressRow label="Time to First Byte (TTFB)" value={82} color="bg-emerald-500" />
                <ProgressRow label="Pages indexed / submitted" value={97} color="bg-emerald-500" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
              <MetricCard label="Crawl Errors" value="3" delta="↓ from 18" direction="up" />
              <MetricCard label="Broken Links" value="7" delta="↓ from 34" direction="up" />
              <MetricCard label="Pages Indexed" value="248" delta="↑ 42 new" direction="up" />
              <MetricCard label="HTTPS Coverage" value="100%" delta="No change" direction="neutral" />
            </div>
          </section>

          <Divider />

          {/* ── 06 BACKLINKS ── */}
          <section data-section="backlinks" id="backlinks">
            <SectionHeader tag="06 — Backlink Analysis" title="Link Profile" sub="Earned backlinks, referring domains, and link quality distribution." />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5">
              <MetricCard label="Total Backlinks" value="3,840" delta="↑ 620 new" direction="up" />
              <MetricCard label="Referring Domains" value="412" delta="↑ 88 new" direction="up" />
              <MetricCard label="Dofollow Links" value="74%" delta="↑ from 68%" direction="up" />
              <MetricCard label="Toxic Links Removed" value="28" delta="Disavowed" direction="neutral" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="report-card p-0 overflow-hidden">
                <div className="text-xs font-mono text-report-muted tracking-[0.06em] uppercase p-5 pb-0 mb-3">Top New Referring Domains</div>
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="border-b border-report-border">
                      {["Domain", "DA", "Links", "Type"].map((h) => (
                        <th key={h} className="text-left font-mono text-[11px] text-report-muted tracking-[0.06em] px-3.5 py-2.5 font-normal">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { domain: "techcrunch.com", da: "94", links: "2", type: "Editorial", badge: "green" },
                      { domain: "smashingmagazine.com", da: "88", links: "1", type: "Editorial", badge: "green" },
                      { domain: "hubspot.com", da: "92", links: "1", type: "Resource", badge: "blue" },
                      { domain: "clutch.co", da: "76", links: "3", type: "Directory", badge: "blue" },
                      { domain: "searchengineland.com", da: "82", links: "1", type: "Editorial", badge: "green" },
                    ].map((row) => (
                      <tr key={row.domain} className="border-b border-report-border last:border-0 hover:bg-white/[0.02]">
                        <td className="px-3.5 py-2.5 text-report-text">{row.domain}</td>
                        <td className="px-3.5 py-2.5 font-mono text-xs text-report-muted">{row.da}</td>
                        <td className="px-3.5 py-2.5 font-mono text-xs text-report-muted">{row.links}</td>
                        <td className="px-3.5 py-2.5"><span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${badgeColor(row.badge)}`}>{row.type}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="report-card p-5 md:p-6">
                <div className="text-xs font-mono text-report-muted tracking-[0.06em] uppercase mb-3.5">Link Quality Distribution</div>
                <ProgressRow label="High quality (DA 70+)" value={18} color="bg-emerald-500" />
                <ProgressRow label="Medium quality (DA 40–69)" value={54} color="bg-blue-500" />
                <ProgressRow label="Low quality (DA 10–39)" value={22} color="bg-yellow-500" />
                <ProgressRow label="Toxic / spammy" value={6} color="bg-red-500" />
              </div>
            </div>
          </section>

          <Divider />

          {/* ── 07 RECOMMENDATIONS ── */}
          <section data-section="recommendations" id="recommendations">
            <SectionHeader tag="07 — Recommendations" title="Next Steps" sub="Prioritised action items for Q2 2026." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {[
                { n: "01", title: "Fix duplicate meta descriptions", desc: "Rewrite unique meta descriptions for the 6 flagged service pages. Target 150–160 characters with primary keyword inclusion.", priority: "High priority", badge: "red" },
                { n: "02", title: "Add Article schema to blog posts", desc: "Implement JSON-LD Article structured data across all 38 blog posts to unlock rich snippet eligibility in SERPs.", priority: "High priority", badge: "red" },
                { n: "03", title: "Improve mobile PageSpeed score", desc: "Optimise image formats (WebP), eliminate render-blocking scripts, and implement lazy loading to push mobile score above 85.", priority: "Medium priority", badge: "yellow" },
                { n: "04", title: "Resolve CLS issues", desc: "Reserve explicit dimensions for all images and ad units. Audit font loading to prevent layout shifts during page load.", priority: "Medium priority", badge: "yellow" },
                { n: "05", title: "Expand alt text coverage", desc: "Add descriptive alt attributes to the remaining 214 images. Focus on blog and product imagery first for maximum SEO impact.", priority: "Medium priority", badge: "yellow" },
                { n: "06", title: "Build content on thin service pages", desc: "Expand 8 service pages to 800+ words each with FAQ sections, case study snippets, and supporting internal links.", priority: "Low priority", badge: "blue" },
                { n: "07", title: 'Target "social media marketing" keyword', desc: "This high-volume term slipped 2 positions. Refresh the page content, add internal links, and build 3-5 targeted backlinks.", priority: "Medium priority", badge: "yellow" },
                { n: "08", title: "Continue link-building outreach", desc: "Sustain the 30 new referring domains/month pace. Focus on DA 60+ editorial placements in digital marketing publications.", priority: "Ongoing", badge: "blue" },
              ].map((rec) => (
                <div key={rec.n} className="report-card p-5 flex gap-4 hover:border-brand transition-colors" style={{ borderColor: undefined }}>
                  <span className="text-3xl font-serif flex-shrink-0 min-w-7 leading-none" style={{ color: "hsl(18,100%,48%)", opacity: 0.35 }}>{rec.n}</span>
                  <div>
                    <div className="text-sm font-semibold text-report-text mb-1">{rec.title}</div>
                    <div className="text-[13px] text-report-muted leading-relaxed">{rec.desc}</div>
                    <div className="mt-2">
                      <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full ${badgeColor(rec.badge)}`}>{rec.priority}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="py-12" />
        </main>
      </div>
    </>
  );
};

function badgeColor(color: string) {
  switch (color) {
    case "green": return "bg-emerald-500/12 text-emerald-400";
    case "yellow": return "bg-yellow-500/12 text-yellow-400";
    case "red": return "bg-red-500/12 text-red-400";
    case "blue": return "bg-blue-500/12 text-blue-400";
    default: return "bg-white/8 text-report-muted";
  }
}

export default ClientReport;
