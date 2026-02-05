<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>nene.js | The AI-Native Stack</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#0667ef",
                        "nest-red": "#E0234E",
                        "next-blue": "#0070F3",
                        "background-light": "#f5f7f8",
                        "background-dark": "#0A0A0A",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        .fusion-gradient {
            background: linear-gradient(90deg, #0070F3 0%, #E0234E 100%);
        }
        .code-window-shadow {
            box-shadow: 0 0 40px -10px rgba(0, 112, 243, 0.3);
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
<!-- TopNavBar -->
<header class="sticky top-0 z-50 border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
<div class="max-w-7xl mx-auto flex items-center justify-between">
<div class="flex items-center gap-2">
<div class="size-8 fusion-gradient rounded flex items-center justify-center">
<span class="material-symbols-outlined text-white text-xl">layers</span>
</div>
<h2 class="text-white text-xl font-bold tracking-tight">nene.js</h2>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-slate-400 hover:text-white text-sm font-medium transition-colors" href="#">Docs</a>
<a class="text-slate-400 hover:text-white text-sm font-medium transition-colors" href="#">Features</a>
<a class="text-slate-400 hover:text-white text-sm font-medium transition-colors" href="#">Showcase</a>
<a class="text-slate-400 hover:text-white text-sm font-medium transition-colors" href="#">Blog</a>
</nav>
<div class="flex gap-3">
<button class="hidden sm:flex px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-lg transition-all border border-white/10">
                    Sign In
                </button>
<button class="px-5 py-2 fusion-gradient text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg">
                    Deploy
                </button>
</div>
</div>
</header>
<main class="w-full">
<!-- HeroSection -->
<section class="relative pt-20 pb-32 px-6 overflow-hidden">
<div class="max-w-5xl mx-auto flex flex-col items-center text-center">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 mb-8">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Now in Public Alpha
                </div>
<h1 class="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-6">
                    The AI-Native Stack <br/><span class="text-transparent bg-clip-text fusion-gradient">You Already Know</span>
</h1>
<p class="text-slate-400 text-lg md:text-xl max-w-2xl mb-12">
                    Merge Next.js and NestJS for a seamless full-stack experience. Simplified decorators, unified context, and zero-config AI optimization.
                </p>
<div class="w-full max-w-xl mb-20">
<div class="flex p-1 bg-white/5 border border-white/10 rounded-xl items-center gap-2">
<div class="flex-1 flex items-center px-4 gap-3">
<span class="material-symbols-outlined text-slate-500 text-lg">terminal</span>
<code class="text-sm md:text-base text-slate-300 font-mono">npm create nene@latest</code>
</div>
<button class="flex items-center gap-2 px-6 py-3 fusion-gradient text-white font-bold rounded-lg hover:scale-[1.02] transition-transform">
<span class="material-symbols-outlined text-sm">content_copy</span>
                            Copy
                        </button>
</div>
</div>
<!-- Code Editor Feature Mockup -->
<div class="w-full max-w-4xl relative">
<div class="code-window-shadow rounded-xl border border-white/10 bg-[#0E0E0E] text-left overflow-hidden">
<div class="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
<div class="flex gap-1.5">
<div class="w-3 h-3 rounded-full bg-red-500/20"></div>
<div class="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div class="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<span class="text-[11px] text-slate-500 font-mono ml-4">app/routes/chat.tsx</span>
</div>
<div class="p-6 font-mono text-sm leading-relaxed overflow-x-auto whitespace-nowrap">
<div class="text-slate-500 italic mb-2">// nene.js: Unified Frontend &amp; Backend</div>
<div><span class="text-purple-400">@Backend</span>()</div>
<div><span class="text-blue-400">export class</span> <span class="text-yellow-400">ChatService</span> {</div>
<div class="pl-6"><span class="text-purple-400">@Post</span>(<span class="text-green-400">'/send'</span>)</div>
<div class="pl-6"><span class="text-blue-400">async</span> <span class="text-yellow-400">sendMessage</span>(@Body() msg: string) {</div>
<div class="pl-12 text-slate-400">return this.ai.stream(msg);</div>
<div class="pl-6">}</div>
<div>}</div>
<div class="mt-4"><span class="text-blue-400">export default function</span> <span class="text-yellow-400">ChatPage</span>() {</div>
<div class="pl-6 text-slate-400">// Direct call without fetch() boilerplate</div>
<div class="pl-6"><span class="text-blue-400">const</span> { execute } = <span class="text-yellow-400">useAction</span>(ChatService.sendMessage);</div>
<div class="pl-6"><span class="text-blue-400">return</span> <span class="text-slate-100">&lt;Chat onSend={execute} /&gt;</span>;</div>
<div>}</div>
</div>
</div>
<!-- Glow decoration -->
<div class="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[120px] rounded-full"></div>
</div>
</div>
</section>
<!-- SectionHeader: Built on the giants -->
<section class="py-12 border-y border-white/5">
<h4 class="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] text-center mb-8">Built on the giants</h4>
<div class="max-w-4xl mx-auto flex justify-center items-center gap-12 md:gap-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<!-- Mock Logos using text + icon style for cleaner look -->
<div class="flex items-center gap-3 text-white font-bold text-xl">
<svg class="w-8 h-8" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L2 19.7778H22L12 2Z"></path></svg>
                   Next.js
               </div>
<div class="flex items-center gap-3 text-white font-bold text-xl">
<svg class="w-8 h-8 text-[#E0234E]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L2 7L12 12L22 7L12 2Z M2 17L12 22L22 17L12 12L2 17Z"></path></svg>
                   NestJS
               </div>
<div class="flex items-center gap-3 text-white font-bold text-xl">
<span class="material-symbols-outlined text-3xl text-blue-400">deployed_code</span>
                   Vercel
               </div>
</div>
</section>
<!-- FeatureSection -->
<section class="py-24 px-6">
<div class="max-w-6xl mx-auto">
<div class="flex flex-col gap-4 mb-16 text-center items-center">
<h2 class="text-white text-4xl md:text-5xl font-black tracking-tight max-w-[720px]">
                        Engineered for the AI Era
                    </h2>
<p class="text-slate-400 text-lg font-normal max-w-[640px]">
                        nene.js bridges the gap between your frontend and backend with a unified, type-safe architecture designed for speed.
                    </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="glass-card p-8 rounded-2xl flex flex-col gap-6 group hover:border-primary/50 transition-colors">
<div class="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
<span class="material-symbols-outlined">join_inner</span>
</div>
<div class="flex flex-col gap-2">
<h3 class="text-white text-xl font-bold">Next + Nest, Unified</h3>
<p class="text-slate-400 text-base leading-relaxed">
                                Share types and business logic seamlessly between client and server components without context switching.
                            </p>
</div>
</div>
<div class="glass-card p-8 rounded-2xl flex flex-col gap-6 group hover:border-nest-red/50 transition-colors">
<div class="size-12 rounded-xl bg-nest-red/10 flex items-center justify-center text-nest-red group-hover:bg-nest-red group-hover:text-white transition-all">
<span class="material-symbols-outlined">psychology</span>
</div>
<div class="flex flex-col gap-2">
<h3 class="text-white text-xl font-bold">AI-Optimized Context</h3>
<p class="text-slate-400 text-base leading-relaxed">
                                Inject vector memory and AI session context globally with built-in decorators and server-side hooks.
                            </p>
</div>
</div>
<div class="glass-card p-8 rounded-2xl flex flex-col gap-6 group hover:border-blue-400/50 transition-colors">
<div class="size-12 rounded-xl bg-blue-400/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-all">
<span class="material-symbols-outlined">bolt</span>
</div>
<div class="flex flex-col gap-2">
<h3 class="text-white text-xl font-bold">No-API Network</h3>
<p class="text-slate-400 text-base leading-relaxed">
                                Type-safe RPC calls that feel like local functions. Zero REST/GraphQL boilerplate for faster iteration.
                            </p>
</div>
</div>
</div>
</div>
</section>
<!-- Showcase / ImageGrid Mock -->
<section class="py-20 px-6 bg-white/[0.02]">
<div class="max-w-6xl mx-auto">
<div class="flex justify-between items-end mb-10">
<div>
<h3 class="text-white text-3xl font-bold">Built with nene.js</h3>
<p class="text-slate-500 mt-2">Production apps pushing the boundaries of AI.</p>
</div>
<button class="text-white text-sm font-medium hover:underline flex items-center gap-1">
                        View showcase <span class="material-symbols-outlined text-xs">arrow_forward</span>
</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="relative group cursor-pointer overflow-hidden rounded-xl aspect-video border border-white/10">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Abstract dark UI dashboard for AI analytics" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDU78L7ZKqbfY6S7H-S0NQrDGkAY6r82W_PxCSO-eS3ljhRtq1wPPpo8NS6-jzSIK7ben_zBsLZ_y6ZNXs9rR7RELAliHy43fW3-5Uxpick72LmPeN-5I5gqhYjAHLoAaHnuF2n0Pb5Fsh9ZI2-hYaA-d2UrbHymvMx3v6ZvUjgLQAElQphHJE6eZvHEqBmfJGxcd_eGGodezqAmSKWsI-iHTKPOTvhLIpu3DBGpuDrodPtW2E24ddGbDTZB41k0QRULnkLf76y99Q");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div class="absolute bottom-6 left-6">
<p class="text-white font-bold">Flux AI Editor</p>
<p class="text-slate-400 text-sm">Real-time collaborative image generation</p>
</div>
</div>
<div class="relative group cursor-pointer overflow-hidden rounded-xl aspect-video border border-white/10">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Cyberpunk dark theme coding environment" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4zdm0UD5emPmUNh3HDHCLXMMP-AdHInePcNeS8aFyDp38la8Jw1VqjnXaqRI6PtGW5MQwpSzLSyl3gRuBKzDEkb538jA8AtZHfgzOkeZiYBYdfWBWf6vjkR9GKn26eIMLlV-Mpo5FOLyhywCzgtdpcq31WH39hspJgZZMm1hbgo8gavjdPjUH5qv-6gwmGrVIWGo8-YMywi6YRB0VKFZ8-khtgvgMeTXhhQYg1ngzDdgGbdiJpjQ73R24mXtBM_YagQvU1f2jLbg");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div class="absolute bottom-6 left-6">
<p class="text-white font-bold">Nova CRM</p>
<p class="text-slate-400 text-sm">Automated sales insights with vector search</p>
</div>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="py-32 px-6">
<div class="max-w-4xl mx-auto text-center px-10 py-16 rounded-3xl border border-white/10 fusion-gradient">
<h2 class="text-white text-4xl md:text-5xl font-black mb-6">Ready to build the future?</h2>
<p class="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                    Stop building boilerplate. Start building agents. Deploy your first nene.js app in 5 minutes.
                </p>
