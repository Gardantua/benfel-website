"use client";

import { Download } from "lucide-react";
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

          {/* PDF Catalog Download */}
          <div className="mt-16 flex justify-center">
            <a
              href="/benfel-product-catalogue-2023.pdf"
              download
              className="group inline-flex items-center gap-3 rounded-2xl border border-accent/20 bg-accent/5 px-6 py-4 transition-all hover:border-accent/40 hover:bg-accent/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Download className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {t.products.downloadCatalog}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t.products.catalogDesc}
                </p>
              </div>
            </a>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
