"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { NewsItem } from "@/lib/types";

interface NewsCardProps {
  item: NewsItem;
}

export function NewsCard({ item }: NewsCardProps) {
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
      <article className="bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              {getCategoryName(item.category)}
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={item.date}>{formattedDate}</time>
          </div>

          <h3 className="font-serif text-lg font-bold text-foreground line-clamp-2 mb-2 group-hover:text-accent transition-colors">
            {item.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {item.summary}
          </p>

          {item.fairDetails && (
            <div className="flex items-center gap-2 text-xs text-accent border-t border-border pt-3 mt-3">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span>{item.fairDetails.city} &middot; {item.fairDetails.location}</span>
            </div>
          )}

          <div className="flex items-center gap-1 text-sm font-semibold text-accent mt-3 group-hover:gap-2 transition-all">
            {t.news.readMore}
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </article>
    </Link>
  );
}
