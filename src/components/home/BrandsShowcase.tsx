"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export function BrandsShowcase() {
  const { t } = useLanguage();

  const brands = [
    {
      name: "Bacano",
      description: t.brands.bacano,
      image: "/images/products/bacano-classic.png",
      href: "/urunler?category=biskuvi",
      color: "from-red-500/20 to-red-600/10",
    },
    {
      name: "Regosto",
      description: t.brands.regosto,
      image: "/images/products/regosto-classic.png",
      href: "/urunler?category=dolgulu-biskuvi",
      color: "from-amber-500/20 to-amber-600/10",
    },
    {
      name: "Trilex",
      description: t.brands.trilex,
      image: "/images/products/trilex-vanilla.png",
      href: "/urunler?category=kek",
      color: "from-orange-500/20 to-orange-600/10",
    },
    {
      name: "Star",
      description: t.brands.star,
      image: "/images/products/star-bear.png",
      href: "/urunler?category=kek",
      color: "from-blue-500/20 to-blue-600/10",
    },
  ];

  return (
    <section className="bg-background py-16 lg:py-24 overflow-hidden">
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                href={brand.href}
                className={`group relative block h-full overflow-hidden rounded-2xl bg-gradient-to-br ${brand.color} border border-border/50 hover:border-accent/50 transition-all duration-300`}
              >
                <div className="relative aspect-square p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </motion.div>
                </div>
                <div className="p-4 pt-0 text-center">
                  <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {brand.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {brand.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
