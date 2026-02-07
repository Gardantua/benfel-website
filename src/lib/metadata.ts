import type { Product } from "./types";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Benfel",
    url: "https://www.benfel.com.tr",
    logo: "https://www.benfel.com.tr/images/logo.png",
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
    image: `https://www.benfel.com.tr${product.image}`,
    brand: {
      "@type": "Brand",
      name: "Benfel",
    },
    category: product.category,
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Benfel",
    description:
      "Premium gofret, bisküvi ve kek üreticisi.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
    },
  };
}
