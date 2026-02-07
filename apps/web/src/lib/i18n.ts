// Supported locales for documentation
export const LOCALES = ["en", "ko", "ja", "zh"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
  ja: "日本語",
  zh: "中文",
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  en: "🇺🇸",
  ko: "🇰🇷",
  ja: "🇯🇵",
  zh: "🇨🇳",
};

/**
 * Check if a string is a valid locale
 */
export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

/**
 * Get locale from path or return default
 */
export function getLocaleFromPath(path: string): Locale {
  const segments = path.split("/").filter(Boolean);
  // Path format: /docs/[locale]/...
  if (segments[0] === "docs" && segments[1] && isValidLocale(segments[1])) {
    return segments[1];
  }
  return DEFAULT_LOCALE;
}

/**
 * Replace locale in path
 */
export function replaceLocaleInPath(path: string, newLocale: Locale): string {
  const segments = path.split("/").filter(Boolean);
  
  // Path format: /docs/[locale]/...
  if (segments[0] === "docs" && segments[1] && isValidLocale(segments[1])) {
    segments[1] = newLocale;
    return "/" + segments.join("/");
  }
  
  // If no locale in path (e.g., /docs/something), add locale
  if (segments[0] === "docs") {
    return `/docs/${newLocale}/${segments.slice(1).join("/")}`;
  }
  
  return path;
}

/**
 * Get path without locale prefix
 */
export function getPathWithoutLocale(path: string): string {
  const segments = path.split("/").filter(Boolean);
  
  // Path format: /docs/[locale]/...
  if (segments[0] === "docs" && segments[1] && isValidLocale(segments[1])) {
    return "/" + ["docs", ...segments.slice(2)].join("/");
  }
  
  return path;
}
