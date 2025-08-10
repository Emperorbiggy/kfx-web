/* eslint-disable @typescript-eslint/no-explicit-any */
import apiInterceptors from "@/utils/api.interceptors";
import { useQuery, UseQueryOptions, QueryKey } from "@tanstack/react-query";

/**
 * Fetch data using React Query
 * @template TData
 * @template TError
 * @param {string} route
 * @param {Record<string, any>} [queryParams={}] - Query parameters for the API call.
 * @param {UseQueryOptions<TData, TError>} [options] - Optional React Query options.
 * @returns {object} Query result containing `data`, `isLoading`, `error`, etc.
 */
export const useFetchData = <TData = unknown, TError = unknown>(
  queryKey: QueryKey,
  route: string,
  queryParams: Record<string, any> = {},
  options?: UseQueryOptions<TData, TError>
) => {
  return useQuery<TData, TError>({
    queryKey, // Unique query key
    queryFn: async () => {
      try {
        const response = await apiInterceptors.get(route, { params: queryParams });
        return response as TData;
      } catch (error) {
        throw error; // Ensure the error propagates to React Query
      }
    },
    retry: 2, // Retry failed queries up to 3 times (customizable)
    ...options, // Spread additional options
  });
};
