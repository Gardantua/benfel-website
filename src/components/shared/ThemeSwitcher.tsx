"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Check } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/lib/themes";

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[59]"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
              className="absolute bottom-16 right-0 w-[340px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-[60]"
            >
              <div className="p-4 border-b border-gray-100 bg-gray-50/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-gray-900">
                      Renk Paleti
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Siteye en uygun paleti secin
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>

              <div className="p-3 max-h-[65vh] overflow-y-auto space-y-2">
                {themes.map((t) => {
                  const isActive = theme.id === t.id;
                  return (
                    <motion.button
                      key={t.id}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => {
                        setTheme(t.id);
                      }}
                      className={`w-full text-left p-3 rounded-xl transition-all border-2 ${
                        isActive
                          ? "border-blue-500 bg-blue-50/50"
                          : "border-transparent hover:bg-gray-50 hover:border-gray-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-gray-900">
                            {t.name}
                          </span>
                          {t.badge && (
                            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">
                              {t.badge}
                            </span>
                          )}
                        </div>
                        {isActive && (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-[11px] text-gray-500 mb-2.5 leading-relaxed">
                        {t.description}
                      </p>

                      {/* Color swatches preview */}
                      <div className="flex gap-1.5">
                        <div
                          className="w-7 h-7 rounded-lg border border-gray-200 shadow-sm"
                          style={{ backgroundColor: t.colors.background }}
                          title="Zemin"
                        />
                        <div
                          className="w-7 h-7 rounded-lg shadow-sm"
                          style={{ backgroundColor: t.colors.primary }}
                          title="Ana Renk"
                        />
                        <div
                          className="w-7 h-7 rounded-lg shadow-sm"
                          style={{ backgroundColor: t.colors.accent }}
                          title="Aksiyon"
                        />
                        <div
                          className="w-7 h-7 rounded-lg shadow-sm"
                          style={{ backgroundColor: t.colors.foreground }}
                          title="Yazi"
                        />
                        <div
                          className="w-7 h-7 rounded-lg border border-gray-200 shadow-sm"
                          style={{ backgroundColor: t.colors.muted }}
                          title="Muted"
                        />
                        {/* Mini preview bar */}
                        <div className="flex-1 rounded-lg overflow-hidden border border-gray-200 shadow-sm flex">
                          <div
                            className="flex-1"
                            style={{ backgroundColor: t.colors.background }}
                          />
                          <div
                            className="w-2"
                            style={{ backgroundColor: t.colors.primary }}
                          />
                          <div
                            className="w-2"
                            style={{ backgroundColor: t.colors.accent }}
                          />
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="p-3 border-t border-gray-100 bg-gray-50/50">
                <p className="text-[10px] text-gray-400 text-center">
                  Bu ozellik gecici olarak eklenmistir
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 via-purple-500 to-cyan-500 text-white shadow-lg hover:shadow-xl transition-shadow z-[60]"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="palette"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Palette className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-purple-400/20 pointer-events-none" />
      </motion.button>
    </div>
  );
}
