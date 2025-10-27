export interface MenuItem {
  name: string
  description?: string
  image?: string // Chemin vers l'image dans /public/menu/
  badge?: string // Ex: "🔥 POPULAIRE"
  prices: {
    label: string
    price: number
  }[]
}

export interface MenuCategory {
  [key: string]: MenuItem[]
}

export const MENU_DATA: MenuCategory = {
  sandwiches: [
    {
      name: "Pain Rond",
      description: "Le classique kebab en pain moelleux",
      image: "/menu/kebab-pain-rond.jpg",
      badge: "🔥 TOP",
      prices: [
        { label: "Seul", price: 6 },
        { label: "+ Frites", price: 7 },
        { label: "Menu complet", price: 8 },
      ],
    },
    {
      name: "Galette",
      description: "Roulé dans une galette croustillante",
      image: "/menu/kebab-galette.jpg",
      prices: [
        { label: "Seul", price: 6 },
        { label: "+ Frites", price: 7 },
        { label: "Menu complet", price: 8 },
      ],
    },
    {
      name: "Baguette",
      description: "Version française du kebab",
      image: "/menu/kebab-baguette.jpg",
      prices: [
        { label: "Seul", price: 6 },
        { label: "+ Frites", price: 7 },
        { label: "Menu complet", price: 8 },
      ],
    },
    {
      name: "Tacos",
      description: "Tacos français, grillé et généreux",
      image: "/menu/tacos.jpg",
      badge: "😋 GOURMAND",
      prices: [
        { label: "Seul", price: 7 },
        { label: "+ Frites", price: 8 },
        { label: "Menu complet", price: 9 },
      ],
    },
  ],

  burgers: [
    {
      name: "Cheeseburger",
      description: "Burger maison avec cheddar fondant",
      image: "/menu/cheeseburger.jpg",
      prices: [
        { label: "Simple", price: 8 },
        { label: "Menu simple", price: 10 },
        { label: "Double", price: 10 },
        { label: "Menu double", price: 12 },
      ],
    },
    {
      name: "Cheese Chicken",
      description: "Tendre poulet pané et fromage",
      image: "/menu/cheese-chicken.jpg",
      prices: [
        { label: "Simple", price: 8 },
        { label: "Menu simple", price: 10 },
        { label: "Double", price: 10 },
        { label: "Menu double", price: 12 },
      ],
    },
  ],

  assiettes: [
    {
      name: "Assiette 1 Viande",
      description: "Viande au choix + frites + salade",
      image: "/menu/assiette-1-viande.jpg",
      prices: [{ label: "L'assiette", price: 12 }],
    },
    {
      name: "Assiette 2-3 Viandes",
      description: "Mixez vos viandes préférées",
      image: "/menu/assiette-2-3-viandes.jpg",
      badge: "💪 COPIEUX",
      prices: [{ label: "L'assiette", price: 15 }],
    },
    {
      name: "Salade",
      description: "Tenders ou Falafel sur lit de salade",
      image: "/menu/salade.jpg",
      prices: [
        { label: "Seule", price: 7 },
        { label: "Menu", price: 8 },
      ],
    },
  ],

  box: [
    {
      name: "Box Kebab Poulet",
      description: "Kebab poulet + frites avec cheddar fondu",
      image: "/menu/box-kebab-poulet.jpg",
      badge: "🧀 CHEDDAR",
      prices: [
        { label: "Seule", price: 8 },
        { label: "Menu", price: 10 },
      ],
    },
    {
      name: "Box 15 Pièces",
      description: "4 tenders + 6 nuggets + 5 wings",
      image: "/menu/box-15-pieces.jpg",
      prices: [
        { label: "Box seule", price: 15 },
        { label: "Menu (+2 frites +2 boissons)", price: 20 },
      ],
    },
    {
      name: "Box 20 Pièces",
      description: "6 tenders + 7 nuggets + 7 wings",
      image: "/menu/box-20-pieces.jpg",
      badge: "👨‍👩‍👧‍👦 PARTAGE",
      prices: [
        { label: "Box seule", price: 17 },
        { label: "Menu (+3 frites +3 boissons)", price: 25 },
      ],
    },
    {
      name: "Menu Étudiant",
      description: "Sandwich + frites + boisson",
      image: "/menu/menu-etudiant.jpg",
      badge: "💰 BON PLAN",
      prices: [{ label: "Le menu", price: 7.5 }],
    },
    {
      name: "Menu Enfant",
      description: "4 nuggets ou petit burger + frites + Capri-Sun",
      image: "/menu/menu-enfant.jpg",
      prices: [{ label: "Le menu", price: 7 }],
    },
  ],

  accompagnements: [
    {
      name: "Frites",
      description: "Croustillantes et dorées",
      image: "/menu/frites.jpg",
      prices: [
        { label: "Petite", price: 2 },
        { label: "Moyenne", price: 3 },
        { label: "Grande", price: 4 },
      ],
    },
    {
      name: "Nuggets",
      description: "Poulet pané croustillant",
      image: "/menu/nuggets.jpg",
      prices: [
        { label: "5 pièces", price: 4 },
        { label: "7 pièces", price: 5 },
        { label: "10 pièces", price: 8 },
      ],
    },
    {
      name: "Tenders",
      description: "Filets de poulet panés",
      image: "/menu/tenders.jpg",
      prices: [
        { label: "5 pièces", price: 6 },
        { label: "7 pièces", price: 9 },
        { label: "10 pièces", price: 12 },
      ],
    },
    {
      name: "Wings",
      description: "Ailes de poulet épicées",
      image: "/menu/wings.jpg",
      prices: [
        { label: "5 pièces", price: 4 },
        { label: "7 pièces", price: 5 },
        { label: "10 pièces", price: 8 },
      ],
    },
    {
      name: "Supplément Viande",
      description: "Viande au choix en extra",
      image: "/menu/supplement-viande.jpg",
      prices: [
        { label: "Petite", price: 4 },
        { label: "Moyenne", price: 6 },
        { label: "Grande", price: 9 },
      ],
    },
  ],

  boissons: [
    {
      name: "Canettes",
      description: "Coca, Fanta, Sprite, Oasis...",
      image: "/menu/canettes.jpg",
      prices: [{ label: "La canette", price: 2 }],
    },
    {
      name: "Bouteilles",
      description: "Eau, jus, Ice Tea...",
      image: "/menu/bouteilles.jpg",
      prices: [{ label: "La bouteille", price: 2 }],
    },
    {
      name: "Energy Drinks",
      description: "Monster, Red Bull",
      image: "/menu/energy-drinks.jpg",
      prices: [{ label: "La canette", price: 3 }],
    },
    {
      name: "Café",
      description: "Expresso ou allongé",
      image: "/menu/cafe.jpg",
      prices: [{ label: "La tasse", price: 1 }],
    },
  ],
}

