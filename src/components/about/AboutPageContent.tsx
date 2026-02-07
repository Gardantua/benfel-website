"use client";

import { PageHero } from "@/components/shared/PageHero";
import { CompanyStory } from "@/components/about/CompanyStory";
import { MissionVision } from "@/components/about/MissionVision";
import { CTASection } from "@/components/home/CTASection";
import { useLanguage } from "@/context/LanguageContext";

export function AboutPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t.about.pageTitle}
        subtitle={t.about.pageSubtitle}
        breadcrumbs={[
          { label: t.nav.home, href: "/" },
          { label: t.about.pageTitle },
        ]}
      />
      <CompanyStory />
      <MissionVision />
      <CTASection />
    </>
  );
}
