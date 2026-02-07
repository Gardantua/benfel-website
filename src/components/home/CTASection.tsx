"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="bg-primary py-20 lg:py-24">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 h-1 w-16 bg-accent rounded-full" />
            <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/60">
              {t.cta.subtitle}
            </p>
            <Link href="/iletisim" className="mt-8 inline-block">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold text-base px-8 py-6 group"
              >
                {t.cta.button}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
