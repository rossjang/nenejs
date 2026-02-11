import type { AuthResponse, User } from '@nene/shared';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Refresh mutex: concurrent 401s share a single refresh request
let refreshPromise: Promise<AuthResponse> | null = null;

async function refreshTokens(): Promise<AuthResponse> {
  const refreshToken = localStorage.getItem('refreshToken');
  if (!refreshToken) throw new ApiError(401, 'No refresh token');

  const res = await fetch(`${API_BASE}/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });

  if (!res.ok) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    throw new ApiError(res.status, 'Token refresh failed');
  }

  const data: AuthResponse = await res.json();
  localStorage.setItem('accessToken', data.accessToken);
  localStorage.setItem('refreshToken', data.refreshToken);
  return data;
}

async function request<T>(
  path: string,
  options: RequestInit = {},
  retry = true,
): Promise<T> {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...((options.headers as Record<string, string>) || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  // 401 auto-retry with refresh token
  if (res.status === 401 && retry && typeof window !== 'undefined') {
    try {
      if (!refreshPromise) {
        refreshPromise = refreshTokens();
      }
      await refreshPromise;
      refreshPromise = null;
      return request<T>(path, options, false);
    } catch {
      refreshPromise = null;
      throw new ApiError(401, 'Session expired');
    }
  }

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const message =
      Array.isArray(body.message) ? body.message.join(', ') : body.message || res.statusText;
    throw new ApiError(res.status, message);
  }

  if (res.status === 204) return undefined as T;

  return res.json();
}

export const api = {
  auth: {
    register(data: { email: string; password: string; name?: string }): Promise<AuthResponse> {
      return request('/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    },

    login(data: { email: string; password: string }): Promise<AuthResponse> {
      return request('/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    },

    logout(): Promise<{ message: string }> {
      const refreshToken = typeof window !== 'undefined'
        ? localStorage.getItem('refreshToken')
        : null;
      return request('/auth/logout', {
        method: 'POST',
        body: JSON.stringify({ refreshToken }),
      });
    },

    me(): Promise<User> {
      return request('/auth/me');
    },
  },
};

export { ApiError };
