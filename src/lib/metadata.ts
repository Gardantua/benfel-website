import type { Product, NewsItem } from "./types";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kalendos",
    alternateName: ["Kalendos Snacks", "kalendossnacks"],
    url: "https://www.kalendossnacks.com",
    logo: "https://www.kalendossnacks.com/images/logo.png",
    description:
      "Kalendos Snacks - Türkiye'nin premium gofret, bisküvi ve kek üreticisi. Bisküvi, gofret, çikolata ve kek ihracatında lider firma.",
    sameAs: [
      "https://www.instagram.com/benfelturkey",
      "https://www.facebook.com/benfelturkey",
      "https://www.linkedin.com/company/benfel",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Yakuplu Mah. Geçit Sok. No: 15",
      addressLocality: "Beylikdüzü",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-533-513-65-63",
      contactType: "sales",
      email: "export@kalendossnacks.com",
    },
  };
}

export function generateProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://www.kalendossnacks.com${product.images[0]}`,
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
    image: `https://www.kalendossnacks.com${newsItem.image}`,
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
        url: "https://www.kalendossnacks.com/images/logo.png",
      },
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kalendos Snacks",
    alternateName: "Kalendos",
    url: "https://www.kalendossnacks.com",
    logo: "https://www.kalendossnacks.com/images/logo.png",
    description: "Kalendos Snacks - Premium gofret, bisküvi ve kek üreticisi. İhracat ve toptan satış.",
    telephone: "+90-533-513-65-63",
    email: "export@kalendossnacks.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Yakuplu Mah. Geçit Sok. No: 15",
      addressLocality: "Beylikdüzü",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
  };
}
