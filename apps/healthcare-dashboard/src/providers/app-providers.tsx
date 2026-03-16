"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useThemeStore } from "@/store/ui-store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
      refetchOnWindowFocus: false,
    },
  },
});

export function AppProviders({ children }: { children: ReactNode }) {
  const { mode } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
