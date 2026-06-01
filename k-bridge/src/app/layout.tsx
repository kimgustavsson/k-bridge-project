import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { FloatingActions } from "@/components/layout/FloatingActions";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "K-BRIDGE | Your Gateway to Study in Korea",
  description:
    "Connect with Korea's leading universities through our comprehensive educational consulting services. End-to-end support for international students.",
  keywords: [
    "study in Korea",
    "Korean universities",
    "international students",
    "study abroad",
    "Korean language",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}