"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export function VideoSection() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => videoRef.current?.play(), 300);
  };

  const handleClose = () => {
    videoRef.current?.pause();
    setIsOpen(false);
  };

  return (
    <>
      <section className="relative bg-primary py-14 sm:py-20 lg:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <Container className="relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                {t.video.eyebrow}
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
                {t.video.title}
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
                {t.video.subtitle}
              </p>

              {/* Video Play Button */}
              <motion.button
                onClick={handleOpen}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 relative group"
              >
                <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
                <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-2xl group-hover:bg-accent-light transition-colors">
                  <Play className="h-8 w-8 sm:h-10 sm:w-10 ml-1" fill="currentColor" />
                </div>
              </motion.button>
              <p className="mt-4 text-sm text-primary-foreground/60">
                {t.video.clickToWatch}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video"
            >
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 sm:-top-12 sm:right-0 z-10 bg-black/50 sm:bg-transparent rounded-full p-1 text-white hover:text-accent transition-colors"
              >
                <X className="h-7 w-7 sm:h-8 sm:w-8" />
              </button>
              <video
                ref={videoRef}
                src="/videos/production.mp4"
                controls
                className="w-full h-full rounded-lg"
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
