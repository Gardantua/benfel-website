"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from "@/context/LanguageContext";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface BannerSlide {
  id: string;
  image: string;
  gradientFrom: string;
  gradientTo: string;
  titleKey: "bacano" | "regosto" | "trilex" | "star";
}

const bannerSlides: BannerSlide[] = [
  {
    id: "bacano",
    image: "/images/products/bacano-classic.png",
    gradientFrom: "from-[#3C1518]",
    gradientTo: "to-[#5a2024]",
    titleKey: "bacano",
  },
  {
    id: "regosto",
    image: "/images/products/regosto-classic.png",
    gradientFrom: "from-[#2a1a0e]",
    gradientTo: "to-[#4a2e18]",
    titleKey: "regosto",
  },
  {
    id: "trilex",
    image: "/images/products/trilex-vanilla.png",
    gradientFrom: "from-[#1a2a1e]",
    gradientTo: "to-[#2e4a32]",
    titleKey: "trilex",
  },
  {
    id: "star",
    image: "/images/products/star-bear.png",
    gradientFrom: "from-[#1a1a2e]",
    gradientTo: "to-[#2e2e4a]",
    titleKey: "star",
  },
];

export function HeroSection() {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const restartAutoplay = useCallback(() => {
    const timer = setTimeout(() => {
      autoplayRef.current.play();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
    restartAutoplay();
  }, [api, restartAutoplay]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
    restartAutoplay();
  }, [api, restartAutoplay]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
    restartAutoplay();
  }, [api, restartAutoplay]);

  return (
    <section className="relative w-full">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        plugins={[autoplayRef.current]}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {bannerSlides.map((slide, index) => (
            <CarouselItem key={slide.id} className="pl-0">
              <div
                className={`relative flex min-h-screen items-center bg-gradient-to-br ${slide.gradientFrom} ${slide.gradientTo} overflow-hidden`}
              >
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--accent)_0%,_transparent_50%)] opacity-10" />
                <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/5 blur-3xl" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 sm:py-20">
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    {/* Left - Text Content */}
                    {index === current && (
                      <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        key={`text-${slide.id}-${current}`}
                      >
                        <motion.span
                          variants={fadeUp}
                          className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#C5943A]"
                        >
                          {t.hero.tagline}
                        </motion.span>

                        <motion.h1
                          variants={fadeUp}
                          className="font-serif text-3xl font-bold leading-snug text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl sm:leading-tight"
                        >
                          {t.hero.heading}
                        </motion.h1>

                        <motion.p
                          variants={fadeUp}
                          className="mt-4 sm:mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl"
                        >
                          {t.brands[slide.titleKey]}
                        </motion.p>

                        <motion.div
                          variants={fadeUp}
                          className="mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
                        >
                          <Link href="/urunler">
                            <Button
                              size="lg"
                              className="bg-[#C5943A] hover:bg-[#d4a34a] text-white font-semibold text-base px-6 py-4 sm:px-8 sm:py-6 group"
                            >
                              {t.hero.primaryCta}
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                          <Link href="/iletisim">
                            <Button
                              size="lg"
                              variant="outline"
                              className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-6 py-4 sm:px-8 sm:py-6"
                            >
                              {t.hero.secondaryCta}
                            </Button>
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Right - Product Image */}
                    <div className="relative hidden lg:flex items-center justify-center">
                      {index === current && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, y: 30 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.7 }}
                          className="relative h-[450px] w-[450px]"
                        >
                          <Image
                            src={slide.image}
                            alt={slide.titleKey}
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority={index === 0}
                          />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-10 bg-[#C5943A]"
                  : "w-2.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </Carousel>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/40 uppercase tracking-widest">
            {t.hero.discover}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-10 w-6 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
          >
            <div className="h-2 w-1 rounded-full bg-[#C5943A]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
