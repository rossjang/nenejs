import Link from "next/link";
import { Globe, Code, Terminal, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-6 w-6 fusion-gradient rounded-sm"></div>
            <h2 className="text-white text-lg font-bold tracking-tight">nene.js</h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
            The framework for high-performance, AI-integrated full-stack applications. Open source and community driven.
          </p>
          <div className="flex gap-4 mt-8">
            <Link className="text-slate-500 hover:text-white transition-colors" href="#">
              <Globe className="w-5 h-5" />
            </Link>
            <Link className="text-slate-500 hover:text-white transition-colors" href="#">
              <Code className="w-5 h-5" />
            </Link>
            <Link className="text-slate-500 hover:text-white transition-colors" href="#">
              <Terminal className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-white text-sm font-bold mb-6">Framework</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li>
              <Link className="hover:text-white transition-colors" href="#">
                Documentation
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition-colors" href="/showcase">
                Showcase
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition-colors" href="#">
                Templates
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition-colors" href="#">
                Integrations
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-bold mb-6">Community</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li>
              <Link className="hover:text-white transition-colors" href="#">
                GitHub
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition-colors" href="#">
                Discord
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition-colors" href="#">
                Twitter
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition-colors" href="#">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li>
              <Link className="hover:text-white transition-colors" href="#">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition-colors" href="#">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition-colors" href="#">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-end col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-full">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider pr-2">
              System Operational
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 text-xs">© 2024 NeneJS Inc. All rights reserved.</p>
        <div className="flex items-center gap-1 text-slate-600 text-xs">
          Built with{" "}
          <Heart className="w-3 h-3 text-[#E0234E]" />
          {" "}for the open web.
        </div>
      </div>
    </footer>
  );
}
