"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Gamepad2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/siteData";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { href: "/", title: t.nav.home },
    { href: "/hakkimizda", title: t.nav.about },
    { href: "/urunler", title: t.nav.products },
    { href: "/haberler", title: t.nav.news },
    { href: "/iletisim", title: t.nav.contact },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-foreground/70 hover:bg-muted"
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[80vw] sm:w-[300px] bg-background border-border"
      >
        <SheetTitle className="font-serif text-xl font-bold text-primary mb-8">
          {siteData.companyName}
        </SheetTitle>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-4 py-4 text-lg font-medium text-foreground rounded-lg hover:bg-card transition-colors"
            >
              {item.title}
            </Link>
          ))}
          <Link
            href="/kids"
            onClick={() => setOpen(false)}
            className="px-4 py-4 text-lg font-medium text-foreground rounded-lg hover:bg-card transition-colors flex items-center gap-2"
          >
            <Gamepad2 className="h-5 w-5 text-accent" />
            Kalendos Kids
          </Link>
        </nav>
        <div className="mt-8 px-4 space-y-4">
          <LanguageSwitcher />
          <Link href="/iletisim" onClick={() => setOpen(false)}>
            <Button className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold">
              {t.nav.contact}
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
