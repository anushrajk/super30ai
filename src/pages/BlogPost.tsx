import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Sparkles } from "lucide-react";

const blogData: Record<string, {
  title: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
  content: { type: "p" | "h2" | "h3" | "ul"; text: string | string[] }[];
}> = {
  "how-ai-is-changing-seo-2025": {
    title: "How AI is Changing SEO: What Founders Need to Know in 2025",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    author: "The Super 30 Team",
    category: "AI SEO Strategy",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    content: [
      { type: "p", text: "The search landscape is undergoing its most dramatic transformation in two decades. With the rise of AI-powered search experiences like Google AI Overviews, ChatGPT, and Perplexity, the way users discover and interact with content has fundamentally changed. For founders and business leaders, understanding these shifts isn't optional — it's essential for survival." },
      { type: "h2", text: "The Rise of AI-Powered Search" },
      { type: "p", text: "Google's AI Overviews now appear in over 40% of search queries, providing synthesized answers directly in the search results. ChatGPT processes over 100 million queries daily, and users increasingly trust AI-generated recommendations over traditional search results." },
      { type: "p", text: "This shift means that traditional SEO tactics — keyword stuffing, link building at scale, and thin content — are no longer sufficient. AI systems evaluate content quality, topical authority, and entity relationships in ways that are fundamentally different from traditional ranking algorithms." },
      { type: "h2", text: "What This Means for Your Business" },
      { type: "ul", text: ["Your content must be structured for AI consumption, not just human readers", "Entity-based SEO is replacing keyword-based optimization", "E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals matter more than ever", "Technical SEO foundations must support AI crawling and indexing", "Content depth and accuracy are weighted more heavily than content volume"] },
      { type: "h2", text: "How to Adapt Your Strategy" },
      { type: "p", text: "Start by auditing your current AI visibility. Check whether your brand appears in ChatGPT responses, Google AI Overviews, and Perplexity answers for your target queries. If you're invisible to AI, you're invisible to a growing segment of your audience." },
      { type: "p", text: "Next, restructure your content around entities and topics rather than individual keywords. Build comprehensive topic clusters that demonstrate deep expertise. Use structured data (Schema markup) to help AI systems understand your content's context and relationships." },
      { type: "h2", text: "The Bottom Line" },
      { type: "p", text: "AI is not replacing SEO — it's evolving it. The businesses that adapt fastest will capture the lion's share of AI-driven traffic and recommendations. Those that cling to outdated tactics will find themselves increasingly invisible in the new search landscape." },
    ],
  },
  "getting-cited-by-chatgpt-guide": {
    title: "Getting Cited by ChatGPT: A Complete Guide for B2B Brands",
    date: "Dec 10, 2024",
    readTime: "12 min read",
    author: "The Super 30 Team",
    category: "LLM Optimization",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=1200&h=600&fit=crop",
    content: [
      { type: "p", text: "Large language models like ChatGPT, Claude, and Gemini are becoming the new gatekeepers of business recommendations. When a founder asks ChatGPT 'What's the best CRM for startups?' or 'Which marketing agency should I hire?', the brands that appear in those responses capture high-intent demand that traditional search can't match." },
      { type: "h2", text: "Why LLM Citations Matter" },
      { type: "p", text: "Unlike traditional search where users see a list of links, LLM responses provide direct recommendations. When ChatGPT recommends your brand, it carries implicit trust — users treat AI recommendations similarly to personal referrals. Studies show that brands mentioned in AI responses see 3-5x higher conversion rates compared to traditional search traffic." },
      { type: "h2", text: "How LLMs Select Brands to Recommend" },
      { type: "ul", text: ["Training data prevalence: How often your brand appears in authoritative sources", "Content quality signals: Depth, accuracy, and comprehensiveness of your content", "Entity associations: How strongly your brand is linked to relevant topics", "Third-party validation: Reviews, case studies, and mentions from credible sources", "Recency and relevance: How current and contextually appropriate your content is"] },
      { type: "h2", text: "Tactical Steps to Get Cited" },
      { type: "p", text: "First, create definitive, comprehensive content around your core topics. LLMs favor content that serves as the authoritative source on a subject. Think 'ultimate guides' and 'complete frameworks' rather than brief blog posts." },
      { type: "p", text: "Second, build your brand's entity profile. Ensure consistent information across Wikipedia, Crunchbase, LinkedIn, and industry directories. The more authoritative sources that reference your brand in context, the more likely LLMs are to surface you." },
      { type: "p", text: "Third, generate genuine third-party mentions. Guest posts on industry publications, podcast appearances, conference talks, and customer case studies all contribute to your brand's training data footprint." },
      { type: "h2", text: "Measuring Your LLM Visibility" },
      { type: "p", text: "Regularly test your brand's visibility by asking relevant queries across ChatGPT, Claude, and Perplexity. Track how often you're mentioned, in what context, and against which competitors. This ongoing monitoring helps you identify gaps and measure progress over time." },
    ],
  },
  "roi-of-ai-seo-case-studies": {
    title: "The ROI of AI SEO: Case Studies from Our Top Clients",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    author: "The Super 30 Team",
    category: "Case Studies",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    content: [
      { type: "p", text: "Every marketing investment needs to prove its worth. AI SEO is no different. Over the past 12 months, we've tracked the precise revenue impact of AI SEO strategies across our client portfolio. The results speak for themselves — businesses that invest in AI-optimized search visibility see measurably higher returns than those relying on traditional SEO alone." },
      { type: "h2", text: "Case Study 1: SaaS Company — 340% Traffic Growth" },
      { type: "p", text: "A B2B SaaS company in the HR tech space came to us with stagnant organic traffic and zero AI visibility. Within 6 months of implementing our AI SEO strategy, they saw a 340% increase in organic traffic, appeared in 45+ ChatGPT responses for their target queries, and generated ₹2.3 Cr in pipeline directly attributable to organic search." },
      { type: "h2", text: "Case Study 2: E-commerce Brand — 280% Revenue Increase" },
      { type: "p", text: "An e-commerce brand selling premium wellness products was struggling to compete against larger competitors in traditional search. Our AI-first approach focused on building topical authority and securing AI citations. Results: 280% increase in organic revenue, 67% reduction in customer acquisition cost, and consistent mentions in Google AI Overviews for 30+ high-intent queries." },
      { type: "h2", text: "Case Study 3: Professional Services — 5x Lead Generation" },
      { type: "p", text: "A legal services firm wanted to establish thought leadership and generate high-quality inbound leads. Through our entity-based SEO and LLM optimization strategy, they achieved 5x increase in qualified leads, reduced average cost per lead by 58%, and became the top-cited legal consultancy in ChatGPT for their practice areas." },
      { type: "h2", text: "Key Patterns Across All Cases" },
      { type: "ul", text: ["AI visibility compounds over time — early movers capture disproportionate share", "Technical SEO foundations are essential prerequisites for AI optimization", "Content quality matters more than content quantity", "Entity-based strategies outperform keyword-based approaches consistently", "ROI from AI SEO typically exceeds traditional SEO by 2-4x within 6 months"] },
      { type: "h2", text: "Start Your AI SEO Journey" },
      { type: "p", text: "These results aren't anomalies — they're repeatable outcomes of a systematic AI-first SEO approach. The question isn't whether AI SEO works, but how quickly you can implement it before your competitors do." },
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? blogData[slug] : null;

  if (!blog) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Blog post not found</h1>
            <Link to="/">
              <Button><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const slugs = Object.keys(blogData);
  const currentIndex = slug ? slugs.indexOf(slug) : -1;
  const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null;

  return (
    <>
      <Helmet>
        <title>{blog.title} | The Super 30 Blog</title>
        <meta name="description" content={blog.content[0]?.type === "p" ? (blog.content[0].text as string).slice(0, 155) : blog.title} />
        <link rel="canonical" href={`https://www.thesuper30.ai/blog/${slug}`} />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto max-w-3xl">
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-3">
                {blog.category}
              </span>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="container mx-auto max-w-3xl px-4 py-6 border-b border-border">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5"><User className="w-4 h-4" />{blog.author}</div>
            <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{blog.date}</div>
            <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{blog.readTime}</div>
          </div>
        </div>

        {/* Content */}
        <article className="container mx-auto max-w-3xl px-4 py-8 md:py-12">
          <div className="prose prose-lg max-w-none">
            {blog.content.map((block, i) => {
              // Insert CRO banner after every 3rd block
              const elements: React.ReactNode[] = [];

              if (block.type === "p") {
                elements.push(<p key={`p-${i}`} className="text-muted-foreground leading-relaxed mb-6">{block.text as string}</p>);
              } else if (block.type === "h2") {
                elements.push(<h2 key={`h2-${i}`} className="text-xl md:text-2xl font-bold text-foreground mt-10 mb-4">{block.text as string}</h2>);
              } else if (block.type === "h3") {
                elements.push(<h3 key={`h3-${i}`} className="text-lg md:text-xl font-bold text-foreground mt-8 mb-3">{block.text as string}</h3>);
              } else if (block.type === "ul") {
                elements.push(
                  <ul key={`ul-${i}`} className="space-y-2 mb-6 pl-4">
                    {(block.text as string[]).map((item, j) => (
                      <li key={j} className="text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              // CRO Banner after every 4th content block
              if ((i + 1) % 4 === 0 && i < blog.content.length - 1) {
                elements.push(
                  <div key={`cro-${i}`} className="my-10 p-6 md:p-8 rounded-2xl bg-muted/50 border border-border text-center">
                    <Sparkles className="w-6 h-6 text-primary mx-auto mb-3" />
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                      Want to see how AI SEO can transform your business?
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Get a free AI visibility audit and discover untapped growth opportunities.
                    </p>
                    <Link to="/ai-seo-agency-bangalore">
                      <Button className="bg-brand-gradient hover:opacity-90 text-white">
                        Get Your Free Audit
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                );
              }

              return elements;
            })}
          </div>

          {/* Bottom CRO */}
          <div className="mt-12 p-6 md:p-10 rounded-2xl bg-muted/50 border border-border text-center">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              Ready to dominate AI-powered search?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Join 300+ brands that trust The Super 30 for AI SEO and performance marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/ai-seo-agency-bangalore">
                <Button size="lg" className="bg-brand-gradient hover:opacity-90 text-white">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Start Free Audit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/seo-agency-near-me">
                <Button size="lg" variant="outline">
                  Talk to Our Experts
                </Button>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-10 pt-8 border-t border-border flex justify-between">
            {prevSlug ? (
              <Link to={`/blog/${prevSlug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" /> Previous Article
              </Link>
            ) : <div />}
            {nextSlug ? (
              <Link to={`/blog/${nextSlug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Next Article <ArrowRight className="w-4 h-4" />
              </Link>
            ) : <div />}
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
