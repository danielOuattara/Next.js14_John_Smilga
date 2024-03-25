import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type TypeRootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: TypeRootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="text-2xl text-primary">navbar</nav>
        {children}
      </body>
    </html>
  );
}
