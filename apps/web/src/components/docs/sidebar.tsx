import { getDocsSidebar } from "@/lib/mdx";
import { SidebarClient, MobileSidebarClient, type SidebarSection, type NavigationData } from "./sidebar-client";
import { LOCALES, type Locale } from "@/lib/i18n";

// Get navigation data for all locales
function getAllNavigationData(): NavigationData {
  const data: Partial<NavigationData> = {};
  for (const locale of LOCALES) {
    data[locale] = getDocsSidebar(locale);
  }
  return data as NavigationData;
}

export function Sidebar() {
  const navigationData = getAllNavigationData();
  return <SidebarClient navigationData={navigationData} />;
}

export function MobileSidebar() {
  const navigationData = getAllNavigationData();
  return <MobileSidebarClient navigationData={navigationData} />;
}
