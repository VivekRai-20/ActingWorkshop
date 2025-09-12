import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function to help with equal height columns
export function equalHeightCols() {
  return "flex flex-col h-full";
}

// Utility function to help with equal height cards
export function equalHeightCard() {
  return "flex flex-col h-full";
}