import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const logoSrc = variant === "light"
    ? "/images/benfel-logo-white.png"
    : "/images/benfel-logo.png";

  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <Image
        src={logoSrc}
        alt="Benfel"
        width={50}
        height={39}
        className={`object-contain ${variant === "dark" ? "brightness-0" : ""}`}
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
