"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { siteData } from "@/lib/siteData";
import { useLanguage } from "@/context/LanguageContext";

export function AboutTeaser() {
  const { t } = useLanguage();

  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted-foreground/40 text-sm">
                  Fabrika Görseli
                </span>
              </div>
              {/* Gold accent corner */}
              <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-tl-3xl bg-accent/20" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-accent">
              {t.about.eyebrow}
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              {siteData.companyName}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t.about.description}
            </p>
            <Link
              href="/hakkimizda"
              className="mt-8 inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-light transition-colors group"
            >
              {t.about.learnMore}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
