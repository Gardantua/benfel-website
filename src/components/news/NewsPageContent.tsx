"use client";

import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/layout/Container";
import { NewsGrid } from "@/components/news/NewsGrid";
import { CTASection } from "@/components/home/CTASection";
import { useLanguage } from "@/context/LanguageContext";

export function NewsPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t.news.pageTitle}
        subtitle={t.news.pageSubtitle}
        breadcrumbs={[
          { label: t.nav.home, href: "/" },
          { label: t.news.pageTitle },
        ]}
      />
      <section className="bg-background py-16 lg:py-24">
        <Container>
          <NewsGrid />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
