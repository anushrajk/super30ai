import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import super30Logo from "@/assets/super30-new-logo.png";

interface SubItem {
  label: string;
  href: string;
}

interface SubCategory {
  label: string;
  href?: string;
  items: SubItem[];
}

interface NavMenuItem {
  label: string;
  href?: string;
  items?: SubItem[];
  categories?: SubCategory[];
}

const menuItems: NavMenuItem[] = [
  {
    label: "Digital Marketing",
    href: "/digital-marketing-agency-bangalore",
    items: [
      { label: "AI SEO", href: "/seo-company-bangalore" },
      { label: "Lead Generation", href: "/lead-generation-agency-bangalore" },
      { label: "Social Media Marketing", href: "/social-media-marketing-agency-bangalore" },
      { label: "Google Ads", href: "/google-ads-agency-bangalore" },
      { label: "Social Media Optimisation", href: "/social-media-optimization-services-bangalore" },
      { label: "Ecommerce Marketing", href: "/ecommerce-marketing-agency-bangalore" },
    ],
  },
  {
    label: "Design",
    href: "/graphic-design-agency-bangalore",
    items: [
      { label: "UI / UX", href: "/ui-ux-design-agency-bangalore" },
      { label: "Social Media Posts", href: "/social-media-design-agency-bangalore" },
      { label: "Logo", href: "/logo-design-company-bangalore" },
      { label: "Brand Kit", href: "/branding-agency-bangalore" },
    ],
  },
  {
    label: "Content",
    href: "/content-marketing-agency-bangalore",
    items: [
      { label: "Website Content", href: "/seo-content-writing-services-bangalore" },
      { label: "Blog Writing", href: "/blog-writing-services-bangalore" },
      { label: "Script Writing", href: "/script-writing-agency-bangalore" },
      { label: "Guest Posting", href: "/guest-posting-agency-bangalore" },
    ],
  },
  {
    label: "SMS",
    href: "/bulk-sms-marketing-agency-bangalore",
    items: [
      { label: "Whatsapp Business API", href: "/whatsapp-marketing-company-bangalore" },
      { label: "Chatbot", href: "/chatbot-development-company-bangalore" },
      { label: "Customer Engagement Programs", href: "/customer-engagement-agency-bangalore" },
      { label: "SMS Gateway", href: "/sms-gateway-service-bangalore" },
      { label: "Rich Communication Services", href: "/rcs-messaging-provider-bangalore" },
    ],
  },
  {
    label: "Production",
    href: "/video-photography-production-bangalore",
    items: [
      { label: "Video Production", href: "/video-production-agency-bangalore" },
      { label: "Photography", href: "/photography-services-bangalore" },
    ],
  },
  {
    label: "Website Design",
    href: "/web-design-company-bangalore",
    items: [
      { label: "Website Development", href: "/web-development-company-bangalore" },
      { label: "Ecommerce Website", href: "/ecommerce-website-development-bangalore" },
      { label: "Wordpress Website", href: "/wordpress-development-company-bangalore" },
      { label: "Website Maintenance Service", href: "/website-maintenance-services-bangalore" },
    ],
  },
  { label: "Our Work", href: "/our-work" },
  { label: "Team S30", href: "/internet-marketing-agency" },
];

