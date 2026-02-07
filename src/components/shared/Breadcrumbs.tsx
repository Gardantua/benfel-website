import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}

export function Breadcrumbs({ items, variant = "dark" }: BreadcrumbsProps) {
  const isLight = variant === "light";

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && (
              <ChevronRight
                className={cn(
                  "h-3 w-3",
                  isLight ? "text-muted-foreground/40" : "text-primary-foreground/40"
                )}
              />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "transition-colors hover:text-accent",
                  isLight
                    ? "text-muted-foreground"
                    : "text-primary-foreground/60"
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  "font-medium",
                  isLight ? "text-foreground" : "text-primary-foreground/90"
                )}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
