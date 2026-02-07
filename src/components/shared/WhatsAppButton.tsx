"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/siteData";

export function WhatsAppButton() {
  // Strip spaces and special characters from phone number for WhatsApp link
  const phoneNumber = siteData.contact.phone.replace(/[\s\-\(\)]/g, "");
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:bg-[#20BA5C] transition-colors md:px-5 md:py-3"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="hidden md:inline font-semibold text-sm">
        Bize Ulaşın
      </span>
    </motion.a>
  );
}
