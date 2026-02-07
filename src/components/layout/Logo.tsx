import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "light", className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/images/benfel-logo.png"
        alt="Benfel"
        width={50}
        height={39}
        className="object-contain"
        priority
      />
      <span className={`font-serif text-xl font-bold tracking-tight ${
        variant === "light" ? "text-primary-foreground" : "text-primary"
      }`}>
        Benfel
      </span>
    </Link>
  );
}
