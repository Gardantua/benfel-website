"use client";

import { cn } from "@/lib/utils";
import { siteData } from "@/lib/siteData";
import type { ProductCategory } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";

interface CategoryFilterProps {
  activeCategory: ProductCategory | "all";
  onCategoryChange: (category: ProductCategory | "all") => void;
}

export function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const { t } = useLanguage();

  const getCategoryName = (categoryId: string) => {
    const key = categoryId as keyof typeof t.categories;
    return t.categories[key] ?? categoryId;
  };

  return (
    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3">
      <button
        onClick={() => onCategoryChange("all")}
        className={cn(
          "rounded-full px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200",
          activeCategory === "all"
            ? "bg-accent text-accent-foreground shadow-md"
            : "bg-card text-muted-foreground hover:bg-muted border border-border"
        )}
      >
        {t.products.all}
      </button>
      {siteData.categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "rounded-full px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200",
            activeCategory === category.id
              ? "bg-accent text-accent-foreground shadow-md"
              : "bg-card text-muted-foreground hover:bg-muted border border-border"
          )}
        >
          {getCategoryName(category.id)}
        </button>
      ))}
    </div>
  );
}
