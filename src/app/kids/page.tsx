import type { Metadata } from "next";
import { LionCatcherGame } from "@/components/kids/LionCatcherGame";

export const metadata: Metadata = {
  title: "Kalendos Kids - Aslan Atistirmalik Avcisi",
  description:
    "Kalendos Kids oyun alani! Aslani kontrol et, dusen atistirmaliklari yakala ve skor topla!",
};

export default function KidsPage() {
  return (
    <section className="py-4 sm:py-10 px-2 sm:px-4">
      <div className="text-center mb-3 sm:mb-6">
        <h1 className="font-serif text-xl sm:text-3xl font-bold text-primary">
          Kalendos Kids
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          Aslan ile atistirmaliklari yakala!
        </p>
      </div>
      <LionCatcherGame />
    </section>
  );
}
