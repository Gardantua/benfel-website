"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NewsCategoryFilter } from "./NewsCategoryFilter";
import { NewsCard } from "./NewsCard";
import { FeaturedNewsCard } from "./FeaturedNewsCard";
import { siteData } from "@/lib/siteData";
import type { NewsCategory } from "@/lib/types";
import { gridItem } from "@/lib/animations";

export function NewsGrid() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory | "all">("all");

  const filteredItems =
    activeCategory === "all"
      ? siteData.newsItems
      : siteData.newsItems.filter((item) => item.category === activeCategory);

  const sortedItems = [...filteredItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredItem = sortedItems.find((item) => item.isFeatured);
  const gridItems = sortedItems.filter((item) => item !== featuredItem);

  return (
    <div>
      <div className="mb-10">
        <NewsCategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {featuredItem && (
        <div className="mb-8">
          <FeaturedNewsCard item={featuredItem} />
        </div>
      )}

      <motion.div
        layout
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {gridItems.map((item) => (
            <motion.div
              key={item.id}
              variants={gridItem}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              transition={{ duration: 0.3 }}
            >
              <NewsCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
