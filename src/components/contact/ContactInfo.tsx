"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { siteData } from "@/lib/siteData";
import { useLanguage } from "@/context/LanguageContext";

export function ContactInfo() {
  const { contact } = siteData;
  const { t } = useLanguage();

  const items = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: t.contact.info.address,
      value: contact.address,
      href: contact.mapsLink,
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: t.contact.info.phone,
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: t.contact.info.email,
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground">
          {t.contact.title}
        </h2>
        <p className="mt-2 text-muted-foreground">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-xl bg-card p-5 border border-border"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors whitespace-pre-line"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {item.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
