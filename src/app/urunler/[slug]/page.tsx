import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailPageContent } from "@/components/products/ProductDetailPageContent";
import { siteData } from "@/lib/siteData";
import { generateProductSchema } from "@/lib/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

function findProduct(slug: string) {
  return siteData.products.find((p) => (p.slug || p.id) === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) {
    return { title: "Ürün Bulunamadı" };
  }

  return {
    title: `${product.name} | Kalendos Snacks`,
    description: `${product.name} - ${product.description}. Kalendos Snacks kalitesiyle üretilmiştir.`,
    keywords: ["kalendossnacks", "kalendos ürünleri", product.name, product.category],
    openGraph: {
      title: `${product.name} | Kalendos Snacks`,
      description: product.description,
      images: product.images[0]
        ? [{ url: `https://www.kalendossnacks.com${product.images[0]}`, alt: product.name }]
        : [{ url: "https://www.kalendossnacks.com/images/logo.png", alt: "Kalendos Snacks" }],
    },
  };
}

export function generateStaticParams() {
  return siteData.products.map((product) => ({
    slug: product.slug || product.id,
  }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) {
    notFound();
  }

  const productSchema = generateProductSchema(product);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <ProductDetailPageContent product={product} />
    </>
  );
}
