"use client";

import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { useLanguage } from "@/context/LanguageContext";

export function StatsCounter() {
  const { t } = useLanguage();

  const stats = [
    { value: 2017, suffix: "", labelKey: "established" as const },
    { value: 8000, suffix: " m²", labelKey: "facility" as const },
    { value: 4, suffix: "", labelKey: "productionLines" as const },
    { value: 40, suffix: "+", labelKey: "exportCountries" as const },
  ];

  return (
    <section className="bg-primary py-12 sm:py-16 lg:py-20">
      <Container>
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-2xl font-bold text-accent sm:text-4xl lg:text-5xl xl:text-6xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-primary-foreground/60 sm:text-base">
                  {t.stats[stat.labelKey]}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