export const Navbar = ({ forceWhiteBg = false }: { forceWhiteBg?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDesktop(null);
    setOpenMobile(null);
    setOpenMobileSub(null);
  }, [location.pathname]);

  const hasDropdown = (item: NavMenuItem) => item.items || item.categories;

  const handleMouseEnter = (label: string) => {
    clearTimeout(closeTimer.current);
    setOpenDesktop(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDesktop(null), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        forceWhiteBg
          ? "bg-white border-b border-border/50 shadow-md"
          : isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-md"
            : "bg-background/60 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={super30Logo}
              alt="The Super 30 — AI SEO Agency Bangalore"
              className="h-8 md:h-10 w-auto"
              fetchPriority="high"
              width="160"
              height="40"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 ml-auto mr-4">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasDropdown(item) && handleMouseEnter(item.label)}
                onMouseLeave={() => hasDropdown(item) && handleMouseLeave()}
              >
                {hasDropdown(item) ? (
                  item.href ? (
                    <Link
                      to={item.href}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        openDesktop === item.label
                          ? "text-[hsl(var(--brand-orange))] bg-muted/50"
                          : location.pathname === item.href
                            ? "text-[hsl(var(--brand-orange))]"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDesktop === item.label ? "rotate-180" : ""}`} />
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        openDesktop === item.label
                          ? "text-[hsl(var(--brand-orange))] bg-muted/50"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDesktop === item.label ? "rotate-180" : ""}`} />
                    </button>
                  )
                ) : (
                  <Link
                    to={item.href || "/"}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 block ${
                      location.pathname === item.href
                        ? "text-[hsl(var(--brand-orange))]"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {hasDropdown(item) && openDesktop === item.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-background border border-border/60 rounded-xl shadow-xl p-2 min-w-[220px] animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.categories ? (
                        <div className="flex gap-0">
                          {item.categories.map((cat) => (
                            <div key={cat.label} className="min-w-[200px]">
                              <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                {cat.label}
                              </p>
                              {cat.items.map((sub) => (
                                <Link
                                  key={sub.href}
                                  to={sub.href}
                                  className="block px-3 py-2 text-sm text-foreground/80 hover:text-[hsl(var(--brand-orange))] hover:bg-muted/50 rounded-lg transition-colors duration-150"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        item.items?.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="block px-3 py-2 text-sm text-foreground/80 hover:text-[hsl(var(--brand-orange))] hover:bg-muted/50 rounded-lg transition-colors duration-150"
                          >
                            {sub.label}
                          </Link>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact-us"
              className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-semibold text-white transition-all duration-300 active:scale-[0.98] bg-[hsl(var(--brand-orange))] shadow-lg hover:scale-105 hover:bg-[hsl(var(--brand-orange))]/90 hover:shadow-xl"
            >
              Contact
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-muted/50 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 md:top-20 bottom-0 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-xl transition-all duration-300 z-50 overflow-y-auto ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-4 pb-24">
          <div className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <div key={item.label}>
                {hasDropdown(item) ? (
                  <>
                    <button
                      onClick={() => setOpenMobile(openMobile === item.label ? null : item.label)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                        openMobile === item.label
                          ? "bg-muted/50 text-[hsl(var(--brand-orange))]"
                          : "text-foreground hover:bg-muted/30"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openMobile === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {openMobile === item.label && (
                      <div className="ml-4 pl-4 border-l-2 border-border/50 mt-1 mb-2 flex flex-col gap-0.5">
                        {item.href && (
                          <Link
                            to={item.href}
                            className="block px-3 py-2.5 text-sm font-semibold text-[hsl(var(--brand-orange))] hover:bg-muted/30 rounded-lg transition-colors"
                          >
                            View All {item.label}
                          </Link>
                        )}
                        {item.categories
                          ? item.categories.map((cat) => (
                              <div key={cat.label}>
                                <button
                                  onClick={() => setOpenMobileSub(openMobileSub === cat.label ? null : cat.label)}
                                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-muted-foreground uppercase tracking-wider"
                                >
                                  {cat.label}
                                  <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${openMobileSub === cat.label ? "rotate-90" : ""}`} />
                                </button>
                                {openMobileSub === cat.label &&
                                  cat.items.map((sub) => (
                                    <Link
                                      key={sub.href}
                                      to={sub.href}
                                      className="block px-3 py-2.5 text-sm text-foreground/80 hover:text-[hsl(var(--brand-orange))] rounded-lg transition-colors"
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                              </div>
                            ))
                          : item.items?.map((sub) => (
                              <Link
                                key={sub.href}
                                to={sub.href}
                                className={`block px-3 py-2.5 text-sm rounded-lg transition-colors ${
                                  location.pathname === sub.href
                                    ? "text-[hsl(var(--brand-orange))] font-medium"
                                    : "text-foreground/80 hover:text-[hsl(var(--brand-orange))]"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href || "/"}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      location.pathname === item.href
                        ? "text-[hsl(var(--brand-orange))] bg-[hsl(var(--brand-orange))]/10"
                        : "text-foreground hover:bg-muted/30"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4 mt-2 border-t border-border/50">
              <Link
                to="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white bg-[hsl(var(--brand-orange))] shadow-lg hover:bg-[hsl(var(--brand-orange))]/90 transition-all"
              >
                Contact
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
