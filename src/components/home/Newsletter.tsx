"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <section className="bg-accent py-16 lg:py-20">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            {/* Left - Text */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-foreground/10">
                  <Mail className="h-5 w-5 text-accent-foreground" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest text-accent-foreground/70">
                  {t.newsletter.eyebrow}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-accent-foreground sm:text-3xl">
                {t.newsletter.title}
              </h3>
              <p className="mt-2 text-accent-foreground/70 max-w-md">
                {t.newsletter.subtitle}
              </p>
            </div>

            {/* Right - Form */}
            <div className="w-full max-w-md">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-accent-foreground/10"
                >
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-accent-foreground">
                      {t.newsletter.thanks}
                    </p>
                    <p className="text-sm text-accent-foreground/70">
                      {t.newsletter.success}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder={t.newsletter.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/50 focus:border-accent-foreground"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-6"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Send className="h-4 w-4" />
                      </motion.div>
                    ) : (
                      <>
                        <span className="hidden sm:inline mr-2">{t.newsletter.subscribe}</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
