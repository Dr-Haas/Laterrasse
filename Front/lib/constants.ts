/**
 * Constantes du projet La Terrasse
 */

// Informations du restaurant
export const RESTAURANT_INFO = {
  name: "La Terrasse",
  slogan: "Plus qu'un kebab, un lieu de vie.",
  address: {
    street: "123 Rue de La Terrasse",
    city: "Paris",
    postalCode: "75000",
    country: "France",
  },
  contact: {
    phone: "+33 1 23 45 67 89",
    email: "contact@laterrasse.fr",
  },
  hours: {
    weekday: "11h00 - 23h00",
    weekend: "11h00 - 01h00",
  },
  social: {
    instagram: "https://instagram.com/laterrasse",
    tiktok: "https://tiktok.com/@laterrasse",
  },
}

// Palette de couleurs La Terrasse
export const COLORS = {
  blue: "#00AEEF",
  red: "#E6322D",
  yellow: "#FFD100",
  white: "#F9F9F9",
  black: "#101010",
} as const

// Navigation
export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/carte", label: "La Carte" },
  { href: "/galerie", label: "Galerie" },
  { href: "/jeu", label: "Mini-jeu" },
  { href: "/hall-of-fame", label: "Hall of Fame" },
] as const

// Citations de Mehmet (rotation quotidienne)
export const MEHMET_QUOTES = [
  "Ici, on mange bien, on rigole fort, et on revient toujours !",
  "Le secret d'un bon kebab ? L'amour et une bonne dose de sauce !",
  "Bienvenue chez vous, bienvenue à La Terrasse !",
  "Le meilleur moment de la journée ? Quand tu rentres à La Terrasse !",
  "On ne sert pas que de la nourriture, on sert du bonheur !",
  "La vie est trop courte pour manger mal !",
  "Chez nous, chaque client est un ami qui revient !",
  "Le sourire, c'est gratuit et illimité ici !",
  "Un kebab n'est pas un plat, c'est une expérience !",
  "Pourquoi aller ailleurs quand le meilleur est ici ?",
  "La qualité, c'est notre signature !",
  "Mangez comme chez vous, mais en mieux !",
  "Le bonheur se trouve entre deux tranches de pain !",
  "Ici, on ne compte pas les sourires !",
  "Chaque jour est une fête à La Terrasse !",
  "Le meilleur ingrédient ? La convivialité !",
  "On ne vend pas de la nourriture, on crée des souvenirs !",
  "Votre satisfaction est notre plus belle récompense !",
  "Bienvenue dans votre deuxième maison !",
  "À La Terrasse, on est une famille !",
  "Le goût de l'authenticité !",
  "Mangez bien, vivez mieux !",
  "Ici, tout le monde est VIP !",
  "La passion dans chaque assiette !",
  "Le kebab parfait existe, et il est ici !",
  "Venez affamés, repartez heureux !",
  "Notre secret ? On aime ce qu'on fait !",
  "La Terrasse, c'est plus qu'un resto, c'est une vibe !",
  "Ici, on rigole plus qu'on cuisine !",
  "Le meilleur moment ? Maintenant, à La Terrasse !",
  "On sert avec le cœur, pas juste avec les mains !",
] as const

// Configuration pour la galerie
export const GALLERY_CONFIG = {
  maxImageSize: 5 * 1024 * 1024, // 5MB
  allowedFormats: ["image/jpeg", "image/jpg", "image/png", "image/webp"],
  maxMessageLength: 500,
} as const

// Configuration pour le jeu
export const GAME_CONFIG = {
  topScoresCount: 5,
  difficultyLevels: {
    easy: { speed: 3, obstacleFrequency: 2000 },
    medium: { speed: 5, obstacleFrequency: 1500 },
    hard: { speed: 7, obstacleFrequency: 1000 },
  },
} as const

// Catégories pour le Hall of Fame
export const LEGEND_CATEGORIES = [
  { id: "mangeur", label: "Plus grand mangeur", icon: "🍔" },
  { id: "fidele", label: "Plus fidèle", icon: "🔁" },
  { id: "drole", label: "Plus drôle", icon: "😂" },
  { id: "ambassadeur", label: "Ambassadeur", icon: "🌟" },
  { id: "autre", label: "Autre", icon: "✨" },
] as const

// Breakpoints responsive
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1440,
} as const

// Coordonnées GPS pour Google Maps (à remplacer par les vraies coordonnées)
export const LOCATION = {
  lat: 48.8566,
  lng: 2.3522,
} as const

