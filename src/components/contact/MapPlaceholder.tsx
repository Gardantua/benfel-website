import { MapPin } from "lucide-react";

export function MapPlaceholder() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted border border-border">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
          <MapPin className="h-7 w-7 text-accent" />
        </div>
        <p className="text-sm text-muted-foreground">Harita Alanı</p>
      </div>
    </div>
  );
}
