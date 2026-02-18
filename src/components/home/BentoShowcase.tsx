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

interface GalleryItem {
  id: string;
  image: string;
  href: string;
  label: string;
  span: string;
  bg?: string;
  objectFit?: "cover" | "contain";
}

// Gallery items — spans matched to image aspect ratios
const galleryItems: GalleryItem[] = [
  {
    id: "berriva-strawberry",
    image: "/images/gallery/berriva-strawberry.png",
    href: "/urunler/berriva",
    label: "Berriva",
    span: "col-span-1 row-span-2",
    objectFit: "cover",
  },
  {
    id: "tahera-kare",
    image: "/images/gallery/tahera-kare.png",
    href: "/urunler/tahera",
    label: "Tahera",
    span: "col-span-1 row-span-1",
    objectFit: "cover",
  },
  {
    id: "regosto-kare",
    image: "/images/gallery/regosto-kare.png",
    href: "/urunler/regosto-mosaic",
    label: "Regosto Mosaic",
    span: "col-span-1 row-span-1",
    objectFit: "cover",
  },
  {
    id: "cremora-kare",
    image: "/images/gallery/cremora-kare.png",
    href: "/urunler/cremora",
    label: "Cremora",
    span: "col-span-2 row-span-1",
    objectFit: "cover",
  },
];

export function BentoShowcase() {
  const { t } = useLanguage();

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
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 auto-rows-[140px] sm:auto-rows-[200px] lg:auto-rows-[240px]"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={scaleUp}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.span} ${item.bg || "bg-muted"}`}
            >
              <Link href={item.href} className="block h-full w-full">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className={`transition-transform duration-500 group-hover:scale-105 ${
                    item.objectFit === "contain"
                      ? "object-contain p-6 sm:p-8 drop-shadow-lg"
                      : "object-cover"
                  }`}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 z-10" />

                {/* Label on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-sm sm:text-base drop-shadow-lg">
                      {item.label}
                    </span>
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/90 text-foreground shadow">
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
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
