import React from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, PenTool, Image, Search, TrendingUp, Video, Camera, ExternalLink, Eye, Heart, MessageCircle } from "lucide-react";

import magicbricksLogo from "@/assets/case-studies/magicbricks.png";
import logo1 from "@/assets/logos/logo-1.jpg";
import logo2 from "@/assets/logos/logo-2.jpg";
import logo3 from "@/assets/logos/logo-3.jpg";
import logo4 from "@/assets/logos/logo-4.jpg";

import logo6 from "@/assets/logos/logo-6.jpg";
import logo7 from "@/assets/logos/logo-7.jpg";
import logo8 from "@/assets/logos/logo-8.jpg";
import logo9 from "@/assets/logos/logo-9.jpg";
import logo10 from "@/assets/logos/logo-10.jpg";
import logo11 from "@/assets/logos/logo-11.jpg";
import brand1 from "@/assets/brand-identity/brand-1.jpg";
import brand2 from "@/assets/brand-identity/brand-2.jpg";
import brand3 from "@/assets/brand-identity/brand-3.jpg";
import brand4 from "@/assets/brand-identity/brand-4.jpg";
import brand5 from "@/assets/brand-identity/brand-5.jpg";
import brand6 from "@/assets/brand-identity/brand-6.jpg";
import brand7 from "@/assets/brand-identity/brand-7.jpg";
import brand8 from "@/assets/brand-identity/brand-8.jpg";
import brand9 from "@/assets/brand-identity/brand-9.jpg";
import brand10 from "@/assets/brand-identity/brand-10.jpg";
import brand11 from "@/assets/brand-identity/brand-11.jpg";
import brand12 from "@/assets/brand-identity/brand-12.jpg";
import brand13 from "@/assets/brand-identity/brand-13.jpg";
import creative1 from "@/assets/social-creatives/creative-1.png";
import creative2 from "@/assets/social-creatives/creative-2.png";
import creative3 from "@/assets/social-creatives/creative-3.png";
import creative4 from "@/assets/social-creatives/creative-4.png";
import creative5 from "@/assets/social-creatives/creative-5.png";
import creative6 from "@/assets/social-creatives/creative-6.png";
import creative7 from "@/assets/social-creatives/creative-7.png";
import creative8 from "@/assets/social-creatives/creative-8.png";
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
  { name: "Magicbricks", industry: "Real Estate", logo: magicbricksLogo, slug: "magicbricks" },
  { name: "Jain University", industry: "Education", logo: jainUniversityLogo, slug: "jain-university" },
  { name: "Mamaearth", industry: "D2C", logo: mamaEarthLogo, slug: "mamaearth" },
  { name: "upGrad", industry: "Education", logo: upgradLogo, slug: "upgrad" },
  { name: "Tata 1mg", industry: "Healthcare", logo: tata1mgLogo, slug: "tata-1mg" },
  { name: "Atria Institute", industry: "Education", logo: atriaInstituteLogo, slug: "atria-institute" },
  { name: "Bhrighu Academy", industry: "Education", logo: bhrighuAcademyLogo, slug: "bhrighu-academy" },
  { name: "Shriram Properties", industry: "Real Estate", logo: shriramLogo, slug: "shriram-properties" },
];

const leadGenClients = [
  { name: "Jain University", industry: "Education", logo: jainUniversityLogo, slug: "jain-university" },
  { name: "upGrad", industry: "Education", logo: upgradLogo, slug: "upgrad" },
  { name: "Magicbricks", industry: "Real Estate", logo: magicbricksLogo, slug: "magicbricks" },
  { name: "Atria Institute", industry: "Education", logo: atriaInstituteLogo, slug: "atria-institute" },
  { name: "Shriram Properties", industry: "Real Estate", logo: shriramLogo, slug: "shriram-properties" },
  { name: "Bhrighu Academy", industry: "Education", logo: bhrighuAcademyLogo, slug: "bhrighu-academy" },
];

/* ── Demo content for non-report tabs ── */

const logoImages = [logo1, logo2, logo3, logo4, logo6, logo7, logo8, logo9, logo10, logo11];

const LogoGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {logoImages.map((img, i) => (
      <Card key={i} className="bg-background border-border/50 overflow-hidden hover:shadow-lg transition-shadow group">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden">
            <img
              src={img}
              alt={`Logo design project ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);
const brandImages = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11, brand12, brand13];

const BrandIdentityGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {brandImages.map((img, i) => (
      <Card key={i} className="bg-background border-border/50 overflow-hidden hover:shadow-lg transition-shadow group">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden">
            <img
              src={img}
              alt={`Brand identity project ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const socialCreativeImages = [
  creative1, creative2, creative3, creative4,
  creative5, creative6, creative7, creative8,
];

const SocialCreativesGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {socialCreativeImages.map((img, i) => (
      <Card key={i} className="bg-background border-border/50 overflow-hidden hover:shadow-lg transition-shadow group">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden">
            <img
              src={img}
              alt={`Social media creative ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const ugcContent = [
  { title: "Product Unboxing", views: "45K", likes: "3.2K", comments: "412", accent: "hsl(145,60%,45%)" },
  { title: "Day-in-Life Vlog", views: "82K", likes: "6.8K", comments: "890", accent: "hsl(350,80%,55%)" },
  { title: "Student Testimonial", views: "28K", likes: "1.9K", comments: "215", accent: "hsl(210,70%,50%)" },
  { title: "How-To Guide", views: "35K", likes: "2.4K", comments: "320", accent: "hsl(160,60%,45%)" },
  { title: "Behind the Scenes", views: "52K", likes: "4.1K", comments: "560", accent: "hsl(25,90%,55%)" },
  { title: "Product Review", views: "19K", likes: "1.2K", comments: "145", accent: "hsl(220,80%,55%)" },
];

const ugcVideos = ["/videos/ugc-1.mp4", "/videos/ugc-2.mp4", "/videos/ugc-3.mp4", "/videos/ugc-4.mp4"];

const HoverVideo = ({ src }: { src: string }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  return (
    <Card
      className="bg-background border-border/50 overflow-hidden hover:shadow-lg transition-shadow"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => { if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } }}
    >
      <CardContent className="p-0">
        <div className="aspect-[9/16] overflow-hidden">
          <video
            ref={videoRef}
            src={src}
            className="w-full h-full object-cover"
            muted
            playsInline
            loop
            preload="metadata"
          />
        </div>
      </CardContent>
    </Card>
  );
};

const UGCGrid = () => (
  <div className="grid grid-cols-3 gap-4">
    {ugcVideos.map((src, i) => (
      <HoverVideo key={i} src={src} />
    ))}
    {ugcContent.map((item, i) => (
      <Card key={`placeholder-${i}`} className="bg-background border-border/50 overflow-hidden hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="aspect-[9/16] flex items-center justify-center relative" style={{ background: `linear-gradient(180deg, ${item.accent}18, ${item.accent}05)` }}>
            <Video className="w-10 h-10" style={{ color: item.accent }} />
            <div className="absolute bottom-2 left-2 right-2 bg-background/80 backdrop-blur-sm rounded-lg px-2 py-1.5">
              <div className="text-[11px] font-medium text-foreground truncate">{item.title}</div>
            </div>
          </div>
          <div className="p-3 flex items-center gap-3 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{item.views}</span>
            <span className="flex items-center gap-1"><Heart className="w-3 h-3" />{item.likes}</span>
            <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" />{item.comments}</span>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const photoshootProjects = [
  { product: "Skincare Range", client: "Mamaearth", shots: 48, style: "Flat Lay", accent: "hsl(145,60%,45%)" },
  { product: "Furniture Collection", client: "Luxe Interiors", shots: 32, style: "Lifestyle", accent: "hsl(35,60%,50%)" },
  { product: "Fitness Gear", client: "FitPulse", shots: 24, style: "Action", accent: "hsl(350,80%,55%)" },
  { product: "Food Menu", client: "UrbanBite", shots: 56, style: "Styled", accent: "hsl(25,90%,55%)" },
  { product: "Tech Gadgets", client: "TechVista", shots: 36, style: "Studio", accent: "hsl(220,80%,55%)" },
  { product: "Health Supplements", client: "PureWell", shots: 28, style: "Clean", accent: "hsl(160,60%,45%)" },
];

const PhotoshootGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
    {photoshootProjects.map((p, i) => (
      <Card key={i} className="bg-background border-border/50 overflow-hidden hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="aspect-square flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${p.accent}15, ${p.accent}05)` }}>
            <Camera className="w-12 h-12" style={{ color: p.accent, opacity: 0.6 }} />
          </div>
          <div className="p-4">
            <div className="font-semibold text-sm text-foreground">{p.product}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{p.client}</div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{p.style}</span>
              <span className="text-[11px] text-muted-foreground">{p.shots} shots</span>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const ClientReportGrid = ({ clients }: { clients: typeof seoClients }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {clients.map((client) => (
        <Card key={client.name} className="bg-background border-border/50 overflow-hidden">
          <CardContent className="p-6 flex flex-col items-center gap-4">
            <img src={client.logo} alt={client.name} className="h-14 w-auto object-contain" />
            <button
              onClick={() => navigate(`/report/${client.slug}`)}
              className="w-full text-sm font-medium py-2 px-4 rounded-lg text-white hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(to right, hsl(18,100%,48%), hsl(18,100%,38%))" }}
            >
              Detailed Report
            </button>
          </CardContent>
        </Card>
      ))}
    </div>
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

        <Tabs defaultValue="logo" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center h-auto gap-1 bg-transparent p-0 border-b border-border/50 rounded-none mb-8">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex items-center gap-1.5 text-xs md:text-sm px-4 py-2.5 rounded-t-lg border-b-2 border-transparent data-[state=active]:border-[hsl(18,100%,48%)] data-[state=active]:bg-[hsl(18,100%,48%)] data-[state=active]:text-white data-[state=active]:shadow-none text-muted-foreground hover:text-foreground transition-all bg-transparent"
              >
                <tab.icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="logo">
            <LogoGrid />
          </TabsContent>

          <TabsContent value="brand-identity">
            <BrandIdentityGrid />
          </TabsContent>

          <TabsContent value="social-creatives">
            <SocialCreativesGrid />
          </TabsContent>

          <TabsContent value="seo">
            <ClientReportGrid clients={seoClients} />
          </TabsContent>

          <TabsContent value="lead-generation">
            <ClientReportGrid clients={leadGenClients} />
          </TabsContent>

          <TabsContent value="ugc-content">
            <UGCGrid />
          </TabsContent>

          <TabsContent value="product-photoshoot">
            <PhotoshootGrid />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
