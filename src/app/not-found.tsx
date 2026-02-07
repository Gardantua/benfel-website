import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-background">
      <Container className="text-center py-20">
        <h1 className="font-serif text-8xl font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
          Sayfa Bulunamadı
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link href="/">
          <Button className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold">
            Ana Sayfaya Dön
          </Button>
        </Link>
      </Container>
    </section>
  );
}
