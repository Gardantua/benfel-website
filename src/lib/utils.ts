import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "bg-color": [
        { bg: ["primary", "primary-light", "accent", "accent-light", "muted", "card", "popover", "secondary", "destructive", "background", "surface", "success"] },
      ],
      "text-color": [
        { text: ["primary", "primary-foreground", "accent", "accent-foreground", "muted-foreground", "card-foreground", "popover-foreground", "secondary-foreground", "foreground", "destructive"] },
      ],
      "border-color": [
        { border: ["border", "input", "ring", "primary", "accent", "destructive"] },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
