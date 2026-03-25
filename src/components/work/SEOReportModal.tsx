import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, TrendingDown, Minus, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

interface SEOReportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  companyName: string;
  logo?: string;
}

const MetricCard = ({ label, value, delta, direction }: { label: string; value: string; delta: string; direction: "up" | "down" | "neutral" }) => (
  <div className="bg-[#0d1117] border border-border/30 rounded-xl p-4">
    <div className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase mb-1.5">{label}</div>
    <div className="text-2xl md:text-3xl font-bold text-foreground">{value}</div>
    <div className={`inline-flex items-center gap-1 text-xs mt-2 px-2 py-0.5 rounded-full font-mono ${
      direction === "up" ? "bg-emerald-500/10 text-emerald-400" :
      direction === "down" ? "bg-red-500/10 text-red-400" :
      "bg-muted text-muted-foreground"
    }`}>
      {direction === "up" ? <TrendingUp className="w-3 h-3" /> : direction === "down" ? <TrendingDown className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
      {delta}
    </div>
  </div>
);

const AuditItem = ({ status, title, desc, badge }: { status: "pass" | "warn" | "fail"; title: string; desc: string; badge: string }) => (
  <div className="flex items-start gap-3 py-3 border-b border-border/20 last:border-0">
    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
      status === "pass" ? "bg-emerald-500/10" : status === "warn" ? "bg-yellow-500/10" : "bg-red-500/10"
    }`}>
      {status === "pass" ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> :
       status === "warn" ? <AlertTriangle className="w-3.5 h-3.5 text-yellow-400" /> :
       <XCircle className="w-3.5 h-3.5 text-red-400" />}
    </div>
    <div className="flex-1">
      <div className="text-sm font-medium text-foreground">{title}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
    </div>
    <Badge variant="outline" className={`text-[10px] font-mono ${
      status === "pass" ? "border-emerald-500/30 text-emerald-400" :
      status === "warn" ? "border-yellow-500/30 text-yellow-400" :
      "border-red-500/30 text-red-400"
    }`}>{badge}</Badge>
  </div>
);

const ProgressRow = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="mb-3">
    <div className="flex justify-between text-xs mb-1">
      <span className="text-foreground">{label}</span>
      <span className="text-muted-foreground font-mono">{value}%</span>
    </div>
    <div className="h-1.5 bg-[#1e2330] rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
    </div>
  </div>
);

export const SEOReportModal = ({ open, onOpenChange, companyName, logo }: SEOReportModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0e14] border-border/30 p-0">
        {/* Hero */}
        <div className="bg-[#0d1117] border-b border-border/20 p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase mb-3">
            REPORT PERIOD — JAN 1 TO MAR 25, 2026
          </div>
          <div className="flex items-center gap-4 mb-3">
            {logo && <img src={logo} alt={companyName} className="h-10 w-auto object-contain" />}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              SEO Work <span className="text-brand italic">Conducted</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-lg">
            A full breakdown of search engine optimisation activity, performance metrics, and strategic recommendations for {companyName}.
          </p>
          <div className="flex flex-wrap gap-6 mt-5">
            {[
              { label: "Client", value: companyName },
              { label: "Period", value: "Q1 2026" },
              { label: "Prepared by", value: "The Super 30" },
            ].map((item) => (
              <div key={item.label} className="text-xs text-muted-foreground font-mono">
                <strong className="block text-sm text-foreground font-sans font-semibold">{item.value}</strong>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-10">
          {/* Executive Summary */}
          <section>
            <div className="text-[11px] font-mono text-brand tracking-widest uppercase mb-1">01 — Executive Summary</div>
            <h3 className="text-xl font-bold text-foreground mb-1">Overview</h3>
            <p className="text-xs text-muted-foreground mb-5">High-level results from this quarter's SEO campaign.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <MetricCard label="Organic Traffic" value="38.4K" delta="↑ 24% vs last quarter" direction="up" />
              <MetricCard label="Keywords Ranking" value="1,240" delta="↑ 310 new" direction="up" />
              <MetricCard label="Avg. Position" value="14.2" delta="↑ from 19.8" direction="up" />
              <MetricCard label="Domain Authority" value="47" delta="↑ from 42" direction="up" />
            </div>
            <div className="bg-[#0d1117] border border-border/30 rounded-xl p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                This quarter delivered strong momentum across all key SEO indicators. Organic traffic grew by <strong className="text-foreground">24%</strong>, driven primarily by improved rankings for high-intent commercial keywords. Domain Authority climbed from 42 to 47. The site now ranks in the <strong className="text-foreground">top 10</strong> for 186 keywords, up from 112 last quarter.
              </p>
            </div>
          </section>

          <Separator className="bg-border/20" />

          {/* Traffic */}
          <section>
            <div className="text-[11px] font-mono text-brand tracking-widest uppercase mb-1">02 — Traffic & Performance</div>
            <h3 className="text-xl font-bold text-foreground mb-1">Traffic Overview</h3>
            <p className="text-xs text-muted-foreground mb-5">Monthly organic sessions and click-through performance.</p>
            
            <div className="bg-[#0d1117] border border-border/30 rounded-xl p-5 mb-3">
              <div className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase mb-3">Monthly Organic Sessions</div>
              <div className="flex items-end gap-2 h-28">
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
                      className={`w-full rounded-t ${bar.current ? "bg-brand" : "bg-blue-500/40"}`}
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

          <Separator className="bg-border/20" />

          {/* Keywords */}
          <section>
            <div className="text-[11px] font-mono text-brand tracking-widest uppercase mb-1">03 — Keyword Rankings</div>
            <h3 className="text-xl font-bold text-foreground mb-1">Keyword Performance</h3>
            <p className="text-xs text-muted-foreground mb-5">Top tracked keywords and their current positions.</p>
            
            <div className="bg-[#0d1117] border border-border/30 rounded-xl overflow-hidden mb-3">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/20">
                    <th className="text-left text-[11px] font-mono text-muted-foreground tracking-wider uppercase p-3">Keyword</th>
                    <th className="text-left text-[11px] font-mono text-muted-foreground tracking-wider uppercase p-3">Vol/mo</th>
                    <th className="text-left text-[11px] font-mono text-muted-foreground tracking-wider uppercase p-3">Pos</th>
                    <th className="text-left text-[11px] font-mono text-muted-foreground tracking-wider uppercase p-3">Change</th>
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
                    <tr key={row.kw} className="border-b border-border/10 hover:bg-[#1e2330]/50">
                      <td className="p-3 text-foreground">{row.kw}</td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">{row.vol}</td>
                      <td className="p-3 font-mono">{row.pos}</td>
                      <td className="p-3">
                        <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                          row.status === "up" ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                        }`}>↑ {row.change}</span>
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

          <Separator className="bg-border/20" />

          {/* On-Page Audit */}
          <section>
            <div className="text-[11px] font-mono text-brand tracking-widest uppercase mb-1">04 — On-Page SEO Audit</div>
            <h3 className="text-xl font-bold text-foreground mb-1">On-Page Health</h3>
            <p className="text-xs text-muted-foreground mb-5">Audit of key on-page factors across the site's top-traffic pages.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div className="bg-[#0d1117] border border-border/30 rounded-xl p-5">
                <div className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase mb-3">Overall On-Page Score</div>
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--border))" strokeWidth="8" opacity="0.2" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--brand-orange))" strokeWidth="8" strokeLinecap="round"
                        strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 78 / 100)} transform="rotate(-90 50 50)" />
                      <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" className="fill-foreground text-2xl font-bold" style={{ fontSize: 28 }}>78</text>
                      <text x="50" y="68" textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 10, fontFamily: "monospace" }}>/100</text>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Good standing</div>
                    <div className="text-xs text-muted-foreground mt-1">12 issues flagged across 84 pages audited.</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#0d1117] border border-border/30 rounded-xl p-5">
                <div className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase mb-3">Issue Breakdown</div>
                <ProgressRow label="Title tags optimised" value={91} color="bg-emerald-400" />
                <ProgressRow label="Meta descriptions present" value={84} color="bg-emerald-400" />
                <ProgressRow label="H1 tags correct" value={96} color="bg-emerald-400" />
                <ProgressRow label="Image alt attributes" value={67} color="bg-yellow-400" />
                <ProgressRow label="Internal links optimised" value={72} color="bg-yellow-400" />
              </div>
            </div>

            <div className="bg-[#0d1117] border border-border/30 rounded-xl p-5">
              <AuditItem status="pass" title="Title tags — all under 60 characters" desc="91% of pages have correctly sized, keyword-rich title tags." badge="Pass" />
              <AuditItem status="pass" title="Canonical tags implemented sitewide" desc="No duplicate content issues detected across indexed pages." badge="Pass" />
              <AuditItem status="warn" title="Missing alt text on 33% of images" desc="214 images across blog and product pages lack descriptive alt attributes." badge="Warning" />
              <AuditItem status="fail" title="Duplicate meta descriptions on 6 pages" desc="Service category pages sharing identical meta descriptions." badge="Critical" />
            </div>
          </section>

          <Separator className="bg-border/20" />

          {/* Technical SEO */}
          <section>
            <div className="text-[11px] font-mono text-brand tracking-widest uppercase mb-1">05 — Technical SEO</div>
            <h3 className="text-xl font-bold text-foreground mb-1">Technical Health</h3>
            <p className="text-xs text-muted-foreground mb-5">Core Web Vitals, crawlability, and infrastructure health.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <MetricCard label="Crawl Errors" value="3" delta="↓ from 18" direction="up" />
              <MetricCard label="Broken Links" value="7" delta="↓ from 34" direction="up" />
              <MetricCard label="Pages Indexed" value="248" delta="↑ 42 new" direction="up" />
              <MetricCard label="HTTPS Coverage" value="100%" delta="No change" direction="neutral" />
            </div>
          </section>

          <Separator className="bg-border/20" />

          {/* Recommendations */}
          <section>
            <div className="text-[11px] font-mono text-brand tracking-widest uppercase mb-1">06 — Recommendations</div>
            <h3 className="text-xl font-bold text-foreground mb-1">Next Steps</h3>
            <p className="text-xs text-muted-foreground mb-5">Prioritised action items for Q2 2026.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { n: "01", title: "Fix duplicate meta descriptions", desc: "Rewrite unique meta descriptions for the 6 flagged service pages.", priority: "High", color: "text-red-400 border-red-500/30" },
                { n: "02", title: "Add Article schema to blog posts", desc: "Implement JSON-LD Article structured data across all 38 blog posts.", priority: "High", color: "text-red-400 border-red-500/30" },
                { n: "03", title: "Improve mobile PageSpeed score", desc: "Optimise image formats, eliminate render-blocking scripts.", priority: "Medium", color: "text-yellow-400 border-yellow-500/30" },
                { n: "04", title: "Resolve CLS issues", desc: "Reserve explicit dimensions for all images and ad units.", priority: "Medium", color: "text-yellow-400 border-yellow-500/30" },
              ].map((rec) => (
                <div key={rec.n} className="bg-[#0d1117] border border-border/30 rounded-xl p-4 flex gap-3 hover:border-brand/30 transition-colors">
                  <span className="text-2xl font-bold text-brand/20 font-mono flex-shrink-0">{rec.n}</span>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">{rec.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{rec.desc}</div>
                    <Badge variant="outline" className={`mt-2 text-[10px] font-mono ${rec.color}`}>{rec.priority}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};
