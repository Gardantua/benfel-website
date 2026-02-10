import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsDetailContent } from "@/components/news/NewsDetailContent";
import { siteData } from "@/lib/siteData";
import { generateNewsArticleSchema } from "@/lib/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

function findNewsItem(slug: string) {
  return siteData.newsItems.find((item) => item.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const newsItem = findNewsItem(slug);

  if (!newsItem) {
    return { title: "Haber Bulunamadı" };
  }

  return {
    title: `${newsItem.title} | Kalendos`,
    description: newsItem.summary,
    openGraph: {
      title: `${newsItem.title} | Kalendos`,
      description: newsItem.summary,
    },
  };
}

export function generateStaticParams() {
  return siteData.newsItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const newsItem = findNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  const articleSchema = generateNewsArticleSchema(newsItem);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <NewsDetailContent newsItem={newsItem} />
    </>
  );
}
