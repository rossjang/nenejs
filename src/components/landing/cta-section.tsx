import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center px-10 py-16 rounded-3xl border border-white/10 fusion-gradient">
        <h2 className="text-white text-4xl md:text-5xl font-black mb-6">
          Ready to build the future?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Stop building boilerplate. Start building agents. Deploy your first
          nene.js app in 5 minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#"
            className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-100 transition-colors"
          >
            Get Started Now
          </Link>
          <Link
            href="#"
            className="px-8 py-4 bg-black/20 text-white font-bold rounded-xl border border-white/20 hover:bg-black/30 transition-colors"
          >
            Schedule a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
