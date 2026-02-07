"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "./Breadcrumbs";
import { fadeUp } from "@/lib/animations";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-primary pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary-light)_0%,_transparent_70%)] opacity-30" />
      <Container className="relative">
        <Breadcrumbs items={breadcrumbs} />
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl xl:text-6xl mt-3 sm:mt-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-2xl text-lg text-primary-foreground/70"
          >
            {subtitle}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
