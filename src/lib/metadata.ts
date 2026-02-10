import type { Product, NewsItem } from "./types";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kalendos",
    url: "https://kalendos.vercel.app",
    logo: "https://kalendos.vercel.app/images/logo.png",
    description:
      "Türkiye'nin premium gofret, bisküvi ve kek üreticisi.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
    },
  };
}

export function generateProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://kalendos.vercel.app${product.images[0]}`,
    brand: {
      "@type": "Brand",
      name: "Kalendos",
    },
    category: product.category,
  };
}

export function generateNewsArticleSchema(newsItem: NewsItem) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: newsItem.title,
    description: newsItem.summary,
    image: `https://kalendos.vercel.app${newsItem.image}`,
    datePublished: newsItem.date,
    author: {
      "@type": "Organization",
      name: "Kalendos",
    },
    publisher: {
      "@type": "Organization",
      name: "Kalendos",
      logo: {
        "@type": "ImageObject",
        url: "https://kalendos.vercel.app/images/logo.png",
      },
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kalendos",
    description:
      "Premium gofret, bisküvi ve kek üreticisi.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
    },
  };
}
