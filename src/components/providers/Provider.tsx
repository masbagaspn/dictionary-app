"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {
  children: React.ReactNode;
} & ThemeProviderProps;

const queryClient = new QueryClient();

export function Provider({ children }: Props) {
  return (
    <NextUIProvider>
      <NextThemeProvider
        attribute="class"
        defaulTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </NextThemeProvider>
    </NextUIProvider>
  );
}
