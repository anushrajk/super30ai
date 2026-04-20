import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, TrendingDown, TrendingUp, Target, Users, MousePointerClick, Phone, CheckCircle2, IndianRupee, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";

import aadhyaLogo from "@/assets/case-studies/aadhya-animatics.png";
import interiorsLogo from "@/assets/case-studies/interiors-and-more.png";

type Channel = { name: string; leads: number; color: string };
type FunnelStage = { label: string; value: number; icon: React.ComponentType<{ className?: string }> };
type LeadQuality = { label: string; pct: number; color: string };
type Metric = { label: string; value: string; delta: string; direction: "up" | "down" };

type LeadGenClient = {
  name: string;
  industry: string;
  logo: string;
  domain: string;
  bgColor: string;
  campaign: string;
  duration: string;
  metrics: Metric[];
  funnel: FunnelStage[];
  channels: Channel[];
  leadQuality: LeadQuality[];
  monthlySpend: string;
  monthlyRevenue: string;
  roi: string;
  challenge: string;
  strategy: string[];
  result: string;
};

const clients: Record<string, LeadGenClient> = {
  "aadhya-animatics": {
    name: "Aadhya Animatics",
    industry: "Animation Studio",
    logo: aadhyaLogo,
    domain: "aadhyaanimatics.com",
    bgColor: "#000000",
    campaign: "B2B Lead Generation — Animation Services",
    duration: "Aug 2024 — Mar 2025 (8 months)",
    metrics: [
      { label: "Qualified Leads", value: "2,540", delta: "+218%", direction: "up" },
      { label: "Cost Per Lead", value: "₹186", delta: "-45%", direction: "down" },
      { label: "Conversion Rate", value: "8.2%", delta: "+120%", direction: "up" },
      { label: "Pipeline Value", value: "₹4.8 Cr", delta: "+312%", direction: "up" },
    ],
    funnel: [
      { label: "Impressions", value: 1240000, icon: Target },
      { label: "Clicks", value: 38400, icon: MousePointerClick },
      { label: "Form Fills", value: 4860, icon: Users },
      { label: "Qualified Leads", value: 2540, icon: Phone },
      { label: "Closed Deals", value: 208, icon: CheckCircle2 },
    ],
    channels: [
      { name: "Google Ads", leads: 1080, color: "hsl(217, 91%, 60%)" },
      { name: "Meta Ads", leads: 720, color: "hsl(221, 83%, 53%)" },
      { name: "LinkedIn Ads", leads: 460, color: "hsl(201, 96%, 32%)" },
      { name: "Organic / SEO", leads: 280, color: "hsl(142, 71%, 45%)" },
    ],
    leadQuality: [
      { label: "Sales Qualified (SQL)", pct: 42, color: "bg-emerald-500" },
      { label: "Marketing Qualified (MQL)", pct: 38, color: "bg-blue-500" },
      { label: "Nurture / Cold", pct: 20, color: "bg-amber-500" },
    ],
    monthlySpend: "₹4.7 L",
    monthlyRevenue: "₹62 L",
    roi: "13.2x",
    challenge:
      "Aadhya Animatics had limited inbound pipeline despite being a leading studio. Their existing ads were broad, lacked intent targeting, and CPL was over ₹340 with weak quality.",
    strategy: [
      "Built intent-based search campaigns around 8 high-converting keyword clusters",
      "Launched LinkedIn ABM targeting decision-makers at media, ed-tech and ad agencies",
      "Set up a 7-day retargeting funnel across Meta + YouTube with portfolio reels",
      "Replaced generic forms with a 3-step qualifier: industry → use case → budget",
      "Integrated WhatsApp routing for instant response within 90 seconds",
    ],
    result:
      "In 8 months we tripled the pipeline, brought CPL to ₹186, and helped close 208 deals worth ₹4.8 Cr — a 13.2x return on ad spend.",
  },
  "interiors-and-more": {
    name: "Interiors & More",
    industry: "Home Decor & Interiors",
    logo: interiorsLogo,
    domain: "interiorsandmore.in",
    bgColor: "#ffffff",
    campaign: "B2C Lead Generation — Home Interiors",
    duration: "Jan 2024 — Dec 2024 (12 months)",
    metrics: [
      { label: "Qualified Leads", value: "1,820", delta: "+185%", direction: "up" },
      { label: "Cost Per Lead", value: "₹240", delta: "-38%", direction: "down" },
      { label: "ROI", value: "+210%", delta: "+210%", direction: "up" },
      { label: "Pipeline Value", value: "₹3.2 Cr", delta: "+240%", direction: "up" },
    ],
    funnel: [
      { label: "Impressions", value: 980000, icon: Target },
      { label: "Clicks", value: 27600, icon: MousePointerClick },
      { label: "Form Fills", value: 3640, icon: Users },
      { label: "Qualified Leads", value: 1820, icon: Phone },
      { label: "Closed Projects", value: 142, icon: CheckCircle2 },
    ],
    channels: [
      { name: "Meta Ads", leads: 820, color: "hsl(221, 83%, 53%)" },
      { name: "Google Ads", leads: 540, color: "hsl(217, 91%, 60%)" },
      { name: "Organic / SEO", leads: 320, color: "hsl(142, 71%, 45%)" },
      { name: "Referral / Direct", leads: 140, color: "hsl(280, 65%, 55%)" },
    ],
    leadQuality: [
      { label: "Sales Qualified (SQL)", pct: 38, color: "bg-emerald-500" },
      { label: "Marketing Qualified (MQL)", pct: 44, color: "bg-blue-500" },
      { label: "Nurture / Cold", pct: 18, color: "bg-amber-500" },
    ],
    monthlySpend: "₹3.6 L",
    monthlyRevenue: "₹26 L",
    roi: "7.2x",
    challenge:
      "Interiors & More relied on word-of-mouth and walk-ins. Digital leads were inconsistent — fewer than 50/month — and average project value was leaking due to poor lead qualification.",
    strategy: [
      "Built city-level Meta campaigns with 3D room walkthroughs and before/after carousels",
      "Set up Google Search ads for high-intent keywords (modular kitchen, wardrobe design)",
      "Launched a budget-qualifier landing page (₹2L / ₹5L / ₹10L+) to filter quality",
      "Added IndiaMART and Justdial integrations for double exposure",
      "Built an SEO content hub on interior trends, costs, and project galleries",
    ],
    result:
      "Generated 1,820 qualified leads at ₹240 CPL, closed 142 projects worth ₹3.2 Cr, and 7.2x ROAS — making digital their #1 acquisition channel.",
  },
};

