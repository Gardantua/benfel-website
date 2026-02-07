"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { Container } from "./Container";
import { Separator } from "@/components/ui/separator";
import { siteData } from "@/lib/siteData";
import { useLanguage } from "@/context/LanguageContext";

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
};

export function Footer() {
  const { t } = useLanguage();

  const navItems = [
    { href: "/", title: t.nav.home },
    { href: "/hakkimizda", title: t.nav.about },
    { href: "/urunler", title: t.nav.products },
    { href: "/iletisim", title: t.nav.contact },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4">
              {siteData.companyName}
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-accent">
              {t.footer.quickLinks}
            </h4>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-accent">
              {t.footer.products}
            </h4>
            <nav className="flex flex-col gap-2">
              {siteData.categories.map((cat) => {
                const key = cat.id as keyof typeof t.categories;
                return (
                  <Link
                    key={cat.id}
                    href={`/urunler?kategori=${cat.id}`}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {t.categories[key] ?? cat.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-accent">
              {t.footer.contact}
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-accent shrink-0" />
                <p className="text-sm text-primary-foreground/70">
                  {siteData.contact.address}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {siteData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {siteData.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} {siteData.companyName}. {t.footer.rights}
          </p>
          <div className="flex gap-4">
            {Object.entries(siteData.contact.socials).map(([platform, url]) => {
              const Icon = socialIcons[platform as keyof typeof socialIcons];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/50 hover:text-accent transition-colors"
                  aria-label={platform}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
