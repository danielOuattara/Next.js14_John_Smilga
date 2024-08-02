import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Container } from "@/components/global";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Store",
  description: `A nifty store built with Next.js. 
  This app includes technologies like Next.js, Typscript, Shadcn/ui, TailwindCSS, Stripe `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Container className="border rounded border-fuchsia-400 my-2 py-20">
          {children}
        </Container>
      </body>
    </html>
  );
}
