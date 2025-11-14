import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SEO_META } from "@/utils/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: SEO_META.title,
  description: SEO_META.description,
  keywords: SEO_META.keywords,
  openGraph: {
    title: SEO_META.title,
    description: SEO_META.description,
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
