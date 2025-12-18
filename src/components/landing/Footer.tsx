import { Shield, Lock, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2"><Shield className="w-5 h-5 text-orange-500" />Trust & Security</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400"><Lock className="w-4 h-4 text-green-500" /><span>Enterprise-grade security</span></div>
              <div className="flex items-center gap-3 text-slate-400"><Lock className="w-4 h-4 text-green-500" /><span>Data encryption at rest</span></div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-slate-500 mb-3">Privacy & Compliance</p>
              <div className="flex flex-wrap gap-2">
                {["GDPR", "No data sharing", "SOC 2"].map(b => <span key={b} className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-full">{b}</span>)}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <div className="flex items-center gap-3 text-slate-400 mb-6"><Mail className="w-4 h-4 text-orange-500" /><a href="mailto:hello@thesuper30.ai" className="hover:text-orange-500 transition-colors">hello@thesuper30.ai</a></div>
            <div>
              <p className="text-sm text-slate-500 mb-3">Quick Links</p>
              <div className="flex flex-wrap gap-4">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(l => <a key={l} href="#" className="text-slate-400 hover:text-orange-500 text-sm transition-colors">{l}</a>)}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800"><p className="text-center text-slate-500 text-sm">© 2025 The Super 30 AI SEO Agency. All rights reserved.</p></div>
      </div>
    </footer>
  );
};
