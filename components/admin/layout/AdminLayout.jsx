"use client";

import { useSidebar } from "@/hooks/useSidebar";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import Backdrop from "./Backdrop";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // Good baseline for admin UIs
      refetchOnWindowFocus: true, // Refresh when tab regains focus
      retry: 1, // Auto-retry failed requests
    },
  },
});

export default function AdminLayout({ children }) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen xl:flex">
          <AppSidebar />
          <Backdrop />
          <div
            className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
          >
            <AppHeader />

            <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
              {children}
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </SessionProvider>
  );
}
