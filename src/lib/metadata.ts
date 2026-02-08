import type { Product } from "./types";

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
