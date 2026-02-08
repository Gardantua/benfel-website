"use client";

import { Download, FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function CatalogBanner() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#3C1518]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--accent)_0%,_transparent_70%)] opacity-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <a
          href="/benfel-product-catalogue-2023.pdf"
          download
          className="group flex items-center justify-between gap-4 py-3 sm:py-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C5943A]/20">
              <FileText className="h-4 w-4 text-[#C5943A]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white sm:text-base">
                {t.products.downloadCatalog}
              </p>
              <p className="hidden text-xs text-white/50 sm:block">
                {t.products.catalogDesc}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-[#C5943A] px-4 py-2 text-sm font-semibold text-white transition-all group-hover:bg-[#d4a34a] shrink-0">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">PDF</span>
          </div>
        </a>
      </div>
    </section>
  );
}
