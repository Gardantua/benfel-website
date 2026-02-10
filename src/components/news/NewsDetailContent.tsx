"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Navigation, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { NewsCard } from "@/components/news/NewsCard";
import { CTASection } from "@/components/home/CTASection";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/lib/siteData";
import type { NewsItem } from "@/lib/types";

interface NewsDetailContentProps {
  newsItem: NewsItem;
}

export function NewsDetailContent({ newsItem }: NewsDetailContentProps) {
  const { t } = useLanguage();

  const getCategoryName = (categoryId: string) => {
    const key = categoryId as keyof typeof t.newsCategories;
    return t.newsCategories[key] ?? categoryId;
  };

  const formattedDate = new Date(newsItem.date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const relatedItems = siteData.newsItems
    .filter((item) => item.id !== newsItem.id && item.category === newsItem.category)
    .slice(0, 3);

  return (
    <>
      <section className="bg-background pt-28 pb-16 lg:pt-36 lg:pb-24">
        <Container>
          <Breadcrumbs
            variant="light"
            items={[
              { label: t.nav.home, href: "/" },
              { label: t.news.pageTitle, href: "/haberler" },
              { label: newsItem.title },
            ]}
          />

          <article className="mt-8 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {getCategoryName(newsItem.category)}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <time dateTime={newsItem.date}>{formattedDate}</time>
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {newsItem.title}
            </h1>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
              <Image
                src={newsItem.image}
                alt={newsItem.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {newsItem.fairDetails && (
              <div className="bg-card border border-border rounded-xl p-5 sm:p-6 mb-8">
                <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                  {getCategoryName("fuarlar")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">{t.news.fairDate}</p>
                      <p className="text-sm font-medium text-foreground">
                        {new Date(newsItem.fairDetails.startDate).toLocaleDateString("tr-TR", { day: "numeric", month: "long" })}
                        {" - "}
                        {new Date(newsItem.fairDetails.endDate).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">{t.news.fairLocation}</p>
                      <p className="text-sm font-medium text-foreground">
                        {newsItem.fairDetails.location}, {newsItem.fairDetails.city}
                      </p>
                    </div>
                  </div>
                  {newsItem.fairDetails.standNumber && (
                    <div className="flex items-start gap-3">
                      <Navigation className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">{t.news.fairStand}</p>
                        <p className="text-sm font-medium text-foreground">
                          {newsItem.fairDetails.standNumber}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="prose prose-lg max-w-none text-foreground">
              {newsItem.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </Container>
      </section>

      {relatedItems.length > 0 && (
        <section className="bg-secondary py-16">
          <Container>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                {t.news.relatedNews}
              </h2>
              <Link
                href="/haberler"
                className="flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
              >
                {t.news.backToNews}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedItems.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
