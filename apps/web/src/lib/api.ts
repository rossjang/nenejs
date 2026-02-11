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

async function request<T>(
  path: string,
  options: RequestInit = {},
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
      return request('/auth/logout', { method: 'POST' });
    },

    me(): Promise<User> {
      return request('/auth/me');
    },
  },
};

export { ApiError };
