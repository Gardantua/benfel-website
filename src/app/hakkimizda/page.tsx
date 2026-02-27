import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "Kurumsal | Kalendos Snacks",
  description: "Kalendos Snacks, 2017'den bu yana İstanbul'da bisküvi, gofret ve kek üretip ihraç eden lider Türk gıda firmasıdır. Misyon, vizyon ve hikayemizi keşfedin.",
  keywords: [
    "kalendos kurumsal", "kalendossnacks hakkında",
    "türk gıda üreticisi", "gıda ihracatı", "istanbul gıda fabrikası",
    "bisküvi üreticisi türkiye",
  ],
  openGraph: {
    title: "Kurumsal | Kalendos Snacks",
    description: "Kalendos Snacks, 2017'den bu yana İstanbul'da bisküvi, gofret ve kek üretip ihraç eden lider Türk gıda firmasıdır.",
    images: [{ url: "https://www.kalendossnacks.com/images/logo.png", alt: "Kalendos Snacks" }],
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
