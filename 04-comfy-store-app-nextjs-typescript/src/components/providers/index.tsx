"use client";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "../ui/toaster";

type TypeProps = {
  children: React.ReactNode;
};

export default function Provider({ children }: TypeProps) {
  return (
    <>
      <Toaster />
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
