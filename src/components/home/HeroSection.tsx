"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { siteData } from "@/lib/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "/images/products/bacano-classic.png",
      title: "Bacano",
      subtitleKey: "bacano" as const,
    },
    {
      image: "/images/products/regosto-classic.png",
      title: "Regosto",
      subtitleKey: "regosto" as const,
    },
    {
      image: "/images/products/trilex-vanilla.png",
      title: "Trilex",
      subtitleKey: "trilex" as const,
    },
    {
      image: "/images/products/star-bear.png",
      title: "Star",
      subtitleKey: "star" as const,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative flex min-h-screen items-center bg-primary overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--accent)_0%,_transparent_50%)] opacity-10" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary-light/20 blur-3xl" />

      <Container className="relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent"
            >
              {t.hero.tagline}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {t.hero.heading}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70 sm:text-xl"
            >
              {t.hero.subheading}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/urunler">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold text-base px-8 py-6 group"
                >
                  {t.hero.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/iletisim">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 py-6"
                >
                  {t.hero.secondaryCta}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Product Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[500px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative h-80 w-80">
                    <Image
                      src={heroSlides[currentSlide].image}
                      alt={heroSlides[currentSlide].title}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide Info */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <h3 className="font-serif text-2xl font-bold text-accent">
                      {heroSlides[currentSlide].title}
                    </h3>
                    <p className="text-primary-foreground/60">
                      {t.brands[heroSlides[currentSlide].subtitleKey]}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-primary-foreground/50 hover:text-accent transition-colors"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-primary-foreground/50 hover:text-accent transition-colors"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Dots */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "w-8 bg-accent"
                        : "w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-primary-foreground/40 uppercase tracking-widest">
            {t.hero.discover}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-10 w-6 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5"
          >
            <div className="h-2 w-1 rounded-full bg-accent" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
