import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    url: "https://myportfolio-two-sable-94.vercel.app/",
    images: [
      {
        url: "https://bharatmaha.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bharat Mahajan | Full Stack Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Mahajan | Full Stack Web Developer",
    description: "Portfolio of Bharat Mahajan, a full stack web developer.",
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
