import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  ShoppingCart, 
  Briefcase, 
  GraduationCap, 
  Stethoscope, 
  Rocket 
} from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "B2B SaaS",
    description: "Tech companies looking to dominate AI search results and generate qualified leads."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Online stores wanting to appear in AI shopping recommendations and product searches."
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Consultants, agencies, and service providers building thought leadership."
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description: "Educational platforms seeking to be recommended by AI for learning queries."
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Medical practices and health companies establishing trust in AI search."
  },
  {
    icon: Rocket,
    title: "Tech Startups",
    description: "Early-stage companies building AI-first digital presence from day one."
  }
];

export const TargetAudienceSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Who Is This For?
          </h2>
          <p className="text-lg text-slate-600">
            We help ambitious businesses across industries dominate AI search
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <Card 
              key={index} 
              className="bg-slate-50 border-slate-200 hover:border-orange-500/50 hover:shadow-lg transition-all group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <audience.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {audience.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
