"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Package, Boxes, Weight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import type { Product } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { t } = useLanguage();

  const getCategoryName = (categoryId: string) => {
    const key = categoryId as keyof typeof t.categories;
    return t.categories[key] ?? categoryId;
  };

  const getProductDescription = (productId: string) => {
    const key = productId as keyof typeof t.productDescriptions;
    return t.productDescriptions[key] ?? product.description;
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      {/* Image */}
      <ScrollReveal direction="left">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-background via-muted/30 to-muted/50 border border-border/30">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6 drop-shadow-2xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </ScrollReveal>

      {/* Info */}
      <ScrollReveal direction="right">
        <Link
          href="/urunler"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.products.backToProducts}
        </Link>

        <Badge className="mb-3 bg-accent/10 text-accent">
          {getCategoryName(product.category)}
        </Badge>

        <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
          {product.name}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {getProductDescription(product.id)}
        </p>

        <Separator className="my-6 bg-border" />

        {/* B2B Technical Specifications */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <Package className="h-5 w-5 text-accent" />
            {t.products.technicalSpecs}
          </h3>

          {/* Weight Options */}
          {product.weights && product.weights.length > 0 && (
            <div className="rounded-xl bg-card p-4 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Weight className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-foreground">{t.products.weightOptions}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.weights.map((weight, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
                  >
                    {weight}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Packaging & Box Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.packaging && (
              <div className="rounded-xl bg-card p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Boxes className="h-4 w-4 text-accent" />
                  <span className="text-sm font-semibold text-foreground">{t.products.packaging}</span>
                </div>
                <span className="text-lg font-bold text-foreground">{product.packaging}</span>
              </div>
            )}

            {product.boxInfo && (
              <div className="rounded-xl bg-card p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="h-4 w-4 text-accent" />
                  <span className="text-sm font-semibold text-foreground">{t.products.container}</span>
                </div>
                <span className="text-lg font-bold text-foreground">{product.boxInfo}</span>
              </div>
            )}
          </div>

          {product.code && (
            <div className="text-sm text-muted-foreground">
              {t.products.productCode}: <span className="font-mono font-semibold text-foreground">{product.code}</span>
            </div>
          )}
        </div>

        <div className="mt-8">
          <Link href="/iletisim">
            <Button className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold">
              {t.products.contactForOrder}
            </Button>
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
