import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/images/kalendos-snacks.png"
        alt="Kalendos Snacks"
        width={140}
        height={50}
        className="object-contain w-[110px] sm:w-[140px]"
        priority
      />
    </Link>
  );
}
