import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { generateLocalBusinessSchema } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "İletişim | Kalendos Snacks",
  description: "Kalendos Snacks ile iletişime geçin. Beylikdüzü İstanbul adresimiz, telefon ve ihracat sorguları için iletişim formu.",
  keywords: [
    "kalendos iletişim", "kalendossnacks iletişim",
    "kalendos adres", "kalendos telefon", "kalendos ihracat",
    "beylikdüzü gıda fabrikası",
  ],
  openGraph: {
    title: "İletişim | Kalendos Snacks",
    description: "Kalendos Snacks ile iletişime geçin. İhracat ve distribütörlük sorularınız için bize ulaşın.",
    images: [{ url: "https://www.kalendossnacks.com/images/logo.png", alt: "Kalendos Snacks İletişim" }],
  },
};

export default function ContactPage() {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <ContactPageContent />
    </>
  );
}
