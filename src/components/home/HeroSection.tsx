"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const bannerSlides = [
  { id: "cremora", image: "/images/banners/cremora-banner.jpg" },
  { id: "tahera", image: "/images/banners/tahera-banner.jpg" },
  { id: "berriva", image: "/images/banners/berriva-banner.jpg" },
];

export function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [autoplay] = useState(() =>
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

  const restartAutoplay = useCallback(() => {
    const timer = setTimeout(() => {
      autoplay.play();
    }, 3000);
    return () => clearTimeout(timer);
  }, [autoplay]);

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
        plugins={[autoplay]}
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

    </section>
  );
}
