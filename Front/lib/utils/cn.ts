import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utilitaire pour fusionner les classes Tailwind de manière intelligente
 * Combine clsx et tailwind-merge pour éviter les conflits de classes
 * 
 * @example
 * cn("px-4 py-2", "px-6") // retourne "px-6 py-2"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