<div class="flex flex-col sm:flex-row gap-4 justify-center">
<button class="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-100 transition-colors">
                        Get Started Now
                    </button>
<button class="px-8 py-4 bg-black/20 text-white font-bold rounded-xl border border-white/20 hover:bg-black/30 transition-colors">
                        Schedule a Demo
                    </button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-background-dark border-t border-white/5 py-20 px-6 lg:px-20">
<div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
<div class="col-span-2">
<div class="flex items-center gap-2 mb-6">
<div class="size-6 fusion-gradient rounded-sm"></div>
<h2 class="text-white text-lg font-bold tracking-tight">nene.js</h2>
</div>
<p class="text-slate-500 text-sm max-w-xs leading-relaxed">
                    The framework for high-performance, AI-integrated full-stack applications. Open source and community driven.
                </p>
<div class="flex gap-4 mt-8">
<a class="text-slate-500 hover:text-white transition-colors" href="#"><span class="material-symbols-outlined">public</span></a>
<a class="text-slate-500 hover:text-white transition-colors" href="#"><span class="material-symbols-outlined">code</span></a>
<a class="text-slate-500 hover:text-white transition-colors" href="#"><span class="material-symbols-outlined">terminal</span></a>
</div>
</div>
<div>
<h4 class="text-white text-sm font-bold mb-6">Framework</h4>
<ul class="space-y-4 text-slate-500 text-sm">
<li><a class="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a class="hover:text-white transition-colors" href="#">Showcase</a></li>
<li><a class="hover:text-white transition-colors" href="#">Templates</a></li>
<li><a class="hover:text-white transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 class="text-white text-sm font-bold mb-6">Community</h4>
<ul class="space-y-4 text-slate-500 text-sm">
<li><a class="hover:text-white transition-colors" href="#">GitHub</a></li>
<li><a class="hover:text-white transition-colors" href="#">Discord</a></li>
<li><a class="hover:text-white transition-colors" href="#">Twitter</a></li>
<li><a class="hover:text-white transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
<div>
<h4 class="text-white text-sm font-bold mb-6">Legal</h4>
<ul class="space-y-4 text-slate-500 text-sm">
<li><a class="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a class="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a class="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
<div class="flex flex-col items-end col-span-2 lg:col-span-1">
<div class="flex items-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-full">
<div class="size-2 rounded-full bg-green-500"></div>
<span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider pr-2">System Operational</span>
</div>
</div>
</div>
<div class="max-w-7xl mx-auto pt-16 mt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-slate-600 text-xs">© 2024 NeneJS Inc. All rights reserved.</p>
<div class="flex items-center gap-1 text-slate-600 text-xs">
                Built with <span class="material-symbols-outlined text-xs text-nest-red">favorite</span> for the open web.
            </div>
</div>
</footer>
</body></html>
