import { GitMerge, Bot, Zap } from "lucide-react";

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 mb-16 text-center items-center">
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight max-w-[720px]">
            Engineered for the AI Era
          </h2>
          <p className="text-slate-400 text-lg font-normal max-w-[640px]">
            nene.js bridges the gap between your frontend and backend with a
            unified, type-safe architecture designed for speed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl flex flex-col gap-6 group bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#0667ef]/50 transition-all duration-300 cursor-pointer">
            <div className="h-12 w-12 rounded-xl bg-[#0667ef]/10 flex items-center justify-center text-[#0667ef] group-hover:bg-[#0667ef] group-hover:text-white transition-all">
              <GitMerge className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-xl font-bold">
                Next + Nest, Unified
              </h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Share types and business logic seamlessly between client and
                server components without context switching.
              </p>
            </div>
          </div>
          <div className="p-8 rounded-2xl flex flex-col gap-6 group bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#E0234E]/50 transition-all duration-300 cursor-pointer">
            <div className="h-12 w-12 rounded-xl bg-[#E0234E]/10 flex items-center justify-center text-[#E0234E] group-hover:bg-[#E0234E] group-hover:text-white transition-all">
              <Bot className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-xl font-bold">
                AI Agent Friendly
              </h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Structured documentation and consistent patterns that AI coding
                assistants can understand and work with effectively.
              </p>
            </div>
          </div>
          <div className="p-8 rounded-2xl flex flex-col gap-6 group bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300 cursor-pointer">
            <div className="h-12 w-12 rounded-xl bg-blue-400/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-all">
              <Zap className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-xl font-bold">Auto-Generated Hooks</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Define controllers once, get type-safe React hooks automatically.
                Zero fetch boilerplate for faster iteration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
