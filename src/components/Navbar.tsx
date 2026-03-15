import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import super30Logo from "@/assets/super30-new-logo.png";

const services = [
  { title: "Digital Marketing", href: "/digital-marketing" },
  { title: "AI SEO", href: "/ai-seo-agency-bangalore" },
  { title: "Performance", href: "/performance-marketing" },
  { title: "Social Media", href: "/social-media-post-design" },
  { title: "Design", href: "/design" },
  { title: "Web Design", href: "/web-design-development" },
];

const mainLinks = [
  { label: "Our Work", href: "/seo-results-bangalore" },
  { label: "Team 30", href: "/seo-experts-bangalore" },
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

  const isServiceActive = (href: string) => location.pathname === href;

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
          <Link to="/" className="flex items-center group shrink-0">
            <img 
              src={super30Logo} 
              alt="The Super 30 — AI SEO Agency Bangalore" 
              className="h-8 md:h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation - All Items in Header */}
          <div className="hidden xl:flex items-center gap-0.5">
            {/* Services - Inline */}
            {services.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg whitespace-nowrap ${
                  isServiceActive(service.href)
                    ? "text-[hsl(var(--brand-orange))] bg-[hsl(var(--brand-orange))]/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {service.title}
              </Link>
            ))}

            {/* Divider */}
            <div className="w-px h-6 bg-border mx-2" />

            {/* Main Links */}
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg whitespace-nowrap ${
                  location.pathname === link.href
                    ? "text-[hsl(var(--brand-orange))] bg-[hsl(var(--brand-orange))]/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden xl:flex items-center ml-4">
            <Link to="/seo-agency-near-me">
              <Button 
                className="bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Reach Us
              </Button>
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/50 transition-all duration-300"
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

      {/* Mobile/Tablet Menu */}
      <div
        className={`xl:hidden fixed inset-x-0 top-16 md:top-20 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-xl transition-all duration-300 z-50 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex flex-col gap-1">
            {/* Services Section */}
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 py-2">
              Services
            </p>
            {services.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 border ${
                  isServiceActive(service.href)
                    ? "bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] border-[hsl(var(--brand-orange))]/30"
                    : "text-foreground border-transparent hover:bg-muted/50 hover:border-border/50"
                }`}
              >
                {service.title}
              </Link>
            ))}

            {/* Divider */}
            <div className="border-t border-border/50 my-3" />

            {/* Main Links */}
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 border ${
                  location.pathname === link.href
                    ? "bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] border-[hsl(var(--brand-orange))]/30"
                    : "text-foreground border-transparent hover:bg-muted/50 hover:border-border/50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA */}
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
