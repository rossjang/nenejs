export default function FeaturesHero() {
  return (
    <section className="py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
          <div className="h-2 w-2 rounded-full fusion-gradient"></div>
          <span className="text-sm text-slate-400 font-medium">
            Framework Features
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
          Built for{" "}
          <span className="fusion-gradient-text">Modern Development</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Discover how nene.js unifies frontend and backend development,
          eliminates boilerplate, and supercharges your workflow with built-in
          AI capabilities.
        </p>
      </div>
    </section>
  );
}
