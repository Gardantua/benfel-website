"use client";

import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const timelineEvents = [
  {
    year: "2014",
    title: "Kuruluş",
    description: "Benfel, gıda sektöründe kaliteli ürünler üretme vizyonuyla kuruldu.",
  },
  {
    year: "2016",
    title: "İlk İhracat",
    description: "Üretim kalitemizle uluslararası pazarlara açılarak ilk ihracatımızı gerçekleştirdik.",
  },
  {
    year: "2019",
    title: "Yeni Ürün Hatları",
    description: "Sürme çikolata ve kek kategorilerimizle ürün yelpazemizi genişlettik.",
  },
  {
    year: "2024",
    title: "Global Büyüme",
    description: "20'den fazla ülkeye ihracat yaparak global pazarda yerimizi güçlendirdik.",
  },
];

export function Timeline() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Yolculuğumuz"
            title="Kilometre Taşları"
            subtitle="Kuruluşumuzdan bugüne önemli adımlarımız."
          />
        </ScrollReveal>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

          {timelineEvents.map((event, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className={`relative mb-12 flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold md:left-1/2">
                  <div className="h-3 w-3 rounded-full bg-accent-foreground" />
                </div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <span className="text-sm font-bold text-accent">
                    {event.year}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-foreground mt-1">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
