import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Palette, PenTool, Image, Search, TrendingUp, Video, Camera } from "lucide-react";

import magicbricksLogo from "@/assets/case-studies/magicbricks.png";
import mamaEarthLogo from "@/assets/case-studies/mamaearth.png";
import upgradLogo from "@/assets/case-studies/upgrad.png";
import tata1mgLogo from "@/assets/case-studies/tata1mg.png";
import shriramLogo from "@/assets/case-studies/shriram-properties.png";
import jainUniversityLogo from "@/assets/case-studies/jain-university.png";
import atriaInstituteLogo from "@/assets/case-studies/atria-institute.png";
import bhrighuAcademyLogo from "@/assets/case-studies/bhrighu-academy.png";

const tabs = [
  { id: "logo", label: "Logo", icon: PenTool },
  { id: "brand-identity", label: "Brand Identity", icon: Palette },
  { id: "social-creatives", label: "Social Creatives", icon: Image },
  { id: "seo", label: "SEO", icon: Search },
  { id: "lead-generation", label: "Lead Generation", icon: TrendingUp },
  { id: "ugc-content", label: "UGC Content", icon: Video },
  { id: "product-photoshoot", label: "Product Photoshoot", icon: Camera },
];

const seoClients = [
  { name: "Magicbricks", industry: "Real Estate", logo: magicbricksLogo },
  { name: "Jain University", industry: "Education", logo: jainUniversityLogo },
  { name: "Mamaearth", industry: "D2C", logo: mamaEarthLogo },
  { name: "upGrad", industry: "Education", logo: upgradLogo },
  { name: "Tata 1mg", industry: "Healthcare", logo: tata1mgLogo },
  { name: "Atria Institute", industry: "Education", logo: atriaInstituteLogo },
  { name: "Bhrighu Academy", industry: "Education", logo: bhrighuAcademyLogo },
  { name: "Shriram Properties", industry: "Real Estate", logo: shriramLogo },
];

const leadGenClients = [
  { name: "Jain University", industry: "Education", logo: jainUniversityLogo },
  { name: "upGrad", industry: "Education", logo: upgradLogo },
  { name: "Magicbricks", industry: "Real Estate", logo: magicbricksLogo },
  { name: "Atria Institute", industry: "Education", logo: atriaInstituteLogo },
  { name: "Shriram Properties", industry: "Real Estate", logo: shriramLogo },
  { name: "Bhrighu Academy", industry: "Education", logo: bhrighuAcademyLogo },
];

const DemoPlaceholder = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="text-center py-16 md:py-20">
    <div className="w-16 h-16 mx-auto bg-muted rounded-2xl flex items-center justify-center mb-4">
      <Icon className="w-7 h-7 text-muted-foreground" />
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground max-w-md mx-auto">{description}</p>
    <p className="text-xs text-muted-foreground mt-4">Coming Soon</p>
  </div>
);

const ClientReportGrid = ({ clients, type }: { clients: typeof seoClients; type: "seo" | "lead-gen" }) => {
  const [reportClient, setReportClient] = useState<typeof clients[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {clients.map((client) => (
          <Card key={client.name} className="bg-background border-border/50 overflow-hidden">
            <CardContent className="p-5 flex flex-col items-center text-center">
              <div className="w-full h-20 flex items-center justify-center mb-4">
                <img src={client.logo} alt={client.name} className="h-16 w-auto object-contain" />
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-0.5">{client.name}</h4>
              <p className="text-xs text-muted-foreground mb-4">{client.industry}</p>
              <Button
                size="sm"
                onClick={() => setReportClient(client)}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs"
              >
                <FileText className="w-3.5 h-3.5 mr-1.5" />
                View Detailed Report
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {reportClient && (
        <SEOReportModal
          open={!!reportClient}
          onOpenChange={(open) => !open && setReportClient(null)}
          companyName={reportClient.name}
          logo={reportClient.logo}
        />
      )}
    </>
  );
};

export const WorkPortfolioTabs = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Our <span className="text-brand-gradient">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our work across different services and see the impact we've created for our clients.
          </p>
        </div>

        <Tabs defaultValue="seo" className="w-full">
          <TabsList className="w-full flex flex-wrap h-auto gap-1.5 bg-muted/50 p-1.5 rounded-xl mb-8">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex items-center gap-1.5 text-xs md:text-sm px-3 py-2 rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                <tab.icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="logo">
            <DemoPlaceholder icon={PenTool} title="Logo Design Portfolio" description="Our collection of custom logo designs crafted for brands across industries." />
          </TabsContent>

          <TabsContent value="brand-identity">
            <DemoPlaceholder icon={Palette} title="Brand Identity Projects" description="Complete brand identity systems including guidelines, collateral, and visual language." />
          </TabsContent>

          <TabsContent value="social-creatives">
            <DemoPlaceholder icon={Image} title="Social Media Creatives" description="Engaging social media content designed to drive engagement and brand awareness." />
          </TabsContent>

          <TabsContent value="seo">
            <ClientReportGrid clients={seoClients} type="seo" />
          </TabsContent>

          <TabsContent value="lead-generation">
            <ClientReportGrid clients={leadGenClients} type="lead-gen" />
          </TabsContent>

          <TabsContent value="ugc-content">
            <DemoPlaceholder icon={Video} title="UGC Content Portfolio" description="User-generated content campaigns that drive authentic engagement and conversions." />
          </TabsContent>

          <TabsContent value="product-photoshoot">
            <DemoPlaceholder icon={Camera} title="Product Photoshoot Gallery" description="Professional product photography that elevates brand perception and drives sales." />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
