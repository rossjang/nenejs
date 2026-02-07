import { ReactNode } from "react";
import Header from "@/components/landing/header";
import { Sidebar, MobileSidebar } from "@/components/docs/sidebar";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 flex">
          {children}
        </main>
      </div>
      <MobileSidebar />
    </div>
  );
}
