"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { NewsCard } from "@/components/news/NewsCard";
import { siteData } from "@/lib/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function LatestNews() {
  const { t } = useLanguage();

  const latestItems = [...siteData.newsItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  if (latestItems.length === 0) return null;

  return (
    <section className="bg-secondary py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.news.eyebrow}
          title={t.news.latestTitle}
          subtitle={t.news.latestSubtitle}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {latestItems.map((item) => (
            <motion.div key={item.id} variants={fadeUp}>
              <NewsCard item={item} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/haberler"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90 hover:gap-3"
          >
            {t.news.viewAll}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
