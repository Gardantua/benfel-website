import type { Metadata } from "next";
import { NewsPageContent } from "@/components/news/NewsPageContent";

export const metadata: Metadata = {
  title: "Haberler | Kalendos",
  description: "Kalendos'tan son haberler, duyurular ve fuar katılımları. Gıda sektöründeki gelişmeleri takip edin.",
  keywords: ["kalendos haberler", "gıda fuarları", "kalendos duyurular", "gulfood", "ism köln"],
};

export default function NewsPage() {
  return <NewsPageContent />;
}
