import type { Metadata } from "next";
import { ProductsPageContent } from "@/components/products/ProductsPageContent";

export const metadata: Metadata = {
  title: "Ürünler | Kalendos Snacks",
  description: "Kalendos Snacks ürün çeşitleri: gofret, dolgulu bisküvi, kremalı bisküvi, sürme krema ve reçel. Krevia, Tilento, Veloria, Cremora, Tahera, Berriva markaları.",
  keywords: [
    "kalendos ürünleri", "kalendossnacks ürünleri",
    "krevia bisküvi", "tilento gofret", "veloria bisküvi",
    "cremora fındık kreması", "tahera tahin", "berriva reçel",
    "gofret çeşitleri", "dolgulu bisküvi", "sürme krema",
  ],
  openGraph: {
    title: "Ürünler | Kalendos Snacks",
    description: "Kalendos Snacks ürün çeşitleri: gofret, dolgulu bisküvi, kremalı bisküvi, sürme krema ve reçel.",
    images: [{ url: "https://www.kalendossnacks.com/images/logo.png", alt: "Kalendos Snacks Ürünleri" }],
  },
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
