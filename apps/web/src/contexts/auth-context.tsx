"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { User } from "@nene/shared";
import { api, ApiError } from "@/lib/api";

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

interface AuthContextValue extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  });

  // Check for existing token on mount
  useEffect(() => {
    api.auth
      .me()
      .then((user) => {
        setState({ user, isLoading: false, isAuthenticated: true });
      })
      .catch(() => {
        localStorage.removeItem("accessToken");
        setState({ user: null, isLoading: false, isAuthenticated: false });
      });
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const { user, accessToken } = await api.auth.login({ email, password });
    localStorage.setItem("accessToken", accessToken);
    setState({ user, isLoading: false, isAuthenticated: true });
  }, []);

  const register = useCallback(
    async (email: string, password: string, name?: string) => {
      const { user, accessToken } = await api.auth.register({
        email,
        password,
        name,
      });
      localStorage.setItem("accessToken", accessToken);
      setState({ user, isLoading: false, isAuthenticated: true });
    },
    [],
  );

  const logout = useCallback(() => {
    localStorage.removeItem("accessToken");
    setState({ user: null, isLoading: false, isAuthenticated: false });
    api.auth.logout().catch(() => {});
  }, []);

  const value = useMemo(
    () => ({ ...state, login, register, logout }),
    [state, login, register, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { ApiError };
