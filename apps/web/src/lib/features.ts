const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  codeExample?: string;
  codeFilename?: string;
  accentColor?: string;
  reversed: boolean;
  order: number;
}

export interface ComparisonRowItem {
  id: string;
  feature: string;
  neneValue: string;
  othersValue: string;
  hasNeneCheck: boolean;
  hasOthersCheck: boolean;
  order: number;
}

export async function fetchFeatures(): Promise<FeatureItem[]> {
  try {
    const res = await fetch(`${API_URL}/features`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function fetchComparison(): Promise<ComparisonRowItem[]> {
  try {
    const res = await fetch(`${API_URL}/features/comparison`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}
