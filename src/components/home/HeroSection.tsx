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

const bannerSlides = [
  { id: "regosto-mosaic", image: "/images/banners/regosto-mosaic.png" },
  { id: "regosto-espresso", image: "/images/banners/regosto-espresso.png" },
  { id: "cremora", image: "/images/banners/cremora.png" },
  { id: "tahera", image: "/images/banners/tahera.png" },
  { id: "berriva", image: "/images/banners/berriva.png" },
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

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
      restartAutoplay();
    },
    [api, restartAutoplay]
  );

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
              <div className="relative w-full aspect-[2/1] sm:aspect-[3/1] lg:aspect-[3.5/1] bg-primary">
                <Image
                  src={slide.image}
                  alt={slide.id}
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-all"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-all"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-accent"
                  : "w-2 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </Carousel>

      {/* CTA buttons below banner */}
      <div className="bg-primary py-4 sm:py-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link href="/urunler">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:opacity-90 font-semibold text-sm sm:text-base px-6 py-3 group rounded-full"
            >
              {t.hero.primaryCta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/iletisim">
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/15 font-semibold text-sm sm:text-base px-6 py-3 rounded-full"
            >
              {t.hero.secondaryCta}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
