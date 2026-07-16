import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Prefix public assets with the deploy base path so images resolve when the
// site is hosted under a sub-path (e.g. GitHub Pages project sites).
export function asset(path: string) {
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}
