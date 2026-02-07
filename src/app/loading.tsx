import { Container } from "@/components/layout/Container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="pt-20">
      <Container className="py-16">
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-6 w-1/2 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-64 rounded-xl" />
          ))}
        </div>
      </Container>
    </div>
  );
}