const navSections = [
  { id: "summary", label: "Executive Summary" },
  { id: "funnel", label: "Conversion Funnel" },
  { id: "channels", label: "Channel Mix" },
  { id: "quality", label: "Lead Quality" },
  { id: "roi", label: "ROI & Spend" },
  { id: "strategy", label: "Strategy & Result" },
];

const formatNum = (n: number) => {
  if (n >= 100000) return (n / 100000).toFixed(1).replace(/\.0$/, "") + "L";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
};

const MetricCard = ({ m }: { m: Metric }) => (
  <div className="bg-card border border-border/40 rounded-2xl p-5 hover:border-brand/40 hover:shadow-md transition-all">
    <div className="text-[11px] font-mono text-muted-foreground tracking-[0.06em] uppercase mb-2">{m.label}</div>
    <div className="text-3xl font-bold text-foreground leading-none mb-3">{m.value}</div>
    <div
      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-mono font-semibold ${
        m.direction === "up" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
      }`}
    >
      {m.direction === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
      {m.delta}
    </div>
  </div>
);

const FunnelChart = ({ stages }: { stages: FunnelStage[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  const max = stages[0].value;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && (setAnimated(true), obs.disconnect()), { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-3">
      {stages.map((s, i) => {
        const widthPct = (s.value / max) * 100;
        const Icon = s.icon;
        const conv = i > 0 ? ((s.value / stages[i - 1].value) * 100).toFixed(1) : null;
        return (
          <div key={s.label} className="group">
            <div className="flex items-center justify-between mb-1.5 text-sm">
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-brand" />
                <span className="font-medium text-foreground">{s.label}</span>
                {conv && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">
                    {conv}% →
                  </span>
                )}
              </div>
              <span className="font-bold text-foreground font-mono">{formatNum(s.value)}</span>
            </div>
            <div className="h-9 bg-muted/40 rounded-lg overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-brand to-brand/70 transition-all duration-1000 ease-out flex items-center px-3"
                style={{ width: animated ? `${widthPct}%` : "0%" }}
              >
                <span className="text-[10px] text-white font-mono opacity-80">
                  {((s.value / max) * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ChannelMix = ({ channels }: { channels: Channel[] }) => {
  const total = channels.reduce((a, c) => a + c.leads, 0);
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && (setAnimated(true), obs.disconnect()), { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // SVG donut
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  let cumulative = 0;

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-8 items-center">
      <div className="relative w-[200px] h-[200px] mx-auto">
        <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
          <circle cx="100" cy="100" r={radius} fill="none" stroke="hsl(var(--muted))" strokeWidth="22" />
          {channels.map((c) => {
            const pct = c.leads / total;
            const dash = circumference * pct;
            const offset = circumference * cumulative;
            cumulative += pct;
            return (
              <circle
                key={c.name}
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke={c.color}
                strokeWidth="22"
                strokeDasharray={`${animated ? dash : 0} ${circumference}`}
                strokeDashoffset={-offset}
                style={{ transition: "stroke-dasharray 1.2s ease-out" }}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-2xl font-bold text-foreground">{formatNum(total)}</div>
          <div className="text-[11px] text-muted-foreground uppercase tracking-wider">Total Leads</div>
        </div>
      </div>

      <div className="space-y-3">
        {channels.map((c) => {
          const pct = ((c.leads / total) * 100).toFixed(1);
          return (
            <div key={c.name} className="flex items-center justify-between gap-3 py-2 border-b border-border/30 last:border-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: c.color }} />
                <span className="text-sm font-medium text-foreground truncate">{c.name}</span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-mono text-muted-foreground">{c.leads.toLocaleString()}</span>
                <span className="text-sm font-bold text-foreground w-12 text-right">{pct}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const LeadQualityBars = ({ items }: { items: LeadQuality[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && (setAnimated(true), obs.disconnect()), { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-5">
      {items.map((it) => (
        <div key={it.label}>
          <div className="flex justify-between text-sm mb-1.5">
            <span className="font-medium text-foreground">{it.label}</span>
            <span className="font-mono text-muted-foreground">{it.pct}%</span>
          </div>
          <div className="h-2.5 bg-muted/50 rounded-full overflow-hidden">
            <div
              className={`h-full ${it.color} transition-all duration-1000 ease-out`}
              style={{ width: animated ? `${it.pct}%` : "0%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const LeadGenReport = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [active, setActive] = useState("summary");

  const client = slug ? clients[slug] : undefined;

  useEffect(() => {
    if (!client) return;
    const onScroll = () => {
      const offsets = navSections.map((s) => {
        const el = document.getElementById(s.id);
        return { id: s.id, top: el ? el.getBoundingClientRect().top : Infinity };
      });
      const current = offsets.filter((o) => o.top < 120).pop();
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [client]);

  if (!client) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-3">Report not found</h1>
          <p className="text-muted-foreground mb-6">This lead generation case study doesn't exist.</p>
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-white font-semibold px-5 py-2.5 rounded-xl transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Our Work
          </Link>
        </div>
      </div>
    );
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${client.name} — Lead Generation Case Study | Super30 AI`}</title>
        <meta
          name="description"
          content={`How Super30 AI generated ${client.metrics[0].value} qualified leads for ${client.name} (${client.industry}) at ${client.metrics[1].value} cost per lead.`}
        />
        <link rel="canonical" href={`https://super30ai.lovable.app/lead-gen-report/${slug}`} />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-muted/40 via-background to-background border-b border-border/40 pt-28 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <button
            onClick={() => navigate("/our-work")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </button>

          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <div
              className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border border-border/30 shrink-0 flex items-center justify-center p-4 shadow-sm"
              style={{ backgroundColor: client.bgColor }}
            >
              <img src={client.logo} alt={client.name} className="w-full h-full object-contain" />
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Lead Generation Case Study
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">{client.name}</h1>
              <p className="text-muted-foreground text-base md:text-lg mb-1">{client.campaign}</p>
              <p className="text-sm text-muted-foreground/80 font-mono">
                {client.industry} · {client.domain} · {client.duration}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky nav */}
      <div className="sticky top-16 z-30 bg-background/90 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-2">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  active === s.id
                    ? "bg-brand text-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 max-w-6xl py-12 md:py-16 space-y-16">
        {/* Executive Summary */}
        <section id="summary" className="scroll-mt-32">
          <h2 className="text-xs font-mono font-semibold text-brand uppercase tracking-[0.2em] mb-3">01 / Executive Summary</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 max-w-3xl">
            Key results from the {client.duration.split("(")[1]?.replace(")", "") || "campaign"} engagement
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {client.metrics.map((m) => (
              <MetricCard key={m.label} m={m} />
            ))}
          </div>
        </section>

        {/* Funnel */}
        <section id="funnel" className="scroll-mt-32">
          <h2 className="text-xs font-mono font-semibold text-brand uppercase tracking-[0.2em] mb-3">02 / Conversion Funnel</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">From impression to closed deal</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            How traffic moved through every stage of the lead generation funnel during the campaign window.
          </p>
          <div className="bg-card border border-border/40 rounded-2xl p-6 md:p-8">
            <FunnelChart stages={client.funnel} />
          </div>
        </section>

        {/* Channels */}
        <section id="channels" className="scroll-mt-32">
          <h2 className="text-xs font-mono font-semibold text-brand uppercase tracking-[0.2em] mb-3">03 / Channel Mix</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Where the leads came from</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Distribution of qualified leads across paid, organic, and referral channels.
          </p>
          <div className="bg-card border border-border/40 rounded-2xl p-6 md:p-8">
            <ChannelMix channels={client.channels} />
          </div>
        </section>

        {/* Lead Quality */}
        <section id="quality" className="scroll-mt-32">
          <h2 className="text-xs font-mono font-semibold text-brand uppercase tracking-[0.2em] mb-3">04 / Lead Quality Breakdown</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Quality, not just quantity</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Lead scoring across SQL, MQL, and nurture buckets — qualified by sales team within 48 hours.
          </p>
          <div className="bg-card border border-border/40 rounded-2xl p-6 md:p-8">
            <LeadQualityBars items={client.leadQuality} />
          </div>
        </section>

        {/* ROI */}
        <section id="roi" className="scroll-mt-32">
          <h2 className="text-xs font-mono font-semibold text-brand uppercase tracking-[0.2em] mb-3">05 / ROI & Ad Spend</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Money in vs money out</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl">Average monthly spend, attributable revenue, and return on ad spend.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card border border-border/40 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider mb-3">
                <IndianRupee className="w-4 h-4" /> Avg Monthly Spend
              </div>
              <div className="text-3xl font-bold text-foreground">{client.monthlySpend}</div>
              <div className="text-xs text-muted-foreground mt-1">Across all paid channels</div>
            </div>
            <div className="bg-card border border-border/40 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider mb-3">
                <TrendingUp className="w-4 h-4" /> Avg Monthly Revenue
              </div>
              <div className="text-3xl font-bold text-foreground">{client.monthlyRevenue}</div>
              <div className="text-xs text-emerald-600 mt-1">From attributed leads</div>
            </div>
            <div className="bg-gradient-to-br from-brand to-brand/80 text-white rounded-2xl p-6">
              <div className="flex items-center gap-2 text-white/80 text-xs uppercase tracking-wider mb-3">
                <ArrowUpRight className="w-4 h-4" /> Return on Ad Spend
              </div>
              <div className="text-4xl font-bold">{client.roi}</div>
              <div className="text-xs text-white/80 mt-1">Lifetime campaign average</div>
            </div>
          </div>
        </section>

        {/* Strategy */}
        <section id="strategy" className="scroll-mt-32">
          <h2 className="text-xs font-mono font-semibold text-brand uppercase tracking-[0.2em] mb-3">06 / Strategy & Result</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">How we did it</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border border-border/40 rounded-2xl p-6 md:p-8">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">The Challenge</div>
              <p className="text-foreground leading-relaxed">{client.challenge}</p>
            </div>

            <div className="bg-card border border-border/40 rounded-2xl p-6 md:p-8">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">Our Strategy</div>
              <ul className="space-y-2.5">
                {client.strategy.map((s, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-foreground leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-gradient-to-br from-brand/10 via-card to-card border border-brand/20 rounded-2xl p-6 md:p-8">
            <div className="text-xs font-mono uppercase tracking-wider text-brand mb-2">The Result</div>
            <p className="text-foreground text-lg leading-relaxed">{client.result}</p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-foreground to-foreground/90 text-background rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Want results like {client.name}?</h3>
          <p className="text-background/70 mb-6 max-w-xl mx-auto">
            Get a free lead generation audit and a custom funnel plan tailored to your business.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Get Your Free Lead Gen Audit
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </main>
    </div>
  );
};

export default LeadGenReport;
