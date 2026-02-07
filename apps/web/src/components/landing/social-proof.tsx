export default function SocialProof() {
  return (
    <section className="py-12 border-y border-white/5">
      <h4 className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] text-center mb-8">
        Built on the giants
      </h4>
      <div className="max-w-4xl mx-auto flex justify-center items-center gap-12 md:gap-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        <div className="flex items-center gap-3 text-white font-bold text-xl">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 19.7778H22L12 2Z"></path>
          </svg>
          Next.js
        </div>
        <div className="flex items-center gap-3 text-white font-bold text-xl">
          <svg
            className="w-8 h-8 text-[#E0234E]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7L12 12L22 7L12 2Z M2 17L12 22L22 17L12 12L2 17Z"></path>
          </svg>
          NestJS
        </div>
        <div className="flex items-center gap-3 text-white font-bold text-xl">
          <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 22.525H0l12-21.05 12 21.05zM12 0l-9.82 17.23h19.64L12 0zm0 3.76l6.53 11.47H5.47L12 3.76z"></path>
          </svg>
          Vercel
        </div>
      </div>
    </section>
  );
}
