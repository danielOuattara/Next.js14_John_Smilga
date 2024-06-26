import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import Providers from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Javascript",
  description:
    "I this section tutorial John Smilga develops his Tutorial on Next.js",
};

export default function RootLayout({ children }) {
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
