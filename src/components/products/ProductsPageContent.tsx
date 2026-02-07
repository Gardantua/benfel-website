"use client";

import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/layout/Container";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CTASection } from "@/components/home/CTASection";
import { useLanguage } from "@/context/LanguageContext";

export function ProductsPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t.products.pageTitle}
        subtitle={t.products.pageSubtitle}
        breadcrumbs={[
          { label: t.nav.home, href: "/" },
          { label: t.products.pageTitle },
        ]}
      />
      <section className="bg-background py-16 lg:py-24">
        <Container>
          <ProductGrid />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
