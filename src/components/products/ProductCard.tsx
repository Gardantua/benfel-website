"use client";

import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
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

  const getCategoryName = (categoryId: string) => {
    const key = categoryId as keyof typeof t.categories;
    return t.categories[key] ?? categoryId;
  };

  const getProductDescription = (productId: string) => {
    const key = productId as keyof typeof t.productDescriptions;
    return t.productDescriptions[key] ?? product.description;
  };

  const slug = product.slug || product.id;

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="#C5943A"
      glarePosition="all"
      scale={1.02}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      transitionSpeed={300}
      className={cn(
        product.gridSpan === "wide" && "sm:col-span-2",
        product.gridSpan === "tall" && "row-span-2"
      )}
    >
      <Link
        href={`/urunler/${slug}`}
        className="group relative block h-full overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300"
      >
        {/* Image area */}
        <div className="relative aspect-[3/2] bg-gradient-to-b from-background to-muted/30 overflow-hidden rounded-t-2xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3 drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
    </Tilt>
  );
}
