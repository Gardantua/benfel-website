"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const imageAreaRef = useRef<HTMLDivElement>(null);

  const getCategoryName = (categoryId: string) => {
    const key = categoryId as keyof typeof t.categories;
    return t.categories[key] ?? categoryId;
  };

  const getProductDescription = (productId: string) => {
    const key = productId as keyof typeof t.productDescriptions;
    return t.productDescriptions[key] ?? product.description;
  };

  const slug = product.slug || product.id;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (product.images.length <= 1 || !imageAreaRef.current) return;

      const rect = imageAreaRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      const index = Math.min(
        Math.floor(percentage * product.images.length),
        product.images.length - 1
      );
      setCurrentImageIndex(index);
    },
    [product.images.length]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setCurrentImageIndex(0);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  return (
    <div
      className={cn(
        product.gridSpan === "wide" && "sm:col-span-2",
        product.gridSpan === "tall" && "row-span-2"
      )}
    >
      <Link
        href={`/urunler/${slug}`}
        className="group relative block h-full overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300"
      >
        {/* Image area - mouse position determines which image */}
        <div
          ref={imageAreaRef}
          className="relative aspect-[3/2] bg-gradient-to-b from-background to-muted/30 overflow-hidden rounded-t-2xl"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Zone indicators on top (thin bars showing which zone is active) */}
          {product.images.length > 1 && isHovering && (
            <div className="absolute top-0 left-0 right-0 z-10 flex gap-1 px-3 pt-2">
              {product.images.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-0.5 flex-1 rounded-full transition-all duration-200",
                    index === currentImageIndex
                      ? "bg-accent"
                      : "bg-foreground/20"
                  )}
                />
              ))}
            </div>
          )}

          {product.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${product.name} - ${index + 1}`}
              fill
              className={cn(
                "object-contain p-3 transition-opacity duration-300",
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              )}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ))}

          <div className="absolute top-3 right-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <Badge
            variant="secondary"
            className="mb-2 bg-accent/10 text-accent text-xs font-medium"
          >
            {getCategoryName(product.category)}
          </Badge>
          <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {getProductDescription(product.id)}
          </p>

          {/* B2B Weight Options */}
          {product.weights && product.weights.length > 0 && (
            <div className="mt-3 pt-3 border-t border-border/50">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Package className="h-3.5 w-3.5 text-accent" />
                <span className="font-medium text-foreground">
                  {product.weights.join(" | ")}
                </span>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
