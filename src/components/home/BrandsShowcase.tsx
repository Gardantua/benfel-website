"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

interface ProductImage {
  src: string;
  href: string;
}

interface Brand {
  name: string;
  description: string;
  images: ProductImage[];
  href: string;
  color: string;
}

const spreadConfig: Record<
  number,
  { normal: { x: number; y: number; rotate: number; scale: number; zIndex: number }[]; hover: { x: number; y: number; rotate: number; scale: number; zIndex: number }[] }
> = {
  1: {
    normal: [{ x: 0, y: 0, rotate: 0, scale: 1, zIndex: 1 }],
    hover:  [{ x: 0, y: 0, rotate: 0, scale: 1.12, zIndex: 1 }],
  },
  2: {
    normal: [
      { x: -12, y: 0, rotate: -6, scale: 0.88, zIndex: 1 },
      { x:  12, y: 0, rotate:  6, scale: 0.88, zIndex: 2 },
    ],
    hover: [
      { x: -38, y: 0, rotate: -10, scale: 1.05, zIndex: 1 },
      { x:  38, y: 0, rotate:  10, scale: 1.05, zIndex: 2 },
    ],
  },
  3: {
    normal: [
      { x: -14, y:  4, rotate: -8, scale: 0.82, zIndex: 1 },
      { x:   0, y: -2, rotate:  0, scale: 0.88, zIndex: 3 },
      { x:  14, y:  4, rotate:  8, scale: 0.82, zIndex: 2 },
    ],
    hover: [
      { x: -46, y:  6, rotate: -13, scale: 1.0,  zIndex: 1 },
      { x:   0, y: -8, rotate:   0, scale: 1.12, zIndex: 3 },
      { x:  46, y:  6, rotate:  13, scale: 1.0,  zIndex: 2 },
    ],
  },
  4: {
    normal: [
      { x: -21, y:  4, rotate: -10, scale: 0.78, zIndex: 1 },
      { x:  -7, y:  0, rotate:  -3, scale: 0.84, zIndex: 2 },
      { x:   7, y:  0, rotate:   3, scale: 0.84, zIndex: 3 },
      { x:  21, y:  4, rotate:  10, scale: 0.78, zIndex: 4 },
    ],
    hover: [
      { x: -56, y:  8, rotate: -16, scale: 0.95, zIndex: 1 },
      { x: -18, y: -6, rotate:  -5, scale: 1.08, zIndex: 2 },
      { x:  18, y: -6, rotate:   5, scale: 1.08, zIndex: 3 },
      { x:  56, y:  8, rotate:  16, scale: 0.95, zIndex: 4 },
    ],
  },
};

export function BrandsShowcase() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const brands: Brand[] = [
    {
      name: "Krevia",
      description: t.brands.krevia,
      images: [
        { src: "/images/products/krevia_classic.png",  href: "/urunler/krevia-classic" },
        { src: "/images/products/krevia_mosaic.png",   href: "/urunler/krevia-mosaic" },
        { src: "/images/products/krevia_dark.png",     href: "/urunler/krevia-dark" },
        { src: "/images/products/krevia_espresso.png", href: "/urunler/krevia-espresso" },
      ],
      href: "/urunler?category=dolgulu-biskuvi",
      color: "from-blue-500/20 to-blue-600/10",
    },
    {
      name: "Tilento",
      description: t.brands.tilento,
      images: [
        { src: "/images/products/tilento_cocoa.png",   href: "/urunler/tilento-cocoa" },
        { src: "/images/products/tilento_vanilla.png", href: "/urunler/tilento-vanilla" },
      ],
      href: "/urunler?category=gofret",
      color: "from-orange-500/20 to-orange-600/10",
    },
    {
      name: "Veloria",
      description: t.brands.veloria,
      images: [
        { src: "/images/products/veloria_cocoa.png",   href: "/urunler/veloria-cocoa" },
        { src: "/images/products/veloria_dark.png",    href: "/urunler/veloria-dark" },
        { src: "/images/products/veloria_vanilla.png", href: "/urunler/veloria-vanilla" },
      ],
      href: "/urunler?category=kremali-biskuvi",
      color: "from-purple-500/20 to-purple-600/10",
    },
    {
      name: "Tahera & Cremora",
      description: t.brands.taheraCremora,
      images: [
        { src: "/images/products/tahera.png",  href: "/urunler/tahera" },
        { src: "/images/products/cremora.png", href: "/urunler/cremora" },
      ],
      href: "/urunler?category=surme-krema",
      color: "from-amber-600/20 to-yellow-500/10",
    },
    {
      name: "Berriva",
      description: t.brands.berriva,
      images: [{ src: "/images/products/berriva.png", href: "/urunler/berriva" }],
      href: "/urunler?category=recel",
      color: "from-red-500/20 to-red-600/10",
    },
    {
      name: "Veloria New",
      description: t.brands.veloriaNew,
      images: [
        { src: "/images/products/veloria_cocoa2.png",    href: "/urunler/veloria-cocoa2" },
        { src: "/images/products/veloria_coconut.png",   href: "/urunler/veloria-coconut" },
        { src: "/images/products/veloria_dark2.png",     href: "/urunler/veloria-dark2" },
        { src: "/images/products/veloria_whitecocoa.png",href: "/urunler/veloria-whitecocoa" },
      ],
      href: "/urunler?category=kremali-biskuvi",
      color: "from-purple-500/20 to-purple-600/10",
    },
  ];

  return (
    <section className="bg-background py-12 sm:py-16 lg:py-24">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              {t.brands.eyebrow}
            </span>
            <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:text-3xl">
              {t.brands.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {brands.map((brand, index) => {
            const isHovered = hoveredIndex === index;
            const config = spreadConfig[brand.images.length] ?? spreadConfig[1];

            return (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={brand.href}
                  className={`group relative block rounded-2xl bg-gradient-to-br ${brand.color} border border-border/50 hover:border-accent/50 transition-colors duration-300`}
                >
                  {/* Image area */}
                  <div className="relative flex items-center justify-center h-64 sm:h-80 lg:h-96">
                    {brand.images.map((img, imgIndex) => {
                      const pos = isHovered
                        ? config.hover[imgIndex]
                        : config.normal[imgIndex];

                      return (
                        <motion.div
                          key={img.src}
                          animate={{
                            x: pos.x,
                            y: pos.y,
                            rotate: pos.rotate,
                            scale: pos.scale,
                          }}
                          transition={{ type: "spring", stiffness: 280, damping: 22 }}
                          className="absolute"
                          style={{ zIndex: pos.zIndex }}
                        >
                          <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72">
                            <Image
                              src={img.src}
                              alt={brand.name}
                              fill
                              className="object-contain drop-shadow-lg"
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Text */}
                  <div className="p-3 sm:p-4 pt-0 text-center">
                    <h3 className="font-serif text-base sm:text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {brand.name}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground line-clamp-2">
                      {brand.description}
                    </p>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent rounded-2xl" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
