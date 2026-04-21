import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Code2, Terminal, Cpu, Database, Cloud, GitBranch, Gauge, Shield,
  ArrowRight, CheckCircle2, Zap, Workflow, Layers, Server, Boxes, Rocket,
  Globe, Lock, Activity,
} from "lucide-react";

const WebDevelopment = () => {
  const { submitLead, isSubmitting } = useLeadSubmit({ source: "web_development" });
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitLead({ website_url: website, email, phone });
  };

  const stack = [
    { tier: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Vite", "Framer"], icon: Layers },
    { tier: "Backend", items: ["Node.js", "Express", "NestJS", "tRPC", "GraphQL", "REST"], icon: Server },
    { tier: "Database", items: ["PostgreSQL", "Supabase", "MongoDB", "Redis", "Prisma", "Drizzle"], icon: Database },
    { tier: "Infra", items: ["Vercel", "AWS", "GCP", "Docker", "GitHub Actions", "Cloudflare"], icon: Cloud },
  ];

  const benchmarks = [
    { value: "100", suffix: "/100", label: "PageSpeed Score", icon: Gauge },
    { value: "<2s", suffix: "", label: "Time to Interactive", icon: Zap },
    { value: "99.9", suffix: "%", label: "Uptime SLA", icon: Activity },
    { value: "OWASP", suffix: "", label: "Security Hardened", icon: Shield },
  ];

  const services = [
    { title: "Custom Web Applications", desc: "Bespoke React + Next.js apps with bulletproof TypeScript, built to your exact spec.", icon: Code2 },
    { title: "SaaS MVPs", desc: "Idea to live MVP in 8–12 weeks. Auth, billing, dashboards, multi-tenancy — production ready.", icon: Rocket },
    { title: "API Engineering", desc: "REST + GraphQL APIs with auth, rate limiting, caching, and clean OpenAPI docs.", icon: Workflow },
    { title: "E-commerce Platforms", desc: "Headless commerce with Shopify, Medusa, or fully custom carts that scale to millions.", icon: Boxes },
    { title: "DevOps & CI/CD", desc: "GitHub Actions, automated testing, preview environments, zero-downtime deployments.", icon: GitBranch },
    { title: "Performance Engineering", desc: "From 6s loads to sub-2s. Edge caching, image pipelines, code splitting, CWV tuning.", icon: Gauge },
  ];

  const sprintFlow = [
    { week: "W1–2", title: "Discovery & Architecture", desc: "Workshops, technical RFC, signed-off architecture doc, Figma wireframes." },
    { week: "W3–8", title: "Sprint Build", desc: "2-week sprints. Friday demos. Automated tests, code reviews, preview URLs every PR." },
    { week: "W9", title: "QA & Hardening", desc: "Lighthouse, OWASP scan, load testing, accessibility audit, security review." },
    { week: "W10", title: "Launch & Handover", desc: "Production deploy, monitoring, full docs, repo handover. You own everything." },
  ];

  const faqs = [
    { q: "What tech stack do you build with?", a: "Frontend: React, Next.js, TypeScript, Tailwind. Backend: Node.js, Express, NestJS. Database: Postgres, MongoDB, Supabase. Infra: Vercel, AWS, GCP. We pick stack by problem, not trend." },
    { q: "How much does custom web development cost in Bangalore?", a: "Marketing sites: ₹2L–5L. SaaS MVPs: ₹6L–15L. Enterprise platforms: ₹15L–25L+. Fixed-scope quote shared after a free discovery call." },
    { q: "How long does a typical project take?", a: "Marketing sites: 4–6 weeks. SaaS MVPs: 8–12 weeks. Enterprise platforms: 4–6 months. Always 2-week sprints with weekly demos." },
    { q: "Do you offer ongoing maintenance?", a: "Yes. SLA-backed monthly retainers cover security patches, bug fixes, performance monitoring, and small feature releases." },
    { q: "Will I own the source code?", a: "100%. You own the code, the GitHub repo, and all IP. Full handover docs. Zero vendor lock-in." },
    { q: "Can you work with our existing dev team?", a: "Absolutely. We collaborate via shared GitHub, Slack, sprint planning — augmenting capacity without stepping on toes." },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Web Development Company in Bangalore | Custom Web Solutions</title>
        <meta name="description" content="Build a website that performs. Our web development agency in Bangalore creates fast, scalable websites built for your business goals. Let's Build!" />
        <meta name="keywords" content="web development company bangalore, website development services in bangalore, web development agency in bangalore, custom website development in bangalore" />
        <link rel="canonical" href="https://www.thesuper30.ai/web-development-company-bangalore" />
        <meta property="og:title" content="A Website That Performs Is Your Best Sales Tool. Period." />
        <meta property="og:description" content="Fast, scalable and custom web development solutions built around your business goals. Let's build!" />
        <meta name="twitter:title" content="A Website That Performs Is Your Best Sales Tool. Period." />
        <meta name="twitter:description" content="Fast, scalable and custom web development solutions built around your business goals. Let's build!" />
      </Helmet>

      <Navbar />

      {/* HERO — terminal/IDE aesthetic, dark canvas */}
      <section className="relative pt-32 pb-20 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-background/10 border border-background/20 text-background/80 text-xs font-mono mb-6">
                <Terminal className="w-3.5 h-3.5" />
                ~/super30 — building fast.
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
                Code that <span className="text-primary">ships</span>.<br />
                Sites that <span className="text-primary">scale</span>.
              </h1>
              <p className="text-lg text-background/70 mb-8 max-w-xl leading-relaxed">
                Custom-coded web applications engineered with React, Next.js, Node and modern cloud stacks — built to scale with your business, not against it.
              </p>

              <form onSubmit={handleSubmit} className="bg-background text-foreground rounded-2xl p-5 max-w-lg shadow-2xl">
                <div className="grid gap-3 mb-3">
                  <input required type="url" placeholder="Project URL or idea (yourapp.com)" value={website} onChange={e => setWebsite(e.target.value)} className="px-4 py-3 rounded-lg border border-border bg-background text-sm font-mono" />
                  <div className="grid grid-cols-2 gap-3">
                    <input required type="email" placeholder="Work email" value={email} onChange={e => setEmail(e.target.value)} className="px-4 py-3 rounded-lg border border-border bg-background text-sm" />
                    <input required type="tel" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} className="px-4 py-3 rounded-lg border border-border bg-background text-sm" />
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-foreground text-background font-semibold py-3.5 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2">
                  {isSubmitting ? "Sending..." : "$ run free-consultation"} <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-muted-foreground mt-3 text-center font-mono">scope + timeline + budget · 3 business days</p>
              </form>
            </div>

            {/* IDE / code preview */}
            <div className="relative">
              <div className="rounded-2xl bg-background/5 border border-background/10 backdrop-blur-sm overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-background/10 bg-background/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-xs font-mono text-background/50 ml-3">app/page.tsx</div>
                </div>
                <pre className="p-5 text-[13px] font-mono leading-relaxed text-background/90 overflow-x-auto">
{`export default function Page() {
  const { data } = useQuery({
    queryKey: ['revenue'],
    queryFn: getRevenue,
  });

  return (
    <Dashboard
      mrr={data.mrr}
      growth={data.growth}
      uptime="99.99%"
    />
  );
}`}
                </pre>
              </div>
              {/* Floating chips */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-2 rounded-lg shadow-xl text-xs font-bold rotate-3">
                <Gauge className="w-3.5 h-3.5 inline mr-1" /> 100/100 PageSpeed
              </div>
              <div className="absolute -bottom-4 -left-4 bg-background text-foreground px-3 py-2 rounded-lg shadow-xl text-xs font-bold -rotate-3">
                <Shield className="w-3.5 h-3.5 inline mr-1 text-primary" /> OWASP Hardened
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENCHMARKS */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benchmarks.map((b, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-black tracking-tight font-mono">{b.value}<span className="text-primary">{b.suffix}</span></div>
                  <div className="text-sm text-muted-foreground">{b.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <div className="text-sm font-mono font-bold text-primary mb-3 tracking-widest">// the stack</div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">Modern. Boring. Battle-tested.</h2>
            <p className="text-muted-foreground mt-4">The same tools that power Stripe, Vercel, Linear and Notion. No experimental frameworks. No tech debt.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stack.map((s, i) => (
              <div key={i} className="rounded-2xl border border-border p-6 hover:border-primary/50 transition">
                <s.icon className="w-8 h-8 text-primary mb-4" />
                <div className="text-lg font-bold mb-4">{s.tier}</div>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map(it => (
                    <span key={it} className="px-2.5 py-1 rounded-md bg-muted text-xs font-mono">{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="text-sm font-mono font-bold text-primary mb-3 tracking-widest">// what we build</div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">Engineering as a service</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition group">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPRINT TIMELINE */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <div className="text-sm font-mono font-bold text-primary mb-3 tracking-widest">// the sprint</div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">10 weeks. Idea → live.</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[60px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            {sprintFlow.map((s, i) => (
              <div key={i} className={`relative pl-32 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-10 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                <div className={`${i % 2 === 1 ? 'md:order-2 md:text-left' : ''}`}>
                  <div className="absolute left-[44px] md:left-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold md:-translate-x-1/2 ring-4 ring-background">
                    {i + 1}
                  </div>
                  <div className="absolute left-0 top-0 md:static font-mono text-xs font-bold text-primary mb-2">{s.week}</div>
                  <h3 className="text-xl font-bold mb-2 mt-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <div className="text-sm font-mono font-bold text-primary mb-3 tracking-widest">// faqs</div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">Engineering questions answered</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold">
                  {f.q}
                  <ArrowRight className={`w-5 h-5 transition-transform shrink-0 ${openFaq === i ? 'rotate-90 text-primary' : 'text-muted-foreground'}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — terminal style */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-foreground text-background p-12 lg:p-16 max-w-5xl mx-auto">
            <div className="font-mono text-sm text-background/50 mb-4">$ ./book-discovery-call</div>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Build a website that performs.</h2>
            <p className="text-lg text-background/70 mb-8 max-w-2xl">Share your project brief — we'll send back a scope, timeline, and budget in 3 business days. No commitment.</p>
            <Link to="/contact-us" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full hover:scale-105 transition">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
