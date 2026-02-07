import { ArrowRight, Sparkles } from "lucide-react";

export default function SubmitCTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 md:p-12">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-500/10 to-orange-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400 mb-4">
                <Sparkles className="w-3 h-3" />
                <span>Share your creation</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Built something with nene.js?
              </h3>
              <p className="text-slate-400 max-w-md">
                Submit your project to be featured in our showcase. Join the
                growing community of developers building with nene.js.
              </p>
            </div>

            <button className="flex items-center gap-2 px-6 py-3 fusion-gradient text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg cursor-pointer whitespace-nowrap">
              Submit Your Project
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
