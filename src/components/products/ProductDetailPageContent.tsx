"use client";

import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ProductDetail } from "@/components/products/ProductDetail";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import { CTASection } from "@/components/home/CTASection";
import { useLanguage } from "@/context/LanguageContext";
import type { Product } from "@/lib/types";

interface ProductDetailPageContentProps {
  product: Product;
}

export function ProductDetailPageContent({ product }: ProductDetailPageContentProps) {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-background pt-28 pb-16 lg:pt-36 lg:pb-24">
        <Container>
          <Breadcrumbs
            variant="light"
            items={[
              { label: t.nav.home, href: "/" },
              { label: t.products.pageTitle, href: "/urunler" },
              { label: product.name },
            ]}
          />
          <div className="mt-8">
            <ProductDetail product={product} />
          </div>
        </Container>
      </section>
      <RelatedProducts currentProduct={product} />
      <CTASection />
    </>
  );
}
