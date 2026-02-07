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
    title: `${product.name} | Benfel Ürünleri`,
    description: `${product.name} - ${product.description}. Benfel kalitesiyle.`,
    openGraph: {
      title: `${product.name} | Benfel`,
      description: product.description,
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
