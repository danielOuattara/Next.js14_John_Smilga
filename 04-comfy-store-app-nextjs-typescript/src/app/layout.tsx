import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Container, Providers } from "@/components/global";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Comfy Store Next TS",
  description: `An incredible store website built with Next.js & TypeScript. 
  This app includes technologies like Next.js, TypeScript, Supabase, Postgres, Clerk(authentication), Shadcn/ui, TailwindCSS, Stripe `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          <Container className="py-20">{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
