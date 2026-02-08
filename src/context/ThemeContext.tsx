"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { themes, Theme } from "@/lib/themes";

interface ThemeContextType {
  theme: Theme;
  setTheme: (themeId: string) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

function applyThemeToDOM(t: Theme) {
  const root = document.documentElement;
  Object.entries(t.colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(themes[0]);

  const setTheme = useCallback((themeId: string) => {
    const t = themes.find((th) => th.id === themeId);
    if (t) {
      setThemeState(t);
      applyThemeToDOM(t);
      localStorage.setItem("kalendos-theme", themeId);
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("kalendos-theme");
    if (saved) {
      const t = themes.find((th) => th.id === saved);
      if (t) {
        setThemeState(t);
        applyThemeToDOM(t);
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
