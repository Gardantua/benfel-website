"use client";

import { Target, Eye, Shield, Leaf, Heart, Globe } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export function MissionVision() {
  const { t } = useLanguage();

  const valueItems = [
    { key: "quality" as const, icon: <Shield className="h-6 w-6" /> },
    { key: "natural" as const, icon: <Leaf className="h-6 w-6" /> },
    { key: "trust" as const, icon: <Heart className="h-6 w-6" /> },
    { key: "sustainability" as const, icon: <Globe className="h-6 w-6" /> },
  ];

  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        {/* Mission & Vision cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-20">
          <ScrollReveal direction="left">
            <div className="rounded-2xl bg-background p-8 border border-border lg:p-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground">
                {t.about.missionTitle}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {t.about.missionText}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="rounded-2xl bg-background p-8 border border-border lg:p-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground">
                {t.about.visionTitle}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {t.about.visionText}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Values */}
        <ScrollReveal>
          <SectionHeading
            eyebrow={t.about.valuesEyebrow}
            title={t.about.valuesTitle}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueItems.map((item, index) => (
            <ScrollReveal key={item.key} delay={index * 0.1}>
              <div className="text-center rounded-2xl bg-background p-6 border border-border">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  {item.icon}
                </div>
                <h4 className="font-serif text-lg font-bold text-foreground">
                  {t.about.values[item.key].title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.about.values[item.key].text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
