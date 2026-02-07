"use client";

import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapPlaceholder } from "@/components/contact/MapPlaceholder";
import { useLanguage } from "@/context/LanguageContext";

export function ContactPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        breadcrumbs={[
          { label: t.nav.home, href: "/" },
          { label: t.contact.title },
        ]}
      />

      <section className="bg-background py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <ContactInfo />
            <div className="rounded-2xl bg-surface p-6 border border-border lg:p-8">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                {t.contact.writeToUs}
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-12">
        <Container>
          <MapPlaceholder />
        </Container>
      </section>
    </>
  );
}
