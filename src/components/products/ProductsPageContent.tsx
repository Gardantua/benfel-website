"use client";

import { Download, FileText } from "lucide-react";
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

      {/* PDF Catalog Banner */}
      <section className="relative bg-accent overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--accent-light)_0%,_transparent_60%)] opacity-30" />
        <Container className="relative z-10 py-10 sm:py-14">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-foreground/15">
                <FileText className="h-7 w-7 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-accent-foreground">
                  {t.products.downloadCatalog}
                </h3>
                <p className="text-sm text-accent-foreground/70 mt-0.5">
                  {t.products.catalogDesc}
                </p>
              </div>
            </div>
            <a
              href="/benfel-product-catalogue-2023.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full bg-accent-foreground text-accent px-6 py-3 font-semibold transition-all hover:opacity-90 shrink-0"
            >
              <Download className="h-5 w-5" />
              {t.products.downloadCatalog}
            </a>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
