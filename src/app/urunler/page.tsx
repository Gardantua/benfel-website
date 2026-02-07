import type { Metadata } from "next";
import { ProductsPageContent } from "@/components/products/ProductsPageContent";

export const metadata: Metadata = {
  title: "Ürünler | Benfel",
  description: "Benfel gofret, bisküvi, kek ve sürme çikolata ürün çeşitleri. Premium kalitede lezzetler.",
  keywords: ["benfel ürünleri", "gofret çeşitleri", "bisküvi çeşitleri", "kek çeşitleri"],
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
