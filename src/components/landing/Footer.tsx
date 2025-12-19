import { Link } from "react-router-dom";
import { Shield, Lock, Mail, Phone, Bot } from "lucide-react";

const services = [
  { name: "AI SEO Services", href: "/ai-seo" },
  { name: "Performance Marketing", href: "/performance-marketing" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Company Branding */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">The Super 30</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              AI-powered digital marketing agency helping businesses grow with data-driven SEO and performance marketing.
            </p>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              {["GDPR", "SOC 2", "No data sharing"].map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 bg-slate-800 text-slate-400 text-xs rounded-full border border-slate-700"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-slate-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Security */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="mailto:hello@thesuper30.ai"
                  className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-orange-500" />
                  hello@thesuper30.ai
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-orange-500" />
                  +91 98765 43210
                </a>
              </li>
            </ul>

            {/* Security Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Enterprise-grade security</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Lock className="w-4 h-4 text-green-500" />
                <span>Data encryption at rest</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} The Super 30 AI SEO Agency. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              {legal.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-500 hover:text-orange-500 text-sm transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
