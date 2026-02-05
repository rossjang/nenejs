import Link from "next/link";
import { Layers } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-4 py-8">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 mb-8">
        <div className="h-10 w-10 fusion-gradient rounded-lg flex items-center justify-center">
          <Layers className="text-white w-6 h-6" />
        </div>
        <h1 className="text-white text-2xl font-bold tracking-tight">
          nene.js
        </h1>
      </Link>

      {/* Auth Content */}
      {children}
    </div>
  );
}
