import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Typescript",
  description:
    "I this section tutorial John Smilga develops his Tutorial on Next.js",
};

type TypeRootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: TypeRootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="px-8 py-20 max-w-6xl mx-auto">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
