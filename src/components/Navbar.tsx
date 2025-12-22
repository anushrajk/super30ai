import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Bot, Target, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import super30Logo from "@/assets/super30-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const services = [
  {
    title: "AI SEO Services",
    description: "Dominate AI search results and LLM citations",
    href: "/ai-seo",
    icon: Bot,
    color: "text-[hsl(var(--brand-orange))]",
  },
  {
    title: "Performance Marketing",
    description: "ROI-driven paid advertising across all platforms",
    href: "/performance-marketing",
    icon: Target,
    color: "text-blue-500",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={super30Logo} 
              alt="Super 30 Marketing Agency" 
              className="h-10 md:h-12 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 ml-auto mr-4">
            <Link
              to="/about"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                location.pathname === "/about"
                  ? "text-brand"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <span className="link-underline">Team 30</span>
              {location.pathname === "/about" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand" />
              )}
            </Link>

            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`px-4 py-2 text-sm font-medium transition-colors bg-transparent hover:bg-muted/50 ${
                      location.pathname.includes("/ai-seo") ||
                      location.pathname.includes("/performance-marketing")
                        ? "text-[hsl(var(--brand-orange))]"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-popover border border-border rounded-xl shadow-xl">
                      <div className="grid gap-3">
                        {services.map((service) => (
                          <NavigationMenuLink key={service.href} asChild>
                            <Link
                              to={service.href}
                              className="group flex items-start gap-4 p-3 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/50 transition-all duration-300"
                            >
                              <div className="w-10 h-10 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center group-hover:bg-[hsl(var(--brand-orange))]/10 group-hover:border-[hsl(var(--brand-orange))]/30 transition-all duration-300">
                                <service.icon className={`w-5 h-5 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold text-foreground group-hover:text-[hsl(var(--brand-orange))] transition-colors duration-300">
                                    {service.title}
                                  </span>
                                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[hsl(var(--brand-orange))]" />
                                </div>
                                <p className="text-sm text-muted-foreground mt-0.5">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/work"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                location.pathname === "/work"
                  ? "text-brand"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <span className="link-underline">Our Work</span>
              {location.pathname === "/work" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand" />
              )}
            </Link>

            <Link
              to="/contact"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                location.pathname === "/contact"
                  ? "text-brand"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <span className="link-underline">Contact</span>
              {location.pathname === "/contact" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand" />
              )}
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="outline"
              onClick={() => setShowEnquiryPopup(true)}
              className="border-2 border-[hsl(var(--brand-orange))] text-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/10"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Enquire Now
            </Button>
            <Link to="/ai-seo">
              <Button className="bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold shadow-lg shadow-[hsl(var(--brand-orange))]/25 hover:shadow-[hsl(var(--brand-orange))]/40 hover:scale-105 transition-all duration-300">
                <Sparkles className="w-4 h-4 mr-2" />
                Get Free Audit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/50 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 md:top-20 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-xl transition-all duration-300 z-50 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-2">
            <Link
              to="/about"
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 border ${
                location.pathname === "/about"
                  ? "bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] border-[hsl(var(--brand-orange))]/30"
                  : "text-foreground border-transparent hover:bg-muted/50 hover:border-border/50"
              }`}
            >
              Team 30
            </Link>

            {/* Services Section */}
            <div className="px-4 py-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Services
              </p>
              <div className="grid gap-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className={`group flex items-center gap-3 p-3 rounded-xl text-sm transition-all duration-300 border ${
                      location.pathname === service.href
                        ? "bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] border-[hsl(var(--brand-orange))]/30"
                        : "bg-muted/30 text-foreground border-border/50 hover:bg-muted/50 hover:border-[hsl(var(--brand-orange))]/30"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-background border border-border/50 flex items-center justify-center group-hover:bg-[hsl(var(--brand-orange))]/10 group-hover:border-[hsl(var(--brand-orange))]/30 transition-all duration-300">
                      <service.icon className={`w-5 h-5 ${service.color}`} />
                    </div>
                    <div>
                      <span className="font-semibold group-hover:text-[hsl(var(--brand-orange))] transition-colors duration-300">
                        {service.title}
                      </span>
                      <p className="text-xs text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/work"
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 border ${
                location.pathname === "/work"
                  ? "bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] border-[hsl(var(--brand-orange))]/30"
                  : "text-foreground border-transparent hover:bg-muted/50 hover:border-border/50"
              }`}
            >
              Our Work
            </Link>

            <Link
              to="/contact"
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 border ${
                location.pathname === "/contact"
                  ? "bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] border-[hsl(var(--brand-orange))]/30"
                  : "text-foreground border-transparent hover:bg-muted/50 hover:border-border/50"
              }`}
            >
              Contact
            </Link>

            <div className="pt-4 mt-2 border-t border-border/50 space-y-3">
              <Button 
                variant="outline"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setShowEnquiryPopup(true);
                }}
                className="w-full border-2 border-[hsl(var(--brand-orange))] text-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/10"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Enquire Now
              </Button>
              <Link to="/ai-seo" className="block">
                <Button className="w-full bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold shadow-lg shadow-[hsl(var(--brand-orange))]/25">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Free Audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Popup */}
      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </header>
  );
};
