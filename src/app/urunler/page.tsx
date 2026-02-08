import type { Metadata } from "next";
import { ProductsPageContent } from "@/components/products/ProductsPageContent";

export const metadata: Metadata = {
  title: "Ürünler | Kalendos",
  description: "Kalendos gofret, bisküvi, kek ve sürme çikolata ürün çeşitleri. Premium kalitede lezzetler.",
  keywords: ["kalendos ürünleri", "gofret çeşitleri", "bisküvi çeşitleri", "kek çeşitleri"],
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
