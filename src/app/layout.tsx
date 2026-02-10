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
  metadataBase: new URL("https://kalendos.vercel.app"),
  title: {
    template: "%s | Kalendos",
    default: `${siteData.companyName} | ${siteData.tagline}`,
  },
  description: siteData.description,
  keywords: ["gofret", "bisküvi", "kek", "sürme çikolata", "kalendos", "gıda üreticisi"],
  authors: [{ name: "Kalendos" }],
  creator: "Kalendos",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://kalendos.vercel.app",
    siteName: "Kalendos",
    title: `${siteData.companyName} | ${siteData.tagline}`,
    description: siteData.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.companyName} | ${siteData.tagline}`,
    description: siteData.description,
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
