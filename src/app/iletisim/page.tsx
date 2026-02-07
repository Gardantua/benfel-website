import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { generateLocalBusinessSchema } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "İletişim | Benfel",
  description: "Benfel ile iletişime geçin. Adres, telefon ve iletişim formu.",
  keywords: ["benfel iletişim", "benfel adres", "benfel telefon"],
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
