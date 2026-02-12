// API Routes
export const API_ROUTES = {
  HEALTH: '/api/health',
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
    ME: '/api/auth/me',
  },
  USERS: {
    BASE: '/api/users',
    BY_ID: (id: string) => `/api/users/${id}`,
  },
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// Default pagination
export const DEFAULT_PAGINATION = {
  PAGE: 1,
  LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

// Blog & Showcase & Features routes
export const CONTENT_ROUTES = {
  BLOG: {
    POSTS: '/api/blog/posts',
    POST_BY_SLUG: (slug: string) => `/api/blog/posts/${slug}`,
    AUTHORS: '/api/blog/authors',
  },
  SHOWCASE: {
    PROJECTS: '/api/showcase/projects',
    PROJECT_BY_SLUG: (slug: string) => `/api/showcase/projects/${slug}`,
    CATEGORIES: '/api/showcase/categories',
    SUBMIT: '/api/showcase/submit',
  },
  FEATURES: {
    LIST: '/api/features',
    COMPARISON: '/api/features/comparison',
  },
} as const;
