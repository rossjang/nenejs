export default function CodeBlock() {
  return (
    <div className="w-full max-w-4xl relative">
      <div className="code-window-shadow rounded-xl border border-white/10 bg-[#0E0E0E] text-left overflow-hidden">
        {/* Window controls */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
          </div>
          <span className="text-[11px] text-slate-500 font-mono ml-4">
            app/routes/chat.tsx
          </span>
        </div>
        
        {/* Code content */}
        <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto whitespace-nowrap">
          <div className="text-slate-500 italic mb-2">
            // nene.js: Unified Frontend &amp; Backend
          </div>
          <div>
            <span className="text-purple-400">@Backend</span>()
          </div>
          <div>
            <span className="text-blue-400">export class</span>{" "}
            <span className="text-yellow-400">ChatService</span> {"{"}
          </div>
          <div className="pl-6">
            <span className="text-purple-400">@Post</span>(
            <span className="text-green-400">&apos;/send&apos;</span>)
          </div>
          <div className="pl-6">
            <span className="text-blue-400">async</span>{" "}
            <span className="text-yellow-400">sendMessage</span>(
            <span className="text-blue-400">@Body</span>() msg: string) {"{"}
          </div>
          <div className="pl-12 text-slate-400">
            return this.ai.stream(msg);
          </div>
          <div className="pl-6">{"}"}</div>
          <div>{"}"}</div>
          <div className="mt-4">
            <span className="text-blue-400">export default function</span>{" "}
            <span className="text-yellow-400">ChatPage</span>() {"{"}
          </div>
          <div className="pl-6 text-slate-400">
            // Direct call without fetch() boilerplate
          </div>
          <div className="pl-6">
            <span className="text-blue-400">const</span> {"{"} execute {"}"} ={" "}
            <span className="text-yellow-400">useAction</span>(
            ChatService.sendMessage);
          </div>
          <div className="pl-6">
            <span className="text-blue-400">return</span>{" "}
            <span className="text-slate-100">
              &lt;Chat onSend={"{"}execute{"}"} /&gt;
            </span>
            ;
          </div>
          <div>{"}"}</div>
        </div>
      </div>
      
      {/* Glow decoration */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0667ef]/20 blur-[120px] rounded-full"></div>
    </div>
  );
}
