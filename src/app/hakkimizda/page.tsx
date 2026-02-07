import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "Kurumsal | Benfel",
  description: "Benfel'in hikayesi, misyonu ve vizyonu. On yılı aşkın tecrübeyle kaliteden ödün vermeden üretiyoruz.",
  keywords: ["benfel kurumsal", "gıda üreticisi", "türk gıda sektörü"],
};

export default function AboutPage() {
  return <AboutPageContent />;
}
