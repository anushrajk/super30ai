import React from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, PenTool, Image, Search, TrendingUp, Video, Camera, ExternalLink, Eye, Heart, MessageCircle, Volume2, VolumeX, ArrowLeft, ArrowRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import bookMyScansReport from "@/assets/seo-reports/bookmyscans-report.png";
import suranaReport from "@/assets/seo-reports/surana-report.png";
import harvestReport from "@/assets/seo-reports/harvest-report.png";

import magicbricksLogo from "@/assets/case-studies/magicbricks.png";
import bookMyScansLogo from "@/assets/case-studies/book-my-scans.png";
import suranaLogo from "@/assets/case-studies/surana-educational.png";
import harvestLogo from "@/assets/case-studies/harvest-international.png";
import aadhyaLogo from "@/assets/case-studies/aadhya-animatics.png";
import interiorsLogo from "@/assets/case-studies/interiors-and-more.png";
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
import da360Logo from "@/assets/logos/digital-academy-360.png";
import kashtiLogo from "@/assets/logos/kashti.png";
import icsLogo from "@/assets/logos/ics.png";
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
import brand14 from "@/assets/brand-identity/brand-14.jpg";
import brand15 from "@/assets/brand-identity/brand-15.jpg";
import brand16 from "@/assets/brand-identity/brand-16.jpg";
import brand17 from "@/assets/brand-identity/brand-17.jpg";
import brand18 from "@/assets/brand-identity/brand-18.jpg";
import brand19 from "@/assets/brand-identity/brand-19.jpg";
import brand20 from "@/assets/brand-identity/brand-20.jpg";
import brand21 from "@/assets/brand-identity/brand-21.jpg";
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
  { id: "logo", label: "Logo", icon: PenTool, caption: "Crafting identities that stick in every mind." },
  { id: "brand-identity", label: "Brand Identity", icon: Palette, caption: "Building brands that speak before you do." },
  { id: "social-creatives", label: "Social Creatives", icon: Image, caption: "Scroll-stopping designs for the social age." },
  { id: "seo", label: "SEO", icon: Search, caption: "Ranking you where your customers are searching." },
  { id: "lead-generation", label: "Lead Generation", icon: TrendingUp, caption: "Turning clicks into conversations that convert." },
  { id: "ugc-content", label: "UGC Content", icon: Video, caption: "Authentic content that builds real trust." },
  { id: "product-photoshoot", label: "Product Photoshoot", icon: Camera, caption: "Making your products the hero of every frame." },
];

const seoClients = [
  { name: "Book My Scans", industry: "Healthcare", logo: bookMyScansLogo, slug: "book-my-scans", bgColor: "#7ED957", reportImage: bookMyScansReport, metrics: [{ label: "Organic Traffic", value: "+320%" }, { label: "Keywords Ranked", value: "1,200+" }, { label: "Domain Authority", value: "+18" }] },
  { name: "Surana Educational Institutions", industry: "Education", logo: suranaLogo, slug: "surana-educational", bgColor: "#ffffff", reportImage: suranaReport, metrics: [{ label: "Organic Traffic", value: "+195%" }, { label: "Keywords Ranked", value: "850+" }, { label: "Lead Growth", value: "+140%" }] },
  { name: "Harvest International School", industry: "Education", logo: harvestLogo, slug: "harvest-international", bgColor: "#ffffff", metrics: [{ label: "Organic Traffic", value: "+30%" }, { label: "Keywords Ranked", value: "420+" }, { label: "Visibility", value: "+65%" }] },
  { name: "Interiors & More", industry: "Home Decor", logo: interiorsLogo, slug: "interiors-and-more", bgColor: "#ffffff", metrics: [{ label: "Organic Traffic", value: "+250%" }, { label: "Keywords Ranked", value: "680+" }, { label: "Conversions", value: "+90%" }] },
];

const leadGenClients = [
  { name: "Aadhya Animatics", industry: "Animation", logo: aadhyaLogo, slug: "aadhya-animatics", bgColor: "#000000", metrics: [{ label: "Leads Generated", value: "2,500+" }, { label: "Cost Per Lead", value: "-45%" }, { label: "Conversion Rate", value: "+120%" }] },
  { name: "Interiors & More", industry: "Home Decor", logo: interiorsLogo, slug: "interiors-and-more", bgColor: "#ffffff", metrics: [{ label: "Leads Generated", value: "1,800+" }, { label: "Cost Per Lead", value: "-38%" }, { label: "ROI", value: "+210%" }] },
];

