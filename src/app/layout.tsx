import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { BackToTop } from "@/components/shared/BackToTop";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { siteData } from "@/lib/siteData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kalendossnacks.com"),
  title: {
    template: "%s | Kalendos",
    default: `${siteData.companyName} | ${siteData.tagline}`,
  },
  description: siteData.description,
  keywords: [
    "kalendos", "kalendossnacks", "Kalendos Snacks", "kalends snacks",
    "bisküvi", "gofret", "çikolata", "kek", "wafer",
    "dolgulu bisküvi", "sürme krema", "reçel", "tahini",
    "gıda üreticisi", "gıda ihracatı", "snack üreticisi",
    "regosto", "cremora", "tahera", "berriva", "bacano", "trilex",
    "istanbul gıda", "türk gıda markası",
  ],
  authors: [{ name: "Kalendos" }],
  creator: "Kalendos",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.kalendossnacks.com",
    siteName: "Kalendos Snacks",
    title: `${siteData.companyName} | ${siteData.tagline}`,
    description: siteData.description,
    images: [
      {
        url: "https://www.kalendossnacks.com/images/logo.png",
        width: 800,
        height: 600,
        alt: "Kalendos Snacks Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.companyName} | ${siteData.tagline}`,
    description: siteData.description,
    images: ["https://www.kalendossnacks.com/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider>
            <LoadingScreen />
            <Header />
            <main className="min-h-screen pt-16 lg:pt-20 bg-background">{children}</main>
            <Footer />
            <BackToTop />
            <WhatsAppButton />
            <Toaster position="top-right" richColors />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
