import { LeadCaptureForm } from "./LeadCaptureForm";

interface FinalCTASectionProps {
  onSubmit: (data: { website_url: string; email: string }) => void;
  loading?: boolean;
}

export const FinalCTASection = ({ onSubmit, loading }: FinalCTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Dominate AI Search?
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Get your free AI SEO audit and discover exactly how to make AI search engines recommend your business.
          </p>

          <div className="max-w-md mx-auto">
            <LeadCaptureForm onSubmit={onSubmit} loading={loading} />
          </div>

          <p className="text-slate-500 text-sm mt-8">
            Join 50+ businesses already winning in AI search
          </p>
        </div>
      </div>
    </section>
  );
};
