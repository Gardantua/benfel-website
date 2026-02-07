"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { locales, Locale } from "@/lib/i18n";

const localeNames: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
  es: "ES",
  ar: "AR",
};

const localeFlags: Record<Locale, string> = {
  tr: "🇹🇷",
  en: "🇬🇧",
  es: "🇪🇸",
  ar: "🇸🇦",
};

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1">
      {locales.map((loc) => (
        <motion.button
          key={loc}
          onClick={() => setLocale(loc)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            locale === loc
              ? "text-accent-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {locale === loc && (
            <motion.div
              layoutId="activeLocale"
              className="absolute inset-0 bg-accent rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-1.5">
            <span>{localeFlags[loc]}</span>
            <span>{localeNames[loc]}</span>
          </span>
        </motion.button>
      ))}
    </div>
  );
}
