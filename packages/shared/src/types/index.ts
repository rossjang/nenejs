// Common types shared between frontend and backend

export interface User {
  id: string;
  email: string;
  name: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface HealthStatus {
  status: 'ok' | 'error';
  timestamp: string;
  uptime?: number;
}

// Blog types
export type BlogCategory = 'announcement' | 'tutorial' | 'engineering' | 'community';

export interface Author {
  id: string;
  name: string;
  role?: string;
  avatar?: string;
  bio?: string;
  twitter?: string;
  github?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage?: string;
  category: BlogCategory;
  tags: string[];
  author: Author;
  readingTime: number;
  featured: boolean;
  published: boolean;
  publishedAt?: string;
  createdAt: string;
}

// Showcase types
export type ShowcaseCategory = 'ai' | 'saas' | 'ecommerce' | 'opensource' | 'devtools' | 'creative';

export interface ShowcaseProject {
  id: string;
  slug: string;
  name: string;
  description: string;
  image?: string;
  category: ShowcaseCategory;
  tags: string[];
  url?: string;
  github?: string;
  featured: boolean;
}

// Feature types
export interface Feature {
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

export interface ComparisonRow {
  id: string;
  feature: string;
  neneValue: string;
  othersValue: string;
  hasNeneCheck: boolean;
  hasOthersCheck: boolean;
  order: number;
}
