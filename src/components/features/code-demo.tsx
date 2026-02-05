interface CodeDemoProps {
  code: string;
  filename: string;
  language?: string;
}

export default function CodeDemo({ code, filename }: CodeDemoProps) {
  return (
    <div className="w-full relative">
      <div className="code-window-shadow rounded-xl border border-white/10 bg-[#0E0E0E] text-left overflow-hidden">
        {/* Window controls */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
          </div>
          <span className="text-[11px] text-slate-500 font-mono ml-4">
            {filename}
          </span>
        </div>

        {/* Code content */}
        <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
          <pre className="text-slate-300 whitespace-pre-wrap">{code}</pre>
        </div>
      </div>

      {/* Glow decoration */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0667ef]/10 blur-[80px] rounded-full"></div>
    </div>
  );
}
