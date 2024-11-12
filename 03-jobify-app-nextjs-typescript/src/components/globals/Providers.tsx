"use client";

import { ThemeProvider } from "./ThemeProvider";

type TypeProps = {
  children: React.ReactNode;
};

export function Providers({ children }: TypeProps) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
