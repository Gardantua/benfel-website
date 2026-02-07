"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/lib/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { staggerContainer, scaleUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function FeaturedProducts() {
  const { t } = useLanguage();
  const featured = siteData.products
    .filter((p) => p.isFeatured)
    .slice(0, 6);

  const getCategoryName = (categoryId: string) => {
    const key = categoryId as keyof typeof t.categories;
    return t.categories[key] ?? categoryId;
  };

  const getProductDescription = (productId: string, fallback: string) => {
    const key = productId as keyof typeof t.productDescriptions;
    return t.productDescriptions[key] ?? fallback;
  };

  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow={t.products.eyebrow}
            title={t.products.title}
            subtitle={t.products.subtitle}
          />
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[320px]"
        >
          {featured.map((product) => {
            const slug = product.slug || product.id;
            return (
              <motion.div
                key={product.id}
                variants={scaleUp}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-card",
                  product.gridSpan === "wide" && "sm:col-span-2",
                  product.gridSpan === "tall" && "row-span-2"
                )}
              >
                <Link href={`/urunler/${slug}`} className="block h-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent z-10" />
                  <div className="relative h-full w-full bg-gradient-to-b from-background to-muted/50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8 drop-shadow-xl transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                    <Badge
                      variant="secondary"
                      className="mb-2 bg-accent/90 text-accent-foreground text-xs"
                    >
                      {getCategoryName(product.category)}
                    </Badge>
                    <h3 className="font-serif text-xl font-bold text-white">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/70 line-clamp-2">
                      {getProductDescription(product.id, product.description)}
                    </p>
                    {/* B2B Weight Options */}
                    {product.weights && product.weights.length > 0 && (
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-white/60">
                        <Package className="h-3.5 w-3.5" />
                        <span>{product.weights.slice(0, 3).join(" | ")}{product.weights.length > 3 ? " ..." : ""}</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-light transition-colors group"
          >
            {t.products.viewAll}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
