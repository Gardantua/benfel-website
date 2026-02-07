"use client";

import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export function CompanyStory() {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-20 lg:py-28">
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
              <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-tl-3xl bg-accent/20" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right">
            <SectionHeading
              eyebrow={t.about.storyEyebrow}
              title={t.about.storyTitle}
              align="left"
              className="mb-6"
            />
            <div className="space-y-4">
              {t.about.storyParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
