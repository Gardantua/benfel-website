import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
