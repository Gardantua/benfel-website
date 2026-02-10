"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { NewsItem } from "@/lib/types";

interface FeaturedNewsCardProps {
  item: NewsItem;
}

export function FeaturedNewsCard({ item }: FeaturedNewsCardProps) {
  const { t } = useLanguage();

  const getCategoryName = (categoryId: string) => {
    const key = categoryId as keyof typeof t.newsCategories;
    return t.newsCategories[key] ?? categoryId;
  };

  const formattedDate = new Date(item.date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`/haberler/${item.slug}`} className="group block">
      <article className="relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 md:p-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              {getCategoryName(item.category)}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/80">
              <Calendar className="h-3.5 w-3.5" />
              <time dateTime={item.date}>{formattedDate}</time>
            </span>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 max-w-2xl">
            {item.title}
          </h2>

          <p className="text-sm sm:text-base text-white/80 line-clamp-2 max-w-2xl mb-4">
            {item.summary}
          </p>

          {item.fairDetails && (
            <div className="flex items-center gap-2 text-sm text-accent mb-4">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>{item.fairDetails.city} &middot; {item.fairDetails.location}</span>
              {item.fairDetails.standNumber && (
                <span className="text-white/60">&middot; {item.fairDetails.standNumber}</span>
              )}
            </div>
          )}

          <div className="flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
            {t.news.readMore}
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </article>
    </Link>
  );
}
