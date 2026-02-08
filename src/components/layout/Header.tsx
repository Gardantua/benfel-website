"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Gamepad2 } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/lib/siteData";

export function Header() {
  const { scrollDirection, scrollY } = useScrollDirection();
  const pathname = usePathname();
  const { t } = useLanguage();
  const isScrolled = scrollY > 50;

  const navItems = [
    { href: "/", title: t.nav.home },
    { href: "/hakkimizda", title: t.nav.about },
    { href: "/urunler", title: t.nav.products },
    { href: "/iletisim", title: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-primary",
        scrollDirection === "down" && scrollY > 200
          ? "-translate-y-full"
          : "translate-y-0"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Logo variant="light" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "text-accent"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                )}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/kids"
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1.5",
                pathname === "/kids"
                  ? "text-accent"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              )}
            >
              <Gamepad2 className="h-4 w-4" />
              Kids
            </Link>
            <div className="ml-2 flex items-center gap-3">
              <LanguageSwitcher />
              <Link href="/iletisim">
                <Button className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold text-sm">
                  {t.nav.contact}
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
