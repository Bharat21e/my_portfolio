import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-expect-error Next.js resolves global CSS imports at build time.
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bharat Mahajan | Full Stack Web Developer",
  description: "Portfolio of Bharat Mahajan, a full stack web developer.",
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
