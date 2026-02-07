"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, fadeIn, scaleUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none" | "scale";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

const variantMap = {
  up: fadeUp,
  down: fadeUp,
  left: fadeLeft,
  right: fadeRight,
  none: fadeIn,
  scale: scaleUp,
};

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={variantMap[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
