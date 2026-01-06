import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import s30Logo from "@/assets/s30-logo.svg";

const services = [
  { name: "AI SEO Services", href: "/ai-seo" },
  { name: "Performance Marketing", href: "/performance-marketing" },
  { name: "SEO Course", href: "/seo-course" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Cookie Policy", href: "/cookie-policy" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>) },
  { name: "X", href: "https://twitter.com", icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>) },
  { name: "Instagram", href: "https://instagram.com", icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/></svg>) },
  { name: "YouTube", href: "https://youtube.com", icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>) },
];

export const Footer = forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer ref={ref} className="relative bg-[#0a0a0a] dark:bg-[#0a0a0a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--brand-orange)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[hsl(var(--brand-orange))]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-tr from-[hsl(var(--brand-orange))]/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Company Branding */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center mb-4 group">
              <img 
                src={s30Logo} 
                alt="Super 30 Marketing Agency" 
                className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              AI-powered digital marketing agency helping businesses grow with data-driven SEO and performance marketing.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[hsl(var(--brand-orange))]/20 hover:text-[hsl(var(--brand-orange))] hover:border-[hsl(var(--brand-orange))]/30 hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="group flex items-center text-gray-400 hover:text-[hsl(var(--brand-orange))] transition-colors duration-300 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group flex items-center text-gray-400 hover:text-[hsl(var(--brand-orange))] transition-colors duration-300 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@thesuper30.ai"
                  className="flex items-start gap-3 text-gray-400 hover:text-[hsl(var(--brand-orange))] transition-colors duration-300 text-sm group"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(var(--brand-orange))]/20 group-hover:border-[hsl(var(--brand-orange))]/30 transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span className="pt-1.5">hello@thesuper30.ai</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+917353252526"
                  className="flex items-start gap-3 text-gray-400 hover:text-[hsl(var(--brand-orange))] transition-colors duration-300 text-sm group"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(var(--brand-orange))]/20 group-hover:border-[hsl(var(--brand-orange))]/30 transition-all duration-300">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span className="pt-1.5">+91 73532 52526</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span className="pt-1.5">Bangalore, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} The Super 30 AI SEO Agency. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-500 hover:text-[hsl(var(--brand-orange))] text-sm transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
