"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CategoryFilter } from "./CategoryFilter";
import { ProductCard } from "./ProductCard";
import { siteData } from "@/lib/siteData";
import type { ProductCategory } from "@/lib/types";
import { gridItem } from "@/lib/animations";
import { useLanguage } from "@/context/LanguageContext";

export function ProductGrid() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<
    ProductCategory | "all"
  >("all");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && siteData.categories.some((c) => c.id === cat)) {
      setActiveCategory(cat as ProductCategory);
    }
  }, [searchParams]);

  const filteredProducts =
    activeCategory === "all"
      ? siteData.products
      : siteData.products.filter((p) => p.category === activeCategory);

  return (
    <div>
      <div className="mb-10">
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      <motion.div
        layout
        className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={gridItem}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          {t.products.noProducts}
        </p>
      )}
    </div>
  );
}
