"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export function CertificationsStrip() {
  const { t } = useLanguage();

  const certifications = [
    {
      name: "ISO 9001",
      description: t.certifications.iso9001,
      image: "/images/certifications/iso9001.png",
    },
    {
      name: "Helal",
      description: t.certifications.halal,
      image: "/images/certifications/halal.png",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-card to-background py-12 sm:py-16 lg:py-24">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              {t.certifications.eyebrow}
            </span>
            <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:text-3xl">
              {t.certifications.title}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              {t.certifications.subtitle}
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-6 sm:gap-12 lg:gap-20">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-4 text-center group"
              >
                <div className="relative h-20 w-20 sm:h-28 sm:w-28 p-2 rounded-2xl bg-white shadow-lg border border-border/50 group-hover:shadow-xl group-hover:border-accent/30 transition-all duration-300">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {cert.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