/* ── Demo content for non-report tabs ── */

const logoImages = [da360Logo, kashtiLogo, icsLogo, logo1, logo2, logo3, logo4, logo6, logo7, logo8, logo10, logo11];

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
const brandImages = [brand14, brand15, brand16, brand17, brand18, brand19, brand20, brand21, brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11, brand12, brand13];

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

const ugcVideos = [
  { src: "/videos/ugc-1.mp4", poster: "/videos/ugc-1-thumb.png" },
  { src: "/videos/ugc-2.mp4" },
  { src: "/videos/ugc-3.mp4", poster: "/videos/ugc-3-thumb.png" },
  { src: "/videos/ugc-4.mp4", poster: "/videos/ugc-4-thumb.png" },
  { src: "/videos/ugc-5.mp4" },
  { src: "/videos/ugc-6.mp4" },
  { src: "/videos/ugc-7.mp4", poster: "/videos/ugc-7-thumb.jpg" },
  { src: "/videos/ugc-reel-5.mp4", poster: "/videos/ugc-8-thumb.png" },
];

const HoverVideo = ({ src, poster }: { src: string; poster?: string }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = React.useState(true);
  const [isHovered, setIsHovered] = React.useState(false);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <Card
      className="bg-background border-border/50 overflow-hidden hover:shadow-lg transition-shadow"
      onMouseEnter={() => { setIsHovered(true); videoRef.current?.play(); }}
      onMouseLeave={() => { setIsHovered(false); if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } }}
    >
      <CardContent className="p-0">
        <div className="aspect-[9/16] overflow-hidden relative group">
          {poster && (
            <img
              src={poster}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            />
          )}
          <video
            ref={videoRef}
            src={src}
            className="w-full h-full object-cover"
            muted
            playsInline
            loop
            preload="metadata"
          />
          <button
            onClick={toggleMute}
            className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-foreground hover:bg-background/90 z-20"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

const UGCGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {ugcVideos.map((video, i) => (
      <HoverVideo key={i} src={video.src} poster={video.poster} />
    ))}
  </div>
);

import photoshootSkincare from "@/assets/photoshoots/skincare-flatlay.jpg";
import photoshootFurniture from "@/assets/photoshoots/furniture-lifestyle.jpg";
import photoshootFitness from "@/assets/photoshoots/fitness-action.jpg";
import photoshootFood from "@/assets/photoshoots/food-styled.jpg";
import photoshootTech from "@/assets/photoshoots/tech-studio.jpg";
import photoshootSupplements from "@/assets/photoshoots/supplements-clean.jpg";

const photoshootProjects = [
  { product: "Skincare Range", client: "GlowNest", shots: 48, style: "Flat Lay", accent: "hsl(340,60%,65%)", image: photoshootSkincare },
  { product: "Furniture Collection", client: "Luxe Interiors", shots: 32, style: "Lifestyle", accent: "hsl(35,60%,50%)", image: photoshootFurniture },
  { product: "Fitness Gear", client: "FitPulse", shots: 24, style: "Action", accent: "hsl(350,80%,55%)", image: photoshootFitness },
  { product: "Food Menu", client: "UrbanBite", shots: 56, style: "Styled", accent: "hsl(25,90%,55%)", image: photoshootFood },
  { product: "Tech Gadgets", client: "TechVista", shots: 36, style: "Studio", accent: "hsl(220,80%,55%)", image: photoshootTech },
  { product: "Health Supplements", client: "PureWell", shots: 28, style: "Clean", accent: "hsl(160,60%,45%)", image: photoshootSupplements },
];

const PhotoshootGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
    {photoshootProjects.map((p, i) => (
      <Card key={i} className="bg-background border-border/50 overflow-hidden hover:shadow-lg transition-shadow group">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden">
            <img
              src={p.image}
              alt={`${p.product} - ${p.client}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              width={1024}
              height={1024}
            />
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

const SEOCarousel = ({ clients }: { clients: { name: string; industry: string; logo: string; slug: string; bgColor?: string; reportImage?: string; metrics?: { label: string; value: string }[] }[] }) => {
  const navigate = useNavigate();
  const [reportOpen, setReportOpen] = React.useState(false);
  const [reportImage, setReportImage] = React.useState<string | null>(null);
  const [current, setCurrent] = React.useState(0);
  const total = clients.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  // Auto-advance every 5s
  React.useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const client = clients[current];

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Main carousel card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-muted/60 via-background to-muted/40 border border-border/40 shadow-2xl">
        <div className="flex flex-col md:flex-row items-stretch min-h-[400px] md:min-h-[450px]">
          {/* Left: Logo area */}
          <div
            className="flex-1 flex items-center justify-center border-b md:border-b-0 md:border-r border-border/20 overflow-hidden transition-colors duration-500"
            style={{ backgroundColor: client.bgColor || undefined }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="w-full h-full object-contain p-6 transition-all duration-500"
              key={current}
            />
          </div>

          {/* Right: Info & Metrics */}
          <div className="flex-1 flex flex-col justify-center p-8 md:p-12 space-y-6">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                {client.industry}
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">{client.name}</h3>
            </div>

            {/* Metrics */}
            {client.metrics && (
              <div className="grid grid-cols-3 gap-3">
                {client.metrics.map((m, i) => (
                  <div key={i} className="bg-muted/50 rounded-xl p-4 text-center border border-border/20">
                    <div className="text-xl md:text-2xl font-bold text-primary">{m.value}</div>
                    <div className="text-[11px] md:text-xs text-muted-foreground mt-1 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => {
                if (client.reportImage) {
                  setReportImage(client.reportImage);
                  setReportOpen(true);
                } else {
                  navigate(`/report/${client.slug}`);
                }
              }}
              className="inline-flex items-center gap-2 self-start bg-brand hover:bg-brand/90 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              View Full Report
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Report Screenshot Modal */}
      <Dialog open={reportOpen} onOpenChange={setReportOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-2 bg-background border-border/30">
          {reportImage && (
            <img src={reportImage} alt="SEO Report" className="w-full h-auto rounded-lg" />
          )}
        </DialogContent>
      </Dialog>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur border border-border/50 shadow-lg flex items-center justify-center text-foreground hover:bg-muted transition-colors z-10"
        aria-label="Previous"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur border border-border/50 shadow-lg flex items-center justify-center text-foreground hover:bg-muted transition-colors z-10"
        aria-label="Next"
      >
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {clients.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className="flex items-center justify-center gap-3 mt-4">
        {clients.map((c, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-16 h-12 md:w-20 md:h-14 rounded-xl border-2 overflow-hidden transition-all duration-300 ${
              i === current ? "border-primary shadow-md scale-105" : "border-border/30 opacity-50 hover:opacity-80"
            }`}
            style={{ backgroundColor: c.bgColor || undefined }}
          >
            <img src={c.logo} alt={c.name} className="w-full h-full object-contain p-1.5" />
          </button>
        ))}
      </div>
    </div>
  );
};

const ClientReportGrid = ({ clients }: { clients: typeof leadGenClients }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {clients.map((client) => (
        <Card
          key={client.name}
          className="group bg-background border-border/30 overflow-hidden cursor-pointer hover:shadow-lg hover:border-border/60 transition-all duration-300 rounded-2xl"
          onClick={() => navigate(`/report/${client.slug}`)}
        >
          <CardContent className="p-0">
            <div className="flex items-center justify-center h-44 bg-muted/30 border-b border-border/20 overflow-hidden">
              <img src={client.logo} alt={client.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-foreground">{client.name}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{client.industry}</p>
              </div>
              <button
                className="flex items-center gap-1.5 text-xs font-semibold text-white bg-brand px-3 py-2 rounded-lg hover:bg-brand/90 transition-colors whitespace-nowrap"
                onClick={(e) => { e.stopPropagation(); navigate(`/report/${client.slug}`); }}
              >
                View Report
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export const WorkPortfolioTabs = () => {
  const [activeTab, setActiveTab] = React.useState("logo");
  const activeCaption = tabs.find((t) => t.id === activeTab)?.caption ?? "";

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

        <Tabs defaultValue="logo" value={activeTab} onValueChange={setActiveTab} className="w-full">
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

          <p className="text-center text-sm md:text-base text-muted-foreground italic mb-8 transition-all duration-300">
            {activeCaption}
          </p>

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
            <SEOCarousel clients={seoClients} />
          </TabsContent>

          <TabsContent value="lead-generation">
            <SEOCarousel clients={leadGenClients} />
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
