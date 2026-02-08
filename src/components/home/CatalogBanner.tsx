"use client";

import { Download, FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function CatalogBanner() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary-light)_0%,_transparent_70%)] opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <a
          href="/benfel-product-catalogue-2023.pdf"
          download
          className="group flex items-center justify-between gap-4 py-3 sm:py-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15">
              <FileText className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary-foreground sm:text-base">
                {t.products.downloadCatalog}
              </p>
              <p className="hidden text-xs text-primary-foreground/60 sm:block">
                {t.products.catalogDesc}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-all group-hover:bg-accent-light shrink-0">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">PDF</span>
          </div>
        </a>
      </div>
    </section>
  );
}
