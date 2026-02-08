import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "Kurumsal | Kalendos",
  description: "Kalendos'in hikayesi, misyonu ve vizyonu. On yılı aşkın tecrübeyle kaliteden ödün vermeden üretiyoruz.",
  keywords: ["kalendos kurumsal", "gıda üreticisi", "türk gıda sektörü"],
};

export default function AboutPage() {
  return <AboutPageContent />;
}
