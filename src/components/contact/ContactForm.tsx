"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { useLanguage } from "@/context/LanguageContext";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const subjectKeys = ["general", "wholesale", "export", "partnership", "other"] as const;

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(t.contact.form.successTitle, {
          description: t.contact.form.successDesc,
        });
        reset();
      } else {
        toast.error(t.contact.form.errorTitle, {
          description: result.message || t.contact.form.errorDesc,
        });
      }
    } catch {
      toast.error(t.contact.form.connectionError, {
        description: t.contact.form.connectionErrorDesc,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">{t.contact.form.name} *</Label>
        <Input
          id="name"
          placeholder={t.contact.form.namePlaceholder}
          {...register("name")}
          className="bg-background"
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Email & Phone row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">{t.contact.form.email} *</Label>
          <Input
            id="email"
            type="email"
            placeholder={t.contact.form.emailPlaceholder}
            {...register("email")}
            className="bg-background"
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{t.contact.form.phone}</Label>
          <Input
            id="phone"
            type="tel"
            placeholder={t.contact.form.phonePlaceholder}
            {...register("phone")}
            className="bg-background"
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <Label htmlFor="subject">{t.contact.form.subject} *</Label>
        <Select onValueChange={(value) => setValue("subject", value)}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder={t.contact.form.subjectPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {subjectKeys.map((key) => (
              <SelectItem key={key} value={key}>
                {t.contact.subjects[key]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.subject && (
          <p className="text-sm text-destructive">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">{t.contact.form.message} *</Label>
        <Textarea
          id="message"
          placeholder={t.contact.form.messagePlaceholder}
          rows={5}
          {...register("message")}
          className="bg-background resize-none"
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold py-6"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t.contact.form.sending}
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            {t.contact.form.submit}
          </>
        )}
      </Button>
    </form>
  );
}
