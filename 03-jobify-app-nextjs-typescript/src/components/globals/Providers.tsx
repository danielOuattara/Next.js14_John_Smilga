"use client";

import { ThemeProvider } from "./ThemeProvider";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/toaster";

type TypeProps = {
  children: React.ReactNode;
};

/**
 * **Implementation**: Using `useState`
 *
 * ```ts
 * const [queryClient] = useState(() => new QueryClient({...}));
 * ```
 *
 * **How it works**:
 * - The `useState` hook ensures that the `QueryClient` instance is created only once per component lifecycle.
 * - Even if the `Providers` component re-renders, the `QueryClient` will not be recreated, avoiding unnecessary resets of the client state and cache.
 *
 * **Advantages**:
 * 1. **Avoids Recreation on Re-Renders**:
 *    - This approach ensures that the `QueryClient` persists across renders, which is particularly important for preserving React Query’s cache and state.
 * 2. **Recommended for Stable Instances**:
 *    - Using `useState` is idiomatic for managing objects that you want to remain stable across renders.
 */

export function Providers({ children }: TypeProps) {
  // Create a client
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000 * 5,
          },
        },
      }),
  );
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
