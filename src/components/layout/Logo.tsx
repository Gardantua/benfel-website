import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center shrink-0 ${className}`}>
      <Image
        src="/images/kalendos-snacks.png"
        alt="Kalendos Snacks"
        width={300}
        height={300}
        className="object-contain w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] lg:w-[240px] lg:h-[240px]"
        priority
      />
    </Link>
  );
}
