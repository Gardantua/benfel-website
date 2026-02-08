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
    <section className="relative bg-primary pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary-light)_0%,_transparent_70%)] opacity-30" />
      <Container className="relative">
        <Breadcrumbs items={breadcrumbs} />
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl lg:text-4xl mt-2"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            className="mt-2 max-w-2xl text-sm sm:text-base text-primary-foreground/70"
          >
            {subtitle}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
