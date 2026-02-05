"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, X, Menu } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "./language-switcher";
import { getLocaleFromPath, type Locale } from "@/lib/i18n";

export interface SidebarSection {
  title: string;
  items: { title: string; slug: string; order: number }[];
  order: number;
}

export type NavigationData = Record<Locale, SidebarSection[]>;

interface SidebarContentProps {
  navigation: SidebarSection[];
  pathname: string;
  locale: Locale;
  onItemClick?: () => void;
}

function SidebarContent({
  navigation,
  pathname,
  locale,
  onItemClick,
}: SidebarContentProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(
    navigation.map((n) => n.title)
  );

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  const isActive = (slug: string) => {
    const href = `/docs/${locale}/${slug}`;
    return pathname === href;
  };

  return (
    <nav className="space-y-6">
      {navigation.map((section) => (
        <div key={section.title}>
          <button
            onClick={() => toggleSection(section.title)}
            className="flex items-center justify-between w-full text-slate-500 text-xs uppercase font-bold tracking-wider mb-3 hover:text-slate-400 transition-colors"
          >
            <span>{section.title}</span>
            {expandedSections.includes(section.title) ? (
              <ChevronDown className="w-3 h-3" />
            ) : (
              <ChevronRight className="w-3 h-3" />
            )}
          </button>
          {expandedSections.includes(section.title) && section.items && (
            <ul className="space-y-1">
              {section.items.map((item) => {
                const href = `/docs/${locale}/${item.slug}`;
                return (
                  <li key={item.slug}>
                    <Link
                      href={href}
                      onClick={onItemClick}
                      className={`block px-3 py-2 text-sm transition-colors rounded ${
                        isActive(item.slug)
                          ? "text-white bg-white/5"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
}

interface SidebarClientProps {
  navigationData: NavigationData;
}

export function SidebarClient({ navigationData }: SidebarClientProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const navigation = navigationData[locale] || navigationData.en || [];

  return (
    <aside className="hidden lg:block w-64 shrink-0 border-r border-white/5 bg-[#0A0A0A]">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-6">
        <div className="mb-6">
          <LanguageSwitcher />
        </div>
        <SidebarContent navigation={navigation} pathname={pathname} locale={locale} />
      </div>
    </aside>
  );
}

export function MobileSidebarClient({ navigationData }: SidebarClientProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const navigation = navigationData[locale] || navigationData.en || [];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-4 fusion-gradient rounded-full shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Open navigation"
      >
        <Menu className="w-5 h-5 text-white" />
      </button>

      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar panel */}
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#0A0A0A] border-r border-white/5 p-6 overflow-y-auto animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-8">
              <span className="text-white font-semibold">Navigation</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mb-6">
              <LanguageSwitcher />
            </div>
            <SidebarContent
              navigation={navigation}
              pathname={pathname}
              locale={locale}
              onItemClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
