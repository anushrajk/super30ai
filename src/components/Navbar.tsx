import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Bot, Target, Sparkles, ArrowRight, Megaphone, Palette, Globe } from "lucide-react";
import super30Logo from "@/assets/super30-new-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";


const services = [
  { title: "Digital Marketing", href: "/digital-marketing", icon: Megaphone, color: "text-purple-500" },
  { title: "AI SEO Services", href: "/ai-seo-agency-bangalore", icon: Bot, color: "text-[hsl(var(--brand-orange))]" },
  { title: "Performance Marketing", href: "/performance-marketing", icon: Target, color: "text-blue-500" },
  { title: "Social Media", href: "/social-media-post-design", icon: Palette, color: "text-teal-500" },
  { title: "Design", href: "/design", icon: Sparkles, color: "text-pink-500" },
  { title: "Web Design", href: "/web-design-development", icon: Globe, color: "text-emerald-500" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/seo-experts-bangalore" },
  { label: "Our Work", href: "/seo-results-bangalore" },
  { label: "Contact", href: "/seo-agency-near-me" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-md"
          : "bg-background/60 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={super30Logo} 
              alt="The Super 30 — AI SEO Agency Bangalore" 
              className="h-8 md:h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 ml-auto mr-4">
            {services.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  location.pathname === service.href
                    ? "text-[hsl(var(--brand-orange))]"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span className="link-underline">{service.title}</span>
                {location.pathname === service.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[hsl(var(--brand-orange))]" />
                )}
              </Link>
            ))}

            <span className="w-px h-5 bg-border/50 mx-1" />

            <Link
              to="/seo-experts-bangalore"
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                location.pathname === "/seo-experts-bangalore"
                  ? "text-brand"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <span className="link-underline">Team 30</span>
            </Link>

            <Link
              to="/seo-results-bangalore"
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                location.pathname === "/seo-results-bangalore"
                  ? "text-brand"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <span className="link-underline">Our Work</span>
            </Link>

            <Link
              to="/seo-agency-near-me"
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                location.pathname === "/seo-agency-near-me"
                  ? "text-brand"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <span className="link-underline">Contact</span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link to="/seo-agency-near-me">
              <Button 
                className="bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Reach Us
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
              to="/seo-experts-bangalore"
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 border ${
                location.pathname === "/seo-experts-bangalore"
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
                    <span className="text-sm font-medium group-hover:text-[hsl(var(--brand-orange))] transition-colors duration-300">
                        {service.title}
                      </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/seo-results-bangalore"
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 border ${
                location.pathname === "/seo-results-bangalore"
                  ? "bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] border-[hsl(var(--brand-orange))]/30"
                  : "text-foreground border-transparent hover:bg-muted/50 hover:border-border/50"
              }`}
            >
              Our Work
            </Link>

            <Link
              to="/seo-agency-near-me"
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 border ${
                location.pathname === "/seo-agency-near-me"
                  ? "bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] border-[hsl(var(--brand-orange))]/30"
                  : "text-foreground border-transparent hover:bg-muted/50 hover:border-border/50"
              }`}
            >
              Contact
            </Link>

            <div className="pt-4 mt-2 border-t border-border/50">
              <Link to="/seo-agency-near-me" onClick={() => setIsMobileMenuOpen(false)}>
                <Button 
                  className="w-full bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold shadow-lg"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Reach Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>


    </header>
  );
};
