export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
} as const;

export const SCROLL_THRESHOLD = 400;

export const CONTACT_SUBJECTS = [
  { value: "genel", label: "Genel Bilgi" },
  { value: "isbirligi", label: "İş Birliği" },
  { value: "ihracat", label: "İhracat" },
  { value: "kariyer", label: "Kariyer" },
  { value: "sikayet", label: "Şikayet / Öneri" },
] as const;
