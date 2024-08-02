"use client";

import { ThemeProvider } from "@/components/providers/ThemeProvider";

type TypeProps = {
  children: React.ReactNode;
};

export default function Provider({ children }: TypeProps) {
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
