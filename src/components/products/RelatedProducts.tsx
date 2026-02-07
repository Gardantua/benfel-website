"use client";

import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProductCard } from "./ProductCard";
import { siteData } from "@/lib/siteData";
import type { Product } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";

interface RelatedProductsProps {
  currentProduct: Product;
}

export function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  const { t } = useLanguage();

  const related = siteData.products
    .filter(
      (p) =>
        p.category === currentProduct.category &&
        p.id !== currentProduct.id
    )
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow={t.products.relatedProducts}
            title={t.products.relatedTitle}
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((product) => (
            <ScrollReveal key={product.id} direction="scale">
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
