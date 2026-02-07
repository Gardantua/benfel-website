"use client";

import { Factory, Users, Cog, Award } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function FactorySection() {
  const highlights = [
    { icon: <Factory className="h-6 w-6" />, label: "Modern Üretim Tesisi" },
    { icon: <Cog className="h-6 w-6" />, label: "Tam Otomatik Hatlar" },
    { icon: <Users className="h-6 w-6" />, label: "Uzman Kadro" },
    { icon: <Award className="h-6 w-6" />, label: "Uluslararası Standartlar" },
  ];

  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Üretim"
            title="Üretim Tesisimiz"
            subtitle="Modern teknoloji ve uluslararası standartlarla donatılmış tesisimizde kaliteli üretim gerçekleştiriyoruz."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Factory image */}
          <ScrollReveal direction="left">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted-foreground/40 text-sm">
                  Üretim Tesisi Görseli
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Highlights */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4 h-full content-center">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 rounded-xl bg-background p-6 border border-border text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
