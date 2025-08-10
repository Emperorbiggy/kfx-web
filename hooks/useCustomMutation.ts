/* eslint-disable @typescript-eslint/no-explicit-any */

import apiInterceptors from "@/utils/api.interceptors";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  QueryKey,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export type CustomMutationOptions<TData, TVariables> = Omit<
  UseMutationOptions<TData, unknown, TVariables>,
  "mutationFn"
> & {
  route: string;
  method?: "POST" | "PUT" | "DELETE" | "PATCH" | "GET";
  queryParams?: Record<string, any>;
  loadingMsg?: string;
  successMsg?: string;
  errorMsg?: string;
  invalidateKeys?: QueryKey[];
  showToast?: boolean; // Add option to disable toast notifications
};

export function useCustomMutation<TData = any, TVariables = void>({
  loadingMsg = "Processing...",
  successMsg,
  errorMsg,
  invalidateKeys = [],
  route,
  method = "POST",
  showToast = true,
  queryParams = {},
  ...options
}: CustomMutationOptions<TData, TVariables>): UseMutationResult<
  TData,
  unknown,
  TVariables
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (variables: TVariables) => {
      console.log("Custom Mutation Variables:", variables);
      const baseUrl = route.startsWith("/api/") ? route : `/api/${route}`;
      const url =
        Object.keys(queryParams).length > 0
          ? `${baseUrl}?${new URLSearchParams(queryParams)}`
          : baseUrl;
console.log("Custom Mutation URL:", url);
      if (showToast) {
        toast.loading(loadingMsg, { id: "mutation-toast" });
      }

      let response;
      switch (method) {
        case "GET":
          response = await apiInterceptors.get(url);
          break;
        case "POST":
          response = await apiInterceptors.post(url, variables);
          break;
        case "PUT":
          response = await apiInterceptors.put(url, variables);
          break;
        case "DELETE":
          response = await apiInterceptors.delete(url, { data: variables });
          break;
        case "PATCH":
          response = await apiInterceptors.patch(url, variables);
          break;
        default:
          throw new Error(`Unsupported request method: ${method}`);
      }

      return response.data;
    },
    onSuccess: (data, variables, context) => {
      if (showToast && successMsg) {
        toast.success(successMsg, { id: "mutation-toast" });
      }
      invalidateKeys.forEach((key) =>
        queryClient.invalidateQueries({ queryKey: key })
      );
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error: any, variables, context) => {
      if (showToast) {
        const errorMessage =
          errorMsg || error?.response?.data?.message || "An error occurred";
        toast.error(errorMessage, { id: "mutation-toast" });
      }
      options?.onError?.(error, variables, context);
    },
    ...options,
  });
}


