import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-expect-error Next.js resolves global CSS imports at build time.
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bharat Mahajan | Full Stack Web Developer",
  description: "Portfolio of Bharat Mahajan, a full stack web developer.",
  openGraph: {
    siteName: "Bharat Mahajan | Full Stack Web Developer",
    title: "Bharat Mahajan | Full Stack Web Developer",
    description: "Portfolio of Bharat Mahajan, a full stack web developer.",
    url: "https://bharatmaha.com",
    images: [
      {
        url: "https://bharatmaha.com/hero-art.jpg",
        width: 1200,
        height: 630,
        alt: "Bharat Mahajan | Full Stack Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
