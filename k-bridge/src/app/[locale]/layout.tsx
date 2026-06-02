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
    default:
      "K-BRIDGE | 성공적인 한국 유학의 시작과 끝, 케이브릿지와 함께 하세요.",
  },

  description:
    "성공적인 한국 유학의 첫걸음, K-BRIDGE가 함께합니다. 어학연수부터 명문대 학·석사 진학까지, 전 세계 유학생을 위한 맞춤형 컨설팅과 밀착 케어 서비스를 제공합니다.",

  keywords: [
    "외국인 한국 유학",
    "Korean universities",
    "international students",
    "유학 컨설팅",
    "한국어 공부",
    "유학원",
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
    title: "K-BRIDGE | 성공적인 한국 유학의 시작",
    description:
      "성공적인 한국 유학의 첫걸음, K-BRIDGE가 함께합니다. 어학연수부터 명문대 학·석사 진학까지, 전 세계 유학생을 위한 맞춤형 컨설팅과 밀착 케어 서비스를 제공합니다.",
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
