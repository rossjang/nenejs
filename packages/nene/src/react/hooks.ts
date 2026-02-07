"use client";

import { useState, useEffect, useCallback } from "react";

export interface UseQueryOptions<T> {
  enabled?: boolean;
  refetchInterval?: number;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

export interface UseQueryResult<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export interface UseMutationOptions<T, V> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  onMutate?: (variables: V) => void;
}

export interface UseMutationResult<T, V> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  mutate: (variables: V) => void;
  mutateAsync: (variables: V) => Promise<T>;
}

/**
 * Simple query hook for data fetching
 */
export function useQuery<T>(
  queryKey: (string | number | object)[],
  queryFn: () => Promise<T>,
  options: UseQueryOptions<T> = {}
): UseQueryResult<T> {
  const { enabled = true, refetchInterval, onSuccess, onError } = options;

  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    if (!enabled) return;

    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const result = await queryFn();
      setData(result);
      onSuccess?.(result);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      setIsError(true);
      onError?.(error);
    } finally {
      setIsLoading(false);
    }
  }, [enabled, queryFn, onSuccess, onError]);

  useEffect(() => {
    fetchData();
  }, [fetchData, ...queryKey]);

  useEffect(() => {
    if (refetchInterval && enabled) {
      const interval = setInterval(fetchData, refetchInterval);
      return () => clearInterval(interval);
    }
  }, [refetchInterval, enabled, fetchData]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchData,
  };
}

/**
 * Simple mutation hook for data mutations
 */
export function useMutation<T, V = void>(
  mutationFn: (variables: V) => Promise<T>,
  options: UseMutationOptions<T, V> = {}
): UseMutationResult<T, V> {
  const { onSuccess, onError, onMutate } = options;

  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const mutateAsync = useCallback(
    async (variables: V): Promise<T> => {
      setIsLoading(true);
      setIsError(false);
      setError(null);
      onMutate?.(variables);

      try {
        const result = await mutationFn(variables);
        setData(result);
        onSuccess?.(result);
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        setError(error);
        setIsError(true);
        onError?.(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [mutationFn, onSuccess, onError, onMutate]
  );

  const mutate = useCallback(
    (variables: V) => {
      mutateAsync(variables).catch(() => {
        // Error is handled by state
      });
    },
    [mutateAsync]
  );

  return {
    data,
    isLoading,
    isError,
    error,
    mutate,
    mutateAsync,
  };
}
