import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Ad Soyad en az 2 karakter olmalıdır.")
    .max(100, "Ad Soyad en fazla 100 karakter olmalıdır."),
  email: z
    .string()
    .email("Geçerli bir e-posta adresi giriniz."),
  phone: z
    .string()
    .regex(/^(\+90|0)?[0-9]{10}$/, "Geçerli bir telefon numarası giriniz.")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .min(1, "Lütfen bir konu seçiniz."),
  message: z
    .string()
    .min(10, "Mesajınız en az 10 karakter olmalıdır.")
    .max(1000, "Mesajınız en fazla 1000 karakter olmalıdır."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
