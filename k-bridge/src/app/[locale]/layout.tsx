import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { FloatingActions } from "@/components/layout/FloatingActions";
import "../globals.css";

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
  metadataBase: new URL("https://www.kbridgeedu.com"),

  title: {
    template: "%s | K-BRIDGE",
    default: "K-BRIDGE | Your Gateway to Study in Korea",
  },

  description:
    "Connect with Korea's leading universities through our comprehensive educational consulting services. End-to-end support for international students.",

  keywords: [
    "study in Korea",
    "Korean universities",
    "international students",
    "study abroad",
    "Korean language",
    "한국 유학",
    "어학연수",
    "한국 대학 진학",
  ],

  alternates: {
    canonical: "/",
    languages: {
      ko: "/",
      en: "/en",
    },
  },

  openGraph: {
    title: "K-BRIDGE | Your Gateway to Study in Korea",
    description:
      "Connect with Korea's leading universities through our comprehensive educational consulting services.",
    url: "/",
    siteName: "K-BRIDGE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "K-BRIDGE Study in Korea",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        <NextIntlClientProvider>
          {children}
          <FloatingActions />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
