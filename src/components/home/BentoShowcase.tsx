"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { staggerContainer, scaleUp } from "@/lib/animations";

interface BentoItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  span: string; // tailwind grid span classes
  overlay?: string; // gradient overlay color
}

const bentoItems: BentoItem[] = [
  {
    id: "bacano",
    title: "Bacano",
    subtitle: "",
    image: "/images/products/bacano-classic.png",
    href: "/urunler?category=biskuvi",
    span: "sm:col-span-2 sm:row-span-2",
    overlay: "from-[#3C1518]/90 via-[#3C1518]/40",
  },
  {
    id: "regosto",
    title: "Regosto",
    subtitle: "",
    image: "/images/products/regosto-classic.png",
    href: "/urunler?category=dolgulu-biskuvi",
    span: "sm:col-span-1 sm:row-span-1",
    overlay: "from-[#2A1810]/90 via-[#2A1810]/40",
  },
  {
    id: "trilex",
    title: "Trilex",
    subtitle: "",
    image: "/images/products/trilex-vanilla.png",
    href: "/urunler?category=kek",
    span: "sm:col-span-1 sm:row-span-1",
    overlay: "from-[#4A3228]/90 via-[#4A3228]/40",
  },
  {
    id: "star",
    title: "Star",
    subtitle: "",
    image: "/images/products/star-bear.png",
    href: "/urunler?category=kek",
    span: "sm:col-span-1 sm:row-span-1",
    overlay: "from-[#1a3a2a]/90 via-[#1a3a2a]/40",
  },
  {
    id: "bacano-strawberry",
    title: "Bacano Strawberry",
    subtitle: "",
    image: "/images/products/bacano-strawberry.png",
    href: "/urunler/bacano-strawberry",
    span: "sm:col-span-2 sm:row-span-1",
    overlay: "from-[#6B1A2A]/90 via-[#6B1A2A]/40",
  },
  {
    id: "regosto-mosaic",
    title: "Regosto Mosaic",
    subtitle: "",
    image: "/images/products/regosto-mosaic.png",
    href: "/urunler/regosto-mosaic",
    span: "sm:col-span-1 sm:row-span-1",
    overlay: "from-[#3C1518]/90 via-[#3C1518]/40",
  },
];

export function BentoShowcase() {
  const { t } = useLanguage();

  const brandSubtitles: Record<string, string> = {
    bacano: t.brands.bacano,
    regosto: t.brands.regosto,
    trilex: t.brands.trilex,
    star: t.brands.star,
  };

  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
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
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 auto-rows-[220px] sm:auto-rows-[260px]"
        >
          {bentoItems.map((item) => {
            const subtitle =
              brandSubtitles[item.id] || t.productDescriptions[item.id as keyof typeof t.productDescriptions] || item.subtitle;

            return (
              <motion.div
                key={item.id}
                variants={scaleUp}
                className={`group relative overflow-hidden rounded-2xl bg-card cursor-pointer ${item.span}`}
              >
                <Link href={item.href} className="block h-full">
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${item.overlay || "from-primary/90 via-primary/40"} to-transparent z-10`}
                  />

                  {/* Product image */}
                  <div className="relative h-full w-full bg-gradient-to-b from-background to-muted/50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-6 sm:p-10 drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Kalendos logo watermark */}
                  <div className="absolute top-3 left-3 z-20 opacity-60 group-hover:opacity-90 transition-opacity">
                    <Image
                      src="/images/kalendos-snacks.png"
                      alt="Kalendos"
                      width={60}
                      height={24}
                      className="drop-shadow-md"
                    />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    {subtitle && (
                      <p className="mt-1 text-sm text-white/70">
                        {subtitle}
                      </p>
                    )}
                  </div>

                  {/* Arrow icon */}
                  <div className="absolute top-3 right-3 z-20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 sm:group-hover:translate-x-0 sm:translate-x-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-8 sm:mt-12 text-center">
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
