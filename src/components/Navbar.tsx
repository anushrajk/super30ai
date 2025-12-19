import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import super30Logo from "@/assets/super30-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const services = [
  {
    title: "AI SEO Services",
    description: "Dominate AI search results and LLM citations",
    href: "/ai-seo",
  },
  {
    title: "Performance Marketing",
    description: "ROI-driven paid advertising across all platforms",
    href: "/performance-marketing",
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
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={super30Logo} 
              alt="Super 30 Marketing Agency" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 ml-auto mr-4">
            <Link
              to="/about"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                location.pathname === "/about"
                  ? "text-orange-600"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              Team 30
            </Link>

            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`px-4 py-2 text-sm font-medium transition-colors bg-transparent hover:bg-muted/50 ${
                      location.pathname.includes("/ai-seo") ||
                      location.pathname.includes("/performance-marketing")
                        ? "text-orange-600"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {service.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/work"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                location.pathname === "/work"
                  ? "text-orange-600"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              Our Work
            </Link>

            <Link
              to="/contact"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                location.pathname === "/contact"
                  ? "text-orange-600"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/ai-seo">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300">
                Get Free Audit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
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
        className={`lg:hidden fixed inset-x-0 top-16 md:top-20 bg-background/98 backdrop-blur-lg border-b border-border shadow-xl transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-2">
            <Link
              to="/about"
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                location.pathname === "/about"
                  ? "bg-orange-100 text-orange-600"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              Team 30
            </Link>

            {/* Services Section */}
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Services
              </p>
              <div className="flex flex-col gap-1 pl-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                      location.pathname === service.href
                        ? "bg-orange-100 text-orange-600"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/work"
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                location.pathname === "/work"
                  ? "bg-orange-100 text-orange-600"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              Our Work
            </Link>

            <Link
              to="/contact"
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                location.pathname === "/contact"
                  ? "bg-orange-100 text-orange-600"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              Contact
            </Link>

            <div className="pt-4 mt-2 border-t border-border">
              <Link to="/ai-seo" className="block">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                  Get Free Audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
