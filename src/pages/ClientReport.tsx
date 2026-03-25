import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, TrendingUp, TrendingDown, Minus, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import magicbricksLogo from "@/assets/case-studies/magicbricks.png";
import mamaEarthLogo from "@/assets/case-studies/mamaearth.png";
import upgradLogo from "@/assets/case-studies/upgrad.png";
import tata1mgLogo from "@/assets/case-studies/tata1mg.png";
import shriramLogo from "@/assets/case-studies/shriram-properties.png";
import jainUniversityLogo from "@/assets/case-studies/jain-university.png";
import atriaInstituteLogo from "@/assets/case-studies/atria-institute.png";
import bhrighuAcademyLogo from "@/assets/case-studies/bhrighu-academy.png";

import s30Logo from "@/assets/super30-horizontal-logo.svg";

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

const MetricCard = ({ label, value, delta, direction }: { label: string; value: string; delta: string; direction: "up" | "down" | "neutral" }) => (
  <div className="border border-border rounded-xl p-5">
    <div className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase mb-2">{label}</div>
    <div className="text-3xl md:text-4xl font-bold text-foreground">{value}</div>
    <div className={`inline-flex items-center gap-1 text-xs mt-2.5 font-mono ${
      direction === "up" ? "text-emerald-600" :
      direction === "down" ? "text-red-500" :
      "text-muted-foreground"
    }`}>
      {direction === "up" ? <TrendingUp className="w-3 h-3" /> : direction === "down" ? <TrendingDown className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
      {delta}
    </div>
  </div>
);

const AuditItem = ({ status, title, desc, badge }: { status: "pass" | "warn" | "fail"; title: string; desc: string; badge: string }) => (
  <div className="flex items-start gap-3 py-4 border-b border-border last:border-0">
    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
      status === "pass" ? "bg-emerald-50" : status === "warn" ? "bg-yellow-50" : "bg-red-50"
    }`}>
      {status === "pass" ? <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> :
       status === "warn" ? <AlertTriangle className="w-3.5 h-3.5 text-yellow-600" /> :
       <XCircle className="w-3.5 h-3.5 text-red-500" />}
    </div>
    <div className="flex-1">
      <div className="text-sm font-medium text-foreground">{title}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
    </div>
    <Badge variant="outline" className={`text-[10px] font-mono ${
      status === "pass" ? "border-emerald-200 text-emerald-600" :
      status === "warn" ? "border-yellow-200 text-yellow-600" :
      "border-red-200 text-red-500"
    }`}>{badge}</Badge>
  </div>
);

const ProgressRow = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="mb-3.5">
    <div className="flex justify-between text-xs mb-1.5">
      <span className="text-foreground">{label}</span>
      <span className="text-muted-foreground font-mono">{value}%</span>
    </div>
    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
    </div>
  </div>
);

const ClientReport = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const client = slug ? clientData[slug] : null;

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Report Not Found</h1>
          <p className="text-muted-foreground mb-4">The requested report does not exist.</p>
          <Button onClick={() => navigate("/seo-results-bangalore")}>Back to Work</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{client.name} SEO Report | The Super 30</title>
        <meta name="description" content={`Detailed SEO performance report for ${client.name} by The Super 30.`} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
          <div className="max-w-5xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
            <img src={s30Logo} alt="The Super 30" className="h-7 cursor-pointer" onClick={() => navigate("/")} />
            <Button variant="ghost" size="sm" onClick={() => navigate("/seo-results-bangalore")} className="text-muted-foreground hover:text-foreground gap-1.5">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Hero Header */}
          <header className="py-10 md:py-16 border-b border-border">
            <div className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase mb-4">
              REPORT PERIOD — JAN 1 TO MAR 25, 2026
            </div>
            <div className="flex items-start gap-5 mb-4">
              <img src={client.logo} alt={client.name} className="h-12 w-auto object-contain flex-shrink-0 mt-1" />
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  SEO Work{" "}
                  <span className="italic text-brand-gradient">Conducted</span>
                </h1>
              </div>
            </div>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mb-8">
              A full breakdown of search engine optimisation activity, performance metrics, and strategic recommendations for {client.name}.
            </p>
            <div className="flex flex-wrap gap-8">
              {[
                { label: "Client", value: client.name },
                { label: "Domain", value: client.domain },
                { label: "Period", value: "Q1 2026" },
                { label: "Prepared by", value: "The Super 30" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-sm md:text-base font-semibold text-foreground">{item.value}</div>
                  <div className="text-[11px] font-mono text-muted-foreground tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </header>

          {/* 01 — Executive Summary */}
          <section className="py-10 md:py-14">
            <div className="text-[11px] font-mono text-brand tracking-widest uppercase mb-1">01 — Executive Summary</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Overview</h2>
            <p className="text-sm text-muted-foreground mb-6">High-level results from this quarter's SEO campaign.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
              <MetricCard label="Organic Traffic" value="38.4K" delta="↑ 24% vs last quarter" direction="up" />
              <MetricCard label="Keywords Ranking" value="1,240" delta="↑ 310 new" direction="up" />
              <MetricCard label="Avg. Position" value="14.2" delta="↑ from 19.8" direction="up" />
              <MetricCard label="Domain Authority" value="47" delta="↑ from 42" direction="up" />
            </div>
            <div className="border border-border rounded-xl p-5 md:p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                This quarter delivered strong momentum across all key SEO indicators. Organic traffic grew by <strong className="text-foreground">24%</strong>, driven primarily by improved rankings for high-intent commercial keywords and a series of optimised blog posts targeting informational queries. Domain Authority climbed from 42 to 47, reflecting the success of our link-building outreach. The site now ranks in the <strong className="text-foreground">top 10</strong> for 186 keywords, up from 112 last quarter.
              </p>
            </div>
          </section>

          <Separator />

          {/* 02 — Traffic */}
          <section className="py-10 md:py-14">
            <div className="text-[11px] font-mono text-brand tracking-widest uppercase mb-1">02 — Traffic & Performance</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Traffic Overview</h2>
            <p className="text-sm text-muted-foreground mb-6">Monthly organic sessions and click-through performance.</p>
            
            <div className="border border-border rounded-xl p-5 md:p-6 mb-4">
              <div className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase mb-4">Monthly Organic Sessions</div>
              <div className="flex items-end gap-3 h-32">
                {[
                  { h: 55, label: "Oct", current: false },
                  { h: 60, label: "Nov", current: false },
                  { h: 58, label: "Dec", current: false },
                  { h: 70, label: "Jan", current: true },
                  { h: 82, label: "Feb", current: true },
                  { h: 100, label: "Mar", current: true },
                ].map((bar) => (
                  <div key={bar.label} className="flex-1 flex flex-col items-center gap-1.5">
                    <div
                      className={`w-full rounded-t-md ${bar.current ? "bg-brand" : "bg-muted-foreground/20"}`}
                      style={{ height: `${bar.h}%` }}
                    />
                    <span className="text-[10px] font-mono text-muted-foreground">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <MetricCard label="Click-Through Rate" value="4.8%" delta="↑ from 3.2%" direction="up" />
              <MetricCard label="Impressions" value="412K" delta="↑ 18%" direction="up" />
              <MetricCard label="Bounce Rate" value="42%" delta="↓ from 58%" direction="up" />
            </div>
          </section>

          <Separator />

          {/* 03 — Keywords */}
          <section className="py-10 md:py-14">
            <div className="text-[11px] font-mono text-brand tracking-widest uppercase mb-1">03 — Keyword Rankings</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Keyword Performance</h2>
            <p className="text-sm text-muted-foreground mb-6">Top tracked keywords and their current positions.</p>
            
            <div className="border border-border rounded-xl overflow-hidden mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left text-[11px] font-mono text-muted-foreground tracking-wider uppercase p-3 md:p-4">Keyword</th>
                    <th className="text-left text-[11px] font-mono text-muted-foreground tracking-wider uppercase p-3 md:p-4">Vol/mo</th>
                    <th className="text-left text-[11px] font-mono text-muted-foreground tracking-wider uppercase p-3 md:p-4">Pos</th>
                    <th className="text-left text-[11px] font-mono text-muted-foreground tracking-wider uppercase p-3 md:p-4">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { kw: "digital marketing agency", vol: "18,100", pos: "4", change: "+11", status: "up" },
                    { kw: "seo services bangalore", vol: "9,900", pos: "7", change: "+8", status: "up" },
                    { kw: "content marketing strategy", vol: "6,600", pos: "12", change: "+5", status: "up" },
                    { kw: "local seo services", vol: "5,400", pos: "9", change: "+14", status: "up" },
                    { kw: "ppc management agency", vol: "3,600", pos: "18", change: "+3", status: "up" },
                    { kw: "social media marketing", vol: "22,200", pos: "24", change: "-2", status: "down" },
                  ].map((row) => (
                    <tr key={row.kw} className="border-b border-border/50 last:border-0">
                      <td className="p-3 md:p-4 text-foreground">{row.kw}</td>
                      <td className="p-3 md:p-4 font-mono text-xs text-muted-foreground">{row.vol}</td>
                      <td className="p-3 md:p-4 font-mono">{row.pos}</td>
                      <td className="p-3 md:p-4">
                        <span className={`text-xs font-mono ${
                          row.status === "up" ? "text-emerald-600" : "text-red-500"
                        }`}>{row.status === "up" ? "↑" : "↓"} {row.change}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <MetricCard label="Top 3 Positions" value="42" delta="↑ 18 new" direction="up" />
              <MetricCard label="Top 10 Positions" value="186" delta="↑ 74 new" direction="up" />
              <MetricCard label="Top 30 Positions" value="640" delta="↑ 218 new" direction="up" />
            </div>
          </section>

          <Separator />

          {/* 04 — On-Page Audit */}
          <section className="py-10 md:py-14">
            <div className="text-[11px] font-mono text-brand tracking-widest uppercase mb-1">04 — On-Page SEO Audit</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">On-Page Health</h2>
            <p className="text-sm text-muted-foreground mb-6">Audit of key on-page factors across the site's top-traffic pages.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="border border-border rounded-xl p-5 md:p-6">
                <div className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase mb-4">Overall On-Page Score</div>
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--brand))" strokeWidth="8" strokeLinecap="round"
                        strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 78 / 100)} transform="rotate(-90 50 50)" />
                      <text x="50" y="48" textAnchor="middle" dominantBaseline="middle" className="fill-foreground font-bold" style={{ fontSize: 28 }}>78</text>
                      <text x="50" y="68" textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 10, fontFamily: "monospace" }}>/100</text>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Good standing</div>
                    <div className="text-xs text-muted-foreground mt-1">12 issues flagged across 84 pages audited.</div>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-xl p-5 md:p-6">
                <div className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase mb-4">Issue Breakdown</div>
                <ProgressRow label="Title tags optimised" value={91} color="bg-emerald-500" />
                <ProgressRow label="Meta descriptions present" value={84} color="bg-emerald-500" />
                <ProgressRow label="H1 tags correct" value={96} color="bg-emerald-500" />
                <ProgressRow label="Image alt attributes" value={67} color="bg-yellow-500" />
                <ProgressRow label="Internal links optimised" value={72} color="bg-yellow-500" />
              </div>
            </div>

            <div className="border border-border rounded-xl p-5 md:p-6">
              <AuditItem status="pass" title="Title tags — all under 60 characters" desc="91% of pages have correctly sized, keyword-rich title tags." badge="Pass" />
              <AuditItem status="pass" title="Canonical tags implemented sitewide" desc="No duplicate content issues detected across indexed pages." badge="Pass" />
              <AuditItem status="warn" title="Missing alt text on 33% of images" desc="214 images across blog and product pages lack descriptive alt attributes." badge="Warning" />
              <AuditItem status="fail" title="Duplicate meta descriptions on 6 pages" desc="Service category pages sharing identical meta descriptions." badge="Critical" />
            </div>
          </section>

          <Separator />

          {/* 05 — Technical SEO */}
          <section className="py-10 md:py-14">
            <div className="text-[11px] font-mono text-brand tracking-widest uppercase mb-1">05 — Technical SEO</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Technical Health</h2>
            <p className="text-sm text-muted-foreground mb-6">Core Web Vitals, crawlability, and infrastructure health.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <MetricCard label="Crawl Errors" value="3" delta="↓ from 18" direction="up" />
              <MetricCard label="Broken Links" value="7" delta="↓ from 34" direction="up" />
              <MetricCard label="Pages Indexed" value="248" delta="↑ 42 new" direction="up" />
              <MetricCard label="HTTPS Coverage" value="100%" delta="No change" direction="neutral" />
            </div>
          </section>

          <Separator />

          {/* 06 — Recommendations */}
          <section className="py-10 md:py-14">
            <div className="text-[11px] font-mono text-brand tracking-widest uppercase mb-1">06 — Recommendations</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Next Steps</h2>
            <p className="text-sm text-muted-foreground mb-6">Prioritised action items for Q2 2026.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { n: "01", title: "Fix duplicate meta descriptions", desc: "Rewrite unique meta descriptions for the 6 flagged service pages.", priority: "High", color: "text-red-500 border-red-200" },
                { n: "02", title: "Add Article schema to blog posts", desc: "Implement JSON-LD Article structured data across all 38 blog posts.", priority: "High", color: "text-red-500 border-red-200" },
                { n: "03", title: "Improve mobile PageSpeed score", desc: "Optimise image formats, eliminate render-blocking scripts.", priority: "Medium", color: "text-yellow-600 border-yellow-200" },
                { n: "04", title: "Resolve CLS issues", desc: "Reserve explicit dimensions for all images and ad units.", priority: "Medium", color: "text-yellow-600 border-yellow-200" },
              ].map((rec) => (
                <div key={rec.n} className="border border-border rounded-xl p-5 flex gap-4">
                  <span className="text-3xl font-bold text-muted-foreground/20 font-mono flex-shrink-0">{rec.n}</span>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">{rec.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{rec.desc}</div>
                    <Badge variant="outline" className={`mt-2 text-[10px] font-mono ${rec.color}`}>{rec.priority}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 border-t border-border text-center">
            <img src={s30Logo} alt="The Super 30" className="h-6 mx-auto mb-3" />
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} The Super 30. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ClientReport;
