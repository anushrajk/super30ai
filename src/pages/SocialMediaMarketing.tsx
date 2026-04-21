import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Megaphone, ArrowRight, TrendingUp, Users, Target, DollarSign,
  Instagram, Facebook, Linkedin, Youtube, Heart, MessageCircle, Share2, Bookmark,
  Play, BarChart3, Zap, Eye, MousePointerClick, Sparkles, Flame, Rocket,
} from "lucide-react";

const SocialMediaMarketing = () => {
  const { submitLead, isSubmitting } = useLeadSubmit({ source: "social_media_marketing" });
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitLead({ website_url: website, email, phone });
  };

  const platforms = [
    { icon: Instagram, name: "Instagram", reach: "2B+", color: "from-pink-500 to-orange-500" },
    { icon: Facebook, name: "Facebook", reach: "3B+", color: "from-blue-600 to-blue-400" },
    { icon: Linkedin, name: "LinkedIn", reach: "1B+", color: "from-sky-700 to-sky-500" },
    { icon: Youtube, name: "YouTube", reach: "2.5B+", color: "from-red-600 to-red-400" },
  ];

  const metrics = [
    { value: "4.2x", label: "Average ROAS", icon: TrendingUp },
    { value: "150+", label: "Brands Scaled", icon: Users },
    { value: "100M+", label: "Impressions Delivered", icon: Eye },
    { value: "32%", label: "Lower CAC", icon: DollarSign },
  ];

  const playbook = [
    { step: "01", title: "Audit & Listen", desc: "Deep dive into your channels, audience, competitors. We map what's working, what's leaking budget, and where the white space is.", icon: Eye },
    { step: "02", title: "Strategy & Hooks", desc: "Build a 90-day content + paid roadmap. Hook-led creatives, audience pillars, funnel stages — TOFU to BOFU.", icon: Target },
    { step: "03", title: "Production Sprint", desc: "In-house creators ship reels, statics, carousels, UGC every week. Brand-safe, on-trend, on-brief.", icon: Sparkles },
    { step: "04", title: "Launch & Iterate", desc: "Campaigns go live in 7 days. Daily optimisation. Weekly creative refresh. Monthly strategic review.", icon: Rocket },
  ];

  const caseSnaps = [
    { brand: "D2C Skincare", metric: "6.8x ROAS", detail: "in 90 days on Meta Ads", tag: "E-commerce" },
    { brand: "B2B SaaS", metric: "412 SQLs", detail: "via LinkedIn in Q1", tag: "LinkedIn" },
    { brand: "Restaurant Chain", metric: "+340%", detail: "Instagram followers", tag: "Organic" },
    { brand: "EdTech Brand", metric: "₹47 CPL", detail: "across Meta + IG", tag: "Lead Gen" },
  ];

  const faqs = [
    { q: "How much do your social media marketing services in Bangalore cost?", a: "Retainers start at ₹50,000/month for one platform. Multi-channel + paid ad management scales based on spend, creative volume, and complexity." },
    { q: "Which platforms do you manage?", a: "Meta (Facebook + Instagram), LinkedIn, YouTube, and Twitter/X. We pick channels based on where your audience actually converts — not where it's trendy." },
    { q: "Do you handle ad spend or only management fees?", a: "Ad spend is paid directly by you to the platforms. We charge a separate management fee for strategy, creative, and optimisation. Zero markups." },
    { q: "How long before I see results?", a: "Paid social campaigns generate qualified leads in 14–30 days. Organic community growth compounds over 3–6 months." },
    { q: "Do you create the ad creatives too?", a: "Yes. In-house creative team produces statics, motion, reels, UGC-style videos — all built around campaign objectives, not vibes." },
    { q: "Is there a lock-in contract?", a: "No. Monthly retainers with a 30-day notice period. We earn the renewal every month through results." },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Social Media Marketing Agency in Bangalore | SMM Services</title>
        <meta name="description" content="Grow your brand with a social media marketing company in Bangalore. We run Meta Ads, Instagram & LinkedIn campaigns that drive real engagement & ROI." />
        <meta name="keywords" content="social media marketing company bangalore, social media marketing agency bangalore, social media marketing services bangalore, facebook marketing agency bangalore, social media agency bangalore, social media advertising company in bangalore, linkedin marketing in bangalore" />
        <link rel="canonical" href="https://www.thesuper30.ai/social-media-marketing-agency-bangalore" />
        <meta property="og:title" content="Likes Don't Pay Bills. But Our Social Media Strategy Does." />
        <meta property="og:description" content="Meta Ads to LinkedIn. We turn followers into real customers. Let's make social media work for you!" />
        <meta name="twitter:title" content="Likes Don't Pay Bills. But Our Social Media Strategy Does." />
        <meta name="twitter:description" content="Meta Ads to LinkedIn. We turn followers into real customers. Let's make social media work for you!" />
      </Helmet>

      <Navbar />

      {/* HERO — Magazine split with live phone mockup */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Flame className="w-4 h-4" />
                Social-First Growth Studio · Bangalore
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
                Likes don't pay bills.<br />
                <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                  Strategy does.
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Full-funnel social marketing across <span className="text-foreground font-semibold">Meta, Instagram, LinkedIn & YouTube</span> — engineered to grow followers, drive engagement, and convert audiences into paying customers.
              </p>

              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-5 shadow-lg max-w-xl">
                <div className="grid sm:grid-cols-3 gap-3 mb-3">
                  <input required type="url" placeholder="Your website" value={website} onChange={e => setWebsite(e.target.value)} className="px-4 py-3 rounded-xl border border-border bg-background text-sm" />
                  <input required type="email" placeholder="Work email" value={email} onChange={e => setEmail(e.target.value)} className="px-4 py-3 rounded-xl border border-border bg-background text-sm" />
                  <input required type="tel" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} className="px-4 py-3 rounded-xl border border-border bg-background text-sm" />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2">
                  {isSubmitting ? "Sending..." : "Get My Free Social Audit"} <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-muted-foreground mt-3 text-center">90-day growth plan delivered in 5 business days · No spam</p>
              </form>
            </div>

            {/* Phone mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-[280px] h-[560px] rounded-[3rem] bg-foreground p-3 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-[2.5rem] bg-background overflow-hidden flex flex-col">
                  <div className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 px-4 py-3 flex items-center justify-between text-white text-sm font-semibold">
                    <Instagram className="w-5 h-5" /> @yourbrand
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-muted to-background p-4 space-y-3">
                    <div className="bg-card rounded-2xl p-4 border border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <div className="text-xs font-bold">yourbrand</div>
                      </div>
                      <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/30 via-pink-300/30 to-orange-300/30 mb-3 flex items-center justify-center">
                        <Play className="w-12 h-12 text-foreground/70" fill="currentColor" />
                      </div>
                      <div className="flex gap-4 text-foreground">
                        <Heart className="w-5 h-5" />
                        <MessageCircle className="w-5 h-5" />
                        <Share2 className="w-5 h-5" />
                        <Bookmark className="w-5 h-5 ml-auto" />
                      </div>
                      <div className="text-xs mt-2 font-semibold">14,832 likes</div>
                    </div>
                    <div className="bg-primary text-primary-foreground rounded-xl p-3 text-xs font-semibold flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" /> +340% reach this week
                    </div>
                  </div>
                </div>
                {/* Floating metric chip */}
                <div className="absolute -left-12 top-20 bg-card border border-border rounded-xl px-3 py-2 shadow-lg -rotate-6">
                  <div className="text-[10px] text-muted-foreground">ROAS</div>
                  <div className="text-lg font-black text-primary">6.8x</div>
                </div>
                <div className="absolute -right-10 bottom-32 bg-card border border-border rounded-xl px-3 py-2 shadow-lg rotate-6">
                  <div className="text-[10px] text-muted-foreground">CPL</div>
                  <div className="text-lg font-black text-primary">₹47</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS BAR */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <m.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-black tracking-tight">{m.value}</div>
                  <div className="text-sm text-muted-foreground">{m.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS — large cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <div className="text-sm font-bold text-primary mb-3 tracking-widest uppercase">Channels we run</div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">Every platform. One playbook.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {platforms.map((p, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl border border-border p-6 hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <p.icon className="w-10 h-10 mb-4" />
                <div className="text-2xl font-black mb-1">{p.name}</div>
                <div className="text-sm text-muted-foreground">{p.reach} monthly users</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLAYBOOK — alternating timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-sm font-bold text-primary mb-3 tracking-widest uppercase">The playbook</div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">From audit to ROAS in 90 days</h2>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            {playbook.map((p, i) => (
              <div key={i} className={`flex flex-col md:flex-row gap-6 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/3 flex md:justify-center">
                  <div className="text-7xl lg:text-8xl font-black text-primary/20">{p.step}</div>
                </div>
                <div className="md:w-2/3 bg-card rounded-2xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <p.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{p.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE SNAPSHOTS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-sm font-bold text-primary mb-3 tracking-widest uppercase">Receipts</div>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight">Numbers, not narratives</h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {caseSnaps.map((c, i) => (
              <div key={i} className="rounded-2xl border border-border p-6 hover:bg-muted/40 transition">
                <div className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wider">{c.tag}</div>
                <div className="text-4xl font-black text-primary mb-2">{c.metric}</div>
                <div className="text-sm text-muted-foreground mb-4">{c.detail}</div>
                <div className="text-base font-bold border-t border-border pt-3">{c.brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <div className="text-sm font-bold text-primary mb-3 tracking-widest uppercase">FAQs</div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">Real questions, straight answers</h2>
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

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground p-12 lg:p-16 text-center max-w-5xl mx-auto">
            <Megaphone className="w-12 h-12 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Ready to make social drive revenue?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Free 30-min channel audit + a 90-day growth plan tailored to your business.</p>
            <Link to="/contact-us" className="inline-flex items-center gap-2 bg-background text-foreground font-bold px-8 py-4 rounded-full hover:scale-105 transition">
              Book My Free Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMediaMarketing;
