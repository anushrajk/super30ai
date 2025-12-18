import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  MessageSquare, 
  Network, 
  LineChart, 
  FileText, 
  Settings,
  Zap,
  Link2
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "AI Search & Intent Mapping",
    description: "Understand how AI interprets search queries and optimize your content to match user intent at every stage.",
    color: "bg-blue-500"
  },
  {
    icon: MessageSquare,
    title: "AI Prompt & Generative Search Optimization",
    description: "Get your brand recommended by ChatGPT, Perplexity, and other AI assistants for relevant queries.",
    color: "bg-purple-500"
  },
  {
    icon: Network,
    title: "Entity & Knowledge Graph SEO",
    description: "Build your brand's presence in Google's Knowledge Graph and establish topical authority.",
    color: "bg-green-500"
  },
  {
    icon: LineChart,
    title: "Predictive & Data-Driven SEO",
    description: "Use AI to predict algorithm changes and adapt your strategy before competitors.",
    color: "bg-orange-500"
  },
  {
    icon: FileText,
    title: "AI Content Framework",
    description: "Create content that AI understands, values, and recommends to users.",
    color: "bg-pink-500"
  },
  {
    icon: Settings,
    title: "Technical AI SEO",
    description: "Optimize your site's technical foundation for AI crawlers and understanding.",
    color: "bg-cyan-500"
  },
  {
    icon: Zap,
    title: "AI SEO + CRO",
    description: "Convert AI-driven traffic into customers with optimized user experiences.",
    color: "bg-yellow-500"
  },
  {
    icon: Link2,
    title: "AI Link & Brand Signal Optimization",
    description: "Build authority signals that AI search engines trust and value.",
    color: "bg-indigo-500"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our AI SEO Services
          </h2>
          <p className="text-lg text-slate-400">
            Comprehensive solutions to dominate AI-powered search
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all group hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
